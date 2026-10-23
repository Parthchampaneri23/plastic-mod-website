'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { EDM_SECTION_DATA } from '@/data/infrastructure';

export const EdmMachiningSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="edm-machining"
      className="py-13 sm:py-14 md:py-13 bg-white border-b border-slate-200/90 scroll-mt-24 text-slate-800"
    >
      {/* Centered Container: ~1120–1200px (1160px) */}
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* ======================================================== */}
        {/* MAIN TWO-COLUMN ROW: Image on Left (1.05fr), Text on Right (0.95fr) */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">

          {/* ------------------------------------------------------ */}
          {/* LEFT SIDE: Large Landscape EDM Image & Lightweight Caption */}
          {/* ------------------------------------------------------ */}
          <div className="lg:col-span-6 w-full flex flex-col justify-center">
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="w-full group"
            >
              {/* Image Frame with refined 6–8px corner radius */}
              <div className="relative w-full aspect-[4/3] max-h-[420px] rounded-lg overflow-hidden border border-slate-200/90 shadow-sm bg-slate-900 group-hover:border-slate-300 transition-colors duration-300">
                <Image
                  src={EDM_SECTION_DATA.imageSrc}
                  alt={EDM_SECTION_DATA.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 560px"
                  priority={false}
                  className="object-cover object-center filter brightness-[0.98] contrast-[1.02]"
                />

                {/* Subtle gradient for label contrast */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none"
                  aria-hidden="true"
                />

                {/* Retained Small Dark Translucent Label in Bottom-Left */}
                <div className="absolute bottom-3 left-3 sm:bottom-3.5 sm:left-3.5 z-10">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#0b1f3a]/85 backdrop-blur-md border border-white/15 text-[10.5px] sm:text-[11px] font-mono uppercase tracking-wider text-white font-medium shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00]" />
                    EDM MACHINING
                  </span>
                </div>
              </div>

              {/* Elegant Lightweight Image Caption */}
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="pt-2.5 px-1 flex items-center gap-2 text-slate-500 text-[11.5px] font-mono"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00] shrink-0" />
                <span>Electrical discharge machining for complex mould features</span>
              </motion.div>
            </motion.div>
          </div>

          {/* ------------------------------------------------------ */}
          {/* RIGHT SIDE: Heading, Introduction, and Numbered List   */}
          {/* ------------------------------------------------------ */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-5">

            {/* 1. Eyebrow Badge + Heading with Orange Accent Line */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="space-y-2.5"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-[#0056b3] text-[11px] font-bold uppercase tracking-wider">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff6b00] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff6b00]"></span>
                </span>
                <span>{EDM_SECTION_DATA.badge}</span>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-semibold text-slate-900 tracking-tight leading-[1.15]">
                  EDM <span className="text-[#0056b3]">Machining</span>
                </h2>
                {/* Thin orange accent line underneath heading portion */}
                <motion.div
                  initial={shouldReduceMotion ? { width: 44 } : { width: 0 }}
                  whileInView={{ width: 44 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="h-[2.5px] rounded-full bg-gradient-to-r from-[#ff6b00] to-blue-500 mt-2"
                  aria-hidden="true"
                />
              </div>
            </motion.div>

            {/* 2. Concise Introductory Copy */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="space-y-2.5 max-w-[500px] text-slate-600 text-xs sm:text-[13.5px] leading-relaxed"
            >
              <p>{EDM_SECTION_DATA.description[0]}</p>
              <p>{EDM_SECTION_DATA.description[1]}</p>
            </motion.div>

            {/* 3. Numbered Editorial List (Distinct from CNC cards) */}
            <div className="pt-1 max-w-[500px]">
              <div className="divide-y divide-slate-200/80 border-t border-slate-200/80">
                {EDM_SECTION_DATA.highlights.map((item, idx) => (
                  <motion.div
                    key={item.title}
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.45,
                      delay: 0.15 + idx * 0.08,
                      ease: [0.21, 0.47, 0.32, 0.98],
                    }}
                    className="py-3 sm:py-3.5 flex items-start gap-4 group transition-colors"
                  >
                    {/* Restrained Blue Number Column */}
                    <span className="text-xl sm:text-2xl font-mono font-semibold text-[#0056b3]/85 group-hover:text-[#0056b3] transition-colors shrink-0 w-8">
                      {item.label}
                    </span>

                    {/* Content */}
                    <div className="flex-grow">
                      <h4 className="text-xs sm:text-[13.5px] font-semibold text-slate-900 group-hover:text-[#0056b3] transition-colors leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-[11.5px] sm:text-[12px] text-slate-500 mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* ======================================================== */}
        {/* HORIZONTAL TECHNICAL SPECIFICATION STRIP (Below Both)     */}
        {/* ======================================================== */}
        {EDM_SECTION_DATA.technicalDetails && (
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="mt-10 sm:mt-12 pt-6 border-t border-slate-200/90"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-slate-200/80 bg-slate-50/70 border border-slate-200/80 rounded-lg p-4 sm:p-5">
              {EDM_SECTION_DATA.technicalDetails.map((spec, sIdx) => (
                <div
                  key={spec.label}
                  className={`flex flex-col justify-between ${sIdx === 0 ? 'lg:pr-6' : sIdx === 3 ? 'lg:pl-6' : 'lg:px-6'
                    }`}
                >
                  <span className="text-[10px] sm:text-[10.5px] font-mono uppercase tracking-wider text-slate-600 block mb-1">
                    {spec.label}
                  </span>
                  <span className="text-xs sm:text-[13px] font-medium text-slate-900 leading-snug">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
};
