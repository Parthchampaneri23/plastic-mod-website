'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShieldCheck,
  Microscope,
  CheckCircle2,
  Gauge,
  Cpu,
  Ruler,
  FileCheck2,
  SlidersHorizontal,
  Layers,
  ChevronRight,
} from 'lucide-react';

interface QualityCard {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  detailTitle: string;
  detailItems: string[];
}

const QUALITY_CARDS: QualityCard[] = [
  {
    id: 'equipment',
    number: '01',
    title: 'Inspection Equipment',
    description:
      'Use suitable precision measuring and inspection instruments to verify component dimensions and manufacturing requirements.',
    icon: <Ruler className="w-4 h-4 text-[#075BBB]" />,
    detailTitle: 'Metrology & Instrument Capabilities',
    detailItems: [
      'Coordinate Measuring Machine (CMM) multi-axis digital probing',
      'Optical thread profile projectors and non-contact surface profilometers',
      'Digital micrometer sets, bore gauges, and calibrated dial indicators',
    ],
  },
  {
    id: 'in-process',
    number: '02',
    title: 'In-Process Quality Control',
    description:
      'Perform relevant checks during machining and mould manufacturing to identify deviations before the next production stage.',
    icon: <Cpu className="w-4 h-4 text-[#FF792D]" />,
    detailTitle: 'Stage-Gate In-Process Verification',
    detailItems: [
      'On-machine toolpath and probe measurement after roughing and semi-finishing',
      'Electrode wear calibration and spark gap verification in EDM cells',
      'Cavity insert concentricity and stack plate flatness checkpoints',
    ],
  },
  {
    id: 'precision',
    number: '03',
    title: 'Precision Measurement',
    description:
      'Verify critical dimensions and component geometry against approved drawings and specified tolerances.',
    icon: <SlidersHorizontal className="w-4 h-4 text-[#075BBB]" />,
    detailTitle: 'Geometric & Dimensional Tolerancing',
    detailItems: [
      'Critical cavity, core shank, and neck ring dimensional inspection',
      'Interchangeability checks across multi-cavity stack components',
      'Cooling channel wall thickness and manifold alignment verification',
    ],
  },
  {
    id: 'testing-final',
    number: '04',
    title: 'Testing & Final Inspection',
    description:
      'Inspect completed mould components and carry out applicable functional or trial checks before delivery.',
    icon: <ShieldCheck className="w-4 h-4 text-[#FF792D]" />,
    detailTitle: 'Pre-Dispatch Mould Validation',
    detailItems: [
      'Hydrostatic pressure and leak testing of cooling water circuits',
      'Ejection stroke calibration and mechanical alignment dry-cycle checks',
      'Comprehensive digital inspection report and sample sign-off records',
    ],
  },
];

const PRECISION_STRIP_ITEMS = [
  {
    icon: <Ruler className="w-4 h-4 text-[#075BBB]" />,
    label: 'Dimensional Inspection',
    shortDesc: 'Multi-axis measurement of core, cavity, and split neck geometries.',
    fullDesc:
      'Rigorous coordinate checking of core shanks, cavity pockets, and neck finish concentricity against CAD drawings with sub-micron precision.',
  },
  {
    icon: <CheckCircle2 className="w-4 h-4 text-[#FF792D]" />,
    label: 'Manufacturing Checkpoints',
    shortDesc: 'Stage-gate validation across CNC, spark erosion, and assembly bays.',
    fullDesc:
      'In-process probe checkpoints after roughing, EDM spark erosion, and stack plate fitting to prevent cumulative tolerance errors.',
  },
  {
    icon: <FileCheck2 className="w-4 h-4 text-[#075BBB]" />,
    label: 'Final Quality Verification',
    shortDesc: 'Hydrostatic pressure leak tests and complete digital report sign-off.',
    fullDesc:
      '10-12 bar pressure leak testing of conformal cooling water circuits, dry-cycle ejection calibration, and certified inspection reports.',
  },
];

