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
import { getDynamicQualityContent } from "@/services/qualityService";

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

export default async function QualityPage() {
  const data = await getDynamicQualityContent();

  return (
    <div
      className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800"
      suppressHydrationWarning
    >
      {/* 1. Header Navigation */}
      <Header />

      <main className="flex-grow">
        {/* Full-Width Hero Banner */}
        <QualityHeroBanner data={data.heroBanner} />

        {/* Hero Section: Precision Checked. Quality Assured. */}
        <QualityHero data={data.overview} />

        {/* Section 1: Quality Policy */}
        <QualityPolicySection data={data.policy} />

        {/* Section 2: Quality Control Process (5-Stage Timeline) */}
        <QualityProcessSection data={data.process} />

        {/* Section 3: Raw Material Inspection */}
        <RawMaterialInspectionSection data={data.rawMaterial} />

        {/* Section 4: In-Process Inspection Dashboard */}
        <InProcessInspectionSection data={data.inProcess} />

        {/* Section 5: Final Pre-Dispatch Inspection */}
        <FinalInspectionSection data={data.finalInspection} />

        {/* Section 6: Mold Testing Journey */}
        <MoldTestingJourneySection data={data.moldTesting} />

        {/* Section 7: Measurement Equipment Categories */}
        <MeasurementEquipmentSection data={data.measurementEquipment} />

        {/* Section 8: Quality Standards & Requirements */}
        <QualityStandardsSection data={data.standards} />
      </main>

      {/* Footer Navigation */}
      <Footer />
    </div>
  );
}
