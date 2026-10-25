import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ChevronRight,
  ArrowLeft,
  Calendar,
  Clock,
  CheckCircle2,
  Share2,
  Sparkles,
  BookOpen,
  ArrowRight,
  Info,
  AlertTriangle,
  Lightbulb,
  Phone,
  Mail,
  FileText,
  Tag
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BLOG_POSTS, BlogPost } from "@/data/blogs";
import { PRODUCTS } from "@/data/products";

interface BlogDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Blog Post Not Found | Patel Mould Industries",
    };
  }

  return {
    title: `${post.title} | Patel Mould Industries Blog`,
    description: post.summary,
    openGraph: {
      title: `${post.title} - Patel Mould Industries`,
      description: post.summary,
      images: [post.image],
    },
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Related products from relatedProductSlugs
  const relatedProducts = post.relatedProductSlugs
    ? PRODUCTS.filter((prod) => post.relatedProductSlugs?.includes(prod.slug))
    : [];

  // Related blogs (other 2 blogs)
  const relatedBlogs = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800" suppressHydrationWarning>
      {/* 1. Global Navigation */}
      <Header />

      <main className="flex-1">
        {/* ========================================================================= */}
        {/* BANNER HERO: Matching Exact Brand Architecture                            */}
        {/* ========================================================================= */}
        <section className="relative w-full h-[280px] sm:h-[350px] md:h-[400px] pt-28 sm:pt-32 pb-8 flex items-center overflow-hidden bg-slate-950">
          <div className="absolute inset-0 z-0">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center filter brightness-95"
            />
            {/* Multi-layer Brand Gradient Overlay for Maximum Readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0b1f3a]/95 via-[#0b1f3a]/85 to-transparent z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/60 z-10" />
            <div className="absolute inset-0 tech-grid-pattern opacity-20 pointer-events-none z-10" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
            <div className="max-w-3xl space-y-3">
              {/* 1. Back to Blogs button on TOP of heading */}
              <div>
                <Link
                  href="/blogs"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-white/90 hover:text-white backdrop-blur-md border border-white/20 text-xs font-mono uppercase tracking-wider font-semibold transition-colors shadow-sm"
                >
                  <ArrowLeft className="w-3.5 h-3.5 text-[#ff6b00]" />
                  <span>Back to Articles</span>
                </Link>
              </div>

              {/* 2. Short Clean Title with Gradient Accent on Last Word */}
              {(() => {
                const displayTitle = post.shortTitle || post.title;
                const words = displayTitle.split(" ");
                const firstPart = words.slice(0, -1).join(" ");
                const lastPart = words[words.length - 1];

                return (
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-tight">
                    {firstPart ? `${firstPart} ` : ""}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-[#ff6b00]">
                      {lastPart}
                    </span>
                  </h1>
                );
              })()}

              {/* 3. Breadcrumb Navigation BELOW heading (Clean, without date badge) */}
              <div className="inline-flex items-center space-x-2 text-xs font-mono text-white/90 bg-[#0b1f3a]/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-blue-400/30 uppercase tracking-wider shadow-sm">
                <Link href="/" className="hover:text-[#ff6b00] transition-colors flex items-center gap-1 font-semibold">
                  Home
                </Link>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                <Link href="/blogs" className="hover:text-[#ff6b00] transition-colors font-semibold">
                  Blogs
                </Link>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                <span className="text-blue-300 font-bold truncate max-w-[200px] sm:max-w-none">
                  {post.shortTitle || post.title}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* ARTICLE BODY & SIDEBAR CONTENT                                            */}
        {/* ========================================================================= */}
        <section className="py-13 sm:py-13">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

              {/* LEFT / MAIN COLUMN (8 cols): Article Content */}
              <article className="lg:col-span-8 space-y-8">

                {/* Primary Hero Feature Image */}
                <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-md">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    className="object-cover object-center"
                  />
                </div>

                {/* Article Header Box with Author Card */}
                <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8 space-y-6">
                  {/* Author + Category Header */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-100">
                    <div className="flex items-center gap-3.5">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#0056b3] to-[#ff6b00] flex items-center justify-center text-white font-bold text-sm shadow-sm">
                        {post.author.name.slice(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-slate-900">{post.author.name}</h3>
                        <p className="text-xs text-slate-500">{post.author.role}</p>
                        <p className="text-[11px] text-[#0056b3] font-semibold">Patel Mould Industries Technical Engineering Div.</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-blue-50 text-[#0056b3] text-xs font-mono uppercase tracking-wider font-bold">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Summary Callout */}
                  <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border-l-4 border-[#0056b3] space-y-2">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#0056b3] uppercase tracking-wider">
                      <Sparkles className="w-3.5 h-3.5 text-[#ff6b00]" />
                      <span>Executive Overview</span>
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed font-normal">
                      {post.summary}
                    </p>
                  </div>

                  {/* Key Takeaways */}
                  {post.content.keyTakeaways && post.content.keyTakeaways.length > 0 && (
                    <div className="p-5 rounded-xl bg-blue-50/70 border border-blue-100 space-y-3">
                      <h4 className="text-xs font-mono font-bold text-[#0056b3] uppercase tracking-wider flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#ff6b00]" />
                        <span>Key Engineering Takeaways</span>
                      </h4>
                      <ul className="space-y-2">
                        {post.content.keyTakeaways.map((takeaway, i) => (
                          <li key={i} className="text-xs sm:text-sm text-slate-700 flex items-start gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00] shrink-0 mt-2" />
                            <span className="leading-relaxed font-medium">{takeaway}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Introduction Paragraphs */}
                  <div className="space-y-4 pt-2">
                    {post.content.introduction.map((para, i) => (
                      <p key={i} className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                        {para}
                      </p>
                    ))}
                  </div>

                  {/* Article Deep-Dive Sections */}
                  <div className="space-y-10 pt-4 border-t border-slate-100">
                    {post.content.sections.map((section, idx) => (
                      <section key={idx} className="space-y-4 scroll-mt-28">
                        <div>
                          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                            {section.heading}
                          </h2>
                          {section.subheading && (
                            <p className="text-xs sm:text-sm font-semibold text-[#0056b3] pt-1">
                              {section.subheading}
                            </p>
                          )}
                        </div>

                        {section.body.map((p, pIdx) => (
                          <p key={pIdx} className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                            {p}
                          </p>
                        ))}

                        {/* Optional Specs / Metallurgy Comparison Table */}
                        {section.specsTable && section.specsTable.length > 0 && (
                          <div className="my-6 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xs">
                            <div className="overflow-x-auto">
                              <table className="w-full text-left border-collapse text-xs">
                                <thead>
                                  <tr className="bg-[#0b1f3a] text-white font-mono uppercase tracking-wider text-[11px]">
                                    <th className="py-3 px-4 font-semibold">Parameter / Grade</th>
                                    <th className="py-3 px-4 font-semibold">Toolroom Recommendation</th>
                                    <th className="py-3 px-4 font-semibold">Engineering Impact</th>
                                  </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 font-sans">
                                  {section.specsTable.map((row, rIdx) => (
                                    <tr key={rIdx} className="hover:bg-slate-50 transition-colors">
                                      <td className="py-3 px-4 font-bold text-slate-900">{row.parameter}</td>
                                      <td className="py-3 px-4 text-[#0056b3] font-semibold">{row.recommendation}</td>
                                      <td className="py-3 px-4 text-slate-600">{row.impact}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        )}

                        {/* Optional Callout / Toolroom Tip Box */}
                        {section.callout && (
                          <div
                            className={`p-4 rounded-xl border flex items-start gap-3 my-4 ${section.callout.type === "tip"
                              ? "bg-amber-50/70 border-amber-200 text-amber-950"
                              : section.callout.type === "important"
                                ? "bg-red-50/70 border-red-200 text-red-950"
                                : "bg-blue-50/70 border-blue-200 text-blue-950"
                              }`}
                          >
                            {section.callout.type === "tip" ? (
                              <Lightbulb className="w-5 h-5 text-[#ff6b00] shrink-0 mt-0.5" />
                            ) : section.callout.type === "important" ? (
                              <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                            ) : (
                              <Info className="w-5 h-5 text-[#0056b3] shrink-0 mt-0.5" />
                            )}
                            <div className="space-y-1">
                              <h5 className="text-xs font-mono font-bold uppercase tracking-wider">
                                {section.callout.title}
                              </h5>
                              <p className="text-xs leading-relaxed font-normal">
                                {section.callout.text}
                              </p>
                            </div>
                          </div>
                        )}
                      </section>
                    ))}
                  </div>

                  {/* Conclusion */}
                  <div className="pt-6 border-t border-slate-100 space-y-3">
                    <h3 className="text-lg font-bold text-slate-900">Summary &amp; Engineering Verdict</h3>
                    {post.content.conclusion.map((c, i) => (
                      <p key={i} className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                        {c}
                      </p>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono text-slate-400 font-semibold uppercase tracking-wider flex items-center gap-1">
                      <Tag className="w-3.5 h-3.5 text-[#ff6b00]" />
                      Tags:
                    </span>
                    {post.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-medium hover:bg-slate-200 transition-colors"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

              </article>

              {/* RIGHT / SIDEBAR COLUMN (4 cols) */}
              <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">

                {/* Table of Contents Box */}
                {post.tableOfContents && post.tableOfContents.length > 0 && (
                  <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 space-y-4">
                    <div className="flex items-center gap-2 pb-3 border-b border-slate-100 text-xs font-mono font-bold text-[#0056b3] uppercase tracking-wider">
                      <BookOpen className="w-4 h-4 text-[#ff6b00]" />
                      <span>Article Sections</span>
                    </div>
                    <ul className="space-y-2.5">
                      {post.tableOfContents.map((toc, i) => (
                        <li key={i}>
                          <span className="text-xs font-medium text-slate-700 hover:text-[#0056b3] transition-colors flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                            <span>{toc.label}</span>
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Author Stamp */}
                    <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-50 text-[#0056b3] flex items-center justify-center font-bold text-xs">
                        PM
                      </div>
                      <div className="text-[11px] text-slate-500">
                        <span className="font-semibold text-slate-800 block">Patel Mould Industries</span>
                        Published in Gujarat, India
                      </div>
                    </div>
                  </div>
                )}

                {/* Technical Inquiries CTA Box - In White Card Styling */}
                <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 space-y-4">
                  <div className="space-y-1 pb-3 border-b border-slate-100">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#ff6b00] flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5" />
                      <span>Toolroom Consultation</span>
                    </span>
                    <h4 className="text-xl font-bold text-slate-900 pt-1">Have a Tooling Challenge?</h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal pt-0.5">
                      Consult with our senior tool designers for cycle optimization, mold flow analysis, and tool steel selection.
                    </p>
                  </div>

                  <div className="space-y-2.5 pt-1">
                    <a
                      href="tel:+917784758347"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#ff6b00] hover:bg-orange-600 text-white font-semibold rounded-xl transition-colors text-xs uppercase tracking-wider shadow-sm"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call +91 7784758347</span>
                    </a>
                    <a
                      href="mailto:sales@patelmould.com"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-800 font-semibold rounded-xl transition-colors text-xs uppercase tracking-wider"
                    >
                      <Mail className="w-3.5 h-3.5 text-blue-600" />
                      <span>Email Tooling Team</span>
                    </a>
                  </div>
                </div>

                {/* Related Mould Solutions */}
                {relatedProducts.length > 0 && (
                  <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 space-y-4">
                    <h4 className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider pb-3 border-b border-slate-100 flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-[#ff6b00]" />
                      <span>Relevant Mould Tooling</span>
                    </h4>

                    <div className="space-y-3">
                      {relatedProducts.map((prod) => (
                        <Link
                          key={prod.slug}
                          href={`/products/${prod.slug}`}
                          className="group block p-3 rounded-xl bg-slate-50 hover:bg-blue-50/70 border border-slate-200 transition-all"
                        >
                          <div className="flex items-center justify-between">
                            <h5 className="text-xs font-bold text-slate-900 group-hover:text-[#0056b3] transition-colors">
                              {prod.name}
                            </h5>
                            <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#0056b3] group-hover:translate-x-1 transition-all" />
                          </div>
                          <p className="text-[11px] text-slate-500 pt-1 line-clamp-1">
                            {prod.shortDescription}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

              </aside>

            </div>

            {/* RELATED ARTICLES CAROUSEL / GRID AT BOTTOM */}
            <div className="pt-16 mt-16 border-t border-slate-200 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    More Technical Insights
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500">
                    Continue exploring engineering guides from Patel Mould Industries
                  </p>
                </div>

                <Link
                  href="/blogs"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#0056b3] hover:text-[#ff6b00] transition-colors"
                >
                  <span>View All Articles</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedBlogs.map((rel) => (
                  <Link
                    key={rel.id}
                    href={`/blogs/${rel.slug}`}
                    className="group bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col"
                  >
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                      <Image
                        src={rel.image}
                        alt={rel.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5 flex-1 flex flex-col justify-between space-y-2">
                      <span className="text-[11px] font-mono font-bold text-[#0056b3] uppercase tracking-wider">
                        {rel.category}
                      </span>
                      <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#0056b3] transition-colors line-clamp-2">
                        {rel.title}
                      </h4>
                      <div className="pt-2 flex items-center justify-between text-xs text-slate-400">
                        <span>{rel.date}</span>
                        <span className="font-semibold text-[#0056b3] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                          Read <ChevronRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </section>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
