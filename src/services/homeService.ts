import {
  HERO_SLIDES as DEFAULT_HERO_SLIDES,
  COMPANY_STATS as DEFAULT_COMPANY_STATS,
  PRODUCT_CATEGORIES as DEFAULT_PRODUCT_CATEGORIES,
  CAPABILITIES as DEFAULT_CAPABILITIES,
  WHY_CHOOSE_US as DEFAULT_WHY_CHOOSE_US,
  FACILITIES as DEFAULT_FACILITIES,
  INDUSTRIES as DEFAULT_INDUSTRIES,
  QUALITY_STANDARDS as DEFAULT_QUALITY_STANDARDS,
  FEATURED_PRODUCTS as DEFAULT_FEATURED_PRODUCTS,
  INDIAN_CLIENT_LOGOS as DEFAULT_INDIAN_CLIENT_LOGOS,
  INDIAN_TESTIMONIALS as DEFAULT_INDIAN_TESTIMONIALS,
} from "@/data/home";

export interface DynamicBrandIdentity {
  logoImage?: string;
  logoAlt?: string;
  footerLogoImage?: string;
  faviconUrl?: string;
  appleTouchIconUrl?: string;
  siteTitle?: string;
  siteTagline?: string;
}

const ADMIN_API_URL = process.env.NEXT_PUBLIC_ADMIN_API_URL || "http://localhost:3001/api/home";

export async function getDynamicHomeContent() {
  try {
    const res = await fetch(ADMIN_API_URL, {
      next: { revalidate: 10 }, // automatically revalidates every 10 seconds
    });
    if (!res.ok) throw new Error("Failed to fetch dynamic home content");
    const json = await res.json();
    if (json.success && json.data) {
      return json.data;
    }
  } catch (err) {
    console.warn("Using fallback static home data (admin backend offline or loading):", err);
  }

  // Graceful fallback to default home.ts data
  return {
    heroSlides: DEFAULT_HERO_SLIDES,
    companyStats: DEFAULT_COMPANY_STATS,
    productCategories: DEFAULT_PRODUCT_CATEGORIES,
    capabilities: DEFAULT_CAPABILITIES,
    whyChooseUs: DEFAULT_WHY_CHOOSE_US,
    facilities: DEFAULT_FACILITIES,
    industries: DEFAULT_INDUSTRIES,
    qualityStandards: DEFAULT_QUALITY_STANDARDS,
    featuredProducts: DEFAULT_FEATURED_PRODUCTS,
    indianClientLogos: DEFAULT_INDIAN_CLIENT_LOGOS,
    indianTestimonials: DEFAULT_INDIAN_TESTIMONIALS,
    companyIntro: {
      badge: "Engineering Excellence Since 1994",
      heading: "About Patel Mould Industries",
      paragraph1: "Established in 1994 in Gujarat, Patel Mould Industries is one of India's most trusted manufacturers of high-precision PET preform molds, ISBM tooling, and Extrusion Blow Molds.",
      paragraph2: "Spanning three decades of Indian toolmaking craftsmanship, Patel Mould Industries operates a 15,000 m² state-of-the-art facility equipped with 5-axis CNC machining, mirror EDMs, and Zeiss 3D CMM quality inspection labs.",
      paragraph3: "We specialize in custom multi-cavity mold solutions engineered for zero-flash production, rapid cycle times, and guaranteed 5M+ shot tool life — supporting premier beverage bottlers, FMCG brands, and pharmaceutical manufacturers across India and globally.",
      image: "/Home/company image about.png",
    },
    topBar: {
      phone: "91+ 7784758347",
      email: "sales@patelmould.com",
      address: "Patel Mould Park, Phase-IV GIDC, Gujarat, India",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Precision+Mould+Park+Phase+IV+GIDC+Vatva+Gujarat+India",
    },
    navbar: {
      logoImage: "/PMlogo.png",
      logoAlt: "Patel Mould Industries",
      ctaButtonText: "Request a Quote",
      ctaButtonLink: "#inquiry-section",
      menuLinks: [
        { label: "About Us", href: "/about" },
        { label: "Products", href: "/products", isMegaMenu: true },
        { label: "Manufacturing", href: "/manufacturing" },
        { label: "Infrastructure", href: "/infrastructure" },
        { label: "Industries", href: "/industries" },
        { label: "Blogs", href: "/blogs" },
        { label: "Contact Us", href: "/contact" },
      ],
    },
    brandIdentity: {
      logoImage: "/PMlogo.png",
      logoAlt: "Patel Mould Industries",
      footerLogoImage: "/PMlogo.png",
      faviconUrl: "/favicon.ico",
      appleTouchIconUrl: "/icon-192.png",
      siteTitle: "Patel Mould Industries",
      siteTagline: "Precision Plastic Mould Manufacturer",
    },
    footer: {
      logoImage: "/PMlogo.png",
      companyBio: "Patel Mould Industries is an manufacturer specializing in high-speed, multi-cavity PET preform, ISBM, and Extrusion Blow Molds for the beverage, pharmaceutical, packaging, and personal care industries.",
      phone: "91+ 7784758347",
      email: "sales@patelmould.com",
      address: "Patel Mould Park, Phase-IV GIDC, Gujarat, India",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Precision+Mould+Park+Phase+IV+GIDC+Vatva+Gujarat+India",
      copyrightText: "© 2026 Patel Mould Industries. All rights reserved.",
      socialLinks: {
        linkedin: "https://linkedin.com",
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        instagram: "https://instagram.com",
        youtube: "https://youtube.com",
      },
    },
  };
}
