'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView, animate } from 'framer-motion';
import {
  Factory,
  Layers,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Boxes,
  Microscope,
  Sparkles,
} from 'lucide-react';
import {
  PRODUCTION_STATISTICS_DATA,
  CAPACITY_HIGHLIGHTS,
  MOULD_PRODUCTION_CAPABILITIES,
  ProductionStatistic,
  CapacityFeature,
  MouldCapabilityItem,
} from '@/data/capacity';

// Icon map for the 4 production statistics
const STAT_ICONS: Record<string, React.ReactNode> = {
  experience: <ShieldCheck className="w-4 h-4 text-[#075BBB]" />,
  'molds-delivered': <Boxes className="w-4 h-4 text-[#FF792D]" />,
  'facility-area': <Factory className="w-4 h-4 text-[#075BBB]" />,
  'cavitation-capability': <Layers className="w-4 h-4 text-[#FF792D]" />,
};

// Smooth count-up counter that fires once when entering viewport
const CountUpStat: React.FC<{ stat: ProductionStatistic }> = ({ stat }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-20px' });

  useEffect(() => {
    if (!isInView || !ref.current) return;

    if (!stat.isNumeric) {
      ref.current.textContent = `${stat.prefix || ''}${stat.metric}${stat.suffix || ''}`;
      return;
    }

    const cleanNumStr = stat.metric.replace(/,/g, '');
    const numericVal = parseFloat(cleanNumStr);
    if (isNaN(numericVal)) {
      ref.current.textContent = `${stat.prefix || ''}${stat.metric}${stat.suffix || ''}`;
      return;
    }

    const hasComma = stat.metric.includes(',');
    const node = ref.current;

    const controls = animate(0, numericVal, {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(value) {
        const valInt = Math.floor(value);
        const formattedInt = hasComma ? valInt.toLocaleString() : `${valInt}`;
        node.textContent = `${stat.prefix || ''}${formattedInt}${stat.suffix || ''}`;
      },
    });

    return () => controls.stop();
  }, [isInView, stat]);

  return (
    <span
      ref={ref}
      className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#075BBB] font-mono tracking-tight"
    >
      {stat.prefix || ''}
      {stat.metric}
      {stat.suffix || ''}
    </span>
  );
};

interface ProductionCapacityProps {
  capacity?: {
    badge?: string;
    heading?: string;
    highlightHeading?: string;
    description?: string;
    facilityBadge?: string;
    facilitySubheading?: string;
    facilityTitle?: string;
    facilityDescription?: string;
    facilityImage?: string;
    highlights?: CapacityFeature[];
    capabilitiesBadge?: string;
    capabilitiesHeading?: string;
    capabilities?: MouldCapabilityItem[];
    statsBadge?: string;
    statsHeading?: string;
    stats?: ProductionStatistic[];
  };
}

