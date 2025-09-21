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
  title: 'ApexNova Consulting | Executive Coaching & AI Transformation',
  description: 'Executive coaching and AI adoption strategies that cut friction, boost communication, and deliver measurable ROI. Book your free mini audit today.',
  keywords: 'AI consulting, executive coaching, ROI optimization, team enablement, AI adoption, productivity improvement',
  openGraph: {
    title: 'ApexNova Consulting | Executive Coaching & AI Transformation',
    description: 'Executive coaching and AI adoption strategies that cut friction, boost communication, and deliver measurable ROI.',
    url: 'https://www.apexnovaconsulting.com',
    siteName: 'ApexNova Consulting',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ApexNova Consulting | Executive Coaching & AI Transformation',
    description: 'Executive coaching and AI adoption strategies that cut friction, boost communication, and deliver measurable ROI.',
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
  themeColor: '#00A69C',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
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
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
              send_page_view: true,
              goals: {
                'audit_booked': true,
                'toolkit_downloaded': true,
                'contact_submitted': true
              }
            });
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