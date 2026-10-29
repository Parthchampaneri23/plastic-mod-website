"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Layers,
  FileCheck2,
  Gauge,
  CheckCircle2,
  PlayCircle,
} from "lucide-react";
import { QualityProcessData } from "@/services/qualityService";

interface QualityProcessSectionProps {
  data?: QualityProcessData;
}

export const QualityProcessSection: React.FC<QualityProcessSectionProps> = ({ data }) => {
  const shouldReduceMotion = useReducedMotion();
  const [activeStage, setActiveStage] = useState<number>(0);

  const badge = data?.badge || "QUALITY CONTROL PROCESS";
  const headingPart1 = data?.headingPart1 || "Structured From";
  const headingHighlight = data?.headingHighlight || "Ingot To Trial.";
  const description =
    data?.description ||
    "Our 5-stage quality process guides tooling through raw steel verification, engineering design validation, in-process machining checkpoints, bench assembly inspection, and functional mould trial testing.";
  const stages = data?.stages || [];

  const getStageIcon = (iconName: string, isActive: boolean) => {
    const iconClass = `w-5 h-5 transition-colors duration-300 ${
      isActive ? "text-[#ff6b00]" : "text-[#0056b3] group-hover:text-[#ff6b00]"
    }`;
    switch (iconName) {
      case "Layers":
        return <Layers className={iconClass} />;
      case "FileCheck2":
        return <FileCheck2 className={iconClass} />;
      case "Gauge":
        return <Gauge className={iconClass} />;
      case "CheckCircle2":
        return <CheckCircle2 className={iconClass} />;
      case "PlayCircle":
        return <PlayCircle className={iconClass} />;
      default:
        return <CheckCircle2 className={iconClass} />;
    }
  };

  return (
    <section
      id="quality-process"
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
                <span>{badge}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-semibold text-slate-900 tracking-tight leading-[1.18]">
                {headingPart1} <span className="text-[#0056b3]">{headingHighlight}</span>
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
                {description}
              </p>
            </motion.div>
          </div>
        </div>

        {/* 2. Process Timeline */}
        <div className="relative pt-4 pb-2">
          {/* Desktop Connected Line */}
          <div className="hidden lg:block absolute top-[52px] left-[5%] right-[5%] h-[2px] bg-slate-200 z-0">
            <motion.div
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-[#0056b3] via-[#0056b3] to-[#ff6b00]"
            />
          </div>

          {/* 5 Process Stage Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative z-10">
            {stages.map((stage, idx) => {
              const isSelected = activeStage === idx;
              return (
                <div
                  key={stage.step || idx}
                  onClick={() => setActiveStage(idx)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between group ${
                    isSelected
                      ? "bg-blue-50/70 border-[#0056b3] shadow-sm"
                      : "bg-white border-slate-200/90 hover:border-slate-300 hover:shadow-xs"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-9 h-9 rounded-lg bg-blue-50/80 border border-blue-200/60 flex items-center justify-center">
                        {getStageIcon(stage.iconName, isSelected)}
                      </div>
                      <span className="text-xs font-mono font-bold text-[#ff6b00]">
                        {stage.step}
                      </span>
                    </div>

                    <h3 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#0056b3] transition-colors leading-snug mb-1.5">
                      {stage.title}
                    </h3>

                    <p className="text-[11.5px] text-slate-500 leading-relaxed mb-3">
                      {stage.description}
                    </p>
                  </div>

                  <div className="pt-2.5 border-t border-slate-100 text-[10.5px] text-slate-600 font-medium">
                    {stage.detail}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
