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
      className="py-14 sm:py-13 md:py-13 bg-slate-50/70 border-b border-slate-200/80 relative"
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

            {/* Bottom-left Compact Label */}
            <div className="absolute bottom-3 left-3 bg-slate-950/80 backdrop-blur-xs text-white px-3 py-1 rounded text-[11px] font-semibold tracking-wider border border-white/10 uppercase">
              ENGINEERING DESIGN &amp; PLANNING
            </div>
          </div>

          {/* Understated Caption */}
          <p className="mt-2 text-[12px] text-slate-500 flex items-center gap-1.5 pl-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00]" />
            CAD-based mould design and manufacturing preparation
          </p>
        </motion.div>

        {/* 3. Blueprint-Inspired Design Workflow (Signature Feature) */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="relative bg-white/90 border border-blue-200/60 rounded-lg p-5 sm:p-7 md:p-8 mb-10 sm:mb-12 shadow-2xs overflow-hidden"
          style={{
            backgroundImage: `radial-gradient(#0056b3 0.6px, transparent 0.6px)`,
            backgroundSize: "20px 20px",
            backgroundColor: "#f8fafc",
          }}
        >
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 sm:pb-6 border-b border-blue-100/90 gap-1.5 sm:gap-0 mb-6 sm:mb-8">
            <div>
              <span className="text-[10.5px] font-bold tracking-widest text-[#0056b3] uppercase">
                ENGINEERING WORKFLOW
              </span>
              <h3 className="text-base sm:text-lg font-bold text-[#0b1f3a] tracking-tight">
                From Design Concept to Manufacturing
              </h3>
            </div>
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider bg-white/80 px-2 py-0.5 rounded border border-slate-200/60 self-start sm:self-auto">
              CAD/CAM PIPELINE
            </span>
          </div>

          {/* Connected Five Stages */}
          <div className="relative">
            {/* Thin Blueprint Connecting Line (hidden on small mobile screens) */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="hidden md:block absolute top-3.5 left-[4%] right-[4%] h-[1.5px] bg-[#0056b3]/30 origin-left -z-0"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-5 sm:gap-6 md:gap-4 relative z-10">
              {ENGINEERING_WORKFLOW_STAGES.map((stage, idx) => (
                <motion.div
                  key={stage.step}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3,
                    delay: 0.06 * idx,
                    ease: "easeOut",
                  }}
                  className="flex sm:flex-col items-start gap-3 sm:gap-2.5 group"
                >
                  {/* Blueprint Technical Node */}
                  <div
                    className={`flex-shrink-0 w-7 h-7 rounded border-2 flex items-center justify-center text-[11px] font-mono font-bold transition-colors shadow-2xs ${idx === 2
                      ? "bg-white border-[#ff6b00] text-[#ff6b00]"
                      : "bg-white border-[#0056b3] text-[#0056b3]"
                      }`}
                  >
                    {stage.step}
                  </div>

                  {/* Stage Details */}
                  <div className="min-w-0 flex-1">
                    <h4 className="text-xs sm:text-[13px] font-bold text-[#0b1f3a] tracking-tight group-hover:text-[#0056b3] transition-colors leading-snug">
                      {stage.title}
                    </h4>
                    <p className="text-[11.5px] text-slate-600 leading-snug mt-1">
                      {stage.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 4. Three Compact Engineering Capability Highlights */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="border-t border-slate-200/90 pt-6 sm:pt-7"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200/80 gap-y-4 md:gap-y-0">
            {data.highlights.map((item, index) => (
              <div
                key={index}
                className={`flex items-start gap-3.5 group ${index === 0
                  ? "md:pr-6"
                  : index === 1
                    ? "md:px-6 pt-3 md:pt-0"
                    : "md:pl-6 pt-3 md:pt-0"
                  }`}
              >
                <span className="flex-shrink-0 text-xs font-mono font-bold text-[#0056b3] group-hover:text-[#ff6b00] transition-colors mt-0.5">
                  {item.label || `0${index + 1}`}
                </span>
                <div className="min-w-0 flex-1">
                  <h4 className="text-xs sm:text-[13px] font-bold text-[#0b1f3a] tracking-tight leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-[12px] text-slate-500 leading-relaxed mt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
