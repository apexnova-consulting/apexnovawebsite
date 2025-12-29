'use client';

import Link from 'next/link';
import { Shield, Mail, Phone, MapPin, Lock } from 'lucide-react';

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
                  ApexNova Consulting
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
                href="mailto:info@apexnovaconsulting.com" 
                className="flex items-center space-x-3 text-slate-400 hover:text-cyber transition-colors group"
              >
                <Mail className="w-5 h-5" />
                <span className="text-sm">info@apexnovaconsulting.com</span>
              </a>
              <a 
                href="tel:+1-973-348-5008" 
                className="flex items-center space-x-3 text-slate-400 hover:text-cyber transition-colors group"
              >
                <Phone className="w-5 h-5" />
                <span className="text-sm">+1 (973) 348-5008</span>
              </a>
              <div className="flex items-start space-x-3 text-slate-400">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-sm">
                  Serving New Jersey<br />
                  and the NYC Tri-State Area
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a
                href="https://instagram.com/apexnova_consulting"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg hover:border-cyber hover:text-cyber transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span className="text-sm font-medium">Instagram</span>
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

