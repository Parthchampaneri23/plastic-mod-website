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
  ArrowRight,
} from 'lucide-react';
import {
  GALLERY_CATEGORIES,
  GalleryItem,
  GalleryCategory,
} from '@/data/gallery';
import {
  GalleryIntroData,
  FeaturedCollectionItem,
} from '@/services/galleryService';
import { GalleryLightbox } from './GalleryLightbox';
import { FeaturedCollections } from './FeaturedCollections';

interface GalleryContainerProps {
  intro?: GalleryIntroData;
  featuredCollections?: FeaturedCollectionItem[];
  items?: GalleryItem[];
}

export const GalleryContainer: React.FC<GalleryContainerProps> = ({
  intro,
  featuredCollections = [],
  items = [],
}) => {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>('All Images');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const galleryItems = items && items.length > 0 ? items : [];

  // Filter items based on active category
  const filteredItems = useMemo(() => {
    if (selectedCategory === 'All Images') {
      return galleryItems;
    }
    return galleryItems.filter((item) => item.category === selectedCategory);
  }, [selectedCategory, galleryItems]);

  // Count items per category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {
      'All Images': galleryItems.length,
    };
    GALLERY_CATEGORIES.forEach((cat) => {
      if (cat !== 'All Images') {
        counts[cat] = galleryItems.filter((i) => i.category === cat).length;
      }
    });
    return counts;
  }, [galleryItems]);

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

  const introBadge = intro?.badge || 'COMPLETE VISUAL ARCHIVE';
  const headingPart1 = intro?.headingPart1 || 'Explore Our';
  const headingHighlight = intro?.headingHighlight || 'Precision Portfolio';

  return (
    <>
      {/* Featured Collections Section */}
      <FeaturedCollections
        collections={featuredCollections}
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
              <span>{introBadge}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight leading-[1.15]">
              {headingPart1}{' '}
              <span className="text-[#0056b3]">{headingHighlight}</span>
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
                    className={`whitespace-nowrap px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer flex items-center gap-2 shrink-0 ${
                      isActive
                        ? 'bg-[#0056b3] text-white shadow-md shadow-blue-900/20 scale-102 border border-[#0056b3]'
                        : 'bg-white text-slate-700 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 shadow-sm'
                    }`}
                  >
                    <span>{category}</span>
                    <span
                      className={`px-1.5 py-0.5 rounded-full text-[10px] font-mono font-semibold transition-colors ${
                        isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
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
                      {/* Image Box */}
                      <div className="relative w-full h-64 overflow-hidden bg-slate-100 shrink-0">
                        <Image
                          src={item.image}
                          alt={item.alt || item.title}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />

                        {/* Top Badges */}
                        <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 z-10">
                          <span className="px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-mono uppercase tracking-wider font-semibold border border-white/20">
                            {item.category}
                          </span>

                          {item.badge && (
                            <span className="px-2.5 py-1 rounded-full bg-[#0056b3]/90 backdrop-blur-md text-white text-[11px] font-bold border border-blue-400/30">
                              {item.badge}
                            </span>
                          )}
                        </div>

                        {/* Quick View Button for Lightbox */}
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            openLightbox(index);
                          }}
                          className="absolute bottom-3 right-3 p-2 rounded-xl bg-slate-900/80 hover:bg-[#ff6b00] text-white transition-all backdrop-blur-md border border-white/20 opacity-0 group-hover:opacity-100 shadow-md cursor-pointer"
                          title="Quick view full size"
                        >
                          <Maximize2 className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Card Content */}
                      <div className="p-5 flex flex-col flex-grow justify-between bg-white">
                        <div className="space-y-2">
                          <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#0056b3] transition-colors leading-snug line-clamp-2">
                            {item.title}
                          </h3>
                          <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                            {item.shortDescription}
                          </p>
                        </div>

                        {/* Bottom Link Action */}
                        <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between">
                          <span className="text-xs font-bold text-[#ff6b00] group-hover:text-[#e56000] inline-flex items-center gap-1 transition-colors">
                            <span>Explore Details</span>
                            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                          </span>

                          <span className="text-[11px] font-mono text-slate-400">
                            /{item.slug}
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

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <GalleryLightbox
          isOpen={lightboxIndex !== null}
          item={filteredItems[lightboxIndex]}
          onClose={closeLightbox}
          onNext={nextLightboxItem}
          onPrev={prevLightboxItem}
          currentIndex={lightboxIndex}
          totalCount={filteredItems.length}
        />
      )}
    </>
  );
};
