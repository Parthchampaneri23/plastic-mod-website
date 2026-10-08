'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const inquiryUrl = `/contact?product=${encodeURIComponent(product.name)}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className="group bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1"
    >
      {/* Image container */}
      <div className="relative w-full h-56 bg-slate-100 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-500 ease-out"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Title */}
        <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-1.5">
          {product.name}
        </h3>

        {/* Short Description */}
        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-3 flex-grow">
          {product.shortDescription}
        </p>



        {/* CTAs */}
        <div className="grid grid-cols-2 gap-2 pt-3 border-t border-slate-100 mt-auto">
          <Link
            href={`/products/${product.slug}`}
            className="inline-flex items-center justify-center text-xs sm:text-sm font-semibold text-blue-600 bg-blue-50 hover:bg-blue-100 border border-blue-200/60 rounded-lg px-3 py-2 transition-colors group/btn"
          >
            <span>View Details</span>
            <svg
              className="w-3.5 h-3.5 ml-1 transition-transform group-hover/btn:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>

          <Link
            href={inquiryUrl}
            className="inline-flex items-center justify-center text-xs sm:text-sm font-semibold text-white bg-[#0056b3] hover:bg-blue-800 rounded-lg px-3 py-2 transition-colors shadow-sm"
          >
            Send Inquiry
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
