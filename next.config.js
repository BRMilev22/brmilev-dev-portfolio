/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: ['localhost'],
    formats: ['image/webp'],
    deviceSizes: [640, 768, 1024, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },
  swcMinify: true,
  poweredByHeader: false,
}

module.exports = nextConfig