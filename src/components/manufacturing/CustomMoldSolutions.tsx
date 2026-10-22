'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Settings,
  Sliders,
  Compass,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ChevronDown,
} from 'lucide-react';
import { Button } from '../Button';

interface CustomSolutionCard {
  id: string;
  number: string;
  title: string;
  description: string;
  detail: string;
  icon: React.ReactNode;
  highlights: string[];
}

const SOLUTION_CARDS: CustomSolutionCard[] = [
  {
    id: 'development',
    number: '01',
    title: 'Customized Mould Development',
    description:
      'Develop mould solutions around the required product geometry, material, mould configuration and production objectives.',
    detail:
      'Design coordination, tooling configuration and development planning based on approved customer requirements.',
    icon: <Settings className="w-4 h-4 text-[#075BBB]" />,
    highlights: [
      'Tailored cavity stack configurations & balanced cooling routing',
      'Resin-specific shrinkage compensation (PET, PP, HDPE, PCR blends)',
      'Development planning aligned with customer production schedules',
    ],
  },
  {
    id: 'requirements',
    number: '02',
    title: 'Customer-Specific Requirements',
    description:
      "Align tooling requirements with the customer's product specifications, production equipment and manufacturing workflow.",
    detail:
      'Discuss product dimensions, machine compatibility, mould interfaces and relevant production constraints.',
    icon: <Sliders className="w-4 h-4 text-[#FF792D]" />,
    highlights: [
      'Mould base clamping, tie-bar spacing, and machine stroke compatibility',
      'Custom preform neck finish & container closure interface verification',
      'Automation & take-out robot mounting alignment',
    ],
  },
  {
    id: 'support',
    number: '03',
    title: 'Engineering Support',
    description:
      'Coordinate technical requirements through mould development, validation and applicable production support.',
    detail:
      'Support can include design discussions, trial coordination, technical feedback and agreed tooling improvements.',
    icon: <Compass className="w-4 h-4 text-[#075BBB]" />,
    highlights: [
      'DFM engineering review and parametric tooling discussions',
      'Pre-dispatch press trial coordination and sample validation',
      'Technical feedback and agreed tooling optimization',
    ],
  },
];

