'use client';

import React, { useState, useEffect } from 'react';
import { CLIENT_LOGO_IMAGES, INDIAN_TESTIMONIALS } from '@/data/home';
import { SectionHeading } from '../SectionHeading';
import {
  Building2,
  Quote,
  Star,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Award,
  Sparkles,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const ClientSection: React.FC = () => {
  // Testimonials Slider State
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto slide ticker for testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % INDIAN_TESTIMONIALS.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const currentTestimonial = INDIAN_TESTIMONIALS[testimonialIndex];

  // Repeat logo images array for seamless infinite marquee loop across wide screens
  const marqueeLogos = [
    ...CLIENT_LOGO_IMAGES,
    ...CLIENT_LOGO_IMAGES,
    ...CLIENT_LOGO_IMAGES,
    ...CLIENT_LOGO_IMAGES,
    ...CLIENT_LOGO_IMAGES,
    ...CLIENT_LOGO_IMAGES,
  ];

  return (
    <section id="client-section" className="py-13 bg-slate-50 relative border-t border-b border-slate-200 overflow-hidden">

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
          TRUSTED INDIAN INDUSTRY LEADERS
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
              Valued Clients &<br />
              <span className="text-[#0056b3]">Customer Success.</span>
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
              Partnering with <strong className="text-slate-900 font-medium">India's premier beverage bottlers</strong>, FMCG conglomerates, and <strong className="text-[#0056b3] font-medium">pharmaceutical packaging leaders</strong> nationwide.
            </p>

            {/* Micro Technical Highlight Pills */}
            <div className="flex items-center flex-wrap gap-2.5 mt-3.5">
              <span className="text-[11px] font-medium text-[#0056b3] bg-blue-50 border border-blue-200/90 px-3 py-1 rounded-full flex items-center gap-1.5 shadow-2xs hover:bg-[#0056b3] hover:text-white transition-all duration-300 cursor-pointer">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0056b3]"></span>
                25+ Cities Across India
              </span>
              <span className="text-[11px] font-medium text-slate-800 bg-slate-100 border border-slate-200 px-3 py-1 rounded-full flex items-center gap-1.5 shadow-2xs hover:bg-[#ff6b00] hover:text-white transition-all duration-300 cursor-pointer">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00]"></span>
                Trusted Since 1994
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 1. TOP FULL-WIDTH UNBOXED MOVING SLIDER: Client Logos */}
      <div className="mb-20">

        {/* FULL BLEED EDGE-TO-EDGE UNBOXED SLIDER CONTAINER */}
        <div className="relative w-full overflow-hidden py-8 bg-white border-y border-slate-200 shadow-sm">

          {/* Marquee Motion Track */}
          <div className="flex gap-8 items-center w-max animate-marquee-continuous">
            {marqueeLogos.map((client, index) => (
              <div
                key={`${client.id}-${index}`}
                className="w-44 sm:w-52 h-24 p-4 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-xl hover:border-[#0056b3] transition-all transform hover:-translate-y-1 flex items-center justify-center shrink-0 relative overflow-hidden group/card cursor-pointer"
              >
                <img
                  src={client.image}
                  alt={client.name}
                  className="max-h-14 w-auto object-contain transition-transform duration-300 group-hover/card:scale-105"
                />

                {/* Bottom Hover Gradient Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0056b3] via-[#0080ff] to-[#ff6b00] transform scale-x-0 group-hover/card:scale-x-100 transition-transform duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 2. BOTTOM SLIDER: Indian Customer Testimonials Carousel */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-blue-100 shadow-xl relative overflow-hidden text-slate-900">

          {/* Background Ambient Glow & Subtle Pattern */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100/60 via-orange-100/40 to-transparent rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-sky-100/50 via-blue-50/30 to-transparent rounded-full blur-3xl pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(#0056b3_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.04] pointer-events-none" />

          {/* Top Bar Navigation & Badge */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 mb-8 border-b border-slate-100 relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#0056b3] text-xs font-semibold uppercase tracking-wider mb-3 shadow-xs border border-blue-200/80">
                <Award className="w-4 h-4 text-[#ff6b00]" />
                Client Testimonials & Feedback
              </div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">
                What Indian Plant Managers & Directors Say
              </h3>
            </div>

            {/* Slider Navigation Buttons & Progress Counter */}
            <div className="flex items-center space-x-4">
              <span className="text-xs font-black text-slate-400 bg-slate-100/80 px-3 py-1.5 rounded-full border border-slate-200/70">
                <span className="text-[#0056b3] font-black text-sm">0{testimonialIndex + 1}</span> / 0{INDIAN_TESTIMONIALS.length}
              </span>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setTestimonialIndex((prev) => (prev === 0 ? INDIAN_TESTIMONIALS.length - 1 : prev - 1))}
                  className="p-3 rounded-2xl bg-white border border-slate-200 text-slate-700 hover:text-white hover:bg-[#0056b3] hover:border-[#0056b3] transition-all shadow-sm cursor-pointer active:scale-95 group"
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft className="w-5 h-5 transition-transform group-hover:-translate-x-0.5" />
                </button>
                <button
                  onClick={() => setTestimonialIndex((prev) => (prev + 1) % INDIAN_TESTIMONIALS.length)}
                  className="p-3 rounded-2xl bg-white border border-slate-200 text-slate-700 hover:text-white hover:bg-[#0056b3] hover:border-[#0056b3] transition-all shadow-sm cursor-pointer active:scale-95 group"
                  aria-label="Next Testimonial"
                >
                  <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Testimonial Active Slide */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial.id}
              initial={{ opacity: 0, x: 25, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -25, scale: 0.98 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10"
            >
              {/* Quote Block */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="flex items-center space-x-1 px-3 py-1 rounded-full bg-amber-50 border border-amber-200/80 shadow-xs">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <span className="text-xs font-black text-amber-600 uppercase tracking-wider">5.0 Verified Rating</span>
                </div>

                <div className="relative">
                  <Quote className="w-14 h-14 text-[#0056b3]/15 absolute -top-5 -left-3 -z-10" />
                  <p className="text-lg sm:text-xl text-slate-800 font-semibold leading-relaxed italic pl-4 border-l-3 border-[#ff6b00]">
                    "{currentTestimonial.quote}"
                  </p>
                </div>
              </div>

              {/* Author & Location Card */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 }}
                className="lg:col-span-5 bg-gradient-to-br from-slate-50 via-white to-blue-50/40 p-7 rounded-2xl border border-blue-100 shadow-md space-y-5 relative overflow-hidden group hover:shadow-xl hover:border-blue-300 transition-all duration-300"
              >
                <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-[#0056b3]/10 to-transparent rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform duration-500" />

                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0056b3] via-[#0070e6] to-[#ff6b00] text-white flex items-center justify-center font-black text-2xl shadow-md shadow-blue-500/20 shrink-0 border border-white">
                    {currentTestimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div className="text-lg font-black text-slate-900 group-hover:text-[#0056b3] transition-colors">{currentTestimonial.author}</div>
                    <div className="text-xs font-bold text-[#0056b3] mt-0.5">{currentTestimonial.position}</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200/80 space-y-2 text-xs font-medium">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 font-semibold">Company:</span>
                    <span className="text-slate-900 font-black">{currentTestimonial.company}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 font-semibold">Location:</span>
                    <span className="text-[#0056b3] font-bold">{currentTestimonial.location}</span>
                  </div>
                </div>

                <div className="pt-2 text-[11px] font-bold text-emerald-700 flex items-center gap-2 bg-emerald-50/90 px-3.5 py-2 rounded-xl border border-emerald-200/80">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Verified Plant Purchase Order</span>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Testimonial Indicators */}
          <div className="flex items-center justify-center space-x-2.5 pt-10 relative z-10">
            {INDIAN_TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setTestimonialIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-500 cursor-pointer ${idx === testimonialIndex ? 'w-10 bg-gradient-to-r from-[#0056b3] to-[#ff6b00] shadow-sm' : 'w-2.5 bg-slate-200 hover:bg-slate-300'
                  }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};


