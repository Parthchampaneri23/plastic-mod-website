'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '../Button';

interface ProcessTab {
  id: string;
  tabLabel: string;
  badge: string;
  heading: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
  features: string[];
  specs: {
    label: string;
    value: string;
  }[];
}

const PROCESS_TABS: ProcessTab[] = [
  {
    id: 'cnc',
    tabLabel: 'CNC Precision Machining',
    badge: 'MULTI-AXIS MILLING',
    heading: '5-Axis CNC Precision Machining',
    subtitle: 'Controlled machining for complex mould components',
    description:
      'Precision CNC machining supports the production of complex mould geometries, cavity details and carefully finished tooling components.',
    image: '/manufacturing/cnc-precision-machining.webp',
    imageAlt: 'CNC machining centre milling a steel mould block in Gujarat toolroom',
    features: [
      'Multi-axis machining for complex geometries, where supported',
      'Appropriate cutting strategies for mould components',
      'Dimensional checks throughout the manufacturing process',
      'Surface finishing suited to component requirements',
    ],
    specs: [
      { label: 'Machining Process', value: 'High-Accuracy CNC Milling' },
      { label: 'Quality Focus', value: 'Complex Mould Cavities & Cores' },
      { label: 'Inspection Method', value: 'In-Process Dimensional Checks' },
    ],
  },
  {
    id: 'edm',
    tabLabel: 'EDM & Wire EDM',
    badge: 'ELECTRICAL DISCHARGE',
    heading: 'EDM & Wire EDM Machining',
    subtitle: 'Intricate profiles and detailed mould features',
    description:
      'Electrical discharge machining supports detailed features, narrow profiles and geometries that may be difficult to produce using conventional cutting methods.',
    image: '/manufacturing/edm-wire-machining.webp',
    imageAlt: 'Wire EDM machine operating on a precision steel mould insert in Gujarat',
    features: [
      'Detailed cavity and profile machining',
      'Wire-cut machining for suitable intricate geometries',
      'Careful control of workpiece positioning',
      'Inspection of machined features against design requirements',
    ],
    specs: [
      { label: 'Machining Process', value: 'Wire EDM & Die Sinking' },
      { label: 'Quality Focus', value: 'Intricate Profiles & Deep Ribs' },
      { label: 'Inspection Method', value: 'Optical & Contact Verification' },
    ],
  },
  {
    id: 'grinding',
    tabLabel: 'Precision Surface Grinding',
    badge: 'SURFACE & DATUM FINISHING',
    heading: 'Precision Surface Grinding',
    subtitle: 'Flatness, finish and dimensional control',
    description:
      'Precision grinding helps achieve the required surface finish and dimensional characteristics on suitable mould components and tooling surfaces.',
    image: '/manufacturing/cnc-precision-machining.webp', // Structured so dedicated grinding image can be dropped in later
    imageAlt: 'Precision surface grinding process for mould components and plates',
    features: [
      'Controlled finishing of appropriate steel surfaces',
      'Preparation of mating and reference surfaces',
      'Dimensional inspection after machining',
      'Surface quality checks based on component requirements',
    ],
    specs: [
      { label: 'Machining Process', value: 'Precision Surface Grinding' },
      { label: 'Quality Focus', value: 'Mating Plates & Datum Planes' },
      { label: 'Inspection Method', value: 'Flatness & Parallelism Checks' },
    ],
  },
];

export const PrecisionMachining: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState<string>('cnc');
  const current = PROCESS_TABS.find((p) => p.id === activeTabId) || PROCESS_TABS[0];

  return (
    <section
      id="machining"
      className="py-13 sm:py-13 bg-white relative border-b border-[#DFE7F1] overflow-hidden text-slate-800"
    >
      {/* Background Subtle Tech Grid */}
      <div className="absolute inset-0 tech-grid-pattern opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ======================================================== */}
        {/* 1. SECTION HEADING & INTRODUCTION (Scroll Entrance)       */}
        {/* ======================================================== */}
        <div className="mb-10 sm:mb-12">
          {/* Eyebrow Label */}
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
            <span>PRECISION MACHINING</span>
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
                CNC & EDM{' '}
                <span className="text-[#075BBB]">High-Accuracy Manufacturing</span>
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
                Precision machining processes for mould components, intricate geometries and demanding manufacturing requirements.
              </p>
            </motion.div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* 2. THREE PROCESS SELECTOR TABS (CLEAN WITHOUT TAB 01/02/03) */}
        {/* ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="mb-8 sm:mb-10"
        >
          {/* Scrollable / wrap container without overflow */}
          <div className="flex flex-wrap sm:flex-nowrap gap-2 sm:gap-2.5 p-1.5 rounded-xl bg-[#F6F8FC] border border-[#DFE7F1] max-w-full overflow-x-auto">
            {PROCESS_TABS.map((tab) => {
              const isActive = activeTabId === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onMouseEnter={() => setActiveTabId(tab.id)}
                  onClick={() => setActiveTabId(tab.id)}
                  onFocus={() => setActiveTabId(tab.id)}
                  aria-selected={isActive}
                  role="tab"
                  className={`flex-1 min-w-[180px] sm:min-w-0 px-4 py-2.5 rounded-lg text-left transition-all duration-300 relative cursor-pointer select-none focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#075BBB] ${isActive
                    ? 'bg-[#075BBB] text-white shadow-sm shadow-blue-900/10'
                    : 'bg-transparent text-[#10233F] hover:bg-white/80 hover:text-[#075BBB]'
                    }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`text-xs sm:text-[13px] font-semibold tracking-tight transition-colors ${isActive ? 'text-white' : 'text-[#10233F]'
                        }`}
                    >
                      {tab.tabLabel}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* ======================================================== */}
        {/* 3. PROCESS SHOWCASE: CLEAN IMAGE & TECHNICAL CONTENT     */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">

          {/* Left Column: Clean Machining Photo with Smooth Direct Cross-Fade (No Blank Flash) */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="relative rounded-2xl overflow-hidden border border-[#DFE7F1] shadow-md bg-slate-100 flex-1 min-h-[360px] sm:min-h-[420px]">
              {PROCESS_TABS.map((tab) => {
                const isSelected = activeTabId === tab.id;
                return (
                  <div
                    key={tab.id}
                    className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${isSelected ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                      }`}
                  >
                    <Image
                      src={tab.image}
                      alt={tab.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority={tab.id === 'cnc'}
                      className="object-cover object-center filter brightness-[0.98]"
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Process Details, Features & Inquiry CTA (Instant Smooth Content Swap) */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="space-y-4 sm:space-y-4.5">
              {/* Process Header */}
              <div>
                <span className="text-[11px] font-mono font-bold text-[#FF792D] uppercase tracking-wider block transition-colors duration-200">
                  {current.badge}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#10233F] mt-1 tracking-tight transition-colors duration-200">
                  {current.heading}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-[#075BBB] mt-0.5 transition-colors duration-200">
                  {current.subtitle}
                </p>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#526176] leading-relaxed min-h-[40px] transition-colors duration-200">
                {current.description}
              </p>

              {/* Four Feature Rows */}
              <div className="space-y-2 pt-0.5">
                {current.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-2.5 p-2.5 rounded-xl bg-[#F6F8FC] border border-[#DFE7F1] hover:border-[#075BBB]/30 transition-colors duration-200"
                  >
                    <span className="w-4 h-4 rounded bg-blue-50 border border-blue-200 text-[#075BBB] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-[#075BBB]" strokeWidth={2.5} />
                    </span>
                    <span className="text-xs sm:text-[13px] text-[#10233F] font-normal leading-snug">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
