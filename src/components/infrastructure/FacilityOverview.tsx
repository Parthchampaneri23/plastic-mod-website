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

interface FacilityOverviewProps {
  overview?: {
    badge?: string;
    heading?: string;
    description?: string;
    imageSrc?: string;
    imageAlt?: string;
    capabilities?: FacilityCapability[];
  };
}

const capabilityIcons = [
  <Layers key="0" className="w-4 h-4 text-[#0056b3]" />,
  <Factory key="1" className="w-4 h-4 text-[#ff6b00]" />,
  <Network key="2" className="w-4 h-4 text-[#0056b3]" />,
  <ShieldCheck key="3" className="w-4 h-4 text-[#0056b3]" />,
];

export const FacilityOverview: React.FC<FacilityOverviewProps> = ({ overview }) => {
  const shouldReduceMotion = useReducedMotion();

  const badge = overview?.badge || FACILITY_OVERVIEW_DATA.badge;
  const heading = overview?.heading || FACILITY_OVERVIEW_DATA.heading;
  const description = overview?.description || FACILITY_OVERVIEW_DATA.description;
  const imageSrc = overview?.imageSrc || FACILITY_OVERVIEW_DATA.imageSrc;
  const imageAlt = overview?.imageAlt || FACILITY_OVERVIEW_DATA.imageAlt;
  const capabilities = overview?.capabilities || FACILITY_OVERVIEW_DATA.capabilities;

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
                <span>{badge}</span>
              </div>

              {/* Heading */}
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-semibold text-slate-900 tracking-tight leading-[1.18]">
                {heading}
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
                {description}
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
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 1200px) 100vw, 1160px"
            priority={false}
            className="object-cover object-center filter brightness-[0.98] contrast-[1.02]"
          />
        </motion.div>

        {/* ======================================================== */}
        {/* 3. FOUR COMPACT INFORMATION PANELS WITH PREMIUM HOVER     */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
          {capabilities.map((cap: FacilityCapability, idx: number) => (
            <motion.div
              key={cap.title || idx}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: idx * 0.08,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className="relative overflow-hidden bg-white border border-slate-200/90 rounded-xl p-4 sm:p-5 flex flex-col justify-start transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-xl hover:shadow-blue-900/8 hover:border-blue-400 group cursor-default"
            >
              {/* Top Accent Gradient Line on Hover */}
              <div
                className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0056b3] via-sky-400 to-[#ff6b00] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                aria-hidden="true"
              />

              {/* Subtle Ambient Background Glow on Hover */}
              <div
                className="absolute -top-12 -right-12 w-28 h-28 bg-blue-50 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                aria-hidden="true"
              />

              {/* Icon Container with interactive scale and illumination */}
              <div className="relative w-10 h-10 rounded-lg bg-blue-50/80 border border-blue-100/90 flex items-center justify-center mb-3.5 shadow-2xs group-hover:bg-[#0056b3] group-hover:border-[#0056b3] group-hover:shadow-md group-hover:shadow-blue-500/25 group-hover:scale-105 transition-all duration-300">
                <span className="transition-colors duration-300 group-hover:text-white [&>svg]:transition-all [&>svg]:duration-300 [&>svg]:group-hover:text-white [&>svg]:group-hover:scale-110">
                  {capabilityIcons[idx % capabilityIcons.length]}
                </span>
              </div>

              {/* Card Title with brand blue highlight */}
              <h3 className="text-sm font-semibold text-slate-900 group-hover:text-[#0056b3] transition-colors duration-200 leading-snug mb-1.5">
                {cap.title}
              </h3>

              {/* Card Description */}
              <p className="text-xs text-slate-500 group-hover:text-slate-600 transition-colors duration-200 leading-relaxed font-normal">
                {cap.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
