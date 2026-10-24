"use client";

import React from "react";
import { motion } from "framer-motion";
import { INDUSTRIES_DATA } from "@/data/industries";
import { IndustryCard } from "./IndustryCard";

export const IndustryGridSection: React.FC = () => {
  return (
    <section className="py-13 sm:py-13 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: Centered or Clean Stacked Layout with Description Below Heading */}
        <div className="max-w-3xl mb-12 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-[#0056b3] text-xs font-bold uppercase tracking-wider mb-4">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff6b00] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#ff6b00]"></span>
              </span>
              <span>APPLICATION SECTORS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-semibold text-slate-900 tracking-tight leading-tight mb-4">
              Precision Mould Solutions for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0056b3] to-[#ff6b00]">
                Critical Sectors
              </span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              From high-speed beverage bottling preforms to leak-proof chemical drums and cleanroom pharmaceutical containers, Patel Mould Industries engineers tailored tooling systems meeting the exacting standards of Indian and global manufacturers.
            </p>
          </motion.div>
        </div>

        {/* 8 Industry Showcase Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {INDUSTRIES_DATA.map((industry, index) => (
            <IndustryCard
              key={industry.id}
              industry={industry}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
