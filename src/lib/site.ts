/**
 * Central site configuration for LaunchFive Studio.
 *
 * Single source of truth for URLs, social profiles, and analytics IDs.
 * Analytics IDs are read from environment variables so they stay
 * configurable per environment (local / preview / production).
 */

export const siteConfig = {
  name: "LaunchFive Studio",
  shortName: "LaunchFive",
  /** Canonical production URL (no trailing slash). */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://launchfive-studio.web.app",
  /** Default canonical path used when a page does not override it. */
  description:
    "LaunchFive Studio is a focused 5-member creative-tech studio creating websites, apps, UI/UX designs, branding, logos, graphics, templates, and ad creatives with modern tools and clear communication.",
  locale: "en_US",
  /** BCP-47 language tag used for the <html lang> attribute and schema. */
  language: "en",
  themeColor: "#070A13",
  backgroundColor: "#070A13",
  /** Preferred business location / service area. */
  location: "India (Remote-first, Worldwide)",
  /** Canonical contact / portfolio / about URLs. */
  contactUrl: "/#contact",
  portfolioUrl: "/#portfolio",
  aboutUrl: "/#team",
  contactEmail: "launchfive.studio@gmail.com",
  contactPhone: "+919783569106",
  contactPhoneDisplay: "+91 97835 69106",
  addressCountry: "IN",
  priceRange: "₹5K - ₹3L+",
  foundingDate: "2025",
  employeeCount: 5,
  areaServed: "Worldwide",
  sameAs: [
    "https://www.linkedin.com/company/launchfive-studio",
    "https://twitter.com/launchfivestudio",
    "https://www.instagram.com/launchfive.studio",
    "https://github.com/dev-dipeshkumar",
  ],
  serviceTypes: [
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "Graphic Design",
    "Branding & Logo Design",
    "Ad Creatives",
    "Campaign Strategy",
    "Social Media Templates",
    "Landing Page Design",
  ],
} as const;

/** Analytics identifiers — configurable via environment variables. */
export const analyticsConfig = {
  ga4MeasurementId: process.env.NEXT_PUBLIC_GA4_ID ?? "",
  clarityProjectId: process.env.NEXT_PUBLIC_CLARITY_ID ?? "",
  /** Enable analytics only when IDs are present and not in dev. */
  get enabled() {
    return (
      process.env.NODE_ENV === "production" &&
      (this.ga4MeasurementId !== "" || this.clarityProjectId !== "")
    );
  },
} as const;

/**
 * Site-verification tokens for search engines and social platforms.
 *
 * All values are read from environment variables so they stay configurable
 * per environment and survive future deployments. Leave a value blank to skip
 * emitting that verification meta tag. See `.env.example` for setup details.
 */
export const verificationConfig = {
  /** Google Search Console — HTML tag verification content. */
  google: process.env.NEXT_PUBLIC_VERIFICATION_GOOGLE ?? "",
  /** Bing Webmaster Tools — HTML tag verification content. */
  bing: process.env.NEXT_PUBLIC_VERIFICATION_BING ?? "",
  /** Yandex Webmaster — HTML tag verification content. */
  yandex: process.env.NEXT_PUBLIC_VERIFICATION_YANDEX ?? "",
  /** Pinterest Site Verification — HTML tag verification content. */
  pinterest: process.env.NEXT_PUBLIC_VERIFICATION_PINTEREST ?? "",
  /** Facebook Domain Verification — HTML tag verification content. */
  facebook: process.env.NEXT_PUBLIC_VERIFICATION_FACEBOOK ?? "",
} as const;

export type SiteConfig = typeof siteConfig;
