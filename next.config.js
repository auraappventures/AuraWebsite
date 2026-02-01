/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Ensure proper image optimization
  images: {
    unoptimized: false,
  },
  // Ensure proper TypeScript handling
  typescript: {
    ignoreBuildErrors: false,
  },
  // Ensure proper ESLint handling
  eslint: {
    ignoreDuringBuilds: false,
  },
  // Explicitly set trailing slash for Vercel
  trailingSlash: false,
}

module.exports = nextConfig
