import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import mongoose from "mongoose";

const ADMIN_PRODUCTS_URL =
  process.env.ADMIN_PRODUCTS_URL ||
  process.env.NEXT_PUBLIC_ADMIN_PRODUCTS_URL ||
  "http://localhost:3001/api/products";

export async function GET() {
  // 1. First attempt to fetch from Admin CMS API endpoint with a tight timeout
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 1200);

    const res = await fetch(ADMIN_PRODUCTS_URL, {
      signal: controller.signal,
      cache: "no-store",
    });
    clearTimeout(timeout);

    if (res.ok) {
      const data = await res.json();
      return NextResponse.json(data);
    }
  } catch (apiError: any) {
    // Admin API fetch failed or timed out -> proceed to database fallback
  }

  // 2. Fallback: direct MongoDB query
  try {
    if (process.env.MONGODB_URI) {
      await connectDB();
      // Try both common collection naming conventions (camelCase and pluralized)
      const coll = mongoose.connection.collection("productpagecontents");
      let productDoc = await coll.findOne({});
      if (!productDoc) {
        productDoc = await mongoose.connection.collection("product_page_content").findOne({});
      }
      if (productDoc) {
        return NextResponse.json({ success: true, data: productDoc });
      }
    }
  } catch (dbError: any) {
    console.error("MongoDB direct query error in /api/products:", dbError);
  }

  return NextResponse.json(
    { success: false, error: "Admin service and database unavailable" },
    { status: 503 }
  );
}

