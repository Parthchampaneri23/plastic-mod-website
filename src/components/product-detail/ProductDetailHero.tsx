'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowLeft } from 'lucide-react';
import { Product } from '@/data/products';

interface ProductDetailHeroProps {
  product: Product;
}

export default function ProductDetailHero({ product }: ProductDetailHeroProps) {
  return (
    <section className="relative w-full h-[280px] sm:h-[340px] md:h-[380px] pt-28 sm:pt-32 pb-8 flex items-center overflow-hidden bg-slate-950">
      {/* 1. Background Banner Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/product/product banner.png"
          alt={`${product.name} Banner`}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter brightness-95 opacity-100"
        />

        {/* 2. Left Navy Gradient Shading for Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1f3a]/95 via-[#0b1f3a]/70 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/50 z-10" />
        <div className="absolute inset-0 tech-grid-pattern opacity-20 pointer-events-none z-10" />
      </div>

      {/* 3. Left Content Block: Title + Breadcrumbs + Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="max-w-2xl space-y-4">
          
          {/* Back to Products CTA */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              href="/products"
              className="inline-flex items-center space-x-2 text-xs sm:text-sm font-semibold text-white/90 bg-white/10 hover:bg-white/20 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-white/20 transition-all duration-300 group shadow-sm"
            >
              <ArrowLeft className="w-4 h-4 text-blue-300 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Products</span>
            </Link>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-tight"
          >
            {product.name}
          </motion.h1>

          {/* Breadcrumb Navigation Below Title */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="inline-flex flex-wrap items-center space-x-2 text-xs font-mono text-white/90 bg-[#0b1f3a]/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-blue-400/30 uppercase tracking-wider shadow-sm"
          >
            <Link href="/" className="hover:text-[#ff6b00] transition-colors font-semibold">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link href="/products" className="hover:text-[#ff6b00] transition-colors font-semibold">
              Products
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-blue-300 font-bold">
              {product.name}
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
