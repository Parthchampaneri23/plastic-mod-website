'use client';

import React, { useState } from 'react';
import { SectionHeading } from '../SectionHeading';
import {
  ShieldCheck,
  Target,
  FlaskConical,
  Cpu,
  CheckCircle2,
  FileCheck,
  Layers,
  Sparkles,
  Flame,
  Activity,
  ArrowRight,
  Eye,
  Microscope,
  Award,
  BarChart3,
  Gauge
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const QualityTechnology: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'standards' | 'inspection' | 'testing' | 'technology'>('standards');

  return (
    <section id="quality-technology" className="py-13 bg-white relative border-t border-b border-slate-200 overflow-hidden">
      {/* Background Tech Pattern */}
      <div className="absolute inset-0 tech-grid-pattern opacity-30 pointer-events-none" />

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
          ZERO-DEFECT TOOLING GUARANTEE
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
              Quality Standards &<br />
              <span className="text-[#0056b3]">Technology Highlights.</span>
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
              Explore our 4-pillar quality framework engineered to deliver <strong className="text-slate-900 font-medium">±0.002mm sub-micron accuracy</strong>, flashless output, and <strong className="text-[#0056b3] font-medium">5,000,000+ shot tool lifespan</strong>.
            </p>

            {/* Micro Technical Highlight Pills */}
            <div className="flex items-center flex-wrap gap-2.5 mt-3.5">
              <span className="text-[11px] font-medium text-[#0056b3] bg-blue-50 border border-blue-200/90 px-3 py-1 rounded-full flex items-center gap-1.5 shadow-2xs hover:bg-[#0056b3] hover:text-white transition-all duration-300 cursor-pointer">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0056b3]"></span>
                ±0.002mm Zeiss CMM
              </span>
              <span className="text-[11px] font-medium text-slate-800 bg-slate-100 border border-slate-200 px-3 py-1 rounded-full flex items-center gap-1.5 shadow-2xs hover:bg-[#ff6b00] hover:text-white transition-all duration-300 cursor-pointer">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00]"></span>
                Full Trial Video & Report
              </span>
            </div>
          </motion.div>
        </div>

        {/* Interactive Tab Selector Pill Menu */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-12">
          <button
            onClick={() => setActiveTab('standards')}
            className={`px-5 py-3 rounded-2xl font-semibold text-xs sm:text-sm transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-xs ${
              activeTab === 'standards'
                ? 'bg-[#0056b3] text-white shadow-lg shadow-blue-900/20 scale-105'
                : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <ShieldCheck className={`w-4 h-4 ${activeTab === 'standards' ? 'text-white' : 'text-[#0056b3]'}`} />
            <span>Quality Standards</span>
          </button>

          <button
            onClick={() => setActiveTab('inspection')}
            className={`px-5 py-3 rounded-2xl font-semibold text-xs sm:text-sm transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-xs ${
              activeTab === 'inspection'
                ? 'bg-[#0056b3] text-white shadow-lg shadow-blue-900/20 scale-105'
                : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <Target className={`w-4 h-4 ${activeTab === 'inspection' ? 'text-white' : 'text-[#0056b3]'}`} />
            <span>Inspection Process</span>
          </button>

          <button
            onClick={() => setActiveTab('testing')}
            className={`px-5 py-3 rounded-2xl font-semibold text-xs sm:text-sm transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-xs ${
              activeTab === 'testing'
                ? 'bg-[#0056b3] text-white shadow-lg shadow-blue-900/20 scale-105'
                : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <FlaskConical className={`w-4 h-4 ${activeTab === 'testing' ? 'text-white' : 'text-[#0056b3]'}`} />
            <span>Testing Facilities</span>
          </button>

          <button
            onClick={() => setActiveTab('technology')}
            className={`px-5 py-3 rounded-2xl font-semibold text-xs sm:text-sm transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-xs ${
              activeTab === 'technology'
                ? 'bg-[#0056b3] text-white shadow-lg shadow-blue-900/20 scale-105'
                : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <Cpu className={`w-4 h-4 ${activeTab === 'technology' ? 'text-white' : 'text-[#0056b3]'}`} />
            <span>Technology Highlights</span>
          </button>
        </div>

        {/* Tab Dynamic Animated Content Panel */}
        <AnimatePresence mode="wait">
          {activeTab === 'standards' && (
            <motion.div
              key="tab-standards"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-50 p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm"
            >
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 text-[#0056b3] text-xs font-semibold uppercase tracking-wider">
                  <Award className="w-4 h-4 text-[#ff6b00]" /> ISO 9001:2015 QMS Framework
                </div>
                <h3 className="text-2xl sm:text-3xl font-semibold text-slate-900">
                  Global Industrial Quality Standards
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  Our Quality Management System enforces strict metallurgical traceability, cleanroom compliant mold assembly standards, and zero-defect flashless gating protocols across every PET, ISBM, and EBM tooling project.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200 flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#ff6b00] shrink-0" />
                    <span className="text-xs font-bold text-slate-800">ISO 9001:2015 Certified Toolroom</span>
                  </div>
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200 flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#ff6b00] shrink-0" />
                    <span className="text-xs font-bold text-slate-800">Swedish Uddeholm S136 ESR Steel</span>
                  </div>
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200 flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#ff6b00] shrink-0" />
                    <span className="text-xs font-bold text-slate-800">Zero Flash Injection Tolerance</span>
                  </div>
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200 flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#ff6b00] shrink-0" />
                    <span className="text-xs font-bold text-slate-800">EN 10204 3.1 Mill Certificate</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-200 shadow-md space-y-4">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center justify-between border-b border-slate-100 pb-3">
                  <span>Quality Benchmark</span>
                  <span className="text-[#0056b3] font-semibold">Patel Mould vs Industry</span>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs font-semibold text-slate-800 mb-1.5">
                      <span>Cavity Dimension Accuracy</span>
                      <span className="text-[#0056b3] font-semibold">±0.002 mm</span>
                    </div>
                    <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: "0%" }}
                        animate={{ width: "98%" }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full bg-gradient-to-r from-[#0056b3] via-[#0080ff] to-[#ff6b00]"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-semibold text-slate-800 mb-1.5">
                      <span>Mold Life Longevity</span>
                      <span className="text-[#0056b3] font-semibold">5,000,000+ Shots</span>
                    </div>
                    <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: "0%" }}
                        animate={{ width: "95%" }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="h-full bg-gradient-to-r from-[#0056b3] via-[#0080ff] to-[#ff6b00]"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-semibold text-slate-800 mb-1.5">
                      <span>Gate Vestige Polish</span>
                      <span className="text-[#0056b3] font-semibold">Ra 0.1 Mirror Finish</span>
                    </div>
                    <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="h-full bg-gradient-to-r from-[#0056b3] via-[#0080ff] to-[#ff6b00]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'inspection' && (
            <motion.div
              key="tab-inspection"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              <div className="text-center max-w-2xl mx-auto space-y-2">
                <h3 className="text-2xl sm:text-3xl font-semibold text-slate-900">
                  4-Step Precision Inspection Workflow
                </h3>
                <p className="text-sm text-slate-600">
                  Every component is audited through optical laser scanning and 3D CMM coordinate verification before assembly.
                </p>
              </div>

              {/* 4-Step Horizontal Timeline Card Grid with Staggered Framer Motion */}
              <motion.div
                initial="hidden"
                animate="show"
                variants={{
                  hidden: { opacity: 0 },
                  show: { opacity: 1, transition: { staggerChildren: 0.12 } }
                }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                <motion.div
                  variants={{ hidden: { opacity: 0, y: 25 }, show: { opacity: 1, y: 0 } }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md relative group hover:border-[#0056b3] transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0056b3] font-semibold text-sm flex items-center justify-center mb-4 border border-blue-100 group-hover:bg-[#0056b3] group-hover:text-white transition-colors">
                    01
                  </div>
                  <h4 className="text-base font-semibold text-slate-900 mb-1">Raw Steel Audit</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Ultrasonic flaw detection & hardness testing on Assab/Uddeholm steel blocks.
                  </p>
                  <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-semibold text-[#0056b3] flex items-center gap-1">
                    <Microscope className="w-3.5 h-3.5 text-[#ff6b00]" /> Ultrasonic Inspection
                  </div>
                </motion.div>

                <motion.div
                  variants={{ hidden: { opacity: 0, y: 25 }, show: { opacity: 1, y: 0 } }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md relative group hover:border-[#0056b3] transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0056b3] font-semibold text-sm flex items-center justify-center mb-4 border border-blue-100 group-hover:bg-[#0056b3] group-hover:text-white transition-colors">
                    02
                  </div>
                  <h4 className="text-base font-semibold text-slate-900 mb-1">In-Process CNC Audit</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    On-machine Renishaw touch probe calibration during 5-axis electrode & cavity milling.
                  </p>
                  <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-semibold text-[#0056b3] flex items-center gap-1">
                    <Gauge className="w-3.5 h-3.5 text-[#ff6b00]" /> Renishaw Laser Probe
                  </div>
                </motion.div>

                <motion.div
                  variants={{ hidden: { opacity: 0, y: 25 }, show: { opacity: 1, y: 0 } }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md relative group hover:border-[#0056b3] transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0056b3] font-semibold text-sm flex items-center justify-center mb-4 border border-blue-100 group-hover:bg-[#0056b3] group-hover:text-white transition-colors">
                    03
                  </div>
                  <h4 className="text-base font-semibold text-slate-900 mb-1">Zeiss 3D CMM Metrology</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    100% dimensional scan in 20°C climate lab against original 3D CAD model.
                  </p>
                  <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-semibold text-[#0056b3] flex items-center gap-1">
                    <Target className="w-3.5 h-3.5 text-[#ff6b00]" /> Zeiss 3D Scanning
                  </div>
                </motion.div>

                <motion.div
                  variants={{ hidden: { opacity: 0, y: 25 }, show: { opacity: 1, y: 0 } }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md relative group hover:border-[#0056b3] transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0056b3] font-semibold text-sm flex items-center justify-center mb-4 border border-blue-100 group-hover:bg-[#0056b3] group-hover:text-white transition-colors">
                    04
                  </div>
                  <h4 className="text-base font-semibold text-slate-900 mb-1">FAIR Sample Approval</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    First Article Inspection Report delivered with full CMM data prior to shipping.
                  </p>
                  <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-bold text-[#0056b3] flex items-center gap-1">
                    <FileCheck className="w-3.5 h-3.5 text-[#ff6b00]" /> FAIR Report Certificate
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          )}

          {activeTab === 'testing' && (
            <motion.div
              key="tab-testing"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-slate-50 p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-100 text-[#ff6b00] text-xs font-semibold uppercase tracking-wider">
                  <FlaskConical className="w-4 h-4" /> In-House Sampling Machine Fleet
                </div>
                <h3 className="text-2xl sm:text-3xl font-semibold text-slate-900">
                  Turnkey Trial Pressing (100T - 1200T)
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  We don't ship unproven molds. Our in-house test bay houses high-speed injection and blow molding trial presses ranging from 100-ton to 1200-ton clamping force, replicating your exact production environment.
                </p>

                <div className="space-y-2.5 pt-2 text-xs font-semibold text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#ff6b00]" />
                    <span>Real-time cycle time speed optimization & pressure balancing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#ff6b00]" />
                    <span>Preform wall thickness & optical polarization concentricity audit</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#ff6b00]" />
                    <span>Hydraulic & pneumatic action trial fitting under maximum pressure</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200 text-center space-y-1 shadow-sm">
                  <BarChart3 className="w-6 h-6 text-[#0056b3] mx-auto mb-1" />
                  <div className="text-2xl font-semibold text-slate-900">100T - 1200T</div>
                  <div className="text-[11px] font-semibold text-slate-500">Clamping Force Test Fleet</div>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-slate-200 text-center space-y-1 shadow-sm">
                  <Activity className="w-6 h-6 text-[#ff6b00] mx-auto mb-1" />
                  <div className="text-2xl font-semibold text-slate-900">100% Batch</div>
                  <div className="text-[11px] font-semibold text-slate-500">Trial Sampling Reports</div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'technology' && (
            <motion.div
              key="tab-technology"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              <div className="bg-white p-7 rounded-3xl border border-slate-200 shadow-md hover:border-[#0056b3] transition-colors space-y-4">
                <div className="p-3.5 bg-blue-50 rounded-2xl text-[#0056b3] w-max border border-blue-100">
                  <Cpu className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-semibold text-slate-900">3D Moldflow Thermal Simulation</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Pre-machining thermal and melt flow analysis using Autodesk Moldflow to eliminate air traps, weld lines, and warpage.
                </p>
                <div className="pt-2 text-xs font-semibold text-[#0056b3] flex items-center gap-1">
                  <span>Autodesk Moldflow Integrated</span>
                </div>
              </div>

              <div className="bg-white p-7 rounded-3xl border border-slate-200 shadow-md hover:border-[#ff6b00] transition-colors space-y-4">
                <div className="p-3.5 bg-orange-50 rounded-2xl text-[#ff6b00] w-max border border-orange-100">
                  <Flame className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-semibold text-slate-900">Sequential Hot Runner Gating</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Husky & Mold-Masters hot runner integration with needle valve sequential gating for zero flash and uniform cavity filling.
                </p>
                <div className="pt-2 text-xs font-semibold text-[#ff6b00] flex items-center gap-1">
                  <span>Husky & Mold-Masters Systems</span>
                </div>
              </div>

              <div className="bg-white p-7 rounded-3xl border border-slate-200 shadow-md hover:border-[#0056b3] transition-colors space-y-4">
                <div className="p-3.5 bg-blue-50 rounded-2xl text-[#0056b3] w-max border border-blue-100">
                  <Layers className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-semibold text-slate-900">Conformal Cooling Channel Design</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Advanced 3D curved conformal cooling channels following cavity geometry, reducing mold cycle time up to 30%.
                </p>
                <div className="pt-2 text-xs font-bold text-[#0056b3] flex items-center gap-1">
                  <span>30% Cycle Time Reduction</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};;
