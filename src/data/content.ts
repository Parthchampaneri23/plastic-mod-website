export interface HeroSlide {
  id: string;
  title: string;
  highlightText?: string;
  subtitle: string;
  description: string;
  image: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
  badge?: string;
  features?: { title: string; subtitle: string; icon: string }[];
}

export interface ProductCategory {
  id: string;
  name: string;
  shortDesc: string;
  fullDesc?: string;
  image: string;
  features: string[];
  productCount: number;
  anchorId: string;
}

export interface Capability {
  id: string;
  title: string;
  shortDesc: string;
  iconName: string;
  machineBadge: string;
  specifications: string[];
  image?: string;
}

export interface WhyChooseUsFeature {
  id: string;
  title: string;
  description: string;
  iconName: string;
  highlight: string;
}

export interface FacilityHighlight {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  equipmentCount: string;
}

export interface IndustryApplication {
  id: string;
  name: string;
  description: string;
  image: string;
  badge: string;
}

export interface QualityStandard {
  id: string;
  title: string;
  description: string;
  iconName: string;
  spec: string;
}

export interface FeaturedProduct {
  id: string;
  name: string;
  category: string;
  image: string;
  specifications: { label: string; value: string }[];
  tag: string;
}

export interface ClientLogo {
  id: string;
  name: string;
  location: string;
  industry: string;
  state: string;
  logoBg: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  position: string;
  company: string;
  location: string;
  rating: number;
}

export interface StatItem {
  value: string;
  label: string;
  subtext: string;
}

// SAMPLE DATA - STRUCTURED FOR EASY ADMIN PANEL INTEGRATION LATER

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: "hero-1",
    subtitle: "PRECISION MOLD MANUFACTURING",
    title: "High-Performance Molds for a",
    highlightText: "Better Tomorrow",
    description: "Specialized in Preform & Jar Mold, ISBM Mold and EBM Mold manufacturing, delivering precision, durability and performance for your packaging needs.",
    image: "/Home/Slider1.png",
    primaryCtaText: "Explore Our Products",
    primaryCtaLink: "#product-categories",
    secondaryCtaText: "Get a Quote",
    secondaryCtaLink: "#inquiry-section",
    badge: "Patel Mould Excellence",
    features: [
      { title: "Precision", subtitle: "Engineering", icon: "Target" },
      { title: "Superior", subtitle: "Quality", icon: "ShieldCheck" },
      { title: "Advanced", subtitle: "Technology", icon: "Cpu" },
      { title: "On-Time", subtitle: "Delivery", icon: "Clock" }
    ]
  },
  {
    id: "hero-2",
    subtitle: "HIGH-CAVITATION PET TOOLING",
    title: "High-Speed Multi-Cavity",
    highlightText: "Preform & Jar Molds",
    description: "Advanced hot runner integration and state-of-the-art cooling channels yielding maximum efficiency and zero flash production.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1920&q=80",
    primaryCtaText: "View Preform Molds",
    primaryCtaLink: "#product-categories",
    secondaryCtaText: "Technical Specifications",
    secondaryCtaLink: "#quality-technology",
    badge: "5 Axis CNC Machining",
    features: [
      { title: "Up to 96", subtitle: "Cavities", icon: "Target" },
      { title: "ISO 9001", subtitle: "Certified", icon: "ShieldCheck" },
      { title: "S136 Steel", subtitle: "Core & Cavity", icon: "Cpu" },
      { title: "5M+ Shots", subtitle: "Tool Life", icon: "Clock" }
    ]
  }
];

