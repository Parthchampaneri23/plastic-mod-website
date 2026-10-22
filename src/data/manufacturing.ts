export interface MachineryItem {
  id: string;
  slug: string;
  name: string;
  manufacturer?: string;
  model?: string;
  category: 'CNC' | 'EDM' | 'CMM' | 'Grinding' | 'Trial';
  badge: string;
  image: string;
  galleryImages?: string[];
  shortDescription?: string;
  detailDescription?: string;
  specifications: string; // legacy summary string
  capacity: string; // legacy summary string
  application: string; // legacy summary string
  specList?: { label: string; value: string }[];
  capacityDetails?: { label: string; value: string }[];
  applicationList?: string[];
  relatedSlugs?: string[];
}

export interface ProcessStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  deliverable: string;
}

export const MANUFACTURING_OVERVIEW_STATS = [
  { value: '30+', label: 'Years Experience', detail: 'Tooling mastery established since 1994' },
  { value: '1,500+', label: 'Molds Delivered', detail: 'Built for diverse global industries' },
  { value: '100%', label: 'Quality Tested', detail: '100% pre-dispatch trial validation' },
  { value: '25+', label: 'Cities Served', detail: 'Trusted partner across India & overseas' },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Requirement Analysis',
    subtitle: 'Product Feasibility & Preform Engineering',
    description: 'Thorough evaluation of preform drawing, neck finish specifications, resin selection, cycle time targets, and cavitation planning.',
    details: ['Part 3D model & DFM assessment', 'Resin rheology & shrinkage analysis', 'Cavitation & tonnage calculation', 'Hot runner system sizing'],
    deliverable: 'DFM Engineering Report & Feasibility Sign-off',
  },
  {
    step: '02',
    title: 'Mold Design',
    subtitle: 'Full 3D CAD & MoldFlow Simulation',
    description: 'State-of-the-art MoldFlow injection simulation, conformal cooling channel routing, and complete parametric 3D assembly generation.',
    details: ['Full 3D CAD parametric stack layout', 'Cooling thermal simulation & cycle reduction', 'Gate vestige & fill balance simulation', 'Complete BOM & tooling blueprint'],
    deliverable: 'Approved 3D Tooling CAD & CAE MoldFlow Simulation',
  },
  {
    step: '03',
    title: 'Material Selection',
    subtitle: 'Premium Tooling Steel & Metallurgy',
    description: 'Procurement of certified European/Japanese tool steels (Bohler, Uddeholm, Assab) with pre-hardened or vacuum-heat-treated grades.',
    details: ['Cavities: Stavax ESR / 1.2083 (HRC 50-52)', 'Core & Neck Rings: Heat-treated corrosion-proof steel', 'Wear plates: Ampco beryllium copper / bronze inserts', 'Ultrasonic metallurgy testing for zero porosity'],
    deliverable: 'Certified Steel Mill Test Certificates & Hardness Logs',
  },
  {
    step: '04',
    title: 'CNC Machining',
    subtitle: 'High-Speed 5-Axis Milling',
    description: 'Roughing and high-speed precision finishing on rigid Japanese & Taiwanese machining centers running at up to 24,000 RPM.',
    details: ['Simultaneous 5-axis mold base & core pocketing', 'High-speed finishing with diamond-coated micro tools', 'Sub-micron contouring for aerodynamic preform profiles', 'Thermal compensation sensors during 24/7 machining'],
    deliverable: 'CNC In-Process Coordinate Metrology Log',
  },
  {
    step: '05',
    title: 'EDM / Precision Machining',
    subtitle: 'Mirror Spark Erosion & Wire Cut',
    description: 'Sub-micron CNC die sinking EDM for deep neck ribs and sharp parting corners, paired with precision 4-axis wire EDM.',
    details: ['Mirror-spark finish EDM (Ra < 0.1 µm)', 'Copper-tungsten micro-electrodes generation', 'Precision wire-cut for split neck rings (±0.002 mm)', 'Optical surface roughness profile validation'],
    deliverable: 'Surface Finish Roughness (Ra) Metrology Sign-off',
  },
  {
    step: '06',
    title: 'Mold Assembly',
    subtitle: 'Master Toolmaker Hand Fitting & Bluing',
    description: 'Meticulous benching, optical bluing check, hot runner manifold integration, and smooth slider cam alignment by senior Gujarati toolmakers.',
    details: ['100% bluing contact verification (>85% contact area)', 'Multi-zone hot runner manifold thermal wiring & seal check', 'Hydraulic / pneumatic stripper stroke calibration', 'Smooth ejection plate cycle balancing'],
    deliverable: 'Assembly Clearance & Interlocking Verification Sheet',
  },
  {
    step: '07',
    title: 'Quality Inspection',
    subtitle: 'Zeiss 3D CMM & Metrology Testing',
    description: 'Comprehensive dimensional verification inside a 20°C temperature-controlled metrology laboratory using 3D CNC CMM and optical profile projectors.',
    details: ['Zeiss 3D CMM coordinate inspection', 'Neck thread pitch & diameter optical projector scan', 'Cooling water channel pressure test (10 bar leak-free)', 'Core-cavity concentricity & wall thickness deviation check'],
    deliverable: 'Full 3D CMM Dimensional Inspection Certificate',
  },
  {
    step: '08',
    title: 'Mold Trial',
    subtitle: 'In-House Injection Molding Machine Testing',
    description: 'Real-world production trial run on in-house KraussMaffei & Haitian injection presses to evaluate cycle times, part aesthetics, and gate quality.',
    details: ['T0 / T1 production trial runs with customer resin', 'Dry-cycle timing & fast ejection testing', 'Preform weight variation check across all cavities (CV < 0.2%)', 'Drop impact & optical haze inspection of samples'],
    deliverable: 'Sample Mold Trial Report & Qualified First Article Samples',
  },
  {
    step: '09',
    title: 'Final Delivery',
    subtitle: 'Sea/Air Export Packaging & Deployment Support',
    description: 'VCI anti-rust oil coating, heavy-duty seaworthy wooden crating, spare parts kit, and on-site technician commissioning at customer site.',
    details: ['Multi-layer vacuum wrap & anti-corrosion VCI barrier', 'Heavy-duty steel-reinforced export wooden box', 'Complete spare parts kit (nozzles, tips, O-rings, heaters)', 'Operation & maintenance manual + commissioning engineer support'],
    deliverable: 'Export Dispatch Kit, Operation Manual & Warranty Pack',
  },
];

