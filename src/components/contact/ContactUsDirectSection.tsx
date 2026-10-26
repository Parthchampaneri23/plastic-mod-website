"use client";

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  ExternalLink,
  MessageCircle,
  Building2,
  Calendar,
  AlertCircle
} from "lucide-react";

export const ContactUsDirectSection: React.FC = () => {
  const [msgSent, setMsgSent] = useState<boolean>(false);
  const [hasAttemptedSubmit, setHasAttemptedSubmit] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: ""
  });

  const validateField = (value: string) => value.trim().length > 0;
  const validateEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

  const isNameInvalid = hasAttemptedSubmit && !validateField(formData.fullName);
  const isEmailInvalid = hasAttemptedSubmit && (!validateField(formData.email) || !validateEmail(formData.email));
  const isSubjectInvalid = hasAttemptedSubmit && !validateField(formData.subject);
  const isMessageInvalid = hasAttemptedSubmit && !validateField(formData.message);

  const handleQuickContact = (e: React.FormEvent) => {
    e.preventDefault();
    setHasAttemptedSubmit(true);

    const hasErrors =
      !validateField(formData.fullName) ||
      !validateField(formData.email) ||
      !validateEmail(formData.email) ||
      !validateField(formData.subject) ||
      !validateField(formData.message);

    if (hasErrors) {
      const firstInvalid = document.querySelector("#contact-details-section .border-rose-500, #contact-details-section input:invalid");
      if (firstInvalid) {
        firstInvalid.scrollIntoView({ behavior: "smooth", block: "center" });
        (firstInvalid as HTMLElement).focus();
      }
      return;
    }

    setMsgSent(true);
    setHasAttemptedSubmit(false);
    setTimeout(() => setMsgSent(false), 5000);
  };

  return (
    <section id="contact-details-section" className="py-13 sm:py-13 bg-white scroll-mt-24 sm:scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-[#0056b3] text-xs font-mono font-bold uppercase tracking-wider">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff6b00] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#ff6b00]"></span>
            </span>
            <span>REACH OUR FACILITY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight leading-[1.15]">
            Corporate Campus &amp; <span className="text-[#0056b3]">Contact Information</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Visit our 15,000 m² high-precision toolroom and corporate engineering offices in Gujarat, or reach out to our client communication desk via phone, email, or direct WhatsApp.
          </p>
        </div>

        {/* 4 Primary Contact Channel Cards with Premium Interactive Hover Effects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Card 1: Company Address */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-400 hover:bg-white hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between space-y-4 group">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#0056b3] group-hover:bg-[#0056b3] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-xs group-hover:scale-105">
                <MapPin className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#0056b3] transition-colors">Plant &amp; Toolroom Campus</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Plot No. 142–148, Precision Mould Park, Phase-IV GIDC, Vatva, Ahmedabad, Gujarat 382445, India.
              </p>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Precision+Mould+Park+Phase+IV+GIDC+Vatva+Gujarat+India"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0056b3] group-hover:text-[#ff6b00] transition-colors pt-2 border-t border-slate-100"
            >
              <span>View On Google Map</span>
              <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Card 2: Phone Number */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm hover:shadow-xl hover:border-orange-400 hover:bg-white hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between space-y-4 group">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-orange-100 text-[#ff6b00] group-hover:bg-[#ff6b00] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-xs group-hover:scale-105">
                <Phone className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#ff6b00] transition-colors">Telephone Lines</h3>
              <div className="space-y-1 text-xs text-slate-600">
                <div><span className="font-semibold text-slate-800">Direct Sales:</span> +91 77847 58347</div>
                <div><span className="font-semibold text-slate-800">Toolroom Desk:</span> +91 79 2583 4901</div>
                <div><span className="font-semibold text-slate-800">Support Desk:</span> +91 79 2583 4902</div>
              </div>
            </div>
            <a
              href="tel:+917784758347"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#ff6b00] group-hover:text-orange-700 transition-colors pt-2 border-t border-slate-100"
            >
              <span>Call Technical Line</span>
              <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Card 3: Official Email */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-400 hover:bg-white hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between space-y-4 group">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#0056b3] group-hover:bg-[#0056b3] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-xs group-hover:scale-105">
                <Mail className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#0056b3] transition-colors">Corporate &amp; RFQ Email</h3>
              <div className="space-y-1 text-xs text-slate-600">
                <div><span className="font-semibold text-slate-800">Quotes:</span> sales@patelmould.com</div>
                <div><span className="font-semibold text-slate-800">Engineering:</span> technical@patelmould.com</div>
                <div><span className="font-semibold text-slate-800">Exports:</span> export@patelmould.com</div>
              </div>
            </div>
            <a
              href="mailto:sales@patelmould.com"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0056b3] group-hover:text-[#ff6b00] transition-colors pt-2 border-t border-slate-100"
            >
              <span>Send An Email</span>
              <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Card 4: WhatsApp & Hours */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm hover:shadow-xl hover:border-emerald-400 hover:bg-white hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between space-y-4 group">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-xs group-hover:scale-105">
                <MessageCircle className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">WhatsApp &amp; Working Hours</h3>
              <div className="space-y-1 text-xs text-slate-600">
                <div><span className="font-semibold text-slate-800">WhatsApp:</span> +91 77847 58347</div>
                <div><span className="font-semibold text-slate-800">Mon – Sat:</span> 8:30 AM – 7:30 PM IST</div>
                <div><span className="font-semibold text-slate-800">Sunday:</span> Emergency On-Call Support</div>
              </div>
            </div>
            <a
              href="https://wa.me/917784758347?text=Hello%20Patel%20Mould%20Industries,%20I%20have%20a%20tooling%20inquiry"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 group-hover:text-emerald-700 transition-colors pt-2 border-t border-slate-100"
            >
              <span>Instant WhatsApp Chat</span>
              <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

        </div>

        {/* 2-Column Split: Google Map Interactive Embed (Left) & General Contact Form (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* Left Column (7 cols): Google Map Embed & Campus Overview */}
          <div className="lg:col-span-7 space-y-5">
            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden p-3 sm:p-4 space-y-4">
              {/* Map Iframe */}
              <div className="relative w-full h-[360px] sm:h-[420px] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-inner">
                <iframe
                  title="Patel Mould Industries - Precision Mould Park, Phase-IV GIDC, Gujarat, India"
                  src="https://maps.google.com/maps?q=Precision+Mould+Park,+Phase-IV+GIDC,+Vatva,+Gujarat,+India&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full object-cover filter contrast-105"
                />
              </div>

              {/* Campus Address Highlight Bar */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2.5">
                  <Building2 className="w-4 h-4 text-[#0056b3] shrink-0" />
                  <span className="text-slate-700 font-medium">
                    Precision Mould Park, Phase-IV GIDC, Gujarat, India.
                  </span>
                </div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Precision+Mould+Park+Phase+IV+GIDC+Vatva+Gujarat+India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-bold text-[#0056b3] hover:text-[#ff6b00] hover:underline shrink-0 transition-colors"
                >
                  <span>Open Direct in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Social Media Channels Strip */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-mono">
                  Connect on Social Media
                </h4>
                <p className="text-xs text-slate-500">Follow toolroom updates, FAT trials &amp; factory announcements</p>
              </div>

              <div className="flex items-center space-x-2.5">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-white hover:bg-[#0077b5] hover:border-[#0077b5] transition-all shadow-xs"
                  title="LinkedIn"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-white hover:bg-[#1877f2] hover:border-[#1877f2] transition-all shadow-xs"
                  title="Facebook"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7.5v-3H10V9.69c0-2.47 1.47-3.83 3.72-3.83 1.08 0 2.21.19 2.21.19v2.43h-1.25c-1.23 0-1.61.76-1.61 1.54V12h2.74l-.44 3h-2.3v6.8c4.56-.93 8-4.96 8-9.8z" />
                  </svg>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-white hover:bg-[#ff0000] hover:border-[#ff0000] transition-all shadow-xs"
                  title="YouTube"
                  aria-label="YouTube"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-white hover:bg-[#e4405f] hover:border-[#e4405f] transition-all shadow-xs"
                  title="Instagram"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): General Inquiries Direct Contact Form */}
          <div className="lg:col-span-5 bg-white rounded-3xl border border-slate-200 shadow-md p-6 sm:p-8 space-y-6">
            <div className="space-y-1.5 pb-4 border-b border-slate-100">
              <span className="text-[11px] font-mono font-bold text-[#0056b3] uppercase tracking-wider">
                Direct Message Desk
              </span>
              <h3 className="text-xl font-bold text-slate-900">Send Us a Direct Message</h3>
              <p className="text-xs text-slate-500">
                For factory visit requests, distributor partnerships, or administrative communications.
              </p>
            </div>

            {msgSent ? (
              <div className="py-8 px-6 bg-blue-50/70 border border-blue-200/90 rounded-2xl text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-14 h-14 rounded-full bg-white border border-blue-200 text-[#0056b3] flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-8 h-8 text-[#ff6b00]" />
                </div>
                
                <div className="space-y-1">
                  <h4 className="text-xl font-bold text-slate-900">Thank You, {formData.fullName || "Valued Visitor"}!</h4>
                  <p className="text-xs text-slate-600 leading-relaxed max-w-sm mx-auto">
                    Your message regarding <strong className="text-slate-800 font-semibold">{formData.subject || "General Inquiry"}</strong> has been securely delivered to our plant coordination desk in Gujarat.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-600 space-y-1 text-left">
                  <div className="flex justify-between">
                    <span className="font-semibold text-slate-700">Inquiry Status:</span>
                    <span className="text-emerald-600 font-bold">● Received &amp; Queued</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-slate-700">Estimated Response:</span>
                    <span className="text-slate-800 font-medium">Within 4 to 8 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-slate-700">Direct Support:</span>
                    <span className="text-[#0056b3] font-semibold">+91 77847 58347</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setMsgSent(false);
                    setFormData({ fullName: "", email: "", subject: "", message: "" });
                  }}
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-[#0056b3] hover:bg-blue-800 text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleQuickContact} className="space-y-4">
                <div className="space-y-1 scroll-mt-36">
                  <label className="block text-xs font-bold text-slate-700">Full Name *</label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Your Name"
                    className={`w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm text-slate-900 transition-all scroll-mt-36 focus:outline-none ${
                      isNameInvalid
                        ? "bg-rose-50/70 border-2 border-rose-500 focus:border-rose-600 focus:ring-2 focus:ring-rose-500/20"
                        : "bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0056b3] focus:ring-1 focus:ring-[#0056b3]"
                    }`}
                  />
                  {isNameInvalid && (
                    <p className="text-[11px] font-semibold text-rose-600 flex items-center gap-1 mt-1 animate-in fade-in">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>Please enter your name</span>
                    </p>
                  )}
                </div>

                <div className="space-y-1 scroll-mt-36">
                  <label className="block text-xs font-bold text-slate-700">Email Address *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className={`w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm text-slate-900 transition-all scroll-mt-36 focus:outline-none ${
                      isEmailInvalid
                        ? "bg-rose-50/70 border-2 border-rose-500 focus:border-rose-600 focus:ring-2 focus:ring-rose-500/20"
                        : "bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0056b3] focus:ring-1 focus:ring-[#0056b3]"
                    }`}
                  />
                  {isEmailInvalid && (
                    <p className="text-[11px] font-semibold text-rose-600 flex items-center gap-1 mt-1 animate-in fade-in">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>Please enter a valid email address</span>
                    </p>
                  )}
                </div>

                <div className="space-y-1 scroll-mt-36">
                  <label className="block text-xs font-bold text-slate-700">Subject / Purpose *</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Factory Visit / Partnership / General"
                    className={`w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm text-slate-900 transition-all scroll-mt-36 focus:outline-none ${
                      isSubjectInvalid
                        ? "bg-rose-50/70 border-2 border-rose-500 focus:border-rose-600 focus:ring-2 focus:ring-rose-500/20"
                        : "bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0056b3] focus:ring-1 focus:ring-[#0056b3]"
                    }`}
                  />
                  {isSubjectInvalid && (
                    <p className="text-[11px] font-semibold text-rose-600 flex items-center gap-1 mt-1 animate-in fade-in">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>Please enter a subject or purpose</span>
                    </p>
                  )}
                </div>

                <div className="space-y-1 scroll-mt-36">
                  <label className="block text-xs font-bold text-slate-700">Your Message *</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Type your message here..."
                    className={`w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm text-slate-900 transition-all scroll-mt-36 focus:outline-none ${
                      isMessageInvalid
                        ? "bg-rose-50/70 border-2 border-rose-500 focus:border-rose-600 focus:ring-2 focus:ring-rose-500/20"
                        : "bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0056b3] focus:ring-1 focus:ring-[#0056b3]"
                    }`}
                  />
                  {isMessageInvalid && (
                    <p className="text-[11px] font-semibold text-rose-600 flex items-center gap-1 mt-1 animate-in fade-in">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>Please type your message</span>
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 bg-[#ff6b00] hover:bg-orange-600 text-white font-semibold text-xs rounded-xl shadow-md uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Direct Message</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
