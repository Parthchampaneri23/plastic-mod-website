'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import {
  ClipboardList,
  Compass,
  Layers,
  Cog,
  Zap,
  Wrench,
  Search,
  CheckCircle,
  PackageCheck,
  ChevronLeft,
  ChevronRight,
  Check,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import { Button } from '../Button';

interface StageData {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  activities: string[];
  deliverable: string;
  toolingAspect: string;
  tag: string;
}

const STAGES: StageData[] = [
  {
    step: '01',
    title: 'Requirement Analysis',
    subtitle: 'Product requirements and tooling feasibility',
    description:
      "Review the customer's product drawings, application requirements and intended production needs to establish the initial mould scope.",
    activities: [
      'Review product drawings and specifications',
      'Understand application and material requirements',
      'Assess tooling feasibility',
      'Define initial project requirements',
    ],
    deliverable: 'Reviewed Requirements & Feasibility Summary',
    toolingAspect: 'Resin rheology, neck finish, shrinkage & cavitation study',
    tag: 'Feasibility Review',
  },
  {
    step: '02',
    title: 'Mould Design',
    subtitle: 'Engineering design and mould layout',
    description:
      'Develop the mould design around the part geometry, tooling configuration and manufacturing requirements.',
    activities: [
      'Develop the 3D mould concept',
      'Review cavity and core arrangement',
      'Consider cooling and ejection requirements',
      'Review the design for manufacturability',
    ],
    deliverable: 'Reviewed Mould Design',
    toolingAspect: '3D CAD stack assembly, thermal cooling flow & runner sizing',
    tag: 'CAD / CAE Layout',
  },
  {
    step: '03',
    title: 'Material Selection',
    subtitle: 'Material and component planning',
    description:
      'Select suitable mould materials and supporting components according to the design, application and expected production conditions.',
    activities: [
      'Review mould material requirements',
      'Consider wear and operating conditions',
      'Identify standard mould components',
      'Prepare material and component planning',
    ],
    deliverable: 'Approved Material and Component Plan',
    toolingAspect: 'Bohler/Stavax ESR steel metallurgy, hardness & wear inserts',
    tag: 'Metallurgy Planning',
  },
  {
    step: '04',
    title: 'CNC Machining',
    subtitle: 'Precision machining of mould components',
    description:
      'Machine the required mould components using appropriate CNC machining operations and approved engineering data.',
    activities: [
      'Prepare machining operations',
      'Machine suitable core and cavity components',
      'Check component dimensions during production',
      'Review machined surfaces and features',
    ],
    deliverable: 'Machined Mould Components',
    toolingAspect: 'High-speed 5-axis roughing and finishing with micro tools',
    tag: '5-Axis Toolroom',
  },
  {
    step: '05',
    title: 'EDM / Precision Machining',
    subtitle: 'Detailed profiles and mould features',
    description:
      'Produce intricate profiles and features using suitable EDM and other precision machining methods where required by the design.',
    activities: [
      'Identify features requiring EDM or precision machining',
      'Produce detailed cavity and profile features',
      'Check critical geometry against drawings',
      'Inspect machined features',
    ],
    deliverable: 'Precision-Machined Components',
    toolingAspect: 'Sub-micron spark erosion & 4-axis wire-cut split neck rings',
    tag: 'Mirror Spark EDM',
  },
  {
    step: '06',
    title: 'Mould Assembly',
    subtitle: 'Assembly and component fitment',
    description:
      'Assemble the machined components and supporting elements according to the approved mould design.',
    activities: [
      'Inspect components before assembly',
      'Fit cores, cavities and supporting elements',
      'Check alignment and component movement',
      'Perform assembly checks',
    ],
    deliverable: 'Assembled Mould for Inspection',
    toolingAspect: 'Optical bluing contact verification & manifold thermal wiring',
    tag: 'Master Bench Fitting',
  },
  {
    step: '07',
    title: 'Quality Inspection',
    subtitle: 'Dimensional and workmanship checks',
    description:
      'Inspect the completed tooling against relevant drawings, dimensional requirements and applicable quality criteria.',
    activities: [
      'Check critical dimensions',
      'Review component fit and alignment',
      'Inspect workmanship and surface condition',
      'Document applicable inspection findings',
    ],
    deliverable: 'Inspection Record and Review',
    toolingAspect: 'Zeiss 3D CMM coordinate verification & pressure leak checks',
    tag: 'Metrology QA',
  },
  {
    step: '08',
    title: 'Mould Trial',
    subtitle: 'Trial and functional evaluation',
    description:
      'Conduct appropriate mould trials to evaluate mould operation and review sample parts against the agreed requirements.',
    activities: [
      'Prepare the mould for trial',
      'Evaluate mould operation under suitable conditions',
      'Review trial samples',
      'Record observations and required adjustments',
    ],
    deliverable: 'Mould Trial Review and Action List',
    toolingAspect: 'Real-world injection press trial runs & container sample testing',
    tag: 'Injection Press Trial',
  },
  {
    step: '09',
    title: 'Final Delivery',
    subtitle: 'Final review and handover',
    description:
      'Complete the applicable final checks, prepare agreed documentation and coordinate delivery of the finished mould.',
    activities: [
      'Complete final review and agreed checks',
      'Organize relevant tooling documentation',
      'Confirm agreed delivery requirements',
      'Prepare the handover',
    ],
    deliverable: 'Completed Mould and Handover Documentation',
    toolingAspect: 'VCI corrosion barrier, seaworthy crating & commissioning pack',
    tag: 'Dispatch & Handover',
  },
];

