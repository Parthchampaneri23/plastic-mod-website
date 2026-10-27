const ADMIN_ABOUT_URL = process.env.NEXT_PUBLIC_ADMIN_ABOUT_URL || "http://localhost:3001/api/about";

export interface AboutHeroData {
  backgroundImage: string;
  titlePrefix: string;
  titleHighlight: string;
  breadcrumbHome: string;
  breadcrumbCurrent: string;
}

export interface AboutCompanyData {
  eyebrow: string;
  headingPrefix: string;
  headingHighlight: string;
  paragraph1: string;
  paragraph2: string;
  mainImage: string;
  stats: Array<{
    value: string;
    label: string;
    sublabel: string;
    description: string;
  }>;
  milestones: Array<{
    year: string;
    title: string;
    description: string;
    accent: boolean;
  }>;
  capabilities: Array<{
    id: string;
    title: string;
    description: string;
    metric: string;
    metricLabel: string;
    specs: string[];
    image: string;
  }>;
}

export interface VisionMissionData {
  eyebrow: string;
  headingPrefix: string;
  headingHighlight: string;
  description: string;
  vision: {
    tag: string;
    title: string;
    description: string;
    quote: string;
  };
  mission: {
    tag: string;
    title: string;
    description: string;
    quote: string;
  };
  coreValues: Array<{
    num: string;
    title: string;
    description: string;
  }>;
}

export interface CompanyStrengthData {
  eyebrow: string;
  headingPrefix: string;
  headingHighlight: string;
  description: string;
  centralMetric: {
    number: string;
    label: string;
    sublabel: string;
  };
  strengths: Array<{
    id: string;
    num: string;
    title: string;
    shortDesc: string;
    metric: string;
    metricLabel: string;
    description: string;
    accent: string;
  }>;
}

export interface AboutInfrastructureData {
  eyebrow: string;
  headingPrefix: string;
  headingHighlight: string;
  description: string;
  departments: Array<{
    id: string;
    num: string;
    navTitle: string;
    subtitle: string;
    description: string;
    tag: string;
    image: string;
  }>;
}

export interface QualityCommitmentData {
  eyebrow: string;
  headingPrefix: string;
  headingHighlight: string;
  description: string;
  stages: Array<{
    id: string;
    num: string;
    title: string;
    tagline: string;
    description: string;
    metrics: string[];
    equipment: string;
  }>;
}

export interface AboutFaqsData {
  badge: string;
  title: string;
  subtitle: string;
  faqs: Array<{
    id: string;
    question: string;
    answer: string;
    category?: string;
  }>;
}

export interface DynamicAboutContent {
  hero: AboutHeroData;
  companyIntro: AboutCompanyData;
  visionMission: VisionMissionData;
  companyStrength: CompanyStrengthData;
  infrastructure: AboutInfrastructureData;
  qualityCommitment: QualityCommitmentData;
  faqsSection: AboutFaqsData;
}

export async function getDynamicAboutContent(): Promise<DynamicAboutContent | null> {
  try {
    const res = await fetch(ADMIN_ABOUT_URL, {
      next: { revalidate: 10 },
    });
    if (!res.ok) throw new Error("Failed to fetch dynamic about content");
    const json = await res.json();
    if (json.success && json.data) {
      return json.data as DynamicAboutContent;
    }
  } catch (err) {
    console.warn("Using fallback static about data (admin backend offline or loading):", err);
  }
  return null;
}