export const ProductionCapacity: React.FC<ProductionCapacityProps> = ({ capacity }) => {
  const stats = (capacity?.stats && capacity.stats.length > 0)
    ? capacity.stats
    : PRODUCTION_STATISTICS_DATA;

  const highlights = (capacity?.highlights && capacity.highlights.length > 0)
    ? capacity.highlights
    : CAPACITY_HIGHLIGHTS;

  const capabilities = (capacity?.capabilities && capacity.capabilities.length > 0)
    ? capacity.capabilities
    : MOULD_PRODUCTION_CAPABILITIES;

  const badge = capacity?.badge || 'PRODUCTION CAPACITY';
  const heading = capacity?.heading || 'Scale, Precision &';
  const highlightHeading = capacity?.highlightHeading || 'Toolroom Capacity';
  const description = capacity?.description || 'Engineered toolroom infrastructure capable of delivering high-volume multi-cavity stack tooling with synchronized machining shifts.';

  const facilityBadge = capacity?.facilityBadge || 'MANUFACTURING CAPACITY';
  const facilitySubheading = capacity?.facilitySubheading || 'INFRASTRUCTURE & RESOURCES';
  const facilityTitle = capacity?.facilityTitle || 'Integrated Facilities Designed for Production Consistency';
  const facilityDescription = capacity?.facilityDescription || 'Operating from Phase-IV GIDC Gujarat, our toolroom combines high-speed 5-axis CNC machining centers, mirror spark EDMs, precision wire-cut cells, and dedicated assembly bays under one roof. Synchronized workflows eliminate cumulative tolerance build-up across complex multi-cavity tooling.';
  const facilityImage = capacity?.facilityImage || '/About/FACILITY.png';

  const capabilitiesBadge = capacity?.capabilitiesBadge || 'MOULD PRODUCTION CAPABILITY';
  const capabilitiesHeading = capacity?.capabilitiesHeading || 'Mould Production Capabilities';

  const statsBadge = capacity?.statsBadge || 'PRODUCTION STATISTICS';
  const statsHeading = capacity?.statsHeading || 'Verified Manufacturing Metrics';

  return (
    <section
      id="capacity"
      className="py-13 sm:py-13 bg-[#F6F8FC] relative border-b border-[#DFE7F1] overflow-hidden text-slate-800"
    >
      {/* Background Subtle Tech Grid Pattern */}
      <div className="absolute inset-0 tech-grid-pattern opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12 sm:space-y-16">

        {/* ======================================================== */}
        {/* 1. SECTION INTRODUCTION                                  */}
        {/* ======================================================== */}
        <div className="mb-10 sm:mb-12">
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
            <span>{badge}</span>
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
                {heading}{' '}
                <span className="text-[#075BBB]">{highlightHeading}</span>
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
                {description}
              </p>
            </motion.div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* PART 1: MANUFACTURING CAPACITY (SPLIT IMAGE & DETAILS)   */}
        {/* ======================================================== */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50/80 border border-blue-200/90 text-[#075BBB] text-xs font-mono font-bold uppercase tracking-wider shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#075BBB]" />
              <span>{facilityBadge}</span>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-blue-200/80 via-slate-200 to-transparent" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left Column: Realistic Indian Mould Manufacturing Facility Image (Clean, No Overlay Text) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 flex flex-col justify-center"
            >
              <div className="relative aspect-[16/11] w-full rounded-2xl overflow-hidden border border-[#DFE7F1] shadow-md bg-slate-900 group">
                <Image
                  src={facilityImage}
                  alt="Patel Mould Industries Indian precision mould manufacturing plant and CNC toolroom"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center filter brightness-[0.98] transition-transform duration-700 ease-out group-hover:scale-103"
                />
              </div>
            </motion.div>

            {/* Right Column: Manufacturing Infrastructure & Capability Narrative */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="lg:col-span-6 space-y-5"
            >
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#FF792D] uppercase tracking-wider mb-1.5">
                  <Factory className="w-3.5 h-3.5 text-[#FF792D]" />
                  {facilitySubheading}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#10233F] tracking-tight">
                  {facilityTitle}
                </h3>
                <p className="text-xs sm:text-sm text-[#526176] mt-2 leading-relaxed">
                  {facilityDescription}
                </p>
              </div>

              {/* Structured Capability Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                {highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-white border border-[#DFE7F1] hover:border-[#075BBB] hover:shadow-xs transition-all duration-200 group cursor-default"
                  >
                    <div className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-md bg-blue-50 border border-blue-200 group-hover:bg-[#075BBB] group-hover:border-[#075BBB] flex items-center justify-center shrink-0 mt-0.5 transition-colors duration-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#075BBB] group-hover:text-white transition-colors duration-200" />
                      </span>
                      <div className="space-y-0.5">
                        <h4 className="text-xs sm:text-[13px] font-bold text-[#10233F] group-hover:text-[#075BBB] transition-colors leading-tight">
                          {item.title}
                        </h4>
                        <p className="text-[11px] text-[#526176] leading-snug">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>

        {/* ======================================================== */}
        {/* PART 2: MOULD PRODUCTION CAPABILITY (TOOLING SPECTRUM)   */}
        {/* ======================================================== */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50/80 border border-blue-200/90 text-[#075BBB] text-xs font-mono font-bold uppercase tracking-wider shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#075BBB]" />
                <span>{capabilitiesBadge}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#10233F] tracking-tight">
                {capabilitiesHeading}
              </h3>
            </div>
            <div className="hidden sm:block flex-1 max-w-xs h-px bg-gradient-to-r from-blue-200/80 to-transparent self-center ml-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {capabilities.map((cap, cIdx) => (
              <motion.div
                key={cap.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: cIdx * 0.12 }}
                className="group rounded-2xl bg-white border border-[#DFE7F1] hover:border-[#075BBB] shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
              >
                <Link
                  href={cap.link}
                  className="flex flex-col flex-grow focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#075BBB] rounded-2xl"
                >
                  {/* Clean Product Image with Subtle Hover Zoom */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900 border-b border-[#DFE7F1]">
                    <Image
                      src={cap.image}
                      alt={cap.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-center filter brightness-[0.98] transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-md bg-[#10233F]/85 backdrop-blur-sm text-white font-mono text-[10px] font-bold uppercase tracking-wider border border-white/10">
                        {cap.badge}
                      </span>
                    </div>
                  </div>

                  {/* Compact Content Body */}
                  <div className="p-5 flex flex-col flex-grow justify-between space-y-4">
                    <div className="space-y-1">
                      <h4 className="text-base sm:text-[17px] font-bold text-[#10233F] group-hover:text-[#075BBB] transition-colors tracking-tight leading-snug">
                        {cap.title}
                      </h4>
                      <p className="text-xs text-[#526176] line-clamp-2 leading-relaxed pt-0.5">
                        {cap.description}
                      </p>
                    </div>

                    {/* Attractive View / Explore Specifications Button */}
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs font-bold text-[#075BBB] group-hover:text-[#054694] transition-colors flex items-center gap-1.5">
                        <span>Explore Specifications</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                      </span>

                      <span className="w-7 h-7 rounded-full bg-blue-50 border border-blue-200 text-[#075BBB] flex items-center justify-center shrink-0 group-hover:bg-[#075BBB] group-hover:text-white transition-all duration-200 shadow-2xs">
                        <ChevronRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ======================================================== */}
        {/* PART 3: PRODUCTION STATISTICS (4 VERIFIED METRICS)       */}
        {/* ======================================================== */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50/80 border border-blue-200/90 text-[#075BBB] text-xs font-mono font-bold uppercase tracking-wider shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#075BBB]" />
                <span>{statsBadge}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#10233F] tracking-tight">
                {statsHeading}
              </h3>
            </div>
            <div className="hidden sm:block flex-1 max-w-xs h-px bg-gradient-to-r from-blue-200/80 to-transparent self-center ml-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="group relative p-4 sm:p-5 rounded-2xl bg-white border border-[#DFE7F1] hover:border-[#075BBB] shadow-2xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-default"
              >
                {/* Top Subtle Animated Gradient Line on Hover */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#075BBB] via-blue-400 to-[#FF792D] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left" />

                {/* Top Icon & Sublabel */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="w-8 h-8 rounded-lg bg-blue-50/80 border border-blue-200/70 flex items-center justify-center shrink-0 transition-all duration-200 group-hover:border-[#075BBB] group-hover:bg-blue-100/60 shadow-2xs">
                    {STAT_ICONS[stat.id]}
                  </span>
                  <span className="text-[10px] font-mono font-bold text-[#526176] group-hover:text-[#075BBB] transition-colors duration-200 tracking-wider uppercase text-right leading-tight">
                    {stat.sublabel}
                  </span>
                </div>

                {/* Animated Stat Value & Label */}
                <div className="space-y-1">
                  <div className="leading-none group-hover:scale-[1.02] transition-transform duration-300 origin-left">
                    <CountUpStat stat={stat} />
                  </div>
                  <div className="text-xs sm:text-[13px] font-bold text-[#10233F] group-hover:text-[#075BBB] transition-colors duration-200 tracking-tight pt-1">
                    {stat.label}
                  </div>
                </div>

                {/* Bottom Full Animated Line Indicator */}
                <div className="mt-4 pt-3 border-t border-slate-100/90 flex items-center justify-between gap-3">
                  <div className="relative flex-1 h-1 bg-slate-100 rounded-full overflow-hidden">
                    <div className="absolute top-0 left-0 bottom-0 w-8 group-hover:w-full bg-gradient-to-r from-[#075BBB] to-blue-400 rounded-full transition-all duration-500 ease-out" />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-slate-400 group-hover:text-[#075BBB] transition-colors duration-200 shrink-0">
                    0{idx + 1}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
