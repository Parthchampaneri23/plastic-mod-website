'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useInView, animate } from 'framer-motion';
import { MANUFACTURING_OVERVIEW_STATS } from '@/data/manufacturing';
import { Cpu, Zap, Microscope, CheckCircle2, MapPin, X } from 'lucide-react';
import { Button } from '../Button';

interface CapabilityHighlight {
  id: string;
  title: string;
  cardDesc: string;
  panelDesc: string;
  icon: React.ReactNode;
}

const CAPABILITY_HIGHLIGHTS: CapabilityHighlight[] = [
  {
    id: 'cnc',
    title: 'CNC Precision Machining',
    cardDesc: 'High-speed 5-axis milling centers delivering sub-micron tolerances for complex multi-cavity stack components.',
    panelDesc: 'Precision machining for complex mould components and demanding geometries.',
    icon: <Cpu className="w-4 h-4 text-[#075BBB]" />,
  },
  {
    id: 'edm',
    title: 'EDM & Wire EDM',
    cardDesc: 'Precision spark erosion and 4-axis wire cut cells achieving optical mirror surface finishes in deep ribs.',
    panelDesc: 'Detailed machining for intricate profiles, cavities and complex mould features.',
    icon: <Zap className="w-4 h-4 text-[#FF792D]" />,
  },
  {
    id: 'metrology',
    title: 'Metrology & Dimensional Inspection',
    cardDesc: 'Zeiss 3D CNC Coordinate Measuring Machines inside a 20°C temperature-controlled quality laboratory.',
    panelDesc: 'Dimensional inspection to support mould accuracy and consistent manufacturing quality.',
    icon: <Microscope className="w-4 h-4 text-[#075BBB]" />,
  },
  {
    id: 'testing',
    title: 'Mould Testing & Validation',
    cardDesc: '100% pre-dispatch trial runs on in-house injection moulding presses verifying cycle times and part concentricity.',
    panelDesc: 'Mould testing and validation to evaluate performance and verify manufacturing requirements.',
    icon: <CheckCircle2 className="w-4 h-4 text-[#FF792D]" />,
  },
];

// Clean animated counter matching Home page CounterStat
const AnimatedStatNumber: React.FC<{ valueStr: string }> = ({ valueStr }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  useEffect(() => {
    if (!isInView || !ref.current) return;

    const match = valueStr.match(/([^\d.]*)([\d.,]+)(.*)/);
    if (!match) {
      if (ref.current) ref.current.textContent = valueStr;
      return;
    }

    const prefix = match[1] || '';
    const cleanNumStr = match[2].replace(/,/g, '');
    const numericVal = parseFloat(cleanNumStr);
    if (isNaN(numericVal)) {
      if (ref.current) ref.current.textContent = valueStr;
      return;
    }

    const suffix = match[3] || '';
    const hasDecimal = cleanNumStr.includes('.');
    const decimalPlaces = hasDecimal ? cleanNumStr.split('.')[1].length : 0;
    const hasComma = match[2].includes(',');

    const node = ref.current;
    const controls = animate(0, numericVal, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(value) {
        if (hasDecimal) {
          node.textContent = `${prefix}${value.toFixed(decimalPlaces)}${suffix}`;
        } else {
          const valInt = Math.floor(value);
          const formattedInt = hasComma ? valInt.toLocaleString() : `${valInt}`;
          node.textContent = `${prefix}${formattedInt}${suffix}`;
        }
      },
    });

    return () => controls.stop();
  }, [isInView, valueStr]);

  return <span ref={ref}>{valueStr}</span>;
};

interface ManufacturingOverviewProps {
  overview?: {
    badge?: string;
    heading?: string;
    highlightHeading?: string;
    summary?: string;
    facilityImage?: string;
    facilityLocation?: string;
    facilityTag?: string;
    infrastructureTitle?: string;
    infrastructureDesc?: string;
    stats?: Array<{ value: string; label: string; detail: string }>;
    capabilities?: Array<{
      id: string;
      title: string;
      cardDesc: string;
      panelDesc: string;
    }>;
  };
}