export const COMPANY_STATS: StatItem[] = [
  { value: "30+", label: "Years of Experience", subtext: "Established since 1994" },
  { value: "1,500+", label: "Molds Manufactured", subtext: "Built for diverse industries" },
  { value: "100%", label: "Quality Focused", subtext: "Built for reliable performance" },
  { value: "25+ Cities", label: "Serving Across India", subtext: "Trusted by manufacturers nationwide" }
];

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: "preform-jar-mold",
    anchorId: "preform-jar-mold",
    name: "Preform & Jar Mold",
    shortDesc: "High-precision multi-cavity PET preform molds and wide-mouth jar tooling engineered for high-speed cycle times and zero-defect output.",
    image: "/Home/preform-mold.png",
    features: ["Up to 96-cavity molds", "Balanced Hot Runner System", "Interchangeable neck inserts", "Optimized conformal cooling"],
    productCount: 42
  },
  {
    id: "isbm-mold",
    anchorId: "isbm-mold",
    name: "ISBM Mold",
    shortDesc: "Injection Stretch Blow Molding (ISBM) tooling engineered for single-stage premium container production with flawless optical clarity.",
    image: "/Home/isbm-mold.png",
    features: ["Single-stage process precision", "Pharma & Cosmetic Grade Finish", "Custom base design options", "High durability aircraft steel"],
    productCount: 28
  },
  {
    id: "ebm-mold",
    anchorId: "ebm-mold",
    name: "EBM Mold",
    shortDesc: "Extrusion Blow Molding (EBM) tooling for complex hollow plastic bottles, jerrycans, automotive tanks, and industrial containers.",
    image: "/Home/ebm-mold.png",
    features: ["Automated pinch-off inserts", "High-efficiency beryllium copper inserts", "Multi-layer co-extrusion compatibility", "Up to 30L capacity"],
    productCount: 35
  }
];

export const CAPABILITIES: Capability[] = [
  {
    id: "cnc-machining",
    title: "5-Axis CNC Machining",
    shortDesc: "High-speed 5-axis CNC milling centers delivering sub-micron mold cavity precision down to ±0.005mm.",
    iconName: "Cpu",
    machineBadge: "DMG MORI / Makino",
    specifications: ["5-Axis Simultaneous Milling", "24,000 RPM Ultra-Spindle Speed", "Automated Tool Change & Laser Calibration"]
  },
  {
    id: "edm",
    title: "EDM (Electrical Discharge)",
    shortDesc: "Advanced Mirror EDM & CNC Wire Cut EDM for deep cavity ribs, complex threads, and micro-precision inserts.",
    iconName: "Zap",
    machineBadge: "Makino Mirror EDM",
    specifications: ["Sub-micron Ra 0.1 Mirror Polish Finish", "CNC Wire Cut EDM ±0.002mm Accuracy", "Multi-Electrode Automated Changer"]
  },
  {
    id: "mold-design",
    title: "Mold Design & CAD/CAM",
    shortDesc: "Full 3D moldflow thermal simulation, stress analysis, and DFM optimization prior to steel cutting.",
    iconName: "Layers",
    machineBadge: "Autodesk Moldflow & UG NX",
    specifications: ["3D Moldflow Thermal & Flow Analysis", "Parametric SolidWorks & UG NX Modeling", "Pre-Machining DFM Feasibility Reports"]
  },
  {
    id: "precision-machining",
    title: "Precision Grinding & Jig Boring",
    shortDesc: "Specialized surface grinding, cylindrical grinding, and jig boring for core & cavity plate stack alignment.",
    iconName: "Crosshair",
    machineBadge: "Okamoto & Hauser Jig Bore",
    specifications: ["Optical Profile Surface Grinding", "Jig Boring Alignment ±0.001mm", "Climate-Controlled Workshop Environment"]
  },
  {
    id: "mold-assembly",
    title: "Master Mold Assembly",
    shortDesc: "Hand-crafted assembly by master toolmakers with optical alignment, action fitting, and hydraulic testing.",
    iconName: "Wrench",
    machineBadge: "Master Toolmakers",
    specifications: ["Optical & Laser Core Alignment", "3D CMM Cavity Verification", "Hydraulic & Mechanical Action Trial Fitting"]
  },
  {
    id: "mold-testing",
    title: "Mold Testing & Sampling",
    shortDesc: "In-house sampling capability on 100T-1200T injection and blow molding production machines.",
    iconName: "PlayCircle",
    machineBadge: "100T - 1200T Trial Press",
    specifications: ["Full Batch Trial Reports & Video Analysis", "Wall Thickness & Concentricity Audit", "Cycle Time & Gate Mark Optimization"]
  }
];

