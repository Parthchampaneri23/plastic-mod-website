'use client';

import React from 'react';
import { FACILITIES } from '@/data/home';
import { SectionHeading } from '../SectionHeading';
import { Button } from '../Button';
import Link from 'next/link';
import { Eye, Factory, ArrowRight, ShieldCheck, ExternalLink, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export const Infrastructure: React.FC = () => {
  return (
    <section id="infrastructure" className="py-13 bg-white relative border-t border-b border-slate-200 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 tech-grid-pattern opacity-35 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Top Eyebrow Badge */}
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
          STATE-OF-THE-ART TOOLING PLANT
        </motion.div>

        {/* 2-Column Split Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-12">
          {/* Left Column: Bold Headline */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight leading-[1.12]">
              Infrastructure &<br />
              <span className="text-[#0056b3]">Modern Machinery.</span>
            </h2>
          </motion.div>

          {/* Right Column: Description with Vertical Accent Bar & Tech Badges */}
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
              Take a virtual tour through our <strong className="text-slate-900 font-medium">15,000 m² climate-controlled</strong> manufacturing center equipped with 5-axis CNCs, mirror EDMs, and <strong className="text-[#0056b3] font-medium">Zeiss 3D CMM labs</strong>.
            </p>
          </motion.div>
        </div>

        {/* 4 Feature Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FACILITIES.map((facility, idx) => (
            <motion.div
              key={facility.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8, scale: 1.01 }}
            >
              <Link
                href={facility.link || "/infrastructure"}
                className="group bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md hover:shadow-2xl hover:border-[#0056b3] transition-all duration-500 relative flex flex-col justify-between block cursor-pointer"
              >
                {/* Clean Image Container without text overlay */}
                <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-900">
                  <motion.img
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Bottom Bar: Heading on Left & Explore Button on Right */}
                <div className="p-5 px-6 bg-white group-hover:bg-blue-50/40 border-t border-slate-100 flex items-center justify-between gap-4 transition-all duration-300">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#0056b3] transition-colors line-clamp-1">
                    {facility.title}
                  </h3>
                  <span className="shrink-0 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 group-hover:bg-[#ff6b00] text-[#0056b3] group-hover:text-white text-xs font-semibold transition-all duration-300 shadow-2xs">
                    <span>Explore</span>
                    <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
