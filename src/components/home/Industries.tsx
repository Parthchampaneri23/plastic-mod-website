'use client';

import React from 'react';
import Link from 'next/link';
import { INDUSTRIES } from '@/data/home';
import { SectionHeading } from '../SectionHeading';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const Industries: React.FC = () => {
  return (
    <section id="industries" className="py-13 bg-slate-50 relative overflow-hidden">
      {/* Subtle Background Grid Pattern */}
      <div className="absolute inset-0 tech-grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Top Eyebrow Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-[#0056b3] text-xs font-bold uppercase tracking-wider mb-4"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff6b00] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#ff6b00]"></span>
          </span>
          GLOBAL INDUSTRY SECTOR REACH
        </motion.div>

        {/* 2-Column Split Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-12">
          {/* Left Column: Bold Headline */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight leading-[1.12]">
              Industries &<br />
              <span className="text-[#0056b3]">Global Applications.</span>
            </h2>
          </motion.div>

          {/* Right Column: Description with Vertical Accent Bar & Tech Badges */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 relative pl-5 sm:pl-6"
          >
            {/* Gradient Vertical Accent Bar */}
            <div className="absolute left-0 top-1 bottom-1 w-1 rounded-full bg-gradient-to-b from-[#0056b3] via-[#0056b3] to-[#ff6b00]" />

            <p className="text-slate-700 text-sm sm:text-base font-normal leading-relaxed">
              Precision plastic mold engineering serving <strong className="text-slate-900 font-medium">multinational FMCG</strong>, beverage packaging, pharmaceutical, and <strong className="text-[#0056b3] font-medium">heavy-duty industrial sectors</strong>.
            </p>

            {/* Micro Technical Highlight Pills */}
            <div className="flex items-center flex-wrap gap-2.5 mt-3.5">
              <span className="text-[11px] font-medium text-[#0056b3] bg-blue-50 border border-blue-200/90 px-3 py-1 rounded-full flex items-center gap-1.5 shadow-2xs hover:bg-[#0056b3] hover:text-white transition-all duration-300 cursor-pointer">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0056b3]"></span>
                FMCG & Pharma Mold Standards
              </span>
              <span className="text-[11px] font-medium text-slate-800 bg-slate-100 border border-slate-200 px-3 py-1 rounded-full flex items-center gap-1.5 shadow-2xs hover:bg-[#ff6b00] hover:text-white transition-all duration-300 cursor-pointer">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00]"></span>
                Industrial Heavy Tooling
              </span>
            </div>
          </motion.div>
        </div>

        {/* 6 Industry Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {INDUSTRIES.map((industry, index) => (
            <motion.div
              key={industry.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href="#inquiry-section"
                className="block h-full bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm group hover:border-[#0056b3] hover:shadow-2xl transition-all duration-500 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Clean Industry Image Container without badges or text overlay */}
                  <div className="h-52 relative overflow-hidden bg-slate-900">
                    <motion.img
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.7 }}
                      src={industry.image}
                      alt={industry.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Body Content with Centered Prominent Title and Short Description */}
                  <div className="p-6 text-center space-y-3">
                    <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 group-hover:text-[#0056b3] transition-colors">
                      {industry.name}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed font-normal max-w-sm mx-auto">
                      {industry.description}
                    </p>
                  </div>
                </div>

                {/* Centered Card Action Footer */}
                <div className="p-6 pt-0 flex items-center justify-center text-xs font-bold text-[#0056b3] mt-2">
                  <span className="inline-flex items-center gap-1.5 group-hover:underline font-semibold text-sm">
                    <span>View Applications</span>
                    <ArrowRight className="w-4 h-4 text-[#ff6b00] transition-transform group-hover:translate-x-1" />
                  </span>
                </div>

                {/* Hover Accent Line */}
                <div className="h-1.5 w-full bg-gradient-to-r from-[#0056b3] via-[#ff6b00] to-[#0056b3] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