export const CustomMoldSolutions: React.FC = () => {
  // Default selected card: Card 1 (Customized Mould Development)
  const [selectedCardId, setSelectedCardId] = useState<string>('development');
  const activeCard = SOLUTION_CARDS.find((c) => c.id === selectedCardId) || SOLUTION_CARDS[0];

  return (
    <section
      id="custom-solutions"
      className="py-13 sm:py-13 bg-[#F6F8FC] relative border-b border-[#DFE7F1] overflow-hidden text-slate-800"
    >
      {/* Background Subtle Tech Grid */}
      <div className="absolute inset-0 tech-grid-pattern opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10 sm:space-y-12">

        {/* ======================================================== */}
        {/* 1. SECTION HEADING (MATCHING SECTIONS 5, 6 & 7)          */}
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
            <span>CUSTOM MOULD SOLUTIONS</span>
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
                Custom Mould Solutions,{' '}
                <span className="text-[#075BBB]">Engineered Around Your Needs</span>
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
                From customer-specific mould designs to engineering coordination and production support, we work to align tooling solutions with your product and manufacturing requirements.
              </p>
            </motion.div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* 2. MAIN TWO-COLUMN REFINED LAYOUT (MATCHING SECTION 7)   */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* LEFT: IMAGE & DYNAMIC DETAIL PANEL */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-6 flex flex-col space-y-4"
          >
            {/* Authentic Mould Trial Image */}
            <div className="relative aspect-[16/11] w-full rounded-2xl overflow-hidden border border-[#DFE7F1] shadow-md bg-slate-900 group">
              <Image
                src="/manufacturing/mfg_custom.jpg"
                alt="Engineers working with a moulding machine during mould trial in an Indian manufacturing environment"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center filter brightness-[0.98] transition-transform duration-700 ease-out group-hover:scale-102"
              />
            </div>

            {/* Dynamic Detail Panel Below the Image (Identical smooth animation to Section 7) */}
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

                  {/* Header of Active Solution */}
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
                          CUSTOM ENGINEERING SUPPORT
                        </span>
                      </div>
                    </div>

                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-slate-100 text-[#10233F]">
                      STEP {activeCard.number}
                    </span>
                  </div>

                  {/* Short Detail Note */}
                  <div className="p-2.5 rounded-lg bg-blue-50/60 border border-blue-100/80 text-xs font-medium text-slate-800 leading-relaxed">
                    {activeCard.detail}
                  </div>

                  {/* Verified Technical Highlights Checklist */}
                  <div className="pt-2 border-t border-slate-100">
                    <div className="text-[11px] font-mono font-bold text-[#526176] uppercase tracking-wider mb-2">
                      KEY ENGINEERING ACTIVITIES:
                    </div>
                    <ul className="space-y-1.5">
                      {activeCard.highlights.map((item, pIdx) => (
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

          {/* RIGHT: 3 REFINED INTERACTIVE CONTENT CARDS (SAME ANIMATION & STYLES AS SECTION 7) */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="lg:col-span-6 space-y-4"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#10233F] tracking-tight">
                Engineering Tailored Around Your Production
              </h3>
              <p className="text-xs sm:text-sm text-[#526176] mt-1.5 leading-relaxed">
                Click any solution below to inspect engineering coordination and technical activities in the panel on the left.
              </p>
            </div>

            {/* 3 Clean, Compact Interactive Cards */}
            <div className="space-y-3 pt-1">
              {SOLUTION_CARDS.map((card, idx) => {
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
                    className={`group relative p-4 sm:p-5 rounded-xl border transition-all duration-200 text-left cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#075BBB] select-none ${isSelected
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

                    <div className="flex items-start gap-3.5 pl-1">
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

                        <p className="text-xs text-[#526176] mt-1.5 leading-relaxed">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Tooling Partnership & NDA Confidentiality Card (Balances vertical layout) */}
            <div className="pt-2">
              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#DFE7F1] hover:border-[#075BBB]/70 shadow-2xs hover:shadow-md transition-all duration-300 relative overflow-hidden group">
                {/* Top Subtle Animated Gradient Sweep on Hover */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#075BBB] via-blue-400 to-[#FF792D] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left" />

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF792D]" />
                      <span className="text-[11px] font-mono font-bold text-[#075BBB] uppercase tracking-wider">
                        CONFIDENTIALITY &amp; ENGINEERING INTEGRITY
                      </span>
                    </div>
                    <h5 className="text-xs sm:text-[14px] font-bold text-[#10233F] group-hover:text-[#075BBB] transition-colors duration-200 tracking-tight">
                      Protected Development &amp; Technical Coordination
                    </h5>
                    <p className="text-[11px] text-[#526176] leading-relaxed">
                      Custom mould developments are safeguarded under strict NDA agreements with proprietary CAD design security, pre-trial validation, and direct engineering review.
                    </p>
                  </div>

                  {/* Trust Badges */}
                  <div className="flex sm:flex-col items-start sm:items-end gap-2 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50/70 border border-blue-200/80 group-hover:bg-[#075BBB] group-hover:border-[#075BBB] transition-all duration-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#075BBB] group-hover:bg-white transition-colors" />
                      <span className="font-mono text-[11px] font-bold text-[#075BBB] group-hover:text-white uppercase tracking-wider transition-colors">
                        Strict NDA Protection
                      </span>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-50 border border-slate-200/80 text-slate-600 font-mono text-[10px] font-semibold uppercase tracking-wider">
                      <CheckCircle2 className="w-3 h-3 text-[#FF792D]" />
                      <span>Free DFM Review</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* ======================================================== */}
        {/* 3. FINAL CALL-TO-ACTION (LIGHT BG + PRESELECTED INQUIRY) */}
        {/* ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="rounded-3xl bg-white border border-[#DFE7F1] p-6 sm:p-10 shadow-xs relative overflow-hidden"
        >
          {/* Subtle Right-Side Gradient Accent */}
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-blue-50/50 to-transparent pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF792D]" />
                <span className="text-xs font-mono font-bold text-[#075BBB] uppercase tracking-wider">
                  TECHNICAL CONSULTATION &amp; FEASIBILITY
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#10233F] tracking-tight">
                Let&apos;s Discuss Your Custom Mould Requirements
              </h3>
              <p className="text-xs sm:text-sm text-[#526176] max-w-2xl leading-relaxed">
                Share your product concept, specifications or tooling requirements with our team to start a technical discussion.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col lg:items-end gap-2.5">
              <Button
                href="/contact?subject=Custom+Mould+Solutions"
                className="bg-[#075BBB] hover:bg-[#054694] text-white font-semibold px-6 py-3 rounded-xl shadow-xs hover:shadow-md text-xs sm:text-sm inline-flex items-center justify-center gap-2 transition-all duration-200"
              >
                <span>Discuss Your Mould Project</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
