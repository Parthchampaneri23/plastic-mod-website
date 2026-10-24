import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, ArrowLeft, CheckCircle2, ArrowRight, ShieldCheck, HelpCircle } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { INDUSTRIES_DATA, IndustryItem } from "@/data/industries";
import { PRODUCTS } from "@/data/products";
import ProductCard from "@/components/products/ProductCard";

interface IndustryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return INDUSTRIES_DATA.map((ind) => ({
    slug: ind.slug,
  }));
}

export async function generateMetadata({ params }: IndustryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = INDUSTRIES_DATA.find((item) => item.slug === slug);

  if (!industry) {
    return {
      title: "Industry Not Found | Patel Mould Industries",
    };
  }

  return {
    title: `${industry.name} Mould Applications | Patel Mould Industries`,
    description: industry.heroSubheadline,
    openGraph: {
      title: `${industry.name} Mould Solutions - Patel Mould Industries`,
      description: industry.heroSubheadline,
      images: [industry.image],
    },
  };
}

export default async function IndustryDetailPage({ params }: IndustryPageProps) {
  const { slug } = await params;
  const industry = INDUSTRIES_DATA.find((item) => item.slug === slug);

  if (!industry) {
    notFound();
  }

  // Find related products matching the industry's relatedProductSlugs
  const relatedProducts = PRODUCTS.filter((prod) =>
    industry.relatedProductSlugs.includes(prod.slug)
  );

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800">
      {/* 1. Global Navigation */}
      <Header />

      <main className="flex-1">
        {/* ========================================================================= */}
        {/* SECTION 1: INDUSTRY HERO BANNER                                           */}
        {/* ========================================================================= */}
        <section className="relative w-full h-[260px] sm:h-[340px] md:h-[380px] pt-28 sm:pt-32 pb-8 flex items-center overflow-hidden bg-slate-950">
          {/* Background Industry Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src={industry.image}
              alt={`${industry.name} Industrial Moulding Environment`}
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
              {/* 1. Back to Industries button on TOP of heading */}
              <div>
                <Link
                  href="/industries"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-white/90 hover:text-white backdrop-blur-md border border-white/20 text-xs font-mono uppercase tracking-wider font-semibold transition-colors shadow-sm"
                >
                  <ArrowLeft className="w-3.5 h-3.5 text-[#ff6b00]" />
                  <span>Back to Industries</span>
                </Link>
              </div>

              {/* 2. Main Industry Title with Website Heading Gradient Accent */}
              {(() => {
                const words = industry.name.split(" ");
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
                <Link href="/industries" className="hover:text-[#ff6b00] transition-colors font-semibold">
                  Industries
                </Link>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                <span className="text-blue-300 font-bold truncate max-w-[160px] sm:max-w-none">
                  {industry.name}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 2: INDUSTRY OVERVIEW & CRITICAL REQUIREMENTS                      */}
        {/* ========================================================================= */}
        <section className="py-13 sm:py-13 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              {/* Left Column: Descriptive Overview (7 Cols) */}
              <div className="lg:col-span-7 space-y-6">
                <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight leading-snug">
                  Precision Moulding Standards for{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0056b3] to-[#ff6b00]">
                    {industry.name}
                  </span>
                </h2>

                <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                  {industry.overviewParagraphs.map((paragraph, idx) => (
                    <p key={idx} className="font-normal">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Subtle reassurance quote */}
                <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border-l-4 border-[#0056b3] text-xs sm:text-sm text-slate-700 italic">
                  &ldquo;Every mould designed for the {industry.name.toLowerCase()} sector undergoes finite element flow analysis, cavity balance verification, and continuous cycle testing prior to dispatch.&rdquo;
                </div>
              </div>

              {/* Right Column: Key Critical Requirements Grid (5 Cols) */}
              <div className="lg:col-span-5 bg-gradient-to-b from-slate-50 to-slate-100/60 rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm">
                {/* Refined Header */}
                <div className="pb-4 mb-4 border-b border-slate-200/80">
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-900 tracking-tight leading-snug">
                    Key Manufacturing Requirements
                  </h3>
                </div>

                {/* Requirements List styled like CncMachiningSection */}
                <div className="space-y-3">
                  {industry.keyRequirements.map((req, i) => (
                    <div
                      key={i}
                      className="group relative p-3.5 sm:p-4 rounded-xl border border-slate-200/80 bg-white hover:bg-gradient-to-r hover:from-blue-50/40 hover:to-white hover:border-[#0056b3]/40 shadow-2xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex items-start gap-3.5 cursor-default overflow-hidden"
                    >
                      {/* Left accent gradient on hover */}
                      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#0056b3] to-[#ff6b00] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Icon Badge */}
                      <div className="w-8 h-8 rounded-lg bg-blue-50/80 border border-blue-200/80 text-[#0056b3] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#0056b3] group-hover:text-white group-hover:border-[#0056b3] transition-all duration-300">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs sm:text-[13.5px] font-semibold text-slate-900 group-hover:text-[#0056b3] transition-colors duration-200 leading-snug">
                          {req.label}
                        </h4>
                        <p className="text-[11.5px] sm:text-xs text-slate-600 mt-0.5 leading-relaxed">
                          {req.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3: RELATED MOULDS & PRODUCTS                                      */}
        {/* ========================================================================= */}
        <section className="py-13 sm:py-13 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-[#0056b3] text-xs font-bold uppercase tracking-wider mb-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff6b00] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#ff6b00]"></span>
                  </span>
                  <span>MOULD PLATFORMS</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">
                  Related Moulds &amp; Tooling Systems
                </h2>
              </div>

              <Link
                href="/products"
                className="text-xs sm:text-sm font-semibold text-[#0056b3] hover:text-[#ff6b00] transition-colors inline-flex items-center gap-1 group"
              >
                <span>View All Products</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Display products linked to this industry */}
            {relatedProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {relatedProducts.map((product) => (
                  <ProductCard key={product.slug} product={product} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-xl p-8 text-center border border-slate-200 max-w-xl mx-auto">
                <HelpCircle className="w-10 h-10 text-slate-400 mx-auto mb-3" />
                <h3 className="text-base font-semibold text-slate-900">
                  Custom Engineering Tooling
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 mb-4">
                  We engineer bespoke custom moulds for specialized {industry.name.toLowerCase()} applications directly from your 3D CAD models.
                </p>
                <Link
                  href={`/contact?industry=${industry.slug}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0056b3] text-white text-xs font-semibold hover:bg-[#0b1f3a] transition-colors"
                >
                  Consult Our Tooling Engineers
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 4: INDUSTRY-SPECIFIC APPLICATIONS (EDITORIAL LAYOUT)              */}
        {/* ========================================================================= */}
        <section className="py-13 sm:py-13 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-[#0056b3] text-xs font-bold uppercase tracking-wider mb-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff6b00] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#ff6b00]"></span>
                </span>
                <span>FIELD PROVEN DEPLOYMENTS</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">
                Typical Packaging Applications &amp; Use Cases
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
                Representative container profiles manufactured across India and export markets utilizing Patel Mould Industries tooling.
              </p>
            </div>

            {/* Editorial Application Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {industry.applications.map((app, index) => (
                <div
                  key={index}
                  className="bg-slate-50 rounded-2xl p-6 sm:p-7 border border-slate-200/90 hover:border-[#0056b3]/50 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-md"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="w-8 h-8 rounded-lg bg-[#0056b3]/10 text-[#0056b3] font-mono text-xs font-bold flex items-center justify-center">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-semibold text-slate-900 group-hover:text-[#0056b3] transition-colors mb-2.5">
                      {app.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                      {app.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2 font-semibold">
                      Typical Articles
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {app.typicalProducts.map((prod, pIdx) => (
                        <span
                          key={pIdx}
                          className="text-xs font-medium bg-white text-slate-700 px-2.5 py-1 rounded-md border border-slate-200 shadow-2xs"
                        >
                          {prod}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 5: ENQUIRY CTA                                                    */}
        {/* ========================================================================= */}
        <section className="py-13 sm:py-13 bg-white border-t border-slate-200 relative overflow-hidden">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 mb-4">
              Looking for the Right Mould Solution?
            </h2>

            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed font-normal">
              Discuss your application requirements with Patel Mould Industries to explore a suitable mould solution engineered for your machine specifications and target cycle times.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={`/contact?industry=${industry.slug}#inquiry-section`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#ff6b00] hover:bg-[#e05e00] text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-300"
              >
                <span>Enquire Now for {industry.name}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/industries"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm border border-slate-300 transition-all duration-300"
              >
                <span>Browse Other Industries</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
