'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Factory, Cog, CheckCircle2 } from 'lucide-react';

export const GalleryIntro: React.FC = () => {
  return (
    <section className="py-10 sm:py-13 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-100">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-[#0056b3] text-xs font-mono font-bold uppercase tracking-wider">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff6b00] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#ff6b00]"></span>
              </span>
              <span>FACILITY &amp; TOOLING PORTFOLIO</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-black tracking-tight leading-[1.15]">
              A Closer Look at Our Expertise
            </h2>

            <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
              From advanced manufacturing equipment to precision-engineered molds and finished products, explore the facilities, processes, and craftsmanship that define Patel Mould Industries.
            </p>
          </div>

          {/* Quick Stat Pill Accent */}
          <div className="hidden lg:flex items-center gap-4 bg-slate-50 border border-slate-200/80 rounded-2xl p-4 shrink-0 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0056b3] to-blue-800 flex items-center justify-center text-white shadow-md">
              <Factory className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Manufacturing Center</div>
              <div className="text-sm font-bold text-slate-900">Gujarat, India Toolroom</div>
              <div className="text-xs text-[#0056b3] font-medium flex items-center gap-1 mt-0.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>100% In-House Precision</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
