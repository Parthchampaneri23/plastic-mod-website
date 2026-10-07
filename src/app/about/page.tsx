import React from 'react';
import { Header } from '@/components/Header';
import { AboutHero } from '@/components/About/AboutHero';
import { AboutCompanyIntro } from '@/components/About/AboutCompanyIntro';
import { VisionMission } from '@/components/About/VisionMission';
import { CompanyStrength } from '@/components/About/CompanyStrength';
import { AboutInfrastructure } from '@/components/About/AboutInfrastructure';
import { QualityCommitment } from '@/components/About/QualityCommitment';
import { Footer } from '@/components/Footer';

export const metadata = {
  title: 'About Patel Mould Industries | 30+ Years Precision Plastic Mould Manufacturer',
  description: 'Learn about Patel Mould Industries — leading Indian manufacturer of high-cavitation PET preform molds, ISBM tooling, and Extrusion Blow Molds with 5-axis CNC sub-micron precision.',
  keywords: 'About Patel Mould, plastic mold manufacturer India, PET preform mold maker, ISBM tooling company, mold manufacturing facility Gujarat',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-slate-950">
      {/* 1. MAIN HEADER NAVBAR */}
      <Header />

      {/* 2. ABOUT HERO BANNER */}
      <AboutHero />

      {/* 3. COMPANY INTRODUCTION (50/50 SPLIT LAYOUT) */}
      <AboutCompanyIntro />

      {/* 4. VISION & MISSION + OUR CORE VALUES */}
      <VisionMission />

      {/* 5. COMPANY STRENGTH (CENTRAL STATISTIC + 4 PILLARS) */}
      <CompanyStrength />

      {/* 6. INFRASTRUCTURE & TOOLROOM PLANT */}
      <AboutInfrastructure />

      {/* 7. QUALITY COMMITMENT JOURNEY */}
      <QualityCommitment />

      {/* 8. FOOTER */}
      <Footer />
    </main>
  );
}
