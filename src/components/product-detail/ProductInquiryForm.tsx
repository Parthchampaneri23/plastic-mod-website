'use client';

import React, { useState } from 'react';
import { Product } from '@/data/products';
import { AlertCircle, CheckCircle2 } from 'lucide-react';
import {
  validateFullName,
  validateEmail,
  validatePhone,
  validateProjectDetails,
  sanitizeInput
} from '@/lib/validations';

interface ProductInquiryFormProps {
  product: Product;
}

interface ProductInquiryFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  quantity: string;
  message: string;
}

interface ProductInquiryErrors {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  message?: string;
}

export default function ProductInquiryForm({ product }: ProductInquiryFormProps) {
  const [formData, setFormData] = useState<ProductInquiryFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    quantity: 'Custom',
    message: `Hello, I am interested in getting a technical quote and cavity specs for ${product.name}.`,
  });

  const [errors, setErrors] = useState<ProductInquiryErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const validate = (data: ProductInquiryFormData): ProductInquiryErrors => {
    const errs: ProductInquiryErrors = {};

    const nameErr = validateFullName(data.name);
    if (nameErr) errs.name = nameErr;

    const emailErr = validateEmail(data.email);
    if (emailErr) errs.email = emailErr;

    const phoneErr = validatePhone(data.phone, true); // Required field
    if (phoneErr) errs.phone = phoneErr;

    const messageErr = validateProjectDetails(data.message);
    if (messageErr) errs.message = messageErr;

    return errs;
  };

  const handleBlur = (field: keyof ProductInquiryFormData) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const currentErrors = validate(formData);
    setErrors((prev) => ({
      ...prev,
      [field]: currentErrors[field as keyof ProductInquiryErrors],
    }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const updated = { ...formData, [name]: value };
    setFormData(updated);

    if (touched[name]) {
      const currentErrors = validate(updated);
      setErrors((prev) => ({
        ...prev,
        [name]: currentErrors[name as keyof ProductInquiryErrors],
      }));
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      quantity: 'Custom',
      message: '',
    });
    setTouched({});
    setErrors({});
    setServerError(null);
    setSubmitted(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    setTouched({
      name: true,
      email: true,
      phone: true,
      message: true,
    });

    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.name,
          email: formData.email,
          phone: formData.phone,
          moldCategory: product.category || 'Mould Inquiry',
          projectDetails: formData.message,
        }),
      });

      const resData = await res.json();

      if (!res.ok || !resData.success) {
        if (resData.errors) {
          const mapped: ProductInquiryErrors = {};
          if (resData.errors.fullName) mapped.name = resData.errors.fullName;
          if (resData.errors.email) mapped.email = resData.errors.email;
          if (resData.errors.phone) mapped.phone = resData.errors.phone;
          if (resData.errors.projectDetails) mapped.message = resData.errors.projectDetails;
          setErrors(mapped);
        } else {
          setServerError(resData.message || 'Submission failed. Please check your details.');
        }
        setIsSubmitting(false);
        return;
      }

      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        quantity: 'Custom',
        message: '',
      });
      setTouched({});
      setErrors({});
    } catch {
      // Fallback
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        quantity: 'Custom',
        message: '',
      });
      setTouched({});
      setErrors({});
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="product-inquiry" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
      <div className="mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/90 text-[#0056b3] text-xs font-bold uppercase tracking-wider mb-2">
          <span className="w-2 h-2 rounded-full bg-[#ff6b00]"></span>
          DIRECT INQUIRY
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
          Inquire About {product.name}
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-1 font-normal">
          Fill out the form below and our engineering team will get back to you with custom cavity configurations and pricing.
        </p>
      </div>

      {serverError && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
          <span>{serverError}</span>
        </div>
      )}

      {submitted ? (
        <div className="bg-blue-50/80 border border-blue-200 rounded-xl p-6 text-center animate-in fade-in">
          <div className="w-12 h-12 rounded-full bg-[#0056b3] text-white flex items-center justify-center mx-auto mb-3">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h4 className="text-lg font-bold text-slate-900 mb-1">Inquiry Submitted Successfully!</h4>
          <p className="text-xs sm:text-sm text-slate-600 mb-4">
            Thank you for reaching out regarding <span className="font-bold text-slate-800">{product.name}</span>. Our technical team will review your inquiry and respond within 24 hours.
          </p>
          <button
            type="button"
            onClick={resetForm}
            className="text-xs font-semibold text-[#0056b3] hover:underline cursor-pointer"
          >
            Submit Another Inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="inquiry-product-name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                id="inquiry-product-name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                onBlur={() => handleBlur('name')}
                placeholder="John Doe"
                className={`w-full px-3.5 py-2.5 bg-slate-50 border rounded-lg text-sm text-slate-900 transition-colors focus:outline-none ${
                  touched.name && errors.name
                    ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500 bg-red-50/20'
                    : 'border-slate-200 focus:ring-2 focus:ring-[#0056b3] focus:bg-white'
                }`}
              />
              {touched.name && errors.name && (
                <p className="mt-1 text-xs text-red-600 flex items-center gap-1 font-medium">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errors.name}</span>
                </p>
              )}
            </div>

            <div>
              <label htmlFor="inquiry-product-email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Corporate Email <span className="text-red-500">*</span>
              </label>
              <input
                id="inquiry-product-email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={() => handleBlur('email')}
                placeholder="john@company.com"
                className={`w-full px-3.5 py-2.5 bg-slate-50 border rounded-lg text-sm text-slate-900 transition-colors focus:outline-none ${
                  touched.email && errors.email
                    ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500 bg-red-50/20'
                    : 'border-slate-200 focus:ring-2 focus:ring-[#0056b3] focus:bg-white'
                }`}
              />
              {touched.email && errors.email && (
                <p className="mt-1 text-xs text-red-600 flex items-center gap-1 font-medium">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errors.email}</span>
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="inquiry-product-phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Phone / WhatsApp <span className="text-red-500">*</span>
              </label>
              <input
                id="inquiry-product-phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                onBlur={() => handleBlur('phone')}
                placeholder="+91 98765 43210"
                className={`w-full px-3.5 py-2.5 bg-slate-50 border rounded-lg text-sm text-slate-900 transition-colors focus:outline-none ${
                  touched.phone && errors.phone
                    ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500 bg-red-50/20'
                    : 'border-slate-200 focus:ring-2 focus:ring-[#0056b3] focus:bg-white'
                }`}
              />
              {touched.phone && errors.phone && (
                <p className="mt-1 text-xs text-red-600 flex items-center gap-1 font-medium">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errors.phone}</span>
                </p>
              )}
            </div>

            <div>
              <label htmlFor="inquiry-product-company" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Company Name
              </label>
              <input
                id="inquiry-product-company"
                name="company"
                type="text"
                value={formData.company}
                onChange={handleChange}
                placeholder="Packaging Industries Ltd"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0056b3] focus:bg-white"
              />
            </div>
          </div>

          <div>
            <label htmlFor="inquiry-product-message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Requirements / Message
            </label>
            <textarea
              id="inquiry-product-message"
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              onBlur={() => handleBlur('message')}
              className={`w-full px-3.5 py-2.5 bg-slate-50 border rounded-lg text-sm text-slate-900 transition-colors focus:outline-none ${
                touched.message && errors.message
                  ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500 bg-red-50/20'
                  : 'border-slate-200 focus:ring-2 focus:ring-[#0056b3] focus:bg-white'
              }`}
            />
            {touched.message && errors.message && (
              <p className="mt-1 text-xs text-red-600 flex items-center gap-1 font-medium">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.message}</span>
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto px-8 py-3 bg-[#0056b3] hover:bg-blue-800 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold rounded-lg shadow-sm transition-colors text-sm cursor-pointer"
          >
            {isSubmitting ? 'Validating...' : 'Submit Technical Inquiry →'}
          </button>
        </form>
      )}
    </div>
  );
}
