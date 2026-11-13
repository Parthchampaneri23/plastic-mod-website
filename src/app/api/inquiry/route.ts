import { NextResponse } from 'next/server';
import {
  validateFullName,
  validateEmail,
  validatePhone,
  validateProjectDetails,
  sanitizeInput,
} from '@/lib/validations';
import { connectDB } from '@/lib/mongodb';
import { Inquiry } from '@/models/Inquiry';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const fullName = body.fullName || body.name || '';
    const email = body.email || '';
    const phone = body.phone || body.mobileNumber || '';
    const moldCategory =
      body.moldCategory ||
      body.category ||
      body.subject ||
      body.requirement ||
      'PET Preform & Jar Mold';
    const projectDetails = body.projectDetails || body.message || '';

    // Run Server-side validations
    const nameError = validateFullName(fullName || '');
    const emailError = validateEmail(email || '');
    const phoneError = phone ? validatePhone(phone) : null;
    const detailsError = validateProjectDetails(projectDetails || '');

    const errors: Record<string, string> = {};
    if (nameError) errors.fullName = nameError;
    if (emailError) errors.email = emailError;
    if (phoneError) errors.phone = phoneError;
    if (detailsError) errors.projectDetails = detailsError;

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: 'Input validation failed',
          errors,
        },
        { status: 400 }
      );
    }

    // Sanitize values
    const sanitizedData = {
      fullName: sanitizeInput(fullName),
      email: sanitizeInput(email).toLowerCase(),
      phone: sanitizeInput(phone || ''),
      companyName: sanitizeInput(body.companyName || body.company || ''),
      country: sanitizeInput(body.country || ''),
      requirement: sanitizeInput(body.requirement || ''),
      product: sanitizeInput(body.product || ''),
      quantity: sanitizeInput(body.quantity || ''),
      subject: sanitizeInput(body.subject || ''),
      moldCategory: sanitizeInput(moldCategory || 'PET Preform & Jar Mold'),
      projectDetails: sanitizeInput(projectDetails || ''),
      source: sanitizeInput(body.source || 'Home Page - Request Technical Quotation'),
      status: 'pending' as const,
    };

    let directSaveSuccess = false;
    let directSaveError: any = null;

    // 1. Direct MongoDB save from website backend
    try {
      await connectDB();
      await Inquiry.create(sanitizedData);
      directSaveSuccess = true;
    } catch (dbErr) {
      directSaveError = dbErr;
      console.error('Direct MongoDB save from website encountered error:', dbErr);
    }

    // 2. Also forward to Admin CMS API endpoint if reachable (with tight timeout to prevent slow UX)
    let adminForwardSuccess = false;
    try {
      const adminUrl =
        process.env.ADMIN_INQUIRIES_URL ||
        process.env.ADMIN_API_URL ||
        process.env.NEXT_PUBLIC_ADMIN_INQUIRIES_URL ||
        'http://localhost:3001/api/inquiries';

      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 1500);

      const forwardRes = await fetch(adminUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(sanitizedData),
        signal: controller.signal,
      });
      clearTimeout(timeout);

      if (forwardRes.ok) {
        adminForwardSuccess = true;
      }
    } catch (forwardErr) {
      console.warn('Forwarding inquiry to admin API encountered error:', forwardErr);
    }

    if (!directSaveSuccess && !adminForwardSuccess) {
      console.error('Failed to save inquiry to MongoDB and failed to forward to Admin API');
      return NextResponse.json(
        {
          success: false,
          message: 'Unable to save inquiry at this moment. Please try again later or contact us directly.',
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Inquiry received successfully',
      data: sanitizedData,
    });
  } catch (error: any) {
    console.error('Error handling inquiry submission:', error);
    return NextResponse.json(
      { success: false, message: 'Server error processing inquiry' },
      { status: 500 }
    );
  }
}
