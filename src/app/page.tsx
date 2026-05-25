import type { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import SocialProofBar from '@/components/sections/SocialProofBar';
import ProblemSection from '@/components/sections/ProblemSection';
import ServicesSection from '@/components/sections/ServicesSection';
import IndustriesSection from '@/components/sections/IndustriesSection';
import ProcessSection from '@/components/sections/ProcessSection';
import LeadMagnetSection from '@/components/sections/LeadMagnetSection';
import PricingSection from '@/components/sections/PricingSection';
import CTASection from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'AI Tools for NJ & NYC Businesses | ApexNova Consulting',
  description:
    'ApexNova builds custom AI chatbots, automation workflows, and lead capture tools for real estate teams, medical practices, law firms, and local businesses in New Jersey and NYC.',
  alternates: { canonical: 'https://www.apexnovaconsulting.com' },
};

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <SocialProofBar />
      <ProblemSection />
      <ServicesSection />
      <IndustriesSection />
      <ProcessSection />
      <LeadMagnetSection />
      <PricingSection />
      <CTASection />
    </main>
  );
}
