'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { PenTool, Cpu, Layers, CheckCircle2, ChevronRight, X, Sparkles, ArrowRight } from 'lucide-react';

interface DesignCapability {
  id: string;
  number: string;
  title: string;
  panelTitle: string;
  panelDesc: string;
  cardDesc: string;
  points: string[];
  icon: React.ReactNode;
}

const DESIGN_CAPABILITIES: DesignCapability[] = [
  {
    id: 'cad-simulation',
    number: '01',
    title: 'CAD & Simulation Capabilities',
    panelTitle: 'CAD & Simulation',
    panelDesc: '3D mould design and engineering analysis to evaluate design feasibility and support tooling development.',
    cardDesc: 'Full 3D parametric modelling and flow simulations ensuring optimized cooling and balanced runner systems.',
    points: [
      '3D parametric solid assembly & BOM generation',
      'Mould flow thermal balance & filling analysis',
      'Cooling line layout optimization for cycle reduction',
    ],
    icon: <PenTool className="w-5 h-5 text-[#075BBB]" />,
  },
  {
    id: 'custom-mold',
    number: '02',
    title: 'Custom Mould Development',
    panelTitle: 'Custom Mould Development',
    panelDesc: 'Mould solutions tailored to product geometry, packaging requirements and application needs.',
    cardDesc: 'Tailored tooling engineered for client container volumes, custom neck finishes, and container lightweighting.',
    points: [
      'Specialized neck finishes (PCO, 38mm, Bericap, wide-mouth jars)',
      'Preform lightweighting and resin distribution control',
      'Tooling adaptation for client-specific machine specifications',
    ],
    icon: <Cpu className="w-5 h-5 text-[#FF792D]" />,
  },
  {
    id: 'engineering-dfm',
    number: '03',
    title: 'Engineering Process & DFM',
    panelTitle: 'Design for Manufacturability',
    panelDesc: 'Engineering reviews to assess mould design, part geometry and manufacturing considerations before production.',
    cardDesc: 'Structured pre-machining reviews pinpointing draft angles, parting splits, and core stability before steel cutting.',
    points: [
      'Pre-machining DFM feasibility review & client sign-off',
      'Parting split optimization and flash-free shut-off design',
      'Detailed 2D engineering toolroom shop blueprints',
    ],
    icon: <Layers className="w-5 h-5 text-[#075BBB]" />,
  },
];

const WORKFLOW_STEPS = [
  {
    step: '01',
    title: 'Design Brief',
    shortDesc: 'Requirements & resin feasibility',
    fullDesc: 'Evaluating customer 2D/3D container drawings, neck finish requirements, resin shrinkage, and cavitation targets.',
    deliverable: 'Feasibility Assessment',
  },
  {
    step: '02',
    title: '3D Mould Design',
    shortDesc: 'Parametric CAD & stack layout',
    fullDesc: 'Building parametric CAD assemblies in Siemens NX/SolidWorks with optimized cooling line routing and hot runner sizing.',
    deliverable: '3D CAD Stack Assembly',
  },
  {
    step: '03',
    title: 'DFM Review',
    shortDesc: 'Engineering & parting analysis',
    fullDesc: 'Rigorous pre-machining review of draft angles, parting shut-offs, gate vestiges, and thermal flow balance.',
    deliverable: 'Approved DFM Report',
  },
  {
    step: '04',
    title: 'Manufacturing Handoff',
    shortDesc: 'Approved CAM shop release',
    fullDesc: 'Final toolroom handoff including verified 2D engineering blueprints, steel procurement BOM, and 5-axis CNC toolpaths.',
    deliverable: 'Toolroom Shop Pack',
  },
];

interface MoldDesignDevelopmentProps {
  designDevelopment?: {
    badge?: string;
    heading?: string;
    highlightHeading?: string;
    description?: string;
    image?: string;
    overlayBadge?: string;
    overlayTitle?: string;
    overlayTag?: string;
    workflowTitle?: string;
    workflowDesc?: string;
    capabilities?: Array<{
      id: string;
      number: string;
      title: string;
      panelTitle: string;
      panelDesc: string;
      cardDesc: string;
      points: string[];
    }>;
    workflowSteps?: Array<{
      step: string;
      title: string;
      shortDesc: string;
      fullDesc: string;
      deliverable: string;
    }>;
  };
}

