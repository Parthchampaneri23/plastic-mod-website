"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Compass, Maximize, BarChart2, Clock, CircleDot, Square, Wrench } from "lucide-react";
import { MEASUREMENT_EQUIPMENT_ITEMS } from "@/data/quality";

export const MeasurementEquipmentSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const getEquipmentIcon = (iconName: string) => {
    switch (iconName) {
      case "Compass":
        return <Compass className="w-5 h-5 text-[#0056b3]" />;
      case "Maximize":
        return <Maximize className="w-5 h-5 text-[#ff6b00]" />;
      case "BarChart2":
        return <BarChart2 className="w-5 h-5 text-[#0056b3]" />;
      case "Clock":
        return <Clock className="w-5 h-5 text-[#0056b3]" />;
      case "CircleDot":
        return <CircleDot className="w-5 h-5 text-[#0056b3]" />;
      case "Square":
        return <Square className="w-5 h-5 text-[#0056b3]" />;
      default:
        return <Wrench className="w-5 h-5 text-[#0056b3]" />;
    }
  };

  return (
    <section
      id="measurement-equipment"
      className="py-13 sm:py-13 bg-slate-50/70 border-b border-slate-200/90 scroll-mt-24 text-slate-800"
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
                <span>METROLOGY INSTRUMENTS</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-semibold text-slate-900 tracking-tight leading-[1.18]">
                Precision Measurement <span className="text-[#0056b3]">Instruments.</span>
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
                Key measuring instruments used in our toolroom to check mould dimensions, part accuracy, and smooth surface finish.
              </p>
            </motion.div>
          </div>
        </div>

        {/* 2. Professional Staggered Equipment Cards Catalogue */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {MEASUREMENT_EQUIPMENT_ITEMS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: 0.08 * idx,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className="group relative p-4 sm:p-5 rounded-xl border border-slate-200/90 bg-white hover:border-[#0056b3]/50 shadow-xs hover:shadow-md hover:shadow-blue-900/5 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-default"
            >
              {/* Left animated accent line */}
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#0056b3] to-[#ff6b00] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="space-y-3">
                {/* Category & Icon */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-[#0056b3] font-semibold border border-blue-200/60">
                    {item.category}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-200/80 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-blue-50 transition-all duration-300">
                    {getEquipmentIcon(item.iconName)}
                  </div>
                </div>

                {/* Name */}
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#0056b3] transition-colors duration-200 leading-snug">
                  {item.name}
                </h3>

                {/* Purpose */}
                <p className="text-xs text-slate-500 group-hover:text-slate-600 leading-relaxed font-normal">
                  {item.purpose}
                </p>
              </div>

              {/* Technical Decorative Tag */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[10.5px] font-mono text-slate-400">
                <span>TYPICAL SCOPE</span>
                <span className="text-slate-700 font-medium">{item.resolutionOrApplication}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
