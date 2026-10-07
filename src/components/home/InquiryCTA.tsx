'use client';

import React, { useState } from 'react';
import { Button } from '../Button';
import {
  Send,
  Phone,
  Mail,
  CheckCircle2,
  FileText
} from 'lucide-react';

export const InquiryCTA: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="inquiry-section" className="py-13 bg-slate-50 relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="bg-gradient-to-br from-[#0b1f3a] via-[#003d80] to-[#0056b3] rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden text-white">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#ff6b00] bg-white/10 border border-white/20">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00] animate-pulse"></span>
                Rapid 24-Hour Quote Turnaround
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-white">
                Have a Mold Requirement?
              </h2>

              <p className="text-base text-slate-200 leading-relaxed font-normal">
                Connect with our senior tooling engineers today. Send us your 2D/3D container drawings or preform specs for a free DFM review and detailed quote within 24 hours.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center space-x-3 text-sm text-slate-100 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-[#ff6b00] shrink-0" />
                  <span>Free Design for Manufacturability (DFM) Assessment</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-slate-100 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-[#ff6b00] shrink-0" />
                  <span>Guaranteed Mold Cycle Time Estimate</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-slate-100 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-[#ff6b00] shrink-0" />
                  <span>Strict Non-Disclosure Agreement (NDA) Protection</span>
                </div>
              </div>

              {/* Contact Mini Details */}
              <div className="pt-6 border-t border-white/15 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-semibold">
                <div className="flex items-center space-x-3 text-slate-200">
                  <Phone className="w-4 h-4 text-[#ff6b00]" />
                  <span>91+ 7784758347</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-200">
                  <Mail className="w-4 h-4 text-[#ff6b00]" />
                  <span>quotes@plastic-mold.com</span>
                </div>
              </div>
            </div>

            {/* Right Quote Form - Clean White Card */}
            <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-2xl text-slate-900">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#0056b3]" /> Request Technical Quotation
              </h3>

              {submitted ? (
                <div className="p-6 bg-blue-50 border border-blue-200 rounded-xl text-center space-y-3 animate-in fade-in">
                  <CheckCircle2 className="w-12 h-12 text-[#0056b3] mx-auto" />
                  <div className="text-lg font-bold text-slate-900">Inquiry Received Successfully!</div>
                  <p className="text-xs text-slate-600">
                    Our engineering team is reviewing your details and will respond within 24 business hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-none focus:border-[#0056b3] focus:ring-1 focus:ring-[#0056b3]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Company Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="john@company.com"
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-none focus:border-[#0056b3] focus:ring-1 focus:ring-[#0056b3]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-none focus:border-[#0056b3] focus:ring-1 focus:ring-[#0056b3]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Mold Category *</label>
                      <select className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-none focus:border-[#0056b3] focus:ring-1 focus:ring-[#0056b3]">
                        <option>PET Preform & Jar Mold</option>
                        <option>ISBM Mold (Single-Stage)</option>
                        <option>Extrusion Blow (EBM) Mold</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Project Details & Requirements</label>
                    <textarea
                      rows={3}
                      placeholder="Specify container size, cavitation count, resin, target cycle time, or machine model..."
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-none focus:border-[#0056b3] focus:ring-1 focus:ring-[#0056b3]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-6 bg-gradient-to-r from-[#ff6b00] via-[#ff7c1a] to-[#e56000] hover:from-[#e56000] hover:to-[#cc5200] text-white font-semibold text-base rounded-2xl shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 flex items-center justify-center gap-3 group cursor-pointer border border-orange-400/40 relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-2.5">
                      <span>Request a Quote / Send Inquiry</span>
                      <Send className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5 group-hover:-translate-y-0.5" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
