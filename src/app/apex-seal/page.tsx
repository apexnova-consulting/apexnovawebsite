'use client';

import { motion } from 'framer-motion';
import ApexSealSection from '@/components/ApexSealSection';
import { Shield } from 'lucide-react';

export default function ApexSealPage() {
  return (
    <main className="min-h-screen bg-slate-950 pt-20">
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-navy-950 to-slate-950">
          <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-20"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-8"
          >
            <div className="inline-flex items-center justify-center mb-8">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="relative"
              >
                <Shield className="w-24 h-24 text-trust" strokeWidth={1.5} />
                <div className="absolute inset-0 bg-trust/20 rounded-full blur-xl animate-pulse"></div>
              </motion.div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              The <span className="text-trust">Apex Seal</span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto">
              Prove your AI is safe, compliant, and trustworthy with the industry's first 
              third-party certification for AI governance
            </p>
          </motion.div>
        </div>
      </section>

      {/* Apex Seal Component */}
      <ApexSealSection />
    </main>
  );
}

