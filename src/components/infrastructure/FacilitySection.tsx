'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { CheckCircle2, ChevronRight, Cpu } from 'lucide-react';
import { InfrastructureSectionData } from '@/data/infrastructure';

interface FacilitySectionProps {
  data: InfrastructureSectionData;
  imageOnRight?: boolean;
  theme?: 'white' | 'slate';
}

export const FacilitySection: React.FC<FacilitySectionProps> = ({
  data,
  imageOnRight = false,
  theme = 'white',
}) => {
  const shouldReduceMotion = useReducedMotion();

  const isSlate = theme === 'slate';

  return (
    <section
      id={data.id}
      className={`py-13 sm:py-13 border-b border-slate-200/90 scroll-mt-24 transition-colors ${isSlate ? 'bg-slate-50/70' : 'bg-white'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center`}>

          {/* Content Column */}
          <div
            className={`lg:col-span-6 space-y-6 ${imageOnRight ? 'lg:order-1' : 'lg:order-2'
              }`}
          >
            {/* Badge matching site design */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-[#0056b3] text-xs font-bold uppercase tracking-wider"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff6b00] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#ff6b00]"></span>
              </span>
              {data.badge}
            </motion.div>

            {/* Heading matching Industries & Product pages */}
            <motion.h2
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight leading-[1.12]"
            >
              {data.heading}
            </motion.h2>

            {/* Paragraphs */}
            <div className="space-y-3.5 text-slate-600 text-sm sm:text-base leading-relaxed">
              {data.description.map((p, idx) => (
                <motion.p
                  key={idx}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.08 * (idx + 1) }}
                >
                  {p}
                </motion.p>
              ))}
            </div>

            {/* Highlights List */}
            <div className="pt-2 space-y-3">
              {data.highlights.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.06 * idx }}
                  className="flex items-start gap-3 p-3 rounded-lg bg-white border border-slate-200/80 shadow-2xs hover:border-blue-300 transition-colors"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#0056b3] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-slate-900 leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Technical Detail Panel */}
            {data.technicalDetails && (
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="mt-6 rounded-xl border border-slate-200 bg-white p-4.5 shadow-2xs hover:shadow-sm transition-shadow"
              >
                <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
                  <span className="w-2 h-2 rounded-full bg-[#ff6b00]"></span>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700">
                    Technical Capabilities
                  </span>
                </div>
                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                  {data.technicalDetails.map((spec) => (
                    <div key={spec.label} className="border-b border-slate-100 pb-2 last:border-b-0 sm:last:border-b">
                      <dt className="text-[11px] font-mono text-slate-600 uppercase tracking-wider">
                        {spec.label}
                      </dt>
                      <dd className="text-xs sm:text-[13px] font-medium text-slate-900 mt-0.5">
                        {spec.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </motion.div>
            )}

          </div>

          {/* Image Column */}
          <div
            className={`lg:col-span-6 ${imageOnRight ? 'lg:order-2' : 'lg:order-1'
              }`}
          >
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200/90 shadow-md group bg-slate-900"
            >
              <Image
                src={data.imageSrc}
                alt={data.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-103"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5 text-white z-10 pr-4">
                <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded bg-[#0b1f3a]/80 backdrop-blur-md border border-white/20">
                  {data.heading}
                </span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
