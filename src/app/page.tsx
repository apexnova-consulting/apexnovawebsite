'use client';

import DualHero from '@/components/DualHero';
import DualServices from '@/components/DualServices';
import HowItWorks from '@/components/HowItWorks';
import ToolkitCTA from '@/components/ToolkitCTA';
import DualTestimonials from '@/components/DualTestimonials';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <DualHero />
      <DualServices />
      <HowItWorks />
      <DualTestimonials />
      <ToolkitCTA />
      <Footer />
    </main>
  );
}