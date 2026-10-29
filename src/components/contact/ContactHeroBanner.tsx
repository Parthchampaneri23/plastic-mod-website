"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { ContactHeroBannerData } from "@/services/contactService";

interface ContactHeroBannerProps {
  data?: ContactHeroBannerData;
}

export const ContactHeroBanner: React.FC<ContactHeroBannerProps> = ({ data }) => {
  const shouldReduceMotion = useReducedMotion();

  const titlePart1 = data?.titlePart1 || "Contact";
  const titleHighlight = data?.titleHighlight || "Our Team";
  const breadcrumbHome = data?.breadcrumbHome || "Home";
  const breadcrumbCurrent = data?.breadcrumbCurrent || "Contact Us";
  const bannerImage = data?.bannerImage || "/contact/contact-banner.jpg";

  return (
    <section className="relative w-full h-[260px] sm:h-[340px] md:h-[380px] pt-28 sm:pt-32 pb-8 flex items-center overflow-hidden bg-slate-950">
      {/* 1. Background Indian Tooling Campus Banner Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bannerImage}
          alt="Patel Mould Industries Corporate Tooling Campus & Customer Engineering Center"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter brightness-95 opacity-100"
        />

        {/* 2. Brand Navy & Slate Multi-layer Gradient for Crisp Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1f3a]/95 via-[#0b1f3a]/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/50 z-10" />
        <div className="absolute inset-0 tech-grid-pattern opacity-20 pointer-events-none z-10" />
      </div>

      {/* 3. Left Content Block: Title + Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="max-w-2xl space-y-3">
          {/* Main Title */}
          <motion.h1
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-none"
          >
            {titlePart1}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-[#ff6b00]">
              {titleHighlight}
            </span>
          </motion.h1>

          {/* Breadcrumb Navigation */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="inline-flex items-center space-x-2 text-xs font-mono text-white/90 bg-[#0b1f3a]/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-blue-400/30 uppercase tracking-wider shadow-sm"
          >
            <Link
              href="/"
              className="hover:text-[#ff6b00] transition-colors flex items-center gap-1 font-semibold"
            >
              {breadcrumbHome}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-blue-300 font-bold">{breadcrumbCurrent}</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
