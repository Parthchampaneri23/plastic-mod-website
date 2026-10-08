'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, FileCheck, CheckCircle2, Search, Gauge, Award } from 'lucide-react';

const QUALITY_STAGES = [
  {
    id: 'stage-1',
    num: '01',
    title: 'Engineering & DFM Review',
    tagline: 'Design Validation & Moldflow Analysis',
    description: 'Every mold project begins with rigorous Design for Manufacturability (DFM) verification, 3D moldflow thermal simulation, and gate location optimization prior to steel cutting.',
    metrics: ['3D Moldflow Simulation', 'DFM Steel Verification', 'Cooling Channel Optimization'],
    equipment: 'Autodesk Moldflow & Siemens NX CAD',
    icon: <FileCheck className="w-5 h-5 text-[#0056b3]" />,
  },
  {
    id: 'stage-2',
    num: '02',
    title: 'Precision Machining Control',
    tagline: 'In-Process Dimensional Inspection',
    description: 'During 5-axis CNC milling and EDM spark erosion, cavity blocks and core inserts undergo laser-guided tool calibration and real-time coordinate checks.',
    metrics: ['±0.005mm Cavity Tolerance', 'Laser Tool Calibration', 'Sub-Micron Surface Finish'],
    equipment: 'Blum Laser Calibration & In-Machine Probes',
    icon: <Search className="w-5 h-5 text-[#ff6b00]" />,
  },
  {
    id: 'stage-3',
    num: '03',
    title: 'Metrology Inspection',
    tagline: 'Zeiss 3D CMM & Optical Measurement',
    description: 'Finished mold components are transferred to our climate-controlled metrology lab for 100% 3D coordinate measuring and non-contact optical inspection.',
    metrics: ['Zeiss 3D CMM Verification', 'Optical Profile Projection', 'Concentricity Checks'],
    equipment: 'Zeiss 3D CMM & Mitutoyo Optical Comparators',
    icon: <Gauge className="w-5 h-5 text-[#0056b3]" />,
  },
  {
    id: 'stage-4',
    num: '04',
    title: 'Mold Trial & Testing',
    tagline: 'In-House Injection & Sample Run',
    description: 'Assembled molds are mounted on in-house injection machines for dry runs, water pressure leak tests, preform sampling, and real cycle time validation.',
    metrics: ['100% In-House Trial Run', 'Cooling Leak Pressure Test', 'Cycle Time Optimization'],
    equipment: 'In-House PET & Injection Test Presses',
    icon: <ShieldCheck className="w-5 h-5 text-[#ff6b00]" />,
  },
  {
    id: 'stage-5',
    num: '05',
    title: 'Final Quality Assurance',
    tagline: 'Certification & Pre-Dispatch Sign-off',
    description: 'Preform samples and molded components undergo final wall thickness, drop impact, and neck finish testing before ISO 9001:2015 dispatch certification.',
    metrics: ['ISO 9001:2015 Quality Certificate', 'Preform Weight Uniformity', 'Zero-Defect Dispatch'],
    equipment: 'Zeiss Metrology & Full QC Documentation',
    icon: <Award className="w-5 h-5 text-[#0056b3]" />,
  },
];

