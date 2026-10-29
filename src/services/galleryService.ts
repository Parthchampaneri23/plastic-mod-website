import {
  GALLERY_ITEMS,
  GALLERY_CATEGORIES,
  GalleryItem,
  GalleryCategory,
} from "@/data/gallery";

const ADMIN_GALLERY_URL =
  process.env.NEXT_PUBLIC_ADMIN_GALLERY_URL ||
  "http://localhost:3001/api/gallery";

export interface GalleryHeroBannerData {
  titlePart1: string;
  titleHighlight: string;
  breadcrumbHome: string;
  breadcrumbCurrent: string;
  bannerImage: string;
}

export interface GalleryIntroData {
  badge: string;
  headingPart1: string;
  headingHighlight: string;
  description: string;
}

export interface FeaturedCollectionItem {
  title: string;
  tagline: string;
  description: string;
  image: string;
  category: GalleryCategory;
  badge: string;
}

export interface DynamicGalleryData {
  heroBanner: GalleryHeroBannerData;
  intro: GalleryIntroData;
  featuredCollections: FeaturedCollectionItem[];
  items: GalleryItem[];
}

export const STATIC_GALLERY_FALLBACK: DynamicGalleryData = {
  heroBanner: {
    titlePart1: "Our",
    titleHighlight: "Gallery",
    breadcrumbHome: "Home",
    breadcrumbCurrent: "Gallery",
    bannerImage: "/gallery-banner.jpg",
  },
  intro: {
    badge: "COMPLETE VISUAL ARCHIVE",
    headingPart1: "Explore Our",
    headingHighlight: "Precision Portfolio",
    description:
      "Explore the Patel Mould Industries manufacturing facility, high-speed 5-axis CNC machinery, spark EDM toolroom, precision PET preform molds, and Zeiss 3D CMM quality inspection in Gujarat, India.",
  },
  featuredCollections: [
    {
      title: "Inside Our Facility",
      tagline: "World-Class Toolroom Infrastructure",
      description:
        "Tour our 25,000+ sq. ft. precision manufacturing bay equipped with heavy gantry cranes, climate-stabilized zones, and integrated CAD/CAM cells.",
      image: "/infrastructure/facility-hero.jpg",
      category: "Manufacturing Facility",
      badge: "25,000+ Sq. Ft. Facility",
    },
    {
      title: "Precision in Every Detail",
      tagline: "Sub-Micron Machining & Metrology",
      description:
        "Explore high-speed 5-axis CNC machining centers, mirror EDM spark erosion stations, and Zeiss 3D CMM sub-micron inspection.",
      image: "/infrastructure/cnc-machining.jpg",
      category: "Machinery",
      badge: "±0.002mm Tolerance",
    },
    {
      title: "Engineered Mold Solutions",
      tagline: "High-Cavitation & ISBM Tooling",
      description:
        "Discover balanced hot runner preform molds up to 96 cavities, single-stage ISBM systems, and rugged EBM jerry can canisters.",
      image: "/product/high-cavitation-preform-mold.png",
      category: "Products",
      badge: "Up to 96 Cavities",
    },
  ],
  items: GALLERY_ITEMS,
};

export async function getDynamicGalleryContent(): Promise<DynamicGalleryData> {
  try {
    const res = await fetch(ADMIN_GALLERY_URL, {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("Failed to fetch dynamic gallery content");
    const json = await res.json();
    if (json.success && json.data) {
      return {
        heroBanner: json.data.heroBanner || STATIC_GALLERY_FALLBACK.heroBanner,
        intro: json.data.intro || STATIC_GALLERY_FALLBACK.intro,
        featuredCollections:
          json.data.featuredCollections?.length > 0
            ? json.data.featuredCollections
            : STATIC_GALLERY_FALLBACK.featuredCollections,
        items:
          json.data.items?.length > 0
            ? json.data.items
            : STATIC_GALLERY_FALLBACK.items,
      };
    }
  } catch (err) {
    console.warn("Using fallback static gallery data:", err);
  }

  return STATIC_GALLERY_FALLBACK;
}

export async function getDynamicGalleryItem(slug: string): Promise<{
  item: GalleryItem | null;
  relatedItems: GalleryItem[];
}> {
  const data = await getDynamicGalleryContent();
  const item = data.items.find((i) => i.slug === slug) || null;

  if (!item) {
    return { item: null, relatedItems: [] };
  }

  // Related items from same category
  const relatedItems = data.items
    .filter((i) => i.category === item.category && i.slug !== item.slug)
    .slice(0, 3);

  if (relatedItems.length < 3) {
    const extra = data.items
      .filter((i) => i.slug !== item.slug && !relatedItems.some((r) => r.slug === i.slug))
      .slice(0, 3 - relatedItems.length);
    relatedItems.push(...extra);
  }

  return { item, relatedItems };
}

