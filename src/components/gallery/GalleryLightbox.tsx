'use client';

import React, { useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Layers,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { GalleryItem } from '@/data/gallery';

interface GalleryLightboxProps {
  item: GalleryItem | null;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  currentIndex: number;
  totalCount: number;
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  item,
  isOpen,
  onClose,
  onNext,
  onPrev,
  currentIndex,
  totalCount,
}) => {
  // Handle keyboard events (ESC, Left, Right)
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        onNext();
      } else if (e.key === 'ArrowLeft') {
        onPrev();
      }
    },
    [isOpen, onClose, onNext, onPrev]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || !item) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-slate-950/90 backdrop-blur-md"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label={item.title}
      >
        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-5xl bg-[#0b1f3a] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
          onClick={(e) => e.stopPropagation()} // Prevent close on modal content click
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-slate-800 bg-[#071526]/80 text-white shrink-0">
            <div className="flex items-center gap-3 min-w-0 pr-4">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#ff6b00]/20 text-[#ff6b00] border border-[#ff6b00]/40 uppercase tracking-wider shrink-0">
                {item.category}
              </span>
              <span className="text-xs text-slate-400 font-mono hidden sm:inline-block shrink-0">
                {currentIndex + 1} of {totalCount}
              </span>
              <h3 className="text-sm sm:text-base font-bold text-white truncate">
                {item.title}
              </h3>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-1.5 sm:p-2 rounded-xl bg-slate-800 hover:bg-red-600/80 text-slate-300 hover:text-white transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
              aria-label="Close image preview"
              title="Close (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Main Visual & Info Area */}
          <div className="grid grid-cols-1 lg:grid-cols-12 flex-grow overflow-y-auto">
            {/* Visual Container */}
            <div className="lg:col-span-8 bg-slate-950/70 relative flex items-center justify-center p-3 sm:p-6 min-h-[280px] sm:min-h-[400px]">
              <div className="relative w-full h-[260px] sm:h-[380px] md:h-[460px] max-h-[60vh] flex items-center justify-center">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 70vw"
                  className="object-contain"
                  priority
                />
              </div>

              {/* Navigation Controls Overlay */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onPrev();
                }}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-slate-900/80 hover:bg-[#0056b3] text-white border border-slate-700 hover:border-blue-400 shadow-xl transition-all duration-200 cursor-pointer"
                aria-label="Previous image"
                title="Previous (Left Arrow)"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onNext();
                }}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-slate-900/80 hover:bg-[#0056b3] text-white border border-slate-700 hover:border-blue-400 shadow-xl transition-all duration-200 cursor-pointer"
                aria-label="Next image"
                title="Next (Right Arrow)"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            {/* Details Sidebar in Lightbox */}
            <div className="lg:col-span-4 p-5 sm:p-6 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-slate-800 bg-[#091a30] text-slate-200 space-y-4">
              <div className="space-y-4">
                <div>
                  <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-[#ff6b00]" />
                    <span>{item.badge}</span>
                  </div>
                  <h4 className="text-lg font-bold text-white leading-snug">
                    {item.title}
                  </h4>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {item.shortDescription}
                </p>

                {/* Highlights List */}
                {item.keyHighlights && item.keyHighlights.length > 0 && (
                  <div className="space-y-2 pt-1 border-t border-slate-800">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Key Highlights
                    </span>
                    <ul className="space-y-1.5">
                      {item.keyHighlights.slice(0, 3).map((hl, idx) => (
                        <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00] shrink-0 mt-1.5" />
                          <span className="line-clamp-2">{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Quick Technical Specs */}
                {item.specifications && item.specifications.length > 0 && (
                  <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800/80 space-y-1.5">
                    <span className="text-[10px] font-bold text-blue-300 uppercase tracking-wider block">
                      Technical Spec
                    </span>
                    <div className="space-y-1 text-xs">
                      {item.specifications.slice(0, 2).map((spec, i) => (
                        <div key={i} className="flex justify-between items-center text-[11px]">
                          <span className="text-slate-400">{spec.label}:</span>
                          <span className="font-semibold text-white">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Action Buttons to open full detail page or category */}
              <div className="pt-4 border-t border-slate-800 flex flex-col gap-2.5">
                <Link
                  href={`/gallery/${item.slug}`}
                  onClick={onClose}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#0056b3] to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md group"
                >
                  <span>View Full Details</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                {item.relatedCategoryLink && (
                  <Link
                    href={item.relatedCategoryLink}
                    onClick={onClose}
                    className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-300 hover:text-white text-xs font-medium transition-colors"
                  >
                    <span>Explore Section</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
