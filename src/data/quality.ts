export interface QualityCommitment {
  title: string;
  description: string;
  iconName: string;
}

export interface QualityProcessStage {
  step: string;
  title: string;
  description: string;
  iconName: string;
  detail: string;
}

export interface MaterialInspectionCheck {
  title: string;
  scope: string;
  criteria: string;
  iconName: string;
}

export interface InProcessCheckpoint {
  id: string;
  title: string;
  stage: string;
  focus: string;
  method: string;
  iconName: string;
}

export interface FinalChecklistItem {
  id: string;
  label: string;
  description: string;
  verificationScope: string;
}

export interface MoldTestingStep {
  step: string;
  phase: string;
  title: string;
  description: string;
  keyAction: string;
  iconName: string;
}

export interface MeasurementEquipmentItem {
  id: string;
  name: string;
  category: string;
  purpose: string;
  resolutionOrApplication: string;
  iconName: string;
}

export interface QualityStandardBlock {
  title: string;
  tagline: string;
  description: string;
  points: string[];
  iconName: string;
}

export const QUALITY_COMMITMENTS: QualityCommitment[] = [
  {
    title: "Precision in Every Detail",
    description:
      "Controlled machining tolerances, critical core-cavity alignment, and documented dimensional checks ensure mould parts align with customer specifications.",
    iconName: "Target",
  },
  {
    title: "Consistent Manufacturing Quality",
    description:
      "Standardized multi-stage checks from raw tool steel verification to final trial review reduce variations and protect tooling longevity.",
    iconName: "ShieldCheck",
  },
  {
    title: "Continuous Improvement",
    description:
      "Feedback from assembly fitting, trials, and customer observations continuously refines tooling workflows, machining strategies, and shopfloor documentation.",
    iconName: "TrendingUp",
  },
];

export const QUALITY_PROCESS_STAGES: QualityProcessStage[] = [
  {
    step: "01",
    title: "Raw Material Inspection",
    description:
      "Verification of incoming tool steel billets, pre-hardened plates, and standard components before manufacturing begins.",
    detail: "Grade confirmation, visual defect check & ultrasonic soundness where applicable.",
    iconName: "Layers",
  },
  {
    step: "02",
    title: "Design & Manufacturing Verification",
    description:
      "3D tooling model review, cooling channel validation, draft analysis, and CAM toolpath simulation prior to cutting metal.",
    detail: "Engineering approvals & machining file integrity checks.",
    iconName: "FileCheck2",
  },
  {
    step: "03",
    title: "In-Process Inspection",
    description:
      "Dimensional checking at roughing, semi-finishing, high-speed CNC milling, and EDM spark erosion operations.",
    detail: "Verification of intermediate allowances & geometric profiles.",
    iconName: "Gauge",
  },
  {
    step: "04",
    title: "Final Inspection",
    description:
      "Comprehensive bench verification of completed inserts, plates, parting lines, slides, and cooling circuit seals.",
    detail: "Fitment validation, blue-matching of shutoffs & metrology records.",
    iconName: "CheckCircle2",
  },
  {
    step: "05",
    title: "Mold Testing & Approval",
    description:
      "Functional assembly testing and sample validation to verify dry cycling, ejection mechanism, and mould trial behavior.",
    detail: "Trial observations & documented adjustments before dispatch.",
    iconName: "PlayCircle",
  },
];

export const MATERIAL_INSPECTION_CHECKS: MaterialInspectionCheck[] = [
  {
    title: "Material Grade Verification",
    scope: "Tool Steel & Plates",
    criteria:
      "Confirmation of specified steel grades (e.g., P20, 2316, H13, S136) against procurement orders and intended mould applications.",
    iconName: "Tag",
  },
  {
    title: "Material Certificate Review",
    scope: "Where Available",
    criteria:
      "Review of mill test certificates and heat-treatment documentation provided by certified steel stockists and suppliers.",
    iconName: "FileText",
  },
  {
    title: "Visual & Surface Inspection",
    scope: "Incoming Billets & Blocks",
    criteria:
      "Surface examination for visible scale, pitting, physical deformities, or handling marks before sawing and square-machining.",
    iconName: "Eye",
  },
  {
    title: "Dimensional & Condition Checks",
    scope: "Stock Allowances",
    criteria:
      "Verification of raw block dimensions, squareness, and pre-machining stock allowances against engineering cutting lists.",
    iconName: "Maximize2",
  },
];