export const QualityCommitment: React.FC = () => {
  const [activeStageId, setActiveStageId] = useState<string>(QUALITY_STAGES[0].id);

  const activeStage = QUALITY_STAGES.find((s) => s.id === activeStageId) || QUALITY_STAGES[0];

  return (
    <section className="py-13 sm:py-13 bg-white text-slate-900 relative overflow-hidden border-b border-slate-200">
      {/* Background Subtle Tech Pattern */}
      <div className="absolute inset-0 tech-grid-pattern opacity-35 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#0056b3_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ======================================================== */}
        {/* SECTION HEADER (MATCHES COMPANY STRENGTH HEADER STYLE)    */}
        {/* ======================================================== */}
        <div className="mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-[#0056b3] text-xs font-mono font-bold uppercase tracking-wider mb-4 shadow-2xs hover:bg-blue-100/80 hover:border-blue-300 transition-all duration-300 cursor-default"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff6b00] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#ff6b00]"></span>
            </span>
            QUALITY COMMITMENT
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-7"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.15]">
                <span className="text-slate-900 block">Precision Doesn't End</span>
                <span className="text-[#0056b3] block">at Machining.</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-5 relative pl-5 sm:pl-6"
            >
              <div className="absolute left-0 top-1 bottom-1 w-1 rounded-full bg-gradient-to-b from-[#0056b3] via-[#0056b3] to-[#ff6b00]" />
              <p className="text-slate-700 text-sm sm:text-base font-normal leading-relaxed">
                Our end-to-end Quality Assurance Journey guarantees zero-defect tooling, verified tolerances, and maximum cycle efficiency for every mold.
              </p>
            </motion.div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* QUALITY ASSURANCE JOURNEY STEPPERS (HOVER & CLICK TRIGGER) */}
        {/* ======================================================== */}
        <div className="mb-12 relative">
          {/* Horizontal Progress Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-0.5 bg-slate-200 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 relative z-10">
            {QUALITY_STAGES.map((stage) => {
              const isActive = activeStageId === stage.id;
              return (
                <motion.button
                  key={stage.id}
                  onClick={() => setActiveStageId(stage.id)}
                  onMouseEnter={() => setActiveStageId(stage.id)}
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  className={`p-4 sm:p-5 rounded-2xl border text-left transition-all duration-300 cursor-pointer flex flex-col justify-between group ${isActive
                    ? 'bg-blue-50/90 border-[#0056b3] ring-2 ring-[#0056b3]/20 shadow-md scale-[1.01]'
                    : 'bg-white border-slate-200/90 hover:border-slate-300 text-slate-600 hover:bg-slate-50 shadow-2xs hover:shadow-sm'
                    }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`font-mono text-xs font-bold px-2.5 py-1 rounded-md transition-all duration-300 ${isActive
                        ? 'bg-[#0056b3] text-white shadow-xs'
                        : 'bg-slate-100 text-slate-600 group-hover:bg-blue-100 group-hover:text-[#0056b3]'
                        }`}
                    >
                      {stage.num}
                    </span>
                    <span className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${isActive ? 'bg-[#ff6b00] ring-4 ring-orange-500/25 animate-pulse' : 'bg-slate-300 group-hover:bg-blue-400'}`} />
                  </div>

                  <div>
                    <div className={`text-xs sm:text-sm font-bold tracking-tight mb-1 transition-colors duration-200 ${isActive ? 'text-[#0056b3]' : 'text-slate-900 group-hover:text-[#0056b3]'}`}>
                      {stage.title}
                    </div>
                    <div className="text-[11px] text-slate-500 line-clamp-1 font-medium group-hover:text-slate-700">
                      {stage.tagline}
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* ======================================================== */}
        {/* ACTIVE STAGE FEATURE DETAIL SHOWCASE                     */}
        {/* ======================================================== */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStage.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="p-7 sm:p-10 rounded-[28px] bg-slate-50/90 backdrop-blur-xs border border-slate-200/90 shadow-xl relative overflow-hidden group/detail"
          >
            {/* Top Accent Gradient Bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0056b3] via-[#0056b3] to-[#ff6b00]" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

              {/* Left Column: Stage Info */}
              <div className="lg:col-span-7 space-y-5">
                <div className="flex items-center space-x-3.5">
                  <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-2xs group-hover/detail:scale-105 transition-transform duration-300">
                    {activeStage.icon}
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-[#0056b3] uppercase tracking-widest">
                      STAGE {activeStage.num} OF 05
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                      {activeStage.title}
                    </h3>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-700 font-normal leading-relaxed">
                  {activeStage.description}
                </p>

                {/* Key Quality Checks */}
                <div className="space-y-2.5 pt-2">
                  <div className="text-xs font-mono font-bold text-[#ff6b00] uppercase tracking-wider">
                    VERIFIED QUALITY CHECKS:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeStage.metrics.map((metric, mIdx) => (
                      <div
                        key={mIdx}
                        className="p-3.5 rounded-xl bg-white border border-blue-200/80 text-xs font-semibold text-slate-800 flex items-center space-x-3 shadow-xs hover:border-[#0056b3] hover:shadow-md hover:bg-blue-50/40 transition-all duration-200 group/metric"
                      >
                        <div className="p-1 rounded-full bg-blue-50 text-[#0056b3] group-hover/metric:bg-[#0056b3] group-hover/metric:text-white transition-colors">
                          <CheckCircle2 className="w-4 h-4 shrink-0" />
                        </div>
                        <span className="tracking-tight">{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Equipment & Metrology Spec Card */}
              <div className="lg:col-span-5">
                <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-4 shadow-md hover:border-blue-200 hover:shadow-lg transition-all duration-300">
                  <div className="text-xs font-mono font-bold text-[#0056b3] uppercase tracking-wider border-b border-slate-100 pb-2 flex items-center justify-between">
                    <span>EQUIPMENT & STANDARDS</span>
                    <span className="h-2 w-2 rounded-full bg-[#0056b3] animate-pulse" />
                  </div>

                  <div>
                    <div className="text-xs text-slate-500 font-medium">Primary Testing System</div>
                    <div className="text-sm font-bold text-slate-900 mt-0.5">{activeStage.equipment}</div>
                  </div>

                  <div className="pt-2 border-t border-slate-100">
                    <div className="text-xs text-slate-500 font-medium">Tolerance Target</div>
                    <div className="text-sm font-bold text-[#ff6b00] font-mono mt-0.5">Sub-Micron (±0.005mm)</div>
                  </div>

                  <div className="pt-2 border-t border-slate-100">
                    <div className="text-xs text-slate-500 font-medium">Quality Certificate</div>
                    <div className="text-xs font-semibold text-[#0056b3] font-mono mt-0.5">ISO 9001:2015 Verified</div>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
