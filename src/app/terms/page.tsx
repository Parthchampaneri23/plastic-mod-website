import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LegalHeroBanner } from "@/components/legal/LegalHeroBanner";
import {
  Scale,
  FileText,
  Wrench,
  Cpu,
  Truck,
  ShieldCheck,
  CreditCard,
  AlertTriangle,
  HelpCircle,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  Lock,
  Eye,
  Database,
  FileCheck2,
  Clock,
  AlertCircle,
  Share2,
} from "lucide-react";
import { getDynamicLegalContent } from "@/services/legalService";

export const metadata: Metadata = {
  title: "Terms and Conditions | Patel Mould Industries",
  description:
    "Terms and Conditions governing plastic mould design, precision CNC machining, tooling fabrication, mold trials, warranty, dispatch, and commercial payments with Patel Mould Industries in Gujarat, India.",
  keywords: [
    "Patel Mould Industries terms and conditions",
    "plastic mould manufacturing contract India",
    "PET preform mold warranty terms",
    "mold trial sampling conditions",
    "tooling delivery and payment terms Gujarat",
  ],
  openGraph: {
    title: "Terms and Conditions | Patel Mould Industries",
    description:
      "Standard commercial and engineering terms governing tooling fabrication, trials, warranties, and deliveries.",
    images: ["/About/about banner.png"],
  },
};

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Scale,
  FileText,
  Wrench,
  Cpu,
  Truck,
  ShieldCheck,
  CreditCard,
  AlertTriangle,
  HelpCircle,
  Lock,
  Eye,
  Database,
  FileCheck2,
  Clock,
  CheckCircle2,
  AlertCircle,
  Share2,
};

