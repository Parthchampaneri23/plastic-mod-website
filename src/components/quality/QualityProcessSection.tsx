"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Layers,
  FileCheck2,
  Gauge,
  CheckCircle2,
  PlayCircle,
  ArrowRight,
  ShieldAlert,
} from "lucide-react";
import { QUALITY_PROCESS_STAGES } from "@/data/quality";

export const QualityProcessSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [activeStage, setActiveStage] = useState<number>(0);

  const getStageIcon = (iconName: string, isActive: boolean) => {
    const iconClass = `w-5 h-5 transition-colors duration-300 ${isActive ? "text-[#ff6b00]" : "text-[#0056b3] group-hover:text-[#ff6b00]"
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
                <span>QUALITY CONTROL PROCESS</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-semibold text-slate-900 tracking-tight leading-[1.18]">
                Structured From <span className="text-[#0056b3]">Ingot To Trial.</span>
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
                Our 5-stage quality process guides tooling through raw steel verification, engineering design validation, in-process machining checkpoints, bench assembly inspection, and functional mould trial testing.
              </p>
            </motion.div>
          </div>
        </div>

        {/* 2. Process Timeline - Horizontal on Desktop (lg+), Vertical Connected on Mobile/Tablet */}
        <div className="relative pt-4 pb-2">

          {/* Desktop Connected Process Line (Visible lg and above) */}
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5 relative z-10">
            {QUALITY_PROCESS_STAGES.map((stage, idx) => {
              const isSelected = activeStage === idx;

              return (
                <motion.div
                  key={stage.step}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: 0.1 * idx,
                    ease: [0.21, 0.47, 0.32, 0.98],
                  }}
                  onMouseEnter={() => setActiveStage(idx)}
                  className={`group relative p-4 sm:p-4.5 rounded-xl border transition-all duration-300 flex flex-col justify-between cursor-pointer ${isSelected
                      ? "bg-white border-[#0056b3] shadow-md shadow-blue-900/10 -translate-y-1"
                      : "bg-white/80 border-slate-200/90 hover:border-slate-300 hover:bg-white shadow-xs"
                    }`}
                >
                  {/* Top Highlight Indicator */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-[2.5px] rounded-t-xl transition-opacity duration-300 ${isSelected
                        ? "bg-gradient-to-r from-[#0056b3] to-[#ff6b00] opacity-100"
                        : "opacity-0 group-hover:opacity-100 bg-slate-300"
                      }`}
                  />

                  {/* Top Step Number Circle & Icon */}
                  <div className="flex items-center justify-between pb-3">
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all duration-300 ${isSelected
                          ? "bg-[#0056b3] text-white shadow-sm shadow-blue-600/30 scale-105"
                          : "bg-blue-50 text-[#0056b3] border border-blue-200/70 group-hover:border-[#0056b3]"
                        }`}
                    >
                      {stage.step}
                    </div>

                    <div
                      className={`p-1.5 rounded-lg transition-colors ${isSelected ? "bg-orange-50 border border-orange-200" : "bg-slate-50 border border-slate-100"
                        }`}
                    >
                      {getStageIcon(stage.iconName, isSelected)}
                    </div>
                  </div>

                  {/* Stage Title & Short Description */}
                  <div className="space-y-1.5 flex-1">
                    <h3
                      className={`text-xs sm:text-[13px] font-semibold leading-snug transition-colors ${isSelected ? "text-[#0056b3]" : "text-slate-900 group-hover:text-[#0056b3]"
                        }`}
                    >
                      {stage.title}
                    </h3>
                    <p className="text-[11px] sm:text-[11.5px] text-slate-500 leading-relaxed font-normal">
                      {stage.description}
                    </p>
                  </div>

                  {/* Specific Action Note */}
                  <div className="mt-3 pt-2.5 border-t border-slate-100 text-[10.5px] font-mono text-slate-400 group-hover:text-slate-600">
                    <span className="text-[#ff6b00] font-bold">Focus:</span> {stage.detail}
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
