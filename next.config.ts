import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  invalidOptions: true,
  devIndicators: { buildActivity: true, appIsrStatus: true },
  output: "export",
  experimental: {},
  // Add basePath
  // basePath: '',
  images: {
    remotePatterns: [{ hostname: "picsum.photos" }, { hostname: "cdn.jsdelivr.net" }], // Add your CDN domain
    unoptimized: true
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true
  }
};

export default nextConfig;
