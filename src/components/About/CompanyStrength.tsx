'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Four Verified Strength Items
const STRENGTH_STAGES = [
  {
    id: 'experience',
    num: '01',
    title: 'Manufacturing Experience',
    shortDesc: 'Decades of precision mould manufacturing knowledge.',
    metric: '30+',
    metricLabel: 'YEARS OF EXPERIENCE',
    description: 'Decades of precision mould manufacturing knowledge built through continuous engineering experience across high-cavitation tooling.',
    accent: '#0056b3',
    overlayStyle: 'from-blue-900/10 via-transparent to-transparent',
  },
  {
    id: 'team',
    num: '02',
    title: 'Experienced Team',
    shortDesc: 'Skilled toolmakers, engineers, and designers.',
    metric: '45+',
    metricLabel: 'SPECIALISTS',
    description: 'Skilled toolmakers, engineers, and technical specialists working together across design, 3D simulation, and manufacturing.',
    accent: '#ff6b00',
    overlayStyle: 'from-orange-900/10 via-transparent to-transparent',
  },
  {
    id: 'technology',
    num: '03',
    title: 'Advanced Technology',
    shortDesc: '5-Axis CNC, EDM, CMM metrology & CAD/CAM.',
    metric: 'CNC · EDM · CMM',
    metricLabel: 'PRECISION TECHNOLOGY',
    description: 'Advanced machining, sub-micron CMM inspection, and high-speed CNC capabilities supporting demanding tooling requirements.',
    accent: '#0056b3',
    overlayStyle: 'from-sky-900/15 via-transparent to-transparent',
  },
  {
    id: 'capability',
    num: '04',
    title: 'Production Capability',
    shortDesc: 'Dedicated toolroom built for complex moulds.',
    metric: '15,000 m²',
    metricLabel: 'MANUFACTURING FACILITY',
    description: 'A dedicated manufacturing environment equipped to support complex multi-cavitation precision mould applications.',
    accent: '#ff6b00',
    overlayStyle: 'from-blue-950/15 via-transparent to-transparent',
  },
];

