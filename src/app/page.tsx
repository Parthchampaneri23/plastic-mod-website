import React from 'react';
import { Header } from '@/components/Header';
import { HeroBanner } from '@/components/home/HeroBanner';
import { CompanyIntro } from '@/components/home/CompanyIntro';
import { ProductCategories } from '@/components/home/ProductCategories';
import { ManufacturingCapabilities } from '@/components/home/ManufacturingCapabilities';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { Infrastructure } from '@/components/home/Infrastructure';
import { Industries } from '@/components/home/Industries';
import { QualityTechnology } from '@/components/home/QualityTechnology';
import { FeaturedProducts } from '@/components/home/FeaturedProducts';
import { ClientSection } from '@/components/home/ClientSection';
import { InquiryCTA } from '@/components/home/InquiryCTA';
import { Footer } from '@/components/Footer';

import { getDynamicHomeContent } from '@/services/homeService';

export const metadata = {
  title: 'Plastic Mold Tooling | High-Precision Preform, ISBM & EBM Molds Manufacturer',
  description: 'ISO 9001:2015 certified high-cavitation PET preform molds, ISBM, and Extrusion Blow Molding (EBM) tooling engineered with sub-micron precision for packaging, beverage, and pharma.',
  keywords: 'plastic injection mold, PET preform mold, ISBM mold, EBM mold, blow molding tooling, precision mold manufacturer, CNC machining, EDM tooling',
};

export default async function Home() {
  const content = await getDynamicHomeContent();

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-slate-950">
      {/* 1. HEADER (DYNAMIC TOPBAR & NAVBAR) */}
      <Header topBar={content.topBar} navbar={content.navbar} />

      {/* 2. HERO BANNER (DYNAMIC SLIDERS & CONTENT) */}
      <HeroBanner slides={content.heroSlides} />

      {/* 3. COMPANY INTRODUCTION */}
      <CompanyIntro intro={content.companyIntro} stats={content.companyStats} />

      {/* 4. PRODUCT CATEGORIES */}
      <ProductCategories
        categories={content.productCategories}
        sectionInfo={content.categoriesSection}
      />

      {/* 5. MANUFACTURING CAPABILITIES */}
      <ManufacturingCapabilities
        capabilities={content.capabilities}
        sectionInfo={content.capabilitiesSection}
      />

      {/* 6. WHY CHOOSE US */}
      <WhyChooseUs whyChooseUs={content.whyChooseUs} />

      {/* 7. INFRASTRUCTURE / FACILITIES */}
      <Infrastructure facilities={content.facilities} />

      {/* 8. INDUSTRIES / APPLICATIONS */}
      <Industries industries={content.industries} />

      {/* 9. QUALITY & TECHNOLOGY */}
      <QualityTechnology />

      {/* 10. FEATURED PRODUCTS */}
      <FeaturedProducts featuredProducts={content.featuredProducts} />

      {/* 11. CLIENT / CUSTOMER SECTION */}
      <ClientSection
        clientLogoImages={content.clientLogoImages}
        indianTestimonials={content.indianTestimonials}
      />

      {/* 12. INQUIRY CTA */}
      <InquiryCTA inquiryCta={content.inquiryCta} />

      {/* 13. FOOTER (DYNAMIC BRAND, SOCIALS & CONTACT) */}
      <Footer footer={content.footer} />
    </main>
  );
}