export const ManufacturingOverview: React.FC<ManufacturingOverviewProps> = ({ overview }) => {
  // Track hovered card id and clicked (pinned) card id
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [pinnedId, setPinnedId] = useState<string | null>(null);

  // Icon mapping helper
  const getIconForCapability = (id: string) => {
    switch (id) {
      case 'cnc':
        return <Cpu className="w-4 h-4 text-[#075BBB]" />;
      case 'edm':
        return <Zap className="w-4 h-4 text-[#FF792D]" />;
      case 'metrology':
        return <Microscope className="w-4 h-4 text-[#075BBB]" />;
      case 'testing':
      default:
        return <CheckCircle2 className="w-4 h-4 text-[#FF792D]" />;
    }
  };

  const capabilities = (overview?.capabilities && overview.capabilities.length > 0)
    ? overview.capabilities.map((c) => ({
        ...c,
        icon: getIconForCapability(c.id),
      }))
    : CAPABILITY_HIGHLIGHTS;

  const stats = (overview?.stats && overview.stats.length > 0)
    ? overview.stats
    : MANUFACTURING_OVERVIEW_STATS;

  const badge = overview?.badge || 'MANUFACTURING OVERVIEW';
  const heading = overview?.heading || 'Precision Engineering.';
  const highlightHeading = overview?.highlightHeading || 'Manufacturing Excellence.';
  const summary = overview?.summary || 'Every tooling phase—from metallurgical steel verification and parametric 3D CAD design to finish machining, optical assembly, and in-house press trials—is managed under one roof to assure complete dimensional integrity and on-schedule execution.';
  const facilityImage = overview?.facilityImage || '/About/FACILITY.png';
  const facilityLocation = overview?.facilityLocation || 'Precision Mould Park, Phase-IV GIDC, Gujarat';
  const facilityTag = overview?.facilityTag || '15,000 m² Plant';
  const infrastructureTitle = overview?.infrastructureTitle || 'End-to-End Toolroom Infrastructure';
  const infrastructureDesc = overview?.infrastructureDesc || 'Our plant integrates dedicated machining cells and metrology labs to support demanding mould builds. Synchronized toolpaths and strict in-process checkpoints ensure zero accumulated tolerance errors across all cavities.';

  // Active capability derived from hover first, then pinned
  const activeId = hoveredId || pinnedId;
  const activeCapability = capabilities.find((c) => c.id === activeId) || null;

  // Handle card click / tap
  const handleCardClick = (id: string) => {
    if (pinnedId === id) {
      setPinnedId(null);
    } else {
      setPinnedId(id);
    }
  };

  return (
    <section id="overview" className="py-13 sm:py-13 bg-[#F7F9FC] relative border-b border-slate-200/90 overflow-hidden text-slate-800">
      {/* Subtle technical background grid */}
      <div className="absolute inset-0 tech-grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ======================================================== */}
        {/* 1. MANUFACTURING INTRODUCTION (2-COLUMN EDITORIAL)       */}
        {/* ======================================================== */}
        <div className="mb-12 sm:mb-16">
          {/* Refined Eyebrow Badge (No Section 1 text) */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-blue-200/80 text-[#075BBB] text-xs font-mono font-bold uppercase tracking-wider mb-5 shadow-xs"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF792D] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF792D]"></span>
            </span>
            <span>{badge}</span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
            {/* Left: Prominent Heading and Supporting Copy */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="lg:col-span-7 space-y-4"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold text-[#0B1930] tracking-tight leading-[1.15]">
                {heading}{' '}
                <span className="text-[#075BBB] block sm:inline">{highlightHeading}</span>
              </h2>
            </motion.div>

            {/* Right: Concise Manufacturing Summary with Subtle Blue/Orange Vertical Accent */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="lg:col-span-5 relative pl-5 sm:pl-6 pt-1 lg:pt-2"
            >
              {/* Subtle dual-color vertical accent line */}
              <div className="absolute left-0 top-1 bottom-1 w-[3px] rounded-full bg-gradient-to-b from-[#075BBB] via-[#075BBB] to-[#FF792D]" />
              <div className="space-y-2">
                <p className="text-slate-700 text-sm sm:text-[15px] leading-relaxed">
                  {summary}
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* 2. MANUFACTURING FACILITY PRESENTATION (2 COLUMNS)       */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch mb-14">

          {/* Left Column: Stationary Factory Image with Refined Light Interactive Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-6 flex flex-col"
          >
            <div className="relative w-full h-[340px] sm:h-[420px] lg:h-full min-h-[380px] rounded-2xl overflow-hidden border border-slate-200/90 shadow-md bg-slate-900">
              {/* Stationary Factory Image (no zoom, flash, or image replacement) */}
              <Image
                src={facilityImage}
                alt="Patel Mould Manufacturing Facility and Toolroom Gujarat"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center filter brightness-[0.98]"
              />

              {/* Gentle subtle bottom gradient for visual grounding */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />

              {/* Bottom Interactive Overlay Container */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 z-20">
                <AnimatePresence mode="wait">
                  {activeCapability ? (
                    /* ======================================================== */
                    /* ACTIVE CAPABILITY COMPACT DARK PANEL                     */
                    /* ======================================================== */
                    <motion.div
                      key={activeCapability.id}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.22, ease: 'easeOut' }}
                      className="p-3 sm:p-3.5 rounded-xl bg-[#0b1728]/92 backdrop-blur-md border border-slate-700/80 shadow-xl text-white relative overflow-hidden"
                    >
                      {/* Dual-color top accent hairline */}
                      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#075BBB] via-[#FF792D] to-transparent" />

                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2.5 min-w-0">
                          {/* Compact Icon Container */}
                          <div className="p-1.5 rounded-lg bg-blue-500/20 border border-blue-400/30 text-blue-300 shrink-0">
                            {activeCapability.icon}
                          </div>

                          <div className="min-w-0">
                            <h4 className="text-xs sm:text-sm font-bold text-white tracking-tight leading-tight truncate">
                              {activeCapability.title}
                            </h4>
                            <p className="text-[11px] sm:text-xs text-slate-300 leading-snug line-clamp-1 mt-0.5">
                              {activeCapability.panelDesc}
                            </p>
                          </div>
                        </div>

                        {/* Reset / Unpin Button (Mobile Friendly & Pinned Clear) */}
                        {pinnedId && (
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setPinnedId(null);
                              setHoveredId(null);
                            }}
                            className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-1 focus:ring-blue-400 shrink-0"
                            title="Return to facility overview"
                            aria-label="Return to facility overview"
                          >
                            <X className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                    </motion.div>
                  ) : (
                    /* ======================================================== */
                    /* DEFAULT MANUFACTURING FACILITY OVERLAY (COMPACT DARK)    */
                    /* ======================================================== */
                    <motion.div
                      key="default-facility"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                      className="p-2.5 sm:p-3 rounded-xl bg-[#0b1728]/90 backdrop-blur-md border border-slate-700/70 shadow-lg flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className="w-7 h-7 rounded-lg bg-blue-500/20 border border-blue-400/30 flex items-center justify-center shrink-0">
                          <MapPin className="w-3.5 h-3.5 text-[#FF792D]" />
                        </div>
                        <div className="min-w-0">
                          <span className="text-[9px] font-mono font-bold text-[#FF792D] uppercase tracking-wider block leading-none">
                            MANUFACTURING FACILITY
                          </span>
                          <span className="text-xs font-semibold text-slate-100 truncate block mt-0.5">
                            {facilityLocation}
                          </span>
                        </div>
                      </div>
                      <div className="hidden sm:flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-blue-500/20 text-blue-200 border border-blue-400/30 shrink-0">
                        {facilityTag}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* Right Column: End-to-End Toolroom Infrastructure & 4 Capability Cards */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="lg:col-span-6 flex flex-col justify-between space-y-6"
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="space-y-3">
              <h3 className="text-xl sm:text-2xl font-bold text-[#0B1930]">
                {infrastructureTitle}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {infrastructureDesc}
              </p>
            </div>

            {/* Four Capability Cards with Hover & Click Interactions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
              {capabilities.map((item) => {
                const isCurrentActive = activeId === item.id;
                const isPinned = pinnedId === item.id;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleCardClick(item.id)}
                    onMouseEnter={() => setHoveredId(item.id)}
                    className={`p-3.5 sm:p-4 rounded-xl text-left transition-all duration-200 border relative cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#075BBB] focus:ring-offset-1 ${isCurrentActive
                      ? 'bg-blue-50/70 border-[#075BBB] shadow-xs'
                      : 'bg-white border-slate-200/90 shadow-2xs hover:bg-slate-50/60 hover:border-slate-300'
                      }`}
                    aria-pressed={isPinned}
                  >
                    {/* Small pinned/active dot indicator */}
                    {isCurrentActive && (
                      <span className="absolute top-2.5 right-2.5 flex h-2 w-2">
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF792D]"></span>
                      </span>
                    )}

                    <div className="flex items-start gap-3">
                      <div
                        className={`p-2 rounded-lg border shrink-0 mt-0.5 transition-colors duration-200 ${isCurrentActive
                          ? 'bg-white border-[#075BBB]/40 text-[#075BBB]'
                          : 'bg-slate-50 border-slate-200/80 text-slate-700'
                          }`}
                      >
                        {item.icon}
                      </div>
                      <div className="space-y-1">
                        <h4
                          className={`text-xs sm:text-[13px] font-bold leading-snug transition-colors duration-200 ${isCurrentActive ? 'text-[#075BBB]' : 'text-[#0B1930]'
                            }`}
                        >
                          {item.title}
                        </h4>
                        <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                          {item.cardDesc}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </motion.div>

        </div>

        {/* ======================================================== */}
        {/* 3. HORIZONTAL STATISTICS STRIP (MATCHING HOME/ABOUT)      */}
        {/* ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-2xl bg-white border border-slate-200/90 shadow-sm overflow-hidden"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 divide-x-0 sm:divide-x divide-slate-200/80">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="p-5 sm:p-6 lg:p-7 flex flex-col justify-between hover:bg-slate-50/60 transition-colors group"
              >
                <div>
                  <div className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#075BBB] tracking-tight group-hover:scale-102 transition-transform">
                    <AnimatedStatNumber valueStr={stat.value} />
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-[#0B1930] mt-2">
                    {stat.label}
                  </div>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-500 font-normal mt-1 leading-relaxed">
                  {stat.detail}
                </p>
                <div className="mt-3 h-0.5 w-8 bg-blue-100 group-hover:w-16 group-hover:bg-[#FF792D] transition-all duration-300 rounded-full" />
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
