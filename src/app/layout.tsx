import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#070A13",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "LaunchFive Studio – Websites, Apps, UI/UX, Branding & Digital Creatives",
  description:
    "LaunchFive Studio is a focused 5-member creative-tech studio creating websites, apps, UI/UX designs, branding, logos, graphics, templates, and ad creatives with modern tools and clear communication.",
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
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' rx='20' fill='%23070A13'/%3E%3Cdefs%3E%3ClinearGradient id='g' x1='50' y1='90' x2='50' y2='10' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0%25' stop-color='%237C3AED'/%3E%3Cstop offset='45%25' stop-color='%238B5CF6'/%3E%3Cstop offset='100%25' stop-color='%2306B6D4'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect x='8' y='82' width='84' height='7' rx='3.5' fill='url(%23g)' opacity='0.5'/%3E%3Crect x='16' y='68' width='68' height='7' rx='3.5' fill='url(%23g)' opacity='0.65'/%3E%3Crect x='24' y='54' width='52' height='7' rx='3.5' fill='url(%23g)' opacity='0.8'/%3E%3Crect x='32' y='40' width='36' height='7' rx='3.5' fill='url(%23g)' opacity='0.93'/%3E%3Cpath d='M50 10 L67 33 L33 33 Z' fill='url(%23g)'/%3E%3C/svg%3E",
  },
  openGraph: {
    title: "LaunchFive Studio – Websites, Apps, UI/UX, Branding & Digital Creatives",
    description:
      "A focused 5-member creative-tech studio creating websites, apps, UI/UX designs, branding, logos, graphics, templates, and ad creatives with modern tools and clear communication.",
    url: "https://launchfivestudio.com",
    siteName: "LaunchFive Studio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "LaunchFive Studio – Websites, Apps, UI/UX, Branding & Digital Creatives",
    description:
      "A focused 5-member creative-tech studio creating websites, apps, UI/UX designs, branding, logos, graphics, templates, and ad creatives with modern tools and clear communication.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#070A13] text-[#F8FAFC] overflow-x-hidden`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