export const MoldDesignDevelopment: React.FC<MoldDesignDevelopmentProps> = ({ designDevelopment }) => {
  // Track hovered and pinned card state
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [pinnedId, setPinnedId] = useState<string | null>(null);
  // Track hovered/clicked workflow step
  const [hoveredWorkflow, setHoveredWorkflow] = useState<string | null>(null);

  const getIconForDesign = (id: string) => {
    switch (id) {
      case 'custom-mold':
        return <Cpu className="w-5 h-5 text-[#FF792D]" />;
      case 'engineering-dfm':
        return <Layers className="w-5 h-5 text-[#075BBB]" />;
      case 'cad-simulation':
      default:
        return <PenTool className="w-5 h-5 text-[#075BBB]" />;
    }
  };

  const capabilities = (designDevelopment?.capabilities && designDevelopment.capabilities.length > 0)
    ? designDevelopment.capabilities.map((c) => ({
        ...c,
        icon: getIconForDesign(c.id),
      }))
    : DESIGN_CAPABILITIES;

  const workflowSteps = (designDevelopment?.workflowSteps && designDevelopment.workflowSteps.length > 0)
    ? designDevelopment.workflowSteps
    : WORKFLOW_STEPS;

  const badge = designDevelopment?.badge || 'MOLD DESIGN & DEVELOPMENT';
  const heading = designDevelopment?.heading || 'Engineering Design &';
  const highlightHeading = designDevelopment?.highlightHeading || 'Simulation R&D';
  const description = designDevelopment?.description || 'Our engineering team develops mould designs around product requirements, tooling geometry and manufacturability, helping prepare designs for reliable production.';
  const image = designDevelopment?.image || '/manufacturing/mfg_cad.jpg';
  const overlayBadge = designDevelopment?.overlayBadge || 'IN-HOUSE R&D DESIGN';
  const overlayTitle = designDevelopment?.overlayTitle || 'CAD Design & Engineering';
  const overlayTag = designDevelopment?.overlayTag || 'Design-led mould development';
  const workflowTitle = designDevelopment?.workflowTitle || 'From Concept to Manufacturing';
  const workflowDesc = designDevelopment?.workflowDesc || 'A structured four-stage design methodology ensuring every tool is fully assessed before shop floor release.';

  const activeId = hoveredId || pinnedId;
  const activeCapability = capabilities.find((c) => c.id === activeId) || null;

  const handleCardClick = (id: string) => {
    if (pinnedId === id) {
      setPinnedId(null);
    } else {
      setPinnedId(id);
    }
  };

  return (
    <section id="design-development" className="py-13 sm:py-13 bg-[#F6F8FC] relative border-b border-[#DFE7F1] overflow-hidden text-slate-800">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 tech-grid-pattern opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ======================================================== */}
        {/* 1. SECTION INTRODUCTION (MATCHING BRAND TYPOGRAPHY)       */}
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
            <span>{badge}</span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end">
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="lg:col-span-7"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold text-[#10233F] tracking-tight leading-[1.15]">
                {heading} <span className="text-[#075BBB]">{highlightHeading}</span>
              </h2>
            </motion.div>

            {/* Supporting Paragraph with subtle vertical accent */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="lg:col-span-5 relative pl-5 sm:pl-6 pt-1 lg:pt-0"
            >
              <div className="absolute left-0 top-1 bottom-1 w-[3px] rounded-full bg-gradient-to-b from-[#075BBB] via-[#075BBB] to-[#FF792D]" />
              <p className="text-[#526176] text-sm sm:text-base font-normal leading-relaxed">
                {description}
              </p>
            </motion.div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* 2. BALANCED 2-COLUMN FEATURE LAYOUT (EQUAL HEIGHTS)       */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch mb-12">

          {/* Left Column: Photorealistic Indian Engineering Image filling 100% equal height */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-6 flex flex-col w-full h-full"
          >
            <div className="relative w-full h-[360px] sm:h-[440px] lg:h-full min-h-[460px] rounded-2xl overflow-hidden border border-[#DFE7F1] shadow-md bg-slate-900 group flex-1">
              {/* Stationary Image (no zoom, shaking or flashing) */}
              <Image
                src={image}
                alt="Patel Mould Indian CAD Design Studio and Mould Flow Engineering"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center filter brightness-[0.98]"
              />

              {/* Gentle subtle bottom gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/15 to-transparent pointer-events-none" />

              {/* Interactive Light Information Overlay Card */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 z-20">
                <AnimatePresence mode="wait">
                  {activeCapability ? (
                    /* Active Selected/Hovered Capability Panel */
                    <motion.div
                      key={activeCapability.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.28, ease: 'easeOut' }}
                      className="p-3.5 sm:p-4 rounded-xl bg-white/95 backdrop-blur-md border border-[#DFE7F1] shadow-xl text-slate-800 relative overflow-hidden"
                    >
                      {/* Top dual-color accent line */}
                      <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#075BBB] via-[#FF792D] to-transparent" />

                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-start gap-3">
                          <div className="p-2 rounded-lg bg-blue-50 border border-blue-200/80 text-[#075BBB] shrink-0 mt-0.5">
                            {activeCapability.icon}
                          </div>
                          <div className="space-y-0.5">
                            <h4 className="text-xs sm:text-sm font-bold text-[#10233F] tracking-tight">
                              {activeCapability.panelTitle}
                            </h4>
                            <p className="text-[11px] sm:text-xs text-[#526176] leading-relaxed max-w-md">
                              {activeCapability.panelDesc}
                            </p>
                          </div>
                        </div>

                        {/* Reset / Unpin button when pinned */}
                        {pinnedId && (
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setPinnedId(null);
                              setHoveredId(null);
                            }}
                            className="p-1 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none focus:ring-1 focus:ring-[#075BBB] shrink-0"
                            title="Return to design overview"
                            aria-label="Return to design overview"
                          >
                            <X className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                    </motion.div>
                  ) : (
                    /* Default In-House R&D Design Overlay */
                    <motion.div
                      key="default-design-overlay"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                      className="p-3 sm:p-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-[#DFE7F1] shadow-lg flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200/80 flex items-center justify-center shrink-0">
                          <PenTool className="w-4 h-4 text-[#075BBB]" />
                        </div>
                        <div>
                          <span className="text-[10px] font-mono font-bold text-[#FF792D] uppercase tracking-wider block">
                            {overlayBadge}
                          </span>
                          <span className="text-xs sm:text-sm font-semibold text-[#10233F]">
                            {overlayTitle}
                          </span>
                        </div>
                      </div>
                      <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded bg-blue-50 text-[#075BBB] border border-blue-200/90 hidden sm:inline-block">
                        {overlayTag}
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 3 Aligned Interactive Capability Cards */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="lg:col-span-6 space-y-3.5"
            onMouseLeave={() => setHoveredId(null)}
          >
            {capabilities.map((card, idx) => {
              const isCurrentActive = activeId === card.id;
              const isPinned = pinnedId === card.id;

              return (
                <button
                  key={card.id}
                  type="button"
                  onClick={() => handleCardClick(card.id)}
                  onMouseEnter={() => setHoveredId(card.id)}
                  className={`w-full p-4 sm:p-5 rounded-2xl text-left transition-all duration-200 border relative cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#075BBB] focus:ring-offset-1 ${isCurrentActive
                    ? 'bg-blue-50/70 border-[#075BBB] shadow-sm -translate-y-0.5'
                    : 'bg-white border-[#DFE7F1] shadow-2xs hover:bg-slate-50/60 hover:border-slate-300'
                    }`}
                  aria-pressed={isPinned}
                >
                  {/* Subtle active pinned dot */}
                  {isCurrentActive && (
                    <span className="absolute top-3 right-3 flex h-2 w-2">
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF792D]"></span>
                    </span>
                  )}

                  <div className="flex items-start gap-4">
                    {/* Icon Container with active transition */}
                    <div
                      className={`p-2.5 rounded-xl border shrink-0 mt-0.5 transition-colors duration-200 ${isCurrentActive
                        ? 'bg-white border-[#075BBB]/40 text-[#075BBB]'
                        : 'bg-slate-50 border-slate-200/80 text-slate-700'
                        }`}
                    >
                      {card.icon}
                    </div>

                    <div className="space-y-1.5 min-w-0 flex-grow">
                      <div className="flex items-center gap-2">
                        <span
                          className={`font-mono text-xs font-bold transition-colors ${isCurrentActive ? 'text-[#FF792D]' : 'text-slate-400'
                            }`}
                        >
                          {card.number}
                        </span>
                        <h3
                          className={`text-base font-bold tracking-tight leading-snug transition-colors ${isCurrentActive ? 'text-[#075BBB]' : 'text-[#10233F]'
                            }`}
                        >
                          {card.title}
                        </h3>
                      </div>

                      <p className="text-xs sm:text-[13px] text-[#526176] leading-relaxed">
                        {card.cardDesc}
                      </p>

                      {/* Supporting points */}
                      <ul className="flex flex-wrap gap-1.5 pt-1.5">
                        {card.points.map((pt, pIdx) => (
                          <li
                            key={pIdx}
                            className="text-[11px] font-medium text-slate-700 bg-white/90 border border-slate-200/80 px-2.5 py-0.5 rounded-full flex items-center gap-1.5 shadow-2xs"
                          >
                            <CheckCircle2 className="w-3 h-3 text-[#075BBB] shrink-0" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </button>
              );
            })}
          </motion.div>

        </div>

        {/* ======================================================== */}
        {/* 3. REFINED ENGINEERING PROCESS WORKFLOW STRIP            */}
        {/* ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="p-5 sm:p-6 rounded-2xl bg-white border border-[#DFE7F1] shadow-xs"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-100">
            <div>
              <span className="text-[10px] font-mono font-bold text-[#FF792D] uppercase tracking-wider block">
                ENGINEERING WORKFLOW
              </span>
              <h4 className="text-base sm:text-lg font-bold text-[#10233F] mt-0.5">
                {workflowTitle}
              </h4>
            </div>
            <p className="text-xs text-[#526176] max-w-md">
              {workflowDesc}
            </p>
          </div>

          {/* Interactive Workflow Steps Flow */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 pt-5">
            {workflowSteps.map((wf) => {
              const isHovered = hoveredWorkflow === wf.step;
              return (
                <div
                  key={wf.step}
                  onMouseEnter={() => setHoveredWorkflow(wf.step)}
                  onMouseLeave={() => setHoveredWorkflow(null)}
                  onClick={() => setHoveredWorkflow(hoveredWorkflow === wf.step ? null : wf.step)}
                  className={`group relative p-3.5 rounded-xl border transition-all duration-300 cursor-pointer text-left ${isHovered
                    ? 'bg-blue-50/70 border-[#075BBB] shadow-md shadow-blue-500/10'
                    : 'bg-slate-50/70 border-slate-200/80 hover:border-blue-300 hover:bg-white'
                    }`}
                >
                  {/* Step Header */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 min-w-0">
                      <span
                        className={`w-6 h-6 rounded-full font-mono text-[11px] font-bold flex items-center justify-center shrink-0 transition-all duration-300 ${isHovered
                          ? 'bg-[#075BBB] text-white shadow-xs'
                          : 'bg-white border border-blue-200 text-[#075BBB] group-hover:border-[#075BBB]'
                          }`}
                      >
                        {wf.step}
                      </span>
                      <span
                        className={`text-xs sm:text-sm font-bold truncate transition-colors duration-200 ${isHovered ? 'text-[#075BBB]' : 'text-[#10233F]'
                          }`}
                      >
                        {wf.title}
                      </span>
                    </div>

                    {/* Subtle Expand Indicator Icon */}
                    <span
                      className={`text-[10px] transition-transform duration-300 text-slate-400 ${isHovered ? 'rotate-90 text-[#075BBB]' : 'group-hover:text-slate-600'
                        }`}
                    >
                      →
                    </span>
                  </div>

                  {/* Summary (always visible) */}
                  <p className="text-[11px] text-[#526176] pl-8 mt-1 leading-snug">
                    {wf.shortDesc}
                  </p>

                  {/* Expandable Detailed Description & Deliverable */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                        animate={{ opacity: 1, height: 'auto', marginTop: 10 }}
                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                        className="overflow-hidden border-t border-blue-200/60 pt-2.5 pl-8"
                      >
                        <p className="text-[11px] text-[#10233F] leading-relaxed">
                          {wf.fullDesc}
                        </p>
                        <div className="mt-2.5 flex items-center gap-1.5">
                          <span className="text-[10px] font-semibold text-[#075BBB] uppercase tracking-wide">
                            {wf.deliverable}
                          </span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
