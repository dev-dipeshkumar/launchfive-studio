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
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='20' fill='%237C3AED'/><text x='50' y='65' font-size='45' font-weight='bold' text-anchor='middle' fill='white'>L5</text></svg>",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#070A13] text-[#F8FAFC]`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
