import React from 'react';
import { Header } from '@/components/Header';
import { AboutHero } from '@/components/About/AboutHero';
import { AboutCompanyIntro } from '@/components/About/AboutCompanyIntro';
import { VisionMission } from '@/components/About/VisionMission';
import { CompanyStrength } from '@/components/About/CompanyStrength';
import { AboutInfrastructure } from '@/components/About/AboutInfrastructure';
import { QualityCommitment } from '@/components/About/QualityCommitment';
import { FAQSection } from '@/components/FAQSection';
import { ABOUT_FAQS } from '@/data/faqs';
import { Footer } from '@/components/Footer';
import { getDynamicAboutContent } from '@/services/aboutService';
import { getDynamicHomeContent } from '@/services/homeService';

export const metadata = {
  title: 'About Patel Mould Industries | 30+ Years Precision Plastic Mould Manufacturer',
  description: 'Learn about Patel Mould Industries — leading Indian manufacturer of high-cavitation PET preform molds, ISBM tooling, and Extrusion Blow Molds with 5-axis CNC sub-micron precision.',
  keywords: 'About Patel Mould, plastic mold manufacturer India, PET preform mold maker, ISBM tooling company, mold manufacturing facility Gujarat',
};

export default async function AboutPage() {
  const [aboutData, homeData] = await Promise.all([
    getDynamicAboutContent(),
    getDynamicHomeContent(),
  ]);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-slate-950">
      {/* 1. MAIN HEADER NAVBAR */}
      <Header topBar={homeData?.topBar} navbar={homeData?.navbar} />

      {/* 2. ABOUT HERO BANNER */}
      <AboutHero hero={aboutData?.hero} />

      {/* 3. COMPANY INTRODUCTION (50/50 SPLIT LAYOUT) */}
      <AboutCompanyIntro companyIntro={aboutData?.companyIntro} />

      {/* 4. VISION & MISSION + OUR CORE VALUES */}
      <VisionMission visionMission={aboutData?.visionMission} />

      {/* 5. COMPANY STRENGTH (CENTRAL STATISTIC + 4 PILLARS) */}
      <CompanyStrength companyStrength={aboutData?.companyStrength} />

      {/* 6. INFRASTRUCTURE & TOOLROOM PLANT */}
      <AboutInfrastructure infrastructure={aboutData?.infrastructure} />

      {/* 7. QUALITY COMMITMENT JOURNEY */}
      <QualityCommitment qualityCommitment={aboutData?.qualityCommitment} />

      {/* 8. COMPANY FAQS */}
      <FAQSection
        faqs={aboutData?.faqsSection?.faqs && aboutData.faqsSection.faqs.length > 0 ? aboutData.faqsSection.faqs : ABOUT_FAQS}
        badge={aboutData?.faqsSection?.badge || "COMPANY HERITAGE & CREDENTIALS"}
        title={aboutData?.faqsSection?.title || "Frequently Asked Questions"}
        subtitle={aboutData?.faqsSection?.subtitle || "Learn more about our 30+ year tooling journey, engineering accreditations, international mold shipping, and client IP protection."}
      />

      {/* 9. FOOTER */}
      <Footer footer={homeData?.footer} />
    </main>
  );
}

