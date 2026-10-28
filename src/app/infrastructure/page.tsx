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
import { getDynamicInfrastructureContent } from '@/services/infrastructureService';

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

export const dynamic = 'force-dynamic';
export const revalidate = 0; // immediate dynamic reflection of admin updates

export default async function InfrastructurePage() {
  const data = await getDynamicInfrastructureContent();

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800" suppressHydrationWarning>
      {/* 1. Header Navigation */}
      <Header />

      <main className="flex-grow">
        {/* Section 1: Hero Banner */}
        <InfrastructureHero hero={data.hero} />

        {/* Section 2: Manufacturing Facility Overview */}
        <FacilityOverview overview={data.facilityOverview} />

        {/* Section 3: CNC Machining Section */}
        <CncMachiningSection data={data.cnc} />

        {/* Section 4: EDM Machining Section */}
        <EdmMachiningSection data={data.edm} />

        {/* Section 5: Mould Assembly & Fitting */}
        <MouldAssemblySection data={data.mouldAssembly} />

        {/* Section 6: Quality Inspection */}
        <QualityInspectionSection data={data.qualityInspection} />

        {/* Section 7: Testing & Validation */}
        <TestingValidationSection data={data.testingValidation} />

        {/* Section 8: Organized Storage & Material Handling */}
        <WarehouseLogisticsSection data={data.warehouseLogistics} />

        {/* Section 9: Engineering Design & Planning */}
        <EngineeringDesignSection data={data.engineeringDesign} />

        {/* Section 10: Infrastructure & Toolroom Facilities FAQ */}
        <FAQSection
          faqs={data.faqs?.faqs || []}
          badge={data.faqs?.badge || "TOOLROOM & PLANT CAPABILITIES"}
          title={data.faqs?.title || "Facility & Infrastructure FAQs"}
          subtitle={
            data.faqs?.subtitle ||
            "Explore technical details regarding our precision CNC centers, EDM die-sinking, metrology inspection protocols, and mold trial machines."
          }
        />

        {/* Section 11: Manufacturing Partnership CTA */}
        <InfrastructureCTA cta={data.cta} />
      </main>

      {/* Footer Navigation */}
      <Footer />
    </div>
  );
}
