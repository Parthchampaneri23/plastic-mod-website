import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
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

  const inquiryUrl = `/contact?product=${encodeURIComponent(product.name)}`;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header />
      <main className="flex-grow pt-28 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-xs md:text-sm text-slate-500 font-medium mb-8">
          <Link href="/" className="hover:text-blue-600 transition-colors">
            HOME
          </Link>
          <span>&gt;</span>
          <Link href="/products" className="hover:text-blue-600 transition-colors">
            PRODUCTS
          </Link>
          <span>&gt;</span>
          <span className="text-blue-600 font-semibold">{product.name}</span>
        </nav>

        {/* Detail Card Container */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Left Column: Product Image */}
            <div className="lg:col-span-6 bg-slate-100 relative min-h-[350px] lg:min-h-[480px] p-6 flex items-center justify-center">
              <div className="relative w-full h-full min-h-[320px] rounded-xl overflow-hidden shadow-inner">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  priority
                  className="object-cover object-center"
                />
              </div>
            </div>

            {/* Right Column: Information & Details */}
            <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
              <div>
                {/* Category Badge */}
                <span className="inline-block px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-100">
                  {product.category}
                </span>

                {/* Product Title */}
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
                  {product.name}
                </h1>

                {/* Short Description */}
                <p className="text-slate-600 text-base leading-relaxed mb-6">
                  {product.shortDescription}
                </p>

                {/* Full Description */}
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 mb-6">
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Overview</h3>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    {product.fullDescription}
                  </p>
                </div>

                {/* Key Technical Specifications Table */}
                <div className="mb-8">
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
                    Technical Specifications
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {product.specifications.map((spec, idx) => (
                      <div key={idx} className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                        <span className="block text-xs font-semibold text-slate-500 uppercase">{spec.label}</span>
                        <span className="block text-sm font-bold text-slate-900 mt-0.5">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Product Features List */}
                {product.features && product.features.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
                      Key Highlights & Features
                    </h3>
                    <ul className="space-y-2">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm text-slate-700">
                          <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row gap-4">
                <Link
                  href={inquiryUrl}
                  className="flex-1 inline-flex items-center justify-center text-center px-6 py-3.5 bg-[#0B2545] hover:bg-blue-900 text-white font-semibold rounded-xl transition-colors shadow-md"
                >
                  Send Inquiry for this Product
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center px-6 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold rounded-xl transition-colors"
                >
                  Back to Catalog
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      </main>
      <Footer />
    </div>
  );
}
