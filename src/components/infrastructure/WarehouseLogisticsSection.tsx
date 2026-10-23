"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  WAREHOUSE_SECTION_DATA,
  MATERIAL_FLOW_STAGES,
} from "@/data/infrastructure";

export default function WarehouseLogisticsSection() {
  const data = WAREHOUSE_SECTION_DATA;

  return (
    <section
      id="warehouse-storage"
      className="py-14 sm:py-13 md:py-13 bg-white border-b border-slate-200/80 relative"
      aria-labelledby="warehouse-storage-heading"
    >
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1. Compact Two-Column Heading & Introduction Row */}
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
                {data.badge || "MATERIAL & MOULD LOGISTICS"}
              </span>
            </div>
            <h2
              id="warehouse-storage-heading"
              className="text-2xl sm:text-3xl md:text-[38px] font-bold text-[#0b1f3a] tracking-tight leading-tight sm:leading-snug"
            >
              {data.heading}
            </h2>
          </div>

          {/* Introductory Paragraph with thin blue vertical divider and orange accent (6 cols) */}
          <div className="md:col-span-6 md:border-l-2 md:border-blue-600/70 md:pl-6 relative">
            <div className="hidden md:block absolute -left-[2px] top-0 w-[2px] h-4 bg-[#ff6b00]" />
            <p className="text-slate-600 text-sm sm:text-[14.5px] leading-relaxed">
              {data.description[0]}
            </p>
          </div>
        </motion.div>

        {/* 2. Main Warehouse Showcase: Asymmetrical (~70% Image / ~30% Information Panel) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-7 items-stretch mb-10 sm:mb-12">
          {/* Left: Wide Warehouse Photograph (approx 70% width ~ 8.4 cols, use 8 or 8.5 cols) */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="lg:col-span-8 flex flex-col"
          >
            <div className="relative w-full aspect-[16/9] min-h-[280px] max-h-[360px] sm:max-h-[380px] md:max-h-[400px] rounded-lg overflow-hidden border border-slate-200/90 shadow-sm bg-slate-900 group">
              <Image
                src={data.imageSrc}
                alt={data.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 820px"
                className="object-cover object-center"
                priority={false}
              />

              {/* Bottom-left Compact Label */}
              <div className="absolute bottom-3 left-3 bg-slate-950/80 backdrop-blur-xs text-white px-3 py-1 rounded text-[11px] font-semibold tracking-wider border border-white/10 uppercase">
                ORGANIZED STORAGE &amp; MATERIAL HANDLING
              </div>
            </div>

            {/* Compact Caption */}
            <p className="mt-2 text-[12px] text-slate-500 flex items-center gap-1.5 pl-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00]" />
              Organized storage for mould components and supporting materials
            </p>
          </motion.div>

          {/* Right: Vertical Storage Information Panel (approx 30% width ~ 4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: 0.08, ease: "easeOut" }}
            className="lg:col-span-4 bg-white border border-slate-200/90 rounded-lg p-5 sm:p-6 shadow-2xs flex flex-col justify-between"
          >
            {/* Panel Heading with thin blue left border and orange accent */}
            <div className="pl-3 border-l-2 border-[#0056b3] relative pb-1">
              <div className="absolute -left-[2px] top-0 w-[2px] h-2.5 bg-[#ff6b00]" />
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#0b1f3a]">
                STORAGE &amp; HANDLING
              </h3>
              <p className="text-[11px] text-slate-500 font-medium">
                Component protection &amp; transit
              </p>
            </div>

            {/* Four Compact Information Rows */}
            <div className="divide-y divide-slate-100 my-auto py-2">
              {data.highlights.map((item, index) => (
                <div
                  key={index}
                  className="py-3 first:pt-2 last:pb-1 flex items-start gap-3 group hover:bg-slate-50/60 transition-colors rounded px-1 -mx-1"
                >
                  <span className="flex-shrink-0 text-xs font-mono font-bold text-[#0056b3] mt-0.5">
                    {item.label || `0${index + 1}`}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-[13px] font-semibold text-[#0b1f3a] leading-tight">
                      {item.title}
                    </h4>
                    <p className="text-[11.5px] sm:text-xs text-slate-500 leading-snug mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Subtle Footnote */}
            <div className="pt-2 border-t border-slate-100 text-[11px] text-slate-500 italic">
              Orderly inventory &amp; safe dispatch preparation
            </div>
          </motion.div>
        </div>

        {/* 3. Material-Handling Flow Diagram (Signature Feature) */}
        <div className="mb-10 sm:mb-12">
          <div className="flex items-center gap-2 mb-6 sm:mb-8">
            <span className="text-[11px] font-bold tracking-wider text-slate-500 uppercase">
              MATERIAL MOVEMENT FLOW
            </span>
            <div className="h-px bg-slate-200 flex-1 ml-2" />
          </div>

          <div className="relative">
            {/* Connecting Line across stages on desktop/tablet */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="hidden md:block absolute top-4 left-[3%] right-[3%] h-0.5 bg-blue-100 origin-left -z-0"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-5 sm:gap-6 md:gap-4 relative z-10">
              {MATERIAL_FLOW_STAGES.map((stage, idx) => (
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
                  {/* Compact Stage Marker */}
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-bold transition-colors ${idx === 3
                      ? "bg-white border-[#ff6b00] text-[#ff6b00] shadow-2xs"
                      : "bg-white border-[#0056b3] text-[#0056b3] shadow-2xs"
                      }`}
                  >
                    {stage.step}
                  </div>

                  {/* Stage Text */}
                  <div className="min-w-0 flex-1">
                    <h4 className="text-xs sm:text-[13px] font-bold text-[#0b1f3a] tracking-tight group-hover:text-[#0056b3] transition-colors leading-snug">
                      {stage.title}
                    </h4>
                    <p className="text-[11.5px] sm:text-xs text-slate-500 leading-snug mt-1">
                      {stage.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* 4. Compact Storage Information Footer */}
        {data.technicalDetails && data.technicalDetails.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="border-t border-slate-200/80 pt-5 sm:pt-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              {data.technicalDetails.map((detail, index) => (
                <div
                  key={index}
                  className="bg-slate-50/70 rounded p-3 sm:p-3.5 border border-slate-200/70"
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
