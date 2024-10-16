/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  // Add basePath
  // basePath: '',
  images: {
    domains: ["picsum.photos", "cdn.jsdelivr.net"], // Add your CDN domain
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

module.exports = nextConfig;
