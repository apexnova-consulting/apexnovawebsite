'use client';

import DualHero from '@/components/DualHero';
import DualServices from '@/components/DualServices';
import ToolkitCTA from '@/components/ToolkitCTA';
import DualTestimonials from '@/components/DualTestimonials';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <DualHero />
      <DualServices />
      <ToolkitCTA />
      <DualTestimonials />
      <Footer />
    </main>
  );
}