"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  DESIGN_SECTION_DATA,
  ENGINEERING_WORKFLOW_STAGES,
  InfrastructureSectionData,
} from "@/data/infrastructure";

interface EngineeringDesignSectionProps {
  data?: InfrastructureSectionData & {
    stages?: Array<{ step: string; title: string; description?: string }>;
  };
}

export default function EngineeringDesignSection({ data: propData }: EngineeringDesignSectionProps) {
  const data = propData || DESIGN_SECTION_DATA;

  const workflowStages =
    propData?.stages && propData.stages.length > 0
      ? propData.stages
      : ENGINEERING_WORKFLOW_STAGES;

  return (
    <section
      id="engineering-design"
      className="py-13 sm:py-13 md:py-13 bg-slate-50/70 border-b border-slate-200/80 relative"
      aria-labelledby="engineering-design-heading"
    >
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1. Full-Width Two-Column Introduction Row */}
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
                {data.badge || "CAD / CAM FACILITY"}
              </span>
            </div>
            <h2
              id="engineering-design-heading"
              className="text-2xl sm:text-3xl md:text-[38px] font-bold text-[#0b1f3a] tracking-tight leading-tight sm:leading-snug"
            >
              {data.heading || "Engineering Design & Planning"}
            </h2>
            {data.subheading && (
              <p className="mt-2 text-xs sm:text-[13px] font-medium text-slate-500 leading-snug">
                {data.subheading}
              </p>
            )}
          </div>

          {/* Introductory Paragraph with matching vertical blue-to-orange accent line */}
          <div className="md:col-span-6 relative pl-4 sm:pl-4.5 max-w-[480px]">
            {/* Subtle vertical blue-to-orange accent line */}
            <div
              className="absolute left-0 top-1 bottom-1 w-[3px] rounded-full bg-gradient-to-b from-[#0056b3] via-[#0056b3] to-[#ff6b00]"
              aria-hidden="true"
            />
            <p className="text-slate-600 text-xs sm:text-[13.5px] md:text-sm leading-relaxed font-normal">
              {data.description?.[0] || ""}
            </p>
          </div>
        </motion.div>

        {/* 2. Main Studio Showcase: Visual Workspace + Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 items-center mb-10 sm:mb-12">
          {/* Left: Studio Image */}
          <div className="lg:col-span-5 w-full flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="w-full max-w-[420px] group"
            >
              <div className="relative w-full aspect-[4/4.3] max-h-[440px] rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm bg-slate-900 group-hover:border-slate-300 transition-colors duration-300">
                <Image
                  src={data.imageSrc || "/infrastructure/engineering-design.jpg"}
                  alt={data.imageAlt || "Engineering Design CAD workstations"}
                  fill
                  sizes="(max-width: 1024px) 100vw, 420px"
                  priority={false}
                  className="object-cover object-center filter brightness-[0.98] contrast-[1.02]"
                />
              </div>
            </motion.div>
          </div>

          {/* Right: Design Capability Cards */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-4 lg:pl-2">
            <div className="flex items-center gap-2.5 pb-1">
              <span className="w-2 h-2 rounded-full bg-[#ff6b00]" />
              <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                {data.stepsHeading || "Design & Simulation Deliverables"}
              </h3>
            </div>

            <div className="space-y-3 w-full">
              {(data.highlights || []).map((item, idx) => (
                <motion.div
                  key={item.title || idx}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.35, delay: 0.08 * idx }}
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

        {/* 3. Sequential 5-Stage Engineering Workflow Track */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45 }}
          className="rounded-2xl bg-white border border-slate-200/90 p-5 sm:p-7 shadow-xs relative overflow-hidden"
        >
          <div className="mb-4 sm:mb-5 pb-3 border-b border-slate-100 flex items-center justify-between">
            <div>
              <span className="text-[11px] font-bold text-[#ff6b00] uppercase tracking-wider block mb-0.5">
                Integrated Workflow
              </span>
              <h3 className="text-base sm:text-lg font-bold text-[#0b1f3a] tracking-tight">
                From Concept Specification to Shop-Floor CAM Execution
              </h3>
            </div>
            <span className="hidden sm:inline-block px-2.5 py-1 rounded bg-slate-100 text-slate-600 font-mono text-[11px] font-bold uppercase">
              5 Connected Stages
            </span>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-7 left-[4%] right-[4%] h-[2px] bg-gradient-to-r from-[#0056b3]/30 via-sky-300/40 to-[#ff6b00]/30 origin-left -z-0" />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3.5 sm:gap-4 md:gap-3 relative z-10">
              {workflowStages.map((stage, idx) => (
                <div
                  key={stage.step || idx}
                  className="group relative p-3 sm:p-3.5 rounded-xl border border-transparent hover:border-blue-200/80 hover:bg-gradient-to-b hover:from-blue-50/60 hover:to-white hover:shadow-md hover:-translate-y-1 flex flex-col items-start gap-2.5 transition-all duration-300 cursor-default overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#0056b3] to-[#ff6b00] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="w-8 h-8 rounded-lg bg-blue-50/80 border border-blue-200/80 text-[#0056b3] flex items-center justify-center text-[12px] font-mono font-bold shrink-0 group-hover:bg-[#0056b3] group-hover:text-white group-hover:border-[#0056b3] group-hover:shadow-sm group-hover:shadow-blue-500/25 group-hover:scale-110 transition-all duration-300">
                    {stage.step || `0${idx + 1}`}
                  </div>

                  <div className="min-w-0 flex-1">
                    <h4 className="text-xs sm:text-[13px] font-bold text-[#0b1f3a] tracking-tight group-hover:text-[#0056b3] transition-colors duration-200 leading-snug">
                      {stage.title}
                    </h4>
                    <p className="text-[11.5px] sm:text-[12px] text-slate-500 group-hover:text-slate-600 leading-relaxed mt-1 transition-colors duration-200">
                      {stage.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
