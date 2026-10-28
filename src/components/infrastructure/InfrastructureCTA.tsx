'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, PhoneCall, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/Button';

interface InfrastructureCTAProps {
  cta?: {
    badge?: string;
    title?: string;
    description?: string;
    location?: string;
    email?: string;
    phone?: string;
    boxTitle?: string;
    boxBadge?: string;
    boxDescription?: string;
    buttonText?: string;
    buttonLink?: string;
  };
}

export const InfrastructureCTA: React.FC<InfrastructureCTAProps> = ({ cta }) => {
  const shouldReduceMotion = useReducedMotion();

  const badge = cta?.badge || 'MANUFACTURING PARTNERSHIP';
  const title = cta?.title || 'Looking for the Right Mould Manufacturing Partner?';
  const description =
    cta?.description ||
    'Discuss your tooling and mould requirements with our engineering team. Explore how our precision machining, assembly, metrology, and testing infrastructure can support your product goals.';
  const location = cta?.location || 'GIDC, Gujarat, India';
  const email = cta?.email || 'sales@patelmould.com';
  const phone = cta?.phone || 'Direct Technical Inquiries';
  const boxTitle = cta?.boxTitle || 'Infrastructure Consultation';
  const boxBadge = cta?.boxBadge || 'Direct Team';
  const boxDescription =
    cta?.boxDescription ||
    'Connect directly with our tooling engineers for feasibility reviews, cycle analysis, and application-specific mould development.';
  const buttonText = cta?.buttonText || 'Request a Quote';
  const buttonLink = cta?.buttonLink || '/contact#inquiry-form-section';

  return (
    <section className="py-13 sm:py-13 md:py-13 bg-slate-50 border-t border-slate-200/90 relative">
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA Card */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="relative rounded-xl overflow-hidden bg-white border border-slate-200/90 shadow-sm p-6 sm:p-10 md:p-12"
        >
          {/* Subtle Top Accent Bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0056b3] via-[#ff6b00] to-[#0056b3]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Heading & Description (7 cols) */}
            <div className="lg:col-span-7">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-blue-50 border border-blue-200/60 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00]" />
                <span className="text-[11px] font-bold tracking-wider text-[#0056b3] uppercase">
                  {badge}
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0b1f3a] tracking-tight leading-tight sm:leading-snug">
                {title}
              </h2>

              {/* Description */}
              <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl">
                {description}
              </p>

              {/* Quick Contact Points */}
              <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-500 font-medium">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#ff6b00]" />
                  {location}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#0056b3]" />
                  {email}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <PhoneCall className="w-3.5 h-3.5 text-[#0056b3]" />
                  {phone}
                </span>
              </div>
            </div>

            {/* Right Column: Action Buttons & Highlights Box (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-center gap-4 lg:pl-4">
              <div className="bg-slate-50/90 rounded-lg p-5 border border-slate-200/80 flex flex-col gap-3.5">
                <div className="flex items-center justify-between pb-2.5 border-b border-slate-200/70">
                  <span className="text-[11px] font-bold text-[#0b1f3a] uppercase tracking-wider">
                    {boxTitle}
                  </span>
                  <span className="text-[10px] font-semibold text-[#ff6b00] bg-orange-50 px-2 py-0.5 rounded border border-orange-200/60">
                    {boxBadge}
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {boxDescription}
                </p>
                <div className="pt-2">
                  <Button
                    href={buttonLink}
                    variant="primary"
                    size="md"
                    className="w-full justify-center shadow-md hover:shadow-lg"
                    icon={<ArrowRight className="w-4 h-4 ml-1" />}
                  >
                    {buttonText}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default InfrastructureCTA;
