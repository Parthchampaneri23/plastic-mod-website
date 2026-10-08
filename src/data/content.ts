export interface CompanyInfo {
  name: string;
  tagline: string;
  shortDesc: string;
  fullDesc: string;
  phone: string;
  phoneFormatted: string;
  email: string;
  salesEmail: string;
  address: string;
  city: string;
  state: string;
  country: string;
  pincode: string;
  certification: string;
  foundedYear: number;
  socialLinks: {
    linkedin: string;
    facebook: string;
    twitter: string;
    instagram: string;
    youtube: string;
  };
}

export interface CoreProductCategory {
  id: string;
  slug: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  features: string[];
  productCount: number;
}

export interface NavLinkItem {
  label: string;
  href: string;
}

// -------------------------------------------------------------------
// Site-Wide Core Content & Company Information
// -------------------------------------------------------------------

export const COMPANY_INFO: CompanyInfo = {
  name: "Patel Mould Industries",
  tagline: "Precision Molds. Built to Perform. Designed to Last.",
  shortDesc: "Patel Mould Industries is a premier manufacturer specializing in high-speed, multi-cavity PET preform, ISBM, and Extrusion Blow Molds.",
  fullDesc: "Established in 1994, Patel Mould Industries specializes in high-speed, multi-cavity PET preform, Injection Stretch Blow (ISBM), and Extrusion Blow (EBM) molds for beverage, pharmaceutical, food packaging, personal care, and industrial container applications.",
  phone: "+917784758347",
  phoneFormatted: "91+ 7784758347",
  email: "sales@patelmould.com",
  salesEmail: "sales@patelmould.com",
  address: "Precision Mould Park, Phase-IV GIDC",
  city: "Ahmedabad",
  state: "Gujarat",
  country: "India",
  pincode: "382445",
  certification: "ISO 9001:2015 Certified",
  foundedYear: 1994,
  socialLinks: {
    linkedin: "https://linkedin.com",
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
    youtube: "https://youtube.com",
  }
};

export const PRODUCT_CATEGORIES: CoreProductCategory[] = [
  {
    id: "preform-jar",
    slug: "preform-jar",
    name: "Preform & Jar Mold",
    shortDesc: "High-precision multi-cavity PET preform molds and wide-mouth jar tooling engineered for high-speed cycle times and zero-defect output.",
    fullDesc: "Specialized multi-cavity preform tooling with balanced hot runner integration, interchangeable neck ring inserts, and conformal cooling.",
    image: "/Home/preform-mold.png",
    features: ["Up to 96-cavity molds", "Balanced Hot Runner System", "Interchangeable neck inserts", "Optimized conformal cooling"],
    productCount: 42
  },
  {
    id: "isbm",
    slug: "isbm",
    name: "ISBM Mold",
    shortDesc: "Injection Stretch Blow Molding (ISBM) tooling engineered for single-stage premium container production with flawless optical clarity.",
    fullDesc: "Single-stage stretch blow moulds engineered for crystal-clear bottle finish, uniform wall distribution, and pharma-grade packaging.",
    image: "/Home/isbm-mold.png",
    features: ["Single-stage process precision", "Pharma & Cosmetic Grade Finish", "Custom base design options", "High durability aircraft steel"],
    productCount: 28
  },
  {
    id: "ebm",
    slug: "ebm",
    name: "EBM Mold",
    shortDesc: "Extrusion Blow Molding (EBM) tooling for complex hollow plastic bottles, jerrycans, automotive tanks, and industrial containers.",
    fullDesc: "Durable extrusion blow moulds engineered with beryllium copper pinch-offs for clean flash removal and high structural drop strength.",
    image: "/Home/ebm-mold.png",
    features: ["Automated pinch-off inserts", "High-efficiency beryllium copper inserts", "Multi-layer co-extrusion compatibility", "Up to 30L capacity"],
    productCount: 35
  }
];

export const QUICK_LINKS: NavLinkItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products Catalog", href: "/products#catalog" },
  { label: "Manufacturing Capabilities", href: "/about#capabilities" },
  { label: "Infrastructure & Facilities", href: "/about#infrastructure" },
  { label: "Quality Assurance", href: "/about#quality-technology" },
  { label: "Contact Us", href: "/#inquiry-section" }
];
