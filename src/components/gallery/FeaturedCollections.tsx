'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { GalleryCategory } from '@/data/gallery';
import { FeaturedCollectionItem } from '@/services/galleryService';

interface FeaturedCollectionsProps {
  collections?: FeaturedCollectionItem[];
  onSelectCategory: (category: GalleryCategory) => void;
}

export const FeaturedCollections: React.FC<FeaturedCollectionsProps> = ({
  collections = [],
  onSelectCategory,
}) => {
  const displayCollections =
    collections && collections.length > 0
      ? collections
      : [
          {
            title: 'Inside Our Facility',
            tagline: 'World-Class Toolroom Infrastructure',
            description:
              'Tour our 25,000+ sq. ft. precision manufacturing bay equipped with heavy gantry cranes, climate-stabilized zones, and integrated CAD/CAM cells.',
            image: '/infrastructure/facility-hero.jpg',
            category: 'Manufacturing Facility' as GalleryCategory,
            badge: '25,000+ Sq. Ft. Facility',
          },
          {
            title: 'Precision in Every Detail',
            tagline: 'Sub-Micron Machining & Metrology',
            description:
              'Explore high-speed 5-axis CNC machining centers, mirror EDM spark erosion stations, and Zeiss 3D CMM sub-micron inspection.',
            image: '/infrastructure/cnc-machining.jpg',
            category: 'Machinery' as GalleryCategory,
            badge: '±0.002mm Tolerance',
          },
          {
            title: 'Engineered Mold Solutions',
            tagline: 'High-Cavitation & ISBM Tooling',
            description:
              'Discover balanced hot runner preform molds up to 96 cavities, single-stage ISBM systems, and rugged EBM jerry can canisters.',
            image: '/product/high-cavitation-preform-mold.png',
            category: 'Products' as GalleryCategory,
            badge: 'Up to 96 Cavities',
          },
        ];

  return (
    <section className="py-10 sm:py-13 bg-white border-b border-slate-200 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-[#0056b3] text-xs font-mono font-bold uppercase tracking-wider">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff6b00] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#ff6b00]"></span>
            </span>
            <span>CURATED HIGHLIGHTS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight leading-[1.15]">
            Featured <span className="text-[#0056b3]">Gallery Collections</span>
          </h2>
        </div>

        {/* 3 Featured Cards (Compact) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {displayCollections.map((col, index) => (
            <div
              key={index}
              onClick={() => onSelectCategory(col.category as GalleryCategory)}
              className="group relative rounded-2xl overflow-hidden bg-white border border-slate-200/90 hover:border-blue-400 hover:shadow-lg transition-all duration-300 flex flex-col justify-between shadow-sm cursor-pointer hover:-translate-y-0.5"
            >
              {/* Image Banner */}
              <div className="relative w-full h-44 overflow-hidden bg-slate-100">
                <Image
                  src={col.image || '/infrastructure/facility-hero.jpg'}
                  alt={col.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Text Body - Clean & Compact */}
              <div className="p-4 flex items-center justify-between gap-3">
                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0056b3] transition-colors line-clamp-1">
                  {col.title}
                </h3>

                <span className="shrink-0 inline-flex items-center gap-1 text-xs font-bold text-[#ff6b00] group-hover:text-[#e56000] transition-colors">
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
