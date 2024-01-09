/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  // Add basePath
  // basePath: '',
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;
