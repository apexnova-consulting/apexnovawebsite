import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import GovernanceNavbar from '@/components/GovernanceNavbar';
import GovernanceFooter from '@/components/GovernanceFooter';
import Script from 'next/script';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

// Your GA4 Measurement ID
const GA_MEASUREMENT_ID = 'G-8SS5JWNLS6';

export const metadata: Metadata = {
  title: 'ApexNova AI Governance & Security | NJDPA, HIPAA & Wire Fraud Compliance',
  description: 'Enterprise AI governance for Real Estate, Healthcare, and SaaS. NJDPA ready. HIPAA compliant. Wire fraud prevention. Get your free AI risk scan today.',
  keywords: 'AI governance, NJDPA compliance, HIPAA AI compliance, wire fraud prevention, AI security, real estate AI, healthcare AI, SaaS AI governance',
  openGraph: {
    title: 'ApexNova AI Governance & Security | Enterprise Compliance',
    description: 'Enterprise AI governance for Real Estate, Healthcare, and SaaS. NJDPA ready. HIPAA compliant. Wire fraud prevention.',
    url: 'https://www.apexnovaconsulting.com',
    siteName: 'ApexNova AI Governance',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ApexNova AI Governance & Security | Enterprise Compliance',
    description: 'Enterprise AI governance for Real Estate, Healthcare, and SaaS. NJDPA ready. HIPAA compliant. Wire fraud prevention.',
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
  themeColor: '#00f5ff',
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
    <html lang="en" className="dark">
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
                'risk_scan_completed': true,
                'certification_inquiry': true,
                'contact_submitted': true
              }
            });
          `}
        </Script>
      </head>
      <body className={`${inter.variable} font-sans`}>
        <GovernanceNavbar />
        <div id="page-content">
          {children}
        </div>
        <GovernanceFooter />
      </body>
    </html>
  );
}