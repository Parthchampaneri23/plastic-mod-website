"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Crosshair, Ruler, CheckCircle2, ShieldCheck } from "lucide-react";
import { QualityOverviewData } from "@/services/qualityService";

interface QualityHeroProps {
  data?: QualityOverviewData;
}

export const QualityHero: React.FC<QualityHeroProps> = ({ data }) => {
  const shouldReduceMotion = useReducedMotion();

  const badge = data?.badge || "METROLOGY & INSPECTION OVERVIEW";
  const headingPart1 = data?.headingPart1 || "Precision Checked.";
  const headingHighlight = data?.headingHighlight || "Quality Assured.";
  const description =
    data?.description ||
    "At Patel Mould Industries, our approach to precision mould manufacturing combines incoming tool steel verification, stage-wise in-process checks, critical core-cavity dimensional inspection, and functional mould trial evaluation.";
  const image = data?.image || "/quality/quality-inspection-metrology.jpg";
  const pillars = data?.pillars || [];

  const getPillarIcon = (iconName?: string) => {
    switch (iconName) {
      case "Crosshair":
        return <Crosshair className="w-4 h-4 text-[#0056b3]" />;
      case "Ruler":
        return <Ruler className="w-4 h-4 text-[#ff6b00]" />;
      case "CheckCircle2":
        return <CheckCircle2 className="w-4 h-4 text-[#0056b3]" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-4 h-4 text-[#0056b3]" />;
      default:
        return <CheckCircle2 className="w-4 h-4 text-[#0056b3]" />;
    }
  };

  return (
    <section
      id="quality-overview"
      className="py-13 sm:py-13 md:py-13 bg-white border-b border-slate-200/90 scroll-mt-24 text-slate-800"
    >
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1. TWO-COLUMN INTRODUCTION ROW */}
        <div className="mb-7 sm:mb-9">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-10">
            {/* Left Column: Eyebrow + Heading */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="max-w-[480px] space-y-2.5"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-[#0056b3] text-[11px] font-bold uppercase tracking-wider">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff6b00] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff6b00]"></span>
                </span>
                <span>{badge}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-semibold text-slate-900 tracking-tight leading-[1.18]">
                {headingPart1}{" "}
                <span className="text-[#0056b3]">{headingHighlight}</span>
              </h2>
            </motion.div>

            {/* Right Column: Paragraph with subtle vertical accent line */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="relative pl-4 sm:pl-4.5 max-w-[480px]"
            >
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

        {/* 2. MAIN TWO-COLUMN CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 items-center">
          {/* Left Column: Photograph */}
          <div className="lg:col-span-5 w-full flex flex-col items-center lg:items-start justify-center">
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="w-full max-w-[420px] group"
            >
              <div className="relative w-full aspect-[4/4.3] max-h-[440px] rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm bg-slate-900 group-hover:border-slate-300 transition-colors duration-300">
                <Image
                  src={image}
                  alt="Precision toolroom dimensional inspection of steel mould assembly on granite table at Patel Mould Industries"
                  fill
                  sizes="(max-width: 1024px) 100vw, 420px"
                  priority={false}
                  className="object-cover object-center filter brightness-[0.98] contrast-[1.02]"
                />
              </div>
            </motion.div>
          </div>

          {/* Right Column: Pillars */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-4 lg:pl-2">
            <div className="space-y-3 w-full">
              {pillars.map((item, idx) => (
                <motion.div
                  key={item.title || idx}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: 0.12 + idx * 0.08,
                    ease: [0.21, 0.47, 0.32, 0.98],
                  }}
                  className="group relative p-3 sm:p-3.5 rounded-xl border border-slate-200/80 bg-white hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-white hover:border-[#0056b3]/40 shadow-xs hover:shadow-md hover:shadow-blue-900/5 hover:-translate-y-0.5 transition-all duration-300 flex items-start gap-3.5 cursor-default overflow-hidden"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#0056b3] to-[#ff6b00] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="w-8 h-8 rounded-lg bg-blue-50/80 border border-blue-200/80 text-[#0056b3] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#0056b3] group-hover:text-white group-hover:border-[#0056b3] group-hover:shadow-sm group-hover:shadow-blue-500/20 group-hover:scale-105 transition-all duration-300">
                    <span className="text-xs font-mono font-bold tracking-tight">
                      {item.label || `0${idx + 1}`}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs sm:text-[13.5px] font-semibold text-slate-900 group-hover:text-[#0056b3] transition-colors duration-200 leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-[11.5px] sm:text-[12px] text-slate-500 group-hover:text-slate-600 mt-1 leading-relaxed transition-colors duration-200">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
