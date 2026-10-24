import React from "react";
import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QualityHeroBanner } from "@/components/quality/QualityHeroBanner";
import { QualityHero } from "@/components/quality/QualityHero";
import { QualityPolicySection } from "@/components/quality/QualityPolicySection";
import { QualityProcessSection } from "@/components/quality/QualityProcessSection";
import { RawMaterialInspectionSection } from "@/components/quality/RawMaterialInspectionSection";
import { InProcessInspectionSection } from "@/components/quality/InProcessInspectionSection";
import { FinalInspectionSection } from "@/components/quality/FinalInspectionSection";
import { MoldTestingJourneySection } from "@/components/quality/MoldTestingJourneySection";
import { MeasurementEquipmentSection } from "@/components/quality/MeasurementEquipmentSection";
import { QualityStandardsSection } from "@/components/quality/QualityStandardsSection";

export const metadata: Metadata = {
  title: "Quality & Testing | Precision Mould Inspection | Patel Mould Industries",
  description:
    "Explore Patel Mould Industries' comprehensive quality control approach: tool steel verification, stage-wise in-process inspection, coordinate checks, final pre-dispatch verification, and mould trial testing in Gujarat, India.",
  keywords: [
    "Plastic Mould Quality Inspection India",
    "Mould Testing Validation Gujarat",
    "Tool Steel Verification Patel Mould",
    "In-Process Machining Inspection",
    "Preform Mould Trial Testing",
    "Precision Toolroom Metrology India",
  ],
};

export default function QualityPage() {
  return (
    <div
      className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800"
      suppressHydrationWarning
    >
      {/* 1. Header Navigation (Without Quality in navbar as required) */}
      <Header />

      <main className="flex-grow">
        {/* Full-Width Hero Banner (Matching About, Manufacturing, Infrastructure & Products) */}
        <QualityHeroBanner />

        {/* Hero Section: Precision Checked. Quality Assured. */}
        <QualityHero />

        {/* Section 1: Quality Policy */}
        <QualityPolicySection />

        {/* Section 2: Quality Control Process (5-Stage Horizontal / Vertical Timeline) */}
        <QualityProcessSection />

        {/* Section 3: Raw Material Inspection */}
        <RawMaterialInspectionSection />

        {/* Section 4: In-Process Inspection Dashboard */}
        <InProcessInspectionSection />

        {/* Section 5: Final Pre-Dispatch Inspection & Outlined Quality Seal */}
        <FinalInspectionSection />

        {/* Section 6: Mold Testing Journey */}
        <MoldTestingJourneySection />

        {/* Section 7: Measurement Equipment Categories */}
        <MeasurementEquipmentSection />

        {/* Section 8: Quality Standards & Requirements */}
        <QualityStandardsSection />
      </main>

      {/* Footer Navigation (Contains link to /quality) */}
      <Footer />
    </div>
  );
}