export const MACHINERY_LIST: MachineryItem[] = [
  {
    id: 'mach-1',
    slug: 'cnc-precision-machining',
    name: 'Makino & Mazak 5-Axis High-Speed CNC',
    manufacturer: 'Makino / Mazak Tooling Cells',
    model: '5-Axis High-Speed Machining Centers',
    category: 'CNC',
    badge: '5-Axis High-Speed',
    image: '/About/CNC.png',
    galleryImages: ['/About/CNC.png', '/manufacturing/cnc-precision-machining.webp'],
    shortDescription:
      'High-speed simultaneous multi-axis machining centers dedicated to hardened mould plates, complex cavity blocks, and aerodynamic preform cores.',
    detailDescription:
      'Our precision CNC milling cell operates rigid, thermally stable machining centers capable of simultaneous multi-axis contouring. Operating with optimized cutting strategies, advanced CAD/CAM trochoidal pocketing routines, and thermal deformation compensation, this machinery ensures consistent dimensional repeatability across multi-cavity stack components.',
    specifications: 'Spindle Speed: 24,000 RPM | Rapid Traverse: 48 m/min | Positional Accuracy: ±0.002 mm',
    capacity: 'Table Size: 1100 × 650 mm | Max Workpiece: 1,200 kg',
    application: 'High-cavitation mould plates, cavity inserts, and aerodynamic preform core contouring with mirror surface finishes.',
    specList: [
      { label: 'Machine Type', value: '5-Axis Simultaneous CNC Machining Center' },
      { label: 'Control System', value: 'High-Speed Precision Numerical Control' },
      { label: 'Spindle Speed', value: 'Up to 24,000 RPM' },
      { label: 'Rapid Traverse', value: '48 m/min on linear axes' },
      { label: 'Positional Accuracy', value: '±0.002 mm verified via optical linear scales' },
      { label: 'Cooling Method', value: 'High-pressure through-spindle & flood coolant' },
    ],
    capacityDetails: [
      { label: 'Working Table Size', value: '1100 × 650 mm' },
      { label: 'Maximum Workpiece Weight', value: '1,200 kg' },
      { label: 'Axis Travel (X / Y / Z)', value: '1050 × 600 × 550 mm' },
      { label: 'Tool Magazine Capacity', value: '30+ Automatic Tool Changer' },
    ],
    applicationList: [
      'Multi-cavity PET preform stack plate pocketing and boring',
      'Complex 3D cavity insert contouring and finishing',
      'High-precision preform core shank and taper lock machining',
      'Manifold plate cooling water and electrical routing channels',
    ],
    relatedSlugs: ['die-sinking-edm', 'wire-edm', 'cmm-metrology'],
  },
  {
    id: 'mach-2',
    slug: 'die-sinking-edm',
    name: 'Charmilles & Sodick CNC Die Sinking EDM',
    manufacturer: 'Charmilles / Sodick Spark Erosion Cells',
    model: 'CNC Die Sinking Electrical Discharge Machine',
    category: 'EDM',
    badge: 'Sub-Micron EDM',
    image: '/About/EDM.png',
    galleryImages: ['/About/EDM.png', '/manufacturing/edm-wire-machining.webp'],
    shortDescription:
      'Sub-micron electrical discharge erosion for intricate geometries, deep parting ribs, and fine closure knurls where conventional cutting tools cannot reach.',
    detailDescription:
      'Equipped with advanced fuzzy logic pulse generators and automatic electrode changers, our CNC die sinking EDM cells execute micro-spark erosion in hardened tool steel without tool chatter. This enables mirror-like optical surface finishes and intricate detail reproduction while strictly controlling the recast layer.',
    specifications: 'Generator: Fuzzy Logic Micro-Pulse | Surface Finish: Ra 0.08 µm (Mirror Finish)',
    capacity: 'Work Tank: 900 × 600 × 350 mm | Max Electrode Weight: 50 kg',
    application: 'Complex deep ribs, sharp split thread geometries, closure knurl detailing, and micro-cavity texturing without manual polishing.',
    specList: [
      { label: 'Machine Type', value: 'CNC Die Sinking EDM with Micro-Pulse Generator' },
      { label: 'Electrode Positioning', value: 'Sub-micron 3D C-axis orbital rotation' },
      { label: 'Surface Finish Achievable', value: 'Down to Ra 0.08 µm (Optical Mirror Spark)' },
      { label: 'Recast Layer Control', value: 'Controlled micro-energy finishing pulses' },
      { label: 'Dielectric Fluid System', value: 'Chilled, continuously filtered dielectric fluid' },
    ],
    capacityDetails: [
      { label: 'Work Tank Dimensions', value: '900 × 600 × 350 mm' },
      { label: 'Maximum Workpiece Weight', value: '800 kg' },
      { label: 'Maximum Electrode Weight', value: '50 kg' },
      { label: 'Axis Travel (X / Y / Z)', value: '600 × 400 × 350 mm' },
    ],
    applicationList: [
      'Deep narrow rib erosion in preform and closure mould cavities',
      'Sharp parting corners and shut-off split geometries',
      'Intricate tamper-evident band teeth and closure knurls',
      'Textured and optical mould surfaces eliminating hand benching',
    ],
    relatedSlugs: ['wire-edm', 'cnc-precision-machining', 'precision-grinding'],
  },
  {
    id: 'mach-3',
    slug: 'wire-edm',
    name: 'Fanuc Robocut Precision Wire EDM',
    manufacturer: 'Fanuc High-Precision Robocut',
    model: '4-Axis Precision Wire-Cut Electrical Discharge Machine',
    category: 'EDM',
    badge: 'Wire Cut CNC',
    image: '/Home/inf2.png',
    galleryImages: ['/Home/inf2.png', '/manufacturing/edm-wire-machining.webp'],
    shortDescription:
      'High-precision continuous wire cutting for split neck rings, slide guide wedges, and interchangeable tooling components with sub-micron taper accuracy.',
    detailDescription:
      'Utilizing ultra-fine brass and zinc-coated wire with automatic wire threading and AICC-II digital discharge control, our wire EDM machines cut complex 2D and 4D tapered profiles in pre-hardened steels. This process delivers tight clearance fits between mating tooling elements with zero mechanical cutting deflection.',
    specifications: 'Wire Diameter: 0.10 - 0.30 mm | Best Accuracy: ±0.0015 mm | AICC II Control',
    capacity: 'Stroke: 600 × 400 × 310 mm | Max Workpiece: 800 kg',
    application: 'Split neck ring profiles, slide lock wedges, core sleeve guides, and high-precision interchangeable mould components.',
    specList: [
      { label: 'Machine Type', value: '4-Axis High-Precision CNC Wire EDM' },
      { label: 'Wire Diameter Range', value: '0.10 mm to 0.30 mm' },
      { label: 'Positional Accuracy', value: '±0.0015 mm' },
      { label: 'Taper Angle Capacity', value: '±30° / 100 mm taper cut' },
      { label: 'Threading Technology', value: 'High-speed underwater automatic wire re-threading' },
    ],
    capacityDetails: [
      { label: 'Machining Stroke (X / Y / Z)', value: '600 × 400 × 310 mm' },
      { label: 'U / V Axis Travel', value: '±100 mm' },
      { label: 'Maximum Workpiece Dimensions', value: '1050 × 820 × 300 mm' },
      { label: 'Maximum Workpiece Weight', value: '800 kg' },
    ],
    applicationList: [
      'High-cavitation split neck ring parting lines and thread profiles',
      'Precision angle wedges and hardened slider gib guides',
      'Core retaining plates and interlock keyway slots',
      'Direct cutting of hardened tool steel inserts (HRC 52-56)',
    ],
    relatedSlugs: ['die-sinking-edm', 'cnc-precision-machining', 'cmm-metrology'],
  },
  {
    id: 'mach-4',
    slug: 'cmm-metrology',
    name: 'Zeiss DuraMax 3D CNC CMM Metrology',
    manufacturer: 'Carl Zeiss Industrial Metrology',
    model: 'DuraMax CNC 3D Coordinate Measuring Machine',
    category: 'CMM',
    badge: 'Zeiss 3D CMM',
    image: '/manufacturing/mfg_quality.jpg',
    galleryImages: ['/manufacturing/mfg_quality.jpg', '/Home/facility-cmm.png'],
    shortDescription:
      'Climate-controlled 3D coordinate scanning and dimensional verification ensuring tight tolerances and part concentricity before shop floor release.',
    detailDescription:
      'Housed inside a temperature-controlled metrology laboratory maintained at 20°C ± 0.5°C, our Zeiss DuraMax CNC Coordinate Measuring Machine utilizes multi-sensor scanning probes and CALYPSO metrology software. It verifies critical geometric dimensions, concentricity, roundness, and true position across all mould components with certified statistical inspection records.',
    specifications: 'Measuring Uncertainty: MPEE = 1.7 + L/300 µm | Temperature-Controlled Lab (20°C ± 0.5°C)',
    capacity: 'Measuring Range: 800 × 1200 × 600 mm | Renishaw 5-Axis Touch Probe',
    application: 'Full 3D coordinate scanning, concentricity verification, neck thread profile mapping, and automated statistical quality reports.',
    specList: [
      { label: 'Machine Type', value: 'Bridge-Type CNC 3D Coordinate Measuring Machine' },
      { label: 'Measuring Uncertainty', value: 'MPEE = 1.7 + L/300 µm' },
      { label: 'Probe System', value: 'High-accuracy continuous scanning & touch-trigger probe' },
      { label: 'Environment', value: 'Temperature-stabilized metrology room (20°C ± 0.5°C)' },
      { label: 'Software', value: 'Zeiss CALYPSO with CAD comparison & statistical SPC' },
    ],
    capacityDetails: [
      { label: 'Measuring Volume (X / Y / Z)', value: '800 × 1200 × 600 mm' },
      { label: 'Maximum Workpiece Weight', value: '1,000 kg' },
      { label: 'Linear Resolution', value: '0.0001 mm (0.1 µm)' },
      { label: 'Reporting Format', value: 'Automated digital PDF metrology inspection log' },
    ],
    applicationList: [
      '100% inspection of preform core concentricity and cavity diameters',
      'Thread pitch, angle, and diameter verification of neck rings',
      'Stack height and datum plane parallelism across multi-cavity plates',
      'First Article Inspection (FAI) dimensional reports for clients',
    ],
    relatedSlugs: ['cnc-precision-machining', 'precision-grinding', 'mould-trial-presses'],
  },
  {
    id: 'mach-5',
    slug: 'precision-grinding',
    name: 'Okamoto Precision CNC Surface & Cylindrical Grinder',
    manufacturer: 'Okamoto Machine Tool Works',
    model: 'High-Rigidity Precision Surface & Cylindrical Grinders',
    category: 'Grinding',
    badge: 'Surface Precision',
    image: '/Home/inf4.png',
    galleryImages: ['/Home/inf4.png', '/About/CNC.png'],
    shortDescription:
      'Ultra-flat surface grinding and concentric cylindrical finishing ensuring flash-free parting seals and interchangeable stack components.',
    detailDescription:
      'Our precision surface and cylindrical grinding cell employs rigid cast iron bases and hydrodynamic spindle bearings to achieve sub-micron parallelism and mirror-like finishes on mating mould plates. This ensures absolute shut-off integrity across high-cavitation moulds under hundreds of tons of injection clamping force.',
    specifications: 'Spindle Runout: < 0.001 mm | Surface Flatness: 0.002 mm over 1000 mm',
    capacity: 'Chuck Size: 1000 × 500 mm | Max Height: 400 mm',
    application: 'Ultra-flat mould base parting planes, preform core shank cylindrical grinding, and precision shut-off surface finishing.',
    specList: [
      { label: 'Machine Type', value: 'High-Precision Horizontal Surface & Universal Cylindrical Grinder' },
      { label: 'Spindle Runout', value: '< 0.001 mm (1 µm)' },
      { label: 'Surface Flatness Guarantee', value: '0.002 mm over 1,000 mm stroke' },
      { label: 'Bearings', value: 'Hydrodynamic vibration-free spindle bearings' },
      { label: 'Wheel Dressing', value: 'Automated CNC rotary diamond roll dressing' },
    ],
    capacityDetails: [
      { label: 'Magnetic Chuck Dimensions', value: '1000 × 500 mm' },
      { label: 'Maximum Grinding Height', value: '400 mm' },
      { label: 'Max Cylindrical Diameter', value: 'Ø 200 mm × 600 mm length' },
      { label: 'Maximum Table Load', value: '700 kg' },
    ],
    applicationList: [
      'Mould base parting planes and stack plate datum face grinding',
      'Preform core shank cylindrical grinding with tight concentricity',
      'Hardened slider gibs and wear plate parallel finishing',
      'Flash-free shut-off seal preparation across multi-cavity tools',
    ],
    relatedSlugs: ['cnc-precision-machining', 'cmm-metrology', 'mould-trial-presses'],
  },
  {
    id: 'mach-6',
    slug: 'mould-trial-presses',
    name: 'In-House Haitian & KraussMaffei Trial Presses',
    manufacturer: 'Haitian / KraussMaffei Injection Molding Cells',
    model: 'High-Speed Servo-Hydraulic & Electric Injection Presses',
    category: 'Trial',
    badge: 'In-House Trial',
    image: '/manufacturing/mfg_custom.jpg',
    galleryImages: ['/manufacturing/mfg_custom.jpg', '/Home/company-facility.png'],
    shortDescription:
      'Dedicated in-house injection moulding presses from 180T to 650T for full-cavitation mould testing, dry-cycle optimization, and sample qualification.',
    detailDescription:
      'We conduct rigorous pre-dispatch trials on dedicated in-house injection machines equipped with multi-zone hot runner temperature controllers, industrial mold chillers, and dehumidified resin drying systems. Every completed mould undergoes continuous dry cycling and actual resin injection to qualify preform weight consistency, cycle time, gate vestige, and optical clarity.',
    specifications: 'Clamping Force: 180T - 650T | Servo-Hydraulic High-Speed Injection',
    capacity: 'Shot Weight: 50g - 2500g | Multi-Zone Hot Runner Controllers',
    application: '100% full-cavitation production testing, dry-cycle optimization, and preform sample approval prior to factory dispatch.',
    specList: [
      { label: 'Machine Type', value: 'Servo-Hydraulic & All-Electric Injection Moulding Presses' },
      { label: 'Clamping Force Range', value: '180 Tons to 650 Tons' },
      { label: 'Injection Unit Shot Weight', value: '50 g to 2,500 g' },
      { label: 'Hot Runner Control', value: 'Integrated multi-zone PID temperature controllers' },
      { label: 'Auxiliary Support', value: 'Mould chillers, resin hopper dryers & robotic takeout' },
    ],
    capacityDetails: [
      { label: 'Tie Bar Clearance', value: 'Up to 920 × 920 mm' },
      { label: 'Mould Height Range', value: '350 mm to 950 mm' },
      { label: 'Dry Cycle Time Capability', value: 'Fast recovery high-speed toggle' },
      { label: 'Supported Resins', value: 'PET, PP, HDPE, PC, and recycled PCR blends' },
    ],
    applicationList: [
      'T0 / T1 production trial runs with customer-specified resin',
      'Weight variation analysis across 1 to 144 cavities (CV < 0.2%)',
      'Dry-cycle timing evaluation and ejection stroke calibration',
      'Sample qualification and dispatch sign-off report generation',
    ],
    relatedSlugs: ['cnc-precision-machining', 'cmm-metrology', 'precision-grinding'],
  },
];

