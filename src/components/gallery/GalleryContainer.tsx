'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Maximize2,
  ExternalLink,
  ChevronRight,
  Filter,
  CheckCircle2,
  Layers,
  ArrowRight
} from 'lucide-react';
import {
  GALLERY_ITEMS,
  GALLERY_CATEGORIES,
  GalleryItem,
  GalleryCategory
} from '@/data/gallery';
import { GalleryLightbox } from './GalleryLightbox';
import { FeaturedCollections } from './FeaturedCollections';

export const GalleryContainer: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>('All Images');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filter items based on active category
  const filteredItems = useMemo(() => {
    if (selectedCategory === 'All Images') {
      return GALLERY_ITEMS;
    }
    return GALLERY_ITEMS.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  // Count items per category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {
      'All Images': GALLERY_ITEMS.length,
    };
    GALLERY_CATEGORIES.forEach((cat) => {
      if (cat !== 'All Images') {
        counts[cat] = GALLERY_ITEMS.filter((i) => i.category === cat).length;
      }
    });
    return counts;
  }, []);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextLightboxItem = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
  };

  const prevLightboxItem = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <>
      {/* Featured Collections Section */}
      <FeaturedCollections
        onSelectCategory={(cat) => {
          setSelectedCategory(cat);
          const el = document.getElementById('gallery-showcase');
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }}
      />

      {/* Main Gallery Section */}
      <section id="gallery-showcase" className="py-13 sm:py-13 bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

          {/* Section Heading with Animated Blinker */}
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-[#0056b3] text-xs font-mono font-bold uppercase tracking-wider">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff6b00] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#ff6b00]"></span>
              </span>
              <span>COMPLETE VISUAL ARCHIVE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight leading-[1.15]">
              Explore Our <span className="text-[#0056b3]">Precision Portfolio</span>
            </h2>
          </div>

          {/* Interactive Filter Bar */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                <Filter className="w-3.5 h-3.5 text-[#0056b3]" />
                <span>FILTER BY CATEGORY</span>
              </div>
              <div className="text-xs text-slate-500 font-medium">
                Showing <strong className="text-black font-bold">{filteredItems.length}</strong> items in{' '}
                <span className="text-[#0056b3] font-semibold">{selectedCategory}</span>
              </div>
            </div>

            {/* Horizontally scrollable on mobile */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
              {GALLERY_CATEGORIES.map((category) => {
                const isActive = selectedCategory === category;
                const count = categoryCounts[category] || 0;

                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`whitespace-nowrap px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer flex items-center gap-2 shrink-0 ${isActive
                      ? 'bg-[#0056b3] text-white shadow-md shadow-blue-900/20 scale-102 border border-[#0056b3]'
                      : 'bg-white text-slate-700 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 shadow-sm'
                      }`}
                  >
                    <span>{category}</span>
                    <span
                      className={`px-1.5 py-0.5 rounded-full text-[10px] font-mono font-semibold transition-colors ${isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                        }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Uniform, Clean & Consistent Gallery Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => {
                return (
                  <motion.div
                    layout
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.95, y: 15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, delay: (index % 6) * 0.05 }}
                    className="flex flex-col group h-full"
                  >
                    <Link
                      href={`/gallery/${item.slug}`}
                      className="relative rounded-2xl overflow-hidden bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-400/50 transition-all duration-300 flex flex-col h-full cursor-pointer"
                    >
                      {/* Image Frame - Uniform 16:10 Aspect Ratio Across All Cards */}
                      <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-100 shrink-0">
                        <Image
                          src={item.image}
                          alt={item.alt}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover object-center group-hover:scale-106 transition-transform duration-500 ease-out"
                        />
                      </div>

                      {/* Card Content on Base View */}
                      <div className="p-4 flex flex-col justify-between flex-grow space-y-2.5 bg-white">
                        <div className="space-y-1">
                          <div className="flex items-center justify-between text-xs text-slate-400">
                            <span className="font-mono text-[11px] font-semibold text-blue-700">
                              {item.category}
                            </span>
                            <span className="text-[10px] text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                              {item.badge}
                            </span>
                          </div>
                          <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#0056b3] transition-colors leading-snug line-clamp-1">
                            {item.title}
                          </h3>
                          <p className="text-xs text-slate-500 line-clamp-1 leading-relaxed">
                            {item.shortDescription}
                          </p>
                        </div>

                        {/* Single Clean Action Indicator */}
                        <div className="pt-2 border-t border-slate-100 flex items-center justify-end">
                          <span className="inline-flex items-center gap-1 text-xs font-bold text-[#ff6b00] group-hover:text-[#e56000] transition-colors">
                            <span>View Details</span>
                            <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      {/* Lightbox Component */}
      <GalleryLightbox
        item={lightboxIndex !== null ? filteredItems[lightboxIndex] : null}
        isOpen={lightboxIndex !== null}
        onClose={closeLightbox}
        onNext={nextLightboxItem}
        onPrev={prevLightboxItem}
        currentIndex={lightboxIndex ?? 0}
        totalCount={filteredItems.length}
      />
    </>
  );
};
