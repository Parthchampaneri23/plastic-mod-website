'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { CheckCircle2, ChevronRight, Cpu, Layers, Disc, Crosshair } from 'lucide-react';
import { CNC_SECTION_DATA } from '@/data/infrastructure';

const capabilityIcons = [
  <Crosshair key="0" className="w-4 h-4 text-[#0056b3]" />,
  <Layers key="1" className="w-4 h-4 text-[#0056b3]" />,
  <Disc key="2" className="w-4 h-4 text-[#0056b3]" />,
];

export const CncMachiningSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="cnc-machining"
      className="py-13 sm:py-14 md:py-13 bg-slate-50/70 border-b border-slate-200/90 scroll-mt-24 text-slate-800"
    >
      {/* Centered container: 1120–1200px (1160px) */}
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Two-column layout: 1.05fr for left content, 0.95fr for right image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">

          {/* ======================================================== */}
          {/* LEFT COLUMN: Heading, Intro, Capability List, Spec Panel  */}
          {/* ======================================================== */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-5">

            {/* 1. Eyebrow Badge + Heading Row */}
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
                <span>{CNC_SECTION_DATA.badge}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-semibold text-slate-900 tracking-tight leading-[1.15]">
                {CNC_SECTION_DATA.heading}
              </h2>
            </motion.div>

            {/* 2. Concise Two-Paragraph Introduction (450–500px width) */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="space-y-2.5 max-w-[500px] text-slate-600 text-xs sm:text-[13.5px] leading-relaxed"
            >
              <p>{CNC_SECTION_DATA.description[0]}</p>
              <p>{CNC_SECTION_DATA.description[1]}</p>
            </motion.div>

            {/* 3. Compact Vertical Capability List with Thin Dividers */}
            <div className="pt-1 max-w-[500px]">
              <div className="divide-y divide-slate-200/80 border-y border-slate-200/80">
                {CNC_SECTION_DATA.highlights.map((item, idx) => (
                  <motion.div
                    key={item.title}
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: 0.12 + idx * 0.08,
                      ease: [0.21, 0.47, 0.32, 0.98],
                    }}
                    className="py-2.5 sm:py-3 flex items-start gap-3 group transition-colors"
                  >
                    <div className="w-6 h-6 rounded-md bg-white border border-slate-200 flex items-center justify-center shrink-0 mt-0.5 group-hover:border-blue-400 group-hover:bg-blue-50/50 transition-colors shadow-2xs">
                      {capabilityIcons[idx % capabilityIcons.length]}
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-[13.5px] font-semibold text-slate-900 group-hover:text-[#0056b3] transition-colors leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-[11.5px] sm:text-[12px] text-slate-500 mt-0.5 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* 4. Compact Technical Capabilities Panel (Integrated below list) */}
            {CNC_SECTION_DATA.technicalDetails && (
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.28, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="max-w-[500px] rounded-lg border border-slate-200/90 bg-white p-3.5 sm:p-4 shadow-2xs hover:border-blue-300 transition-colors"
              >
                <div className="flex items-center gap-2 pb-2.5 mb-2.5 border-b border-slate-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00]" />
                  <span className="text-[10.5px] font-mono font-bold uppercase tracking-wider text-slate-700">
                    TECHNICAL CAPABILITIES
                  </span>
                </div>
                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-2">
                  {CNC_SECTION_DATA.technicalDetails.map((spec) => (
                    <div key={spec.label} className="border-b border-slate-50 pb-1.5 last:border-b-0 sm:last:border-b-0">
                      <dt className="text-[10.5px] font-mono text-slate-600 uppercase tracking-wider">
                        {spec.label}
                      </dt>
                      <dd className="text-xs font-medium text-slate-900 mt-0.5 leading-snug">
                        {spec.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </motion.div>
            )}

          </div>

          {/* ======================================================== */}
          {/* RIGHT COLUMN: CNC Image Showcase, Label, and Caption     */}
          {/* ======================================================== */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center w-full">
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="w-full max-w-[460px] group"
            >
              {/* Image Container with refined 6–8px corner radius and subtle border/shadow */}
              <div className="relative w-full aspect-[4/4.3] max-h-[460px] rounded-lg overflow-hidden border border-slate-200/90 shadow-sm bg-slate-900 group-hover:border-slate-300 transition-colors duration-300">
                <Image
                  src={CNC_SECTION_DATA.imageSrc}
                  alt={CNC_SECTION_DATA.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 460px"
                  priority={false}
                  className="object-cover object-[center_35%] filter brightness-[0.98] contrast-[1.02]"
                />

                {/* Subtle bottom gradient to support text legibility without dark overlay */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-transparent to-transparent pointer-events-none"
                  aria-hidden="true"
                />

                {/* Compact Lower-Left Image Label */}
                <div className="absolute bottom-3 left-3 sm:bottom-3.5 sm:left-3.5 z-10">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#0b1f3a]/85 group-hover:bg-[#0b1f3a]/95 backdrop-blur-md border border-white/15 text-[10.5px] sm:text-[11px] font-mono uppercase tracking-wider text-white font-medium shadow-xs transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00]" />
                    CNC MACHINING
                  </span>
                </div>
              </div>

              {/* Technical Caption directly below image */}
              <div className="pt-2.5 px-1 flex items-center justify-between text-slate-600 text-[11px] font-mono">
                <span>Precision machining for mould components</span>
                <span className="text-slate-600">Patel Mould Toolroom</span>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};
