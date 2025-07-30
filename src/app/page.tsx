'use client';

import AIHero from '@/components/AIHero';
import ProblemSection from '@/components/ProblemSection';
import CoreOffer from '@/components/CoreOffer';
import ServicesGrid from '@/components/ServicesGrid';
import WhyWereFounded from '@/components/WhyWereFounded';
import LeadMagnet from '@/components/LeadMagnet';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <AIHero />
      <ProblemSection />
      <CoreOffer />
      <ServicesGrid />
      <WhyWereFounded />
      <Testimonials />
      <LeadMagnet />
      <Footer />
    </main>
  );
}