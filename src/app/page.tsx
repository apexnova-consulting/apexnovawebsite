'use client';

import AISecurityHero from '@/components/AISecurityHero';
import ProblemAgitation from '@/components/ProblemAgitation';
import ThreeTierServices from '@/components/ThreeTierServices';
import AISecurityFramework from '@/components/AISecurityFramework';
import AISecurityTestimonials from '@/components/AISecurityTestimonials';
import ClosingCTA from '@/components/ClosingCTA';

export default function Home() {
  return (
    <main className="bg-white">
      <AISecurityHero />
      <ProblemAgitation />
      <ThreeTierServices />
      <AISecurityFramework />
      <AISecurityTestimonials />
      <ClosingCTA />
    </main>
  );
}