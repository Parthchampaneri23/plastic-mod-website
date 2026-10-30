import {
  PRODUCTS as DEFAULT_PRODUCTS,
  CATEGORIES as DEFAULT_CATEGORIES,
  Product,
} from "@/data/products";

const ADMIN_PRODUCTS_URL =
  process.env.ADMIN_PRODUCTS_URL ||
  process.env.NEXT_PUBLIC_ADMIN_PRODUCTS_URL ||
  "http://localhost:3001/api/products";

export interface DynamicProductsData {
  hero?: {
    badge: string;
    heading: string;
    headingHighlight: string;
    description: string;
    backgroundImage?: string;
  };
  categories: Array<{
    id: string;
    slug: string;
    name: string;
    label: string;
    description?: string;
    image?: string;
  }>;
  products: Array<Product & {
    id?: string;
    seo?: {
      metaTitle: string;
      metaDescription: string;
      metaKeywords: string;
      canonicalUrl: string;
      schemaJson: string;
    };
  }>;
}

export async function getDynamicProductsContent(): Promise<DynamicProductsData> {
  try {
    // When executing in the client browser, fetch via internal proxy route to avoid direct cross-origin localhost issues
    const targetUrl =
      typeof window !== "undefined" ? "/api/products" : ADMIN_PRODUCTS_URL;

    const res = await fetch(targetUrl, {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("Failed to fetch dynamic products content");
    const json = await res.json();
    if (json.success && json.data) {
      return json.data;
    }
  } catch (err) {
    // Silently fall back to static products data without noisy console spam
  }

  // Fallback to static products.ts
  return {
    hero: {
      badge: "PRECISION MOULD CATALOG",
      heading: "High-Performance Moulds Engineered for",
      headingHighlight: "Zero-Defect Production",
      description:
        "Explore Patel Mould Industries' comprehensive catalog of high-speed PET Preform, Single-Stage ISBM, and Extrusion Blow Moulds (EBM) engineered for beverage, cosmetic, pharma, and industrial packaging.",
      backgroundImage: "/product/product banner.png",
    },
    categories: [
      { id: "preform-jar", slug: "preform-jar", name: "Preform & Jar Mold", label: "PREFORM & JAR MOULDS" },
      { id: "isbm", slug: "isbm", name: "ISBM Mold", label: "ISBM MOULDS" },
      { id: "ebm", slug: "ebm", name: "EBM Mold", label: "EBM MOULDS" },
    ],
    products: DEFAULT_PRODUCTS.map((p) => ({
      ...p,
      id: p.slug,
      seo: {
        metaTitle: `${p.name} | Patel Mould Industries`,
        metaDescription: p.shortDescription,
        metaKeywords: p.keywords.join(", "),
        canonicalUrl: `https://www.patelmould.com/products/${p.slug}`,
        schemaJson: JSON.stringify(
          {
            "@context": "https://schema.org",
            "@type": "Product",
            name: p.name,
            image: `https://www.patelmould.com${p.image}`,
            description: p.shortDescription,
            brand: { "@type": "Brand", name: "Patel Mould Industries" },
          },
          null,
          2
        ),
      },
    })),
  };
}

export async function getDynamicProductBySlug(slug: string) {
  const data = await getDynamicProductsContent();
  const product = data.products.find((p) => p.slug === slug);
  return {
    product: product || DEFAULT_PRODUCTS.find((p) => p.slug === slug) || null,
    allProducts: data.products.length > 0 ? data.products : DEFAULT_PRODUCTS,
  };
}