export const PRODUCTION_CAPACITY_DATA = {
  annualMolds: '250+',
  facilityArea: '15,000 m²',
  cavitationRange: '1 to 144 Cavities',
  onTimeDelivery: '98.6%',
  exportCountries: '18+ Countries',
  metrics: [
    { label: 'PET Preform Mold Sets / Year', value: '140+ Sets', progress: 85 },
    { label: 'ISBM Single-Stage Mold Sets / Year', value: '70+ Sets', progress: 75 },
    { label: 'Extrusion Blow Molds (EBM) / Year', value: '60+ Sets', progress: 70 },
    { label: 'Standard Mold Lead Time (T0)', value: '35 - 45 Days', progress: 90 },
  ],
};

export const QUALITY_STANDARDS = [
  {
    title: 'Incoming Material Verification',
    description: '100% metallurgical ultrasonic inspection, chemical spectro analysis, and Rockwell hardness testing before any machining begins.',
    icon: 'ShieldCheck',
  },
  {
    title: 'In-Process CNC & EDM Metrology',
    description: 'On-machine probe measurement at critical stages to eliminate cumulative dimensional errors during deep 3D milling.',
    icon: 'Cpu',
  },
  {
    title: '100% 3D Zeiss CMM Inspection',
    description: 'All cores, cavities, and neck rings measured in a climate-controlled room (20°C) with comprehensive digital inspection certificates.',
    icon: 'Microscope',
  },
  {
    title: 'Pressure & Leak Testing',
    description: 'All water cooling channels and hot runner manifolds hydrostatically tested at 10-12 bar pressure for 4 hours leak-free assurance.',
    icon: 'Gauge',
  },
];
