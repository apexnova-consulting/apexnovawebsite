import GovernanceHero from '@/components/GovernanceHero';
import GovernanceSocialProof from '@/components/GovernanceSocialProof';
import InteractiveRiskCalculator from '@/components/InteractiveRiskCalculator';
import ApexCertifiedVault from '@/components/ApexCertifiedVault';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      <GovernanceHero />
      <GovernanceSocialProof />
      
      {/* Interactive Risk Calculator Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What's Your AI Risk Score?
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Answer 5 questions to discover your vulnerabilities and get a personalized roadmap
          </p>
        </div>
        <InteractiveRiskCalculator />
      </section>

      <ApexCertifiedVault />
    </main>
  );
}
