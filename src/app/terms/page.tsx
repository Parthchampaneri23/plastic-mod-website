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
} from "lucide-react";

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

export default function TermsAndConditionsPage() {
  const sections = [
    {
      id: "scope-acceptance",
      title: "1. Scope & Acceptance of Terms",
      icon: Scale,
      content: (
        <>
          <p className="text-slate-600 leading-relaxed mb-4">
            These Terms and Conditions (&quot;Terms&quot;) govern all commercial quotations, purchase orders (POs), manufacturing contracts, technical trial services, and deliveries executed by <strong>Patel Mould Industries</strong> (&quot;Manufacturer&quot;, &quot;Company&quot;, &quot;we&quot;, &quot;us&quot;) to our domestic and international clients (&quot;Buyer&quot;, &quot;Customer&quot;).
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            Placement of a purchase order, remittance of an advance tooling deposit, or written approval of a tooling design drawing constitutes unconditional acceptance of these Terms. Any conflicting terms proposed by the Buyer on standard purchase order sheets are expressly excluded unless formally executed in writing and signed by an authorized director of Patel Mould Industries.
          </p>
          <div className="p-4 rounded-xl bg-blue-50/80 border border-blue-200/60 text-slate-700 text-sm flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#0056b3] shrink-0 mt-0.5" />
            <span>
              <strong>Binding Technical Agreement:</strong> Every mold manufacturing project is accompanied by a technical specification sheet defining cavitation, pitch, machine tonnage interface, and resin shrinkage factors.
            </span>
          </div>
        </>
      ),
    },
    {
      id: "design-approval",
      title: "2. CAD Design Approval & Engineering Freezes",
      icon: Cpu,
      content: (
        <>
          <p className="text-slate-600 leading-relaxed mb-4">
            Tooling production commences strictly upon receipt of formal 2D/3D design approval from the Buyer:
          </p>
          <ul className="space-y-2.5 text-slate-600 text-sm mb-4">
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00] mt-2 shrink-0" />
              <span>
                <strong>Design Freeze Sign-off:</strong> The Buyer is responsible for verifying bottle geometry, preform neck finish dimensions (e.g. 28mm PCO, 38mm Bericap, 29/25), thread starts, and product volumes prior to signing the General Arrangement (GA) drawing.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00] mt-2 shrink-0" />
              <span>
                <strong>Engineering Change Orders (ECO):</strong> Any modifications requested after design freeze and commencement of rough CNC machining or heat treatment will be subject to technical feasibility review, supplementary costs, and lead-time extension.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00] mt-2 shrink-0" />
              <span>
                <strong>Shrinkage Calculation:</strong> Tooling cavity dimensions are engineered based on standard virgin PET/PP/HDPE resin shrinkage coefficients specified in the approved GA drawing. Variations resulting from recycled resin content or additives remain the Buyer&apos;s responsibility.
              </span>
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "toolroom-manufacturing",
      title: "3. Toolroom Manufacturing & Materials",
      icon: Wrench,
      content: (
        <>
          <p className="text-slate-600 leading-relaxed mb-4">
            Patel Mould Industries builds tooling conforming to international standards and specified steel chemistries:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/70">
              <h4 className="font-semibold text-slate-900 text-sm mb-1.5 text-[#0056b3]">
                Certified Tool Steels
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Core, cavity, and neck ring inserts are fabricated from genuine pre-hardened and vacuum-hardened European/Japanese tool steels (e.g. DIN 1.2083, 1.2316, Stavax) with Mill Test Certificates (MTC).
              </p>
            </div>
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/70">
              <h4 className="font-semibold text-slate-900 text-sm mb-1.5 text-[#ff6b00]">
                Sub-Micron Machining
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Machining tolerances on high-speed CNC milling, wire EDM, and cylindrical grinding conform to &plusmn;0.005 mm to assure complete interchangeability of individual cavity components.
              </p>
            </div>
          </div>
        </>
      ),
    },
    {
      id: "mold-trials",
      title: "4. Mold Trials, Sampling & Acceptance (T0 / T1)",
      icon: FileText,
      content: (
        <>
          <p className="text-slate-600 leading-relaxed mb-4">
            Prior to commercial dispatch, all moulds undergo rigorous trial runs in our testing facility:
          </p>
          <ul className="space-y-2 text-sm text-slate-600 list-disc pl-5 mb-4">
            <li>
              <strong>Trial Samples:</strong> We provide comprehensive trial reports (T0/T1) including preform/bottle samples, wall thickness concentricity data, weight consistency charts, and operational video logs.
            </li>
            <li>
              <strong>Physical Inspection:</strong> The Buyer or their authorized technical representative is welcomed to witness the trial run in person at our Gujarat tooling campus.
            </li>
            <li>
              <strong>Dispatch Clearance:</strong> Dispatch is initiated only upon receipt of formal written sample acceptance and dimensional approval from the Buyer.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "pricing-payment",
      title: "5. Pricing, Taxes & Payment Schedules",
      icon: CreditCard,
      content: (
        <>
          <p className="text-slate-600 leading-relaxed mb-4">
            Unless explicitly modified in an authorized proforma invoice, standard industrial commercial milestones apply:
          </p>
          <div className="space-y-3 mb-4">
            <h4 className="font-semibold text-slate-900 text-sm flex items-center gap-2">
              <CreditCard className="w-4 h-4 text-[#ff6b00]" />
              Standard Commercial Payment Milestones:
            </h4>
            <ul className="space-y-2.5 text-slate-600 text-sm pl-1">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0056b3] mt-2 shrink-0" />
                <span>
                  <strong>40% Advance Deposit:</strong> Remitted with formal Purchase Order to initiate certified tool steel procurement and 3D CAD/CAM engineering.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0056b3] mt-2 shrink-0" />
                <span>
                  <strong>40% Progress Stage:</strong> Payable upon completion of CNC machining and readiness for vacuum heat treatment and mold assembly.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0056b3] mt-2 shrink-0" />
                <span>
                  <strong>20% Balance Milestone:</strong> Released upon successful T1 trial sample approval and CMM dimensional sign-off prior to factory dispatch.
                </span>
              </li>
            </ul>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            All prices quoted are Ex-Works Gujarat, exclusive of applicable Goods and Services Tax (GST), customs duties, port handling fees, or international shipping tariffs unless explicitly contracted as CIF / CFR.
          </p>
        </>
      ),
    },
    {
      id: "delivery-shipping",
      title: "6. Delivery, Packaging & Title Transfer",
      icon: Truck,
      content: (
        <>
          <p className="text-slate-600 leading-relaxed mb-4">
            Moulds are packaged in heavy-duty, anti-corrosive treated wooden export crates designed to withstand harsh maritime and long-haul overland transit:
          </p>
          <ul className="space-y-2 text-sm text-slate-600 list-disc pl-5">
            <li>
              <strong>Rust Prevention:</strong> All mold surfaces and water channels are purged, dried, coated with heavy-duty anti-rust protective oil, and vacuum-sealed in heavy gauge polythene lining.
            </li>
            <li>
              <strong>Lead Times:</strong> Quoted lead times are calculated from the date of final GA design sign-off and receipt of advance payment. Delays caused by Buyer design revisions or force majeure events adjust delivery dates accordingly.
            </li>
            <li>
              <strong>Transfer of Risk:</strong> Risk of loss or transit damage transfers to the Buyer upon hand-over of crated goods to the nominated freight carrier at our factory gates (Ex-Works). Transit insurance is strongly recommended.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "warranty-claims",
      title: "7. Tooling Warranty & Quality Guarantees",
      icon: ShieldCheck,
      content: (
        <>
          <p className="text-slate-600 leading-relaxed mb-4">
            Patel Mould Industries provides an industry-leading warranty for workmanship, material integrity, and shot-life performance:
          </p>
          <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200/80 text-slate-700 text-sm mb-4 space-y-2">
            <div className="font-semibold text-emerald-900 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              12-Month / Specified Shot-Life Mechanical Warranty
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              We warrant our molds against manufacturing defects in steel, machining, and internal assembly for a period of 12 months from the date of dispatch or up to 3–5 million shots (whichever occurs first, depending on agreed tooling grade).
            </p>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            <strong>Warranty Exclusions:</strong> This warranty does not cover defects arising from improper mold clamping, operating with unconditioned or contaminated chilled water leading to scale buildup, raw resin contamination (e.g. metal debris), failure to maintain proper lubrication, or unauthorized unauthorized modifications by third-party toolmakers.
          </p>
        </>
      ),
    },
    {
      id: "limitation-liability",
      title: "8. Limitation of Liability & Force Majeure",
      icon: AlertTriangle,
      content: (
        <>
          <p className="text-slate-600 leading-relaxed mb-4">
            Under no circumstances shall Patel Mould Industries be liable for indirect, incidental, punitive, or consequential damages, including loss of production profits, factory downtime, or raw polymer waste. Our aggregate liability arising out of any order shall strictly not exceed the total contract price paid for the specific mold tooling.
          </p>
          <p className="text-slate-600 leading-relaxed text-sm">
            Neither party shall be held accountable for non-performance or delays caused by events beyond reasonable human control (Force Majeure), including natural catastrophes, grid power blackouts, epidemics, import embargoes, or government sanctions.
          </p>
        </>
      ),
    },
    {
      id: "jurisdiction",
      title: "9. Governing Law & Dispute Resolution",
      icon: Scale,
      content: (
        <>
          <p className="text-slate-600 leading-relaxed">
            These Terms and any agreement entered with Patel Mould Industries shall be construed and governed in accordance with the laws of the Republic of India. In the event of any commercial or technical dispute that cannot be resolved amicably through mutual executive dialogue, the competent civil courts of <strong>Gujarat, India</strong> shall possess exclusive jurisdiction.
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
          titlePrimary="Terms &"
          titleHighlight="Conditions"
          breadcrumbLabel="Terms & Conditions"
          badgeLabel="Commercial & Engineering Contract"
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
                    <h4 className="font-semibold text-slate-900 text-base">Commercial Inquiries</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Questions regarding specific project milestones, payment schedules, or custom tooling contracts?
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
                    Request Contract Clarification
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
                    Standard Industrial Manufacturing Terms
                  </h2>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    These contractual terms ensure rigorous engineering clarity, delivery schedules, and warranty protection for all custom plastic mould manufacturing contracts executed by Patel Mould Industries.
                  </p>
                </div>
              </div>

              {/* Terms Sections */}
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

              {/* Bottom Quick Jump / Privacy Link */}
              <div className="p-6 rounded-2xl bg-slate-100 border border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-600">
                <span>Want to know how we protect your confidential CAD drawings & data?</span>
                <Link
                  href="/privacy-policy"
                  className="font-semibold text-[#0056b3] hover:text-[#ff6b00] inline-flex items-center gap-1 transition-colors"
                >
                  View Privacy Policy & NDA
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
