/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['www.apexnovaconsulting.com'],
    unoptimized: true,
  },
  // Ensure proper handling of client-side navigation
  experimental: {
    scrollRestoration: true,
  },
  // Environment variable configuration
  env: {
    NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_URL || 'https://www.apexnovaconsulting.com',
    NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
  },
  // Optimize build output
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Handle redirects
  async redirects() {
    return [
      {
        source: '/book',
        destination: '/mini-audit',
        permanent: true,
      },
      {
        source: '/toolkit',
        destination: '/toolkit-download',
        permanent: true,
      },
    ];
  },
  // Handle headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },
}

module.exports = nextConfig