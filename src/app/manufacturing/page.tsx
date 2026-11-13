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
  description: 'Explore Patel Mould Industries precision toolroom in Gujarat India: 5-axis CNC machining, mirror EDM, 9-stage mould manufacturing process, machinery specifications, and Zeiss 3D CMM quality inspection.',
  keywords: 'Plastic mould manufacturing India, CNC precision machining Gujarat, PET preform mould maker, EDM spark erosion, mould design CAD simulation, Zeiss CMM inspection',
};

export const revalidate = 60;

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

        {/* Section 2: Mould Design & Development */}
        <MoldDesignDevelopment designDevelopment={data.designDevelopment} />

        {/* Section 3: Precision Machining */}
        <PrecisionMachining precisionMachining={data.precisionMachining} />

        {/* Section 4: Mould Manufacturing Process (9 Stages) */}
        <MoldManufacturingProcess process={data.process} />

        {/* Section 5: Machinery & Equipment */}
        <MachineryEquipment machinery={data.machinery} />

        {/* Section 6: Production Capacity */}
        <ProductionCapacity capacity={data.capacity} />

        {/* Section 7: Quality & Inspection */}
        <QualityInspection quality={data.quality} />

        {/* Section 8: Custom Mould Solutions */}
        <CustomMoldSolutions customSolutions={data.customSolutions} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
