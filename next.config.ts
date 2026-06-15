import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for Firebase Hosting deployment
  // Generates a fully static site in the /out directory
  output: "export",
  images: {
    // Required for static export — Next.js Image Optimization API needs a server
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
