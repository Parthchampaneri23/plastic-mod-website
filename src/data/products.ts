export interface ProductSpecification {
  label: string;
  value: string;
}

export interface DetailedTechSpecs {
  moldType: string;
  cavityDetails: string;
  material: string;
  machineCompatibility: string;
  application: string;
}

export interface Product {
  slug: string;
  name: string;
  category: 'Preform & Jar Mold' | 'ISBM Mold' | 'EBM Mold';
  categorySlug: 'preform-jar' | 'isbm' | 'ebm';
  shortDescription: string;
  fullDescription: string;
  overview: string;
  image: string;
  galleryImages: string[];
  keywords: string[];
  specifications: ProductSpecification[];
  techSpecs: DetailedTechSpecs;
  application: string;
  features: string[];
}

export const CATEGORIES = [
  { id: 'all', label: 'ALL PRODUCTS', slug: '' },
  { id: 'preform-jar', label: 'PREFORM & JAR MOULDS', slug: 'preform-jar', categoryName: 'Preform & Jar Mold' },
  { id: 'isbm', label: 'ISBM MOULDS', slug: 'isbm', categoryName: 'ISBM Mold' },
  { id: 'ebm', label: 'EBM MOULDS', slug: 'ebm', categoryName: 'EBM Mold' },
] as const;

