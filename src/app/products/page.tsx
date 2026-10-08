'use client';

import React, { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import ProductHero from '@/components/products/ProductHero';
import ProductSearch from '@/components/products/ProductSearch';
import ProductGrid from '@/components/products/ProductGrid';
import { PRODUCTS } from '@/data/products';

function ProductsContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category') || '';

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(categoryParam);

  // Sync category param if query changes
  React.useEffect(() => {
    if (categoryParam !== selectedCategory) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category Filter
      if (selectedCategory && product.categorySlug !== selectedCategory) {
        return false;
      }

      // Search Term Filter
      if (searchTerm.trim() !== '') {
        const query = searchTerm.toLowerCase().trim();
        const matchName = product.name.toLowerCase().includes(query);
        const matchCategory = product.category.toLowerCase().includes(query);
        const matchApp = product.application.toLowerCase().includes(query);
        const matchKeywords = product.keywords.some((k) => k.toLowerCase().includes(query));
        const matchSpecs = product.specifications.some(
          (s) => s.label.toLowerCase().includes(query) || s.value.toLowerCase().includes(query)
        );

        return matchName || matchCategory || matchApp || matchKeywords || matchSpecs;
      }

      return true;
    });
  }, [searchTerm, selectedCategory]);

  const handleClearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col" suppressHydrationWarning>
      <Header />
      <main className="flex-grow">
        {/* Hero Banner */}
        <ProductHero />

        {/* Product Search & Category Filters */}
        <ProductSearch
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        {/* Main Catalog Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            {/* Section Header */}
            <div className="mb-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/90 text-[#0056b3] text-xs font-bold uppercase tracking-wider mb-4">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff6b00] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#ff6b00]"></span>
                </span>
                OUR PRODUCTS
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight leading-[1.12] mb-4">
                Mould Solutions for <span className="text-[#0056b3]">Every Production Need</span>
              </h2>
              <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed max-w-3xl">
                Explore our range of precision moulds for PET preforms, jars, ISBM applications, and extrusion blow moulding.
              </p>
            </div>

            {/* Product Grid */}
            <ProductGrid products={filteredProducts} onClearFilters={handleClearFilters} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-50 pt-32 text-center text-slate-500">Loading catalog...</div>}>
      <ProductsContent />
    </Suspense>
  );
}
