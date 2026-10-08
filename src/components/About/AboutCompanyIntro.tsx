'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useInView, animate } from 'framer-motion';
import { CheckCircle2, ChevronRight, Award, ShieldCheck, Globe, Building2, Sparkles, ArrowRight } from 'lucide-react';

// Lightweight Metric Block for 3 Key Stats with Fixed Equal Height & Single Line Number
const MetricBlock: React.FC<{
  valueStr: string;
  label: string;
  sublabel: string;
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}> = ({ valueStr, label, sublabel, isHovered, onMouseEnter, onMouseLeave }) => {
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
      duration: 2.0,
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

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`relative p-4 rounded-xl border transition-all duration-300 cursor-pointer shadow-2xs h-full flex flex-col justify-between ${isHovered
        ? 'bg-blue-50/90 border-[#0056b3] shadow-md -translate-y-0.5'
        : 'bg-white border-slate-200/90 hover:border-[#0056b3] hover:bg-slate-50'
        }`}
    >
      {/* Fixed Position Dot (Top Right Corner) */}
      <span
        className={`absolute top-3.5 right-3.5 w-2 h-2 rounded-full transition-colors ${isHovered ? 'bg-[#ff6b00] animate-pulse' : 'bg-slate-300'
          }`}
      />

      <div>
        <div className="text-3xl sm:text-4xl font-extrabold text-[#0056b3] tracking-tight font-mono pr-4 whitespace-nowrap">
          <span ref={ref}>{valueStr}</span>
        </div>
        <div className={`text-xs sm:text-sm font-bold mt-1.5 leading-snug transition-colors ${isHovered ? 'text-[#0056b3]' : 'text-slate-900'}`}>
          {label}
        </div>
      </div>
      <div className="text-[11px] text-slate-500 font-normal mt-1 leading-tight">{sublabel}</div>
    </div>
  );
};

// 3 Key Company Stats with Matching Line Counts for Equal Card Heights
const COMPANY_3_STATS = [
  {
    id: 'stat-30yrs',
    value: '30+',
    label: 'Years Experience',
    subtext: 'Tooling Mastery',
    badgeText: 'ESTABLISHED 1994',
    tagColor: 'bg-blue-50 text-[#0056b3] border-blue-200',
    title: '30+ Years of Tooling Engineering Excellence',
    detail: 'Over three decades of continuous moldmaking craftsmanship and technical refinement in GIDC Gujarat.',
    icon: <Award className="w-5 h-5 text-[#0056b3]" />,
  },
  {
    id: 'stat-1500molds',
    value: '1,500+',
    label: 'Moulds Delivered',
    subtext: 'High Cavitation',
    badgeText: 'HIGH CAVITATION',
    tagColor: 'bg-orange-50 text-[#ff6b00] border-orange-200',
    title: '1,500+ Molds Delivered Worldwide',
    detail: 'Custom PET preform, ISBM, and EBM tooling engineered for zero-defect production and rapid cycle times.',
    icon: <Sparkles className="w-5 h-5 text-[#ff6b00]" />,
  },
  {
    id: 'stat-25cities',
    value: '25+',
    label: 'Cities Served',
    subtext: 'Across India',
    badgeText: 'PAN-INDIA NETWORK',
    tagColor: 'bg-blue-50 text-[#0056b3] border-blue-200',
    title: 'Nationwide Pan-India Supply Network',
    detail: 'Trusted tooling partner for premier beverage, pharmaceutical, and FMCG packaging plants across 25+ Indian cities.',
    icon: <Globe className="w-5 h-5 text-[#0056b3]" />,
  },
];

