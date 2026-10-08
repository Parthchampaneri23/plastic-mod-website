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
  const detailUrl = `/products/${product.slug}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Link
        href={detailUrl}
        className="group bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1 block cursor-pointer"
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
          <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#0056b3] transition-colors mb-1.5">
            {product.name}
          </h3>

          {/* Short Description */}
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 flex-grow">
            {product.shortDescription}
          </p>

          {/* View Details Action Link */}
          <div className="pt-3 border-t border-slate-100 mt-auto flex items-center justify-between">
            <span className="text-xs sm:text-sm font-semibold text-[#0056b3] group-hover:text-blue-800 transition-colors inline-flex items-center">
              View Details
            </span>
            <div className="w-7 h-7 rounded-full bg-blue-50 text-[#0056b3] group-hover:bg-[#0056b3] group-hover:text-white flex items-center justify-center transition-colors">
              <svg
                className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