// Stage icon helper mapping
const getStageIcon = (idx: number, className: string) => {
  switch (idx) {
    case 0:
      return <ClipboardList className={className} />;
    case 1:
      return <Compass className={className} />;
    case 2:
      return <Layers className={className} />;
    case 3:
      return <Cog className={className} />;
    case 4:
      return <Zap className={className} />;
    case 5:
      return <Wrench className={className} />;
    case 6:
      return <Search className={className} />;
    case 7:
      return <CheckCircle className={className} />;
    case 8:
    default:
      return <PackageCheck className={className} />;
  }
};

export const MoldManufacturingProcess: React.FC = () => {
  const [activeStageIdx, setActiveStageIdx] = useState<number>(0);
  const current = STAGES[activeStageIdx] || STAGES[0];

  // Calculate navigation progress percentage
  const progressPercentage = Math.round(((activeStageIdx + 1) / STAGES.length) * 100);

  return (
    <section
      id="process"
      className="py-13 sm:py-13 bg-[#F6F8FC] relative border-b border-[#DFE7F1] overflow-hidden text-slate-800"
    >
      {/* Background Subtle Tech Grid */}
      <div className="absolute inset-0 tech-grid-pattern opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ======================================================== */}
        {/* 1. SECTION HEADING & INTRODUCTION                        */}
        {/* ======================================================== */}
        <div className="mb-10 sm:mb-12">
          {/* Eyebrow Pill */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-blue-200/80 text-[#075BBB] text-xs font-mono font-bold uppercase tracking-wider mb-4 shadow-xs"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF792D] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF792D]"></span>
            </span>
            <span>MOLD MANUFACTURING PROCESS</span>
          </motion.div>

          {/* Heading (left) & Supporting description (right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-12 items-end">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="lg:col-span-7"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#10233F] tracking-tight leading-[1.2]">
                From Concept to <span className="text-[#075BBB]">Finished Mould</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="lg:col-span-5 relative pl-5 sm:pl-6"
            >
              <div className="absolute left-0 top-1 bottom-1 w-[3px] rounded-full bg-gradient-to-b from-[#075BBB] to-[#FF792D]" />
              <p className="text-[#526176] text-sm sm:text-base font-normal leading-relaxed">
                A structured manufacturing journey that brings together engineering, precision machining, quality checks and mould trials to support reliable tooling delivery.
              </p>
            </motion.div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* 2. PROGRESS HEADER & TIMELINE METRICS                    */}
        {/* ======================================================== */}
        <div className="mb-4 sm:mb-5 flex flex-wrap items-center justify-between gap-3 px-1">
          <div className="flex items-center gap-2.5">
            <span className="px-2.5 py-1 rounded-md bg-blue-50 border border-blue-200/80 text-[#075BBB] font-mono text-[11px] font-bold">
              STAGE {current.step} OF 09
            </span>
            <span className="text-xs font-mono font-semibold text-[#FF792D]">
              {progressPercentage}% JOURNEY COMPLETE
            </span>
          </div>

          {/* Mini Visual Step Indicator Pill */}
          <div className="flex items-center gap-1.5 bg-white border border-[#DFE7F1] px-3 py-1 rounded-full shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#075BBB] animate-pulse" />
            <span className="text-[11px] font-medium text-[#10233F]">
              Current: <strong className="text-[#075BBB] font-semibold">{current.title}</strong>
            </span>
          </div>
        </div>

        {/* ======================================================== */}
        {/* 3. VIBRANT CONNECTED 9-STAGE TIMELINE STRIP              */}
        {/* ======================================================== */}
        <div className="relative mb-6 sm:mb-8 p-2 rounded-2xl bg-white border border-[#DFE7F1] shadow-xs">
          {/* Subtle Top Gradient Progress Line */}
          <div className="hidden lg:block absolute top-[36px] left-[3.5%] right-[3.5%] h-[2.5px] bg-slate-100 rounded-full z-0 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#075BBB] via-[#075BBB] to-[#FF792D]"
              animate={{ width: `${(activeStageIdx / (STAGES.length - 1)) * 100}%` }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
            />
          </div>

          {/* 9 Stages Interactive Selector Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9 gap-1.5 sm:gap-2 relative z-10">
            {STAGES.map((stage, idx) => {
              const isActive = activeStageIdx === idx;
              const isPassed = idx < activeStageIdx;

              return (
                <button
                  key={stage.step}
                  type="button"
                  onClick={() => setActiveStageIdx(idx)}
                  onMouseEnter={() => setActiveStageIdx(idx)}
                  onFocus={() => setActiveStageIdx(idx)}
                  role="tab"
                  aria-selected={isActive}
                  className={`p-2.5 sm:p-3 rounded-xl text-left transition-all duration-200 border relative group cursor-pointer select-none focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#075BBB] flex flex-col justify-between ${isActive
                    ? 'bg-gradient-to-b from-[#075BBB] to-[#054694] border-[#075BBB] text-white shadow-md shadow-blue-900/20 -translate-y-0.5'
                    : isPassed
                      ? 'bg-blue-50/50 border-blue-200/70 text-[#10233F] hover:bg-blue-50 hover:border-[#075BBB]/60'
                      : 'bg-slate-50/70 border-slate-200/80 text-[#10233F] hover:bg-white hover:border-blue-300'
                    }`}
                >
                  {/* Top: Step pill + Icon */}
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`w-5 h-5 sm:w-6 sm:h-6 rounded-lg font-mono text-[10px] font-bold flex items-center justify-center shrink-0 transition-colors ${isActive
                        ? 'bg-white text-[#075BBB] shadow-xs'
                        : isPassed
                          ? 'bg-white border border-blue-200 text-[#075BBB]'
                          : 'bg-white border border-slate-200 text-slate-400 group-hover:text-[#075BBB] group-hover:border-blue-200'
                        }`}
                    >
                      {stage.step}
                    </span>

                    <span
                      className={`transition-colors ${isActive
                        ? 'text-white'
                        : isPassed
                          ? 'text-[#075BBB]'
                          : 'text-slate-400 group-hover:text-[#075BBB]'
                        }`}
                    >
                      {getStageIcon(idx, 'w-3.5 h-3.5')}
                    </span>
                  </div>

                  {/* Stage Title */}
                  <div
                    className={`text-xs font-semibold leading-snug tracking-tight transition-colors line-clamp-2 ${isActive ? 'text-white font-bold' : 'text-[#10233F]'
                      }`}
                  >
                    {stage.title}
                  </div>

                  {/* Bottom Active Indicator Bar */}
                  {isActive && (
                    <motion.div
                      layoutId="activeStageIndicator"
                      className="absolute -bottom-1 left-3 right-3 h-[2px] bg-[#FF792D] rounded-full shadow-xs"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* ======================================================== */}
        {/* 4. ATTRACTIVE STAGE SHOWCASE PANEL                       */}
        {/* ======================================================== */}
        <div className="relative rounded-2xl bg-white border border-[#DFE7F1] shadow-lg overflow-hidden">
          {/* Top Tri-Color Brand Accent Bar */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#075BBB] via-[#FF792D] to-[#075BBB]" />

          <div className="p-6 sm:p-8 lg:p-9">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">

              {/* LEFT COLUMN: Stage Overview & Engineering Context */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-5">
                <div className="space-y-3.5">
                  {/* Eyebrow & Tag Row */}
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#075BBB] font-mono text-xs font-bold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#075BBB]" />
                      STAGE {current.step} OF 09
                    </span>
                    <span className="px-2.5 py-0.5 rounded-md bg-amber-50 border border-amber-200/80 text-[#FF792D] font-mono text-[11px] font-semibold uppercase tracking-wider">
                      {current.tag}
                    </span>
                  </div>

                  {/* Stage Heading & Subtitle */}
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#10233F] tracking-tight">
                      {current.title}
                    </h3>
                    <p className="text-sm sm:text-base font-semibold text-[#075BBB] mt-1">
                      {current.subtitle}
                    </p>
                  </div>

                  {/* Stage Detailed Explanation */}
                  <p className="text-sm text-[#526176] leading-relaxed">
                    {current.description}
                  </p>

                  {/* Engineering Tooling Aspect Strip */}
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-2.5">
                    <span className="text-[10px] font-mono font-bold text-[#075BBB] uppercase tracking-wider shrink-0">
                      TOOLING FOCUS:
                    </span>
                    <span className="text-xs text-[#10233F] font-medium leading-tight">
                      {current.toolingAspect}
                    </span>
                  </div>
                </div>

                {/* Milestone Sign-Off & Deliverable Card */}
                <div className="p-3.5 sm:p-4 rounded-xl bg-[#F6F8FC] border border-[#DFE7F1] flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white border border-[#DFE7F1] text-[#075BBB] flex items-center justify-center shrink-0 shadow-2xs">
                    <CheckCircle className="w-4 h-4 text-[#075BBB]" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#FF792D]">
                        STAGE MILESTONE
                      </span>
                      <span className="text-slate-300">·</span>
                      <span className="text-[10px] font-mono text-[#526176]">
                        QA GATEWAY
                      </span>
                    </div>
                    <h4 className="text-xs sm:text-sm font-semibold text-[#10233F] truncate mt-0.5">
                      {current.deliverable}
                    </h4>
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN: Interactive Checklist with Enhanced Border & Hover Check Animation */}
              <div className="lg:col-span-5 bg-[#F6F8FC] p-5 sm:p-6 rounded-2xl border border-[#DFE7F1] flex flex-col justify-between space-y-5">
                <div>
                  <div className="flex items-center justify-between pb-2.5 mb-3.5 border-b border-slate-200">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#075BBB]" />
                      <span className="text-xs font-mono font-bold text-[#10233F] uppercase tracking-wider">
                        KEY ACTIVITIES
                      </span>
                    </div>
                    <span className="text-[11px] font-mono font-semibold text-[#526176]">
                      {current.activities.length} CHECKPOINTS
                    </span>
                  </div>

                  {/* Checklist Items with Distinct Borders & Interactive Check Animation */}
                  <div className="space-y-2.5">
                    {current.activities.map((activity, idx) => (
                      <div
                        key={idx}
                        className="group flex items-start gap-3 p-3 rounded-xl bg-white border border-[#DFE7F1] hover:border-[#075BBB] hover:shadow-md hover:shadow-blue-500/10 transition-all duration-200 cursor-default"
                      >
                        {/* Animated Check Box */}
                        <span className="w-5 h-5 rounded-md bg-blue-50/80 border border-blue-200/90 text-[#075BBB] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#075BBB] group-hover:border-[#075BBB] group-hover:text-white group-hover:scale-105 transition-all duration-200 shadow-2xs">
                          <Check className="w-3.5 h-3.5 transition-transform duration-200 group-hover:scale-110" strokeWidth={2.5} />
                        </span>
                        <span className="text-xs sm:text-[13px] text-[#10233F] font-medium leading-snug group-hover:text-[#075BBB] transition-colors duration-200">
                          {activity}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stage Stepper Navigation Bar */}
                <div className="pt-3.5 flex items-center justify-between border-t border-slate-200">
                  <button
                    type="button"
                    disabled={activeStageIdx === 0}
                    onClick={() => setActiveStageIdx(Math.max(0, activeStageIdx - 1))}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-[#10233F] hover:text-[#075BBB] hover:bg-white transition-all disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer border border-transparent hover:border-[#DFE7F1]"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                    <span>Previous Stage</span>
                  </button>

                  <button
                    type="button"
                    disabled={activeStageIdx === STAGES.length - 1}
                    onClick={() => setActiveStageIdx(Math.min(STAGES.length - 1, activeStageIdx + 1))}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold text-white bg-[#075BBB] hover:bg-[#054694] transition-all disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer shadow-sm shadow-blue-900/15"
                  >
                    <span>Next Stage</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
