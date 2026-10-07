'use client';

import React, { useState, useEffect } from 'react';
import { HERO_SLIDES } from '@/data/home';
import { Button } from '../Button';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Target,
  ShieldCheck,
  Cpu,
  Clock,
  Cog
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const iconMap: Record<string, React.ReactNode> = {
  Target: <Target className="w-5 h-5 text-[#0056b3]" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-[#0056b3]" />,
  Cpu: <Cpu className="w-5 h-5 text-[#0056b3]" />,
  Clock: <Clock className="w-5 h-5 text-[#0056b3]" />,
};

export const HeroBanner: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const slide = HERO_SLIDES[currentSlideIndex];

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center pt-32 pb-24 overflow-hidden bg-slate-900">

      {/* Background Image Slider with Full Clarity */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 z-0"
        >
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat opacity-100"
            style={{ backgroundImage: `url('${slide.image}')` }}
          />
          {/* Gentle edge vignette shadow for readability only */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-950/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-slate-950/30" />
        </motion.div>
      </AnimatePresence>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          <motion.div
            key={`content-${slide.id}`}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-6 space-y-5 max-w-xl"
          >
            {/* Top Pill Subtitle Tag matching graphic design */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-blue-400/30 text-white text-[11px] font-semibold tracking-wider uppercase backdrop-blur-md">
              <Cog className="w-3.5 h-3.5 text-[#ff6b00] animate-spin-slow" />
              <span>{slide.subtitle}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-[1.15] tracking-tight">
              {slide.title}
              {slide.highlightText && (
                <span className="text-[#ff6b00] block mt-1 underline decoration-blue-500/40 underline-offset-4">
                  {slide.highlightText}
                </span>
              )}
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-200 font-normal leading-relaxed">
              {slide.description}
            </p>

            {/* CTAs matched exactly to graphic banner */}
            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <Button href={slide.primaryCtaLink} variant="secondary" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                {slide.primaryCtaText}
              </Button>
              <Button href={slide.secondaryCtaLink} variant="outline" size="lg" className="bg-white/10 border-white/40 text-white hover:bg-white hover:text-slate-900" icon={<ArrowRight className="w-5 h-5" />}>
                {slide.secondaryCtaText}
              </Button>
            </div>

            {/* 4 Key Feature Pill Badges from Slider1.png graphic */}
            {slide.features && (
              <div className="pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {slide.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center space-x-3 bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/10">
                    <div className="p-2 bg-white rounded-lg shrink-0">
                      {iconMap[feat.icon] || <ShieldCheck className="w-5 h-5 text-[#0056b3]" />}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">{feat.title}</div>
                      <div className="text-[10px] text-slate-300 font-medium">{feat.subtitle}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}

          </motion.div>

        </div>
      </div>

      {/* Slider Nav Controls */}
      <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlideIndex(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${idx === currentSlideIndex ? 'w-10 bg-[#ff6b00]' : 'w-2.5 bg-white/30 hover:bg-white/60'
                }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => setCurrentSlideIndex((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1))}
            className="p-2.5 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors cursor-pointer"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length)}
            className="p-2.5 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors cursor-pointer"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
