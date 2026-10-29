import { BLOG_POSTS, BlogPost } from "@/data/blogs";

const ADMIN_BLOGS_URL =
  process.env.NEXT_PUBLIC_ADMIN_BLOGS_URL ||
  "http://localhost:3001/api/blogs";

export interface BlogHeroBannerData {
  titlePart1: string;
  titleHighlight: string;
  breadcrumbHome: string;
  breadcrumbCurrent: string;
  bannerImage: string;
}

export interface BlogIntroSectionData {
  badge: string;
  headingPart1: string;
  headingHighlight: string;
  description: string;
}

export interface BlogCategoryFilterItem {
  name: string;
  slug: string;
}

export interface DynamicBlogsData {
  heroBanner: BlogHeroBannerData;
  intro: BlogIntroSectionData;
  categories: BlogCategoryFilterItem[];
  posts: BlogPost[];
}

export const STATIC_BLOGS_FALLBACK: DynamicBlogsData = {
  heroBanner: {
    titlePart1: "Insights &",
    titleHighlight: "Articles",
    breadcrumbHome: "Home",
    breadcrumbCurrent: "Blogs",
    bannerImage: "/blogs/blog-banner.jpg",
  },
  intro: {
    badge: "Mould Engineering Knowledge Base",
    headingPart1: "Technical Insights from Our",
    headingHighlight: "Gujarat Toolroom",
    description:
      "Authoritative, deeply technical articles written by our senior mold engineers and toolmakers on cycle time optimization, tool steels, pharmaceutical ISBM tooling, and extrusion blow mold engineering.",
  },
  categories: [
    { name: "All Articles", slug: "all" },
    { name: "Engineering & Simulation", slug: "engineering" },
    { name: "Materials & Metallurgy", slug: "materials" },
    { name: "Pharmaceutical Packaging", slug: "pharmaceutical" },
    { name: "Mould Design & Tooling", slug: "manufacturing" },
  ],
  posts: BLOG_POSTS,
};

export async function getDynamicBlogsContent(): Promise<DynamicBlogsData> {
  try {
    const res = await fetch(ADMIN_BLOGS_URL, {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("Failed to fetch dynamic blogs content");
    const json = await res.json();
    if (json.success && json.data) {
      return {
        heroBanner: json.data.heroBanner || STATIC_BLOGS_FALLBACK.heroBanner,
        intro: json.data.intro || STATIC_BLOGS_FALLBACK.intro,
        categories:
          json.data.categories?.length > 0
            ? json.data.categories
            : STATIC_BLOGS_FALLBACK.categories,
        posts:
          json.data.posts?.length > 0
            ? json.data.posts
            : STATIC_BLOGS_FALLBACK.posts,
      };
    }
  } catch (err) {
    console.warn("Using fallback static blogs data:", err);
  }

  return STATIC_BLOGS_FALLBACK;
}

export async function getDynamicBlogPost(slug: string): Promise<{
  post: BlogPost | null;
  relatedBlogs: BlogPost[];
}> {
  const data = await getDynamicBlogsContent();
  const post = data.posts.find((p) => p.slug === slug) || null;

  if (!post) {
    return { post: null, relatedBlogs: [] };
  }

  // Other blogs as recommendations
  const relatedBlogs = data.posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return { post, relatedBlogs };
}