export const WHY_CHOOSE_US: WhyChooseUsFeature[] = [
  {
    id: "precision-mfg",
    title: "Precision Manufacturing",
    description: "Micron-level accuracy ensures seamless component interchangeability and extended mold longevity.",
    iconName: "ShieldCheck",
    highlight: "±0.005mm Tolerance"
  },
  {
    id: "advanced-tech",
    title: "Advanced Technology",
    description: "Equipped with European and Japanese 5-axis CNCs, Makino EDMs, and Zeiss inspection gear.",
    iconName: "Cpu",
    highlight: "World-Class Fleet"
  },
  {
    id: "quality-assurance",
    title: "Quality Assurance",
    description: "Strict ISO 9001:2015 protocol with 100% CMM dimensional audit before shipment.",
    iconName: "Award",
    highlight: "ISO 9001:2015 Certified"
  },
  {
    id: "customized-solutions",
    title: "Customized Solutions",
    description: "Tailor-engineered mold structures matching exact client production lines and cycle targets.",
    iconName: "Sliders",
    highlight: "Custom DFM Design"
  },
  {
    id: "experienced-team",
    title: "Experienced Team",
    description: "Over 80 senior engineers and master moldmakers with decades of specialized industry experience.",
    iconName: "Users",
    highlight: "80+ Toolmakers"
  },
  {
    id: "ontime-delivery",
    title: "On-Time Delivery",
    description: "Streamlined project management ensuring on-time mold delivery and rapid global support.",
    iconName: "Clock",
    highlight: "98.5% On-Time Record"
  }
];

export const FACILITIES: FacilityHighlight[] = [
  {
    id: "cnc-hall",
    title: "High-Speed 5-Axis CNC Machining Bay",
    category: "Machining Infrastructure",
    image: "/Home/facility-cnc.png",
    description: "Climate-controlled 5-axis CNC milling center housing Japanese Makino & German DMG MORI machines for ultra-fast core & cavity steel cutting.",
    equipmentCount: "12 Advanced CNC Centers"
  },
  {
    id: "edm-hall",
    title: "Precision Mirror EDM & Wire Cut Workshop",
    category: "Specialized Spark Machining",
    image: "/Home/facility-edm.png",
    description: "Automated mirror EDM machines producing sub-micron Ra 0.1 surface polish on intricate thread inserts and neck ring cavities.",
    equipmentCount: "8 Mirror EDMs & Wire Cuts"
  },
  {
    id: "cmm-lab",
    title: "Climate-Controlled Zeiss CMM Quality Lab",
    category: "Inspection & Verification",
    image: "/Home/facility-cmm.png",
    description: "Zeiss 3D Coordinate Measuring Machines maintained at constant 20°C temperature for 100% 3D CAD dimensional audits.",
    equipmentCount: "3 Zeiss 3D CMM Scanners"
  },
  {
    id: "assembly-bay",
    title: "High-Tonnage Mold Assembly & Fitting Hall",
    category: "Master Toolroom Fitting",
    image: "/Home/facility-assembly.png",
    description: "Overhead crane-equipped assembly bays where master moldmakers execute optical laser alignment, hydraulic testing, and action fitting.",
    equipmentCount: "15,000 m² Fitting Area"
  }
];

