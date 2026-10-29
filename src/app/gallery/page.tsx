import React from 'react';
import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { GalleryHero } from '@/components/gallery/GalleryHero';
import { GalleryContainer } from '@/components/gallery/GalleryContainer';
import { getDynamicGalleryContent } from '@/services/galleryService';

export const metadata: Metadata = {
  title: 'Gallery | Patel Mould Industries Gujarat India',
  description:
    'Explore the Patel Mould Industries manufacturing facility, high-speed 5-axis CNC machinery, spark EDM toolroom, precision PET preform molds, and Zeiss 3D CMM quality inspection in Gujarat, India.',
  keywords:
    'Plastic mold gallery India, toolroom photos Gujarat, CNC mold manufacturing facility, PET preform mold maker images, quality inspection metrology gallery',
};

export default async function GalleryPage() {
  const data = await getDynamicGalleryContent();

  return (
    <div
      className="min-h-screen bg-slate-50 flex flex-col font-sans"
      suppressHydrationWarning
    >
      {/* 1. Header Navigation */}
      <Header />

      <main className="flex-grow">
        {/* 2. Hero Banner with Toolroom Visual & Breadcrumbs */}
        <GalleryHero data={data.heroBanner} />

        {/* 3. Interactive Gallery with Featured Collections, Filters, Uniform Grid & Lightbox */}
        <GalleryContainer
          intro={data.intro}
          featuredCollections={data.featuredCollections}
          items={data.items}
        />
      </main>

      {/* 4. Footer */}
      <Footer />
    </div>
  );
}
