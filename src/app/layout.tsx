import type { Metadata } from 'next';
import { Syne, DM_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import SiteNavbar from '@/components/SiteNavbar';
import SiteFooter from '@/components/SiteFooter';
import { Analytics } from '@vercel/analytics/react';

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'AI Tools for NJ & NYC Businesses | ApexNova Consulting',
  description:
    'ApexNova builds custom AI chatbots, automation workflows, and lead capture tools for real estate teams, medical practices, law firms, and local businesses in New Jersey and NYC.',
  metadataBase: new URL('https://www.apexnovaconsulting.com'),
  keywords: [
    'AI consulting NJ',
    'AI chatbot New Jersey',
    'business automation NYC',
    'AI for real estate NJ',
    'AI for medical practices',
    'AI for law firms NJ',
    'Lambertville NJ AI consultant',
    'small business AI tools',
  ],
  authors: [{ name: 'ApexNova Consulting', url: 'https://www.apexnovaconsulting.com' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.apexnovaconsulting.com',
    siteName: 'ApexNova Consulting',
    title: 'AI Tools for NJ & NYC Businesses | ApexNova Consulting',
    description:
      'Custom AI chatbots, automations, and smart workflows for real estate teams, medical practices, law firms, and local businesses across NJ and NYC.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ApexNova Consulting — AI for NJ & NYC Businesses',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Tools for NJ & NYC Businesses | ApexNova Consulting',
    description:
      'Custom AI chatbots, automations, and smart workflows for NJ & NYC businesses.',
    images: ['/images/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'ApexNova Consulting',
  description: 'AI implementation and automation consulting for NJ/NYC businesses',
  url: 'https://www.apexnovaconsulting.com',
  telephone: '+19733485008',
  email: 'info@apexnovaconsulting.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lambertville',
    addressRegion: 'NJ',
    postalCode: '08530',
    addressCountry: 'US',
  },
  areaServed: ['New Jersey', 'New York City', 'NYC Tri-State Area'],
  serviceType: [
    'AI Consulting',
    'Chatbot Development',
    'Workflow Automation',
    'AI Implementation',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`dark ${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        <SiteNavbar />
        <div id="page-content">{children}</div>
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  );
}
