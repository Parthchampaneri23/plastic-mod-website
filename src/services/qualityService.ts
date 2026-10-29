import {
  QUALITY_COMMITMENTS,
  QUALITY_PROCESS_STAGES,
  MATERIAL_INSPECTION_CHECKS,
  IN_PROCESS_CHECKPOINTS,
  FINAL_CHECKLIST_ITEMS,
  MOLD_TESTING_STEPS,
  MEASUREMENT_EQUIPMENT_ITEMS,
  QUALITY_STANDARDS_BLOCKS,
  QualityCommitment,
  QualityProcessStage,
  MaterialInspectionCheck,
  InProcessCheckpoint,
  FinalChecklistItem,
  MoldTestingStep,
  MeasurementEquipmentItem,
  QualityStandardBlock,
} from "@/data/quality";

const ADMIN_QUALITY_URL =
  process.env.NEXT_PUBLIC_ADMIN_QUALITY_URL ||
  "http://localhost:3001/api/quality";

export interface QualityHeroBannerData {
  titlePart1: string;
  titleHighlight: string;
  breadcrumbHome: string;
  breadcrumbCurrent: string;
  bannerImage: string;
}

export interface QualityOverviewPillarData {
  label: string;
  title: string;
  description: string;
  iconName?: string;
}

export interface QualityOverviewData {
  badge: string;
  headingPart1: string;
  headingHighlight: string;
  description: string;
  image: string;
  pillars: QualityOverviewPillarData[];
}

export interface QualityPolicyData {
  badge: string;
  headingPart1: string;
  headingHighlight: string;
  description: string;
  image: string;
  commitments: QualityCommitment[];
}

export interface QualityProcessData {
  badge: string;
  headingPart1: string;
  headingHighlight: string;
  description: string;
  stages: QualityProcessStage[];
}

export interface RawMaterialData {
  badge: string;
  headingPart1: string;
  headingHighlight: string;
  description: string;
  image: string;
  checksHeading: string;
  checks: MaterialInspectionCheck[];
}

export interface InProcessData {
  badge: string;
  headingPart1: string;
  headingHighlight: string;
  description: string;
  checkpointsTitle: string;
  checkpointsSubtitle: string;
  checkpoints: InProcessCheckpoint[];
}

export interface FinalInspectionData {
  badge: string;
  headingPart1: string;
  headingHighlight: string;
  description: string;
  image: string;
  checklistHeading: string;
  items: FinalChecklistItem[];
}

export interface MoldTestingData {
  badge: string;
  headingPart1: string;
  headingHighlight: string;
  description: string;
  steps: MoldTestingStep[];
}

export interface MeasurementEquipmentData {
  badge: string;
  headingPart1: string;
  headingHighlight: string;
  description: string;
  items: MeasurementEquipmentItem[];
}

export interface QualityStandardsData {
  badge: string;
  headingPart1: string;
  headingHighlight: string;
  description: string;
  blocks: QualityStandardBlock[];
}

export interface DynamicQualityData {
  heroBanner: QualityHeroBannerData;
  overview: QualityOverviewData;
  policy: QualityPolicyData;
  process: QualityProcessData;
  rawMaterial: RawMaterialData;
  inProcess: InProcessData;
  finalInspection: FinalInspectionData;
  moldTesting: MoldTestingData;
  measurementEquipment: MeasurementEquipmentData;
  standards: QualityStandardsData;
}

