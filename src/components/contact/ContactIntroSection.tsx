"use client";

import React from "react";
import Image from "next/image";
import {
  ShieldCheck,
  Award,
  Clock,
  Sparkles,
  CheckCircle2,
  PhoneCall,
  MapPin,
  Users
} from "lucide-react";

export const ContactIntroSection: React.FC = () => {
  return (
    <section className="py-13 sm:py-13 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* Left Column: Image with Subtle Modern Frame */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-md group">
              <Image
                src="/contact/contact-office.jpg"
                alt="Patel Mould Industries engineering consultation office and precision CNC manufacturing facility in Gujarat"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-center group-hover:scale-102 transition-transform duration-500"
              />
            </div>

            {/* Facility Trust Grid: 4 Balanced Cards */}
            <div className="grid grid-cols-2 gap-3.5 pt-1">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 flex items-center gap-3.5 hover:bg-blue-50/50 hover:border-blue-200 transition-all shadow-xs group/badge">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#0056b3] flex items-center justify-center shrink-0 group-hover/badge:scale-105 transition-transform">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900">ISO 9001:2015</div>
                  <div className="text-[11px] text-slate-500">Certified Quality</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 flex items-center gap-3.5 hover:bg-orange-50/50 hover:border-orange-200 transition-all shadow-xs group/badge">
                <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#ff6b00] flex items-center justify-center shrink-0 group-hover/badge:scale-105 transition-transform">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900">24-Hour DFM</div>
                  <div className="text-[11px] text-slate-500">Technical Turnaround</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 flex items-center gap-3.5 hover:bg-blue-50/50 hover:border-blue-200 transition-all shadow-xs group/badge">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#0056b3] flex items-center justify-center shrink-0 group-hover/badge:scale-105 transition-transform">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900">5M+ Shot Life</div>
                  <div className="text-[11px] text-slate-500">Class 101 Guarantee</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 flex items-center gap-3.5 hover:bg-orange-50/50 hover:border-orange-200 transition-all shadow-xs group/badge">
                <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#ff6b00] flex items-center justify-center shrink-0 group-hover/badge:scale-105 transition-transform">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900">14+ Countries</div>
                  <div className="text-[11px] text-slate-500">Global Direct Exports</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Introduction Story & Highlights */}
          <div className="lg:col-span-7 space-y-5">
            {/* Blinker Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-[#0056b3] text-xs font-mono font-bold uppercase tracking-wider">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff6b00] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#ff6b00]"></span>
              </span>
              <span>DIRECT TOOLROOM CONSULTATION</span>
            </div>

            {/* Main Section Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight leading-[1.15]">
              Let’s Engineer Your Next <span className="text-[#0056b3]">Precision Mould</span>
            </h2>

            {/* Lead Narrative */}
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              Based in Gujarat’s renowned industrial engineering corridor, <strong className="text-slate-900 font-semibold">Patel Mould Industries</strong> partners with plastic converters, beverage corporations, pharmaceutical packagers, and FMCG brands across India and 14+ countries globally.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Whether you require high-cavitation PET preform tooling, single-stage ISBM molds, or heavy industrial EBM jerry can tooling, our in-house design and toolmaking engineers are ready to review your 2D/3D component drawings and deliver a comprehensive DFM feasibility assessment.
            </p>

            {/* Feature Bullets with Animated Check Icons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 group cursor-default">
                <span className="w-5 h-5 rounded-full bg-orange-50 border border-orange-200 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#ff6b00] group-hover:border-[#ff6b00] transition-colors duration-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#ff6b00] group-hover:text-white transition-colors duration-300" />
                </span>
                <span className="font-medium group-hover:text-slate-900 transition-colors">Confidential Non-Disclosure Agreement (NDA)</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 group cursor-default">
                <span className="w-5 h-5 rounded-full bg-orange-50 border border-orange-200 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#ff6b00] group-hover:border-[#ff6b00] transition-colors duration-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#ff6b00] group-hover:text-white transition-colors duration-300" />
                </span>
                <span className="font-medium group-hover:text-slate-900 transition-colors">On-site Mold Trial &amp; FAT Validation</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 group cursor-default">
                <span className="w-5 h-5 rounded-full bg-orange-50 border border-orange-200 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#ff6b00] group-hover:border-[#ff6b00] transition-colors duration-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#ff6b00] group-hover:text-white transition-colors duration-300" />
                </span>
                <span className="font-medium group-hover:text-slate-900 transition-colors">Moldflow Rheological Optimization</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 group cursor-default">
                <span className="w-5 h-5 rounded-full bg-orange-50 border border-orange-200 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#ff6b00] group-hover:border-[#ff6b00] transition-colors duration-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#ff6b00] group-hover:text-white transition-colors duration-300" />
                </span>
                <span className="font-medium group-hover:text-slate-900 transition-colors">Turnkey Export Packaging &amp; Logistics</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
