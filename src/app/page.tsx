'use client';

import DualHero from '@/components/DualHero';
import ServicesSection from '@/components/ServicesSection';
import CaseStudies from '@/components/CaseStudies';
import ClosingCTA from '@/components/ClosingCTA';
import TestimonialCarousel from '@/components/TestimonialCarousel';

export default function Home() {
  return (
    <main className="bg-gray-50">
      <DualHero />
      <ServicesSection />
      <CaseStudies />
      <TestimonialCarousel />
      <ClosingCTA />
    </main>
  );
}