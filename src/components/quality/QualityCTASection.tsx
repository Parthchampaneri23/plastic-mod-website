"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, PhoneCall, Mail } from "lucide-react";
import { Button } from "@/components/Button";

export const QualityCTASection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative py-13 sm:py-13 bg-[#0b1f3a] text-white overflow-hidden">
      {/* Background geometric line patterns */}
      <div className="absolute inset-0 tech-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle top brand color accent line */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0056b3] via-sky-400 to-[#ff6b00]" />

      <div className="max-w-[1160px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6">

          {/* Eyebrow */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/60 border border-blue-400/30 text-blue-300 text-[11px] font-bold uppercase tracking-wider"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff6b00] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff6b00]"></span>
            </span>
            <span>MANUFACTURING PARTNERSHIP</span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-semibold text-white tracking-tight leading-tight"
          >
            Looking for Reliable Mould <span className="text-[#ff6b00]">Manufacturing?</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto"
          >
            Discuss your mould requirements with our team and learn more about our manufacturing and quality inspection approach.
          </motion.p>

          {/* Buttons reusing existing routes */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.22 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-3"
          >
            <Button
              href="#inquiry-section"
              variant="secondary"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Send an Inquiry
            </Button>
            <Button
              href="mailto:sales@patelmould.com"
              variant="outline"
              size="md"
              className="bg-transparent text-white border-slate-600 hover:bg-white/10 hover:border-white hover:text-white"
              icon={<Mail className="w-4 h-4" />}
            >
              Contact Us
            </Button>
          </motion.div>

          {/* Direct Phone Assistance */}
          <motion.p
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xs text-slate-400 pt-2 font-mono"
          >
            Or reach our toolroom directly at{" "}
            <a href="tel:+917784758347" className="text-white hover:text-[#ff6b00] underline transition-colors">
              +91 7784758347
            </a>
          </motion.p>

        </div>
      </div>
    </section>
  );
};
