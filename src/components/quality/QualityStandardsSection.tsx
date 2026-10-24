"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FileCheck, Cog, ShieldCheck, CheckCircle2, AlertCircle } from "lucide-react";
import { QUALITY_STANDARDS_BLOCKS } from "@/data/quality";

export const QualityStandardsSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const getStandardIcon = (iconName: string) => {
    switch (iconName) {
      case "FileCheck":
        return <FileCheck className="w-5 h-5 text-[#0056b3] group-hover:text-white transition-colors duration-200" />;
      case "Cog":
        return <Cog className="w-5 h-5 text-[#ff6b00] group-hover:text-white transition-colors duration-200" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-5 h-5 text-[#0056b3] group-hover:text-white transition-colors duration-200" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-[#0056b3] group-hover:text-white transition-colors duration-200" />;
    }
  };

  return (
    <section
      id="quality-standards"
      className="py-13 sm:py-13 bg-white border-b border-slate-200/90 scroll-mt-24 text-slate-800"
    >
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* 1. Header intro row */}
        <div className="mb-8 sm:mb-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-10">
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-[480px] space-y-2.5"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-[#0056b3] text-[11px] font-bold uppercase tracking-wider">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff6b00] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff6b00]"></span>
                </span>
                <span>QUALITY STANDARDS &amp; CERTIFICATIONS</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-semibold text-slate-900 tracking-tight leading-[1.18]">
                Quality Standards &amp; <span className="text-[#0056b3]">Certifications.</span>
              </h2>
            </motion.div>

            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative pl-4 sm:pl-4.5 max-w-[480px]"
            >
              <div
                className="absolute left-0 top-1 bottom-1 w-[3px] rounded-full bg-gradient-to-b from-[#0056b3] via-[#0056b3] to-[#ff6b00]"
                aria-hidden="true"
              />
              <p className="text-slate-600 text-xs sm:text-[13.5px] leading-relaxed font-normal">
                Manufacturing compliance is guided by agreed customer specifications, established toolmaking practices, and verified project records.
              </p>
            </motion.div>
          </div>
        </div>

        {/* 2. Three Information Blocks Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {QUALITY_STANDARDS_BLOCKS.map((block, idx) => (
            <motion.div
              key={block.title}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: 0.1 * idx,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className="group relative p-5 sm:p-6 rounded-2xl border border-slate-200/90 bg-white hover:border-[#0056b3]/50 shadow-xs hover:shadow-lg hover:shadow-blue-900/5 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-default"
            >
              {/* Top border accent line */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0056b3] via-sky-400 to-[#ff6b00] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                {/* Header & Icon */}
                <div className="flex items-center justify-between pb-3.5 mb-3 border-b border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-blue-50/80 border border-blue-200/80 flex items-center justify-center shrink-0 group-hover:bg-[#0056b3] group-hover:border-[#0056b3] group-hover:scale-105 group-hover:shadow-sm group-hover:shadow-blue-500/25 transition-all duration-300">
                    {getStandardIcon(block.iconName)}
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-semibold group-hover:bg-blue-50 group-hover:text-[#0056b3] transition-colors duration-200">
                    PILLAR 0{idx + 1}
                  </span>
                </div>

                <span className="text-[10.5px] font-mono text-[#ff6b00] font-bold uppercase tracking-wider">
                  {block.tagline}
                </span>

                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0056b3] transition-colors duration-200 mt-1 leading-snug">
                  {block.title}
                </h3>

                <p className="text-xs text-slate-500 group-hover:text-slate-600 leading-relaxed mt-2.5 font-normal transition-colors duration-200">
                  {block.description}
                </p>

                {/* Bullet Points */}
                <div className="mt-4 pt-3.5 border-t border-slate-100 space-y-2.5">
                  {block.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-600 group-hover:text-slate-700 transition-colors duration-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0056b3] shrink-0 mt-1.5 group-hover:bg-[#ff6b00] transition-colors duration-200" />
                      <span className="leading-relaxed">{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="mt-5 pt-3.5 border-t border-slate-100 text-[10.5px] font-mono text-slate-400 group-hover:text-slate-500 flex items-center justify-between transition-colors duration-200">
                <span>VERIFIED ON AGREED SCOPE</span>
                <span className="text-[#0056b3] opacity-0 group-hover:opacity-100 transition-opacity duration-200 font-semibold">✓ Documented</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