export const IN_PROCESS_CHECKPOINTS: InProcessCheckpoint[] = [
  {
    id: "machining-accuracy",
    title: "Machining Accuracy",
    stage: "CNC Roughing & Finishing",
    focus: "Datum reference points, pocket depths, coordinate references, and spindle repeatability.",
    method: "Dial indicators, edge finders, and precision coordinate checks.",
    iconName: "Crosshair",
  },
  {
    id: "critical-dimensions",
    title: "Critical Dimensions",
    stage: "Core, Cavity & Inserts",
    focus: "Neck ring diameters, wall thicknesses, gate orifice geometry, and cavity center-to-center pitch.",
    method: "Vernier micrometers, bore gauges, and metrology optical checks.",
    iconName: "Ruler",
  },
  {
    id: "fit-alignment",
    title: "Component Fit & Alignment",
    stage: "EDM & Bench Fitting",
    focus: "Guide pillar and bush clearances, slide wear-plate alignments, and ejector pin free play.",
    method: "Feeler gauges, slip gauges, and precision ground master pins.",
    iconName: "Sliders",
  },
  {
    id: "surface-finish",
    title: "Surface Finish Review",
    stage: "Polishing & EDM Sparking",
    focus: "Evenness of spark texture, mirror polish areas, absence of chatter marks, and uniform draw polish.",
    method: "Surface comparison standards and optical magnification review.",
    iconName: "Sparkles",
  },
];

export const FINAL_CHECKLIST_ITEMS: FinalChecklistItem[] = [
  {
    id: "fc-1",
    label: "Dimensional Verification",
    description: "Inspection of finished cores, cavities, base plates, and clamping dimensions against approved engineering drawings.",
    verificationScope: "Pre-assembly & Post-assembly measurement",
  },
  {
    id: "fc-2",
    label: "Component Fitment & Parting Line Matching",
    description: "Prussian blue contact check across cavity split lines, slide lock angles, and guide pillar alignment.",
    verificationScope: "Mould assembly bench & spotting press",
  },
  {
    id: "fc-3",
    label: "Surface Finish & Polish Review",
    description: "Visual verification of mould cavity finish, venting depths, gate relief, and draw polishing for clean part release.",
    verificationScope: "Optical inspection & tactile check",
  },
  {
    id: "fc-4",
    label: "Assembly and Function Checks",
    description: "Manual and pneumatic cycle checking of stroke limits, ejector plate retraction, safety latch locks, and water manifolds.",
    verificationScope: "Where applicable to mould configuration",
  },
  {
    id: "fc-5",
    label: "Drawing and Specification Compliance",
    description: "Reconciliation of customer mould data sheet: water connector sizing, knockout locations, eye-bolt hole threads, and locating rings.",
    verificationScope: "Dispatch readiness checklist",
  },
];

export const MOLD_TESTING_STEPS: MoldTestingStep[] = [
  {
    step: "01",
    phase: "Phase 1",
    title: "Setup & Preparation",
    description:
      "Prepare the mould assembly, verify machine platen compatibility, check clamping dimensions, connect cooling circuits, and verify ejector coupling.",
    keyAction: "Platen sizing, cooling circuit leak checks, and initial dry stroke inspection.",
    iconName: "Wrench",
  },
  {
    step: "02",
    phase: "Phase 2",
    title: "Trial & Performance Checks",
    description:
      "Conduct applicable mould trials to observe mold clamping, cavity filling balance, cooling efficiency, and mechanical component behavior under operation.",
    keyAction: "Dynamic parting line behavior, gate shearing, slide timing, and ejection smoothness.",
    iconName: "Activity",
  },
  {
    step: "03",
    phase: "Phase 3",
    title: "Review & Refinement",
    description:
      "Review sample-part observations, assess flashing or parting line deviations, and perform documented shopfloor bench adjustments before final handover.",
    keyAction: "Sample review, corrective spotting, final torque checks, and trial documentation.",
    iconName: "ClipboardCheck",
  },
];

