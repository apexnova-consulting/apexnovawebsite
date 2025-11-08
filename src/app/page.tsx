'use client';

import AISecurityHero from '@/components/AISecurityHero';
import ProblemAgitation from '@/components/ProblemAgitation';
import ThreeTierServices from '@/components/ThreeTierServices';
import AISecurityFramework from '@/components/AISecurityFramework';
import InteractiveFAQ from '@/components/InteractiveFAQ';
import ClosingCTA from '@/components/ClosingCTA';

export default function Home() {
  return (
    <main className="bg-white">
      <AISecurityHero />
      <ProblemAgitation />
      <ThreeTierServices />
      <AISecurityFramework />
      <InteractiveFAQ />
      <ClosingCTA />
    </main>
  );
}