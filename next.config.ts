import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for Firebase Hosting deployment
  // Generates a fully static site in the /out directory
  output: "export",
  images: {
    // Required for static export — Next.js Image Optimization API needs a server
    unoptimized: true,
    // Prefer modern formats when source images are converted
    formats: ["image/avif", "image/webp"],
  },
  // Reduce client JS: keep framer-motion only where used (already per-component)
  compiler: {
    // Remove console.* in production to shrink bundles
    removeConsole: process.env.NODE_ENV === "production" ? { exclude: ["error", "warn"] } : false,
  },
  // Fail the build on TypeScript errors so production stays type-safe.
  typescript: {
    ignoreBuildErrors: false,
  },
  reactStrictMode: true,
};

export default nextConfig;
