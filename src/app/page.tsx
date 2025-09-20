'use client';

import DualHero from '@/components/DualHero';
import ServicesSection from '@/components/ServicesSection';
import HowItWorks from '@/components/HowItWorks';
import CaseStudies from '@/components/CaseStudies';
import ClosingCTA from '@/components/ClosingCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-gray-50">
      <DualHero />
      <ServicesSection />
      <HowItWorks />
      <CaseStudies />
      <ClosingCTA />
      <Footer />
    </main>
  );
}