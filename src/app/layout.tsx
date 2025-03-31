import '../styles/globals.css';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import ScrollToTop from '@/components/ScrollToTop';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: 'ApexNova Consulting - Executive Communication Coaching',
  description: 'Transform your executive communication skills with AI-powered coaching and expert guidance.',
  keywords: 'executive coaching, communication coaching, leadership, public speaking, SpeechFlow AI, communication skills',
  icons: {
    icon: '/favicon/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
} 