export const MEASUREMENT_EQUIPMENT_ITEMS: MeasurementEquipmentItem[] = [
  {
    id: "vernier-calipers",
    name: "Digital & Dial Calipers",
    category: "Length & Thickness",
    purpose: "Measures outer size, inner holes, and depth of mould plates and steel parts quickly and accurately.",
    resolutionOrApplication: "Standard 0.01 mm accuracy",
    iconName: "Compass",
  },
  {
    id: "micrometers",
    name: "Precision Micrometers",
    category: "High Precision",
    purpose: "Accurately measures tiny details like core pins, neck rings, and thin wall thicknesses down to the micron.",
    resolutionOrApplication: "Ultra-fine 0.001 mm accuracy",
    iconName: "Maximize",
  },
  {
    id: "height-gauges",
    name: "Digital Height Gauges",
    category: "Height & Step Depth",
    purpose: "Measures step heights, pocket depths, and marks clean reference layout lines on granite tables.",
    resolutionOrApplication: "Accurate surface plate measurement",
    iconName: "BarChart2",
  },
  {
    id: "dial-indicators",
    name: "Dial Test Indicators",
    category: "Flatness & Alignment",
    purpose: "Checks machine spindle straightness, plate flatness, and ensures sliding mould parts move smoothly without wobble.",
    resolutionOrApplication: "Detects tiny shifts up to 0.002 mm",
    iconName: "Clock",
  },
  {
    id: "bore-gauges",
    name: "Bore & Hole Gauges",
    category: "Hole & Diameter Checks",
    purpose: "Measures the inside diameter of guide bush holes and round cavities to ensure a perfect fit.",
    resolutionOrApplication: "Roundness and hole size checks",
    iconName: "CircleDot",
  },
  {
    id: "granite-surface-plates",
    name: "Granite Master Tables",
    category: "Flat Reference Table",
    purpose: "Provides a perfectly flat, solid stone surface for comparing heights, testing straightness, and daily part checks.",
    resolutionOrApplication: "Precision Grade 0 flat base",
    iconName: "Square",
  },
];

export const QUALITY_STANDARDS_BLOCKS: QualityStandardBlock[] = [
  {
    title: "Customer Specifications",
    tagline: "Application-Centric Tooling Parameters",
    description:
      "Moulds are engineered and inspected according to approved 2D drawings, 3D CAD models, cavity tolerances, and application requirements agreed with each customer.",
    points: [
      "Customer drawing dimensional tolerances",
      "Specific machine compatibility parameters",
      "Agreed cooling and runner configurations",
    ],
    iconName: "FileCheck",
  },
  {
    title: "Applicable Industry Practices",
    tagline: "Standard Industrial Mouldmaking Discipline",
    description:
      "Our shopfloor follows established precision plastic mouldmaking methods for tool steel selection, EDM spark settings, grinding tolerances, and bench assembly.",
    points: [
      "Standard component interchangeability (Hasco / DME style standards where specified)",
      "Standardized slide, lifter & ejector clearances",
      "Structured stage-wise component tracking",
    ],
    iconName: "Cog",
  },
  {
    title: "Documentation & Traceability",
    tagline: "Where Available & Agreed",
    description:
      "Quality records, inspection notes, and steel certificates are archived and maintained according to project requirements and customer documentation agreements.",
    points: [
      "Raw material batch mill certificates where provided by steel mills",
      "Bench fitting & trial observation records",
      "Final pre-dispatch checklist signoffs",
    ],
    iconName: "ShieldCheck",
  },
];
