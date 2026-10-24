"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Wrench, Activity, ClipboardCheck, AlertCircle } from "lucide-react";
import { MOLD_TESTING_STEPS } from "@/data/quality";

export const MoldTestingJourneySection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case "Wrench":
        return <Wrench className="w-5 h-5 text-[#0056b3]" />;
      case "Activity":
        return <Activity className="w-5 h-5 text-[#ff6b00]" />;
      case "ClipboardCheck":
        return <ClipboardCheck className="w-5 h-5 text-[#0056b3]" />;
      default:
        return <Activity className="w-5 h-5 text-[#0056b3]" />;
    }
  };

  return (
    <section
      id="mold-testing"
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
                <span>MOULD TESTING JOURNEY</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-semibold text-slate-900 tracking-tight leading-[1.18]">
                From Initial Dry Cycle To <span className="text-[#0056b3]">Trial Validation.</span>
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
                Mould testing evaluates mechanical actuation, slide timing, cooling balance, and sample part characteristics before handover, confirming ready integration on customer production lines.
              </p>
            </motion.div>
          </div>
        </div>

        {/* 2. Three-Step Arrangement with Connected Progression Line */}
        <div className="relative pt-2 pb-2">

          {/* Desktop Connecting Line Track */}
          <div className="hidden md:block absolute top-[44px] left-[16%] right-[16%] h-[2.5px] bg-slate-200/90 z-0 rounded-full overflow-hidden">
            {/* Animated Progress Line on Hover or Default Progression */}
            <motion.div
              className="h-full bg-gradient-to-r from-[#0056b3] via-[#0056b3] to-[#ff6b00]"
              initial={{ width: "33%" }}
              animate={{
                width:
                  hoveredIdx !== null
                    ? `${((hoveredIdx + 1) / MOLD_TESTING_STEPS.length) * 100}%`
                    : "100%",
              }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>

          {/* 3 Step Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {MOLD_TESTING_STEPS.map((stepItem, idx) => {
              const isCurrentOrPassed = hoveredIdx !== null && idx <= hoveredIdx;
              const isDirectlyHovered = hoveredIdx === idx;

              return (
                <motion.div
                  key={stepItem.step}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: 0.1 * idx,
                    ease: [0.21, 0.47, 0.32, 0.98],
                  }}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  className={`group relative p-5 sm:p-6 rounded-2xl border bg-white transition-all duration-300 flex flex-col justify-between cursor-pointer overflow-hidden ${isDirectlyHovered
                    ? "border-[#0056b3] shadow-lg shadow-blue-900/10 -translate-y-1.5 ring-1 ring-[#0056b3]/20"
                    : isCurrentOrPassed
                      ? "border-blue-200/90 shadow-md shadow-blue-900/5 -translate-y-0.5"
                      : "border-slate-200/90 shadow-xs hover:border-[#0056b3]/40 hover:shadow-md hover:-translate-y-1"
                    }`}
                >
                  {/* Top gradient highlight on hover */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0056b3] via-sky-400 to-[#ff6b00] transition-opacity duration-300 ${isDirectlyHovered || isCurrentOrPassed ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                      }`}
                  />

                  <div>
                    {/* Step Header with Phase and Number */}
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                      <div className="flex items-center gap-2">
                        {/* Status dot node */}
                        <span
                          className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${isDirectlyHovered
                            ? "bg-[#ff6b00] ring-4 ring-orange-100 scale-110"
                            : isCurrentOrPassed
                              ? "bg-[#0056b3]"
                              : "bg-slate-300 group-hover:bg-[#0056b3]"
                            }`}
                        />
                        <span
                          className={`text-xs font-mono font-bold uppercase tracking-wider transition-colors duration-300 ${isDirectlyHovered
                            ? "text-[#ff6b00]"
                            : isCurrentOrPassed
                              ? "text-[#0056b3]"
                              : "text-slate-600 group-hover:text-[#0056b3]"
                            }`}
                        >
                          {stepItem.phase}
                        </span>
                      </div>

                      {/* Number badge */}
                      <div
                        className={`w-8 h-8 rounded-lg border flex items-center justify-center font-mono font-bold text-xs transition-all duration-300 ${isDirectlyHovered
                          ? "bg-[#0056b3] text-white border-[#0056b3] scale-105 shadow-sm shadow-blue-500/30"
                          : isCurrentOrPassed
                            ? "bg-blue-100/90 text-[#0056b3] border-blue-300"
                            : "bg-blue-50/80 text-[#0056b3] border-blue-200/80 group-hover:bg-[#0056b3] group-hover:text-white group-hover:border-[#0056b3]"
                          }`}
                      >
                        {stepItem.step}
                      </div>
                    </div>

                    {/* Icon & Title */}
                    <div className="flex items-center gap-3 mt-1">
                      <div
                        className={`p-2.5 rounded-xl border transition-all duration-300 ${isDirectlyHovered
                          ? "bg-blue-50 border-blue-200 scale-105"
                          : "bg-slate-50/90 border-slate-200/90 group-hover:bg-blue-50 group-hover:border-blue-200"
                          }`}
                      >
                        {getStepIcon(stepItem.iconName)}
                      </div>
                      <h3
                        className={`text-sm sm:text-base font-bold transition-colors duration-200 ${isDirectlyHovered ? "text-[#0056b3]" : "text-slate-900 group-hover:text-[#0056b3]"
                          }`}
                      >
                        {stepItem.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-[12.5px] text-slate-500 group-hover:text-slate-600 mt-3.5 leading-relaxed">
                      {stepItem.description}
                    </p>
                  </div>

                  {/* Key Action footer */}
                  <div className="mt-5 pt-3.5 border-t border-slate-100 text-[11px] font-mono text-slate-500">
                    <span className="text-[#0056b3] font-semibold">Key Check:</span>{" "}
                    <span className="text-slate-600">{stepItem.keyAction}</span>
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
