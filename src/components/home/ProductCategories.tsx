'use client';

import React from 'react';
import Link from 'next/link';
import { PRODUCT_CATEGORIES } from '@/data/home';
import { SectionHeading } from '../SectionHeading';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const ProductCategories: React.FC = () => {
  return (
    <section id="product-categories" className="py-13 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

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
          PRODUCT CATEGORIES
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.15]">
              <span className="text-slate-900 block">Precision Moulds for</span>
              <span className="text-[#0056b3] block">Diverse Applications.</span>
            </h2>
          </motion.div>

          {/* Right Column: Description with Vertical Accent Bar & Feature Pills */}
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
              High-precision PET preform, ISBM, and EBM tooling engineered for <strong className="text-slate-900 font-medium">5M+ cycle tool life</strong>, rapid cycle times, and <strong className="text-[#0056b3] font-medium">high-volume container production</strong>.
            </p>

            {/* Micro Highlight Pills */}
            <div className="flex items-center flex-wrap gap-2.5 mt-3.5">
              <span className="text-[11px] font-medium text-[#0056b3] bg-blue-50 border border-blue-200/90 px-3 py-1 rounded-full flex items-center gap-1.5 shadow-2xs hover:bg-[#0056b3] hover:text-white transition-all duration-300 cursor-pointer">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0056b3]"></span>
                Preform & ISBM Tooling
              </span>
              <span className="text-[11px] font-medium text-slate-800 bg-slate-100 border border-slate-200 px-3 py-1 rounded-full flex items-center gap-1.5 shadow-2xs hover:bg-[#ff6b00] hover:text-white transition-all duration-300 cursor-pointer">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00]"></span>
                Zero-Flash Gating
              </span>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRODUCT_CATEGORIES.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="h-full"
            >
              <Link
                href="#featured-products"
                className="block h-full bg-white rounded-3xl overflow-hidden border border-slate-200 flex flex-col justify-between group shadow-sm hover:shadow-2xl hover:border-[#0056b3] transition-all duration-300 cursor-pointer"
              >
                <div>
                  {/* Clean Category Image Box with Zoom */}
                  <div className="relative h-64 overflow-hidden bg-slate-900">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                    />
                  </div>

                  {/* Content Body: Category Name & Description */}
                  <div className="p-6 space-y-3">
                    <h3 className="text-xl sm:text-2xl font-medium text-slate-900 group-hover:text-[#0056b3] transition-colors tracking-tight">
                      {category.name}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed font-normal">
                      {category.shortDesc}
                    </p>
                  </div>
                </div>

                {/* Always Visible View Products Action Button */}
                <div className="p-6 pt-0">
                  <span className="w-full inline-flex items-center justify-center font-bold tracking-wide text-sm px-5 py-3 gap-2 rounded-xl bg-blue-50 text-[#0056b3] border border-blue-200/80 group-hover:bg-[#0056b3] group-hover:text-white group-hover:border-[#0056b3] transition-all duration-300 shadow-2xs">
                    <span>View Products</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