export const PRODUCTS: Product[] = [
  // -------------------------------------------------------------------
  // A. Preform & Jar Mold
  // -------------------------------------------------------------------
  {
    slug: 'pet-preform-mold',
    name: 'PET Preform Mold',
    category: 'Preform & Jar Mold',
    categorySlug: 'preform-jar',
    shortDescription: 'High-speed preform moulds built for smooth, reliable bottle production and seamless daily output.',
    overview: 'Engineered for high-volume beverage and packaging lines, our PET Preform Moulds feature balanced hot runner systems, micro-micron concentricity, and ultra-fast thermal cooling.',
    fullDescription: 'Our PET Preform Moulds are built using premium S136 stainless steel and advanced CAD/CAM 3D simulations. The optimized cooling channel geometry dramatically reduces cycle times while guaranteeing uniform wall thickness and zero neck flash across all preform cavities.',
    image: '/product/pet-preform-mold.png',
    galleryImages: [
      '/product/pet-preform-mold.png',
      '/product/pet-preform-mold-detail-2.png',
      '/product/pet-preform-mold-detail-3.png'
    ],
    keywords: ['PET', 'Preform', 'Packaging', 'High Volume'],
    application: 'Beverage & Packaging',
    specifications: [
      { label: 'Mold Type', value: 'PET Preform' },
      { label: 'Application', value: 'Beverage & Packaging' },
      { label: 'Cavity Configuration', value: 'Custom (Single to Multi-cavity)' },
      { label: 'Production', value: 'High Volume' },
    ],
    techSpecs: {
      moldType: 'PET Preform Injection Mould',
      cavityDetails: 'Custom Configurable (8 to 96 Cavities)',
      material: 'S136 Stainless Steel / Hardened Tool Steel (50-54 HRC)',
      machineCompatibility: 'Husky, Netstal, KraussMaffei & standard injection molding machines',
      application: 'Mineral Water, Carbonated Soft Drinks & Juice Packaging',
    },
    features: [
      'High-grade stainless steel core & cavity components',
      'Advanced hot runner balanced flow system',
      'Optimized neck split cooling design',
      'Long tool lifespan with low maintenance',
      'Interchangeable neck splits & core inserts',
    ],
  },
  {
    slug: 'pet-jar-mold',
    name: 'PET Jar Mold',
    category: 'Preform & Jar Mold',
    categorySlug: 'preform-jar',
    shortDescription: 'Custom wide-mouth jar moulds offering sparkling clarity and perfect neck threading every time.',
    overview: 'Designed for wide-mouth packaging applications, our PET Jar Moulds deliver high cosmetic clarity, precise thread engagement, and reliable wall distribution.',
    fullDescription: 'Specifically crafted for wide-mouth food containers, cosmetics, and confectionery jars, these moulds incorporate high thermal conductivity inserts and precision neck split mechanisms to prevent deformation during rapid eject cycles.',
    image: '/product/pet-jar-mold.png',
    galleryImages: [
      '/product/pet-jar-mold.png',
      '/product/pet-jar-mold-detail-2.png',
      '/product/pet-jar-mold-detail-3.png'
    ],
    keywords: ['PET', 'Jar', 'Packaging'],
    application: 'Food, Beverage & Packaging',
    specifications: [
      { label: 'Mold Type', value: 'PET Jar' },
      { label: 'Application', value: 'Food, Beverage & Packaging' },
      { label: 'Cavity Configuration', value: 'Custom' },
      { label: 'Production', value: 'High Volume' },
    ],
    techSpecs: {
      moldType: 'Wide-Mouth PET Jar Mould',
      cavityDetails: 'Custom Configurable (2 to 32 Cavities)',
      material: 'Corrosion-Resistant Stainless Steel / Premium Tool Steel',
      machineCompatibility: 'Compatible with standard injection stretch blow moulding systems',
      application: 'Food Storage, Cosmetics, Confectionery & Powder Packaging',
    },
    features: [
      'Precision wide-mouth neck thread alignment',
      'Uniform wall-thickness control',
      'Corrosion-resistant tool steel insertion',
      'Interchangeable cavity modules',
      'High-gloss cavity mirror polish',
    ],
  },
  {
    slug: 'high-cavitation-preform-mold',
    name: 'High-Cavitation Preform Mold',
    category: 'Preform & Jar Mold',
    categorySlug: 'preform-jar',
    shortDescription: 'Maximized multi-cavity tooling to boost your factory production rates with top-tier precision.',
    overview: 'High-cavitation tooling designed for continuous, round-the-clock preform manufacturing with balanced melt distribution and minimal energy consumption.',
    fullDescription: 'Engineered for major bottling plants requiring high output, this high-cavitation tooling setup integrates multi-zone digital thermal control, pneumatic shut-off valve gates, and ultra-durable mould base structures for 5M+ shot lifespan.',
    image: '/product/high-cavitation-preform-mold.png',
    galleryImages: [
      '/product/high-cavitation-preform-mold.png',
      '/product/pet-preform-mold.png',
      '/product/pet-jar-mold.png'
    ],
    keywords: ['High Cavitation', 'PET', 'Preform', 'Production'],
    application: 'Beverage Packaging',
    specifications: [
      { label: 'Mold Type', value: 'High-Cavitation Preform' },
      { label: 'Application', value: 'Beverage Packaging' },
      { label: 'Cavity Configuration', value: 'High Cavitation Custom' },
      { label: 'Production', value: 'High Volume' },
    ],
    techSpecs: {
      moldType: 'Multi-Cavitation Preform Tooling',
      cavityDetails: 'High Density (32 to 128 Cavities)',
      material: 'Imported Hardened Tool Steel (HRC 52-56)',
      machineCompatibility: 'High-speed automated injection molding platforms',
      application: 'Mass Beverage & Bottling Operations',
    },
    features: [
      'Multi-zone hot runner temperature control',
      'Independent cavity shut-off valve options',
      'Ultra-fast cycle time capability',
      'Heavy-duty base plate rigidity',
      'Sub-micron concentricity guarantee',
    ],
  },

  // -------------------------------------------------------------------
  // B. ISBM Mold
  // -------------------------------------------------------------------
  {
    slug: 'isbm-bottle-mold',
    name: 'ISBM Bottle Mold',
    category: 'ISBM Mold',
    categorySlug: 'isbm',
    shortDescription: 'Single-stage stretch blow moulds delivering crystal-clear bottle finish and uniform wall strength.',
    overview: 'Single-stage Injection Stretch Blow Moulding (ISBM) tooling engineered for pharmaceutical, cosmetic, and premium spirit bottle production.',
    fullDescription: 'Our ISBM Bottle Moulds are built for single-stage processing where preform injection and bottle blowing occur in one seamless machine cycle. This eliminates preform handling scratches and produces optic-grade clarity with precise neck dimensional tolerances.',
    image: '/product/isbm-bottle-mold.png',
    galleryImages: [
      '/product/isbm-bottle-mold.png',
      '/product/isbm-container-mold.png',
      '/product/multi-cavity-isbm-mold.png'
    ],
    keywords: ['ISBM', 'PET Bottle', 'Bottle', 'Packaging'],
    application: 'PET Bottles',
    specifications: [
      { label: 'Mold Type', value: 'ISBM' },
      { label: 'Application', value: 'PET Bottles' },
      { label: 'Configuration', value: 'Custom' },
      { label: 'Production', value: 'High Volume' },
    ],
    techSpecs: {
      moldType: 'Single-Stage ISBM Bottle Mould',
      cavityDetails: 'Custom Configurable (4 to 16 Cavities)',
      material: 'Aircraft-Grade Aluminum & Hardened Stainless Steel',
      machineCompatibility: 'Aoki, Nissei ASB & standard single-stage ISBM machines',
      application: 'Pharma Bottles, Cosmetics & Premium Beverages',
    },
    features: [
      'Single-stage process tooling compatibility',
      'Superior clarity & surface gloss finish',
      'Precise base pop-up geometry control',
      'High wear resistance for continuous operations',
      'Quick changeover modular inserts',
    ],
  },
  {
    slug: 'isbm-container-mold',
    name: 'ISBM Container Mold',
    category: 'ISBM Mold',
    categorySlug: 'isbm',
    shortDescription: 'Flexible container tooling designed for custom shapes, cosmetics, and delicate packaging needs.',
    fullDescription: 'Crafted for complex geometric packaging such as oval shampoo bottles, square personal care containers, and liquor flasks, our ISBM Container Moulds incorporate specialized stretch rod geometry to ensure uniform wall thickness.',
    overview: 'Custom ISBM tooling designed to handle asymmetric shapes, sharp radii, and special bottle neck designs with high structural integrity.',
    image: '/product/isbm-container-mold.png',
    galleryImages: [
      '/product/isbm-container-mold.png',
      '/product/isbm-bottle-mold.png',
      '/product/multi-cavity-isbm-mold.png'
    ],
    keywords: ['ISBM', 'Container', 'Packaging', 'Custom Tooling'],
    application: 'Containers',
    specifications: [
      { label: 'Mold Type', value: 'ISBM' },
      { label: 'Application', value: 'Containers' },
      { label: 'Configuration', value: 'Custom' },
      { label: 'Design', value: 'Application Specific' },
    ],
    techSpecs: {
      moldType: 'Custom ISBM Container Tooling',
      cavityDetails: 'Application Specific Custom Configuration',
      material: 'High-Conductivity Tool Steel & Premium Alloy',
      machineCompatibility: 'Universal Single-Stage ISBM Machinery',
      application: 'Personal Care, Household Chemicals & Custom Containers',
    },
    features: [
      'Custom complex geometry capability',
      'Seamless parting line match',
      'Integrated bottom mold pinch mechanics',
      'Optimized venting channels',
      'Zero distortion cooling jacket',
    ],
  },
  {
    slug: 'multi-cavity-isbm-mold',
    name: 'Multi-Cavity ISBM Mold',
    category: 'ISBM Mold',
    categorySlug: 'isbm',
    shortDescription: 'High-density multi-cavity ISBM tools crafted for efficient, cost-effective bottle manufacturing.',
    overview: 'High-density multi-cavity ISBM moulds designed to maximize output per machine hour while lowering cost per container.',
    fullDescription: 'Designed for high-capacity FMCG packaging lines, our Multi-Cavity ISBM Moulds ensure cavity-to-cavity volume consistency and tight weight distribution for high-speed automated capping lines.',
    image: '/product/multi-cavity-isbm-mold.png',
    galleryImages: [
      '/product/multi-cavity-isbm-mold.png',
      '/product/isbm-bottle-mold.png',
      '/product/isbm-container-mold.png'
    ],
    keywords: ['ISBM', 'Multi-Cavity', 'High Volume', 'Bottle'],
    application: 'Bottle & Container Packaging',
    specifications: [
      { label: 'Mold Type', value: 'Multi-Cavity ISBM' },
      { label: 'Application', value: 'Bottle & Container Packaging' },
      { label: 'Configuration', value: 'Custom' },
      { label: 'Production', value: 'High Volume' },
    ],
    techSpecs: {
      moldType: 'High-Density Multi-Cavity ISBM',
      cavityDetails: 'High Cavitation (8 to 32 Cavities)',
      material: 'Heat-Treated Hardened Tool Steel',
      machineCompatibility: 'High-speed automated ISBM lines',
      application: 'FMCG, Edible Oil & Beverage Packaging',
    },
    features: [
      'High cavitation density for maximum yield',
      'Precise cavity-to-cavity weight uniformity',
      'Durable heat-treated aluminum & steel inserts',
      'Fast mold changeover design',
      'Enhanced cooling circuit channels',
    ],
  },

  // -------------------------------------------------------------------
  // C. EBM Mold
  // -------------------------------------------------------------------
  {
    slug: 'ebm-bottle-mold',
    name: 'EBM Bottle Mold',
    category: 'EBM Mold',
    categorySlug: 'ebm',
    shortDescription: 'Durable extrusion blow moulds engineered for crisp bottle contours and clean flash separation.',
    overview: 'Precision Extrusion Blow Moulding (EBM) tooling for HDPE, PP, and PVC bottles with clean pinch-off edges and rapid thermal response.',
    fullDescription: 'Engineered with beryllium copper pinch-offs and high thermal conductivity aluminum or steel cavities, our EBM Bottle Moulds guarantee clean flash separation and smooth bottle bottoms for leak-free liquid packaging.',
    image: '/product/ebm-bottle-mold.png',
    galleryImages: [
      '/product/ebm-bottle-mold.png',
      '/product/ebm-container-mold.png',
      '/product/ebm-industrial-packaging-mold.png'
    ],
    keywords: ['EBM', 'Bottle', 'Packaging'],
    application: 'Bottles',
    specifications: [
      { label: 'Mold Type', value: 'EBM' },
      { label: 'Application', value: 'Bottles' },
      { label: 'Configuration', value: 'Custom' },
      { label: 'Production', value: 'High Volume' },
    ],
    techSpecs: {
      moldType: 'Extrusion Blow Mould (EBM)',
      cavityDetails: 'Single & Multi-Parison Configurations',
      material: 'QC-10 Aircraft Aluminum / Stainless Steel Inserts',
      machineCompatibility: 'Bekum, Uniloy, Kautex & Standard EBM machines',
      application: 'Milk, Dairy, Lubricant & Detergent Bottles',
    },
    features: [
      'Beryllium copper or hard metal pinch-off edges',
      'Optimized parison alignment guide system',
      'High efficiency water cooling jacket',
      'Clean flash separation',
      'Compatible with HDPE, PP & PVC resins',
    ],
  },
  {
    slug: 'ebm-container-mold',
    name: 'EBM Container Mold',
    category: 'EBM Mold',
    categorySlug: 'ebm',
    shortDescription: 'Versatile EBM moulds for household, personal care, and chemical containers with custom handleware.',
    overview: 'Tailored EBM tooling for containers featuring integrated handleware, view-stripe parison lines, and multi-layer wall structures.',
    fullDescription: 'Our EBM Container Moulds accommodate complex handle geometry, auto-trimming flash features, and calibrated blow pin mechanisms, making them ideal for household chemicals, agrochemicals, and personal care products.',
    image: '/product/ebm-container-mold.png',
    galleryImages: [
      '/product/ebm-container-mold.png',
      '/product/ebm-bottle-mold.png',
      '/product/ebm-industrial-packaging-mold.png'
    ],
    keywords: ['EBM', 'Container', 'Industrial', 'Packaging'],
    application: 'Containers',
    specifications: [
      { label: 'Mold Type', value: 'EBM' },
      { label: 'Application', value: 'Containers' },
      { label: 'Configuration', value: 'Custom' },
      { label: 'Design', value: 'Application Specific' },
    ],
    techSpecs: {
      moldType: 'EBM Container Tooling with Handleware',
      cavityDetails: 'Custom Single & Dual Cavity',
      material: 'Hard-Anodized Alloy Steel & Beryllium Copper Pinch',
      machineCompatibility: 'Continuous & Accumulator Head EBM Machinery',
      application: 'Household Detergents, Motor Oil & Agrochemical Containers',
    },
    features: [
      'Handleware pinch-off & blowing integration',
      'Multi-cavity extrusion blow alignment',
      'Engineered for HDPE / PP / PVC materials',
      'Robust mold base frame',
      'Integrated view-line channel support',
    ],
  },
  {
    slug: 'ebm-industrial-packaging-mold',
    name: 'EBM Industrial Packaging Mold',
    category: 'EBM Mold',
    categorySlug: 'ebm',
    shortDescription: 'Heavy-duty industrial blow moulds built for drums, Jerry cans, and chemical container durability.',
    overview: 'Heavy-duty large format EBM moulds designed for Jerry cans, industrial drums, and chemical carboys requiring high drop-test impact resistance.',
    fullDescription: 'Built with heavy-duty structural steel plates and high-wear alloy inserts, these industrial EBM moulds produce robust containers that pass stringent UN drop tests, stacking load requirements, and chemical compatibility standards.',
    image: '/product/ebm-industrial-packaging-mold.png',
    galleryImages: [
      '/product/ebm-industrial-packaging-mold.png',
      '/product/ebm-container-mold.png',
      '/product/ebm-bottle-mold.png'
    ],
    keywords: ['EBM', 'Industrial', 'Packaging', 'Custom Tooling'],
    application: 'Industrial Packaging',
    specifications: [
      { label: 'Mold Type', value: 'EBM' },
      { label: 'Application', value: 'Industrial Packaging' },
      { label: 'Configuration', value: 'Custom' },
      { label: 'Production', value: 'High Volume' },
    ],
    techSpecs: {
      moldType: 'Industrial EBM Large Format Mould',
      cavityDetails: 'Large Single / Double Cavity (5L to 50L Containers)',
      material: 'High-Tensile Tool Steel & Hardened Inserts',
      machineCompatibility: 'Accumulator Head Industrial Blow Molding Machines',
      application: 'Industrial Drums, Jerry Cans & Bulk Chemical Packaging',
    },
    features: [
      'Heavy-duty industrial grade construction',
      'High-impact steel inserts in critical stress points',
      'Uniform drop-test container strength design',
      'Advanced blow-pin cooling integration',
      'UN rating container compliance support',
    ],
  },
];
