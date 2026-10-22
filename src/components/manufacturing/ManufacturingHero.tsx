'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight, Award, ShieldCheck, Cpu } from 'lucide-react';

export const ManufacturingHero: React.FC = () => {
  return (
    <section className="relative w-full h-[280px] sm:h-[350px] md:h-[400px] pt-28 sm:pt-32 pb-8 flex items-center overflow-hidden bg-slate-950">
      {/* 1. Background Banner Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/manufacturing/manufacturing banner.png"
          alt="Patel Mould Industries Precision Manufacturing Facility Gujarat"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter brightness-95 opacity-100"
        />

        {/* 2. Navy & Gradient Shading for Text Contrast (Matching Product and About Banner) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1f3a]/95 via-[#0b1f3a]/70 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/50 z-10" />
        <div className="absolute inset-0 tech-grid-pattern opacity-20 pointer-events-none z-10" />
      </div>

      {/* 3. Left Content Block */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="max-w-2xl space-y-3">

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-tight"
          >
            Manufacturing <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-[#ff6b00]">Capabilities</span>
          </motion.h1>

          {/* Subtitle tag */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="text-xs sm:text-sm text-slate-300 font-normal max-w-xl leading-relaxed"
          >
            World-class Indian precision tooling facility equipped with 5-axis high-speed CNC, mirror EDM, and Zeiss 3D CMM metrology in Gujarat, India.
          </motion.p>

          {/* Breadcrumb Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="inline-flex items-center space-x-2 text-xs font-mono text-white/90 bg-[#0b1f3a]/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-blue-400/30 uppercase tracking-wider shadow-sm"
          >
            <Link href="/" className="hover:text-[#ff6b00] transition-colors flex items-center gap-1 font-semibold">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link href="/products" className="hover:text-blue-300 transition-colors font-medium">
              Products
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-blue-300 font-bold">
              Manufacturing
            </span>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
