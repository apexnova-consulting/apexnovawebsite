'use client';

import Hero from '@/components/Hero';
import PainPoints from '@/components/PainPoints';
import Solution from '@/components/Solution';
import HowItWorks from '@/components/HowItWorks';
import Proof from '@/components/Proof';
import Services from '@/components/Services';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <PainPoints />
      <Solution />
      <HowItWorks />
      <Proof />
      <Services />
      <FAQ />
      <Footer />
    </main>
  );
} 