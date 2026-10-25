import React from "react";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BlogHeroBanner } from "@/components/blogs/BlogHeroBanner";
import { BlogListSection } from "@/components/blogs/BlogListSection";

export const metadata: Metadata = {
  title: "Mould Engineering Blogs & Technical Articles | Patel Mould Industries",
  description:
    "Explore authoritative technical articles, tool steel guides, PET preform cycle optimization insights, cleanroom ISBM tooling standards, and extrusion blow mold engineering by Patel Mould Industries.",
  keywords: [
    "plastic mould blog",
    "PET preform mold engineering",
    "tool steel STAVAX DIN 1.2316",
    "ISBM cleanroom tooling",
    "extrusion blow mould design",
    "cycle time optimization injection molding",
    "Patel Mould Industries Gujarat"
  ],
  openGraph: {
    title: "Mould Engineering Blogs | Patel Mould Industries",
    description:
      "Authoritative technical insights, metallurgical comparisons, and precision tooling best practices from Patel Mould Industries, Gujarat, India.",
    images: ["/blogs/blog-banner.jpg"]
  }
};

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800" suppressHydrationWarning>
      {/* 1. Global Navigation */}
      <Header />

      {/* 2. Hero Banner */}
      <main className="flex-1">
        <BlogHeroBanner />

        {/* 3. Blogs Showcase & Category Filter Grid */}
        <BlogListSection />
      </main>

      {/* 4. Global Footer */}
      <Footer />
    </div>
  );
}
