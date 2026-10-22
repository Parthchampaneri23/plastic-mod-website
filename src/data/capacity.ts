export interface ProductionStatistic {
  id: string;
  metric: string;
  isNumeric: boolean;
  prefix?: string;
  suffix?: string;
  label: string;
  sublabel: string;
}

export interface MouldCapabilityItem {
  id: string;
  title: string;
  badge: string;
  description: string;
  image: string;
  link: string;
  points: string[];
}

export interface CapacityFeature {
  title: string;
  description: string;
}

// 1. Four Production Statistics: matches verified stats from Home & Manufacturing Overview (easy to understand)
export const PRODUCTION_STATISTICS_DATA: ProductionStatistic[] = [
  {
    id: 'experience',
    metric: '30',
    prefix: '',
    suffix: '+',
    isNumeric: true,
    label: 'Years of Experience',
    sublabel: 'Established Since 1994',
  },
  {
    id: 'molds-delivered',
    metric: '1,500',
    prefix: '',
    suffix: '+',
    isNumeric: true,
    label: 'Moulds Manufactured',
    sublabel: 'Preform, ISBM & EBM Tooling',
  },
  {
    id: 'facility-area',
    metric: '15,000',
    prefix: '',
    suffix: ' m²',
    isNumeric: true,
    label: 'Toolroom Facility Area',
    sublabel: 'Phase-IV GIDC, Gujarat',
  },
  {
    id: 'cavitation-capability',
    metric: '144',
    prefix: '1 to ',
    suffix: ' Cav',
    isNumeric: true,
    label: 'Cavitation Capability',
    sublabel: 'Micro to High-Volume Stacks',
  },
];

// 2. Manufacturing Capacity Feature Highlights
export const CAPACITY_HIGHLIGHTS: CapacityFeature[] = [
  {
    title: 'Integrated Precision Toolroom',
    description: 'Dedicated bays for 5-axis CNC milling, spark erosion EDM, 4-axis wire cut, and flat surface grinding operating in synchronized production shifts.',
  },
  {
    title: 'Multi-Complexity Mould Handling',
    description: 'Engineering infrastructure equipped to execute simple single-cavity prototype tools through complex 144-cavity balanced hot runner preform stacks.',
  },
  {
    title: 'Controlled Metrology & In-Process Verification',
    description: 'Zeiss 3D CNC Coordinate Measuring Machines inside a 20°C temperature-controlled quality laboratory ensure zero cumulative tolerance errors.',
  },
  {
    title: 'In-House Validation Press Trials',
    description: 'Dedicated 180T to 450T injection moulding trial presses verify cycle times, gate balance, and sample concentricity prior to dispatch.',
  },
];

// 3. Mould Production Capabilities: 3 core categories with verified routes and images
export const MOULD_PRODUCTION_CAPABILITIES: MouldCapabilityItem[] = [
  {
    id: 'preform-jar',
    title: 'PET Preform & Jar Moulds',
    badge: '1 to 144 Cavities',
    description: 'High-speed preform and wide-mouth jar tooling engineered with balanced hot runner manifolds, interchangeable components, and optimized conformal cooling for rapid cycle times.',
    image: '/product/pet-preform-mold.png',
    link: '/products/pet-preform-mold',
    points: [
      'Multi-cavity preform stacks (up to 144 cavities) for water, CSD, and hot-fill bottles',
      'Wide-mouth jar moulds with custom multi-start neck thread finishes',
      'Hardened Stavax ESR stainless steel components with sub-micron interchangeability',
    ],
  },
  {
    id: 'isbm',
    title: 'ISBM Moulds',
    badge: 'Single-Stage Tooling',
    description: 'Injection Stretch Blow Mould tooling engineered for single-stage machine platforms, delivering crystal clarity, precise neck orientation, and uniform wall thickness.',
    image: '/product/isbm-bottle-mold.png',
    link: '/products/isbm-bottle-mold',
    points: [
      'Single-stage integrated preform injection and stretch-blow cavity stations',
      'Optical mirror cavity surface finishes (Ra ≤ 0.1 µm) for cosmetic and pharma containers',
      'Engineered base petaloid geometries and precision thread alignment',
    ],
  },
  {
    id: 'ebm',
    title: 'EBM Moulds',
    badge: 'Extrusion Blow Moulding',
    description: 'Extrusion blow mould tooling for hollow plastic containers, engineered with durable beryllium copper pinch-offs and high-conductivity thermal cooling layouts.',
    image: '/product/ebm-bottle-mold.png',
    link: '/products/ebm-bottle-mold',
    points: [
      'High-durability cavity blocks for HDPE, PP, LDPE, and multi-layer containers',
      'Calibrated beryllium copper pinch-off inserts for clean bottom flash separation',
      'Calibrated neck finishes and uniform parison cooling across high-volume production',
    ],
  },
];
