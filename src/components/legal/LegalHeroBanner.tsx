"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronRight, ShieldCheck, Scale } from "lucide-react";

interface LegalHeroBannerProps {
  titlePrimary: string;
  titleHighlight: string;
  breadcrumbLabel: string;
  badgeLabel?: string;
  lastUpdated?: string;
}

export const LegalHeroBanner: React.FC<LegalHeroBannerProps> = ({
  titlePrimary,
  titleHighlight,
  breadcrumbLabel,
  badgeLabel = "Corporate Governance",
  lastUpdated = "March 2026",
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative w-full h-[280px] sm:h-[340px] md:h-[380px] pt-28 sm:pt-32 pb-8 flex items-center overflow-hidden bg-slate-950">
      {/* 1. Background Facility Banner Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/About/about banner.png"
          alt="Patel Mould Industries Corporate Facility and Governance"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter brightness-90 opacity-95"
        />

        {/* 2. Brand Navy & Slate Multi-layer Gradient for Crisp Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1f3a]/95 via-[#0b1f3a]/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/50 z-10" />
        <div className="absolute inset-0 tech-grid-pattern opacity-20 pointer-events-none z-10" />
      </div>

      {/* 3. Left Content Block: Title + Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="max-w-3xl space-y-3.5">
          {/* Subtle Category Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs font-medium tracking-wide">
            <Scale className="w-3.5 h-3.5 text-[#ff6b00]" />
            <span>{badgeLabel}</span>
            <span className="w-1 h-1 rounded-full bg-slate-400" />
            <span className="text-slate-300">Effective: {lastUpdated}</span>
          </div>

          {/* Main Title matching Brand Typography */}
          <motion.h1
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-none"
          >
            {titlePrimary}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-[#ff6b00]">
              {titleHighlight}
            </span>
          </motion.h1>

          {/* Breadcrumb Navigation */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="inline-flex items-center space-x-2 text-xs font-mono text-white/90 bg-[#0b1f3a]/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-blue-400/30 uppercase tracking-wider shadow-sm"
          >
            <Link
              href="/"
              className="hover:text-[#ff6b00] transition-colors flex items-center gap-1 font-semibold"
            >
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-blue-300 font-bold">{breadcrumbLabel}</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
