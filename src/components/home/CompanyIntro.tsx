'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { COMPANY_STATS } from '@/data/home';
import { SectionHeading } from '../SectionHeading';
import { Button } from '../Button';
import { ArrowRight } from 'lucide-react';
import { motion, useInView, animate } from 'framer-motion';

// Animated Counter component for numerical stats
const CounterStat: React.FC<{ valueStr: string }> = ({ valueStr }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView || !ref.current) return;

    // Match numbers including commas and decimals
    const match = valueStr.match(/([^\d.]*)([\d.,]+)(.*)/);
    if (!match) {
      if (ref.current) ref.current.textContent = valueStr;
      return;
    }

    const prefix = match[1] || '';
    const cleanNumStr = match[2].replace(/,/g, '');
    const numericVal = parseFloat(cleanNumStr);
    if (isNaN(numericVal)) {
      if (ref.current) ref.current.textContent = valueStr;
      return;
    }

    const suffix = match[3] || '';
    const hasDecimal = cleanNumStr.includes('.');
    const decimalPlaces = hasDecimal ? cleanNumStr.split('.')[1].length : 0;
    const hasComma = match[2].includes(',');

    const node = ref.current;
    const controls = animate(0, numericVal, {
      duration: 2.2,
      ease: [0.16, 1, 0.3, 1], // Smooth custom ease out cubic
      onUpdate(value) {
        if (hasDecimal) {
          node.textContent = `${prefix}${value.toFixed(decimalPlaces)}${suffix}`;
        } else {
          const valInt = Math.floor(value);
          const formattedInt = hasComma ? valInt.toLocaleString() : `${valInt}`;
          node.textContent = `${prefix}${formattedInt}${suffix}`;
        }
      },
    });

    return () => controls.stop();
  }, [isInView, valueStr]);

  return <span ref={ref}>{valueStr}</span>;
};

export const CompanyIntro: React.FC = () => {
  return (
    <section id="company-intro" className="py-13 bg-white relative overflow-hidden border-b border-slate-200">
      {/* Background Subtle Tech Pattern */}
      <div className="absolute inset-0 tech-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Factory & Tooling Image Grid */}
          <div className="lg:col-span-6 space-y-4">
            {/* 1. MAIN FACTORY IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 rounded-[22px] overflow-hidden border border-slate-200 shadow-lg bg-slate-900 group/main"
            >
              <div className="relative w-full h-[260px] xs:h-[300px] sm:h-[340px]">
                <Image
                  src="/Home/company image about.png"
                  alt="Patel Mould Industries manufacturing facility"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 520px"
                  className="object-cover object-center rounded-[22px] group-hover/main:scale-103 transition-transform duration-700"
                  priority
                />
              </div>
            </motion.div>

            {/* 2. TWO SECONDARY IMAGES SIDE BY SIDE (NO OVERLAP) */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="relative h-[130px] sm:h-[150px] rounded-2xl overflow-hidden border border-slate-200 shadow-md group/mold"
              >
                <Image
                  src="/Home/mold image about.png"
                  alt="Precision plastic injection mould manufactured by Patel Mould Industries"
                  fill
                  sizes="(max-width: 640px) 50vw, 250px"
                  className="object-cover object-center rounded-2xl group-hover/mold:scale-105 transition-transform duration-500"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="relative h-[130px] sm:h-[150px] rounded-2xl overflow-hidden border border-slate-200 shadow-md group/cnc"
              >
                <Image
                  src="/Home/CNC image about.png"
                  alt="CNC machining for precision plastic mould manufacturing"
                  fill
                  sizes="(max-width: 640px) 50vw, 250px"
                  className="object-cover object-center rounded-2xl group-hover/cnc:scale-105 transition-transform duration-500"
                />
              </motion.div>
            </div>
          </div>

          {/* Right Column: Company Story */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6 space-y-4"
          >
            <SectionHeading
              badge="Engineering Excellence Since 1994"
              title="About Patel Mould Industries"
              subtitle="Established in 1994 in Gujarat, Patel Mould Industries is one of India's most trusted manufacturers of high-precision PET preform molds, ISBM tooling, and Extrusion Blow Molds."
              centered={false}
              className="mb-2"
            />

            <div className="space-y-3.5 text-sm text-slate-600 leading-relaxed font-normal">
              <p>
                Spanning three decades of Indian toolmaking craftsmanship, <strong className="text-slate-900 font-medium">Patel Mould Industries</strong> operates a 15,000 m² state-of-the-art facility equipped with 5-axis CNC machining, mirror EDMs, and Zeiss 3D CMM quality inspection labs.
              </p>
              <p>
                We specialize in custom multi-cavity mold solutions engineered for zero-flash production, rapid cycle times, and <strong className="text-[#0056b3] font-medium">guaranteed 5M+ shot tool life</strong> — supporting premier beverage bottlers, FMCG brands, and pharmaceutical manufacturers across India and globally.
              </p>
            </div>

            {/* Read More Button */}
            <div className="pt-3">
              <Button href="/about#capabilities" variant="primary" size="md" icon={<ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}>
                Read More About Our Technology
              </Button>
            </div>
          </motion.div>

        </div>

        {/* 4 Statistic / Highlight Cards with Live Animated Ticker Counting */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.12 } }
          }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {COMPANY_STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={{ hidden: { opacity: 0, y: 25 }, show: { opacity: 1, y: 0 } }}
              whileHover={{ y: -4, boxShadow: "0 15px 25px -5px rgba(0, 86, 179, 0.08)" }}
              transition={{ duration: 0.4 }}
              className="bg-white p-5 rounded-2xl text-center relative overflow-hidden group border border-slate-200/90 shadow-sm"
            >
              <div className="text-3xl lg:text-4xl font-bold text-[#0056b3] tracking-tight group-hover:scale-103 transition-transform">
                <CounterStat valueStr={stat.value} />
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-800 mt-1.5">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-500 font-normal mt-0.5">
                {stat.subtext}
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0056b3] to-[#ff6b00] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
