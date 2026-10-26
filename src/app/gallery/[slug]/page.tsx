import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import {
  ChevronRight,
  ArrowLeft,
  Sparkles,
  Layers,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '@/data/gallery';

interface GalleryDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return GALLERY_ITEMS.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: GalleryDetailPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const item = GALLERY_ITEMS.find((i) => i.slug === resolvedParams.slug);

  if (!item) {
    return {
      title: 'Gallery Detail | Patel Mould Industries',
    };
  }

  return {
    title: `${item.title} | Patel Mould Industries Gallery`,
    description: item.shortDescription,
  };
}

export default async function GalleryDetailPage({ params }: GalleryDetailPageProps) {
  const resolvedParams = await params;
  const item = GALLERY_ITEMS.find((i) => i.slug === resolvedParams.slug);

  if (!item) {
    notFound();
  }

  // Related items from same category
  const relatedItems = GALLERY_ITEMS.filter(
    (i) => i.category === item.category && i.slug !== item.slug
  ).slice(0, 3);

  // If less than 3, add other items
  if (relatedItems.length < 3) {
    const extra = GALLERY_ITEMS.filter((i) => i.slug !== item.slug && !relatedItems.includes(i)).slice(
      0,
      3 - relatedItems.length
    );
    relatedItems.push(...extra);
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans" suppressHydrationWarning>
      <Header />

      <main className="flex-grow">
        {/* Banner Hero */}
        <section className="relative w-full h-[260px] sm:h-[340px] md:h-[380px] pt-28 sm:pt-32 pb-8 flex items-center overflow-hidden bg-slate-950">
          <div className="absolute inset-0 z-0">
            <Image
              src={item.image || "/gallery-banner.jpg"}
              alt={item.title}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center filter brightness-95"
            />
            {/* Multi-layer Brand Gradient Overlay for Premium Readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0b1f3a]/95 via-[#0b1f3a]/80 to-transparent z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/50 z-10" />
            <div className="absolute inset-0 tech-grid-pattern opacity-20 pointer-events-none z-10" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
            <div className="max-w-3xl space-y-3">

              {/* 1. Back to Gallery button on TOP of heading */}
              <div>
                <Link
                  href="/gallery"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-white/90 hover:text-white backdrop-blur-md border border-white/20 text-xs font-mono uppercase tracking-wider font-semibold transition-colors shadow-sm"
                >
                  <ArrowLeft className="w-3.5 h-3.5 text-[#ff6b00]" />
                  <span>Back to Gallery</span>
                </Link>
              </div>

              {/* 2. Main Title with Website Heading Gradient Accent */}
              {(() => {
                const words = item.title.split(" ");
                const firstPart = words.slice(0, -1).join(" ");
                const lastPart = words[words.length - 1];

                return (
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-none">
                    {firstPart ? `${firstPart} ` : ""}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-[#ff6b00]">
                      {lastPart}
                    </span>
                  </h1>
                );
              })()}

              {/* 3. Breadcrumb Navigation BELOW heading */}
              <div className="inline-flex items-center space-x-2 text-xs font-mono text-white/90 bg-[#0b1f3a]/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-blue-400/30 uppercase tracking-wider shadow-sm">
                <Link href="/" className="hover:text-[#ff6b00] transition-colors flex items-center gap-1 font-semibold">
                  Home
                </Link>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                <Link href="/gallery" className="hover:text-[#ff6b00] transition-colors font-semibold">
                  Gallery
                </Link>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                <span className="text-blue-300 font-bold truncate max-w-[200px] sm:max-w-none">
                  {item.title}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Details Body */}
        <section className="py-13 sm:py-13">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

            {/* Top Grid: Left Side (Image & Key Features) + Right Side (Description & Application) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

              {/* Left Column (5 Cols): Image on Top, Key Features Down Below Image */}
              <div className="lg:col-span-5 space-y-5">
                {/* Image Frame */}
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-md">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover object-center"
                    priority
                  />
                </div>

                {/* Key Engineering Features - Directly Below Image */}
                {item.keyHighlights && item.keyHighlights.length > 0 && (
                  <div className="bg-white rounded-2xl border border-slate-200/90 shadow-md p-6 space-y-4">
                    <h3 className="text-xs font-mono font-bold text-[#0056b3] uppercase tracking-wider flex items-center gap-1.5 pb-3 border-b border-slate-100">
                      <CheckCircle2 className="w-4 h-4 text-[#ff6b00]" />
                      <span>Key Engineering Features</span>
                    </h3>
                    <ul className="space-y-3">
                      {item.keyHighlights.map((hl, i) => (
                        <li key={i} className="text-xs text-slate-700 flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00] shrink-0 mt-1.5" />
                          <span className="leading-relaxed">{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

              </div>

              {/* Right Column (7 Cols): Title, Long Description, Industrial Application & Action CTAs */}
              <div className="lg:col-span-7 space-y-6">
                <div className="bg-white rounded-2xl border border-slate-200/90 shadow-md p-6 sm:p-8 space-y-6">
                  {/* Header Block */}
                  <div className="space-y-2 pb-5 border-b border-slate-100">
                    <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#0056b3] uppercase tracking-wider">
                      <Sparkles className="w-3.5 h-3.5 text-[#ff6b00]" />
                      <span>ENGINEERING SPECIFICATION &amp; INSIGHT</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
                      {item.title}
                    </h2>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal pt-1">
                      {item.shortDescription}
                    </p>
                  </div>

                  {/* Long Detailed Description */}
                  <div className="space-y-3 pb-5 border-b border-slate-100">
                    <h3 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                      Detailed Engineering Overview
                    </h3>
                    <p className="text-sm text-slate-700 leading-relaxed font-normal">
                      {item.fullDescription}
                    </p>
                  </div>

                  {/* Industrial Application below description */}
                  {item.applicationContext && (
                    <div className="space-y-2 pb-5 border-b border-slate-100">
                      <h3 className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider">
                        Industrial Application
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {item.applicationContext}
                      </p>
                    </div>
                  )}


                </div>
              </div>

            </div>

            {/* Related Gallery Items Section */}
            <div className="space-y-6 pt-6 border-t border-slate-200">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    More from {item.category}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Explore related machinery, tooling, and process stages.
                  </p>
                </div>
                <Link
                  href="/gallery"
                  className="text-xs font-bold text-[#0056b3] hover:text-[#ff6b00] transition-colors flex items-center gap-1"
                >
                  <span>View All Gallery</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {relatedItems.map((rel) => (
                  <Link
                    key={rel.id}
                    href={`/gallery/${rel.slug}`}
                    className="group rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:border-blue-300 transition-all flex flex-col"
                  >
                    <div className="relative w-full h-44 bg-slate-950 overflow-hidden">
                      <Image
                        src={rel.image}
                        alt={rel.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4 flex-grow flex flex-col justify-between space-y-2">
                      <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#0056b3] transition-colors line-clamp-1">
                        {rel.title}
                      </h4>
                      <p className="text-xs text-slate-500 line-clamp-2">
                        {rel.shortDescription}
                      </p>
                      <div className="pt-2 text-xs font-semibold text-[#ff6b00] flex items-center gap-1">
                        <span>View Details</span>
                        <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