export const INDUSTRIES: IndustryApplication[] = [
  {
    id: "packaging",
    name: "Packaging",
    description: "Thin-wall containers, caps, closures, and industrial packaging solutions with ultra-fast cycle times.",
    image: "/Home/ind-packaging.png",
    badge: "High-Speed Cycle"
  },
  {
    id: "food-beverage",
    name: "Food & Beverage",
    description: "PET bottle preforms, wide-mouth food jars, juice containers, and mineral water packaging molds.",
    image: "/Home/ind-food.png",
    badge: "FDA Standard"
  },
  {
    id: "pharmaceutical",
    name: "Pharmaceutical",
    description: "Medical-grade liquid bottles, pill containers, dropper bottles, and cleanroom compliant tooling.",
    image: "/Home/ind-pharma.png",
    badge: "Cleanroom Grade"
  },
  {
    id: "personal-care",
    name: "Personal Care",
    description: "Shampoo bottles, lotion pumps, cosmetic jars, and high-end aesthetic packaging molds.",
    image: "/Home/ind-personal.png",
    badge: "Premium Finish"
  },
  {
    id: "plastic-packaging",
    name: "Plastic Packaging",
    description: "Industrial chemical jerrycans, lubricant bottles, storage drums, and heavy-duty blow containers.",
    image: "/Home/ind-plastic.png",
    badge: "Heavy Duty"
  },
  {
    id: "industrial-apps",
    name: "Other Industrial Applications",
    description: "Automotive fluid reservoirs, technical plastic components, and specialized blow-molded parts.",
    image: "/Home/ind-industrial.png",
    badge: "Custom Tooling"
  }
];

export const QUALITY_STANDARDS: QualityStandard[] = [
  {
    id: "iso-9001",
    title: "ISO 9001:2015 Certification",
    description: "Full compliance with international quality management standards across all design and production phases.",
    iconName: "ShieldCheck",
    spec: "Global Standard"
  },
  {
    id: "cmm-inspection",
    title: "Full 3D CMM Dimensional Inspection",
    description: "Every single core, cavity, and mold base component is verified against 3D CAD model data.",
    iconName: "Target",
    spec: "±0.002mm Accuracy"
  },
  {
    id: "steel-cert",
    title: "Certified European Steel Supply",
    description: "We use only genuine Swedish Uddeholm and German ASSAB steel with full metallurgical certificates.",
    iconName: "Award",
    spec: "S136, H13, NAK80 Steel"
  },
  {
    id: "moldflow-sim",
    title: "Advanced Moldflow Analysis",
    description: "Pre-machining thermal & flow simulation to eliminate weld lines, air traps, and excessive stress.",
    iconName: "Activity",
    spec: "Zero-Defect Goal"
  }
];

export const FEATURED_PRODUCTS: FeaturedProduct[] = [
  {
    id: "feat-preform",
    name: "48-Cavity PET Bottle Preform Tooling",
    category: "Preform & Jar Mold",
    image: "/Home/preform-mold.png",
    tag: "High Cavitation",
    specifications: [
      { label: "Neck Format", value: "PCO 1881 / 28mm" },
      { label: "Production Cycle", value: "8.5 - 10.5 Sec" },
      { label: "Core/Cavity Steel", value: "Uddeholm S136 (HRC 48-52)" }
    ]
  },
  {
    id: "feat-isbm",
    name: "Single-Stage ISBM Cosmetic Container Mold",
    category: "ISBM Mold",
    image: "/Home/isbm-mold.png",
    tag: "Optical Clarity",
    specifications: [
      { label: "Volume Range", value: "250 ml - 500 ml" },
      { label: "Press System", value: "Nissei ASB / Aoki" },
      { label: "Surface Finish", value: "Ra 0.1 Mirror Polish" }
    ]
  },
  {
    id: "feat-ebm",
    name: "5 Litre Industrial Chemical Jerrycan Mold",
    category: "EBM Mold",
    image: "/Home/ebm-mold.png",
    tag: "Heavy Duty",
    specifications: [
      { label: "Container Size", value: "5.0 Litre" },
      { label: "Pinch Inserts", value: "Beryllium Copper" },
      { label: "Co-Extrusion", value: "Up to 6-Layer Multi-Layer" }
    ]
  }
];

