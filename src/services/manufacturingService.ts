import {
  MANUFACTURING_OVERVIEW_STATS,
  PROCESS_STEPS,
  MACHINERY_LIST,
  MachineryItem,
} from "@/data/manufacturing";
import {
  PRODUCTION_STATISTICS_DATA,
  CAPACITY_HIGHLIGHTS,
  MOULD_PRODUCTION_CAPABILITIES,
} from "@/data/capacity";

const ADMIN_MANUFACTURING_URL =
  process.env.NEXT_PUBLIC_ADMIN_MANUFACTURING_URL || "http://localhost:3001/api/manufacturing";

export interface DynamicManufacturingData {
  hero: {
    bannerImage: string;
    badge: string;
    titlePrefix: string;
    titleHighlight: string;
    breadcrumbHome: string;
    breadcrumbCurrent: string;
  };
  overview: {
    badge: string;
    heading: string;
    highlightHeading: string;
    summary: string;
    facilityImage: string;
    facilityLocation: string;
    facilityTag: string;
    infrastructureTitle: string;
    infrastructureDesc: string;
    stats: Array<{ value: string; label: string; detail: string }>;
    capabilities: Array<{
      id: string;
      title: string;
      cardDesc: string;
      panelDesc: string;
    }>;
  };
  designDevelopment: {
    badge: string;
    heading: string;
    highlightHeading: string;
    description: string;
    image: string;
    overlayBadge: string;
    overlayTitle: string;
    overlayTag: string;
    workflowTitle: string;
    workflowDesc: string;
    capabilities: Array<{
      id: string;
      number: string;
      title: string;
      panelTitle: string;
      panelDesc: string;
      cardDesc: string;
      points: string[];
    }>;
    workflowSteps: Array<{
      step: string;
      title: string;
      shortDesc: string;
      fullDesc: string;
      deliverable: string;
    }>;
  };
  precisionMachining: {
    badge: string;
    heading: string;
    highlightHeading: string;
    description: string;
    tabs: Array<{
      id: string;
      tabLabel: string;
      badge: string;
      heading: string;
      subtitle: string;
      description: string;
      image: string;
      imageAlt?: string;
      features: string[];
      specs: Array<{ label: string; value: string }>;
    }>;
  };
  process: {
    badge: string;
    heading: string;
    highlightHeading: string;
    description: string;
    stages: Array<{
      step: string;
      title: string;
      subtitle: string;
      description: string;
      activities: string[];
      deliverable: string;
      toolingAspect: string;
      tag: string;
    }>;
  };
  machinery: {
    badge: string;
    heading: string;
    highlightHeading: string;
    description: string;
    machines: MachineryItem[];
  };
  capacity: {
    badge: string;
    heading: string;
    highlightHeading: string;
    description: string;
    stats: Array<{
      id: string;
      metric: string;
      isNumeric: boolean;
      prefix?: string;
      suffix?: string;
      label: string;
      sublabel: string;
    }>;
    highlights: Array<{
      title: string;
      description: string;
    }>;
    capabilities: Array<{
      id: string;
      title: string;
      badge: string;
      description: string;
      image: string;
      link: string;
      points: string[];
    }>;
  };
  quality: {
    badge: string;
    heading: string;
    highlightHeading: string;
    description: string;
    cards: Array<{
      id: string;
      number: string;
      title: string;
      description: string;
      detailTitle: string;
      detailItems: string[];
    }>;
  };
  customSolutions: {
    badge: string;
    heading: string;
    highlightHeading: string;
    description: string;
    solutions: Array<{
      id: string;
      number: string;
      title: string;
      description: string;
      detail: string;
      highlights: string[];
    }>;
  };
}

