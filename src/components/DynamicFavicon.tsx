"use client";

import { useEffect } from "react";

interface DynamicFaviconProps {
  faviconUrl?: string;
  appleTouchIconUrl?: string;
}

export function DynamicFavicon({
  faviconUrl = "/favicon.ico",
  appleTouchIconUrl = "/icon-192.png",
}: DynamicFaviconProps) {
  useEffect(() => {
    if (typeof document === "undefined") return;

    // 1. Update Standard Favicon links
    let favIconLink = document.querySelector("link[rel='icon']") as HTMLLinkElement | null;
    if (!favIconLink) {
      favIconLink = document.createElement("link");
      favIconLink.rel = "icon";
      document.head.appendChild(favIconLink);
    }
    if (favIconLink && faviconUrl) {
      favIconLink.href = `${faviconUrl}?v=${Date.now()}`;
    }

    // Also update shortcut icon if exists
    let shortcutLink = document.querySelector("link[rel='shortcut icon']") as HTMLLinkElement | null;
    if (shortcutLink && faviconUrl) {
      shortcutLink.href = `${faviconUrl}?v=${Date.now()}`;
    }

    // 2. Update Apple Touch Icon
    let appleLink = document.querySelector("link[rel='apple-touch-icon']") as HTMLLinkElement | null;
    if (appleLink && appleTouchIconUrl) {
      appleLink.href = `${appleTouchIconUrl}?v=${Date.now()}`;
    }
  }, [faviconUrl, appleTouchIconUrl]);

  return null;
}

