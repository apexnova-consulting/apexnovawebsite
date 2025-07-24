'use client';

import Hero from '@/components/Hero';
import PainPoints from '@/components/PainPoints';
import Solution from '@/components/Solution';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import NewsletterSignup from '@/components/NewsletterSignup';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <PainPoints />
      <Solution />
      <Services />
      <Testimonials />
      <NewsletterSignup />
      <Footer />
    </main>
  );
} 