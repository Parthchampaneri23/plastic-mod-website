"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { IndustryItem } from "@/data/industries";

interface IndustryCardProps {
  industry: IndustryItem;
  index: number;
}

export const IndustryCard: React.FC<IndustryCardProps> = ({ industry, index }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="h-full"
    >
      <Link
        href={`/industries/${industry.slug}`}
        className="group relative flex flex-col justify-between h-full bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:border-[#0056b3]/50 hover:shadow-xl transition-all duration-300"
      >
        {/* Top: High-quality, relevant industry image */}
        <div>
          <div className="relative w-full h-56 sm:h-60 overflow-hidden bg-slate-900">
            <Image
              src={industry.image}
              alt={`${industry.name} Mould Applications - Patel Mould Industries`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
            />
          </div>

          {/* Below Image: Industry name */}
          <div className="p-5 sm:p-5.5">
            <h3 className="text-lg sm:text-xl font-semibold text-slate-900 group-hover:text-[#0056b3] transition-colors leading-snug">
              {industry.name}
            </h3>
          </div>
        </div>

        {/* Below Name: Small, elegant Explore Industry button/link */}
        <div className="px-5 sm:px-5.5 pb-5 pt-0 flex items-center">
          <span className="text-xs font-semibold text-[#0056b3] group-hover:text-[#ff6b00] transition-colors flex items-center gap-1.5">
            <span>Explore Industry</span>
            <ArrowRight className="w-4 h-4 text-[#ff6b00] transition-transform duration-300 group-hover:translate-x-1.5" />
          </span>
        </div>

        {/* Bottom Hover Accent Line */}
        <div className="h-1 w-full bg-gradient-to-r from-[#0056b3] via-[#ff6b00] to-[#0056b3] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      </Link>
    </motion.div>
  );
};