// Interactive Timeline Component with Smooth Scroll-Progress Line & Hover Expansion
const TimelineSection: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-50px' });

  // Compute animated line width percentage based on hover index or default in-view progression
  const getLineWidth = () => {
    if (hoveredIdx !== null) {
      return `${((hoveredIdx + 1) / TIMELINE_MILESTONES.length) * 100}%`;
    }
    return isInView ? '100%' : '0%';
  };

  return (
    <div ref={containerRef} className="relative pt-4 pb-2">
      {/* Background Static Line (Desktop) */}
      <div className="hidden lg:block absolute top-[52px] left-[40px] right-[40px] h-[2px] bg-slate-200 z-0 rounded-full overflow-hidden">
        {/* Animated Progress Line on InView / Hover */}
        <motion.div
          className="h-full bg-gradient-to-r from-[#0056b3] via-[#0056b3] to-[#ff6b00]"
          initial={{ width: '0%' }}
          animate={{ width: getLineWidth() }}
          transition={{ duration: hoveredIdx !== null ? 0.4 : 1.2, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4 relative z-10">
        {TIMELINE_MILESTONES.map((item, idx) => {
          const isCurrentOrPassedHover = hoveredIdx !== null && idx <= hoveredIdx;
          const isDirectlyHovered = hoveredIdx === idx;

          return (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="relative flex flex-col items-start lg:items-center text-left lg:text-center group cursor-pointer"
            >
              {/* Year Tag */}
              <div className="flex items-center gap-2 mb-3">
                <span
                  className={`font-mono text-base font-extrabold tracking-wide transition-colors duration-300 ${item.accent || isDirectlyHovered
                    ? 'text-[#ff6b00]'
                    : isCurrentOrPassedHover
                      ? 'text-[#0056b3]'
                      : 'text-slate-700 group-hover:text-[#0056b3]'
                    }`}
                >
                  {item.year}
                </span>
                {item.accent && (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-orange-50 text-[#ff6b00] border border-orange-200 font-bold uppercase">
                    Present
                  </span>
                )}
              </div>

              {/* Connecting Circle Node on Desktop */}
              <div
                className={`hidden lg:flex w-5 h-5 rounded-full border-2 bg-white items-center justify-center mb-4 transition-all duration-300 z-10 ${isDirectlyHovered
                  ? 'border-[#ff6b00] scale-130 shadow-md ring-4 ring-orange-100'
                  : isCurrentOrPassedHover
                    ? 'border-[#0056b3] scale-110 ring-2 ring-blue-100'
                    : 'border-slate-300 group-hover:border-[#0056b3] group-hover:scale-115'
                  }`}
              >
                <div
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${isDirectlyHovered
                    ? 'bg-[#ff6b00]'
                    : isCurrentOrPassedHover
                      ? 'bg-[#0056b3]'
                      : 'bg-slate-300 group-hover:bg-[#0056b3]'
                    }`}
                />
              </div>

              {/* Concise Milestone Panel Box */}
              <div
                className={`w-full p-3.5 sm:p-4 rounded-xl border transition-all duration-300 shadow-2xs ${isDirectlyHovered
                  ? 'bg-blue-50/90 border-[#0056b3] -translate-y-1 shadow-md'
                  : isCurrentOrPassedHover
                    ? 'bg-blue-50/40 border-blue-200'
                    : 'bg-slate-50 border-slate-200/90 group-hover:border-[#0056b3] group-hover:bg-blue-50/30'
                  }`}
              >
                <h4
                  className={`text-sm font-bold transition-colors leading-snug ${isDirectlyHovered || isCurrentOrPassedHover ? 'text-[#0056b3]' : 'text-slate-900 group-hover:text-[#0056b3]'
                    }`}
                >
                  {item.title}
                </h4>
                <p className="text-xs text-slate-600 leading-tight font-normal mt-1">
                  {item.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

// Company Timeline Milestones
const TIMELINE_MILESTONES = [
  {
    year: '1994',
    title: 'Founded in Gujarat',
    description: 'Started our journey in precision mould manufacturing.',
    accent: false,
  },
  {
    year: '2004',
    title: 'PET Preform Expansion',
    description: 'Expanded our expertise into PET preform and ISBM moulds.',
    accent: false,
  },
  {
    year: '2012',
    title: 'Advanced Technology',
    description: 'Added advanced CNC machining and precision inspection capabilities.',
    accent: false,
  },
  {
    year: '2018',
    title: 'Global Expansion',
    description: 'Began serving customers and industries across global markets.',
    accent: false,
  },
  {
    year: 'Present',
    title: '1,500+ Moulds Delivered',
    description: 'Today, we manufacture high-precision moulds for demanding applications.',
    accent: true,
  },
];

// Core Expertise Items for Capability Explorer
const CORE_EXPERTISE_ITEMS = [
  {
    num: '01',
    title: 'PET Preform Moulds',
    machineBadge: 'High-Cavitation Preform System',
    description: 'High-cavitation moulds designed for efficient PET preform production.',
  },
  {
    num: '02',
    title: 'ISBM Tooling',
    machineBadge: 'Single & Two Stage ISBM',
    description: 'Precision tooling for high-quality injection stretch blow moulding.',
  },
  {
    num: '03',
    title: 'EBM Tooling',
    machineBadge: 'Extrusion Blow Mould Tooling',
    description: 'Reliable mould solutions for bottles, containers and packaging.',
  },
  {
    num: '04',
    title: '5-Axis CNC Machining',
    machineBadge: '24,000 RPM Milling Centers',
    description: 'Advanced machining for complex and precise mould components.',
  },
  {
    num: '05',
    title: 'EDM Technology',
    machineBadge: 'Mirror Spark Erosion & Wire Cut',
    description: 'Precision electrical discharge machining for detailed mould features.',
  },
  {
    num: '06',
    title: '3D CMM Inspection',
    machineBadge: 'Zeiss 3D Coordinate Metrology',
    description: 'Accurate dimensional inspection to maintain mould quality and consistency.',
  },
];

// Interactive Capability Explorer Component
const CapabilityExplorer: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const activeItem = CORE_EXPERTISE_ITEMS[activeIndex] || CORE_EXPERTISE_ITEMS[0];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
      {/* LEFT: Featured Large Image with Dynamic Active Spec Overlay (~55-60% width) */}
      <div className="lg:col-span-7 relative group w-full pt-1">
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
            className="relative w-full h-[320px] xs:h-[380px] sm:h-[440px] lg:h-[480px]"
          >
            <Image
              src="/Home/inf3.png"
              alt="Patel Mould Precision Manufacturing Facility & Equipment"
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover object-center rounded-[22px]"
              priority
            />

            {/* Subtle Gradient Bottom Overlay */}
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent pointer-events-none" />

            {/* Active Technical Badge Overlay on Image (Reflects active capability on hover!) */}
            <AnimatePresence mode="popLayout">
              {activeItem && (
                <motion.div
                  key={activeItem.num}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="absolute bottom-4 left-4 right-4 z-20 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200/90 text-slate-900 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2.5 bg-[#0056b3] rounded-lg text-white font-mono text-xs font-bold shrink-0">
                      {activeItem.num}
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-slate-900 tracking-wide">
                        {activeItem.title}
                      </div>
                      <div className="text-[11px] text-slate-700 font-bold">
                        {activeItem.machineBadge}
                      </div>
                    </div>
                  </div>

                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-blue-50 text-[#0056b3] border border-blue-200 font-semibold uppercase tracking-wider self-start sm:self-center">
                    Active Capability Spec
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>

      {/* RIGHT: Compact Vertical Capability List (5 cols) */}
      <div className="lg:col-span-5 space-y-2">
        {CORE_EXPERTISE_ITEMS.map((item, idx) => {
          const isActive = activeIndex === idx;

          return (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.07 }}
              onClick={() => setActiveIndex(idx)}
              onMouseEnter={() => setActiveIndex(idx)}
              className={`relative p-3.5 sm:p-4 rounded-xl transition-all duration-300 cursor-pointer flex items-center justify-between gap-4 border ${isActive
                ? 'bg-blue-50/70 border-blue-200/90 shadow-2xs'
                : 'bg-white border-transparent hover:bg-slate-50 hover:border-slate-200/60'
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
                  {item.num}
                </span>

                {/* Title & Description */}
                <div>
                  <h4
                    className={`text-sm sm:text-base font-bold tracking-tight transition-colors duration-300 leading-snug ${isActive ? 'text-[#0056b3]' : 'text-slate-900 hover:text-[#0056b3]'
                      }`}
                  >
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-600 font-normal leading-relaxed mt-0.5">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Small Right Arrow */}
              <ArrowRight
                className={`w-4 h-4 shrink-0 transition-all duration-300 ${isActive
                  ? 'text-[#0056b3] translate-x-1 opacity-100'
                  : 'text-slate-300 opacity-60 group-hover:text-slate-500'
                  }`}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export const AboutCompanyIntro: React.FC = () => {
  const [hoveredStatIndex, setHoveredStatIndex] = useState<number | null>(null);

  const activeStat = hoveredStatIndex !== null ? COMPANY_3_STATS[hoveredStatIndex] : null;

  return (
    <section className="py-13 sm:py-13 bg-white relative overflow-hidden border-b border-slate-200">
      {/* Background Subtle Technical Grid */}
      <div className="absolute inset-0 tech-grid-pattern opacity-35 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10 sm:space-y-12">

        {/* ======================================================== */}
        {/* PART 1: MAIN COMPANY INTRODUCTION (50/50 TWO-COLUMN)     */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* LEFT: Factory Image & Dynamic Address / Stat Detail Card Below Image */}
          <div className="lg:col-span-6 space-y-3.5">
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 rounded-[22px] overflow-hidden border border-slate-200 shadow-xl bg-slate-900 group/factory"
            >
              <div className="relative w-full h-[300px] xs:h-[350px] sm:h-[400px] lg:h-[440px]">
                <Image
                  src="/About/about company.png"
                  alt="Patel Mould Industries precision manufacturing plant in Gujarat"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                  className="object-cover object-center rounded-[22px] group-hover/factory:scale-103 transition-transform duration-700"
                  priority
                />
              </div>
            </motion.div>

            {/* Dynamic Detail Card Below Image (Updates when hovering stat cards!) */}
            <AnimatePresence mode="wait">
              {activeStat ? (
                <motion.div
                  key={activeStat.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="p-4 rounded-2xl bg-blue-50/90 border border-blue-200/90 text-slate-900 flex items-center justify-between gap-3 shadow-md"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2.5 bg-[#0056b3] rounded-lg text-white font-mono text-xs font-semibold shrink-0">
                      {activeStat.value}
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-[#0056b3]">
                        {activeStat.title}
                      </div>
                      <div className="text-[11px] text-slate-600 font-medium">
                        {activeStat.detail}
                      </div>
                    </div>
                  </div>
                  <span className={`text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full shrink-0 border ${activeStat.tagColor}`}>
                    {activeStat.badgeText}
                  </span>
                </motion.div>
              ) : (
                <motion.div
                  key="default-address"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 flex items-center justify-between gap-3 shadow-2xs"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2.5 bg-[#0056b3] rounded-lg text-white font-mono text-xs font-semibold shrink-0 flex items-center gap-1">
                      <Building2 className="w-3.5 h-3.5" />
                      GIDC
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-slate-900">
                        Patel Mould Engineering Complex
                      </div>
                      <div className="text-[11px] text-slate-600 font-medium">
                        Phase-IV GIDC, Precision Tool Park, Gujarat, India
                      </div>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono font-semibold text-[#0056b3] bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-full shrink-0">
                    ISO 9001:2015
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* RIGHT: Eyebrow, Main Heading, Concise Copy, & 3 Key Stats */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-6 space-y-6"
          >
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/90 text-[#0056b3] text-xs font-bold uppercase tracking-wider">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff6b00] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#ff6b00]"></span>
              </span>
              ABOUT PATEL MOULD
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight leading-[1.12]">
              Built on Precision.<br />
              <span className="text-[#0056b3]">Driven by Experience.</span>
            </h2>

            {/* Concise Introduction Copy */}
            <div className="space-y-3.5 text-slate-700 text-sm sm:text-base font-normal leading-relaxed">
              <p>
                Founded in 1994, Patel Mould Industries has grown into a precision tooling partner specializing in high-cavitation PET preform, ISBM and extrusion blow moulds. With advanced machining, EDM and inspection capabilities, we engineer tooling for demanding high-volume production environments.
              </p>
              <p>
                Operating out of a 15,000 m² state-of-the-art facility in Gujarat, our master toolmakers and design engineers combine 30+ years of tooling craft with sub-micron 5-axis CNC machining and Zeiss 3D CMM metrology to deliver zero-defect mold performance worldwide.
              </p>
            </div>

            {/* ======================================================== */}
            {/* PART 2: 3 KEY STATS GRID WITH EQUAL HEIGHT & SINGLE LINE */}
            {/* ======================================================== */}
            <div className="pt-4 border-t border-slate-200">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-stretch">
                {COMPANY_3_STATS.map((st, idx) => (
                  <MetricBlock
                    key={st.id}
                    valueStr={st.value}
                    label={st.label}
                    sublabel={st.subtext}
                    isHovered={hoveredStatIndex === idx}
                    onMouseEnter={() => setHoveredStatIndex(idx)}
                    onMouseLeave={() => setHoveredStatIndex(null)}
                  />
                ))}
              </div>
            </div>
          </motion.div>

        </div>

        {/* ======================================================== */}
        {/* PART 3: COMPANY JOURNEY (2-COLUMN SPLIT HEADER & SUBTLE TIMELINE) */}
        {/* ======================================================== */}
        <div className="pt-10 sm:pt-14 border-t border-slate-200">

          {/* Eyebrow Badge */}
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
            OUR JOURNEY
          </motion.div>

          {/* 2-Column Split Header (Matching Home Page Product Categories style) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-12">
            {/* Left Column: Bold Headline */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-7"
            >
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.15] text-slate-900">
                Experience Built Over Decades.
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
                A concise timeline connecting three decades of engineering history to our present-day high-cavitation capabilities.
              </p>
            </motion.div>
          </div>

          {/* Clean Milestone Panels Connected by Dynamic Animated Timeline Line */}
          <TimelineSection />

        </div>

        {/* ======================================================== */}
        {/* PART 4: CORE EXPERTISE (CAPABILITY EXPLORER)             */}
        {/* ======================================================== */}
        <div className="pt-10 sm:pt-14 border-t border-slate-200">

          {/* Eyebrow Badge */}
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
            CORE EXPERTISE
          </motion.div>

          {/* 2-Column Split Header (Matching Home Page Product Categories style) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-12">
            {/* Left Column: Bold Headline */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-7"
            >
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.15]">
                <span className="text-slate-900 block">Precision Tooling.</span>
                <span className="text-[#0056b3] block">Specialized Expertise.</span>
              </h3>
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
                Specialized tooling expertise supported by advanced <strong className="text-slate-900 font-medium">5-axis CNC manufacturing</strong> and <strong className="text-[#0056b3] font-medium">sub-micron 3D CMM inspection capabilities</strong>.
              </p>

              {/* Micro Highlight Pills */}
              <div className="flex items-center flex-wrap gap-2.5 mt-3.5">
                <span className="text-[11px] font-medium text-[#0056b3] bg-blue-50 border border-blue-200/90 px-3 py-1 rounded-full flex items-center gap-1.5 shadow-2xs hover:bg-[#0056b3] hover:text-white hover:border-[#0056b3] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer group/pill">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0056b3] group-hover/pill:bg-white transition-colors"></span>
                  High-Cavitation Spec
                </span>
                <span className="text-[11px] font-medium text-slate-800 bg-slate-100 border border-slate-200 px-3 py-1 rounded-full flex items-center gap-1.5 shadow-2xs hover:bg-[#ff6b00] hover:text-white hover:border-[#ff6b00] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer group/pill">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00] group-hover/pill:bg-white transition-colors"></span>
                  Sub-Micron Accuracy
                </span>
              </div>
            </motion.div>
          </div>

          {/* 2-Column Capability Explorer Layout */}
          <CapabilityExplorer />

        </div>

      </div>
    </section>
  );
};
