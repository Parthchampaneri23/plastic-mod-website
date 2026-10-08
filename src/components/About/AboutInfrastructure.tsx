'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { Cpu, Zap, Wrench, ShieldCheck, Building2 } from 'lucide-react';

interface InfrastructureItem {
  id: string;
  num: string;
  navTitle: string;
  subtitle: string;
  description: string;
  tag: string;
  icon: React.ReactNode;
}

const INFRASTRUCTURE_DATA: InfrastructureItem[] = [
  {
    id: 'facility',
    num: '01',
    navTitle: 'FACILITY',
    subtitle: 'Integrated Manufacturing Environment',
    description:
      'A purpose-built manufacturing environment supporting precision mould design, machining, assembly, and inspection.',
    tag: '01 — MAIN TOOLROOM COMPLEX',
    icon: <Building2 className="w-5 h-5 text-[#0056b3]" />,
  },
  {
    id: 'cnc',
    num: '02',
    navTitle: 'CNC MACHINING',
    subtitle: 'Advanced Precision Machining',
    description:
      'Advanced CNC machining capabilities for producing complex and precise mould components.',
    tag: '02 — CNC MACHINING CENTER',
    icon: <Cpu className="w-5 h-5 text-[#0056b3]" />,
  },
  {
    id: 'edm',
    num: '03',
    navTitle: 'EDM & WIRE CUT',
    subtitle: 'Precision Electrical Discharge Machining',
    description:
      'EDM and wire-cut machining for detailed mould features and precision components.',
    tag: '03 — EDM & WIRE-CUT CELL',
    icon: <Zap className="w-5 h-5 text-[#ff6b00]" />,
  },
  {
    id: 'assembly',
    num: '04',
    navTitle: 'ASSEMBLY & FITTING',
    subtitle: 'Precision Mould Assembly & Fitting',
    description:
      'Dedicated toolroom fitting and assembly area for high-cavitation PET preform and ISBM moulds.',
    tag: '04 — MOULD ASSEMBLY & FITTING',
    icon: <Wrench className="w-5 h-5 text-[#0056b3]" />,
  },
  {
    id: 'inspection',
    num: '05',
    navTitle: 'QUALITY INSPECTION',
    subtitle: 'Dimensional Quality Validation',
    description:
      'Comprehensive metrology and quality inspection environment to validate critical component tolerances.',
    tag: '05 — QUALITY INSPECTION CELL',
    icon: <ShieldCheck className="w-5 h-5 text-[#ff6b00]" />,
  },
];

const FACILITY_HOTSPOTS = [
  { id: 'cnc', label: 'CNC MACHINING', x: 38, y: 52, index: 1 },
  { id: 'edm', label: 'EDM', x: 64, y: 46, index: 2 },
  { id: 'assembly', label: 'ASSEMBLY', x: 25, y: 68, index: 3 },
  { id: 'inspection', label: 'INSPECTION', x: 78, y: 60, index: 4 },
];

