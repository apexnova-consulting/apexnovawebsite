/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'www.apexnovaconsulting.com' },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  env: {
    NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_URL || 'https://www.apexnovaconsulting.com',
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  async redirects() {
    return [
      // Old governance/compliance routes → governance archive page
      { source: '/compliance-audit', destination: '/governance', permanent: false },
      { source: '/apex-seal', destination: '/governance', permanent: false },
      { source: '/governance-dashboard', destination: '/governance', permanent: false },
      { source: '/audit', destination: '/governance', permanent: false },
      { source: '/risk-scan', destination: '/governance', permanent: false },
      { source: '/ai-risk-calculator', destination: '/governance', permanent: false },
      { source: '/roi-audit', destination: '/governance', permanent: false },
      // Old industry routes
      { source: '/industries/healthcare', destination: '/industries/medical', permanent: true },
      { source: '/industries/saas', destination: '/industries/smb', permanent: true },
      // Old coaching/product routes
      { source: '/book', destination: '/contact', permanent: true },
      { source: '/toolkit', destination: '/contact', permanent: true },
      { source: '/coaching', destination: '/about', permanent: false },
      { source: '/digital-products', destination: '/services', permanent: false },
      { source: '/mini-audit', destination: '/contact', permanent: true },
      { source: '/companies', destination: '/industries/smb', permanent: false },
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
