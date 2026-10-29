"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Crosshair, Ruler, Sliders, Sparkles, Activity } from "lucide-react";
import { InProcessData } from "@/services/qualityService";

interface InProcessInspectionSectionProps {
  data?: InProcessData;
}

export const InProcessInspectionSection: React.FC<InProcessInspectionSectionProps> = ({
  data,
}) => {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredCheckpoint, setHoveredCheckpoint] = useState<string>("machining-accuracy");

  const badge = data?.badge || "IN-PROCESS QUALITY DASHBOARD";
  const headingPart1 = data?.headingPart1 || "Inspection Throughout";
  const headingHighlight = data?.headingHighlight || "Production.";
  const description =
    data?.description ||
    "Inspection takes place at appropriate manufacturing stages to identify deviations early. Machining parameters, coordinate datums, and fitting allowances are verified before components proceed to subsequent stations.";
  const checkpointsTitle = data?.checkpointsTitle || "Production Quality Checkpoints";
  const checkpointsSubtitle =
    data?.checkpointsSubtitle || "Key inspection stages during mould manufacturing";
  const checkpoints = data?.checkpoints || [];

  const getCheckpointIcon = (iconName: string) => {
    switch (iconName) {
      case "Crosshair":
        return <Crosshair className="w-5 h-5 text-[#0056b3]" />;
      case "Ruler":
        return <Ruler className="w-5 h-5 text-[#0056b3]" />;
      case "Sliders":
        return <Sliders className="w-5 h-5 text-[#0056b3]" />;
      case "Sparkles":
        return <Sparkles className="w-5 h-5 text-[#0056b3]" />;
      default:
        return <Crosshair className="w-5 h-5 text-[#0056b3]" />;
    }
  };

  return (
    <section
      id="in-process-inspection"
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

        {/* 2. Distinctive Central Inspection Dashboard Layout */}
        <div className="relative rounded-2xl bg-gradient-to-b from-slate-50 via-white to-blue-50/20 border border-slate-200/90 p-5 sm:p-7 lg:p-8 shadow-sm overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0056b3] via-sky-400 to-[#ff6b00]" />

          {/* Dashboard Header Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 mb-6 border-b border-slate-200/80">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#0056b3] text-white flex items-center justify-center shadow-xs">
                <Activity className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900">
                  {checkpointsTitle}
                </h3>
                <p className="text-[11px] text-slate-500 font-mono">
                  {checkpointsSubtitle}
                </p>
              </div>
            </div>
          </div>

          {/* 4 Connected Checkpoints Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 relative z-10">
            {checkpoints.map((cp, idx) => {
              const isHovered = hoveredCheckpoint === (cp.id || String(idx));
              return (
                <div
                  key={cp.id || idx}
                  onMouseEnter={() => setHoveredCheckpoint(cp.id || String(idx))}
                  className={`p-4 rounded-xl border transition-all duration-300 flex flex-col justify-between cursor-default ${
                    isHovered
                      ? "bg-white border-[#0056b3] shadow-md -translate-y-1"
                      : "bg-white/80 border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-9 h-9 rounded-lg bg-blue-50/80 border border-blue-200/60 flex items-center justify-center">
                        {getCheckpointIcon(cp.iconName)}
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-[#0056b3] font-semibold border border-blue-200/60">
                        {cp.stage}
                      </span>
                    </div>

                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 mb-1.5 leading-snug">
                      {cp.title}
                    </h4>

                    <p className="text-[11.5px] text-slate-500 leading-relaxed mb-3">
                      {cp.focus}
                    </p>
                  </div>

                  <div className="pt-2.5 border-t border-slate-100 text-[10.5px] font-mono text-[#0056b3]">
                    {cp.method}
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