export const AboutInfrastructure: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [activeHotspotHover, setActiveHotspotHover] = useState<string | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const currentItem = INFRASTRUCTURE_DATA[activeIndex];

  const handleSelect = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section
      id="infrastructure"
      className="py-13 sm:py-13 bg-white relative overflow-hidden text-slate-900 border-b border-slate-200 selection:bg-[#0056b3] selection:text-white"
    >
      {/* Background subtle dotted pattern preserving existing site design system */}
      <div className="absolute inset-0 tech-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#0056b3_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ======================================================== */}
        {/* SECTION HEADER (MATCHES COMPANY STRENGTH HEADER STYLE)    */}
        {/* ======================================================== */}
        <div className="mb-12 sm:mb-16">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-[#0056b3] text-xs font-mono font-bold uppercase tracking-wider mb-4 shadow-2xs"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff6b00] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#ff6b00]"></span>
            </span>
            OUR INFRASTRUCTURE
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end">
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-7"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.15]">
                <span className="text-slate-900 block">Where Precision</span>
                <span className="text-[#0056b3] block">Takes Shape.</span>
              </h2>
            </motion.div>

            <motion.div
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-5 relative pl-5 sm:pl-6"
            >
              <div className="absolute left-0 top-1 bottom-1 w-1 rounded-full bg-gradient-to-b from-[#0056b3] via-[#0056b3] to-[#ff6b00]" />
              <p className="text-slate-700 text-sm sm:text-base font-normal leading-relaxed">
                Explore the manufacturing environment, advanced machinery, and precision capabilities behind our mould manufacturing.
              </p>
            </motion.div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* INFRASTRUCTURE EXPLORER WORKSPACE                        */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch mb-12">

          {/* LEFT: MAIN FEATURED IMAGE DISPLAY AREA (~68% on Desktop) */}
          <div className="lg:col-span-8 flex flex-col justify-between">

            {/* MAIN IMAGE CONTAINER */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full h-[340px] sm:h-[400px] lg:h-[420px] rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-900 border border-slate-200/90 shadow-xl group"
            >
              <Image
                src="/About/FACILITY.png"
                alt="Patel Mould Industries Main Manufacturing Facility"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 800px"
                className="object-cover object-center filter brightness-[0.96]"
              />
              {/* Subtle vignette gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/15 pointer-events-none" />

              {/* TECHNICAL HOTSPOTS OVER MAIN FACILITY IMAGE */}
              <div className="hidden sm:block absolute inset-0 z-20 pointer-events-none">
                {FACILITY_HOTSPOTS.map((hs) => {
                  const isHovered = activeHotspotHover === hs.id;
                  const isTargetActive = activeIndex === hs.index;

                  return (
                    <div
                      key={hs.id}
                      style={{ left: `${hs.x}%`, top: `${hs.y}%` }}
                      className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto cursor-pointer group/spot"
                      onClick={() => handleSelect(hs.index)}
                      onMouseEnter={() => setActiveHotspotHover(hs.id)}
                      onMouseLeave={() => setActiveHotspotHover(null)}
                    >
                      {/* Hotspot Ring Animation */}
                      <div className="relative flex items-center justify-center">
                        <span className="absolute inline-flex h-6 w-6 rounded-full bg-[#0056b3]/40 animate-ping opacity-60" />
                        <span
                          className={`relative inline-flex rounded-full transition-all duration-300 ${isHovered || isTargetActive
                            ? 'h-4 w-4 bg-[#ff6b00] ring-4 ring-orange-500/30'
                            : 'h-3 w-3 bg-[#0056b3] ring-2 ring-white/90 shadow-md'
                            }`}
                        />

                        {/* Connector Line & Label */}
                        <div
                          className={`absolute left-full ml-3 top-1/2 -translate-y-1/2 flex items-center transition-all duration-300 ${isHovered || isTargetActive
                            ? 'opacity-100 translate-x-0'
                            : 'opacity-85 translate-x-0 group-hover/spot:opacity-100'
                            }`}
                        >
                          <div className="h-[1px] w-4 bg-white/70" />
                          <div
                            className={`px-2.5 py-1 rounded-md backdrop-blur-md border text-white text-[11px] font-mono font-medium uppercase tracking-wider whitespace-nowrap shadow-lg transition-colors ${isTargetActive
                              ? 'bg-[#0056b3]/95 border-blue-400/80 ring-2 ring-blue-400/40'
                              : 'bg-slate-900/90 border-slate-700/80'
                              }`}
                          >
                            <span className="text-[#ff6b00] mr-1 font-bold">•</span>
                            {hs.label}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* OVERLAY FACILITY / ACTIVE CATEGORY MINIMAL LABEL */}
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-20 pointer-events-none">
                <div className="inline-flex flex-col p-3 sm:p-4 rounded-xl bg-slate-900/85 backdrop-blur-md border border-slate-700/60 text-white shadow-lg max-w-[calc(100%-2rem)]">
                  <span className="text-[10px] sm:text-xs font-mono font-bold text-[#ff6b00] uppercase tracking-wider">
                    {currentItem.tag}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-100 mt-0.5">
                    {currentItem.subtitle}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: EDITORIAL NAVIGATION & DETAILS SIDEBAR (~32% on Desktop) */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full">

            {/* EDITORIAL ITEM LIST */}
            <div className="space-y-2 sm:space-y-2.5">
              <div className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400 mb-2">
                SELECT CATEGORY
              </div>

              {INFRASTRUCTURE_DATA.map((item, idx) => {
                const isActive = activeIndex === idx;

                return (
                  <motion.div
                    key={item.id}
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 + idx * 0.08 }}
                  >
                    <button
                      type="button"
                      onClick={() => handleSelect(idx)}
                      className={`w-full text-left py-3 px-4 rounded-xl transition-all duration-300 border focus:outline-none focus:ring-2 focus:ring-[#0056b3] ${isActive
                        ? 'bg-slate-50 border-slate-200/90 shadow-sm'
                        : 'bg-transparent border-transparent hover:bg-slate-50/60 hover:border-slate-100'
                        }`}
                      aria-current={isActive ? 'true' : 'false'}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-baseline gap-3">
                          <span
                            className={`font-mono text-sm font-bold transition-colors ${isActive
                              ? idx === 2
                                ? 'text-[#ff6b00]'
                                : 'text-[#0056b3]'
                              : 'text-slate-400'
                              }`}
                          >
                            {item.num}
                          </span>
                          <span
                            className={`text-sm sm:text-base font-bold tracking-tight transition-colors ${isActive ? 'text-slate-900' : 'text-slate-700 hover:text-slate-900'
                              }`}
                          >
                            {item.navTitle}
                          </span>
                        </div>

                        {/* Active Indicator Pin */}
                        <div className="flex items-center">
                          {isActive ? (
                            <motion.span
                              layoutId="activeIndicator"
                              className={`h-2.5 w-2.5 rounded-full ${idx === 2 ? 'bg-[#ff6b00]' : 'bg-[#0056b3]'
                                }`}
                              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                            />
                          ) : (
                            <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
                          )}
                        </div>
                      </div>

                      {/* Animated expansion of description for active item */}
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-2.5 pt-2.5 border-t border-slate-200/80"
                        >
                          <div className="text-xs font-bold font-mono text-[#0056b3] mb-1">
                            {item.subtitle}
                          </div>
                          <p className="text-xs text-slate-600 leading-relaxed">
                            {item.description}
                          </p>
                        </motion.div>
                      )}
                    </button>
                  </motion.div>
                );
              })}
            </div>

          </div>

        </div>

        {/* ======================================================== */}
        {/* BOTTOM FULL-WIDTH PREVIEW ROW (CNC & EDM PREVIEWS)      */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {/* CNC PREVIEW */}
          <motion.button
            type="button"
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            onClick={() => handleSelect(1)}
            className={`group relative h-40 rounded-2xl overflow-hidden border text-left transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#0056b3] focus:ring-offset-2 ${activeIndex === 1
              ? 'border-[#0056b3] ring-2 ring-[#0056b3]/30 shadow-md scale-[1.01]'
              : 'border-slate-200/90 hover:border-slate-300 shadow-xs hover:shadow-md'
              }`}
            aria-label="Select CNC Machining"
          >
            <Image
              src="/About/CNC.png"
              alt="CNC Machining Preview"
              fill
              sizes="(max-width: 768px) 100vw, 600px"
              className="object-cover object-center filter brightness-[0.92] group-hover:scale-102 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-white uppercase tracking-wider block">
                  02 — CNC MACHINING
                </span>
                <span className="text-xs text-slate-300 font-medium">
                  5-Axis High-Speed Precision Milling
                </span>
              </div>
              <span
                className={`h-2.5 w-2.5 rounded-full transition-colors ${activeIndex === 1 ? 'bg-[#0056b3]' : 'bg-white/60 group-hover:bg-white'
                  }`}
              />
            </div>
          </motion.button>

          {/* EDM PREVIEW */}
          <motion.button
            type="button"
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.45 }}
            onClick={() => handleSelect(2)}
            className={`group relative h-40 rounded-2xl overflow-hidden border text-left transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#0056b3] focus:ring-offset-2 ${activeIndex === 2
              ? 'border-[#ff6b00] ring-2 ring-[#ff6b00]/30 shadow-md scale-[1.01]'
              : 'border-slate-200/90 hover:border-slate-300 shadow-xs hover:shadow-md'
              }`}
            aria-label="Select EDM & Wire Cut"
          >
            <Image
              src="/About/EDM.png"
              alt="EDM & Wire Cut Preview"
              fill
              sizes="(max-width: 768px) 100vw, 600px"
              className="object-cover object-center filter brightness-[0.92] group-hover:scale-102 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-white uppercase tracking-wider block">
                  03 — EDM & WIRE CUT
                </span>
                <span className="text-xs text-slate-300 font-medium">
                  Mirror Spark Erosion & Wire Cut
                </span>
              </div>
              <span
                className={`h-2.5 w-2.5 rounded-full transition-colors ${activeIndex === 2 ? 'bg-[#ff6b00]' : 'bg-white/60 group-hover:bg-white'
                  }`}
              />
            </div>
          </motion.button>
        </div>
      </div>
    </section>
  );
};
