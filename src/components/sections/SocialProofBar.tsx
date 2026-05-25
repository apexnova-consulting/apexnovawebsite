'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const verticals = [
  { label: 'Real Estate Teams', href: '/industries/real-estate', color: '#00D4AA' },
  { label: 'Medical Offices', href: '/industries/medical', color: '#3B82F6' },
  { label: 'Law Firms', href: '/industries/law-firms', color: '#8B5CF6' },
  { label: 'Local SMBs', href: '/industries/smb', color: '#F59E0B' },
];

export default function SocialProofBar() {
  return (
    <section style={{ backgroundColor: 'var(--bg-subtle)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container-site py-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#5A5A72] text-center sm:text-left" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
            Trusted by NJ &amp; NYC businesses ready to stop doing everything manually
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {verticals.map((v, i) => (
              <motion.div
                key={v.href}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
              >
                <Link
                  href={v.href}
                  className="industry-badge hover:opacity-100 transition-opacity"
                  style={{ color: v.color }}
                >
                  {v.label}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