export const STATIC_MANUFACTURING_FALLBACK: DynamicManufacturingData = {
  hero: {
    bannerImage: "/manufacturing/manufacturing banner.png",
    badge: "MANUFACTURING CAPABILITIES",
    titlePrefix: "Manufacturing ",
    titleHighlight: "Capabilities",
    breadcrumbHome: "Home",
    breadcrumbCurrent: "Manufacturing",
  },
  overview: {
    badge: "MANUFACTURING OVERVIEW",
    heading: "Precision Engineering.",
    highlightHeading: "Manufacturing Excellence.",
    summary:
      "Every tooling phase—from metallurgical steel verification and parametric 3D CAD design to finish machining, optical assembly, and in-house press trials—is managed under one roof to assure complete dimensional integrity and on-schedule execution.",
    facilityImage: "/About/FACILITY.png",
    facilityLocation: "Precision Mould Park, Phase-IV GIDC, Gujarat",
    facilityTag: "15,000 m² Plant",
    infrastructureTitle: "End-to-End Toolroom Infrastructure",
    infrastructureDesc:
      "Our plant integrates dedicated machining cells and metrology labs to support demanding mould builds. Synchronized toolpaths and strict in-process checkpoints ensure zero accumulated tolerance errors across all cavities.",
    stats: MANUFACTURING_OVERVIEW_STATS,
    capabilities: [
      {
        id: "cnc",
        title: "CNC Precision Machining",
        cardDesc:
          "High-speed 5-axis milling centers delivering sub-micron tolerances for complex multi-cavity stack components.",
        panelDesc: "Precision machining for complex mould components and demanding geometries.",
      },
      {
        id: "edm",
        title: "EDM & Wire EDM",
        cardDesc:
          "Precision spark erosion and 4-axis wire cut cells achieving optical mirror surface finishes in deep ribs.",
        panelDesc: "Detailed machining for intricate profiles, cavities and complex mould features.",
      },
      {
        id: "metrology",
        title: "Metrology & Dimensional Inspection",
        cardDesc:
          "Zeiss 3D CNC Coordinate Measuring Machines inside a 20°C temperature-controlled quality laboratory.",
        panelDesc: "Dimensional inspection to support mould accuracy and consistent manufacturing quality.",
      },
      {
        id: "testing",
        title: "Mould Testing & Validation",
        cardDesc:
          "100% pre-dispatch trial runs on in-house injection moulding presses verifying cycle times and part concentricity.",
        panelDesc: "Mould testing and validation to evaluate performance and verify manufacturing requirements.",
      },
    ],
  },
  designDevelopment: {
    badge: "MOLD DESIGN & DEVELOPMENT",
    heading: "Engineering Design &",
    highlightHeading: "Simulation R&D",
    description:
      "Our engineering team develops mould designs around product requirements, tooling geometry and manufacturability, helping prepare designs for reliable production.",
    image: "/manufacturing/mfg_cad.jpg",
    overlayBadge: "IN-HOUSE R&D DESIGN",
    overlayTitle: "CAD Design & Engineering",
    overlayTag: "Design-led mould development",
    workflowTitle: "From Concept to Manufacturing",
    workflowDesc:
      "A structured four-stage design methodology ensuring every tool is fully assessed before shop floor release.",
    capabilities: [
      {
        id: "cad-simulation",
        number: "01",
        title: "CAD & Simulation Capabilities",
        panelTitle: "CAD & Simulation",
        panelDesc:
          "3D mould design and engineering analysis to evaluate design feasibility and support tooling development.",
        cardDesc:
          "Full 3D parametric modelling and flow simulations ensuring optimized cooling and balanced runner systems.",
        points: [
          "3D parametric solid assembly & BOM generation",
          "Mould flow thermal balance & filling analysis",
          "Cooling line layout optimization for cycle reduction",
        ],
      },
      {
        id: "custom-mold",
        number: "02",
        title: "Custom Mould Development",
        panelTitle: "Custom Mould Development",
        panelDesc:
          "Mould solutions tailored to product geometry, packaging requirements and application needs.",
        cardDesc:
          "Tailored tooling engineered for client container volumes, custom neck finishes, and container lightweighting.",
        points: [
          "Specialized neck finishes (PCO, 38mm, Bericap, wide-mouth jars)",
          "Preform lightweighting and resin distribution control",
          "Tooling adaptation for client-specific machine specifications",
        ],
      },
      {
        id: "engineering-dfm",
        number: "03",
        title: "Engineering Process & DFM",
        panelTitle: "Design for Manufacturability",
        panelDesc:
          "Engineering reviews to assess mould design, part geometry and manufacturing considerations before production.",
        cardDesc:
          "Structured pre-machining reviews pinpointing draft angles, parting splits, and core stability before steel cutting.",
        points: [
          "Pre-machining DFM feasibility review & client sign-off",
          "Parting split optimization and flash-free shut-off design",
          "Detailed 2D engineering toolroom shop blueprints",
        ],
      },
    ],
    workflowSteps: [
      {
        step: "01",
        title: "Design Brief",
        shortDesc: "Requirements & resin feasibility",
        fullDesc:
          "Evaluating customer 2D/3D container drawings, neck finish requirements, resin shrinkage, and cavitation targets.",
        deliverable: "Feasibility Assessment",
      },
      {
        step: "02",
        title: "3D Mould Design",
        shortDesc: "Parametric CAD & stack layout",
        fullDesc:
          "Building parametric CAD assemblies in Siemens NX/SolidWorks with optimized cooling line routing and hot runner sizing.",
        deliverable: "3D CAD Stack Assembly",
      },
      {
        step: "03",
        title: "DFM Review",
        shortDesc: "Engineering & parting analysis",
        fullDesc:
          "Rigorous pre-machining review of draft angles, parting shut-offs, gate vestiges, and thermal flow balance.",
        deliverable: "Approved DFM Report",
      },
      {
        step: "04",
        title: "Manufacturing Handoff",
        shortDesc: "Approved CAM shop release",
        fullDesc:
          "Final toolroom handoff including verified 2D engineering blueprints, steel procurement BOM, and 5-axis CNC toolpaths.",
        deliverable: "Toolroom Shop Pack",
      },
    ],
  },
  precisionMachining: {
    badge: "PRECISION MACHINING",
    heading: "CNC & EDM",
    highlightHeading: "High-Accuracy Manufacturing",
    description:
      "Explore the machining processes used to manufacture mould cavities, cores and precision tooling elements with high dimensional accuracy.",
    tabs: [
      {
        id: "cnc",
        tabLabel: "CNC Precision Machining",
        badge: "MULTI-AXIS MILLING",
        heading: "5-Axis CNC Precision Machining",
        subtitle: "Controlled machining for complex mould components",
        description:
          "Precision CNC machining supports the production of complex mould geometries, cavity details and carefully finished tooling components.",
        image: "/manufacturing/cnc-precision-machining.webp",
        imageAlt: "CNC machining centre milling a steel mould block in Gujarat toolroom",
        features: [
          "Multi-axis machining for complex geometries, where supported",
          "Appropriate cutting strategies for mould components",
          "Dimensional checks throughout the manufacturing process",
          "Surface finishing suited to component requirements",
        ],
        specs: [
          { label: "Machining Process", value: "High-Accuracy CNC Milling" },
          { label: "Quality Focus", value: "Complex Mould Cavities & Cores" },
          { label: "Inspection Method", value: "In-Process Dimensional Checks" },
        ],
      },
      {
        id: "edm",
        tabLabel: "EDM & Wire EDM",
        badge: "ELECTRICAL DISCHARGE",
        heading: "EDM & Wire EDM Machining",
        subtitle: "Intricate profiles and detailed mould features",
        description:
          "Electrical discharge machining supports detailed features, narrow profiles and geometries that may be difficult to produce using conventional cutting methods.",
        image: "/manufacturing/edm-wire-machining.webp",
        imageAlt: "Wire EDM machine operating on a precision steel mould insert in Gujarat",
        features: [
          "Detailed cavity and profile machining",
          "Wire-cut machining for suitable intricate geometries",
          "Careful control of workpiece positioning",
          "Inspection of machined features against design requirements",
        ],
        specs: [
          { label: "Machining Process", value: "Wire EDM & Die Sinking" },
          { label: "Quality Focus", value: "Intricate Profiles & Deep Ribs" },
          { label: "Inspection Method", value: "Optical & Contact Verification" },
        ],
      },
      {
        id: "grinding",
        tabLabel: "Precision Surface Grinding",
        badge: "SURFACE & DATUM FINISHING",
        heading: "Precision Surface Grinding",
        subtitle: "Flatness, finish and dimensional control",
        description:
          "Precision grinding helps achieve the required surface finish and dimensional characteristics on suitable mould components and tooling surfaces.",
        image: "/manufacturing/cnc-precision-machining.webp",
        imageAlt: "Precision surface grinding process for mould components and plates",
        features: [
          "Controlled finishing of appropriate steel surfaces",
          "Preparation of mating and reference surfaces",
          "Dimensional inspection after machining",
          "Surface quality checks based on component requirements",
        ],
        specs: [
          { label: "Machining Process", value: "Precision Surface Grinding" },
          { label: "Quality Focus", value: "Mating Plates & Datum Planes" },
          { label: "Inspection Method", value: "Flatness & Parallelism Checks" },
        ],
      },
    ],
  },
  process: {
    badge: "9-STAGE MANUFACTURING PROCESS",
    heading: "Our Step-by-Step",
    highlightHeading: "Mould Making Process",
    description:
      "A transparent, milestone-driven toolroom workflow from product engineering drawing through CMM inspection and full in-house press trial validation.",
    stages: PROCESS_STEPS.map((s) => ({
      step: s.step,
      title: s.title,
      subtitle: s.subtitle,
      description: s.description,
      activities: s.details,
      deliverable: s.deliverable,
      toolingAspect: `${s.title} technical execution`,
      tag: s.subtitle,
    })),
  },
  machinery: {
    badge: "MACHINERY & EQUIPMENT",
    heading: "Our Machinery.",
    highlightHeading: "Your Manufacturing Confidence.",
    description:
      "Explore the machining, inspection and mould-trial equipment supporting our tooling and manufacturing capabilities.",
    machines: MACHINERY_LIST,
  },
  capacity: {
    badge: "PRODUCTION CAPACITY",
    heading: "Scale, Precision &",
    highlightHeading: "Toolroom Capacity",
    description:
      "Engineered toolroom infrastructure capable of delivering high-volume multi-cavity stack tooling with synchronized machining shifts.",
    stats: PRODUCTION_STATISTICS_DATA,
    highlights: CAPACITY_HIGHLIGHTS,
    capabilities: MOULD_PRODUCTION_CAPABILITIES,
  },
  quality: {
    badge: "QUALITY & INSPECTION",
    heading: "Built for Precision.",
    highlightHeading: "Verified for Performance.",
    description:
      "Discover the measurement and quality practices applied across each stage of mould manufacturing to maintain dimensional control.",
    cards: [
      {
        id: "equipment",
        number: "01",
        title: "Inspection Equipment",
        description:
          "Use suitable precision measuring and inspection instruments to verify component dimensions and manufacturing requirements.",
        detailTitle: "Metrology & Instrument Capabilities",
        detailItems: [
          "Coordinate Measuring Machine (CMM) multi-axis digital probing",
          "Optical thread profile projectors and non-contact surface profilometers",
          "Digital micrometer sets, bore gauges, and calibrated dial indicators",
        ],
      },
      {
        id: "in-process",
        number: "02",
        title: "In-Process Quality Control",
        description:
          "Perform relevant checks during machining and mould manufacturing to identify deviations before the next production stage.",
        detailTitle: "Stage-Gate In-Process Verification",
        detailItems: [
          "On-machine toolpath and probe measurement after roughing and semi-finishing",
          "Electrode wear calibration and spark gap verification in EDM cells",
          "Cavity insert concentricity and stack plate flatness checkpoints",
        ],
      },
      {
        id: "precision",
        number: "03",
        title: "Precision Measurement",
        description:
          "Verify critical dimensions and component geometry against approved drawings and specified tolerances.",
        detailTitle: "Geometric & Dimensional Tolerancing",
        detailItems: [
          "Critical cavity, core shank, and neck ring dimensional inspection",
          "Interchangeability checks across multi-cavity stack components",
          "Cooling channel wall thickness and manifold alignment verification",
        ],
      },
      {
        id: "testing-final",
        number: "04",
        title: "Testing & Final Inspection",
        description:
          "Inspect completed mould components and carry out applicable functional or trial checks before delivery.",
        detailTitle: "Pre-Dispatch Mould Validation",
        detailItems: [
          "Hydrostatic pressure and leak testing of cooling water circuits",
          "Ejection stroke calibration and mechanical alignment dry-cycle checks",
          "Comprehensive digital inspection report and sample sign-off records",
        ],
      },
    ],
  },
  customSolutions: {
    badge: "CUSTOM MOLD SOLUTIONS",
    heading: "Customized Solutions for",
    highlightHeading: "Demanding Mould Requirements",
    description:
      "We coordinate mould requirements with customer specifications, machine configurations and application goals to deliver tailored tooling solutions.",
    solutions: [
      {
        id: "development",
        number: "01",
        title: "Customized Mould Development",
        description:
          "Develop mould solutions around the required product geometry, material, mould configuration and production objectives.",
        detail:
          "Design coordination, tooling configuration and development planning based on approved customer requirements.",
        highlights: [
          "Tailored cavity stack configurations & balanced cooling routing",
          "Resin-specific shrinkage compensation (PET, PP, HDPE, PCR blends)",
          "Development planning aligned with customer production schedules",
        ],
      },
      {
        id: "requirements",
        number: "02",
        title: "Customer-Specific Requirements",
        description:
          "Align tooling requirements with the customer's product specifications, production equipment and manufacturing workflow.",
        detail:
          "Discuss product dimensions, machine compatibility, mould interfaces and relevant production constraints.",
        highlights: [
          "Mould base clamping, tie-bar spacing, and machine stroke compatibility",
          "Custom preform neck finish & container closure interface verification",
          "Automation & take-out robot mounting alignment",
        ],
      },
      {
        id: "support",
        number: "03",
        title: "Engineering Support",
        description:
          "Coordinate technical requirements through mould development, validation and applicable production support.",
        detail:
          "Support can include design discussions, trial coordination, technical feedback and agreed tooling improvements.",
        highlights: [
          "DFM engineering review and parametric tooling discussions",
          "Pre-dispatch press trial coordination and sample validation",
          "Technical feedback and agreed tooling optimization",
        ],
      },
    ],
  },
};

export async function getDynamicManufacturingContent(): Promise<DynamicManufacturingData> {
  try {
    const res = await fetch(ADMIN_MANUFACTURING_URL, {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("Failed to fetch dynamic manufacturing content");
    const json = await res.json();
    if (json.success && json.data) {
      return json.data;
    }
  } catch (err) {
    console.warn("Using fallback static manufacturing data (admin backend loading/offline):", err);
  }

  return STATIC_MANUFACTURING_FALLBACK;
}
