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
  title: "FreelancerTeam — A Fresh Creative Team | Websites, Apps, Brands & Campaigns",
  description:
    "A newly-formed freelance team of five creatives building websites, mobile apps, UI/UX designs, brand identities, ad creatives, and marketing campaigns. Hungry for our first success story — let us make it yours.",
  keywords: [
    "freelance team",
    "web development",
    "mobile app development",
    "UI/UX design",
    "graphic design",
    "branding",
    "ad creatives",
    "campaign design",
    "digital agency",
    "website design",
    "logo design",
    "landing page",
  ],
  authors: [{ name: "FreelancerTeam" }],
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='20' fill='%237C3AED'/><text x='50' y='65' font-size='45' font-weight='bold' text-anchor='middle' fill='white'>FT</text></svg>",
  },
  openGraph: {
    title: "FreelancerTeam — A Fresh Creative Team",
    description:
      "A newly-formed freelance team of five creatives building websites, apps, brands, and campaigns. Looking for our first client!",
    url: "https://freelancerteam.com",
    siteName: "FreelancerTeam",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "FreelancerTeam — A Fresh Creative Team",
    description:
      "A newly-formed freelance team of five creatives. Looking for our first client!",
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
