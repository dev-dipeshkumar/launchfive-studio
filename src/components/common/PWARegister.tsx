"use client";

import { useEffect } from "react";

/**
 * Registers the offline service worker (public/sw.js) in production.
 * No-op in development to avoid caching headaches while editing.
 */
export default function PWARegister() {
  useEffect(() => {
    if (
      typeof window === "undefined" ||
      !("serviceWorker" in navigator) ||
      process.env.NODE_ENV !== "production"
    ) {
      return;
    }

    const onLoad = () => {
      navigator.serviceWorker.register("/sw.js").catch(() => {
        /* Registration failures are non-fatal — the site still works online. */
      });
    };

    if (document.readyState === "complete") {
      onLoad();
    } else {
      window.addEventListener("load", onLoad, { once: true });
    }
  }, []);

  return null;
}
