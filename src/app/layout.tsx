import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LaunchFive Studio – Fresh Creative-Tech Team for Websites, Apps, Design & Branding",
  description:
    "LaunchFive Studio is a fresh 5-member creative-tech team helping clients build websites, apps, UI/UX, branding, graphics, logos, templates, and ad creatives with dedication and modern tools.",
  keywords: [
    "LaunchFive Studio",
    "creative tech team",
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
    "freelance team",
    "startup studio",
  ],
  authors: [{ name: "LaunchFive Studio" }],
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='20' fill='%237C3AED'/><text x='50' y='65' font-size='45' font-weight='bold' text-anchor='middle' fill='white'>L5</text></svg>",
  },
  openGraph: {
    title: "LaunchFive Studio – Fresh Creative-Tech Team",
    description:
      "A fresh 5-member creative-tech team helping clients build websites, apps, brands, and campaigns. Looking for our first client!",
    url: "https://launchfivestudio.com",
    siteName: "LaunchFive Studio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "LaunchFive Studio – Fresh Creative-Tech Team",
    description:
      "A fresh 5-member creative-tech team. Looking for our first client!",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#070A13] text-[#F8FAFC]`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
