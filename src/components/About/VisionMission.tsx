'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Target, Compass } from 'lucide-react';

// Core Values Items for Central Dial Compass
const CORE_VALUES_COMPASS = [
  {
    num: '01',
    title: 'PRECISION',
    description: 'Accuracy in every critical detail.',
  },
  {
    num: '02',
    title: 'INTEGRITY',
    description: 'Transparent partnerships and dependable commitments.',
  },
  {
    num: '03',
    title: 'INNOVATION',
    description: 'Advanced technology that improves tooling performance.',
  },
  {
    num: '04',
    title: 'RELIABILITY',
    description: 'Consistent tooling built for demanding production.',
  },
  {
    num: '05',
    title: 'CUSTOMER FOCUS',
    description: 'Solutions engineered around customer requirements.',
  },
  {
    num: '06',
    title: 'EXCELLENCE',
    description: 'Quality-driven manufacturing from design to delivery.',
  },
];

// Interactive Central Compass Dial Component
const CoreValuesCompass: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const activeValue = CORE_VALUES_COMPASS[activeIdx] || CORE_VALUES_COMPASS[0];

  return (
    <div className="relative pt-6 sm:pt-10 pb-6 min-h-[540px] flex flex-col justify-center items-center">

      {/* Radial Blueprint Spotlight & Background Engineering Guides */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(0,86,179,0.07)_0%,rgba(0,86,179,0.02)_45%,transparent_70%)] pointer-events-none rounded-full z-0" />



      {/* DESKTOP/TABLET INTERACTIVE COMPASS DIAL (VISIBLE >= 768px) */}
      <div className="hidden md:block relative w-full max-w-4xl h-[480px] mx-auto z-10">

        {/* SVG TECHNICAL CONNECTOR LINES & TIS RINGS */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
          <defs>
            <radialGradient id="compass-center-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#0056b3" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#0056b3" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Center Glow Field */}
          <circle cx="50%" cy="240" r="180" fill="url(#compass-center-glow)" />

          {/* Outer Technical Blueprint Guide Ring */}
          <circle
            cx="50%"
            cy="240"
            r="190"
            fill="none"
            stroke="#94a3b8"
            strokeWidth="1"
            strokeDasharray="4 6"
            className="opacity-40"
          />
          {/* Inner Measurement Tick Ring */}
          <circle
            cx="50%"
            cy="240"
            r="120"
            fill="none"
            stroke="#0056b3"
            strokeWidth="1.5"
            strokeDasharray="1 8"
            className="opacity-40"
          />

          {/* Crosshair Technical Axis Lines */}
          <line x1="50%" y1="30" x2="50%" y2="450" stroke="#cbd5e1" strokeWidth="0.75" strokeDasharray="3 3" className="opacity-40" />
          <line x1="5%" y1="240" x2="95%" y2="240" stroke="#cbd5e1" strokeWidth="0.75" strokeDasharray="3 3" className="opacity-40" />

          {/* Connector Lines between Floating Values and Central Dial */}
          {/* Top (01 PRECISION) */}
          <line
            x1="50%" y1="240" x2="50%" y2="70"
            stroke={activeIdx === 0 ? '#0056b3' : '#cbd5e1'}
            strokeWidth={activeIdx === 0 ? '2.5' : '1'}
            className="transition-colors duration-300"
          />
          {/* Top Right (02 INTEGRITY) */}
          <line
            x1="50%" y1="240" x2="78%" y2="120"
            stroke={activeIdx === 1 ? '#0056b3' : '#cbd5e1'}
            strokeWidth={activeIdx === 1 ? '2.5' : '1'}
            className="transition-colors duration-300"
          />
          {/* Top Left (03 INNOVATION) */}
          <line
            x1="50%" y1="240" x2="22%" y2="120"
            stroke={activeIdx === 2 ? '#0056b3' : '#cbd5e1'}
            strokeWidth={activeIdx === 2 ? '2.5' : '1'}
            className="transition-colors duration-300"
          />
          {/* Bottom Left (04 RELIABILITY) */}
          <line
            x1="50%" y1="240" x2="22%" y2="360"
            stroke={activeIdx === 3 ? '#ff6b00' : '#cbd5e1'}
            strokeWidth={activeIdx === 3 ? '2.5' : '1'}
            className="transition-colors duration-300"
          />
          {/* Bottom Center (05 CUSTOMER FOCUS) */}
          <line
            x1="50%" y1="240" x2="50%" y2="410"
            stroke={activeIdx === 4 ? '#0056b3' : '#cbd5e1'}
            strokeWidth={activeIdx === 4 ? '2.5' : '1'}
            className="transition-colors duration-300"
          />
          {/* Bottom Right (06 EXCELLENCE) */}
          <line
            x1="50%" y1="240" x2="78%" y2="360"
            stroke={activeIdx === 5 ? '#ff6b00' : '#cbd5e1'}
            strokeWidth={activeIdx === 5 ? '2.5' : '1'}
            className="transition-colors duration-300"
          />
        </svg>

        {/* CENTRAL DIAL CONTAINER (Placed exactly at Center 50% / 240px) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full z-10 flex flex-col items-center justify-center p-6 text-center shadow-2xl border border-blue-200/90 bg-white/95 backdrop-blur-md group cursor-pointer hover:border-[#0056b3] transition-all duration-300">
          {/* Outer Breathing Technical Ring */}
          <motion.div
            animate={{ scale: [1, 1.025, 1] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-0 rounded-full border-2 border-blue-200/80 pointer-events-none"
          />
          {/* Outer Rotating Measurement Tick Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
            className="absolute -inset-3.5 rounded-full border border-dashed border-blue-300/70 pointer-events-none"
          />

          {/* Central Dial Content (Dynamic Crossfade on Active Value) */}
          <div className="relative z-10 space-y-1.5 max-w-[200px]">
            <span className="text-[10px] font-mono font-extrabold tracking-widest text-[#0056b3] uppercase block">
              PATEL MOULD
            </span>

            <motion.h4
              key={activeValue.title}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.25 }}
              className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight leading-tight"
            >
              {activeValue.title}
            </motion.h4>

            <motion.p
              key={activeValue.description}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.25, delay: 0.05 }}
              className="text-xs text-slate-600 font-normal leading-tight"
            >
              {activeValue.description}
            </motion.p>
          </div>

          <div className="mt-2.5 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200 text-[10px] font-mono font-bold text-[#0056b3] shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0056b3] animate-pulse" />
            VALUE {activeValue.num}
          </div>
        </div>

        {/* 6 FLOATING EDITORIAL TEXT BLOCKS AROUND DIAL */}

        {/* 01 PRECISION (Top Center) */}
        <div
          onMouseEnter={() => setActiveIdx(0)}
          onClick={() => setActiveIdx(0)}
          className={`absolute top-2 left-1/2 -translate-x-1/2 z-20 cursor-pointer p-3.5 rounded-xl transition-all duration-300 text-center ${activeIdx === 0 ? 'bg-white/95 backdrop-blur-md border border-blue-300 shadow-lg shadow-blue-500/10 -translate-y-1' : 'bg-white/70 backdrop-blur-xs hover:bg-white border border-slate-200/80 shadow-2xs'
            }`}
        >
          <span className="text-[11px] font-mono font-bold text-[#0056b3] block">01 — PRECISION</span>
          <span className="text-xs text-slate-700 font-semibold block mt-0.5">Accuracy in every detail</span>
        </div>

        {/* 02 INTEGRITY (Top Right) */}
        <div
          onMouseEnter={() => setActiveIdx(1)}
          onClick={() => setActiveIdx(1)}
          className={`absolute top-16 right-10 z-20 cursor-pointer p-3.5 rounded-xl transition-all duration-300 text-left ${activeIdx === 1 ? 'bg-white/95 backdrop-blur-md border border-blue-300 shadow-lg shadow-blue-500/10 -translate-y-1' : 'bg-white/70 backdrop-blur-xs hover:bg-white border border-slate-200/80 shadow-2xs'
            }`}
        >
          <span className="text-[11px] font-mono font-bold text-[#0056b3] block">02 — INTEGRITY</span>
          <span className="text-xs text-slate-700 font-semibold block mt-0.5">Transparent partnerships</span>
        </div>

        {/* 03 INNOVATION (Top Left) */}
        <div
          onMouseEnter={() => setActiveIdx(2)}
          onClick={() => setActiveIdx(2)}
          className={`absolute top-16 left-10 z-20 cursor-pointer p-3.5 rounded-xl transition-all duration-300 text-right ${activeIdx === 2 ? 'bg-white/95 backdrop-blur-md border border-blue-300 shadow-lg shadow-blue-500/10 -translate-y-1' : 'bg-white/70 backdrop-blur-xs hover:bg-white border border-slate-200/80 shadow-2xs'
            }`}
        >
          <span className="text-[11px] font-mono font-bold text-[#0056b3] block">03 — INNOVATION</span>
          <span className="text-xs text-slate-700 font-semibold block mt-0.5">Advanced tooling technology</span>
        </div>

        {/* 04 RELIABILITY (Bottom Left) */}
        <div
          onMouseEnter={() => setActiveIdx(3)}
          onClick={() => setActiveIdx(3)}
          className={`absolute bottom-16 left-10 z-20 cursor-pointer p-3.5 rounded-xl transition-all duration-300 text-right ${activeIdx === 3 ? 'bg-white/95 backdrop-blur-md border border-orange-300 shadow-lg shadow-orange-500/10 -translate-y-1' : 'bg-white/70 backdrop-blur-xs hover:bg-white border border-slate-200/80 shadow-2xs'
            }`}
        >
          <span className="text-[11px] font-mono font-bold text-[#ff6b00] block">04 — RELIABILITY</span>
          <span className="text-xs text-slate-700 font-semibold block mt-0.5">Built for production</span>
        </div>

        {/* 05 CUSTOMER FOCUS (Bottom Center) */}
        <div
          onMouseEnter={() => setActiveIdx(4)}
          onClick={() => setActiveIdx(4)}
          className={`absolute bottom-2 left-1/2 -translate-x-1/2 z-20 cursor-pointer p-3.5 rounded-xl transition-all duration-300 text-center ${activeIdx === 4 ? 'bg-white/95 backdrop-blur-md border border-blue-300 shadow-lg shadow-blue-500/10 -translate-y-1' : 'bg-white/70 backdrop-blur-xs hover:bg-white border border-slate-200/80 shadow-2xs'
            }`}
        >
          <span className="text-[11px] font-mono font-bold text-[#0056b3] block">05 — CUSTOMER FOCUS</span>
          <span className="text-xs text-slate-700 font-semibold block mt-0.5">Engineered around requirements</span>
        </div>

        {/* 06 EXCELLENCE (Bottom Right) */}
        <div
          onMouseEnter={() => setActiveIdx(5)}
          onClick={() => setActiveIdx(5)}
          className={`absolute bottom-16 right-10 z-20 cursor-pointer p-3.5 rounded-xl transition-all duration-300 text-left ${activeIdx === 5 ? 'bg-white/95 backdrop-blur-md border border-orange-300 shadow-lg shadow-orange-500/10 -translate-y-1' : 'bg-white/70 backdrop-blur-xs hover:bg-white border border-slate-200/80 shadow-2xs'
            }`}
        >
          <span className="text-[11px] font-mono font-bold text-[#ff6b00] block">06 — EXCELLENCE</span>
          <span className="text-xs text-slate-700 font-semibold block mt-0.5">Quality-driven manufacturing</span>
        </div>

      </div>

      {/* MOBILE COMPOSITE LAYOUT (VISIBLE < 768px) */}
      <div className="block md:hidden w-full space-y-6">
        {/* Mobile Center Dial Header */}
        <div className="w-56 h-56 mx-auto rounded-full p-5 text-center flex flex-col items-center justify-center bg-white border border-blue-200 shadow-lg relative">
          <span className="text-[10px] font-mono font-extrabold text-[#0056b3] uppercase block">
            PATEL MOULD
          </span>
          <h4 className="text-sm font-extrabold text-slate-900 mt-1">{activeValue.title}</h4>
          <p className="text-xs text-slate-600 mt-1 font-normal leading-tight">{activeValue.description}</p>
        </div>

        {/* Mobile Vertical Sequence with Technical Side Connector Line */}
        <div className="relative pl-6 space-y-3">
          <div className="absolute left-2.5 top-2 bottom-2 w-0.5 bg-slate-300" />

          {CORE_VALUES_COMPASS.map((val, idx) => {
            const isActive = activeIdx === idx;
            return (
              <div
                key={val.num}
                onClick={() => setActiveIdx(idx)}
                className={`relative p-3.5 rounded-xl border transition-all cursor-pointer ${isActive
                  ? 'bg-blue-50/90 border-blue-200 shadow-xs'
                  : 'bg-white border-slate-200/80'
                  }`}
              >
                {/* Connector Node on Mobile Line */}
                <span
                  className={`absolute -left-[19px] top-4 w-3.5 h-3.5 rounded-full border-2 bg-white ${isActive ? 'border-[#0056b3] bg-[#0056b3]' : 'border-slate-300'
                    }`}
                />

                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[#0056b3]">{val.num} — {val.title}</span>
                </div>
                <p className="text-xs text-slate-600 mt-1">{val.description}</p>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};

export const VisionMission: React.FC = () => {
  const [hoveredPanel, setHoveredPanel] = useState<'vision' | 'mission' | null>(null);

  return (
    <section className="py-13 sm:py-13 bg-white relative overflow-hidden border-b border-slate-200/80">
      {/* Background Subtle Technical Blueprint & Grid Overlay */}
      <div className="absolute inset-0 tech-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#0056b3_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,86,179,0.04)_0%,transparent_75%)] pointer-events-none" />

      {/* Subtle Engineering Concentric Watermark Lines */}
      <div className="absolute -top-24 -left-24 w-96 h-96 border border-blue-200/50 rounded-full pointer-events-none opacity-40" />
      <div className="absolute -top-12 -left-12 w-72 h-72 border border-blue-200/40 rounded-full pointer-events-none opacity-30" />
      <div className="absolute -bottom-32 -right-32 w-[32rem] h-[32rem] border border-orange-200/40 rounded-full pointer-events-none opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ======================================================== */}
        {/* SECTION HEADER: OUR DIRECTION                            */}
        {/* ======================================================== */}
        <div className="mb-12 sm:mb-16">
          {/* Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-[#0056b3] text-xs font-mono font-bold uppercase tracking-wider mb-4"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff6b00] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#ff6b00]"></span>
            </span>
            OUR DIRECTION
          </motion.div>

          {/* 2-Column Split Header (Matching Home Page Product Categories style) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end">
            {/* Left Column: Bold Headline */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-7"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.15]">
                <span className="text-slate-900 block">Purpose That Drives</span>
                <span className="text-[#0056b3] block">Precision.</span>
              </h2>
            </motion.div>

            {/* Right Column: Description with Vertical Accent Bar & Feature Pills */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-5 relative pl-5 sm:pl-6"
            >
              {/* Gradient Vertical Accent Bar */}
              <div className="absolute left-0 top-1 bottom-1 w-1 rounded-full bg-gradient-to-b from-[#0056b3] via-[#0056b3] to-[#ff6b00]" />

              <p className="text-slate-700 text-sm sm:text-base font-normal leading-relaxed">
                Purpose, precision, and performance guide everything we engineer at Patel Mould Industries.
              </p>

              {/* Micro Highlight Pills */}
              <div className="flex items-center flex-wrap gap-2.5 mt-3.5">
                <span className="text-[11px] font-medium text-[#0056b3] bg-blue-50 border border-blue-200/90 px-3 py-1 rounded-full flex items-center gap-1.5 shadow-2xs hover:bg-[#0056b3] hover:text-white hover:border-[#0056b3] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer group/pill">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0056b3] group-hover/pill:bg-white transition-colors"></span>
                  Vision → Mission Trajectory
                </span>
                <span className="text-[11px] font-medium text-slate-800 bg-slate-100 border border-slate-200 px-3 py-1 rounded-full flex items-center gap-1.5 shadow-2xs hover:bg-[#ff6b00] hover:text-white hover:border-[#ff6b00] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer group/pill">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00] group-hover/pill:bg-white transition-colors"></span>
                  5M+ Shot Tool Guarantee
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* CONNECTED DIRECTION PANELS: VISION -> MISSION            */}
        {/* ======================================================== */}
        <div className="relative mb-14">

          {/* Engineering Trajectory Line (Desktop Horizontal / Mobile Vertical) */}
          <div className="hidden lg:block absolute top-[50%] left-[45%] right-[45%] h-[2px] z-20 -translate-y-1/2 pointer-events-none">
            {/* Background Line */}
            <div className={`h-full w-full transition-colors duration-300 ${hoveredPanel ? 'bg-[#0056b3]' : 'bg-slate-300'}`} />

            {/* Animated Direction Trajectory Indicator Dot */}
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-gradient-to-r from-[#0056b3] to-[#ff6b00] border-2 border-white shadow-md"
              initial={{ left: '0%' }}
              animate={{ left: '100%' }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'easeInOut',
              }}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 relative z-10 items-stretch">

            {/* PANEL 1: OUR VISION */}
            <motion.div
              initial={{ opacity: 0, x: -35, scale: 0.98 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={() => setHoveredPanel('vision')}
              onMouseLeave={() => setHoveredPanel(null)}
              className={`bg-white p-7 sm:p-9 rounded-[24px] border transition-all duration-300 flex flex-col justify-between relative group shadow-md ${hoveredPanel === 'vision'
                ? 'border-[#0056b3] bg-blue-50/30 -translate-y-1 shadow-xl'
                : 'border-slate-200/90 hover:border-[#0056b3]'
                }`}
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#0056b3] rounded-t-[24px]" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0056b3] text-xs font-mono font-bold uppercase tracking-wider">
                    <Compass className="w-4 h-4 text-[#0056b3]" />
                    OUR VISION
                  </div>
                  <span className="text-xs font-mono font-bold text-[#0056b3]">STAGE 01</span>
                </div>

                {/* Large Bold Quote Statement */}
                <blockquote className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug tracking-tight mb-5">
                  "To be global leaders in high-cavitation plastic mold engineering, setting world-class standards for precision, sustainability, and tool durability."
                </blockquote>

                <p className="text-sm text-slate-600 leading-relaxed font-normal mb-6">
                  We aspire to continually push the boundaries of PET preform, ISBM, and blow mold technology — enabling manufacturers across 50+ countries to produce flawless packaging with zero-defect consistency and energy-efficient cycle times.
                </p>
              </div>

              {/* Bottom Tags */}
              <div className="pt-5 border-t border-slate-100 flex flex-wrap gap-2.5">
                <motion.span
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="text-[11px] font-mono font-semibold px-3 py-1 rounded-full bg-blue-50 text-[#0056b3] border border-blue-200 hover:bg-[#0056b3] hover:text-white hover:-translate-y-0.5 transition-all duration-300 cursor-pointer shadow-2xs"
                >
                  • Sub-Micron Precision
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="text-[11px] font-mono font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 hover:bg-[#0056b3] hover:text-white hover:border-[#0056b3] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer shadow-2xs"
                >
                  • Global Leadership
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  className="text-[11px] font-mono font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 hover:bg-[#0056b3] hover:text-white hover:border-[#0056b3] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer shadow-2xs"
                >
                  • Sustainable Tooling
                </motion.span>
              </div>
            </motion.div>

            {/* PANEL 2: OUR MISSION */}
            <motion.div
              initial={{ opacity: 0, x: 35, scale: 0.98 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={() => setHoveredPanel('mission')}
              onMouseLeave={() => setHoveredPanel(null)}
              className={`bg-white p-7 sm:p-9 rounded-[24px] border transition-all duration-300 flex flex-col justify-between relative group shadow-md ${hoveredPanel === 'mission'
                ? 'border-[#ff6b00] bg-orange-50/30 -translate-y-1 shadow-xl'
                : 'border-slate-200/90 hover:border-[#ff6b00]'
                }`}
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#ff6b00] rounded-t-[24px]" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-[#ff6b00] text-xs font-mono font-bold uppercase tracking-wider">
                    <Target className="w-4 h-4 text-[#ff6b00]" />
                    OUR MISSION
                  </div>
                  <span className="text-xs font-mono font-bold text-[#ff6b00]">STAGE 02</span>
                </div>

                {/* Large Bold Quote Statement */}
                <blockquote className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug tracking-tight mb-5">
                  "To empower beverage, packaging, and pharma brands worldwide with ultra-reliable tooling engineered for maximum cycle efficiency and long-term performance."
                </blockquote>

                <p className="text-sm text-slate-600 leading-relaxed font-normal mb-6">
                  Through continuous investments in 5-axis CNC machining, Zeiss 3D CMM quality testing, and master toolmaker craftsmanship, we provide custom multi-cavity solutions that maximize productivity while lowering cost per component for our clients.
                </p>
              </div>

              {/* Bottom Tags */}
              <div className="pt-5 border-t border-slate-100 flex flex-wrap gap-2.5">
                <motion.span
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="text-[11px] font-mono font-semibold px-3 py-1 rounded-full bg-orange-50 text-[#ff6b00] border border-orange-200 hover:bg-[#ff6b00] hover:text-white hover:-translate-y-0.5 transition-all duration-300 cursor-pointer shadow-2xs"
                >
                  • 5M+ Shot Tool Guarantee
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="text-[11px] font-mono font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 hover:bg-[#ff6b00] hover:text-white hover:border-[#ff6b00] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer shadow-2xs"
                >
                  • Rapid Cycle Times
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  className="text-[11px] font-mono font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 hover:bg-[#ff6b00] hover:text-white hover:border-[#ff6b00] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer shadow-2xs"
                >
                  • In-House Testing
                </motion.span>
              </div>
            </motion.div>

          </div>

        </div>

        {/* ======================================================== */}
        {/* BOTTOM SECTION: OUR CORE VALUES (CENTRAL COMPASS DIAL)   */}
        {/* ======================================================== */}
        <div className="pt-10 sm:pt-14 border-t border-slate-200">

          {/* Header layout matching OUR DIRECTION 2-column split style */}
          <div className="mb-10 sm:mb-12">
            {/* Eyebrow Badge */}
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
              OUR CORE VALUES
            </motion.div>

            {/* 2-Column Split Header */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end">
              {/* Left Column: Bold Headline */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="lg:col-span-7"
              >
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.15]">
                  <span className="text-slate-900 block">The Principles Behind</span>
                  <span className="text-[#0056b3] block">Our Precision.</span>
                </h3>
              </motion.div>

              {/* Right Column: Description with Vertical Accent Bar */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="lg:col-span-5 relative pl-5 sm:pl-6"
              >
                {/* Gradient Vertical Accent Bar */}
                <div className="absolute left-0 top-1 bottom-1 w-1 rounded-full bg-gradient-to-b from-[#0056b3] via-[#0056b3] to-[#ff6b00]" />

                <p className="text-slate-700 text-sm sm:text-base font-normal leading-relaxed">
                  The principles that shape how we engineer, manufacture, and build lasting partnerships at Patel Mould Industries.
                </p>

                {/* Micro Highlight Pills */}
                <div className="flex items-center flex-wrap gap-2.5 mt-3.5">
                  <span className="text-[11px] font-medium text-[#0056b3] bg-blue-50 border border-blue-200/90 px-3 py-1 rounded-full flex items-center gap-1.5 shadow-2xs hover:bg-[#0056b3] hover:text-white hover:border-[#0056b3] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer group/pill">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0056b3] group-hover/pill:bg-white transition-colors"></span>
                    Interactive Compass Dial
                  </span>
                  <span className="text-[11px] font-medium text-slate-800 bg-slate-100 border border-slate-200 px-3 py-1 rounded-full flex items-center gap-1.5 shadow-2xs hover:bg-[#ff6b00] hover:text-white hover:border-[#ff6b00] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer group/pill">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00] group-hover/pill:bg-white transition-colors"></span>
                    6 Core Principles
                  </span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Central Engineering Compass Dial System (Replaces 3x2 Grid!) */}
          <CoreValuesCompass />

        </div>

      </div>
    </section>
  );
};
