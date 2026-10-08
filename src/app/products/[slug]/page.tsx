import React from 'react';
import { notFound } from 'next/navigation';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import ProductDetailHero from '@/components/product-detail/ProductDetailHero';
import ProductImageGallery from '@/components/product-detail/ProductImageGallery';
import ProductTechSpecsTable from '@/components/product-detail/ProductTechSpecsTable';
import KeyPerformanceFeatures from '@/components/product-detail/KeyPerformanceFeatures';
import ProductInquiryForm from '@/components/product-detail/ProductInquiryForm';
import ProductDetailScrollHandler from '@/components/product-detail/ProductDetailScrollHandler';
import RelatedProducts from '@/components/product-detail/RelatedProducts';
import { PRODUCTS } from '@/data/products';

interface ProductDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const resolvedParams = await params;
  const product = PRODUCTS.find((p) => p.slug === resolvedParams.slug);

  if (!product) {
    notFound();
  }

  // Get 3 related products from the same category (or other categories if needed)
  const relatedProducts = PRODUCTS.filter(
    (p) => p.categorySlug === product.categorySlug && p.slug !== product.slug
  ).slice(0, 3);

  // Fallback related products if less than 3
  if (relatedProducts.length < 3) {
    const extra = PRODUCTS.filter((p) => p.slug !== product.slug && !relatedProducts.includes(p)).slice(0, 3 - relatedProducts.length);
    relatedProducts.push(...extra);
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col" suppressHydrationWarning>
      <Header />
      <ProductDetailScrollHandler />

      <main className="flex-grow">
        {/* Banner Hero Section using product banner.png */}
        <ProductDetailHero product={product} />

        {/* Main Details Section */}
        <section id="details" className="py-12 md:py-16 scroll-mt-24 sm:scroll-mt-28 lg:scroll-mt-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl space-y-12">
            
            {/* Top Grid: Left Gallery + Right Key Info */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* Left Column: Image Gallery */}
              <div className="lg:col-span-6">
                <ProductImageGallery
                  image={product.image}
                  productName={product.name}
                />
              </div>

              {/* Right Column: Key Details & Overview */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className="inline-block px-3 py-1 rounded-md bg-blue-50 text-[#0056b3] text-xs font-bold uppercase tracking-wider mb-3 border border-blue-200">
                    {product.category}
                  </span>
                  <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-3">
                    {product.name}
                  </h1>
                  <p className="text-slate-600 text-base leading-relaxed font-normal">
                    {product.shortDescription}
                  </p>
                </div>

                {/* Product Overview Block */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                  <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Product Overview
                  </h3>
                  <p className="text-slate-800 text-sm sm:text-base leading-relaxed font-medium">
                    {product.overview}
                  </p>
                </div>

                {/* Full Engineering Description */}
                <div className="space-y-2">
                  <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Engineering Description
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-normal">
                    {product.fullDescription}
                  </p>
                </div>

                {/* Key Performance Features List with Animation */}
                <KeyPerformanceFeatures features={product.features} />

                {/* Action CTAs */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href="#product-inquiry"
                    className="inline-flex items-center justify-center px-6 py-3.5 bg-[#0056b3] hover:bg-blue-800 text-white font-semibold rounded-xl transition-colors shadow-sm text-sm"
                  >
                    Send Inquiry
                  </a>
                  <a
                    href="tel:+917784758347"
                    className="inline-flex items-center justify-center px-6 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold rounded-xl transition-colors text-sm"
                  >
                    Call Technical Expert
                  </a>
                </div>
              </div>
            </div>

            {/* Middle Block: Technical Specifications Table */}
            <ProductTechSpecsTable techSpecs={product.techSpecs} />

            {/* Direct Product Inquiry Form Section */}
            <ProductInquiryForm product={product} />

            {/* Related Products Catalog Section */}
            <RelatedProducts relatedProducts={relatedProducts} />

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
