"use client";

import React, { useState } from "react";
import {
  FileText,
  Send,
  CheckCircle2,
  UploadCloud,
  FileCheck,
  X,
  HelpCircle,
  Building,
  User,
  Mail,
  Phone,
  Globe,
  Layers,
  Box,
  Hash,
  MessageSquare
} from "lucide-react";
import { PRODUCT_CATEGORIES } from "@/data/content";

const PRODUCTS_BY_CATEGORY: Record<string, string[]> = {
  "PET Preform & Jar Mold": [
    "PET Preform Mold (16 - 96 Cavity)",
    "PET Wide-Mouth Jar Mold",
    "High-Cavitation Valve Gate Mold",
    "PCO 1881 / 1810 Beverage Preform Mold",
    "Oil & Hot-Fill Bottle Preform Mold"
  ],
  "ISBM Mold (Single-Stage)": [
    "Pharmaceutical Syrup Bottle ISBM Mold",
    "Personal Care & Cosmetic ISBM Mold",
    "Liquor & Miniature ISBM Mold",
    "Nissei ASB Compatible Tooling",
    "Aoki Machine Compatible Tooling"
  ],
  "Extrusion Blow (EBM) Mold": [
    "5L - 25L Chemical Jerry Can Mold",
    "HDPE Lubricant & Motor Oil Bottle Mold",
    "Agrochemical & Pesticide Container Mold",
    "FMCG Household Cleaning Bottle Mold",
    "Custom Beryllium-Copper Pinch-Off Mold"
  ]
};

