import type { Metadata } from "next";
import { Geist, Geist_Mono, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Patel Mould Industries | Precision Plastic Mould Manufacturer",
  description: "Manufacturer of high-precision PET preform moulds, ISBM moulds, and EBM tooling with 30+ years of engineering excellence.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/icon-192.png" },
    ],
  },
};

import { ScrollToTopOnNavigate } from "@/components/ScrollToTopOnNavigate";
import { DynamicFavicon } from "@/components/DynamicFavicon";
import { getDynamicHomeContent } from "@/services/homeService";

export default async function RootLayout({ children }: LayoutProps<"/">) {
  let faviconUrl = "/favicon.ico";
  let appleTouchIconUrl = "/icon-192.png";

  try {
    const homeData = await getDynamicHomeContent();
    if (homeData?.brandIdentity?.faviconUrl) {
      faviconUrl = homeData.brandIdentity.faviconUrl;
    }
    if (homeData?.brandIdentity?.appleTouchIconUrl) {
      appleTouchIconUrl = homeData.brandIdentity.appleTouchIconUrl;
    }
  } catch (e) {
    // Fall back to default favicon
  }

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${bricolage.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href={faviconUrl} sizes="any" />
        <link rel="apple-touch-icon" href={appleTouchIconUrl} />
      </head>
      <body className="min-h-full flex flex-col">
        <ScrollToTopOnNavigate />
        <DynamicFavicon faviconUrl={faviconUrl} appleTouchIconUrl={appleTouchIconUrl} />
        {children}
      </body>
    </html>
  );
}
