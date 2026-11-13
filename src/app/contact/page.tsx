import React from "react";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactHeroBanner } from "@/components/contact/ContactHeroBanner";
import { ContactIntroSection } from "@/components/contact/ContactIntroSection";
import { QuoteInquiryFormSection } from "@/components/contact/QuoteInquiryFormSection";
import { ContactUsDirectSection } from "@/components/contact/ContactUsDirectSection";
import { getDynamicContactContent } from "@/services/contactService";

export const metadata: Metadata = {
  title: "Contact Us & Request a Quote | Patel Mould Industries",
  description:
    "Get in touch with Patel Mould Industries in Gujarat, India. Request technical quotations for PET preform moulds, ISBM tooling, and EBM moulds. View plant location, WhatsApp support, and direct contact numbers.",
  keywords: [
    "contact plastic mould manufacturer",
    "request a quote PET preform mould",
    "Patel Mould Industries contact",
    "mould manufacturer Gujarat address",
    "ISBM mould quotation India",
    "EBM mould RFQ"
  ],
  openGraph: {
    title: "Contact Us & Request a Quote | Patel Mould Industries",
    description:
      "Direct communication desk, corporate campus address, Google Map, and technical quotation inquiry form for Patel Mould Industries in Gujarat, India.",
    images: ["/contact/contact-banner.jpg"]
  }
};

export default async function ContactPage() {
  const contactData = await getDynamicContactContent();

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800" suppressHydrationWarning>
      {/* 1. Global Navigation */}
      <Header />

      <main className="flex-1">
        {/* 2. Hero Banner matching exact brand architecture */}
        <ContactHeroBanner data={contactData.heroBanner} />

        {/* 3. Introduction Section with Indian Company & Team Image */}
        <ContactIntroSection data={contactData.intro} />

        {/* 4. Section 11: Inquiry / Request a Quote Form (All 11 Fields) */}
        <QuoteInquiryFormSection data={contactData.inquiry} />

        {/* 5. Section 12: Contact Us Page (Address, Google Map, Phone, Email, WhatsApp, Hours, Form, Social Links) */}
        <ContactUsDirectSection data={contactData.direct} />
      </main>

      {/* 6. Global Footer */}
      <Footer />
    </div>
  );
}