export const QuoteInquiryFormSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("PET Preform & Jar Mold");
  const [selectedProduct, setSelectedProduct] = useState<string>("PET Preform Mold (16 - 96 Cavity)");
  const [fileName, setFileName] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    mobileNumber: "",
    country: "India",
    requirement: "New Tooling Development",
    quantity: "1 Set",
    message: ""
  });

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    const available = PRODUCTS_BY_CATEGORY[cat];
    if (available && available.length > 0) {
      setSelectedProduct(available[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <section id="inquiry-form-section" className="py-13 sm:py-13 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-[#0056b3] text-xs font-mono font-bold uppercase tracking-wider">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff6b00] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#ff6b00]"></span>
            </span>
            <span>INQUIRY &amp; QUOTE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight leading-[1.15]">
            Inquiry &amp; <span className="text-[#0056b3]">Request a Quote</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Fill out the technical inquiry form below with your tooling parameters and CAD component drawings. Our engineering division will analyze your requirements and issue a comprehensive DFM quotation within 24 business hours.
          </p>
        </div>

        {/* Main Form Container - Premium Elevated White Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden p-6 sm:p-10 lg:p-12">

          {isSubmitted ? (
            <div className="py-13 text-center max-w-lg mx-auto space-y-5 animate-in fade-in duration-300">
              <div className="w-16 h-16 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center mx-auto text-[#0056b3] shadow-sm">
                <CheckCircle2 className="w-9 h-9 text-[#ff6b00]" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-slate-900">
                  Technical Quote Request Received!
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Thank you, <strong className="text-slate-900">{formData.name || "Valued Client"}</strong>. Your mold specification for{" "}
                  <strong className="text-[#0056b3]">{selectedProduct}</strong> has been assigned to our senior toolroom engineering team in Gujarat.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1 text-left">
                <div><span className="font-semibold text-slate-800">Assigned Reference:</span> PM-RFQ-{Math.floor(100000 + Math.random() * 900000)}</div>
                <div><span className="font-semibold text-slate-800">Response Window:</span> Under 24 Business Hours</div>
                <div><span className="font-semibold text-slate-800">Direct Engineering Line:</span> +91 7784758347</div>
              </div>

              <button
                type="button"
                onClick={() => {
                  setIsSubmitted(false);
                  setFileName(null);
                }}
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-xl bg-[#0056b3] hover:bg-blue-800 text-white text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                Submit Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">

              {/* Group 1: Contact & Company Profile */}
              <div>
                <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider pb-3 mb-4 border-b border-slate-100 flex items-center gap-2">
                  <User className="w-3.5 h-3.5 text-[#ff6b00]" />
                  <span>1. Contact &amp; Company Details</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-700">
                      Your Full Name <span className="text-[#ff6b00]">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rajesh Sharma"
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-[#0056b3] focus:ring-2 focus:ring-[#0056b3]/10 transition-all font-sans"
                      />
                    </div>
                  </div>

                  {/* Company Name */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-700">
                      Company Name <span className="text-[#ff6b00]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      placeholder="e.g. Apex Packaging Ltd."
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-[#0056b3] focus:ring-2 focus:ring-[#0056b3]/10 transition-all font-sans"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-700">
                      Official Email <span className="text-[#ff6b00]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. procurement@company.com"
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-[#0056b3] focus:ring-2 focus:ring-[#0056b3]/10 transition-all font-sans"
                    />
                  </div>

                  {/* Mobile Number */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-700">
                      Mobile / WhatsApp Number <span className="text-[#ff6b00]">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.mobileNumber}
                      onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-[#0056b3] focus:ring-2 focus:ring-[#0056b3]/10 transition-all font-sans"
                    />
                  </div>

                  {/* Country */}
                  <div className="space-y-1.5 sm:col-span-2 lg:col-span-2">
                    <label className="block text-xs font-bold text-slate-700">
                      Country / Region <span className="text-[#ff6b00]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      placeholder="India / UAE / Kenya / USA / Germany..."
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-[#0056b3] focus:ring-2 focus:ring-[#0056b3]/10 transition-all font-sans"
                    />
                  </div>
                </div>
              </div>

              {/* Group 2: Tooling & Mould Selection */}
              <div>
                <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider pb-3 mb-4 border-b border-slate-100 flex items-center gap-2">
                  <Box className="w-3.5 h-3.5 text-[#ff6b00]" />
                  <span>2. Product &amp; Tooling Specifications</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  {/* Product Category */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-700">
                      Product Category <span className="text-[#ff6b00]">*</span>
                    </label>
                    <select
                      value={selectedCategory}
                      onChange={(e) => handleCategoryChange(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-[#0056b3] focus:ring-2 focus:ring-[#0056b3]/10 transition-all font-sans cursor-pointer"
                    >
                      <option value="PET Preform & Jar Mold">PET Preform &amp; Jar Mold</option>
                      <option value="ISBM Mold (Single-Stage)">ISBM Mold (Single-Stage)</option>
                      <option value="Extrusion Blow (EBM) Mold">Extrusion Blow (EBM) Mold</option>
                    </select>
                  </div>

                  {/* Product Specific Option */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-700">
                      Specific Product <span className="text-[#ff6b00]">*</span>
                    </label>
                    <select
                      value={selectedProduct}
                      onChange={(e) => setSelectedProduct(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-[#0056b3] focus:ring-2 focus:ring-[#0056b3]/10 transition-all font-sans cursor-pointer"
                    >
                      {(PRODUCTS_BY_CATEGORY[selectedCategory] || []).map((item, idx) => (
                        <option key={idx} value={item}>{item}</option>
                      ))}
                    </select>
                  </div>

                  {/* Requirement Type */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-700">
                      Requirement Scope <span className="text-[#ff6b00]">*</span>
                    </label>
                    <select
                      value={formData.requirement}
                      onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-[#0056b3] focus:ring-2 focus:ring-[#0056b3]/10 transition-all font-sans cursor-pointer"
                    >
                      <option value="New Complete Mold Tooling">New Complete Mold Tooling</option>
                      <option value="Mold Cavity & Core Replacement">Mold Cavity &amp; Core Replacement</option>
                      <option value="Neck Split & Conversion Kit">Neck Split &amp; Conversion Kit</option>
                      <option value="Hot Runner System Overhaul">Hot Runner System Overhaul</option>
                      <option value="Mold Flow Analysis & DFM Only">Mold Flow Analysis &amp; DFM Only</option>
                    </select>
                  </div>

                  {/* Quantity */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-700">
                      Target Quantity / Sets <span className="text-[#ff6b00]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      placeholder="e.g. 1 Set (48 Cavity)"
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-[#0056b3] focus:ring-2 focus:ring-[#0056b3]/10 transition-all font-sans"
                    />
                  </div>
                </div>
              </div>

              {/* Group 3: Technical Message & File Upload */}
              <div className="space-y-5">
                <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider pb-3 border-b border-slate-100 flex items-center gap-2">
                  <MessageSquare className="w-3.5 h-3.5 text-[#ff6b00]" />
                  <span>3. Project Brief &amp; CAD File Upload</span>
                </h4>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-700">
                    Detailed Tooling Requirements &amp; Machine Parameters
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Specify container grammage, neck type (e.g. PCO 1881 / 28mm), resin (PET, HDPE, PP), machine make (Husky, ASB, Ferromatik, Fong Kee), desired cycle time, or any target delivery deadlines..."
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-[#0056b3] focus:ring-2 focus:ring-[#0056b3]/10 transition-all font-sans"
                  />
                </div>

                {/* File Upload Box */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-700 flex items-center justify-between">
                    <span>Attach Container Drawings / 2D-3D CAD Files</span>
                    <span className="text-[11px] text-slate-400 font-normal">Accepted: STEP, STP, IGES, DXF, DWG, PDF (Max 25MB)</span>
                  </label>

                  <div className="relative border-2 border-dashed border-slate-200 hover:border-[#0056b3] rounded-2xl p-6 text-center bg-slate-50/70 hover:bg-blue-50/30 transition-all group cursor-pointer">
                    <input
                      type="file"
                      onChange={handleFileChange}
                      accept=".step,.stp,.igs,.iges,.dxf,.dwg,.pdf,.zip,.rar"
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    />

                    {fileName ? (
                      <div className="flex items-center justify-center gap-3 text-slate-800">
                        <FileCheck className="w-6 h-6 text-[#0056b3]" />
                        <span className="text-xs font-semibold text-slate-900">{fileName}</span>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setFileName(null);
                          }}
                          className="p-1 rounded-full hover:bg-slate-200 text-slate-500 z-20"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-1.5">
                        <div className="w-10 h-10 rounded-full bg-blue-50 text-[#0056b3] group-hover:scale-110 flex items-center justify-center mx-auto transition-transform">
                          <UploadCloud className="w-5 h-5" />
                        </div>
                        <div className="text-xs font-semibold text-slate-700">
                          Click to upload or drag &amp; drop container drawings here
                        </div>
                        <p className="text-[11px] text-slate-400">
                          Files are protected under our mutual Confidential Non-Disclosure Agreement (NDA).
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <CheckCircle2 className="w-4 h-4 text-[#ff6b00]" />
                  <span>24-Hour Technical DFM &amp; Quote Response Guaranteed</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#0056b3] hover:bg-blue-800 active:bg-blue-900 text-white font-semibold rounded-xl transition-all shadow-md text-xs uppercase tracking-wider disabled:opacity-50 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? "Processing RFQ..." : "Submit Technical Quote Request"}</span>
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
