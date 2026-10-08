'use client';

import React from 'react';
import ProductCard from '@/components/products/ProductCard';
import { Product } from '@/data/products';

interface RelatedProductsProps {
  relatedProducts: Product[];
}

export default function RelatedProducts({ relatedProducts }: RelatedProductsProps) {
  if (!relatedProducts || relatedProducts.length === 0) return null;

  return (
    <section className="pt-8 border-t border-slate-200">
      <div className="mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/90 text-[#0056b3] text-xs font-bold uppercase tracking-wider mb-2">
          EXPLORE CATALOG
        </div>
        <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
          Related Mould Products
        </h3>
        <p className="text-sm text-slate-600 font-normal">
          Explore complementary tooling solutions in the same packaging category.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedProducts.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </section>
  );
}
