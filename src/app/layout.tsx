import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import StructuredData from "@/components/common/StructuredData";
import Analytics from "@/components/common/Analytics";
import { siteConfig, verificationConfig } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
  adjustFontFallback: true,
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F8FAFC" },
    { media: "(prefers-color-scheme: dark)", color: "#070A13" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default:
      "LaunchFive Studio – Websites, Apps, UI/UX, Branding & Digital Creatives",
    template: "%s | LaunchFive Studio",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "LaunchFive Studio",
    "creative tech studio",
    "web development",
    "mobile app development",
    "UI/UX design",
    "graphic design",
    "branding",
    "ad creatives",
    "campaign design",
    "website design",
    "logo design",
    "landing page",
    "freelance studio",
    "startup studio",
  ],
  authors: [{ name: "LaunchFive Studio" }],
  creator: "LaunchFive Studio",
  publisher: "LaunchFive Studio",
  alternates: {
    canonical: siteConfig.url,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/icons/apple-touch-icon.png" }],
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title:
      "LaunchFive Studio – Websites, Apps, UI/UX, Branding & Digital Creatives",
    description: siteConfig.description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "LaunchFive Studio — Creative-Tech Studio",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "LaunchFive Studio – Websites, Apps, UI/UX, Branding & Digital Creatives",
    description: siteConfig.description,
    images: ["/og-image.png"],
    creator: "@launchfivestudio",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  // Search-engine & social platform site-verification tokens.
  // Each value is read from an environment variable (see verificationConfig).
  // A blank value is omitted so no empty meta tags are emitted.
  verification: {
    ...(verificationConfig.google && { google: verificationConfig.google }),
    other: {
      ...(verificationConfig.bing ? { "msvalidate.01": verificationConfig.bing } : {}),
      ...(verificationConfig.yandex ? { yandex: verificationConfig.yandex } : {}),
      ...(verificationConfig.pinterest ? { pinterest: verificationConfig.pinterest } : {}),
      ...(verificationConfig.facebook
        ? { "facebook-domain-verification": verificationConfig.facebook }
        : {}),
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={siteConfig.language} suppressHydrationWarning>
      <head>
        {/* Preconnect to the Google Fonts CDN so the primary font streams in early. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground overflow-x-hidden`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