export const CompanyStrength: React.FC = () => {
  const [activeStageIdx, setActiveStageIdx] = useState<number>(0);
  const activeStage = STRENGTH_STAGES[activeStageIdx] || STRENGTH_STAGES[0];

  return (
    <section className="py-14 sm:py-13 bg-white relative overflow-hidden border-b border-slate-200">
      {/* Subtle Background Tech Grid */}
      <div className="absolute inset-0 tech-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#0056b3_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ======================================================== */}
        {/* SECTION HEADER                                           */}
        {/* ======================================================== */}
        <div className="mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-[#0056b3] text-xs font-mono font-bold uppercase tracking-wider mb-4 shadow-2xs"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff6b00] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#ff6b00]"></span>
            </span>
            OUR STRENGTH
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
                <span className="text-slate-900 block">Built on Experience.</span>
                <span className="text-[#0056b3] block">Powered by Expertise.</span>
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
                Experience, skilled people, advanced technology, and manufacturing capability working together to deliver precision tooling.
              </p>
            </motion.div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* EDITORIAL SCROLLYTELLING EXPERIENCE ("STRENGTH IN MOTION")*/}
        {/* ======================================================== */}

        {/* DESKTOP & TABLET LAYOUT (2 Columns: Visual Left + Interactive Right Nav) */}
        <div className="hidden md:grid md:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* LEFT COLUMN: FEATURED LARGE IMAGE WITH DYNAMIC ACTIVE SPEC OVERLAY (60% Width) */}
          <div className="md:col-span-7 lg:col-span-7 relative group w-full pt-1">
            {/* Blue/Orange Corner Engineering Accents */}
            <div className="absolute -top-2 -right-2 sm:-right-3 w-24 h-24 sm:w-28 sm:h-28 border-r-4 border-t-4 border-[#ff6b00] rounded-tr-3xl pointer-events-none hidden sm:block opacity-75 group-hover:opacity-100 transition-opacity duration-300 z-0" />
            <div className="absolute -bottom-2 -left-2 sm:-left-3 w-24 h-24 sm:w-28 sm:h-28 border-l-4 border-b-4 border-[#0056b3] rounded-bl-3xl pointer-events-none hidden sm:block opacity-75 group-hover:opacity-100 transition-opacity duration-300 z-0" />

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative z-10 rounded-[22px] overflow-hidden border border-slate-200 shadow-2xl bg-slate-900 group/img"
            >
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="relative w-full h-[380px] sm:h-[440px] lg:h-[480px]"
              >
                <img
                  src="/About/Aboutstrenght.png"
                  alt="Patel Mould Manufacturing Facility & Precision Tooling"
                  className="w-full h-full object-cover rounded-[22px]"
                />

                {/* Subtle Gradient Bottom Overlay */}
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent pointer-events-none" />

                {/* Micro Blueprint Technical Watermark Badge on Image */}
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-slate-900/80 backdrop-blur-md border border-white/20 text-white text-[11px] font-mono font-semibold flex items-center gap-2 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-[#0056b3] animate-pulse" />
                  PATEL MOULD TOOLROOM & FACILITY
                </div>

                {/* Active Technical Badge Overlay on Image (Reflects active capability on hover!) */}
                <AnimatePresence mode="popLayout">
                  {activeStage && (
                    <motion.div
                      key={activeStage.num}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                      className="absolute bottom-4 left-4 right-4 z-20 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200/90 text-slate-900 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="p-2.5 bg-[#0056b3] rounded-lg text-white font-mono text-xs font-semibold shrink-0">
                          {activeStage.num}
                        </div>
                        <div>
                          <div className="text-xs sm:text-sm font-bold text-slate-900 tracking-wide">
                            {activeStage.title}
                          </div>
                          <div className="text-[11px] text-slate-700 font-bold">
                            {activeStage.metricLabel}: <span className="text-[#0056b3]">{activeStage.metric}</span>
                          </div>
                        </div>
                      </div>

                      <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-blue-50 text-[#0056b3] border border-blue-200 font-semibold uppercase tracking-wider self-start sm:self-center">
                        Active Strength Spec
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: COMPACT INTERACTIVE CAPABILITY LIST (40% Width - Matching Core Expertise style) */}
          <div className="md:col-span-5 lg:col-span-5 space-y-2">
            {STRENGTH_STAGES.map((stage, idx) => {
              const isActive = activeStageIdx === idx;

              return (
                <motion.div
                  key={stage.num}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.07 }}
                  onClick={() => setActiveStageIdx(idx)}
                  onMouseEnter={() => setActiveStageIdx(idx)}
                  className={`relative p-3.5 sm:p-4 rounded-xl transition-all duration-300 cursor-pointer flex items-center justify-between gap-4 border ${isActive
                      ? 'bg-blue-50/80 border-blue-200/90 shadow-2xs'
                      : 'bg-white border-slate-200/80 hover:bg-slate-50 hover:border-slate-300'
                    }`}
                >
                  {/* Thin Left Accent Line */}
                  <div
                    className={`absolute left-0 top-3 bottom-3 w-1 rounded-r-full transition-all duration-300 ${isActive ? 'bg-[#0056b3] opacity-100' : 'bg-transparent opacity-0'
                      }`}
                  />

                  <div className="flex items-start space-x-3.5 pl-1.5">
                    {/* Number */}
                    <span
                      className={`font-mono text-xs font-bold transition-colors duration-300 mt-0.5 ${isActive ? 'text-[#0056b3]' : 'text-slate-400'
                        }`}
                    >
                      {stage.num}
                    </span>

                    {/* Title & Description */}
                    <div>
                      <h4
                        className={`text-sm sm:text-base transition-colors duration-300 leading-snug ${isActive ? 'font-bold text-[#0056b3]' : 'font-semibold text-slate-800'
                          }`}
                      >
                        {stage.title}
                      </h4>
                      <p className="text-xs text-slate-600 font-normal leading-relaxed mt-0.5">
                        {stage.description}
                      </p>
                    </div>
                  </div>

                  {/* Small Right Arrow Indicator */}
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${isActive
                        ? 'bg-[#0056b3] text-white shadow-xs'
                        : 'bg-slate-100 text-slate-400 group-hover:text-slate-600'
                      }`}
                  >
                    <span className="text-xs">→</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* MOBILE FALLBACK LAYOUT (VISIBLE < 768px) */}
        <div className="block md:hidden space-y-6">
          {/* Factory Image */}
          <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg h-64">
            <img
              src="/About/Aboutstrenght.png"
              alt="Patel Mould Facility"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-900/90 backdrop-blur-md text-white text-xs flex justify-between items-center">
              <div>
                <span className="font-mono text-[10px] text-blue-400 block">STRENGTH 0{activeStageIdx + 1}</span>
                <span className="font-bold text-white">{activeStage.title}</span>
              </div>
              <span className="font-mono font-extrabold text-orange-400">{activeStage.metric}</span>
            </div>
          </div>

          {/* 4 Editorial Vertical Items */}
          <div className="space-y-3">
            {STRENGTH_STAGES.map((stage, idx) => {
              const isActive = activeStageIdx === idx;
              return (
                <div
                  key={stage.id}
                  onClick={() => setActiveStageIdx(idx)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer ${isActive
                      ? 'bg-blue-50/90 border-blue-200 shadow-xs'
                      : 'bg-white border-slate-200'
                    }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-[#0056b3]">{stage.num}</span>
                      <h4 className="text-sm font-bold text-slate-900">{stage.title}</h4>
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-700">{stage.metric}</span>
                  </div>
                  <p className="text-xs text-slate-600 font-normal leading-relaxed mt-1">
                    {stage.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

