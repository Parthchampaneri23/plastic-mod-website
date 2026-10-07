'use client';

import React, { useEffect, useRef } from 'react';
import {
  Target,
  Cpu,
  Award,
  Users,
  SlidersHorizontal,
  ClockCheck
} from 'lucide-react';
import { motion, useInView, animate } from 'framer-motion';

// Live Animated Counter for 30+ Years
const StatCounter: React.FC<{ value: number; suffix?: string }> = ({ value, suffix = '' }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView || !ref.current) return;
    const node = ref.current;

    const controls = animate(0, value, {
      duration: 2.2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(v) {
        node.textContent = `${Math.floor(v)}${suffix}`;
      }
    });

    return () => controls.stop();
  }, [isInView, value, suffix]);

  return <span ref={ref}>0{suffix}</span>;
};

interface ProofPointData {
  id: string;
  num: string;
  title: string;
  desc: string;
  icon: React.ReactElement;
  delay: number;
}

export const WhyChooseUs: React.FC = () => {
  const proofPoints: ProofPointData[] = [
    {
      id: "proof-1",
      num: "01",
      title: "Precision Manufacturing",
      desc: "±0.005mm tolerance machining capability",
      icon: <Target className="w-4 h-4" />,
      delay: 0.05
    },
    {
      id: "proof-2",
      num: "02",
      title: "Advanced Technology",
      desc: "World-class European & Japanese CNC, EDM & inspection tech",
      icon: <Cpu className="w-4 h-4" />,
      delay: 0.15
    },
    {
      id: "proof-3",
      num: "03",
      title: "Quality Assurance",
      desc: "ISO 9001:2015 certified quality management systems",
      icon: <Award className="w-4 h-4" />,
      delay: 0.25
    },
    {
      id: "proof-4",
      num: "04",
      title: "Experienced Team",
      desc: "80+ skilled master toolmakers & engineers",
      icon: <Users className="w-4 h-4" />,
      delay: 0.35
    },
    {
      id: "proof-5",
      num: "05",
      title: "Customized Solutions",
      desc: "DFM-driven customized mold engineering",
      icon: <SlidersHorizontal className="w-4 h-4" />,
      delay: 0.45
    },
    {
      id: "proof-6",
      num: "06",
      title: "On-Time Delivery",
      desc: "98.5% verified on-time delivery record",
      icon: <ClockCheck className="w-4 h-4" />,
      delay: 0.55
    }
  ];

  const leftPoints = [proofPoints[0], proofPoints[2], proofPoints[4]]; // 01, 03, 05
  const rightPoints = [proofPoints[1], proofPoints[3], proofPoints[5]]; // 02, 04, 06

  return (
    <section id="why-choose-us" className="py-13 sm:py-13 bg-white relative overflow-hidden text-slate-900 border-t border-b border-slate-100">

      {/* Background Micro Blueprint Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025] bg-[linear-gradient(to_right,#0056b3_1px,transparent_1px),linear-gradient(to_bottom,#0056b3_1px,transparent_1px)] bg-[size:32px_32px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ================= SECTION HEADER: 2-Column Split ================= */}
        <div className="mb-14 sm:mb-18">
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
            WHY PATEL MOULD
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end">
            {/* Left Column: Bold Headline */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-7"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight leading-[1.12]">
                Precision Tooling.<br />
                <span className="text-[#0056b3]">Built for Performance.</span>
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
                From sub-micron machining to rigorous quality control, every mold is engineered around <strong className="text-slate-900 font-medium">±0.005mm accuracy</strong>, maximum durability, and <strong className="text-[#0056b3] font-medium">dependable production performance</strong>.
              </p>

              {/* Micro Technical Highlight Pills */}
              <div className="flex items-center flex-wrap gap-2.5 mt-3.5">
                <span className="text-[11px] font-medium text-[#0056b3] bg-blue-50 border border-blue-200/90 px-3 py-1 rounded-full flex items-center gap-1.5 shadow-2xs hover:bg-[#0056b3] hover:text-white transition-all duration-300 cursor-pointer">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0056b3]"></span>
                  ISO 9001:2015 Certified
                </span>
                <span className="text-[11px] font-medium text-slate-800 bg-slate-100 border border-slate-200 px-3 py-1 rounded-full flex items-center gap-1.5 shadow-2xs hover:bg-[#ff6b00] hover:text-white transition-all duration-300 cursor-pointer">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00]"></span>
                  80+ Master Engineers
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ================= MAIN RADIAL / EDITORIAL COMPOSITION ================= */}
        <div className="relative">

          {/* Subtle Thin Engineering Connecting Lines for Desktop */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none z-0">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <line x1="33%" y1="18%" x2="50%" y2="40%" stroke="#0056b3" strokeWidth="1.2" strokeDasharray="4 4" opacity="0.25" />
              <circle cx="33%" cy="18%" r="3.5" fill="#0056b3" opacity="0.5" />

              <line x1="34%" y1="50%" x2="47%" y2="50%" stroke="#0056b3" strokeWidth="1.2" strokeDasharray="4 4" opacity="0.25" />
              <circle cx="34%" cy="50%" r="3.5" fill="#0056b3" opacity="0.5" />

              <line x1="33%" y1="82%" x2="50%" y2="60%" stroke="#0056b3" strokeWidth="1.2" strokeDasharray="4 4" opacity="0.25" />
              <circle cx="33%" cy="82%" r="3.5" fill="#0056b3" opacity="0.5" />

              <line x1="67%" y1="18%" x2="50%" y2="40%" stroke="#ff6b00" strokeWidth="1.2" strokeDasharray="4 4" opacity="0.28" />
              <circle cx="67%" cy="18%" r="3.5" fill="#ff6b00" opacity="0.6" />

              <line x1="66%" y1="50%" x2="53%" y2="50%" stroke="#ff6b00" strokeWidth="1.2" strokeDasharray="4 4" opacity="0.28" />
              <circle cx="66%" cy="50%" r="3.5" fill="#ff6b00" opacity="0.6" />

              <line x1="67%" y1="82%" x2="50%" y2="60%" stroke="#ff6b00" strokeWidth="1.2" strokeDasharray="4 4" opacity="0.28" />
              <circle cx="67%" cy="82%" r="3.5" fill="#ff6b00" opacity="0.6" />
            </svg>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">

            {/* ================= LEFT COLUMN: Proof Points 01, 03, 05 ================= */}
            <div className="lg:col-span-4 space-y-8 sm:space-y-10 order-2 lg:order-1">
              {leftPoints.map((point) => (
                <motion.div
                  key={point.id}
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="group relative p-6 rounded-2xl bg-white border border-slate-200/80 hover:border-[#0056b3] transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 cursor-pointer"
                >
                  {/* Top Header Row: Number & Animated Icon */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-2xl font-black text-slate-400 group-hover:text-[#0056b3] transition-colors">
                      {point.num}
                    </span>
                    <div className="p-2.5 rounded-xl bg-blue-50 text-[#0056b3] border border-blue-100 group-hover:bg-[#0056b3] group-hover:text-white group-hover:scale-110 transition-all duration-300">
                      {point.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0056b3] transition-colors mb-1.5 tracking-tight">
                    {point.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                    {point.desc}
                  </p>

                  {/* Smooth Expanding Orange Accent Line */}
                  <div className="mt-4 pt-2 relative">
                    <div className="h-[1.5px] w-full bg-slate-100 group-hover:bg-blue-100 transition-colors" />
                    <div className="absolute bottom-0 left-0 h-[2.5px] w-0 bg-[#ff6b00] group-hover:w-full transition-all duration-500 rounded-full" />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* ================= CENTER COLUMN: Company Logo & Central Feature ================= */}
            <div className="lg:col-span-4 order-1 lg:order-2 my-8 lg:my-0 flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative flex flex-col items-center justify-center p-8 sm:p-10 rounded-full border-2 border-blue-200 bg-gradient-to-b from-white via-blue-50/50 to-slate-50 shadow-xl max-w-[350px] sm:max-w-[390px] aspect-square w-full text-center group"
              >
                {/* Outer Rotating Orbit Rings */}
                <div className="absolute -inset-3.5 rounded-full border border-dashed border-blue-400/40 pointer-events-none animate-[spin_90s_linear_infinite]" />
                <div className="absolute -inset-7 rounded-full border border-slate-200 pointer-events-none" />

                {/* Orange & Blue Accent Circles */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#ff6b00] border-2 border-white shadow-xs" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-4 h-4 rounded-full bg-[#0056b3] border-2 border-white shadow-xs" />

                <div className="space-y-2 relative z-10 flex flex-col items-center">

                  {/* Company Logo Container */}
                  <div className="p-2 bg-white rounded-xl shadow-xs border border-blue-100 mb-1 inline-block">
                    <img
                      src="/PMlogo.png"
                      alt="Patel Mould Industries Logo"
                      className="h-10 sm:h-12 w-auto object-contain"
                    />
                  </div>

                  {/* 30+ Years Live Countup Counter */}
                  <div className="text-4xl sm:text-5xl font-semibold tracking-tight text-[#0056b3]">
                    <StatCounter value={30} suffix="+" />
                  </div>

                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-900">
                    YEARS OF EXPERIENCE
                  </div>

                  <div className="w-14 h-0.5 bg-gradient-to-r from-[#0056b3] to-[#ff6b00] mx-auto rounded-full my-2" />

                  <p className="text-xs font-medium text-slate-600 max-w-[240px] leading-relaxed">
                    Precision Engineered.<br />
                    Performance Proven.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* ================= RIGHT COLUMN: Proof Points 02, 04, 06 ================= */}
            <div className="lg:col-span-4 space-y-8 sm:space-y-10 order-3">
              {rightPoints.map((point) => (
                <motion.div
                  key={point.id}
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="group relative p-6 rounded-2xl bg-white border border-slate-200/80 hover:border-[#0056b3] transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 cursor-pointer"
                >
                  {/* Top Header Row: Number & Animated Icon */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-2xl font-black text-slate-400 group-hover:text-[#0056b3] transition-colors">
                      {point.num}
                    </span>
                    <div className="p-2.5 rounded-xl bg-blue-50 text-[#0056b3] border border-blue-100 group-hover:bg-[#0056b3] group-hover:text-white group-hover:scale-110 transition-all duration-300">
                      {point.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0056b3] transition-colors mb-1.5 tracking-tight">
                    {point.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                    {point.desc}
                  </p>

                  {/* Smooth Expanding Orange Accent Line */}
                  <div className="mt-4 pt-2 relative">
                    <div className="h-[1.5px] w-full bg-slate-100 group-hover:bg-blue-100 transition-colors" />
                    <div className="absolute bottom-0 left-0 h-[2.5px] w-0 bg-[#ff6b00] group-hover:w-full transition-all duration-500 rounded-full" />
                  </div>
                </motion.div>
              ))}
            </div>

          </div>

          {/* Mobile Technical Vertical Connecting Guide Line */}
          <div className="lg:hidden absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-blue-200 to-transparent pointer-events-none -translate-x-1/2 z-0" />

        </div>

      </div>
    </section>
  );
};
