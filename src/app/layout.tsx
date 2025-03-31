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
  title: 'ApexNova Consulting - Executive Communication Coaching & AI Solutions',
  description: 'Transform your leadership presence with expert communication coaching and AI-powered solutions. Elevate your impact with ApexNova Consulting.',
  keywords: 'executive coaching, communication coaching, leadership, public speaking, SpeechFlow AI, communication skills',
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