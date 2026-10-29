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
  Tag,
} from "lucide-react";
import { BlogPost } from "@/data/blogs";
import {
  BlogIntroSectionData,
  BlogCategoryFilterItem,
} from "@/services/blogsService";

interface BlogListSectionProps {
  intro?: BlogIntroSectionData;
  categories?: BlogCategoryFilterItem[];
  posts?: BlogPost[];
}

export const BlogListSection: React.FC<BlogListSectionProps> = ({
  intro,
  categories = [],
  posts = [],
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const blogPosts = posts && posts.length > 0 ? posts : [];

  const displayCategories =
    categories && categories.length > 0
      ? categories
      : [
          { name: "All Articles", slug: "all" },
          { name: "Engineering & Simulation", slug: "engineering" },
          { name: "Materials & Metallurgy", slug: "materials" },
          { name: "Pharmaceutical Packaging", slug: "pharmaceutical" },
          { name: "Mould Design & Tooling", slug: "manufacturing" },
        ];

  // Separate featured blog from regular list if looking at "all"
  const featuredBlog = useMemo(() => {
    return blogPosts.find((b) => b.featured) || blogPosts[0];
  }, [blogPosts]);

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory =
        selectedCategory === "all" || post.categorySlug === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery, blogPosts]);

  const badge = intro?.badge || "Mould Engineering Knowledge Base";
  const headingPart1 = intro?.headingPart1 || "Technical Insights from Our";
  const headingHighlight = intro?.headingHighlight || "Gujarat Toolroom";
  const description =
    intro?.description ||
    "Authoritative, deeply technical articles written by our senior mold engineers and toolmakers on cycle time optimization, tool steels, pharmaceutical ISBM tooling, and extrusion blow mold engineering.";

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
            <span>{badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight leading-[1.15]">
            {headingPart1} <span className="text-[#0056b3]">{headingHighlight}</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            {description}
          </p>
        </div>

        {/* Category Filters Pill Bar */}
        <div className="flex flex-wrap items-center justify-start gap-2 pb-2">
          {displayCategories.map((cat) => {
            const isActive = selectedCategory === cat.slug;
            return (
              <button
                key={cat.slug}
                onClick={() => setSelectedCategory(cat.slug)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                  isActive
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
              {/* Left Image (6 cols) */}
              <div className="lg:col-span-6 relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto lg:h-full w-full overflow-hidden bg-slate-100">
                <Image
                  src={featuredBlog.image}
                  alt={featuredBlog.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0056b3] text-white text-xs font-mono uppercase tracking-wider font-bold shadow-md">
                    <Sparkles className="w-3.5 h-3.5 text-[#ff6b00]" />
                    <span>Featured Article</span>
                  </span>
                </div>
              </div>

              {/* Right Details (6 cols) */}
              <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 font-mono">
                    <span className="px-2.5 py-1 rounded-md bg-blue-50 text-[#0056b3] font-semibold border border-blue-200">
                      {featuredBlog.category}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      {featuredBlog.date}
                    </span>
                    <span>•</span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {featuredBlog.readTime}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 group-hover:text-[#0056b3] transition-colors leading-tight">
                    <Link href={`/blogs/${featuredBlog.slug}`}>
                      {featuredBlog.title}
                    </Link>
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {featuredBlog.summary}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {featuredBlog.tags.slice(0, 4).map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-[11px] font-mono"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="text-xs">
                    <p className="font-bold text-slate-900">{featuredBlog.author.name}</p>
                    <p className="text-slate-500 text-[11px]">{featuredBlog.author.role}</p>
                  </div>

                  <Link
                    href={`/blogs/${featuredBlog.slug}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#0056b3] hover:bg-[#004494] text-white text-xs font-bold transition-all shadow-sm group/btn"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Regular Articles Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#0056b3]" />
              <span>All Engineering Articles ({filteredPosts.length})</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden group"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-mono uppercase tracking-wider font-semibold border border-white/20">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1 justify-between space-y-4">
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h4 className="text-base font-bold text-slate-900 group-hover:text-[#0056b3] transition-colors leading-snug line-clamp-2">
                      <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
                    </h4>

                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {post.summary}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-slate-500">
                      By {post.author.name}
                    </span>

                    <Link
                      href={`/blogs/${post.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#ff6b00] group-hover:text-[#e56000] transition-colors"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
