import { NextResponse } from 'next/server';
import {
  validateFullName,
  validateEmail,
  validatePhone,
  validateProjectDetails,
  sanitizeInput,
} from '@/lib/validations';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, moldCategory, projectDetails } = body;

    // Run Server-side validations
    const nameError = validateFullName(fullName || '');
    const emailError = validateEmail(email || '');
    const phoneError = validatePhone(phone || '');
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
      moldCategory: sanitizeInput(moldCategory || 'PET Preform & Jar Mold'),
      projectDetails: sanitizeInput(projectDetails || ''),
      submittedAt: new Date().toISOString(),
    };

    // Forward / record to admin backend if reachable
    try {
      const adminUrl = process.env.ADMIN_API_URL || 'http://localhost:3001/api/inquiries';
      await fetch(adminUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(sanitizedData),
      });
    } catch {
      // In local dev without admin backend or if offline, continue gracefully
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

