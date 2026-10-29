"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Wrench, Activity, ClipboardCheck } from "lucide-react";
import { MoldTestingData } from "@/services/qualityService";

interface MoldTestingJourneySectionProps {
  data?: MoldTestingData;
}

export const MoldTestingJourneySection: React.FC<MoldTestingJourneySectionProps> = ({
  data,
}) => {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const badge = data?.badge || "MOULD TESTING JOURNEY";
  const headingPart1 = data?.headingPart1 || "From Initial Dry Cycle To";
  const headingHighlight = data?.headingHighlight || "Trial Validation.";
  const description =
    data?.description ||
    "Mould testing evaluates mechanical actuation, slide timing, cooling balance, and sample part characteristics before handover, confirming ready integration on customer production lines.";
  const steps = data?.steps || [];

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

        {/* 2. Three-Step Arrangement with Connected Progression Line */}
        <div className="relative pt-2 pb-2">
          {/* Desktop Connecting Line Track */}
          <div className="hidden md:block absolute top-[44px] left-[16%] right-[16%] h-[2.5px] bg-slate-200/90 z-0 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#0056b3] via-[#0056b3] to-[#ff6b00]"
              initial={{ width: "33%" }}
              animate={{
                width:
                  hoveredIdx !== null
                    ? `${((hoveredIdx + 1) / (steps.length || 1)) * 100}%`
                    : "100%",
              }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>

          {/* Step Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {steps.map((stepItem, idx) => {
              return (
                <motion.div
                  key={stepItem.step || idx}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  className="bg-white rounded-2xl p-6 border border-slate-200/90 hover:border-[#0056b3]/50 transition-all duration-300 shadow-xs hover:shadow-md flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-50/80 border border-blue-200/60 flex items-center justify-center">
                        {getStepIcon(stepItem.iconName)}
                      </div>
                      <span className="text-xs font-mono font-bold text-[#ff6b00]">
                        {stepItem.phase}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 mb-2">
                      {stepItem.title}
                    </h3>

                    <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed mb-4">
                      {stepItem.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 text-[11px] font-mono text-[#0056b3]">
                    {stepItem.keyAction}
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
