import { NextResponse } from "next/server";

const ADMIN_API_URL =
  process.env.ADMIN_API_URL ||
  process.env.NEXT_PUBLIC_ADMIN_API_URL ||
  "http://localhost:3001/api/home";

export async function GET() {
  try {
    const res = await fetch(ADMIN_API_URL, {
      cache: "no-store",
    });

    if (!res.ok) {
      return NextResponse.json(
        { success: false, error: "Failed to fetch from admin API" },
        { status: res.status }
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || "Admin service unavailable" },
      { status: 503 }
    );
  }
}

