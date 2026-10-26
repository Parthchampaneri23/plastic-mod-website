import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LegalHeroBanner } from "@/components/legal/LegalHeroBanner";
import {
  ShieldCheck,
  Lock,
  Eye,
  Database,
  FileCheck2,
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle2,
  AlertCircle,
  Share2,
  ExternalLink,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Patel Mould Industries",
  description:
    "Review Patel Mould Industries' Privacy Policy. Understand how we collect, handle, safeguard, and process industrial customer information, CAD/technical drawings, RFQ data, and website visitor details.",
  keywords: [
    "Patel Mould Industries Privacy Policy",
    "plastic mould manufacturer privacy",
    "confidentiality agreement CAD designs",
    "data protection Patel Mould Gujarat",
    "PET preform tooling customer data policy",
  ],
  openGraph: {
    title: "Privacy Policy | Patel Mould Industries",
    description:
      "Our commitment to protecting your personal data, technical specifications, and mold design confidentiality.",
    images: ["/About/about banner.png"],
  },
};

export default function PrivacyPolicyPage() {
  const sections = [
    {
      id: "introduction",
      title: "1. Introduction & Overview",
      icon: ShieldCheck,
      content: (
        <>
          <p className="text-slate-600 leading-relaxed mb-4">
            Welcome to <strong>Patel Mould Industries</strong> (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;). We are a leading precision plastic mould manufacturing enterprise headquartered at GIDC Industrial Estate, Gujarat, India. We specialize in the design, engineering, CNC machining, and fabrication of high-cavitation PET Preform moulds, Injection Stretch Blow Moulds (ISBM), and Extrusion Blow Moulds (EBM).
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            This Privacy Policy describes our practices regarding the collection, use, maintenance, protection, and disclosure of information gathered when you visit our website (<strong>patelmould.com</strong>), contact our sales engineering desks, submit Request for Quotations (RFQs), or exchange technical drawings (CAD / 3D models).
          </p>
          <div className="p-4 rounded-xl bg-blue-50/80 border border-blue-200/60 text-slate-700 text-sm flex items-start gap-3">
            <Lock className="w-5 h-5 text-[#0056b3] shrink-0 mt-0.5" />
            <span>
              <strong>Industrial Confidentiality Guarantee:</strong> We treat all client technical specifications, bottle designs, neck finish geometry, and preform drawings with strict non-disclosure safeguards.
            </span>
          </div>
        </>
      ),
    },
    {
      id: "information-collection",
      title: "2. Information We Collect",
      icon: Database,
      content: (
        <>
          <p className="text-slate-600 leading-relaxed mb-4">
            We collect information that identifies or relates to you and your enterprise in several distinct contexts:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/60">
              <h4 className="font-semibold text-slate-900 text-sm mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#ff6b00]" />
                Direct Inquiry Information
              </h4>
              <ul className="text-xs text-slate-600 space-y-1.5 list-disc pl-4">
                <li>Full name, official designation, and company name.</li>
                <li>Corporate email address and direct telephone/WhatsApp numbers.</li>
                <li>Mailing address, manufacturing plant location, and country of origin.</li>
                <li>Billing and GSTIN / Tax Identification details for commercial agreements.</li>
              </ul>
            </div>
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/60">
              <h4 className="font-semibold text-slate-900 text-sm mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0056b3]" />
                Technical & Engineering Specs
              </h4>
              <ul className="text-xs text-slate-600 space-y-1.5 list-disc pl-4">
                <li>PET preform weight, neck profile (e.g., PCO 1810, 1881, 29/25, 30/25).</li>
                <li>CAD/CAM 3D models (STEP, IGES, Parasolid, DXF) submitted for feasibility.</li>
                <li>Target cycle time, production cavitation requirements (8 to 96 cavities).</li>
                <li>Hot runner and temperature controller configuration preferences.</li>
              </ul>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm">
            Additionally, like most commercial websites, our servers automatically log technical metadata including your browser type, device information, IP address, referral URLs, and pages accessed to ensure website stability and defense against cyber risks.
          </p>
        </>
      ),
    },
    {
      id: "use-of-information",
      title: "3. How We Use Your Information",
      icon: FileCheck2,
      content: (
        <>
          <p className="text-slate-600 leading-relaxed mb-4">
            We deploy your data exclusively for legitimate commercial, engineering, and contractual objectives:
          </p>
          <ul className="space-y-2.5 text-slate-600 text-sm mb-4">
            <li className="flex items-start gap-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#0056b3] mt-2 shrink-0" />
              <span>
                <strong>Quotation & Feasibility Assessment:</strong> Evaluating mold tooling design, calculating cycle times, tooling steel selection (e.g., DIN 1.2083 / 1.2316), and issuing commercial cost estimates.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#0056b3] mt-2 shrink-0" />
              <span>
                <strong>Order Execution & Quality Reporting:</strong> Providing stage-wise in-process inspection milestones, CMM dimensional verification certificates, and mold trial sample video reports.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#0056b3] mt-2 shrink-0" />
              <span>
                <strong>After-Sales Technical Assistance:</strong> Tracking mold serial numbers, warranty support, spare parts dispatch (nozzles, tips, core inserts), and refurbishment scheduling.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#0056b3] mt-2 shrink-0" />
              <span>
                <strong>Legal & Statutory Compliance:</strong> Meeting Indian GST filing, customs dispatch protocols for international exports, and commercial trade compliance.
              </span>
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "confidentiality-cad",
      title: "4. CAD & Proprietary Tooling Confidentiality",
      icon: Lock,
      content: (
        <>
          <p className="text-slate-600 leading-relaxed mb-4">
            At Patel Mould Industries, we understand that mold drawings and container designs represent vital proprietary trade secrets of our beverage, pharmaceutical, cosmetic, and FMCG clients.
          </p>
          <div className="space-y-3">
            <h4 className="font-semibold text-slate-900 text-sm flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#ff6b00]" />
              Strict Non-Disclosure & Security Protocols:
            </h4>
            <ul className="space-y-2.5 text-slate-600 text-sm pl-1">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0056b3] mt-2 shrink-0" />
                <span>
                  <strong>Bilateral NDAs:</strong> We routinely execute formal mutual Non-Disclosure Agreements prior to receiving proprietary bottle models or technical 2D/3D drawings.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0056b3] mt-2 shrink-0" />
                <span>
                  <strong>Encrypted CAD Storage:</strong> Customer CAD files are stored on isolated, encrypted internal servers protected by multi-tier firewalls.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0056b3] mt-2 shrink-0" />
                <span>
                  <strong>Role-Based Access:</strong> Access is restricted strictly to authorized tool designers and CAM programmers directly assigned to your tooling project.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0056b3] mt-2 shrink-0" />
                <span>
                  <strong>Zero Third-Party Sharing:</strong> We do not distribute, replicate, or share customer tooling geometries, cavity layouts, or blow profiles with any unauthorized third parties.
                </span>
              </li>
            </ul>
          </div>
        </>
      ),
    },
    {
      id: "information-sharing",
      title: "5. Information Sharing & Third Parties",
      icon: Share2,
      content: (
        <>
          <p className="text-slate-600 leading-relaxed mb-4">
            <strong>We do not sell, rent, lease, or trade your contact or enterprise information to third-party marketing companies.</strong> We only disclose necessary information in the following limited industrial circumstances:
          </p>
          <ul className="space-y-2 text-sm text-slate-600 list-disc pl-5">
            <li>
              <strong>Freight & Logistics Partners:</strong> Providing shipping consignee name, factory address, contact person, and phone numbers to accredited sea/air freight carriers and inland road logistics operators for mold delivery.
            </li>
            <li>
              <strong>Sub-Supplier Components:</strong> Exchanging dimensional interfacing specs with verified hot runner or temperature controller partners upon your express engineering approval.
            </li>
            <li>
              <strong>Regulatory & Law Enforcement:</strong> If mandated by applicable Indian or international statutes, court summons, or regulatory authorities for taxation and customs declarations.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "data-security",
      title: "6. Data Security & Retention",
      icon: Eye,
      content: (
        <>
          <p className="text-slate-600 leading-relaxed mb-4">
            We implement comprehensive organizational, physical, and technological security measures designed to safeguard your corporate data from unauthorized destruction, loss, alteration, or disclosure.
          </p>
          <ul className="space-y-2.5 text-slate-600 text-sm pl-1 mb-4">
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0056b3] mt-2 shrink-0" />
              <span>
                <strong>SSL / TLS 256-bit Encryption:</strong> All data transmissions and interactions across our digital platforms are protected by industry-standard HTTPS encryption.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0056b3] mt-2 shrink-0" />
              <span>
                <strong>Air-Gapped CAD & Toolroom Network:</strong> Internal CAM machining networks and proprietary client design repositories are secured behind dedicated industrial firewalls.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0056b3] mt-2 shrink-0" />
              <span>
                <strong>Long-Term Spares Archive (10+ Years):</strong> We archive mold build specifications for the entire tooling service life (8–15 years) to ensure rapid supply of interchangeable replacement components.
              </span>
            </li>
          </ul>
          <p className="text-slate-600 leading-relaxed text-sm">
            We retain mold build documentation and design archives for the operative life of the mould (typically 8–15 years) to ensure seamless supply of interchangeable spare cores, cavities, neck rings, and wear plates whenever re-ordered.
          </p>
        </>
      ),
    },
    {
      id: "your-rights",
      title: "7. Your Rights & Data Choices",
      icon: CheckCircle2,
      content: (
        <>
          <p className="text-slate-600 leading-relaxed mb-4">
            Depending on your jurisdiction and commercial relationship with Patel Mould Industries, you possess the right to:
          </p>
          <ul className="space-y-2 text-sm text-slate-600 mb-4">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00]" />
              <span>Request access to the personal contact data we maintain about you.</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00]" />
              <span>Correct inaccurate, outdated, or incomplete corporate records.</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00]" />
              <span>Request the deletion of non-contractual engineering inquiries and marketing communications.</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00]" />
              <span>Request execution or renewal of our formal mutual Non-Disclosure Agreement (NDA).</span>
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "policy-updates",
      title: "8. Policy Revisions & Updates",
      icon: Clock,
      content: (
        <>
          <p className="text-slate-600 leading-relaxed">
            Patel Mould Industries reserves the right to amend or update this Privacy Policy periodically to reflect evolving legal standards, industrial regulations, or enhanced factory technology. The effective date at the top of this document indicates when changes were last implemented. Continued utilization of our website and services following updates constitutes acceptance.
          </p>
        </>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800" suppressHydrationWarning>
      {/* 1. Header Navigation */}
      <Header />

      <main className="flex-1">
        {/* 2. Hero Banner */}
        <LegalHeroBanner
          titlePrimary="Privacy"
          titleHighlight="Policy"
          breadcrumbLabel="Privacy Policy"
          badgeLabel="Data Protection & NDA"
          lastUpdated="March 2026"
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
                    <ShieldCheck className="w-5 h-5 text-[#0056b3]" />
                    <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wider">
                      Policy Sections
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

                {/* Quick Contact & NDA Inquiries Card */}
                <div className="bg-white text-slate-800 rounded-2xl p-6 border border-slate-200/90 shadow-sm space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#0056b3]">
                    <Lock className="w-5 h-5 text-[#ff6b00]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 text-base">Require an NDA First?</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      We execute strict mutual Non-Disclosure Agreements before reviewing confidential CAD files and bottle drawings.
                    </p>
                  </div>
                  <div className="pt-2 border-t border-slate-100 space-y-2 text-xs text-slate-700">
                    <div className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-[#ff6b00]" />
                      <a href="mailto:sales@patelmould.com" className="hover:text-[#0056b3] transition-colors">
                        sales@patelmould.com
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-[#0056b3]" />
                      <span>+91 77847 58347</span>
                    </div>
                    <div className="flex items-start gap-2 pt-1">
                      <MapPin className="w-3.5 h-3.5 text-[#ff6b00] shrink-0 mt-0.5" />
                      <span className="text-[11px] text-slate-500">Phase-IV GIDC, Gujarat, India</span>
                    </div>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center w-full py-2.5 px-4 rounded-xl bg-[#ff6b00] hover:bg-[#e56000] text-white text-xs font-semibold tracking-wider uppercase transition-all shadow-sm"
                  >
                    Contact Legal & Engineering
                  </Link>
                </div>

              </div>
            </aside>

            {/* Right Column: Detailed Policy Sections */}
            <div className="lg:col-span-8 space-y-8">

              {/* Top Banner Notice */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-[#ff6b00] shrink-0">
                  <AlertCircle className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-base font-bold text-slate-900 mb-1">
                    Corporate Commitment to Customer Privacy
                  </h2>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    This document establishes our transparent data practices across all digital and technical interactions. By accessing our website or engaging Patel Mould Industries for tooling services, you acknowledge the terms outlined below.
                  </p>
                </div>
              </div>

              {/* Policy Sections */}
              {sections.map((section) => {
                const IconComponent = section.icon;
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
                    <div>{section.content}</div>
                  </article>
                );
              })}

              {/* Bottom Quick Jump / Terms Link */}
              <div className="p-6 rounded-2xl bg-slate-100 border border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-600">
                <span>Looking for our commercial terms & manufacturing conditions?</span>
                <Link
                  href="/terms"
                  className="font-semibold text-[#0056b3] hover:text-[#ff6b00] inline-flex items-center gap-1 transition-colors"
                >
                  View Terms & Conditions
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
