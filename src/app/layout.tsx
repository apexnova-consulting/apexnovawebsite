import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

// Your GA4 Measurement ID
const GA_MEASUREMENT_ID = 'G-8SS5JWNLS6';

export const metadata: Metadata = {
  title: 'ApexNova Consulting | AI Enablement + ROI Consulting',
  description: 'We help executives and teams unlock productivity with AI adoption, training, and enablement. From friction to workflows → measurable results.',
  keywords: 'AI consulting, ROI optimization, team enablement, AI adoption, productivity improvement, executive coaching',
  openGraph: {
    title: 'ApexNova Consulting | AI Enablement + ROI Consulting',
    description: 'Transform your team\'s AI adoption into measurable ROI. Expert consulting for executives and teams.',
    url: 'https://www.apexnovaconsulting.com',
    siteName: 'ApexNova Consulting',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ApexNova Consulting | AI Enablement + ROI Consulting',
    description: 'Transform your team\'s AI adoption into measurable ROI. Expert consulting for executives and teams.',
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
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <Navbar />
        <div id="page-content">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}