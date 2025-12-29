import GovernanceHero from '@/components/GovernanceHero';
import GovernanceSocialProof from '@/components/GovernanceSocialProof';
import AIRiskScanner from '@/components/AIRiskScanner';
import ApexSealSection from '@/components/ApexSealSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      <GovernanceHero />
      <GovernanceSocialProof />
      <AIRiskScanner />
      <ApexSealSection />
    </main>
  );
}
