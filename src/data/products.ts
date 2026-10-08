export interface ProductSpecification {
  label: string;
  value: string;
}

export interface Product {
  slug: string;
  name: string;
  category: 'Preform & Jar Mold' | 'ISBM Mold' | 'EBM Mold';
  categorySlug: 'preform-jar' | 'isbm' | 'ebm';
  shortDescription: string;
  fullDescription: string;
  image: string;
  keywords: string[];
  specifications: ProductSpecification[];
  application: string;
  features?: string[];
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
    fullDescription: 'Our PET Preform Moulds are engineered with high-precision hot runner systems and optimized cooling channels, ensuring minimum cycle times, excellent concentricity, and zero neck flash for high-speed automated bottling lines.',
    image: '/product/pet-preform-mold.png',
    keywords: ['PET', 'Preform', 'Packaging', 'High Volume'],
    application: 'Beverage & Packaging',
    specifications: [
      { label: 'Mold Type', value: 'PET Preform' },
      { label: 'Application', value: 'Beverage & Packaging' },
      { label: 'Cavity Configuration', value: 'Custom' },
      { label: 'Production', value: 'High Volume' },
    ],
    features: [
      'High-grade stainless steel core & cavity components',
      'Advanced hot runner balanced flow system',
      'Optimized neck split cooling design',
      'Long tool lifespan with low maintenance',
    ],
  },
  {
    slug: 'pet-jar-mold',
    name: 'PET Jar Mold',
    category: 'Preform & Jar Mold',
    categorySlug: 'preform-jar',
    shortDescription: 'Custom wide-mouth jar moulds offering sparkling clarity and perfect neck threading every time.',
    fullDescription: 'Specifically crafted for wide-mouth packaging, our PET Jar Moulds feature precision threading tooling and rapid cycle thermal efficiency to produce high-clarity jars for food, cosmetic, and confectionery packaging.',
    image: '/product/pet-jar-mold.png',
    keywords: ['PET', 'Jar', 'Packaging'],
    application: 'Food, Beverage & Packaging',
    specifications: [
      { label: 'Mold Type', value: 'PET Jar' },
      { label: 'Application', value: 'Food, Beverage & Packaging' },
      { label: 'Cavity Configuration', value: 'Custom' },
      { label: 'Production', value: 'High Volume' },
    ],
    features: [
      'Precision wide-mouth neck thread alignment',
      'Uniform wall-thickness control',
      'Corrosion-resistant tool steel insertion',
      'Interchangeable cavity modules',
    ],
  },
  {
    slug: 'high-cavitation-preform-mold',
    name: 'High-Cavitation Preform Mold',
    category: 'Preform & Jar Mold',
    categorySlug: 'preform-jar',
    shortDescription: 'Maximized multi-cavity tooling to boost your factory production rates with top-tier precision.',
    fullDescription: 'Designed for major bottling operations demanding maximum output, our High-Cavitation Preform Tooling maximizes productivity while maintaining micro-micron precision across all cavities simultaneously.',
    image: '/product/high-cavitation-preform-mold.png',
    keywords: ['High Cavitation', 'PET', 'Preform', 'Production'],
    application: 'Beverage Packaging',
    specifications: [
      { label: 'Mold Type', value: 'High-Cavitation Preform' },
      { label: 'Application', value: 'Beverage Packaging' },
      { label: 'Cavity Configuration', value: 'Custom' },
      { label: 'Production', value: 'High Volume' },
    ],
    features: [
      'Multi-zone hot runner temperature control',
      'Independent cavity shut-off valve options',
      'Ultra-fast cycle time capability',
      'Heavy-duty base plate rigidity',
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
    fullDescription: 'Our Injection Stretch Blow Moulds (ISBM) yield flawless cosmetic finish and structural strength for pharmaceutical, cosmetic, and premium beverage bottles built in a single-stage process.',
    image: '/product/isbm-bottle-mold.png',
    keywords: ['ISBM', 'PET Bottle', 'Bottle', 'Packaging'],
    application: 'PET Bottles',
    specifications: [
      { label: 'Mold Type', value: 'ISBM' },
      { label: 'Application', value: 'PET Bottles' },
      { label: 'Configuration', value: 'Custom' },
      { label: 'Production', value: 'High Volume' },
    ],
    features: [
      'Single-stage process tooling compatibility',
      'Superior clarity & surface gloss finish',
      'Precise base pop-up geometry control',
      'High wear resistance for continuous operations',
    ],
  },
  {
    slug: 'isbm-container-mold',
    name: 'ISBM Container Mold',
    category: 'ISBM Mold',
    categorySlug: 'isbm',
    shortDescription: 'Flexible container tooling designed for custom shapes, cosmetics, and delicate packaging needs.',
    fullDescription: 'Engineered for non-standard, oval, or unique geometric packaging, our ISBM Container Moulds provide tight tolerances and uniform stretch distribution for delicate packaging formats.',
    image: '/product/isbm-container-mold.png',
    keywords: ['ISBM', 'Container', 'Packaging', 'Custom Tooling'],
    application: 'Containers',
    specifications: [
      { label: 'Mold Type', value: 'ISBM' },
      { label: 'Application', value: 'Containers' },
      { label: 'Configuration', value: 'Custom' },
      { label: 'Design', value: 'Application Specific' },
    ],
    features: [
      'Custom complex geometry capability',
      'Seamless parting line match',
      'Integrated bottom mold pinch mechanics',
      'Optimized venting channels',
    ],
  },
  {
    slug: 'multi-cavity-isbm-mold',
    name: 'Multi-Cavity ISBM Mold',
    category: 'ISBM Mold',
    categorySlug: 'isbm',
    shortDescription: 'High-density multi-cavity ISBM tools crafted for efficient, cost-effective bottle manufacturing.',
    fullDescription: 'High-density multi-cavity ISBM tooling optimized for single-stage machine platforms, driving down per-unit manufacturing costs without sacrificing bottle integrity or finish.',
    image: '/product/multi-cavity-isbm-mold.png',
    keywords: ['ISBM', 'Multi-Cavity', 'High Volume', 'Bottle'],
    application: 'Bottle & Container Packaging',
    specifications: [
      { label: 'Mold Type', value: 'Multi-Cavity ISBM' },
      { label: 'Application', value: 'Bottle & Container Packaging' },
      { label: 'Configuration', value: 'Custom' },
      { label: 'Production', value: 'High Volume' },
    ],
    features: [
      'High cavitation density for maximum yield',
      'Precise cavity-to-cavity weight uniformity',
      'Durable heat-treated aluminum & steel inserts',
      'Fast mold changeover design',
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
    fullDescription: 'Our Extrusion Blow Moulds (EBM) feature precision pinch-off inserts, high thermal conductivity cooling lines, and hard-anodized or stainless steel surfaces built for HDPE, PP, and PVC bottle production.',
    image: '/product/ebm-bottle-mold.png',
    keywords: ['EBM', 'Bottle', 'Packaging'],
    application: 'Bottles',
    specifications: [
      { label: 'Mold Type', value: 'EBM' },
      { label: 'Application', value: 'Bottles' },
      { label: 'Configuration', value: 'Custom' },
      { label: 'Production', value: 'High Volume' },
    ],
    features: [
      'Beryllium copper or hard metal pinch-off edges',
      'Optimized parison alignment guide system',
      'High efficiency water cooling jacket',
      'Clean flash separation',
    ],
  },
  {
    slug: 'ebm-container-mold',
    name: 'EBM Container Mold',
    category: 'EBM Mold',
    categorySlug: 'ebm',
    shortDescription: 'Versatile EBM moulds for household, personal care, and chemical containers with custom handleware.',
    fullDescription: 'Tailored for household chemicals, personal care, and food packaging, these EBM tooling solutions handle multi-layer parisons, custom handleware, and complex container necks.',
    image: '/product/ebm-container-mold.png',
    keywords: ['EBM', 'Container', 'Industrial', 'Packaging'],
    application: 'Containers',
    specifications: [
      { label: 'Mold Type', value: 'EBM' },
      { label: 'Application', value: 'Containers' },
      { label: 'Configuration', value: 'Custom' },
      { label: 'Design', value: 'Application Specific' },
    ],
    features: [
      'Handleware pinch-off & blowing integration',
      'Multi-cavity extrusion blow alignment',
      'Engineered for HDPE / PP / PVC materials',
      'Robust mold base frame',
    ],
  },
  {
    slug: 'ebm-industrial-packaging-mold',
    name: 'EBM Industrial Packaging Mold',
    category: 'EBM Mold',
    categorySlug: 'ebm',
    shortDescription: 'Heavy-duty industrial blow moulds built for drums, Jerry cans, and chemical container durability.',
    fullDescription: 'Heavy-duty EBM moulds for large-capacity industrial drums, Jerry cans, and chemical containers, built to withstand continuous industrial manufacturing cycles.',
    image: '/product/ebm-industrial-packaging-mold.png',
    keywords: ['EBM', 'Industrial', 'Packaging', 'Custom Tooling'],
    application: 'Industrial Packaging',
    specifications: [
      { label: 'Mold Type', value: 'EBM' },
      { label: 'Application', value: 'Industrial Packaging' },
      { label: 'Configuration', value: 'Custom' },
      { label: 'Production', value: 'High Volume' },
    ],
    features: [
      'Heavy-duty industrial grade construction',
      'High-impact steel inserts in critical stress points',
      'Uniform drop-test container strength design',
      'Advanced blow-pin cooling integration',
    ],
  },
];
