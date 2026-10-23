import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { InquiryCTA } from '@/components/InquiryCTA';
import { MACHINERY_LIST, MachineryItem } from '@/data/manufacturing';
import {
  ChevronRight,
  ArrowRight,
  ArrowLeft,
  Gauge,
  Cpu,
  Layers,
  Wrench,
  ShieldCheck,
  CheckCircle2,
  Phone,
  Mail,
  SlidersHorizontal,
} from 'lucide-react';
import { Button } from '@/components/Button';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return MACHINERY_LIST.map((machine) => ({
    slug: machine.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolved = await params;
  const machine = MACHINERY_LIST.find((m) => m.slug === resolved.slug);

  if (!machine) {
    return {
      title: 'Machine Not Found | Patel Mould Industries',
    };
  }

  return {
    title: `${machine.name} | Toolroom Capabilities | Patel Mould Industries`,
    description: machine.shortDescription || `${machine.name} technical specifications, capacity, and tooling applications at Patel Mould Industries Gujarat toolroom.`,
    keywords: `${machine.name}, ${machine.category} machine Gujarat, plastic mould toolroom, Patel Mould Industries machinery`,
  };
}

export default async function MachineDetailPage({ params }: PageProps) {
  const resolved = await params;
  const machine = MACHINERY_LIST.find((m) => m.slug === resolved.slug);

  if (!machine) {
    notFound();
  }

  // Get related machinery (2-3 machines, excluding current)
  const relatedMachines = (machine.relatedSlugs
    ? machine.relatedSlugs
      .map((s) => MACHINERY_LIST.find((m) => m.slug === s))
      .filter((m): m is MachineryItem => Boolean(m))
    : MACHINERY_LIST.filter((m) => m.slug !== machine.slug)
  ).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#F6F8FC] flex flex-col font-sans text-slate-800" suppressHydrationWarning>
      <Header />

      <main className="flex-grow pt-24 sm:pt-28">

        {/* ======================================================== */}
        {/* A. BREADCRUMB & BACK NAVIGATION                          */}
        {/* ======================================================== */}
        <div className="bg-white border-b border-[#DFE7F1]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-wrap items-center justify-between gap-3">
            <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-2 text-xs text-[#526176]">
              <Link href="/" className="hover:text-[#075BBB] transition-colors font-medium">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <Link href="/manufacturing" className="hover:text-[#075BBB] transition-colors font-medium">
                Manufacturing
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <Link href="/manufacturing#machinery" className="hover:text-[#075BBB] transition-colors font-medium">
                Machinery
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-[#10233F] font-semibold truncate max-w-[200px] sm:max-w-none">
                {machine.name}
              </span>
            </nav>

            <Link
              href="/manufacturing#machinery"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#075BBB] bg-blue-50/80 hover:bg-[#075BBB] hover:text-white px-3 py-1.5 rounded-lg border border-blue-200 hover:border-[#075BBB] transition-all duration-200 group shadow-2xs hover:shadow-xs"
            >
              <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-x-1" />
              <span>Back to Machinery</span>
            </Link>
          </div>
        </div>

        {/* ======================================================== */}
        {/* B. MACHINE HERO SECTION (TWO-COLUMN BALANCED)            */}
        {/* ======================================================== */}
        <section className="py-13 sm:py-13 bg-white border-b border-[#DFE7F1]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

              {/* Left Column: Clean Primary Machine Image Frame */}
              <div className="lg:col-span-6 flex flex-col justify-center">
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-[#DFE7F1] shadow-md bg-slate-900">
                  <Image
                    src={machine.image}
                    alt={`${machine.name} at Patel Mould Industries toolroom`}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center filter brightness-[0.98]"
                  />
                </div>
              </div>

              {/* Right Column: Machine Information & Key Highlights */}
              <div className="lg:col-span-6 flex flex-col justify-center space-y-5">
                <div>
                  <div className="flex items-center gap-2 mb-2.5">
                    <span className="px-2.5 py-0.5 rounded-md bg-blue-50 border border-blue-200 text-[#075BBB] font-mono text-[11px] font-bold uppercase tracking-wider">
                      {machine.category} CELL
                    </span>
                    {machine.manufacturer && (
                      <span className="text-xs font-mono text-[#526176]">
                        {machine.manufacturer}
                      </span>
                    )}
                  </div>

                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#10233F] tracking-tight leading-tight">
                    {machine.name}
                  </h1>

                  <p className="text-sm font-semibold text-[#075BBB] mt-1.5">
                    {machine.model || 'Precision Industrial Toolroom Equipment'}
                  </p>
                </div>

                <p className="text-sm sm:text-base text-[#526176] leading-relaxed">
                  {machine.detailDescription || machine.shortDescription}
                </p>

                {/* Quick Snapshot Specs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div className="p-3.5 rounded-xl bg-[#F6F8FC] border border-[#DFE7F1] flex flex-col justify-between">
                    <div className="text-[10px] font-mono font-bold text-[#FF792D] uppercase tracking-wider">
                      KEY SPECIFICATIONS
                    </div>
                    <div className="text-xs font-semibold text-[#10233F] mt-1.5 font-mono leading-snug">
                      {machine.specifications}
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#F6F8FC] border border-[#DFE7F1] flex flex-col justify-between">
                    <div className="text-[10px] font-mono font-bold text-[#075BBB] uppercase tracking-wider">
                      CAPACITY ENVELOPE
                    </div>
                    <div className="text-xs font-semibold text-[#10233F] mt-1.5 leading-snug">
                      {machine.capacity}
                    </div>
                  </div>
                </div>

                {/* Inquiry CTA Button */}
                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <Button
                    href={`/contact?subject=Machinery+Inquiry:+${encodeURIComponent(machine.name)}`}
                    variant="primary"
                    size="md"
                    className="inline-flex items-center gap-2 shadow-sm"
                  >
                    <span>Request an Inquiry</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                  <span className="text-xs text-[#526176] font-medium">
                    Discuss machine capacity &amp; scheduling
                  </span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* C. TECHNICAL SPECIFICATIONS & CAPACITY (PERFECTLY ALIGNED) */}
        {/* ======================================================== */}
        <section className="py-13 sm:py-13 bg-[#F6F8FC] border-b border-[#DFE7F1]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

            {/* Spec Table + Capacity Cards Grid with Aligned Headers */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

              {/* Left Col: Technical Specifications Table */}
              <div className="lg:col-span-7 flex flex-col space-y-4">
                <div className="flex items-center gap-2 min-h-[28px]">
                  <SlidersHorizontal className="w-4 h-4 text-[#075BBB]" />
                  <h2 className="text-lg sm:text-xl font-bold text-[#10233F] tracking-tight">
                    Technical Specifications
                  </h2>
                </div>

                <div className="rounded-2xl bg-white border border-[#DFE7F1] hover:border-[#075BBB]/40 transition-all duration-300 overflow-hidden shadow-xs hover:shadow-md flex-1">
                  <div className="divide-y divide-slate-100">
                    {machine.specList && machine.specList.length > 0 ? (
                      machine.specList.map((spec, sIdx) => (
                        <div
                          key={sIdx}
                          className="p-3.5 sm:p-4 grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-4 hover:bg-blue-50/50 hover:pl-5 transition-all duration-200 items-center group cursor-default"
                        >
                          <span className="text-xs font-semibold text-[#526176] group-hover:text-[#075BBB] transition-colors">
                            {spec.label}
                          </span>
                          <span className="sm:col-span-2 text-xs sm:text-[13px] font-semibold text-[#10233F] group-hover:text-[#075BBB] font-mono leading-snug transition-colors">
                            {spec.value}
                          </span>
                        </div>
                      ))
                    ) : (
                      <div className="p-4 text-xs text-[#526176]">
                        {machine.specifications}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Right Col: Capacity Envelopes & Applications */}
              <div className="lg:col-span-5 flex flex-col space-y-6">
                {/* Capacity Envelopes */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 min-h-[28px]">
                    <Gauge className="w-4 h-4 text-[#FF792D]" />
                    <h2 className="text-lg sm:text-xl font-bold text-[#10233F] tracking-tight">
                      Capacity Envelopes
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {machine.capacityDetails && machine.capacityDetails.length > 0 ? (
                      machine.capacityDetails.map((cap, cIdx) => (
                        <div
                          key={cIdx}
                          className="p-3.5 rounded-xl bg-white border border-[#DFE7F1] hover:border-[#075BBB] hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group cursor-default"
                        >
                          <div className="text-[10px] font-mono font-medium text-[#526176] group-hover:text-[#075BBB] transition-colors leading-tight">
                            {cap.label}
                          </div>
                          <div className="text-xs sm:text-[13px] font-bold text-[#10233F] group-hover:text-[#075BBB] mt-1.5 leading-snug font-mono transition-colors">
                            {cap.value}
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="p-3.5 rounded-xl bg-white border border-[#DFE7F1] hover:border-[#075BBB] hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-xs font-semibold text-[#10233F]">
                        {machine.capacity}
                      </div>
                    )}
                  </div>
                </div>

                {/* Primary Tooling Applications */}
                <div className="space-y-3 pt-2">
                  <h3 className="text-xs font-mono font-bold text-[#526176] uppercase tracking-wider">
                    PRIMARY TOOLING APPLICATIONS
                  </h3>

                  <div className="space-y-2">
                    {machine.applicationList && machine.applicationList.length > 0 ? (
                      machine.applicationList.map((appItem, aIdx) => (
                        <div
                          key={aIdx}
                          className="group flex items-start gap-3 p-3 rounded-xl bg-white border border-[#DFE7F1] hover:border-[#075BBB] hover:bg-blue-50/40 hover:shadow-sm hover:translate-x-1.5 transition-all duration-200 cursor-default"
                        >
                          <span className="w-5 h-5 rounded-md bg-blue-50 border border-blue-200 group-hover:bg-[#075BBB] group-hover:border-[#075BBB] flex items-center justify-center shrink-0 mt-0.5 transition-all duration-200 group-hover:scale-110 shadow-2xs">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#075BBB] group-hover:text-white transition-all duration-200" />
                          </span>
                          <span className="text-xs sm:text-[13px] text-[#10233F] group-hover:text-[#075BBB] font-medium leading-snug transition-colors">
                            {appItem}
                          </span>
                        </div>
                      ))
                    ) : (
                      <p className="text-xs text-[#526176] bg-white p-3 rounded-xl border border-[#DFE7F1]">
                        {machine.application}
                      </p>
                    )}
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ======================================================== */}
        {/* D. RELATED MACHINERY CAROUSEL / GRID                     */}
        {/* ======================================================== */}
        <section className="py-13 sm:py-13 bg-white border-b border-[#DFE7F1]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-[#FF792D] uppercase tracking-wider block">
                  EXPLORE FLEET
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-[#10233F] mt-1 tracking-tight">
                  Related Toolroom Machinery
                </h2>
              </div>
              <Link
                href="/manufacturing#machinery"
                className="text-xs sm:text-sm font-semibold text-[#075BBB] hover:text-[#054694] flex items-center gap-1 transition-colors"
              >
                <span>View All Fleet</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedMachines.map((rel) => (
                <div
                  key={rel.id}
                  className="rounded-2xl bg-white border border-[#DFE7F1] overflow-hidden shadow-xs hover:shadow-lg hover:border-[#075BBB]/40 transition-all flex flex-col group"
                >
                  <div className="relative aspect-[16/9] w-full bg-slate-900 overflow-hidden">
                    <Image
                      src={rel.image}
                      alt={rel.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-center group-hover:scale-104 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-0.5 rounded-md text-[10px] font-mono font-bold bg-white/95 text-[#075BBB] border border-white/60 shadow-xs">
                        {rel.badge}
                      </span>
                    </div>
                  </div>

                  <div className="p-4 sm:p-5 flex flex-col flex-grow justify-between space-y-3">
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-[#10233F] group-hover:text-[#075BBB] transition-colors leading-snug">
                        <Link href={`/manufacturing/machinery/${rel.slug}`}>
                          {rel.name}
                        </Link>
                      </h3>
                      <p className="text-xs text-[#526176] line-clamp-2 mt-1">
                        {rel.shortDescription || rel.application}
                      </p>
                    </div>

                    <Link
                      href={`/manufacturing/machinery/${rel.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#075BBB] group-hover:translate-x-0.5 transition-transform"
                    >
                      <span>Explore Specifications</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