export const STATIC_QUALITY_FALLBACK: DynamicQualityData = {
  heroBanner: {
    titlePart1: "Quality &",
    titleHighlight: "Testing",
    breadcrumbHome: "Home",
    breadcrumbCurrent: "Quality & Testing",
    bannerImage: "/quality/quality-banner.jpg",
  },
  overview: {
    badge: "METROLOGY & INSPECTION OVERVIEW",
    headingPart1: "Precision Checked.",
    headingHighlight: "Quality Assured.",
    description:
      "At Patel Mould Industries, our approach to precision mould manufacturing combines incoming tool steel verification, stage-wise in-process checks, critical core-cavity dimensional inspection, and functional mould trial evaluation.",
    image: "/quality/quality-inspection-metrology.jpg",
    pillars: [
      {
        label: "01",
        title: "Dimensional Verification",
        description:
          "Multi-coordinate inspection of core and cavity components against approved 2D drawings and 3D CAD models.",
        iconName: "Crosshair",
      },
      {
        label: "02",
        title: "Critical Tolerance Control",
        description:
          "Sub-micron repeatability and precise fitment across neck rings, sliding mechanisms, and shut-off parting lines.",
        iconName: "Ruler",
      },
      {
        label: "03",
        title: "Surface Finish & Polish",
        description:
          "Optical magnification checks and surface texture verification ensuring clean part release and reduced friction.",
        iconName: "CheckCircle2",
      },
      {
        label: "04",
        title: "Pre-Dispatch Validation",
        description:
          "Complete assembly bench review, dry cycling, and trial performance evaluation before client delivery.",
        iconName: "ShieldCheck",
      },
    ],
  },
  policy: {
    badge: "QUALITY POLICY",
    headingPart1: "Quality Is Built Into",
    headingHighlight: "Every Stage.",
    description:
      "Our quality policy establishes clear verification protocols at every transition point—from raw material receipt to tool delivery—ensuring reliable mould performance and long-term customer trust.",
    image: "/quality/quality-policy-alignment.jpg",
    commitments: QUALITY_COMMITMENTS,
  },
  process: {
    badge: "QUALITY CONTROL PROCESS",
    headingPart1: "Structured From",
    headingHighlight: "Ingot To Trial.",
    description:
      "Our 5-stage quality process guides tooling through raw steel verification, engineering design validation, in-process machining checkpoints, bench assembly inspection, and functional mould trial testing.",
    stages: QUALITY_PROCESS_STAGES,
  },
  rawMaterial: {
    badge: "RAW MATERIAL VERIFICATION",
    headingPart1: "Quality Starts With",
    headingHighlight: "The Material.",
    description:
      "Sound mould tooling relies upon certified, uniform tool steel. Incoming blocks, bolster plates, and core-cavity rounds undergo structural inspection and documentation verification before rough milling.",
    image: "/quality/raw-material-steel-inspection.jpg",
    checksHeading: "Raw Material Verification Gateways",
    checks: MATERIAL_INSPECTION_CHECKS,
  },
  inProcess: {
    badge: "IN-PROCESS QUALITY DASHBOARD",
    headingPart1: "Inspection Throughout",
    headingHighlight: "Production.",
    description:
      "Inspection takes place at appropriate manufacturing stages to identify deviations early. Machining parameters, coordinate datums, and fitting allowances are verified before components proceed to subsequent stations.",
    checkpointsTitle: "Production Quality Checkpoints",
    checkpointsSubtitle: "Key inspection stages during mould manufacturing",
    checkpoints: IN_PROCESS_CHECKPOINTS,
  },
  finalInspection: {
    badge: "PRE-DISPATCH VERIFICATION",
    headingPart1: "Every Detail Matters",
    headingHighlight: "Before Delivery.",
    description:
      "Final verification ensures that completed moulds, spare inserts, cooling interfaces, and documentation match customer agreements before packaging and dispatch.",
    image: "/quality/final-inspection-check.jpg",
    checklistHeading: "Pre-Dispatch Verification Checklist",
    items: FINAL_CHECKLIST_ITEMS,
  },
  moldTesting: {
    badge: "MOULD TESTING JOURNEY",
    headingPart1: "From Initial Dry Cycle To",
    headingHighlight: "Trial Validation.",
    description:
      "Mould testing evaluates mechanical actuation, slide timing, cooling balance, and sample part characteristics before handover, confirming ready integration on customer production lines.",
    steps: MOLD_TESTING_STEPS,
  },
  measurementEquipment: {
    badge: "METROLOGY INSTRUMENTS",
    headingPart1: "Precision Measurement",
    headingHighlight: "Instruments.",
    description:
      "Key measuring instruments used in our toolroom to check mould dimensions, part accuracy, and smooth surface finish.",
    items: MEASUREMENT_EQUIPMENT_ITEMS,
  },
  standards: {
    badge: "QUALITY STANDARDS & CERTIFICATIONS",
    headingPart1: "Quality Standards &",
    headingHighlight: "Certifications.",
    description:
      "Manufacturing compliance is guided by agreed customer specifications, established toolmaking practices, and verified project records.",
    blocks: QUALITY_STANDARDS_BLOCKS,
  },
};

export async function getDynamicQualityContent(): Promise<DynamicQualityData> {
  try {
    const res = await fetch(ADMIN_QUALITY_URL, {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("Failed to fetch dynamic quality content");
    const json = await res.json();
    if (json.success && json.data) {
      return json.data;
    }
  } catch (err) {
    console.warn("Using fallback static quality data:", err);
  }

  return STATIC_QUALITY_FALLBACK;
}

