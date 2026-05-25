import Link from 'next/link';
import { ArrowRight, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <main
      style={{ backgroundColor: 'var(--bg-base)' }}
      className="min-h-screen flex items-center justify-center"
    >
      <div className="container-site text-center py-20">
        <p
          className="text-8xl font-black mb-6 gradient-text"
          style={{ fontFamily: 'Syne, sans-serif', lineHeight: 1 }}
        >
          404
        </p>
        <h1
          className="text-[#F0F0FF] text-3xl font-bold mb-4"
          style={{ fontFamily: 'Syne, sans-serif' }}
        >
          This page doesn&apos;t exist.
        </h1>
        <p className="text-[#9898B0] mb-8 max-w-sm mx-auto">
          But your next AI tool does. Let&apos;s build it together.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="btn-primary">
            <Home size={15} />
            Go Home
          </Link>
          <Link href="/contact" className="btn-secondary">
            Book a Free AI Audit
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </main>
  );
}
