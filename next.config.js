/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Add basePath
  basePath: '/ax-sh.github.io',
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;
