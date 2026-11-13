import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import mongoose from "mongoose";

const ADMIN_API_URL =
  process.env.ADMIN_API_URL ||
  process.env.NEXT_PUBLIC_ADMIN_API_URL ||
  "http://localhost:3001/api/home";

export async function GET() {
  // First attempt to fetch from Admin CMS API endpoint with a tight timeout
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 1200);

    const res = await fetch(ADMIN_API_URL, {
      signal: controller.signal,
      cache: "no-store",
    });
    clearTimeout(timeout);

    if (res.ok) {
      const data = await res.json();
      return NextResponse.json(data);
    }
  } catch (apiError: any) {
    // Admin API fetch failed (offline, timeout, etc.) -> fall back to direct DB read
  }

  // Fallback: direct MongoDB query
  try {
    if (process.env.MONGODB_URI) {
      await connectDB();
      const homeDoc = await mongoose.connection.collection("homepage_content").findOne({});
      if (homeDoc) {
        return NextResponse.json({ success: true, data: homeDoc });
      }
    }
  } catch (dbError: any) {
    console.error("MongoDB direct query error in /api/home:", dbError);
  }

  return NextResponse.json(
    { success: false, error: "Admin service and database unavailable" },
    { status: 503 }
  );
}

