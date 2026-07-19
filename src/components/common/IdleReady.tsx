"use client";

import { useEffect } from "react";

/**
 * Adds the `.idle-ready` class to <html> once the browser is idle so that
 * decorative CSS animations (gradient-shift, float, pulse-glow) only start
 * after the initial render / LCP, keeping the main thread free.
 */
export default function IdleReady() {
  useEffect(() => {
    const w = window as Window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
      cancelIdleCallback?: (id: number) => void;
    };
    const enable = () => document.documentElement.classList.add("idle-ready");
    if (typeof w.requestIdleCallback === "function") {
      const id = w.requestIdleCallback(enable, { timeout: 1500 });
      return () => w.cancelIdleCallback?.(id);
    }
    const t = setTimeout(enable, 800);
    return () => clearTimeout(t);
  }, []);
  return null;
}
