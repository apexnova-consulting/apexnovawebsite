import Link from 'next/link';
import { MapPin, Mail, Phone, Instagram, Linkedin } from 'lucide-react';

export default function SiteFooter() {
  return (
    <footer
      style={{ backgroundColor: 'var(--bg-surface)', borderTop: '1px solid var(--border-subtle)' }}
      className="mt-0"
    >
      <div className="container-site py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-3">
              <span
                className="text-2xl font-extrabold text-[#F0F0FF]"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                ApexNova
              </span>
            </Link>
            <p className="text-sm text-[#9898B0] leading-relaxed max-w-xs">
              Building AI for NJ/NYC businesses that actually works.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a
                href="https://instagram.com/apexnovaconsulting"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl flex items-center justify-center text-[#9898B0] hover:text-[#F0F0FF] transition-colors"
                style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)' }}
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://linkedin.com/company/apexnova-consulting"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl flex items-center justify-center text-[#9898B0] hover:text-[#F0F0FF] transition-colors"
                style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)' }}
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Industries */}
          <div>
            <p
              className="text-[10px] uppercase tracking-widest text-[#5A5A72] mb-4"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              Industries
            </p>
            <ul className="space-y-2.5">
              {[
                { label: 'Real Estate & Title', href: '/industries/real-estate' },
                { label: 'Medical Practices', href: '/industries/medical' },
                { label: 'Law Firms', href: '/industries/law-firms' },
                { label: 'Local Businesses', href: '/industries/smb' },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#9898B0] hover:text-[#F0F0FF] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p
              className="text-[10px] uppercase tracking-widest text-[#5A5A72] mb-4"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              Company
            </p>
            <ul className="space-y-2.5">
              {[
                { label: 'Services', href: '/services' },
                { label: 'About', href: '/about' },
                { label: 'Case Studies', href: '/case-studies' },
                { label: 'Contact', href: '/contact' },
                { label: 'Blog', href: '/blog' },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#9898B0] hover:text-[#F0F0FF] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p
              className="text-[10px] uppercase tracking-widest text-[#5A5A72] mb-4"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              Contact
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:info@apexnovaconsulting.com"
                  className="flex items-center gap-2.5 text-sm text-[#9898B0] hover:text-[#F0F0FF] transition-colors"
                >
                  <Mail size={13} className="flex-shrink-0 text-[#4F6EF7]" />
                  info@apexnovaconsulting.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+19733485008"
                  className="flex items-center gap-2.5 text-sm text-[#9898B0] hover:text-[#F0F0FF] transition-colors"
                >
                  <Phone size={13} className="flex-shrink-0 text-[#4F6EF7]" />
                  (973) 348-5008
                </a>
              </li>
              <li>
                <span className="flex items-start gap-2.5 text-sm text-[#9898B0]">
                  <MapPin size={13} className="flex-shrink-0 text-[#4F6EF7] mt-0.5" />
                  Lambertville, NJ — Serving the Tri-State Area
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid var(--border-subtle)' }}
        >
          <p className="text-xs text-[#5A5A72]">
            © 2026 ApexNova Consulting LLC · All rights reserved
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy-policy"
              className="text-xs text-[#5A5A72] hover:text-[#9898B0] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-xs text-[#5A5A72] hover:text-[#9898B0] transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/governance"
              className="text-xs text-[#5A5A72] hover:text-[#9898B0] transition-colors"
            >
              AI Governance
            </Link>
          </div>
        </div>
        <p className="text-center text-xs text-[#5A5A72] mt-3">
          AI Governance & compliance services available — <Link href="/governance" className="hover:text-[#9898B0] transition-colors underline">ask us about compliance</Link>.
        </p>
      </div>
    </footer>
  );
}
