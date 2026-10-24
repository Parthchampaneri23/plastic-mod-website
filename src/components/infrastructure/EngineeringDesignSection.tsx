"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  DESIGN_SECTION_DATA,
  ENGINEERING_WORKFLOW_STAGES,
} from "@/data/infrastructure";

export default function EngineeringDesignSection() {
  const data = DESIGN_SECTION_DATA;

  return (
    <section
      id="engineering-design"
      className="py-13 sm:py-13 md:py-13 bg-slate-50/70 border-b border-slate-200/80 relative"
      aria-labelledby="engineering-design-heading"
    >
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1. Full-Width Two-Column Introduction Row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-8 items-end pb-8 sm:pb-10 border-b border-slate-200/70 mb-8 sm:mb-10"
        >
          {/* Eyebrow & Heading (6 cols) */}
          <div className="md:col-span-6">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-blue-50 border border-blue-200/60 mb-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00]" />
              <span className="text-[11px] font-bold tracking-wider text-[#0056b3] uppercase">
                {data.badge || "CAD / CAM FACILITY"}
              </span>
            </div>
            <h2
              id="engineering-design-heading"
              className="text-2xl sm:text-3xl md:text-[38px] font-bold text-[#0b1f3a] tracking-tight leading-tight sm:leading-snug"
            >
              {data.heading}
            </h2>
            {data.subheading && (
              <p className="mt-2 text-xs sm:text-[13px] font-medium text-slate-500 leading-snug">
                {data.subheading}
              </p>
            )}
          </div>

          {/* Introductory Paragraph with vertical blue divider & orange accent (6 cols) */}
          <div className="md:col-span-6 md:border-l-2 md:border-blue-600/70 md:pl-6 relative">
            <div className="hidden md:block absolute -left-[2px] top-0 w-[2px] h-4 bg-[#ff6b00]" />
            <p className="text-slate-600 text-sm sm:text-[14.5px] leading-relaxed">
              {data.description[0]}
            </p>
          </div>
        </motion.div>

        {/* 2. Engineering Workspace Image */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mb-10 sm:mb-12"
        >
          <div className="relative w-full aspect-[16/9] min-h-[260px] max-h-[300px] sm:max-h-[340px] md:max-h-[360px] rounded-lg overflow-hidden border border-slate-200/90 shadow-sm bg-slate-900 group">
            <Image
              src={data.imageSrc}
              alt={data.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1160px"
              className="object-cover object-center"
              priority={false}
            />

          </div>
        </motion.div>

        {/* 3. Engineering Workflow Card (Clean Plain White with Theme Hover) */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="group/panel relative bg-white border border-slate-200/90 rounded-xl p-5 sm:p-7 md:p-8 mb-10 sm:mb-12 shadow-xs hover:shadow-xl hover:shadow-blue-900/5 hover:border-[#0056b3]/40 transition-all duration-300 overflow-hidden"
        >
          {/* Top gradient highlight on panel hover */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0056b3] via-sky-400 to-[#ff6b00] opacity-0 group-hover/panel:opacity-100 transition-opacity duration-300" />

          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 sm:pb-5 border-b border-slate-100 gap-1.5 sm:gap-0 mb-6 sm:mb-8">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#ff6b00] group-hover/panel:scale-125 transition-transform duration-300" />
              <div>
                <span className="text-[10.5px] font-bold tracking-widest text-[#0056b3] uppercase block">
                  ENGINEERING WORKFLOW
                </span>
                <h3 className="text-base sm:text-lg font-bold text-[#0b1f3a] tracking-tight group-hover/panel:text-[#0056b3] transition-colors duration-200">
                  From Design Concept to Manufacturing
                </h3>
              </div>
            </div>
          </div>

          {/* Connected Five Stages with Theme Hover Animation */}
          <div className="relative">
            {/* Connecting Line (hidden on small mobile screens) */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="hidden md:block absolute top-7 left-[4%] right-[4%] h-[2px] bg-gradient-to-r from-[#0056b3]/30 via-sky-300/40 to-[#ff6b00]/30 origin-left -z-0"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3.5 sm:gap-4 md:gap-3 relative z-10">
              {ENGINEERING_WORKFLOW_STAGES.map((stage, idx) => (
                <motion.div
                  key={stage.step}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.35,
                    delay: 0.07 * idx,
                    ease: "easeOut",
                  }}
                  className="group relative p-3 sm:p-3.5 rounded-xl border border-transparent hover:border-blue-200/80 hover:bg-gradient-to-b hover:from-blue-50/60 hover:to-white hover:shadow-md hover:-translate-y-1 flex flex-col items-start gap-2.5 transition-all duration-300 cursor-default overflow-hidden"
                >
                  {/* Top indicator bar on hover */}
                  <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#0056b3] to-[#ff6b00] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Step Node Badge */}
                  <div className="w-8 h-8 rounded-lg bg-blue-50/80 border border-blue-200/80 text-[#0056b3] flex items-center justify-center text-[12px] font-mono font-bold shrink-0 group-hover:bg-[#0056b3] group-hover:text-white group-hover:border-[#0056b3] group-hover:shadow-sm group-hover:shadow-blue-500/25 group-hover:scale-110 transition-all duration-300">
                    {stage.step}
                  </div>

                  {/* Stage Details */}
                  <div className="min-w-0 flex-1">
                    <h4 className="text-xs sm:text-[13px] font-bold text-[#0b1f3a] tracking-tight group-hover:text-[#0056b3] transition-colors duration-200 leading-snug">
                      {stage.title}
                    </h4>
                    <p className="text-[11.5px] sm:text-[12px] text-slate-500 group-hover:text-slate-600 leading-relaxed mt-1 transition-colors duration-200">
                      {stage.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
