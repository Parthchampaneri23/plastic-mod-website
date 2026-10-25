"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Clock,
  ArrowRight,
  Sparkles,
  BookOpen,
  Filter,
  CheckCircle2,
  ChevronRight,
  Tag
} from "lucide-react";
import { BLOG_POSTS, BlogPost } from "@/data/blogs";

const CATEGORIES = [
  { name: "All Articles", slug: "all" },
  { name: "Engineering & Simulation", slug: "engineering" },
  { name: "Materials & Metallurgy", slug: "materials" },
  { name: "Pharmaceutical Packaging", slug: "pharmaceutical" },
  { name: "Mould Design & Tooling", slug: "manufacturing" },
];

export const BlogListSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Separate featured blog (Blog 1) from regular list if looking at "all"
  const featuredBlog = useMemo(() => {
    return BLOG_POSTS.find((b) => b.featured) || BLOG_POSTS[0];
  }, []);

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCategory =
        selectedCategory === "all" || post.categorySlug === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="py-13 sm:py-13">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Section Header: Shifted to Left */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0056b3] text-xs font-mono uppercase tracking-wider font-semibold">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff6b00] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff6b00]"></span>
            </span>
            <span>Mould Engineering Knowledge Base</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight leading-[1.15]">
            Technical Insights from Our <span className="text-[#0056b3]">Gujarat Toolroom</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Authoritative, deeply technical articles written by our senior mold engineers and toolmakers on cycle time optimization, tool steels, pharmaceutical ISBM tooling, and extrusion blow mold engineering.
          </p>
        </div>

        {/* Category Filters Pill Bar: Aligned to Left */}
        <div className="flex flex-wrap items-center justify-start gap-2 pb-2">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.slug;
            return (
              <button
                key={cat.slug}
                onClick={() => setSelectedCategory(cat.slug)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${isActive
                  ? "bg-[#0056b3] text-white shadow-md shadow-blue-500/20"
                  : "bg-white text-slate-700 border border-slate-200/90 hover:bg-slate-100 hover:text-slate-900 shadow-xs"
                  }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* FEATURED BLOG POST (Hero Spotlight Card) - Only show when "All" is active */}
        {selectedCategory === "all" && featuredBlog && (
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              {/* Left Image (5 cols) - Clean with NO text overlay */}
              <div className="lg:col-span-6 relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto lg:h-full w-full overflow-hidden bg-slate-100">
                <Image
                  src={featuredBlog.image}
                  alt={featuredBlog.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center group-hover:scale-103 transition-transform duration-500"
                />
              </div>

              {/* Right Content (6 cols) */}
              <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-5">
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 font-medium">
                    <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-[#0056b3] font-semibold text-[11px] uppercase tracking-wider">
                      {featuredBlog.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{featuredBlog.date}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{featuredBlog.readTime}</span>
                    </span>
                  </div>

                  <Link href={`/blogs/${featuredBlog.slug}`} className="block group-hover:text-[#0056b3] transition-colors">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 leading-snug">
                      {featuredBlog.title}
                    </h3>
                  </Link>

                  <p className="text-sm text-slate-600 leading-relaxed font-normal line-clamp-3">
                    {featuredBlog.summary}
                  </p>
                </div>

                {/* Author Info & CTA */}
                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#0056b3] to-[#ff6b00] flex items-center justify-center text-white font-bold text-xs shadow-xs">
                      {featuredBlog.author.name.slice(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">{featuredBlog.author.name}</h4>
                      <p className="text-[11px] text-slate-500">{featuredBlog.author.role}</p>
                    </div>
                  </div>

                  <Link
                    href={`/blogs/${featuredBlog.slug}`}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#0056b3] hover:bg-blue-800 text-white font-semibold rounded-xl transition-all shadow-sm text-xs uppercase tracking-wider"
                  >
                    <span>Read Full Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* BLOG GRID: Uniform 3-column grid matching gallery & industry pages */}
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-2 border-b border-slate-200">
            <h3 className="text-sm font-mono font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#ff6b00]" />
              <span>
                {selectedCategory === "all" ? "All Technical Articles" : "Filtered Articles"} ({filteredPosts.length})
              </span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group"
              >
                {/* Clickable Image Wrap without text overlay */}
                <Link
                  href={`/blogs/${post.slug}`}
                  className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 block"
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </Link>

                {/* Card Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2.5">
                    {/* Meta bar: Date + Read time */}
                    <div className="flex items-center space-x-3 text-xs text-slate-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        <span>{post.date}</span>
                      </span>
                      <span className="text-slate-300">•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        <span>{post.readTime}</span>
                      </span>
                    </div>

                    {/* Blog Title */}
                    <Link href={`/blogs/${post.slug}`} className="block group-hover:text-[#0056b3] transition-colors">
                      <h4 className="text-lg font-bold text-slate-900 leading-snug line-clamp-2">
                        {post.title}
                      </h4>
                    </Link>

                    {/* Excerpt */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal line-clamp-3">
                      {post.summary}
                    </p>
                  </div>

                  {/* Card Bottom: Author + View Action */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-full bg-blue-100 text-[#0056b3] flex items-center justify-center font-bold text-[10px]">
                        {post.author.name.slice(0, 2).toUpperCase()}
                      </div>
                      <span className="text-xs font-semibold text-slate-700 truncate max-w-[120px]">
                        {post.author.name}
                      </span>
                    </div>

                    <Link
                      href={`/blogs/${post.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#0056b3] group-hover:text-[#ff6b00] group-hover:translate-x-1 transition-all"
                    >
                      <span>Read Article</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