export const QualityInspection: React.FC = () => {
  // Default selected card: Card 1 (Inspection Equipment)
  const [selectedCardId, setSelectedCardId] = useState<string>('equipment');
  const activeCard = QUALITY_CARDS.find((c) => c.id === selectedCardId) || QUALITY_CARDS[0];

  return (
    <section
      id="quality"
      className="py-13 sm:py-13 bg-white relative border-b border-[#DFE7F1] overflow-hidden text-slate-800"
    >
      {/* Background Subtle Tech Grid */}
      <div className="absolute inset-0 tech-grid-pattern opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10 sm:space-y-12">

        {/* ======================================================== */}
        {/* 1. SECTION HEADING (MATCHING SECTIONS 5 & 6)             */}
        {/* ======================================================== */}
        <div>
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
            <span>QUALITY &amp; INSPECTION</span>
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
                Precision You Can Measure.{' '}
                <span className="text-[#075BBB]">Quality You Can Trust.</span>
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
                Quality-focused inspection and dimensional verification help ensure that mould components meet the specified design and manufacturing requirements.
              </p>
            </motion.div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* 2. MAIN TWO-COLUMN REFINED LAYOUT                        */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* LEFT COLUMN: QUALITY INSPECTION IMAGE & DYNAMIC STEP DETAIL PANEL */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-6 flex flex-col space-y-4"
          >
            {/* Metrology Inspection Image Frame */}
            <div className="relative aspect-[16/11] w-full rounded-2xl overflow-hidden border border-[#DFE7F1] shadow-md bg-slate-900 group">
              <Image
                src="/manufacturing/mfg_quality_clean.jpg"
                alt="Precision quality inspection environment with coordinate measuring equipment and machined mould component"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center filter brightness-[0.98] transition-transform duration-700 ease-out group-hover:scale-102"
              />
            </div>

            {/* Dynamic Step Detail Panel Below the Image */}
            <AnimatePresence mode="wait">
              {activeCard && (
                <motion.div
                  key={activeCard.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="p-5 rounded-2xl bg-white border border-[#DFE7F1] shadow-2xs space-y-3.5 relative overflow-hidden"
                >
                  {/* Subtle top indicator line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#075BBB] via-[#075BBB] to-[#FF792D]" />

                  {/* Header of Active Step */}
                  <div className="flex items-center justify-between gap-3 pt-1">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-blue-50/80 border border-blue-200/80 flex items-center justify-center shrink-0 text-[#075BBB]">
                        {activeCard.icon}
                      </span>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FF792D] shrink-0" />
                          <h4 className="text-sm sm:text-base font-bold text-[#10233F] tracking-tight leading-snug">
                            {activeCard.title}
                          </h4>
                        </div>
                        <span className="text-[11px] font-mono font-bold text-[#075BBB] uppercase tracking-wider block mt-0.5">
                          {activeCard.detailTitle}
                        </span>
                      </div>
                    </div>

                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-slate-100 text-[#10233F]">
                      STAGE {activeCard.number}
                    </span>
                  </div>

                  {/* Main Description */}
                  <p className="text-xs sm:text-[13px] text-[#526176] leading-relaxed">
                    {activeCard.description}
                  </p>

                  {/* Verified Capabilities Checklist */}
                  <div className="pt-2 border-t border-slate-100">
                    <div className="text-[11px] font-mono font-bold text-[#526176] uppercase tracking-wider mb-2">
                      KEY VERIFICATION ACTIVITIES:
                    </div>
                    <ul className="space-y-1.5">
                      {activeCard.detailItems.map((item, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#075BBB] shrink-0 mt-1.5" />
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* RIGHT COLUMN: QUALITY-CONTROL PROCESS INTERACTIVE CARDS */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="lg:col-span-6 space-y-4"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#10233F] tracking-tight">
                A Structured Approach to Quality Control
              </h3>
              <p className="text-xs sm:text-sm text-[#526176] mt-1.5 leading-relaxed">
                Click any stage below to inspect verified measurement activities and in-process checkpoints in the panel on the left.
              </p>
            </div>

            {/* 4 Clean, Compact Interactive Cards */}
            <div className="space-y-3 pt-1">
              {QUALITY_CARDS.map((card, idx) => {
                const isSelected = selectedCardId === card.id;

                return (
                  <motion.div
                    key={card.id}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: 0.12 + idx * 0.07 }}
                    onClick={() => setSelectedCardId(card.id)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setSelectedCardId(card.id);
                      }
                    }}
                    role="button"
                    tabIndex={0}
                    aria-pressed={isSelected}
                    aria-label={`Select ${card.title}`}
                    className={`group relative p-4 rounded-xl border transition-all duration-200 text-left cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#075BBB] select-none ${isSelected
                        ? 'bg-blue-50/50 border-[#075BBB] shadow-xs'
                        : 'bg-white border-[#DFE7F1] hover:border-[#075BBB]/60 hover:bg-slate-50/60 shadow-2xs'
                      }`}
                  >
                    {/* Blue Vertical Indicator for Selected Card */}
                    <div
                      className={`absolute left-0 top-2.5 bottom-2.5 w-1 rounded-r-full transition-all duration-200 ${isSelected
                          ? 'bg-[#075BBB] opacity-100'
                          : 'bg-transparent opacity-0 group-hover:bg-[#075BBB]/40 group-hover:opacity-100'
                        }`}
                    />

                    <div className="flex items-start gap-3 pl-1">
                      {/* Icon */}
                      <span
                        className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 border transition-all duration-200 ${isSelected
                            ? 'bg-white border-[#075BBB]/40 text-[#075BBB] shadow-2xs'
                            : 'bg-slate-50 border-slate-200/80 text-slate-600 group-hover:border-[#075BBB]/30 group-hover:text-[#075BBB]'
                          }`}
                      >
                        {card.icon}
                      </span>

                      {/* Header, Number & Short Description */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <h4
                            className={`text-xs sm:text-sm font-bold tracking-tight leading-snug transition-colors duration-200 ${isSelected
                                ? 'text-[#075BBB]'
                                : 'text-[#10233F] group-hover:text-[#075BBB]'
                              }`}
                          >
                            {card.title}
                          </h4>
                          <span
                            className={`text-[11px] font-mono font-bold transition-colors duration-200 ${isSelected
                                ? 'text-[#FF792D]'
                                : 'text-slate-400 group-hover:text-[#075BBB]'
                              }`}
                          >
                            {card.number}
                          </span>
                        </div>

                        <p className="text-xs text-[#526176] mt-1 leading-relaxed">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Quality Standards & Metrology Verification Strip */}
            <div className="pt-2">
              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#DFE7F1] hover:border-[#075BBB]/70 shadow-2xs hover:shadow-md transition-all duration-300 relative overflow-hidden group">
                {/* Subtle top animated gradient shimmer on hover */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#075BBB] via-blue-400 to-[#FF792D] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left" />

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF792D]" />
                      <span className="text-[11px] font-mono font-bold text-[#075BBB] uppercase tracking-wider">
                        QUALITY ASSURANCE GUARANTEE
                      </span>
                    </div>
                    <h5 className="text-xs sm:text-[14px] font-bold text-[#10233F] group-hover:text-[#075BBB] transition-colors duration-200 tracking-tight">
                      Zeiss 3D CMM &amp; Sub-Micron Inspection Verification
                    </h5>
                    <p className="text-[11px] text-[#526176] leading-relaxed">
                      Every mould stack undergoes full coordinate verification (±0.002 mm tolerance), 10–12 bar hydrostatic cooling circuit testing, and certified inspection reports.
                    </p>
                  </div>

                  {/* Clean Technical Badges with Micro-interactions */}
                  <div className="flex sm:flex-col items-start sm:items-end gap-2 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50/70 border border-blue-200/80 group-hover:bg-[#075BBB] group-hover:border-[#075BBB] transition-all duration-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#075BBB] group-hover:bg-white transition-colors" />
                      <span className="font-mono text-[11px] font-bold text-[#075BBB] group-hover:text-white uppercase tracking-wider transition-colors">
                        ±0.002 mm Precision
                      </span>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-50 border border-slate-200/80 text-slate-600 font-mono text-[10px] font-semibold uppercase tracking-wider">
                      <CheckCircle2 className="w-3 h-3 text-[#FF792D]" />
                      <span>ISO 9001 Process</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* ======================================================== */}
        {/* 3. PRECISION MEASUREMENT & VERIFICATION STRIP            */}
        {/* ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="rounded-2xl bg-white border border-[#DFE7F1] p-5 sm:p-6 shadow-xs relative overflow-hidden"
        >
          {/* Animated Decorative Measurement Line revealing left-to-right */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-slate-100 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="h-full bg-gradient-to-r from-[#075BBB] via-blue-400 to-[#FF792D]"
            />
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#075BBB]" />
              <h4 className="text-xs sm:text-sm font-bold text-[#10233F] tracking-tight">
                Precision Measurement &amp; Verification
              </h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
              {PRECISION_STRIP_ITEMS.map((item, sIdx) => (
                <div
                  key={sIdx}
                  className="group relative p-4 sm:p-5 rounded-xl bg-white border border-[#DFE7F1] hover:border-[#075BBB] shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-default"
                >
                  {/* Top Animated Gradient Line on Hover (matching image 1) */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#075BBB] via-blue-400 to-[#FF792D] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left" />

                  <div className="space-y-3">
                    {/* Header with Icon & Counter */}
                    <div className="flex items-center justify-between gap-2">
                      <span className="w-8 h-8 rounded-lg bg-blue-50/80 border border-blue-200/70 flex items-center justify-center shrink-0 group-hover:border-[#075BBB] group-hover:bg-blue-100/60 transition-all duration-200 shadow-2xs">
                        {item.icon}
                      </span>
                      <span className="text-[10px] font-mono font-bold text-slate-400 group-hover:text-[#075BBB] transition-colors duration-200">
                        0{sIdx + 1}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <h5 className="text-xs sm:text-[14px] font-bold text-[#10233F] group-hover:text-[#075BBB] transition-colors leading-snug">
                        {item.label}
                      </h5>
                      <p className="text-xs text-[#526176] group-hover:text-slate-700 leading-relaxed transition-colors duration-200">
                        {item.fullDesc}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Full Animated Line Indicator */}
                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <div className="relative w-full h-1 bg-slate-100 rounded-full overflow-hidden">
                      <div className="absolute top-0 left-0 bottom-0 w-8 group-hover:w-full bg-gradient-to-r from-[#075BBB] to-blue-400 rounded-full transition-all duration-500 ease-out" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
