'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { CheckCircle2, ChevronRight, Wrench } from 'lucide-react';
import { ASSEMBLY_SECTION_DATA, ASSEMBLY_TIMELINE_STEPS } from '@/data/infrastructure';

export const MouldAssemblySection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="mould-assembly"
      className="py-13 sm:py-14 md:py-13 bg-slate-50/70 border-b border-slate-200/90 scroll-mt-24 text-slate-800"
    >
      {/* Centered container: 1120–1200px (1160px) */}
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* ======================================================== */}
        {/* LAYER 1: COMPACT FULL-WIDTH HEADING & TWO-COLUMN INTRO   */}
        {/* ======================================================== */}
        <div className="mb-8 sm:mb-10">
          {/* Eyebrow Badge */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-[#0056b3] text-[11px] font-bold uppercase tracking-wider mb-2.5"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff6b00] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff6b00]"></span>
            </span>
            <span>{ASSEMBLY_SECTION_DATA.badge}</span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-2xl sm:text-3xl lg:text-[38px] font-semibold text-slate-900 tracking-tight leading-[1.15] mb-4"
          >
            Mould Assembly &amp; <span className="text-[#0056b3]">Fitting</span>
          </motion.h2>

          {/* Two-Column Introductory Paragraph Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 pt-1">
            <motion.p
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="text-slate-600 text-xs sm:text-[13.5px] leading-relaxed font-normal"
            >
              {ASSEMBLY_SECTION_DATA.description[0]}
            </motion.p>
            <motion.p
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.16 }}
              className="text-slate-600 text-xs sm:text-[13.5px] leading-relaxed font-normal relative md:pl-4 border-l-0 md:border-l md:border-slate-300/80"
            >
              {ASSEMBLY_SECTION_DATA.description[1]}
            </motion.p>
          </div>
        </div>

        {/* ======================================================== */}
        {/* LAYER 2: ASYMMETRICAL WORKSTATION SHOWCASE (1.15fr / 0.85fr) */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-stretch mb-8 sm:mb-10">

          {/* Left: Assembly Image (approx 1.15fr -> 7 cols) */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-7 flex flex-col justify-between group"
          >
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] max-h-[400px] rounded-lg overflow-hidden border border-slate-200/90 shadow-sm bg-slate-900 group-hover:border-slate-300 transition-colors duration-300">
              <Image
                src={ASSEMBLY_SECTION_DATA.imageSrc}
                alt={ASSEMBLY_SECTION_DATA.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 640px"
                priority={false}
                className="object-cover object-center filter brightness-[0.98] contrast-[1.02]"
              />

              {/* Subtle bottom gradient for text contrast */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-transparent to-transparent pointer-events-none"
                aria-hidden="true"
              />

              {/* Retained Translucent Label in Lower-Left */}
              <div className="absolute bottom-3 left-3 sm:bottom-3.5 sm:left-3.5 z-10">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#0b1f3a]/85 backdrop-blur-md border border-white/15 text-[10.5px] sm:text-[11px] font-mono uppercase tracking-wider text-white font-medium shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00]" />
                  MOULD ASSEMBLY &amp; FITTING
                </span>
              </div>
            </div>

            {/* Small Caption Below Image */}
            <div className="pt-2.5 px-1 flex items-center gap-2 text-slate-500 text-[11.5px] font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00] shrink-0" />
              <span>Careful fitting and assembly of precision mould components</span>
            </div>
          </motion.div>

          {/* Right: Assembly Focus Panel (approx 0.85fr -> 5 cols) */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-5 bg-white border border-slate-200/90 rounded-lg p-4 sm:p-5 flex flex-col justify-between shadow-2xs hover:border-blue-300 transition-colors"
          >
            <div>
              {/* Panel Header */}
              <div className="flex items-center gap-2 pb-2.5 mb-2 border-b border-slate-100">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00]" />
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-700">
                  ASSEMBLY FOCUS
                </span>
              </div>

              {/* 4 Compact Focus Rows with subtle dividers */}
              <div className="divide-y divide-slate-100">
                {ASSEMBLY_SECTION_DATA.highlights.map((item, idx) => (
                  <motion.div
                    key={item.title}
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: 0.15 + idx * 0.07,
                      ease: [0.21, 0.47, 0.32, 0.98],
                    }}
                    className="py-2.5 sm:py-3 flex items-start gap-3 group transition-colors"
                  >
                    <span className="text-xs font-mono font-bold text-[#0056b3] shrink-0 mt-0.5 w-6">
                      {item.label}
                    </span>
                    <div>
                      <h4 className="text-xs sm:text-[13px] font-semibold text-slate-900 group-hover:text-[#0056b3] transition-colors leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-[11.5px] text-slate-500 mt-0.5 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Subtle bottom note */}
            <div className="pt-2.5 mt-2 border-t border-slate-100 text-[10.5px] font-mono text-slate-600">
              Toolroom fitting standards · Gujarat plant
            </div>
          </motion.div>

        </div>

        {/* ======================================================== */}
        {/* LAYER 3: SIGNATURE HORIZONTAL ASSEMBLY TIMELINE           */}
        {/* ======================================================== */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="bg-white border border-slate-200/90 rounded-lg p-5 sm:p-6 shadow-2xs mb-6"
        >
          {/* Eyebrow above timeline */}
          <div className="flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00]" />
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-700">
              ASSEMBLY WORKFLOW
            </span>
          </div>

          {/* Desktop/Tablet Horizontal Timeline (Mobile Stacks cleanly) */}
          <div className="relative">
            {/* Connecting Horizontal Line (desktop) */}
            <div
              className="hidden lg:block absolute top-3.5 left-6 right-6 h-[2px] bg-slate-200 -z-0"
              aria-hidden="true"
            >
              <div className="h-full bg-gradient-to-r from-[#0056b3] via-blue-400 to-[#ff6b00] w-full opacity-70" />
            </div>

            {/* 5 Stages Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-6 lg:gap-4 relative z-10">
              {ASSEMBLY_TIMELINE_STEPS.map((stage, sIdx) => (
                <div key={stage.step} className="flex lg:flex-col items-center lg:items-center gap-3 lg:gap-2.5 text-left lg:text-center group">
                  {/* Geometric Circular Marker */}
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center font-mono text-[11px] font-bold shrink-0 transition-transform group-hover:scale-105 ${sIdx === 4
                      ? 'bg-[#ff6b00] text-white ring-4 ring-orange-100 shadow-2xs'
                      : 'bg-[#0056b3] text-white ring-4 ring-blue-50 shadow-2xs'
                      }`}
                  >
                    {stage.step}
                  </div>

                  {/* Stage Title */}
                  <div>
                    <span className="text-xs sm:text-[12.5px] font-semibold text-slate-800 group-hover:text-[#0056b3] transition-colors leading-snug block">
                      {stage.title}
                    </span>
                    <span className="text-[10.5px] font-mono text-slate-600 block mt-0.5">
                      Stage {sIdx + 1}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ======================================================== */}
        {/* OPTIONAL FOOTER: 3 COMPACT TECHNICAL INFORMATION GROUPS   */}
        {/* ======================================================== */}
        {ASSEMBLY_SECTION_DATA.technicalDetails && (
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-slate-200/80 pt-4 text-xs font-mono"
          >
            {ASSEMBLY_SECTION_DATA.technicalDetails.map((tech) => (
              <div key={tech.label} className="flex flex-col gap-0.5">
                <span className="text-[10px] uppercase tracking-wider text-slate-600">
                  {tech.label}
                </span>
                <span className="text-slate-800 font-medium text-[12px] leading-snug">
                  {tech.value}
                </span>
              </div>
            ))}
          </motion.div>
        )}

      </div>
    </section>
  );
};
