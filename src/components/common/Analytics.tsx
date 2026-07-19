"use client";

import { useEffect } from "react";
import { analyticsConfig } from "@/lib/site";

/**
 * Analytics loader for GA4 + Microsoft Clarity.
 *
 * Both integrations are gated behind environment variables and only
 * initialise in production. Nothing is injected when IDs are absent, so
 * local development and preview builds stay clean.
 */
export default function Analytics() {
  useEffect(() => {
    if (!analyticsConfig.enabled) return;

    const { ga4MeasurementId, clarityProjectId } = analyticsConfig;

    /* ── Google Analytics 4 ── */
    if (ga4MeasurementId) {
      const w = window as Window & {
        dataLayer?: unknown[];
        gtag?: (...args: unknown[]) => void;
      };
      w.dataLayer = w.dataLayer || [];
      w.gtag = (...args: unknown[]) => {
        (w.dataLayer as unknown[]).push(args);
      };
      w.gtag("js", new Date());
      w.gtag("config", ga4MeasurementId, { send_page_view: true });

      const gaScript = document.createElement("script");
      gaScript.async = true;
      gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${ga4MeasurementId}`;
      document.head.appendChild(gaScript);
    }

    /* ── Microsoft Clarity ── */
    if (clarityProjectId) {
      const w = window as unknown as {
        clarity?: (...args: unknown[]) => void;
        q?: unknown[];
      };
      w.clarity =
        w.clarity ||
        function (...args: unknown[]) {
          (w.q = w.q || []).push(args);
        };
      const s = document.getElementsByTagName("script")[0];
      const y = document.createElement("script");
      y.async = true;
      y.src = "https://www.clarity.ms/tag/" + clarityProjectId;
      s.parentNode?.insertBefore(y, s);
    }
  }, []);

  return null;
}
