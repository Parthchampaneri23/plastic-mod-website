"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  TESTING_SECTION_DATA,
  VALIDATION_SEQUENCE_STAGES,
} from "@/data/infrastructure";

export default function TestingValidationSection() {
  const data = TESTING_SECTION_DATA;

  return (
    <section
      id="testing-validation"
      className="py-14 sm:py-13 md:py-13 bg-slate-50/70 border-b border-slate-200/80 relative"
      aria-labelledby="testing-validation-heading"
    >
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Layer 1: Compact Horizontal Introduction Row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-8 items-end pb-8 sm:pb-10 border-b border-slate-200/70 mb-8 sm:mb-10"
        >
          {/* Left: Heading & Eyebrow (6 cols) */}
          <div className="md:col-span-6">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-blue-50 border border-blue-200/60 mb-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00]" />
              <span className="text-[11px] font-bold tracking-wider text-[#0056b3] uppercase">
                {data.badge || "TRIAL & VALIDATION"}
              </span>
            </div>
            <h2
              id="testing-validation-heading"
              className="text-2xl sm:text-3xl md:text-[38px] font-bold text-[#0b1f3a] tracking-tight leading-tight sm:leading-snug"
            >
              {data.heading}
            </h2>
          </div>

          {/* Right: Description text with subtle orange/blue divider on desktop (6 cols) */}
          <div className="md:col-span-6 md:border-l-2 md:border-orange-500/70 md:pl-6">
            <p className="text-slate-600 text-sm sm:text-[14.5px] leading-relaxed">
              {data.description[0]}
            </p>
          </div>
        </motion.div>

        {/* Layer 2: Prominent Dark Navy Feature Band (#14263D) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="bg-[#14263D] text-white rounded-lg border border-slate-800 p-5 sm:p-7 md:p-8 shadow-sm mb-10 sm:mb-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            {/* Left Side: Testing Image (~58% width on desktop) */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="lg:col-span-7"
            >
              <div className="relative w-full aspect-[4/3] max-h-[320px] sm:max-h-[360px] md:max-h-[380px] rounded-[7px] overflow-hidden border border-white/10 shadow-md bg-slate-900 group">
                <Image
                  src={data.imageSrc}
                  alt={data.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 58vw, 680px"
                  className="object-cover object-center"
                  priority={false}
                />

                {/* Compact Translucent Dark Badge */}
                <div className="absolute bottom-3 left-3 bg-slate-950/80 backdrop-blur-xs text-white px-3 py-1 rounded text-[11px] font-semibold tracking-wider border border-white/10 uppercase">
                  TESTING &amp; VALIDATION
                </div>
              </div>
            </motion.div>

            {/* Right Side: Validation Story (~42% width on desktop) */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.1, ease: "easeOut" }}
              className="lg:col-span-5 flex flex-col justify-center"
            >
              <div className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-wider text-[#ff6b00] uppercase mb-1.5">
                <span>PROCESS VALIDATION</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2.5">
                From Trial to Confidence
              </h3>
              <p className="text-slate-300 text-xs sm:text-[13px] leading-relaxed mb-5">
                Trial observations help identify areas that may require adjustment before final acceptance or handover. The specific checks depend on the mould design, material and agreed testing requirements.
              </p>

              {/* Three Compact Highlight Rows */}
              <div className="space-y-3.5 border-t border-white/10 pt-4">
                {data.highlights.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 text-xs font-mono font-bold text-[#ff6b00] mt-0.5">
                      {item.label || `0${index + 1}`}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-xs sm:text-[13px] font-semibold text-white tracking-tight leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-[11.5px] sm:text-xs text-slate-300/90 leading-snug mt-0.5">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Layer 3: Validation Sequence — Light Background */}
        <div className="mb-10 sm:mb-12">
          <div className="flex items-center gap-2 mb-6 sm:mb-8">
            <span className="text-[11px] font-bold tracking-wider text-slate-500 uppercase">
              VALIDATION SEQUENCE
            </span>
            <div className="h-px bg-slate-200 flex-1 ml-2" />
          </div>

          {/* Desktop/Tablet Horizontal Progression with Connecting Line */}
          <div className="relative">
            {/* Horizontal Connecting Line (hidden on small mobile screens) */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="hidden md:block absolute top-4 left-[5%] right-[5%] h-0.5 bg-slate-200 origin-left -z-0"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-6 md:gap-5 relative z-10">
              {VALIDATION_SEQUENCE_STAGES.map((stage, idx) => (
                <motion.div
                  key={stage.step}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.35,
                    delay: 0.08 * idx,
                    ease: "easeOut",
                  }}
                  className="flex sm:flex-col items-start gap-3.5 sm:gap-3 group"
                >
                  {/* Compact Circular Marker */}
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-bold transition-colors ${idx === 2
                      ? "bg-white border-[#ff6b00] text-[#ff6b00] shadow-2xs"
                      : "bg-white border-[#0056b3] text-[#0056b3] shadow-2xs"
                      }`}
                  >
                    {stage.step}
                  </div>

                  {/* Stage Content */}
                  <div className="min-w-0 flex-1">
                    <h4 className="text-xs sm:text-[13px] font-bold text-[#0b1f3a] tracking-tight group-hover:text-[#0056b3] transition-colors leading-snug">
                      {stage.title}
                    </h4>
                    <p className="text-[12px] text-slate-500 leading-snug mt-1">
                      {stage.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Layer 4: Optional Restrained Technical Notes Row */}
        {data.technicalDetails && data.technicalDetails.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="border-t border-slate-200/80 pt-5 sm:pt-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-6">
              {data.technicalDetails.map((detail, index) => (
                <div
                  key={index}
                  className="bg-white/80 rounded p-3 sm:p-3.5 border border-slate-200/70"
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
