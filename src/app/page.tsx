'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SpeechFlowTeaser from '@/components/SpeechFlowTeaser';
import Testimonials from '@/components/Testimonials';
import NewsletterSignup from '@/components/NewsletterSignup';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SpeechFlowTeaser />
      <Testimonials />
      <NewsletterSignup />
      <Footer />
    </main>
  );
} 