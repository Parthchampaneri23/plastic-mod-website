"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  INSPECTION_SECTION_DATA,
  INSPECTION_PRINCIPLES,
} from "@/data/infrastructure";

export default function QualityInspectionSection() {
  const data = INSPECTION_SECTION_DATA;

  return (
    <section
      id="quality-inspection"
      className="py-14 sm:py-13 md:py-13 bg-white border-b border-slate-200/80 relative"
      aria-labelledby="quality-inspection-heading"
    >
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1. Compact Full-Width Heading & Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="max-w-4xl mb-8 sm:mb-10"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-blue-50 border border-blue-200/60 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00]" />
            <span className="text-[11px] font-bold tracking-wider text-[#0056b3] uppercase">
              {data.badge || "METROLOGY LABORATORY"}
            </span>
          </div>

          {/* Heading */}
          <h2
            id="quality-inspection-heading"
            className="text-2xl sm:text-3xl md:text-[38px] font-bold text-[#0b1f3a] tracking-tight leading-tight sm:leading-snug"
          >
            {data.heading}
          </h2>

          {/* Understated Secondary Line */}
          <p className="mt-1.5 text-xs sm:text-sm font-semibold tracking-wide text-[#ff6b00] uppercase">
            Measure accurately. Verify carefully. Document clearly.
          </p>

          {/* Introductory Copy */}
          <div className="mt-3 text-slate-600 text-sm sm:text-[15px] leading-relaxed max-w-3xl">
            {data.description.map((paragraph, idx) => (
              <p key={idx} className={idx > 0 ? "mt-2" : ""}>
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>

        {/* 2. Three Inspection Principles Horizontal Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mb-10 sm:mb-12 bg-slate-50/80 border border-slate-200/80 rounded-lg p-3.5 sm:p-5"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-200/90 gap-y-4 sm:gap-y-0">
            {INSPECTION_PRINCIPLES.map((principle, index) => (
              <div
                key={principle.num}
                className={`flex items-start gap-3 ${index === 0
                  ? "sm:pr-5"
                  : index === 1
                    ? "sm:px-5 pt-3 sm:pt-0"
                    : "sm:pl-5 pt-3 sm:pt-0"
                  }`}
              >
                <div className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded bg-white border border-slate-200 shadow-2xs">
                  <span
                    className={`text-xs font-bold ${index === 1 ? "text-[#ff6b00]" : "text-[#0056b3]"
                      }`}
                  >
                    {principle.num}
                  </span>
                </div>
                <div className="min-w-0">
                  <h3 className="text-xs sm:text-[13px] font-semibold text-[#0b1f3a] tracking-tight">
                    {principle.title}
                  </h3>
                  <p className="text-[12px] sm:text-[12.5px] text-slate-500 leading-snug mt-0.5">
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 3. Main Quality Inspection Showcase: Image (approx 60%) + Checklist Panel (approx 40%) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start mb-10 sm:mb-12">
          {/* Left Column: Inspection Image (7 cols ~58%) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col"
          >
            <div className="relative w-full aspect-[4/3] max-h-[360px] sm:max-h-[400px] md:max-h-[420px] rounded-lg overflow-hidden border border-slate-200/90 shadow-sm bg-slate-900 group">
              <Image
                src={data.imageSrc}
                alt={data.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 58vw, 680px"
                className="object-cover object-center"
                priority={false}
              />

              {/* Bottom-left Translucent Label */}
              <div className="absolute bottom-3 left-3 bg-slate-950/75 backdrop-blur-xs text-white px-3 py-1 rounded text-[11px] font-semibold tracking-wider border border-white/10 uppercase">
                QUALITY INSPECTION
              </div>
            </div>

            {/* Compact Caption */}
            <p className="mt-2 text-[12px] text-slate-500 flex items-center gap-1.5 pl-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0056b3]" />
              Dimensional verification of precision mould components
            </p>
          </motion.div>

          {/* Right Column: Structured Inspection Checklist Panel (5 cols ~42%) */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="lg:col-span-5 bg-white border border-slate-200/90 rounded-lg p-5 sm:p-6 shadow-2xs"
          >
            {/* Header */}
            <div className="pb-3 border-b border-slate-200 flex items-center justify-between">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#0b1f3a]">
                INSPECTION CHECKPOINTS
              </h3>
              <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200/60">
                VERIFICATION
              </span>
            </div>

            {/* Checklist Rows with staggered fade */}
            <div className="divide-y divide-slate-100">
              {data.highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 6 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3,
                    delay: 0.06 * index,
                    ease: "easeOut",
                  }}
                  className="py-3.5 first:pt-3 last:pb-1 flex items-start gap-3 group"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded bg-slate-100/90 border border-slate-200 text-slate-600 group-hover:text-[#0056b3] group-hover:border-blue-200 group-hover:bg-blue-50/50 flex items-center justify-center text-[11px] font-semibold transition-colors mt-0.5">
                    {item.label || `0${index + 1}`}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-[13px] font-semibold text-[#0b1f3a] leading-tight">
                      {item.title}
                    </h4>
                    <p className="text-[12px] sm:text-[12.5px] text-slate-500 leading-snug mt-1">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* 4. Measurement Information Footer Strip */}
        {data.technicalDetails && data.technicalDetails.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="border-t border-slate-200/90 pt-5 sm:pt-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              {data.technicalDetails.map((detail, index) => (
                <div
                  key={index}
                  className="bg-slate-50/60 rounded p-3 sm:p-3.5 border border-slate-200/70"
                >
                  <span className="block text-[10px] sm:text-[11px] font-bold tracking-wider text-slate-500 uppercase mb-1">
                    {detail.label}
                  </span>
                  <p className="text-xs text-slate-700 leading-relaxed font-medium">
                    {detail.value}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
