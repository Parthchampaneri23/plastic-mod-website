import {
  INFRASTRUCTURE_HERO_DATA,
  FACILITY_OVERVIEW_DATA,
  CNC_SECTION_DATA,
  EDM_SECTION_DATA,
  ASSEMBLY_SECTION_DATA,
  ASSEMBLY_TIMELINE_STEPS,
  INSPECTION_SECTION_DATA,
  INSPECTION_PRINCIPLES,
  TESTING_SECTION_DATA,
  VALIDATION_SEQUENCE_STAGES,
  WAREHOUSE_SECTION_DATA,
  MATERIAL_FLOW_STAGES,
  DESIGN_SECTION_DATA,
  ENGINEERING_WORKFLOW_STAGES,
  InfrastructureSectionData,
} from "@/data/infrastructure";
import { INFRASTRUCTURE_FAQS, FAQItem } from "@/data/faqs";

const ADMIN_INFRASTRUCTURE_URL =
  process.env.NEXT_PUBLIC_ADMIN_INFRASTRUCTURE_URL ||
  "http://localhost:3001/api/infrastructure";

export interface DynamicInfrastructureData {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    breadcrumbHome: string;
    breadcrumbCurrent: string;
  };
  facilityOverview: {
    badge: string;
    heading: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    capabilities: Array<{
      title: string;
      description: string;
    }>;
  };
  cnc: InfrastructureSectionData;
  edm: InfrastructureSectionData;
  mouldAssembly: InfrastructureSectionData & {
    stages?: Array<{ step: string; title: string; description?: string }>;
  };
  qualityInspection: InfrastructureSectionData & {
    stages?: Array<{ step: string; title: string; description?: string }>;
  };
  testingValidation: InfrastructureSectionData & {
    stages?: Array<{ step: string; title: string; description?: string }>;
  };
  warehouseLogistics: InfrastructureSectionData & {
    stages?: Array<{ step: string; title: string; description?: string }>;
  };
  engineeringDesign: InfrastructureSectionData & {
    stages?: Array<{ step: string; title: string; description?: string }>;
  };
  faqs: {
    badge: string;
    title: string;
    subtitle: string;
    faqs: FAQItem[];
  };
  cta: {
    badge: string;
    title: string;
    description: string;
    location: string;
    email: string;
    phone: string;
    boxTitle: string;
    boxBadge: string;
    boxDescription: string;
    buttonText: string;
    buttonLink: string;
  };
}

export const STATIC_INFRASTRUCTURE_FALLBACK: DynamicInfrastructureData = {
  hero: {
    ...INFRASTRUCTURE_HERO_DATA,
    breadcrumbHome: "Home",
    breadcrumbCurrent: "Infrastructure",
  },
  facilityOverview: FACILITY_OVERVIEW_DATA,
  cnc: CNC_SECTION_DATA,
  edm: EDM_SECTION_DATA,
  mouldAssembly: {
    ...ASSEMBLY_SECTION_DATA,
    stages: ASSEMBLY_TIMELINE_STEPS,
  },
  qualityInspection: {
    ...INSPECTION_SECTION_DATA,
    stages: INSPECTION_PRINCIPLES.map((p) => ({
      step: p.num,
      title: p.title,
      description: p.description,
    })),
  },
  testingValidation: {
    ...TESTING_SECTION_DATA,
    stages: VALIDATION_SEQUENCE_STAGES,
  },
  warehouseLogistics: {
    ...WAREHOUSE_SECTION_DATA,
    stages: MATERIAL_FLOW_STAGES,
  },
  engineeringDesign: {
    ...DESIGN_SECTION_DATA,
    stages: ENGINEERING_WORKFLOW_STAGES,
  },
  faqs: {
    badge: "TOOLROOM & PLANT CAPABILITIES",
    title: "Facility & Infrastructure FAQs",
    subtitle:
      "Explore technical details regarding our precision CNC centers, EDM die-sinking, metrology inspection protocols, and mold trial machines.",
    faqs: INFRASTRUCTURE_FAQS,
  },
  cta: {
    badge: "MANUFACTURING PARTNERSHIP",
    title: "Looking for the Right Mould Manufacturing Partner?",
    description:
      "Discuss your tooling and mould requirements with our engineering team. Explore how our precision machining, assembly, metrology, and testing infrastructure can support your product goals.",
    location: "GIDC, Gujarat, India",
    email: "sales@patelmould.com",
    phone: "Direct Technical Inquiries",
    boxTitle: "Infrastructure Consultation",
    boxBadge: "Direct Team",
    boxDescription:
      "Connect directly with our tooling engineers for feasibility reviews, cycle analysis, and application-specific mould development.",
    buttonText: "Request a Quote",
    buttonLink: "/contact#inquiry-form-section",
  },
};

export async function getDynamicInfrastructureContent(): Promise<DynamicInfrastructureData> {
  try {
    const res = await fetch(ADMIN_INFRASTRUCTURE_URL, {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("Failed to fetch dynamic infrastructure content");
    const json = await res.json();
    if (json.success && json.data) {
      return json.data;
    }
  } catch (err) {
    console.warn("Using fallback static infrastructure data:", err);
  }

  return STATIC_INFRASTRUCTURE_FALLBACK;
}
