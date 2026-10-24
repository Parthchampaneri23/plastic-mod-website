"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Crosshair, Ruler, Sliders, Sparkles, Activity, CheckCircle, Info } from "lucide-react";
import { IN_PROCESS_CHECKPOINTS } from "@/data/quality";

export const InProcessInspectionSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredCheckpoint, setHoveredCheckpoint] = useState<string>("machining-accuracy");

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
                <span>IN-PROCESS QUALITY DASHBOARD</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-semibold text-slate-900 tracking-tight leading-[1.18]">
                Inspection Throughout <span className="text-[#0056b3]">Production.</span>
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
                Inspection takes place at appropriate manufacturing stages to identify deviations early. Machining parameters, coordinate datums, and fitting allowances are verified before components proceed to subsequent stations.
              </p>
            </motion.div>
          </div>
        </div>

        {/* 2. Distinctive Central Inspection Dashboard Layout */}
        <div className="relative rounded-2xl bg-gradient-to-b from-slate-50 via-white to-blue-50/20 border border-slate-200/90 p-5 sm:p-7 lg:p-8 shadow-sm overflow-hidden">
          {/* Top subtle accent stripe */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0056b3] via-sky-400 to-[#ff6b00]" />

          {/* Dashboard Header Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 mb-6 border-b border-slate-200/80">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#0056b3] text-white flex items-center justify-center shadow-xs">
                <Activity className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900">
                  Production Quality Checkpoints
                </h3>
                <p className="text-[11px] text-slate-500 font-mono">
                  Key inspection stages during mould manufacturing
                </p>
              </div>
            </div>
          </div>

          {/* 4 Connected Checkpoints Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 relative z-10">
            {IN_PROCESS_CHECKPOINTS.map((cp, idx) => {
              const isHovered = hoveredCheckpoint === cp.id;

              return (
                <motion.div
                  key={cp.id}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: 0.08 * idx,
                    ease: [0.21, 0.47, 0.32, 0.98],
                  }}
                  onMouseEnter={() => setHoveredCheckpoint(cp.id)}
                  className={`group relative p-4 sm:p-5 rounded-xl border transition-all duration-300 flex flex-col justify-between cursor-pointer ${isHovered
                    ? "bg-white border-[#0056b3] shadow-md shadow-blue-900/10 -translate-y-1"
                    : "bg-white/90 border-slate-200/90 hover:border-slate-300 shadow-xs"
                    }`}
                >
                  {/* Top indicator on active */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-[2.5px] rounded-t-xl transition-opacity duration-300 ${isHovered
                      ? "bg-gradient-to-r from-[#0056b3] to-[#ff6b00] opacity-100"
                      : "opacity-0 bg-slate-300"
                      }`}
                  />

                  <div>
                    {/* Top Status & Stage Badge */}
                    <div className="flex items-center justify-between pb-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-50/80 border border-blue-200/80 text-[#0056b3] flex items-center justify-center shrink-0 group-hover:bg-[#0056b3] group-hover:text-white group-hover:border-[#0056b3] group-hover:scale-105 transition-all duration-300">
                        <span className="text-xs font-mono font-bold tracking-tight">
                          0{idx + 1}
                        </span>
                      </div>

                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-semibold">
                        GATE 0{idx + 1}
                      </span>
                    </div>

                    {/* Title & Stage Label */}
                    <p className="text-[10.5px] font-mono text-[#ff6b00] uppercase font-bold tracking-wider">
                      {cp.stage}
                    </p>
                    <h4 className="text-sm font-semibold text-slate-900 group-hover:text-[#0056b3] transition-colors duration-200 mt-0.5 leading-snug">
                      {cp.title}
                    </h4>

                    {/* Focus Points */}
                    <p className="text-[11.5px] text-slate-500 group-hover:text-slate-600 leading-relaxed mt-2">
                      {cp.focus}
                    </p>
                  </div>

                  {/* Verification Instrument / Method footer */}
                  <div className="mt-4 pt-3 border-t border-slate-100 text-[10.5px] font-mono text-slate-500">
                    <span className="text-[#0056b3] font-semibold">Method:</span> {cp.method}
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
