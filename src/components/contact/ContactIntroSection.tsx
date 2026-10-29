"use client";

import React from "react";
import Image from "next/image";
import {
  ShieldCheck,
  Award,
  Clock,
  Sparkles,
  Users,
} from "lucide-react";
import { ContactIntroSectionData } from "@/services/contactService";

interface ContactIntroSectionProps {
  data?: ContactIntroSectionData;
}

export const ContactIntroSection: React.FC<ContactIntroSectionProps> = ({ data }) => {
  const badge = data?.badge || "DIRECT TOOLROOM CONSULTATION";
  const headingPart1 = data?.headingPart1 || "Let’s Engineer Your Next";
  const headingHighlight = data?.headingHighlight || "Precision Mould";
  const leadParagraph =
    data?.leadParagraph ||
    "Based in Gujarat’s renowned industrial engineering corridor, Patel Mould Industries partners with plastic converters, beverage corporations, pharmaceutical packagers, and FMCG brands across India and 14+ countries globally.";
  const secondaryParagraph =
    data?.secondaryParagraph ||
    "Whether you are planning a high-cavity PET preform conversion system, an ISBM pharmaceutical container project, or heavy-duty extrusion blow molds, our tooling engineers offer direct DFM review, moldflow thermal balancing, and rapid quotations.";
  const image = data?.image || "/contact/contact-office.jpg";

  const trustBadges =
    data?.trustBadges && data.trustBadges.length > 0
      ? data.trustBadges
      : [
          {
            title: "ISO 9001:2015",
            subtitle: "Certified Quality",
            iconName: "ShieldCheck",
          },
          {
            title: "24-Hour DFM",
            subtitle: "Technical Turnaround",
            iconName: "Clock",
          },
          {
            title: "5M+ Shot Life",
            subtitle: "Class 101 Guarantee",
            iconName: "Award",
          },
          {
            title: "14+ Countries",
            subtitle: "Global Direct Exports",
            iconName: "Users",
          },
        ];

  const renderIcon = (name: string, idx: number) => {
    switch (name) {
      case "Clock":
        return <Clock className="w-5 h-5" />;
      case "Award":
        return <Award className="w-5 h-5" />;
      case "Users":
        return <Users className="w-5 h-5" />;
      default:
        return <ShieldCheck className="w-5 h-5" />;
    }
  };

  return (
    <section className="py-13 sm:py-13 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Image with Frame */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-md group">
              <Image
                src={image}
                alt="Patel Mould Industries engineering consultation office and precision CNC manufacturing facility in Gujarat"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-center group-hover:scale-102 transition-transform duration-500"
              />
            </div>

            {/* Facility Trust Grid */}
            <div className="grid grid-cols-2 gap-3.5 pt-1">
              {trustBadges.map((badgeItem, idx) => {
                const isOrange = idx % 2 === 1;
                return (
                  <div
                    key={idx}
                    className={`p-4 rounded-xl bg-slate-50 border border-slate-200/90 flex items-center gap-3.5 ${
                      isOrange
                        ? "hover:bg-orange-50/50 hover:border-orange-200"
                        : "hover:bg-blue-50/50 hover:border-blue-200"
                    } transition-all shadow-xs group/badge`}
                  >
                    <div
                      className={`w-10 h-10 rounded-xl ${
                        isOrange
                          ? "bg-orange-100 text-[#ff6b00]"
                          : "bg-blue-100 text-[#0056b3]"
                      } flex items-center justify-center shrink-0 group-hover/badge:scale-105 transition-transform`}
                    >
                      {renderIcon(badgeItem.iconName, idx)}
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-slate-900">
                        {badgeItem.title}
                      </div>
                      <div className="text-[11px] text-slate-500">
                        {badgeItem.subtitle}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Introduction Story & Highlights */}
          <div className="lg:col-span-7 space-y-5">
            {/* Blinker Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-[#0056b3] text-xs font-mono font-bold uppercase tracking-wider">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff6b00] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#ff6b00]"></span>
              </span>
              <span>{badge}</span>
            </div>

            {/* Main Section Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight leading-[1.15]">
              {headingPart1}{" "}
              <span className="text-[#0056b3]">{headingHighlight}</span>
            </h2>

            {/* Lead Narrative */}
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              {leadParagraph}
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              {secondaryParagraph}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
