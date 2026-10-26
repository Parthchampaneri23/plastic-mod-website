import React from 'react';
import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { InfrastructureHero } from '@/components/infrastructure/InfrastructureHero';
import { FacilityOverview } from '@/components/infrastructure/FacilityOverview';
import { CncMachiningSection } from '@/components/infrastructure/CncMachiningSection';
import { EdmMachiningSection } from '@/components/infrastructure/EdmMachiningSection';
import { MouldAssemblySection } from '@/components/infrastructure/MouldAssemblySection';
import QualityInspectionSection from '@/components/infrastructure/QualityInspectionSection';
import TestingValidationSection from '@/components/infrastructure/TestingValidationSection';
import WarehouseLogisticsSection from '@/components/infrastructure/WarehouseLogisticsSection';
import EngineeringDesignSection from '@/components/infrastructure/EngineeringDesignSection';
import { InfrastructureCTA } from '@/components/infrastructure/InfrastructureCTA';
import { FAQSection } from '@/components/FAQSection';
import { INFRASTRUCTURE_FAQS } from '@/data/faqs';

export const metadata: Metadata = {
  title: 'Infrastructure & Manufacturing Facilities | Patel Mould Industries',
  description:
    'Our manufacturing infrastructure brings together precision machining, mould assembly, inspection, testing and engineering design in a coordinated production environment. Each facility supports the development of dependable, application-specific mould solutions.',
  keywords: [
    'Plastic Mould Infrastructure India',
    'CNC Toolroom Facilities Gujarat',
    'Die Sinking EDM Machining Center',
    'PET Preform Mould Assembly Workshop',
    'Quality Inspection Metrology Laboratory',
    'Mould Testing Validation Facility',
  ],
};

export default function InfrastructurePage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800" suppressHydrationWarning>
      {/* 1. Header Navigation */}
      <Header />

      <main className="flex-grow">
        {/* Section 1: Hero Banner */}
        <InfrastructureHero />

        {/* Section 2: Manufacturing Facility Overview */}
        <FacilityOverview />

        {/* Section 3: CNC Machining Section (Dedicated Precision Engineering Showcase) */}
        <CncMachiningSection />

        {/* Section 4: EDM Machining Section (Dedicated Editorial Industrial Showcase) */}
        <EdmMachiningSection />

        {/* Section 5: Mould Assembly & Fitting (Dedicated Precision Assembly Workstation) */}
        <MouldAssemblySection />

        {/* Section 6: Quality Inspection (Dedicated Quality Control Dashboard) */}
        <QualityInspectionSection />

        {/* Section 7: Testing & Validation (Dedicated Feature Band & Sequence) */}
        <TestingValidationSection />

        {/* Section 8: Organized Storage & Material Handling (Dedicated Logistics Showcase & Flow) */}
        <WarehouseLogisticsSection />

        {/* Section 9: Engineering Design & Planning (Dedicated Blueprint Studio Layout) */}
        <EngineeringDesignSection />

        {/* Section 10: Infrastructure & Toolroom Facilities FAQ */}
        <FAQSection
          faqs={INFRASTRUCTURE_FAQS}
          badge="TOOLROOM & PLANT CAPABILITIES"
          title="Facility & Infrastructure FAQs"
          subtitle="Explore technical details regarding our precision CNC centers, EDM die-sinking, metrology inspection protocols, and mold trial machines."
        />

        {/* Section 11: Manufacturing Partnership CTA */}
        <InfrastructureCTA />
      </main>

      {/* Footer Navigation */}
      <Footer />
    </div>
  );
}
