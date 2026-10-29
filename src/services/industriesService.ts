import { INDUSTRIES_DATA, IndustryItem } from "@/data/industries";
import { INDUSTRY_FAQS, FAQItem } from "@/data/faqs";

const ADMIN_INDUSTRIES_URL =
  process.env.NEXT_PUBLIC_ADMIN_INDUSTRIES_URL ||
  "http://localhost:3001/api/industries";

export interface DynamicIndustryHero {
  titlePart1: string;
  titleHighlight: string;
  breadcrumbHome: string;
  breadcrumbCurrent: string;
  bannerImage: string;
}

export interface DynamicIndustryGridSection {
  badge: string;
  heading: string;
  headingHighlight: string;
  description: string;
}

export interface DynamicIndustryItem extends IndustryItem {
  faqs?: FAQItem[];
  order?: number;
}

export interface DynamicIndustriesData {
  hero: DynamicIndustryHero;
  gridSection: DynamicIndustryGridSection;
  industries: DynamicIndustryItem[];
}

export const STATIC_INDUSTRIES_FALLBACK: DynamicIndustriesData = {
  hero: {
    titlePart1: "Industries We",
    titleHighlight: "Serve",
    breadcrumbHome: "Home",
    breadcrumbCurrent: "Industries",
    bannerImage: "/industries/industries-banner.jpg",
  },
  gridSection: {
    badge: "APPLICATION SECTORS",
    heading: "Precision Mould Solutions for",
    headingHighlight: "Critical Sectors",
    description:
      "From high-speed beverage bottling preforms to leak-proof chemical drums and cleanroom pharmaceutical containers, Patel Mould Industries engineers tailored tooling systems meeting the exacting standards of Indian and global manufacturers.",
  },
  industries: INDUSTRIES_DATA.map((ind) => ({
    ...ind,
    faqs: INDUSTRY_FAQS[ind.slug] || [],
  })),
};

export async function getDynamicIndustriesContent(): Promise<DynamicIndustriesData> {
  try {
    const res = await fetch(ADMIN_INDUSTRIES_URL, {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("Failed to fetch dynamic industries content");
    const json = await res.json();
    if (json.success && json.data) {
      return json.data;
    }
  } catch (err) {
    console.warn("Using fallback static industries data:", err);
  }

  return STATIC_INDUSTRIES_FALLBACK;
}

export async function getDynamicIndustryBySlug(slug: string): Promise<{
  industry: DynamicIndustryItem | null;
  allIndustries: DynamicIndustryItem[];
}> {
  const content = await getDynamicIndustriesContent();
  const allIndustries = content.industries || STATIC_INDUSTRIES_FALLBACK.industries;
  const industry = allIndustries.find((item) => item.slug === slug) || null;

  return {
    industry,
    allIndustries,
  };
}

