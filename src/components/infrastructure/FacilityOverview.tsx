'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { Factory, Network, ShieldCheck, Layers } from 'lucide-react';
import { FACILITY_OVERVIEW_DATA } from '@/data/infrastructure';

interface FacilityCapability {
  title: string;
  description: string;
}

const capabilityIcons = [
  <Layers key="0" className="w-4 h-4 text-[#0056b3]" />,
  <Factory key="1" className="w-4 h-4 text-[#ff6b00]" />,
  <Network key="2" className="w-4 h-4 text-[#0056b3]" />,
  <ShieldCheck key="3" className="w-4 h-4 text-[#0056b3]" />,
];

export const FacilityOverview: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="facility-overview"
      className="py-13 sm:py-13 bg-white border-b border-slate-200/90 scroll-mt-24 text-slate-800"
    >
      {/* Centered container with max-width of approx 1150px */}
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* ======================================================== */}
        {/* 1. REFINED TWO-COLUMN INTRODUCTION ROW                   */}
        {/* ======================================================== */}
        <div className="mb-7 sm:mb-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-10">

            {/* Left Column: Eyebrow + Heading (max-width ~440px) */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="max-w-[460px] space-y-2.5"
            >
              {/* Eyebrow Badge with small orange dot */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-[#0056b3] text-[11px] font-bold uppercase tracking-wider">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff6b00] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff6b00]"></span>
                </span>
                <span>{FACILITY_OVERVIEW_DATA.badge}</span>
              </div>

              {/* Heading */}
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-semibold text-slate-900 tracking-tight leading-[1.18]">
                A Facility Designed for <br className="hidden sm:inline" />
                <span className="text-[#0056b3]">Precision Tooling.</span>
              </h2>
            </motion.div>

            {/* Right Column: Paragraph with subtle vertical accent bar (max-width ~420px) */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="relative pl-4 sm:pl-4.5 max-w-[430px]"
            >
              {/* Subtle vertical blue-to-orange accent line */}
              <div
                className="absolute left-0 top-1 bottom-1 w-[3px] rounded-full bg-gradient-to-b from-[#0056b3] via-[#0056b3] to-[#ff6b00]"
                aria-hidden="true"
              />

              <p className="text-slate-600 text-xs sm:text-[13.5px] leading-relaxed font-normal">
                {FACILITY_OVERVIEW_DATA.description}
              </p>
            </motion.div>

          </div>
        </div>

        {/* ======================================================== */}
        {/* 2. COMPACT BALANCED MANUFACTURING IMAGE                   */}
        {/* ======================================================== */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative w-full h-[220px] sm:h-[280px] md:h-[310px] lg:h-[320px] rounded-lg overflow-hidden border border-slate-200/90 shadow-sm mb-7 sm:mb-8 bg-slate-900"
        >
          <Image
            src={FACILITY_OVERVIEW_DATA.imageSrc}
            alt={FACILITY_OVERVIEW_DATA.imageAlt}
            fill
            sizes="(max-width: 1200px) 100vw, 1160px"
            priority={false}
            className="object-cover object-center filter brightness-[0.98] contrast-[1.02]"
          />

          {/* Very subtle bottom gradient shadow for label contrast only */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none"
            aria-hidden="true"
          />

          {/* Compact Refined Image Label in Bottom-Left */}
          <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 z-10">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#0b1f3a]/85 backdrop-blur-md border border-white/15 text-[10.5px] sm:text-[11px] font-mono uppercase tracking-wider text-white font-medium shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00]" />
              TOOLROOM MANUFACTURING FLOOR &amp; MACHINING BAYS
            </span>
          </div>
        </motion.div>

        {/* ======================================================== */}
        {/* 3. FOUR COMPACT INFORMATION PANELS                        */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 items-stretch">
          {FACILITY_OVERVIEW_DATA.capabilities.map((cap: FacilityCapability, idx: number) => (
            <motion.div
              key={cap.title}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: idx * 0.08,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className="bg-slate-50/70 border border-slate-200 rounded-lg p-3.5 sm:p-4 flex flex-col justify-start hover:border-blue-400/60 hover:bg-white hover:shadow-sm hover:-translate-y-1 transition-all duration-200 group cursor-default"
            >
              {/* Compact Icon Container (32px) */}
              <div className="w-8 h-8 rounded-md bg-white border border-slate-200/90 flex items-center justify-center mb-3 shadow-2xs group-hover:border-blue-200 group-hover:bg-blue-50/50 transition-colors">
                {capabilityIcons[idx % capabilityIcons.length]}
              </div>

              {/* Card Title */}
              <h3 className="text-sm font-semibold text-slate-900 mb-1.5 group-hover:text-[#0056b3] transition-colors leading-snug">
                {cap.title}
              </h3>

              {/* Card Description */}
              <p className="text-[12px] sm:text-[12.5px] text-slate-600 leading-relaxed font-normal">
                {cap.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