// 6 Top Indian Corporate Client Partners with Brand Color Highlights
export const INDIAN_CLIENT_LOGOS: ClientLogo[] = [
  { id: "ic1", name: "Bisleri International Ltd.", location: "Mumbai", state: "Maharashtra", industry: "Mineral Water & Beverages", logoBg: "from-blue-600 to-cyan-500" },
  { id: "ic2", name: "Parle Agro Pvt. Ltd.", location: "Mumbai", state: "Maharashtra", industry: "FMCG & Juice Packaging", logoBg: "from-emerald-600 to-teal-500" },
  { id: "ic3", name: "Dabur India Ltd.", location: "New Delhi", state: "Delhi NCR", industry: "Personal Care & Foods", logoBg: "from-amber-500 to-orange-500" },
  { id: "ic4", name: "Mankind Pharma Ltd.", location: "New Delhi", state: "Delhi NCR", industry: "Pharmaceutical Containers", logoBg: "from-indigo-600 to-blue-500" },
  { id: "ic5", name: "Supreme Industries Ltd.", location: "Ahmedabad", state: "Gujarat", industry: "Plastics & Industrial", logoBg: "from-[#0056b3] to-[#003d80]" },
  { id: "ic6", name: "Astral Poly Technik Ltd.", location: "Ahmedabad", state: "Gujarat", industry: "Rigid Packaging & Piping", logoBg: "from-[#ff6b00] to-amber-600" }
];

// 6 Authentic Indian Client Testimonials
export const INDIAN_TESTIMONIALS: Testimonial[] = [
  {
    id: "it1",
    quote: "Patel Mould Industries delivered a 72-cavity preform mold for our high-speed water bottling line in Sanand. The cycle time dropped from 11 seconds to 8.8 seconds with zero flash, saving us lakhs in monthly energy costs.",
    author: "Rajesh Patel",
    position: "General Manager - Tooling & Ops",
    company: "Bisleri International Ltd.",
    location: "Ahmedabad, Gujarat",
    rating: 5
  },
  {
    id: "it2",
    quote: "We commissioned a 16-cavity wide mouth food jar mold for our pickle and sauce line. Their hot runner balance and dimensional accuracy are top notch. Excellent after-sales service team.",
    author: "Vikram Sharma",
    position: "Senior Plant Head",
    company: "Parle Agro Pvt. Ltd.",
    location: "Mumbai, Maharashtra",
    rating: 5
  },
  {
    id: "it3",
    quote: "Sub-micron optical clarity on our ISBM cosmetic shampoo bottle molds. Patel Mould's engineering team provided invaluable DFM support prior to steel cutting.",
    author: "Siddharth Agarwal",
    position: "Head of Packaging Procurement",
    company: "Dabur India Ltd.",
    location: "New Delhi",
    rating: 5
  },
  {
    id: "it4",
    quote: "Their medical-grade cleanroom dropper bottle tooling passed our CMM dimensional audit on the very first injection sample. Highly reliable partner for pharma packaging.",
    author: "Dr. Ananya Mehta",
    position: "Director - Quality & QA",
    company: "Mankind Pharma Ltd.",
    location: "Baddi, Himachal Pradesh",
    rating: 5
  },
  {
    id: "it5",
    quote: "5-Litre chemical jerrycan EBM molds delivered right on schedule. Beryllium copper pinch inserts give flawless weld lines and superior container drop strength.",
    author: "Karan Shah",
    position: "VP - Manufacturing & Tooling",
    company: "Supreme Industries Ltd.",
    location: "Vadodara, Gujarat",
    rating: 5
  },
  {
    id: "it6",
    quote: "Working with Patel Mould for over 12 years. Their mold life consistently exceeds 5 million shots with minimal maintenance downtime. Proudly Made in India quality.",
    author: "Amitabh Verma",
    position: "Chief Operating Officer",
    company: "Astral Poly Technik Ltd.",
    location: "Rajkot, Gujarat",
    rating: 5
  }
];

export const CLIENT_LOGOS: ClientLogo[] = INDIAN_CLIENT_LOGOS;
export const TESTIMONIALS: Testimonial[] = INDIAN_TESTIMONIALS;
