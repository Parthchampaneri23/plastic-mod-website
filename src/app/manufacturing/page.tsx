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

export const metadata = {
  title: 'Manufacturing Capabilities | Patel Mould Industries India',
  description: 'Explore Patel Mould Industries precision toolroom in Gujarat India: 5-axis CNC machining, mirror EDM, 9-stage mold manufacturing process, machinery specifications, and Zeiss 3D CMM quality inspection.',
  keywords: 'Plastic mold manufacturing India, CNC precision machining Gujarat, PET preform mold maker, EDM spark erosion, mold design CAD simulation, Zeiss CMM inspection',
};

export default function ManufacturingPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans" suppressHydrationWarning>
      {/* 1. Header with updated navigation */}
      <Header />

      <main className="flex-grow">
        {/* Hero Banner with Indian Toolroom Visual & Breadcrumbs */}
        <ManufacturingHero />

        {/* Section 1: Manufacturing Overview */}
        <ManufacturingOverview />

        {/* Section 2: Mold Design & Development */}
        <MoldDesignDevelopment />

        {/* Section 3: Precision Machining */}
        <PrecisionMachining />

        {/* Section 4: Mold Manufacturing Process (9 Stages) */}
        <MoldManufacturingProcess />

        {/* Section 5: Machinery & Equipment */}
        <MachineryEquipment />

        {/* Section 6: Production Capacity */}
        <ProductionCapacity />

        {/* Section 7: Quality & Inspection */}
        <QualityInspection />

        {/* Section 8: Custom Mold Solutions */}
        <CustomMoldSolutions />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
