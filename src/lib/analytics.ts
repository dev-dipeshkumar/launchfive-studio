"use client";

import { analyticsConfig } from "@/lib/site";

export type AnalyticsEvent =
  | "cta_click"
  | "whatsapp_click"
  | "portfolio_click"
  | "contact_submit"
  | "nav_click"
  | "theme_switch"
  | "faq_expand"
  | "scroll_depth";

/**
 * Fire a GA4 event when analytics is enabled. Safe to call from anywhere;
 * it no-ops when GA4 is not configured or not in production.
 */
export function trackEvent(
  event: AnalyticsEvent,
  params: Record<string, string | number | boolean> = {}
) {
  if (!analyticsConfig.enabled || !analyticsConfig.ga4MeasurementId) return;
  const w = window as Window & {
    gtag?: (...args: unknown[]) => void;
  };
  w.gtag?.("event", event, params);
}
