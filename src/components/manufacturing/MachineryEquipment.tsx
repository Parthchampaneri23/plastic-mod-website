'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { MACHINERY_LIST, MachineryItem } from '@/data/manufacturing';
import { ArrowRight, ChevronRight, Gauge, Wrench, Sparkles, SlidersHorizontal } from 'lucide-react';
import { Button } from '../Button';

const CATEGORIES = ['All', 'CNC', 'EDM', 'CMM', 'Grinding', 'Trial'] as const;

export const MachineryEquipment: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredMachines =
    selectedCategory === 'All'
      ? MACHINERY_LIST
      : MACHINERY_LIST.filter((m) => m.category === selectedCategory);

  return (
    <section
      id="machinery"
      className="py-13 sm:py-13 bg-white relative border-b border-[#DFE7F1] overflow-hidden text-slate-800"
    >
      {/* Background Subtle Tech Grid */}
      <div className="absolute inset-0 tech-grid-pattern opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ======================================================== */}
        {/* 1. SECTION HEADING & INTRODUCTION                        */}
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
            <span>MACHINERY &amp; EQUIPMENT</span>
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
                Our Machinery.{' '}
                <span className="text-[#075BBB]">Your Manufacturing Confidence.</span>
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
                Explore the machining, inspection and mould-trial equipment supporting our tooling and manufacturing capabilities.
              </p>
            </motion.div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* 2. FUNCTIONAL CATEGORY FILTERS                           */}
        {/* ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="mb-8 sm:mb-10"
        >
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 p-1.5 rounded-xl bg-[#F6F8FC] border border-[#DFE7F1] w-fit max-w-full">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  aria-pressed={isActive}
                  className={`px-3.5 sm:px-4 py-2 rounded-lg text-xs sm:text-[13px] font-semibold transition-all duration-200 cursor-pointer select-none focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#075BBB] ${isActive
                    ? 'bg-[#075BBB] text-white shadow-sm shadow-blue-900/15'
                    : 'bg-transparent text-[#10233F] hover:bg-white hover:text-[#075BBB]'
                    }`}
                >
                  {cat === 'All' ? 'All Machinery' : cat}
                  {cat === 'All' && (
                    <span
                      className={`ml-1.5 text-[10px] font-mono px-1.5 py-0.2 rounded-full ${isActive ? 'bg-white/20 text-white' : 'bg-slate-200/80 text-[#526176]'
                        }`}
                    >
                      {MACHINERY_LIST.length}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* ======================================================== */}
        {/* 3. RESPONSIVE MACHINERY CARDS GRID (3-COLUMNS)           */}
        {/* ======================================================== */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 items-stretch"
        >
          <AnimatePresence mode="popLayout">
            {filteredMachines.map((machine, index) => (
              <motion.div
                key={machine.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25, delay: index * 0.04 }}
                className="rounded-2xl bg-white border border-[#DFE7F1] overflow-hidden shadow-xs hover:shadow-xl hover:border-[#075BBB] transition-all duration-300 flex flex-col group relative"
              >
                <Link
                  href={`/manufacturing/machinery/${machine.slug}`}
                  className="flex flex-col flex-grow focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#075BBB] rounded-2xl"
                >
                  {/* Clean Machine Image (No Overlaid Text, Smooth Hover Zoom) */}
                  <div className="relative aspect-[16/9] w-full bg-slate-900 overflow-hidden">
                    <Image
                      src={machine.image}
                      alt={machine.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center filter brightness-[0.98] group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  </div>

                  {/* Compact Card Content Body */}
                  <div className="p-5 flex flex-col flex-grow justify-between space-y-4">
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded-md bg-blue-50 text-[#075BBB] font-mono text-[10px] font-bold uppercase tracking-wider">
                          {machine.category} CELL
                        </span>
                        <span className="text-[11px] font-mono text-[#526176]">
                          {machine.badge}
                        </span>
                      </div>

                      <h3 className="text-base sm:text-[17px] font-bold text-[#10233F] group-hover:text-[#075BBB] transition-colors leading-snug">
                        {machine.name}
                      </h3>

                      <p className="text-xs text-[#526176] line-clamp-2 leading-relaxed pt-0.5">
                        {machine.shortDescription || machine.application}
                      </p>
                    </div>

                    {/* Attractive View Details Button */}
                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs font-bold text-[#075BBB] group-hover:text-[#054694] transition-colors flex items-center gap-1.5">
                        <span>View Machine Details</span>
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
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
