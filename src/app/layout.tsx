import '../styles/globals.css';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import Script from 'next/script';
import ScrollToTop from '@/components/ScrollToTop';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'ApexNova | AI Adoption-as-a-Service™ for Enterprise Teams',
  description: 'ApexNova helps your team adopt AI tools, automate workflows, and finally see ROI — without overhauling your tech stack or overwhelming your people.',
  keywords: 'AI adoption, enterprise AI, AI enablement, digital transformation, AI consulting, ChatGPT Enterprise, Microsoft Copilot, Notion AI, AI training, AI workflow automation',
  openGraph: {
    title: 'ApexNova | AI Adoption-as-a-Service™ for Enterprise Teams',
    description: 'Transform your AI investment into real business outcomes with proven enablement strategies and training systems.',
    url: 'https://apexnovaconsulting.com',
    siteName: 'ApexNova',
    images: [
      {
        url: 'https://apexnovaconsulting.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ApexNova - AI Adoption-as-a-Service'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ApexNova | AI Adoption-as-a-Service™',
    description: 'Transform your AI investment into real business outcomes with proven enablement strategies.',
    images: ['https://apexnovaconsulting.com/images/og-image.jpg'],
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
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://apexnovaconsulting.com" />

        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>

        {/* HubSpot Tracking */}
        <Script id="hubspot" strategy="afterInteractive">
          {`
            (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:'${process.env.NEXT_PUBLIC_HUBSPOT_ID}',hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
            })(window,document,'https://static.hsappstatic.net/HubspotToolsContent/js/embed/embed.js','');
          `}
        </Script>
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <Navbar />
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}