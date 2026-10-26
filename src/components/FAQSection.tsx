'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';
import { FAQItem } from '@/data/faqs';

interface FAQSectionProps {
  faqs: FAQItem[];
  title?: string;
  subtitle?: string;
  badge?: string;
  theme?: 'light' | 'dark';
  className?: string;
}

export const FAQSection: React.FC<FAQSectionProps> = ({
  faqs,
  title = "Frequently Asked Questions",
  subtitle = "Find clear answers to common questions about our tooling engineering, specifications, tolerances, and manufacturing workflows.",
  badge = "KNOWLEDGE BASE & FAQS",
  theme = 'light',
  className = ""
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First FAQ open by default

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const isDark = theme === 'dark';

  return (
    <section className={`py-13 sm:py-13 ${isDark ? 'bg-slate-900 border-t border-slate-800' : 'bg-slate-50 border-t border-slate-200'} relative overflow-hidden ${className}`}>
      {/* Background Subtle Tech Pattern */}
      <div className="absolute inset-0 tech-grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-3">

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className={`text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}
          >
            {title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'} font-normal max-w-2xl mx-auto`}
          >
            {subtitle}
          </motion.p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const numStr = String(index + 1).padStart(2, '0');

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                className={`rounded-2xl transition-all duration-300 border overflow-hidden ${isOpen
                  ? isDark
                    ? 'bg-slate-800/95 border-blue-400/50 shadow-lg'
                    : 'bg-white border-[#0056b3] shadow-md ring-1 ring-[#0056b3]/15'
                  : isDark
                    ? 'bg-slate-800/50 border-slate-700/80 hover:border-slate-600'
                    : 'bg-white border-slate-200/90 hover:border-slate-300 hover:shadow-xs'
                  }`}
              >
                {/* Accordion Question Trigger */}
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-4.5 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start sm:items-center gap-3 sm:gap-4 flex-1">
                    <span
                      className={`text-xs font-bold transition-colors shrink-0 mt-0.5 sm:mt-0 ${isOpen
                        ? 'text-[#ff6b00]'
                        : isDark
                          ? 'text-slate-400'
                          : 'text-[#0056b3]'
                        }`}
                    >
                      {numStr}
                    </span>

                    <h3
                      className={`text-sm sm:text-base font-semibold leading-snug transition-colors ${isOpen
                        ? isDark
                          ? 'text-white'
                          : 'text-[#0056b3]'
                        : isDark
                          ? 'text-slate-200 hover:text-white'
                          : 'text-slate-900 hover:text-[#0056b3]'
                        }`}
                    >
                      {faq.question}
                    </h3>
                  </div>

                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen
                      ? 'bg-[#0056b3] text-white rotate-180'
                      : isDark
                        ? 'bg-slate-700 text-slate-300'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                  >
                    <ChevronDown className="w-4 h-4 transition-transform duration-300" />
                  </div>
                </button>

                {/* Animated Accordion Answer Body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div
                        className={`px-4.5 sm:px-5 pb-5 pt-1 text-xs sm:text-sm leading-relaxed ${isDark ? 'text-slate-300 border-t border-slate-700/60' : 'text-slate-600 border-t border-slate-100'
                          } font-normal`}
                      >
                        <p className="pt-2">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
