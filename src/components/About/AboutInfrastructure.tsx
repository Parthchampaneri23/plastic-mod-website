'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Cpu, Zap, Wrench, ShieldCheck, Building2, Sparkles } from 'lucide-react';

const INFRA_PILLARS = [
  {
    title: 'MACHINING',
    subtitle: 'High-speed 5-axis CNC milling centers delivering sub-micron mold cavity precision down to ±0.005mm.',
    specs: ['24,000 RPM Ultra-Spindles', 'Sub-Micron Cavity Milling'],
    icon: <Cpu className="w-5 h-5 text-[#0056b3]" />,
  },
  {
    title: 'EDM & WIRE CUT',
    subtitle: 'Mirror spark erosion EDM and CNC wire cut EDM for deep cavity ribs and intricate mold features.',
    specs: ['Mirror Surface Finish', 'Micro-Rib Spark Erosion'],
    icon: <Zap className="w-5 h-5 text-[#ff6b00]" />,
  },
  {
    title: 'ASSEMBLY',
    subtitle: 'Dedicated clean toolroom fitting shop for high-cavitation PET preform and ISBM mold assembly.',
    specs: ['Zero-Flash Alignment', 'Dedicated Fitters & Riggers'],
    icon: <Wrench className="w-5 h-5 text-[#0056b3]" />,
  },
  {
    title: 'INSPECTION',
    subtitle: 'Zeiss 3D Coordinate Measuring Machines (CMM) and optical non-contact profile projectors.',
    specs: ['Zeiss 3D CMM Metrology', '100% Quality Validation'],
    icon: <ShieldCheck className="w-5 h-5 text-[#ff6b00]" />,
  },
];

export const AboutInfrastructure: React.FC = () => {
  return (
    <section className="py-13 sm:py-13 bg-white relative overflow-hidden text-slate-900 border-b border-slate-200">
      {/* Subtle Background Tech Grid */}
      <div className="absolute inset-0 tech-grid-pattern opacity-35 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ======================================================== */}
        {/* SECTION HEADER                                           */}
        {/* ======================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/90 text-[#0056b3] text-xs font-mono font-bold uppercase tracking-wider mb-4 shadow-2xs"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff6b00] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#ff6b00]"></span>
            </span>
            BUILT FOR PRECISION MANUFACTURING
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight leading-[1.12]"
          >
            State-of-the-Art <br />
            <span className="text-[#0056b3]">Infrastructure & Toolroom Plant</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-slate-600 text-sm sm:text-base font-normal leading-relaxed max-w-2xl mx-auto"
          >
            A modern 15,000 m² manufacturing environment equipped for high-precision machining, mold assembly, 3D CMM inspection, and trial testing.
          </motion.p>
        </div>

        {/* ======================================================== */}
        {/* ASYMMETRICAL INDUSTRIAL GALLERY (60 / 40 STACKED GRID)   */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mb-16 items-stretch">

          {/* LEFT: LARGE FACILITY IMAGE (~60%) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 relative rounded-[24px] overflow-hidden border border-slate-200 shadow-xl bg-slate-900 group min-h-[340px] sm:min-h-[440px] flex flex-col justify-end"
          >
            <Image
              src="/About/FACILITY.png"
              alt="Patel Mould Industries Main Manufacturing Plant"
              fill
              sizes="(max-width: 1024px) 100vw, 700px"
              className="object-cover object-center group-hover:scale-103 transition-transform duration-700 filter brightness-95"
              priority
            />

            {/* Subtle Bottom Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />

            {/* Glassmorphism Badge Overlay */}
            <div className="relative z-10 p-5 sm:p-6 m-4 sm:m-6 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 text-slate-900 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xl">
              <div>
                <div className="flex items-center space-x-2 text-xs font-mono font-bold text-[#ff6b00] uppercase tracking-wider mb-1">
                  <Building2 className="w-4 h-4" />
                  MAIN TOOLROOM COMPLEX
                </div>
                <div className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                  15,000 m² Integrated Manufacturing Hub
                </div>
                <div className="text-xs text-slate-600 font-medium mt-0.5">
                  Phase-IV GIDC, Precision Mould Park, Gujarat, India
                </div>
              </div>

              <span className="text-xs font-mono font-semibold px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0056b3] self-start sm:self-center shrink-0">
                30+ High-Tech Machines
              </span>
            </div>
          </motion.div>

          {/* RIGHT: 2 STACKED IMAGES (~40%) */}
          <div className="lg:col-span-5 flex flex-col gap-6">

            {/* TOP RIGHT: CNC IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative h-[220px] sm:h-[240px] rounded-[24px] overflow-hidden border border-slate-200 shadow-md bg-slate-900 group flex flex-col justify-end"
            >
              <Image
                src="/About/CNC.png"
                alt="5-Axis CNC Milling Machinery"
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-95"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

              <div className="relative z-10 p-4 m-3 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 flex items-center justify-between shadow-lg">
                <div>
                  <div className="text-xs font-mono font-bold text-[#0056b3]">01 — CNC & VMC CENTER</div>
                  <div className="text-sm font-bold text-slate-900">5-Axis High-Speed Milling</div>
                </div>
                <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-blue-50 text-[#0056b3] border border-blue-200 font-semibold">
                  ±0.005mm
                </span>
              </div>
            </motion.div>

            {/* BOTTOM RIGHT: EDM IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="relative h-[220px] sm:h-[240px] rounded-[24px] overflow-hidden border border-slate-200 shadow-md bg-slate-900 group flex flex-col justify-end"
            >
              <Image
                src="/About/EDM.png"
                alt="Mirror Spark EDM and Wire Cut EDM Machine"
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-95"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

              <div className="relative z-10 p-4 m-3 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 flex items-center justify-between shadow-lg">
                <div>
                  <div className="text-xs font-mono font-bold text-[#ff6b00]">02 — EDM & WIRE CUT</div>
                  <div className="text-sm font-bold text-slate-900">Mirror Spark & CNC Wire Cut</div>
                </div>
                <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-orange-50 text-[#ff6b00] border border-orange-200 font-semibold">
                  Sub-Micron
                </span>
              </div>
            </motion.div>

          </div>

        </div>

        {/* ======================================================== */}
        {/* FOUR TECHNICAL CAPABILITY PILLARS (BOTTOM GRID)          */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pt-4">
          {INFRA_PILLARS.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#0056b3] transition-all duration-300 flex flex-col justify-between group shadow-2xs"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-slate-400">0{idx + 1}</span>
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200 group-hover:scale-110 transition-transform shadow-2xs">
                    {item.icon}
                  </div>
                </div>

                <h3 className="text-base font-bold text-slate-900 tracking-wider font-mono mb-2 group-hover:text-[#0056b3] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed font-normal mb-4">
                  {item.subtitle}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200 space-y-1">
                {item.specs.map((sp, sIdx) => (
                  <div key={sIdx} className="text-[11px] font-mono text-slate-700 flex items-center gap-1.5 font-medium">
                    <Sparkles className="w-3 h-3 text-[#ff6b00] shrink-0" />
                    <span>{sp}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
