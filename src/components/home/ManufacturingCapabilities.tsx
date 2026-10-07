'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { CAPABILITIES } from '@/data/home';
import { Button } from '../Button';
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Cpu, Award, Zap, Check, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const ManufacturingCapabilities: React.FC = () => {
  const [activeId, setActiveId] = useState<string>(CAPABILITIES[0]?.id || 'cnc-machining');

  const activeCapability = CAPABILITIES.find((c) => c.id === activeId) || CAPABILITIES[0];
  const itemDelays = [0.05, 0.12, 0.19, 0.26, 0.33, 0.40];

  return (
    <section id="capabilities" className="py-13 sm:py-13 bg-white relative border-t border-b border-slate-200 overflow-hidden">
      {/* Subtle Technical Grid Background */}
      <div className="absolute inset-0 tech-grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* SECTION HEADER WITH SPLIT 2-COLUMN LAYOUT */}
        <div className="mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-[#0056b3] text-xs font-bold uppercase tracking-wider mb-4"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff6b00] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#ff6b00]"></span>
            </span>
            MANUFACTURING CAPABILITIES
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end">
            {/* Left Column: Heading */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-7"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight leading-[1.12]">
                Precision Technology.<br />
                <span className="text-[#0056b3]">Engineering Expertise.</span>
              </h2>
            </motion.div>

            {/* Right Column: Description with Clean Contrast, Gradient Accent & Tech Badges */}
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
                Advanced tooling technology, specialized toolmaker craftsmanship, and state-of-the-art in-house machinery engineered to deliver <strong className="text-slate-900 font-medium">high-precision molds</strong> with consistent cycle times and <strong className="text-[#0056b3] font-medium">zero-defect output</strong>.
              </p>

              {/* Micro Technical Highlight Pills */}
              <div className="flex items-center flex-wrap gap-2.5 mt-3.5">
                <span className="text-[11px] font-medium text-[#0056b3] bg-blue-50 border border-blue-200/90 px-3 py-1 rounded-full flex items-center gap-1.5 shadow-2xs hover:bg-[#0056b3] hover:text-white hover:border-[#0056b3] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer group/pill">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0056b3] group-hover/pill:bg-white transition-colors"></span>
                  Sub-Micron CNC Precision
                </span>
                <span className="text-[11px] font-medium text-slate-800 bg-slate-100 border border-slate-200 px-3 py-1 rounded-full flex items-center gap-1.5 shadow-2xs hover:bg-[#ff6b00] hover:text-white hover:border-[#ff6b00] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer group/pill">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00] group-hover/pill:bg-white transition-colors"></span>
                  100% In-House Trial Testing
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* MAIN TWO-COLUMN SHOWCASE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">

          {/* LEFT COLUMN: Large capablities.png Image Showcase (~48-50%) */}
          <div className="lg:col-span-6 relative group w-full pt-2">

            {/* Subtle Blue/Orange Engineering Accents */}
            <div className="absolute -top-2 -right-2 sm:-right-3 w-24 h-24 sm:w-28 sm:h-28 border-r-4 border-t-4 border-[#ff6b00] rounded-tr-3xl pointer-events-none hidden sm:block opacity-75 group-hover:opacity-100 transition-opacity duration-300 z-0" />
            <div className="absolute -bottom-2 -left-2 sm:-left-3 w-24 h-24 sm:w-28 sm:h-28 border-l-4 border-b-4 border-[#0056b3] rounded-bl-3xl pointer-events-none hidden sm:block opacity-75 group-hover:opacity-100 transition-opacity duration-300 z-0" />

            {/* Main Capabilities Image Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative z-10 rounded-[22px] overflow-hidden border border-slate-200 shadow-2xl bg-slate-900 group/img"
            >
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative w-full h-[320px] xs:h-[380px] sm:h-[460px] lg:h-[500px]"
              >
                <Image
                  src="/Home/capablities.png"
                  alt="Patel Mould Industries precision manufacturing capabilities"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 580px"
                  className="object-cover object-center rounded-[22px]"
                  priority
                />

                {/* Subtle Gradient Bottom Overlay */}
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent pointer-events-none" />

                {/* Active Technical Badge Overlay (White Glassmorphism) */}
                <AnimatePresence mode="popLayout">
                  {activeCapability && (
                    <motion.div
                      key={activeCapability.id}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute bottom-4 left-4 right-4 z-20 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200/90 text-slate-900 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="p-2.5 bg-[#0056b3] rounded-lg text-white font-mono text-xs font-semibold shrink-0">
                          {String(CAPABILITIES.findIndex((c) => c.id === activeCapability.id) + 1).padStart(2, '0')}
                        </div>
                        <div>
                          <div className="text-xs sm:text-sm font-bold text-slate-900 tracking-wide">
                            {activeCapability.title}
                          </div>
                          <div className="text-[11px] text-slate-700 font-bold">
                            {activeCapability.machineBadge}
                          </div>
                        </div>
                      </div>

                      <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-blue-50 text-[#0056b3] border border-blue-200 font-semibold uppercase tracking-wider self-start sm:self-center">
                        Active Machine Spec
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>

            {/* 3-Metric High-Precision Showcase */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-6 p-4 sm:p-5 rounded-[22px] bg-gradient-to-br from-white via-blue-50/30 to-slate-50 border border-slate-200/90 shadow-md relative overflow-hidden group/showcase"
            >
              <div className="grid grid-cols-3 gap-2.5 sm:gap-3 text-center">

                {/* Metric 1: High Precision */}
                <motion.div
                  whileHover={{ y: -3, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="p-3 sm:p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs hover:border-[#0056b3] transition-all duration-300 relative group/metric"
                >
                  <div className="text-[11px] font-mono font-bold text-[#0056b3] mb-1">
                    01 — High Precision
                  </div>
                  <div className="text-sm sm:text-base font-bold text-slate-900 tracking-tight">
                    ±0.005mm Accuracy
                  </div>
                  <div className="text-[10.5px] text-slate-500 font-normal mt-1 leading-snug">
                    Precision-built for consistent results
                  </div>
                  <div className="absolute top-2.5 right-2.5 flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0056b3] opacity-0 group-hover/metric:opacity-75 transition-opacity"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0056b3]"></span>
                  </div>
                </motion.div>

                {/* Metric 2: High-Volume Production */}
                <motion.div
                  whileHover={{ y: -3, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="p-3 sm:p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs hover:border-[#ff6b00] transition-all duration-300 relative group/metric"
                >
                  <div className="text-[11px] font-mono font-bold text-[#ff6b00] mb-1">
                    02 — High-Volume Production
                  </div>
                  <div className="text-sm sm:text-base font-bold text-slate-900 tracking-tight">
                    Up to 96 Cavities
                  </div>
                  <div className="text-[10.5px] text-slate-500 font-normal mt-1 leading-snug">
                    Designed for faster production
                  </div>
                  <div className="absolute top-2.5 right-2.5 flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff6b00] opacity-0 group-hover/metric:opacity-75 transition-opacity"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff6b00]"></span>
                  </div>
                </motion.div>

                {/* Metric 3: Long Tool Life */}
                <motion.div
                  whileHover={{ y: -3, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="p-3 sm:p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs hover:border-[#0056b3] transition-all duration-300 relative group/metric"
                >
                  <div className="text-[11px] font-mono font-bold text-[#0056b3] mb-1">
                    03 — Long Tool Life
                  </div>
                  <div className="text-sm sm:text-base font-bold text-slate-900 tracking-tight">
                    5M+ Production Cycles
                  </div>
                  <div className="text-[10.5px] text-slate-500 font-normal mt-1 leading-snug">
                    Built for reliable, long-term performance
                  </div>
                  <div className="absolute top-2.5 right-2.5 flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0056b3] opacity-0 group-hover/metric:opacity-75 transition-opacity"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0056b3]"></span>
                  </div>
                </motion.div>

              </div>

              {/* Option 1: Live Machine Fleet Summary Banner */}
              <div className="mt-3.5 p-3 rounded-xl bg-gradient-to-r from-blue-50/90 via-white to-slate-50 border border-blue-100 flex items-center justify-between text-xs font-semibold text-slate-700 shadow-2xs">
                <div className="flex items-center gap-2 text-[#0056b3]">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff6b00] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff6b00]"></span>
                  </span>
                  <span className="font-bold text-slate-900">30+ High-Precision Toolroom Machines</span>
                </div>
                <span className="text-[11px] text-slate-500 font-medium">100% In-House Machining & Assembly</span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: 6 Compact Interactive Capability Rows (~50-52%) */}
          <div className="lg:col-span-6 space-y-3">
            {CAPABILITIES.map((cap, idx) => {
              const isActive = activeId === cap.id;
              const numStr = String(idx + 1).padStart(2, '0');

              return (
                <motion.div
                  key={cap.id}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: itemDelays[idx], ease: "easeOut" }}
                  onClick={() => setActiveId(cap.id)}
                  onMouseEnter={() => setActiveId(cap.id)}
                  className={`group relative cursor-pointer p-4 sm:p-4.5 rounded-2xl transition-all duration-200 border ${isActive
                    ? 'bg-blue-50/80 border-blue-200 shadow-sm'
                    : 'bg-white border-slate-100 hover:border-slate-200 hover:bg-slate-50/70'
                    }`}
                >
                  {/* Left Active Indicator Bar */}
                  <div
                    className={`absolute left-0 top-3 bottom-3 w-1.5 rounded-r-full transition-opacity duration-200 ${isActive ? 'bg-[#0056b3] opacity-100' : 'opacity-0'
                      }`}
                  />

                  <div className="flex items-start justify-between gap-4">

                    {/* Left: Step Number & Title / Description */}
                    <div className="flex items-start space-x-3.5 sm:space-x-4">

                      {/* Step Number */}
                      <span
                        className={`font-mono text-sm font-bold transition-colors duration-200 mt-0.5 shrink-0 ${isActive ? 'text-[#ff6b00]' : 'text-slate-400 group-hover:text-[#0056b3]'
                          }`}
                      >
                        {numStr}
                      </span>

                      <div className="space-y-1">

                        {/* Title & Badge */}
                        <div className="flex items-center flex-wrap gap-2">
                          <h3
                            className={`text-base sm:text-lg font-bold tracking-tight transition-colors duration-200 ${isActive ? 'text-[#0056b3]' : 'text-slate-900 group-hover:text-[#0056b3]'
                              }`}
                          >
                            {cap.title}
                          </h3>
                        </div>

                        {/* Short Description */}
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                          {cap.shortDesc}
                        </p>

                        {/* Technical Highlights with Smooth Grid Max-Height Transition */}
                        <div
                          className={`grid transition-all duration-300 ease-in-out ${isActive
                            ? 'grid-rows-[1fr] opacity-100 pt-3 mt-2 border-t border-blue-200/60'
                            : 'grid-rows-[0fr] opacity-0 pt-0 mt-0'
                            }`}
                        >
                          <div className="overflow-hidden space-y-1.5">
                            {cap.specifications?.map((spec, sIdx) => (
                              <div key={sIdx} className="text-xs text-slate-700 font-medium flex items-center space-x-2">
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#0056b3] shrink-0" />
                                <span>{spec}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                      </div>
                    </div>

                    {/* Right Action Icon (Tick mark when active, Chevron when inactive) */}
                    <div className="shrink-0 pt-0.5">
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200 ${isActive
                          ? 'bg-[#0056b3] text-white shadow-xs'
                          : 'text-slate-400 bg-slate-100/70 group-hover:text-[#0056b3] group-hover:bg-blue-50'
                          }`}
                      >
                        {isActive ? (
                          <Check className="w-4 h-4 stroke-[2.5]" />
                        ) : (
                          <ChevronRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                        )}
                      </div>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* BOTTOM CTA BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-14 text-center"
        >
          <Button href="#infrastructure" variant="primary" size="lg" icon={<ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />}>
            View All Capabilities & Machine Specs
          </Button>
        </motion.div>

      </div>
    </section>
  );
};

