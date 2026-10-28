'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { EDM_SECTION_DATA, InfrastructureSectionData } from '@/data/infrastructure';

interface EdmMachiningSectionProps {
  data?: InfrastructureSectionData;
}

export const EdmMachiningSection: React.FC<EdmMachiningSectionProps> = ({ data: propData }) => {
  const shouldReduceMotion = useReducedMotion();
  const data = propData || EDM_SECTION_DATA;

  return (
    <section
      id="edm-machining"
      className="py-13 sm:py-13 md:py-13 bg-white border-b border-slate-200/90 scroll-mt-24 text-slate-800"
    >
      {/* Centered Container: ~1120–1200px (1160px) */}
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* ======================================================== */}
        {/* 1. REFINED TWO-COLUMN INTRODUCTION ROW (Facility Style)  */}
        {/* ======================================================== */}
        <div className="mb-7 sm:mb-9">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-10">

            {/* Left Column: Eyebrow + Heading */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="max-w-[480px] space-y-2.5"
            >
              {/* Eyebrow Badge with small orange dot */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-[#0056b3] text-[11px] font-bold uppercase tracking-wider">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff6b00] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff6b00]"></span>
                </span>
                <span>{data.badge || 'SPARK EROSION FACILITY'}</span>
              </div>

              {/* Heading */}
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-semibold text-slate-900 tracking-tight leading-[1.18]">
                {data.heading || 'EDM Machining'}
              </h2>
            </motion.div>

            {/* Right Column: Paragraph with subtle vertical blue-to-orange accent line */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="relative pl-4 sm:pl-4.5 max-w-[480px]"
            >
              {/* Subtle vertical blue-to-orange accent line */}
              <div
                className="absolute left-0 top-1 bottom-1 w-[3px] rounded-full bg-gradient-to-b from-[#0056b3] via-[#0056b3] to-[#ff6b00]"
                aria-hidden="true"
              />

              <p className="text-slate-600 text-xs sm:text-[13.5px] leading-relaxed font-normal">
                {data.description?.[0] || ''}
              </p>
            </motion.div>

          </div>
        </div>

        {/* ======================================================== */}
        {/* 2. MAIN TWO-COLUMN CONTENT: Image (Left) + Steps (Right) */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 items-center">

          {/* LEFT SIDE: EDM Image Frame */}
          <div className="lg:col-span-5 w-full flex flex-col justify-center">
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="w-full max-w-[420px] group"
            >
              <div className="relative w-full aspect-[4/4.3] max-h-[440px] rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm bg-slate-900 group-hover:border-slate-300 transition-colors duration-300">
                <Image
                  src={data.imageSrc || '/infrastructure/edm-machining.jpg'}
                  alt={data.imageAlt || 'EDM Machining'}
                  fill
                  sizes="(max-width: 1024px) 100vw, 420px"
                  priority={false}
                  className="object-cover object-center filter brightness-[0.98] contrast-[1.02]"
                />
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE: Supporting Copy & Numbered Capability Cards */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-4 lg:pl-2">

            {/* Process Steps Heading */}
            <div className="flex items-center gap-2.5 pb-1">
              <span className="w-2 h-2 rounded-full bg-[#ff6b00]" />
              <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                {data.stepsHeading || "EDM Spark Erosion Steps"}
              </h3>
            </div>

            {/* Numbered Capability Cards */}
            <div className="space-y-3 w-full">
              {(data.highlights || []).map((item, idx) => (
                <motion.div
                  key={item.title || idx}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: 0.12 + idx * 0.08,
                    ease: [0.21, 0.47, 0.32, 0.98],
                  }}
                  className="group relative p-3 sm:p-3.5 rounded-xl border border-slate-200/80 bg-white hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-white hover:border-[#0056b3]/40 shadow-xs hover:shadow-md hover:shadow-blue-900/5 hover:-translate-y-0.5 transition-all duration-300 flex items-start gap-3.5 cursor-default overflow-hidden"
                >
                  {/* Subtle left accent highlight on hover */}
                  <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#0056b3] to-[#ff6b00] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Restrained Blue Number Column / Badge */}
                  <div className="w-8 h-8 rounded-lg bg-blue-50/80 border border-blue-200/80 text-[#0056b3] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#0056b3] group-hover:text-white group-hover:border-[#0056b3] group-hover:shadow-sm group-hover:shadow-blue-500/20 group-hover:scale-105 transition-all duration-300">
                    <span className="text-xs font-mono font-bold tracking-tight">
                      {item.label || `0${idx + 1}`}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs sm:text-[13.5px] font-semibold text-slate-900 group-hover:text-[#0056b3] transition-colors duration-200 leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-[11.5px] sm:text-[12px] text-slate-500 group-hover:text-slate-600 mt-1 leading-relaxed transition-colors duration-200">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
