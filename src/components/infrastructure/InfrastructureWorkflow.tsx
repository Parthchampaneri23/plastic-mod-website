'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Cpu, Layers, Wrench, ShieldCheck, CheckCircle2, Box, Sparkles } from 'lucide-react';
import { WORKFLOW_STEPS } from '@/data/infrastructure';

const workflowIcons = [
  <Layers key="0" className="w-5 h-5 text-[#0056b3]" />,
  <Cpu key="1" className="w-5 h-5 text-[#ff6b00]" />,
  <Wrench key="2" className="w-5 h-5 text-[#0056b3]" />,
  <ShieldCheck key="3" className="w-5 h-5 text-[#ff6b00]" />,
  <CheckCircle2 key="4" className="w-5 h-5 text-[#0056b3]" />,
  <Box key="5" className="w-5 h-5 text-[#ff6b00]" />,
];

export const InfrastructureWorkflow: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-13 sm:py-13 bg-[#0b1f3a] text-white relative overflow-hidden">
      {/* Background Tech Linework */}
      <div className="absolute inset-0 tech-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute inset-0 bg-radial-gradient from-blue-900/20 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* 2-Column Split Header matching Industries & Product Categories */}
        <div className="mb-12 sm:mb-14">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase tracking-wider mb-4"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff6b00] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#ff6b00]"></span>
            </span>
            FACILITY INTEGRATION
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end">
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-7"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-[1.12]">
                Connected Toolroom &amp; <br />
                <span className="text-blue-400">Production Workflow.</span>
              </h2>
            </motion.div>

            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-5 relative pl-5 sm:pl-6"
            >
              {/* Gradient Vertical Accent Bar */}
              <div className="absolute left-0 top-1 bottom-1 w-1 rounded-full bg-gradient-to-b from-blue-400 via-blue-500 to-[#ff6b00]" />

              <p className="text-slate-300 text-sm sm:text-base font-normal leading-relaxed">
                Each department operates as a linked stage within our single manufacturing umbrella, ensuring accountability, dimensional traceability, and rapid engineering response throughout mould fabrication.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Responsive Horizontal / Vertical Workflow Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {WORKFLOW_STEPS.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.07 }}
              className="relative bg-slate-900/80 border border-slate-800 rounded-xl p-5 hover:border-blue-500/50 hover:bg-slate-800/80 transition-all duration-300 flex flex-col justify-between group shadow-sm"
            >
              {/* Step Number & Icon */}
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <span className="text-xs font-mono font-bold text-slate-400 px-2 py-0.5 rounded bg-slate-800 border border-slate-700">
                    STAGE {step.step}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-[#0b1f3a] border border-slate-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {workflowIcons[idx % workflowIcons.length]}
                  </div>
                </div>

                <h3 className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors">
                  {step.title}
                </h3>
                <span className="text-[11px] font-mono text-[#ff6b00] block mt-0.5">
                  {step.subtitle}
                </span>

                <p className="text-xs text-slate-300 mt-2.5 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Progress Connector Indicator */}
              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                <span>Phase {idx + 1} of 6</span>
                {idx < WORKFLOW_STEPS.length - 1 && (
                  <ArrowRight className="w-3.5 h-3.5 text-blue-400 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