export default async function TermsAndConditionsPage() {
  const data = await getDynamicLegalContent("terms-and-conditions");

  const hero = data.hero;
  const noticeBanner = data.noticeBanner;
  const sidebarCard = data.sidebarCard;
  const sections = data.sections;
  const bottomLink = data.bottomLink;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800" suppressHydrationWarning>
      {/* 1. Header Navigation */}
      <Header />

      <main className="flex-1">
        {/* 2. Hero Banner */}
        <LegalHeroBanner
          titlePrimary={hero.titlePrimary}
          titleHighlight={hero.titleHighlight}
          breadcrumbLabel={hero.breadcrumbLabel}
          badgeLabel={hero.badgeLabel}
          lastUpdated={hero.lastUpdated}
          bannerImage={hero.bannerImage}
        />

        {/* 3. Main Policy Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-13 lg:py-13">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

            {/* Left Column: Quick Navigation Sticky Sidebar */}
            <aside className="lg:col-span-4">
              <div className="sticky top-28 space-y-6">

                {/* Navigation Card */}
                <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm">
                  <div className="flex items-center gap-2 pb-3 mb-4 border-b border-slate-100">
                    <Scale className="w-5 h-5 text-[#0056b3]" />
                    <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wider">
                      Contract Articles
                    </h3>
                  </div>
                  <nav className="space-y-1.5">
                    {sections.map((section) => (
                      <a
                        key={section.id}
                        href={`#${section.id}`}
                        className="block text-xs sm:text-sm text-slate-600 hover:text-[#0056b3] hover:bg-blue-50/60 px-3 py-2 rounded-lg font-medium transition-all"
                      >
                        {section.title}
                      </a>
                    ))}
                  </nav>
                </div>

                {/* Technical Inquiries Card */}
                <div className="bg-white text-slate-800 rounded-2xl p-6 border border-slate-200/90 shadow-sm space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#0056b3]">
                    <HelpCircle className="w-5 h-5 text-[#ff6b00]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 text-base">{sidebarCard.title}</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      {sidebarCard.description}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-slate-100 space-y-2 text-xs text-slate-700">
                    <div className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-[#ff6b00]" />
                      <a href={`mailto:${sidebarCard.email}`} className="hover:text-[#0056b3] transition-colors">
                        {sidebarCard.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-[#0056b3]" />
                      <a href={`tel:${sidebarCard.phone.replace(/[^0-9+]/g, "")}`} className="hover:text-[#0056b3] transition-colors">
                        {sidebarCard.phone}
                      </a>
                    </div>
                    <div className="flex items-start gap-2 pt-1">
                      <MapPin className="w-3.5 h-3.5 text-[#ff6b00] shrink-0 mt-0.5" />
                      <span className="text-[11px] text-slate-500">{sidebarCard.address}</span>
                    </div>
                  </div>
                  <Link
                    href={sidebarCard.buttonUrl || "/contact"}
                    className="inline-flex items-center justify-center w-full py-2.5 px-4 rounded-xl bg-[#ff6b00] hover:bg-[#e56000] text-white text-xs font-semibold tracking-wider uppercase transition-all shadow-sm"
                  >
                    {sidebarCard.buttonLabel}
                  </Link>
                </div>

              </div>
            </aside>

            {/* Right Column: Detailed Terms Sections */}
            <div className="lg:col-span-8 space-y-8">

              {/* Top Banner Notice */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#0056b3] shrink-0">
                  <Scale className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-base font-bold text-slate-900 mb-1">
                    {noticeBanner.title}
                  </h2>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {noticeBanner.description}
                  </p>
                </div>
              </div>

              {/* Terms Sections */}
              {sections.map((section) => {
                const IconComponent =
                  (section.iconName && ICON_MAP[section.iconName]) || Scale;

                return (
                  <article
                    key={section.id}
                    id={section.id}
                    className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm scroll-mt-28"
                  >
                    <div className="flex items-center gap-3 mb-5 pb-4 border-b border-slate-100">
                      <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#0056b3]">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                        {section.title}
                      </h3>
                    </div>

                    <div className="space-y-4">
                      {/* Paragraphs */}
                      {section.paragraphs?.map((p, pIdx) => (
                        <p key={pIdx} className="text-slate-600 leading-relaxed text-sm">
                          {p}
                        </p>
                      ))}

                      {/* Bullet points */}
                      {section.bulletPoints && section.bulletPoints.length > 0 && (
                        <ul className="space-y-2 text-sm text-slate-600 pl-1">
                          {section.bulletPoints.map((bp, bpIdx) => (
                            <li key={bpIdx} className="flex items-start gap-2.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00] mt-2 shrink-0" />
                              <span>{bp}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Optional Highlight Box */}
                      {section.highlightBox && (
                        <div
                          className={`p-4 rounded-xl text-sm flex items-start gap-3 ${
                            section.highlightBox.type === "success"
                              ? "bg-emerald-50/80 border border-emerald-200/70 text-slate-700"
                              : section.highlightBox.type === "warning"
                              ? "bg-orange-50/80 border border-orange-200/70 text-slate-700"
                              : "bg-blue-50/80 border border-blue-200/60 text-slate-700"
                          }`}
                        >
                          <CheckCircle2 className="w-5 h-5 text-[#0056b3] shrink-0 mt-0.5" />
                          <div className="space-y-1">
                            {section.highlightBox.title && (
                              <strong className="block text-slate-900 font-semibold">
                                {section.highlightBox.title}
                              </strong>
                            )}
                            <span>{section.highlightBox.text}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </article>
                );
              })}

              {/* Bottom Quick Jump / Privacy Link */}
              <div className="p-6 rounded-2xl bg-slate-100 border border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-600">
                <span>{bottomLink.promptText}</span>
                <Link
                  href={bottomLink.linkUrl || "/privacy-policy"}
                  className="font-semibold text-[#0056b3] hover:text-[#ff6b00] inline-flex items-center gap-1 transition-colors"
                >
                  {bottomLink.linkText}
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>

          </div>
        </div>
      </main>

      {/* 4. Footer */}
      <Footer />
    </div>
  );
}
