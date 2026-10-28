import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ManufacturingHero } from '@/components/manufacturing/ManufacturingHero';
import { ManufacturingOverview } from '@/components/manufacturing/ManufacturingOverview';
import { MoldDesignDevelopment } from '@/components/manufacturing/MoldDesignDevelopment';
import { PrecisionMachining } from '@/components/manufacturing/PrecisionMachining';
import { MoldManufacturingProcess } from '@/components/manufacturing/MoldManufacturingProcess';
import { MachineryEquipment } from '@/components/manufacturing/MachineryEquipment';
import { ProductionCapacity } from '@/components/manufacturing/ProductionCapacity';
import { QualityInspection } from '@/components/manufacturing/QualityInspection';
import { CustomMoldSolutions } from '@/components/manufacturing/CustomMoldSolutions';
import { getDynamicManufacturingContent } from '@/services/manufacturingService';

export const metadata = {
  title: 'Manufacturing Capabilities | Patel Mould Industries India',
  description: 'Explore Patel Mould Industries precision toolroom in Gujarat India: 5-axis CNC machining, mirror EDM, 9-stage mold manufacturing process, machinery specifications, and Zeiss 3D CMM quality inspection.',
  keywords: 'Plastic mold manufacturing India, CNC precision machining Gujarat, PET preform mold maker, EDM spark erosion, mold design CAD simulation, Zeiss CMM inspection',
};

export const dynamic = 'force-dynamic';
export const revalidate = 0; // immediate dynamic reflection of admin updates

export default async function ManufacturingPage() {
  const data = await getDynamicManufacturingContent();

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans" suppressHydrationWarning>
      {/* 1. Header with updated navigation */}
      <Header />

      <main className="flex-grow">
        {/* Hero Banner with Indian Toolroom Visual & Breadcrumbs */}
        <ManufacturingHero hero={data.hero} />

        {/* Section 1: Manufacturing Overview */}
        <ManufacturingOverview overview={data.overview} />

        {/* Section 2: Mold Design & Development */}
        <MoldDesignDevelopment designDevelopment={data.designDevelopment} />

        {/* Section 3: Precision Machining */}
        <PrecisionMachining precisionMachining={data.precisionMachining} />

        {/* Section 4: Mold Manufacturing Process (9 Stages) */}
        <MoldManufacturingProcess process={data.process} />

        {/* Section 5: Machinery & Equipment */}
        <MachineryEquipment machinery={data.machinery} />

        {/* Section 6: Production Capacity */}
        <ProductionCapacity capacity={data.capacity} />

        {/* Section 7: Quality & Inspection */}
        <QualityInspection quality={data.quality} />

        {/* Section 8: Custom Mold Solutions */}
        <CustomMoldSolutions customSolutions={data.customSolutions} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
