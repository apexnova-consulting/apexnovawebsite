'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import AIRiskScanner from '@/components/AIRiskScanner';
import { Shield, ChevronRight } from 'lucide-react';

export default function GovernanceDashboardPage() {
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
            className="text-center space-y-6"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-cyber/10 border border-cyber/30 rounded-full">
              <Shield className="w-4 h-4 text-cyber" />
              <span className="text-sm font-semibold text-cyber">Free AI Risk Assessment</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              AI <span className="text-cyber">Governance Dashboard</span>
            </h1>

            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Get instant visibility into your AI compliance gaps. Our interactive scanner identifies vulnerabilities in minutes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Risk Scanner Component */}
      <AIRiskScanner />

      {/* Additional CTA Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Want a Deeper Analysis?
            </h2>
            <p className="text-xl text-slate-300">
              Schedule a full compliance audit with our AI governance experts
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-trust to-cyber text-slate-950 rounded-lg hover:shadow-cyber-lg transition-all font-bold text-lg"
            >
              <span>Book Your Compliance Audit</span>
              <ChevronRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

