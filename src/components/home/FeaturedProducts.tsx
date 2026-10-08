'use client';

import React from 'react';
import Link from 'next/link';
import { FEATURED_PRODUCTS } from '@/data/home';
import { SectionHeading } from '../SectionHeading';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const FeaturedProducts: React.FC = () => {
  return (
    <section id="featured-products" className="py-13 bg-slate-50 relative overflow-hidden">
      {/* Subtle Grid Background */}
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
          CATEGORY FLAGSHIP SHOWCASE
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
              Featured Mold Products.<br />
              <span className="text-[#0056b3]">Flagship Tooling Series.</span>
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
              Explore flagship high-performance tooling solutions engineered for <strong className="text-slate-900 font-medium">each of our 3 core mold categories</strong> with guaranteed <strong className="text-[#0056b3] font-medium">5M+ cycle tool life</strong>.
            </p>

            {/* Micro Technical Highlight Pills */}
            <div className="flex items-center flex-wrap gap-2.5 mt-3.5">
              <span className="text-[11px] font-medium text-[#0056b3] bg-blue-50 border border-blue-200/90 px-3 py-1 rounded-full flex items-center gap-1.5 shadow-2xs hover:bg-[#0056b3] hover:text-white transition-all duration-300 cursor-pointer">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0056b3]"></span>
                Preform, ISBM & EBM Tooling
              </span>
              <span className="text-[11px] font-medium text-slate-800 bg-slate-100 border border-slate-200 px-3 py-1 rounded-full flex items-center gap-1.5 shadow-2xs hover:bg-[#ff6b00] hover:text-white transition-all duration-300 cursor-pointer">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00]"></span>
                Uddeholm S136 Steel
              </span>
            </div>
          </motion.div>
        </div>

        {/* 3 Featured Products Grid (1 from each main category) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURED_PRODUCTS.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="h-full"
            >
              <Link
                href={`/products/${product.slug}#details`}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl hover:border-[#0056b3] transition-all duration-500 flex flex-col justify-between group h-full block cursor-pointer"
              >
                <div>
                  {/* Clean Image Container with Zoom */}
                  <div className="h-64 relative overflow-hidden bg-slate-900">
                    <motion.img
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.7 }}
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute top-3 left-3 bg-[#0056b3] text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                      {product.category}
                    </div>
                  </div>

                  {/* Card Body: Product Name & Description */}
                  <div className="p-6 space-y-2">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-[#0056b3] transition-colors leading-snug">
                      {product.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {product.shortDesc}
                    </p>
                  </div>
                </div>

                {/* View Details Action Button */}
                <div className="p-6 pt-0">
                  <div className="w-full py-3 px-4 rounded-xl border border-blue-100 bg-blue-50/60 font-bold text-[#0056b3] text-sm flex items-center justify-center gap-2 group-hover:bg-[#0056b3] group-hover:text-white group-hover:border-[#0056b3] transition-all duration-300 shadow-2xs">
                    <span>View Product Details</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>

                {/* Hover Bottom Bar */}
                <div className="h-1.5 w-full bg-gradient-to-r from-[#0056b3] via-[#ff6b00] to-[#0056b3] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
