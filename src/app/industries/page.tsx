import React from "react";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { IndustriesHeroBanner } from "@/components/industries/IndustriesHeroBanner";
import { IndustryGridSection } from "@/components/industries/IndustryGridSection";

export const metadata: Metadata = {
  title: "Industries We Serve | Patel Mould Industries",
  description:
    "Explore precision plastic mould engineering solutions across Food & Beverage, Pharmaceutical, Personal Care, Packaging, Plastic Containers, Chemical Packaging, Household, and Industrial sectors by Patel Mould Industries.",
  keywords: [
    "plastic mould industries",
    "food beverage bottle mould",
    "pharma container mould",
    "cosmetic bottle mould",
    "chemical jerry can mould",
    "PET preform moulds India",
    "ISBM moulds Gujarat",
    "extrusion blow mould India"
  ],
  openGraph: {
    title: "Industries We Serve | Patel Mould Industries",
    description:
      "Precision tooling solutions engineered for India's premier packaging, pharmaceutical, beverage, and industrial container manufacturers.",
    images: ["/industries/industries-banner.jpg"]
  }
};

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800">
      {/* 1. Global Navigation */}
      <Header />

      {/* 2. Page Hero Banner */}
      <main className="flex-1">
        <IndustriesHeroBanner />

        {/* 3. Industry Showcase: All 8 Sectors */}
        <IndustryGridSection />
      </main>

      {/* 4. Global Footer */}
      <Footer />
    </div>
  );
}
