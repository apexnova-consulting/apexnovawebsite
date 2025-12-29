'use client';

import Link from 'next/link';
import { Shield, Mail, Phone, MapPin, Linkedin, Twitter, Lock } from 'lucide-react';

export default function GovernanceFooter() {
  const currentYear = new Date().getFullYear();

  const links = {
    industries: [
      { name: 'Real Estate & Title', href: '/industries/real-estate' },
      { name: 'Healthcare', href: '/industries/healthcare' },
      { name: 'SaaS & GTM', href: '/industries/saas' },
    ],
    solutions: [
      { name: 'AI Risk Scanner', href: '/governance-dashboard' },
      { name: 'Compliance Audit', href: '/compliance-audit' },
      { name: 'Apex Seal Certification', href: '/apex-seal' },
      { name: 'Case Studies', href: '/case-studies' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Contact', href: '/contact' },
      { name: 'Privacy Policy', href: '/privacy-policy' },
      { name: 'Terms of Service', href: '/terms-of-service' },
    ],
    resources: [
      { name: 'NJDPA Compliance Guide', href: '/resources/njdpa-guide' },
      { name: 'NY RAISE Act Overview', href: '/resources/raise-act' },
      { name: 'Wire Fraud Prevention', href: '/resources/wire-fraud' },
      { name: 'HIPAA AI Checklist', href: '/resources/hipaa-checklist' },
    ]
  };

  return (
    <footer className="relative bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <Shield className="w-12 h-12 text-cyber group-hover:animate-pulse" strokeWidth={1.5} />
                <Lock className="w-5 h-5 text-trust absolute bottom-0 right-0" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white tracking-tight">
                  ApexNova
                </span>
                <span className="text-xs text-slate-400 tracking-wider uppercase">
                  AI Governance & Security
                </span>
              </div>
            </Link>
            
            <p className="text-slate-400 leading-relaxed max-w-md">
              Enterprise-grade AI governance for Real Estate, Healthcare, and SaaS companies. 
              Stay compliant, secure, and trusted.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a 
                href="mailto:compliance@apexnovaconsulting.com" 
                className="flex items-center space-x-3 text-slate-400 hover:text-cyber transition-colors group"
              >
                <Mail className="w-5 h-5" />
                <span className="text-sm">compliance@apexnovaconsulting.com</span>
              </a>
              <a 
                href="tel:+1-555-APEX-GOV" 
                className="flex items-center space-x-3 text-slate-400 hover:text-cyber transition-colors group"
              >
                <Phone className="w-5 h-5" />
                <span className="text-sm">+1 (555) APEX-GOV</span>
              </a>
              <div className="flex items-start space-x-3 text-slate-400">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-sm">
                  Princeton, NJ<br />
                  Serving the Tri-State Area
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a
                href="https://linkedin.com/company/apexnova"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-center hover:border-cyber hover:text-cyber transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/apexnova"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-center hover:border-cyber hover:text-cyber transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Industries
            </h3>
            <ul className="space-y-3">
              {links.industries.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-cyber transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Solutions
            </h3>
            <ul className="space-y-3">
              {links.solutions.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-cyber transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-3 mb-6">
              {links.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-cyber transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Certifications Bar */}
        <div className="py-8 border-t border-b border-slate-900 mb-8">
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-trust" />
              <span className="text-xs text-slate-400 font-semibold">SOC 2 Type II</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-trust" />
              <span className="text-xs text-slate-400 font-semibold">HIPAA Compliant</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-trust" />
              <span className="text-xs text-slate-400 font-semibold">GDPR Ready</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-trust" />
              <span className="text-xs text-slate-400 font-semibold">NJDPA Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-trust" />
              <span className="text-xs text-slate-400 font-semibold">ISO 27001</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p className="text-sm text-slate-500">
            © {currentYear} ApexNova Consulting LLC. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-xs text-slate-500">
            <span>Built with security in mind</span>
            <span>•</span>
            <span>Zero-knowledge architecture</span>
            <span>•</span>
            <span>Encrypted end-to-end</span>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-5 pointer-events-none"></div>
    </footer>
  );
}

