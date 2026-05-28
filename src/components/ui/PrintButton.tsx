'use client';

import { Printer } from 'lucide-react';

export default function PrintButton({ label = 'Print', className }: { label?: string; className?: string }) {
  return (
    <button
      onClick={() => window.print()}
      className={className ?? 'btn-secondary text-xs py-1.5 px-3'}
    >
      <Printer size={12} />
      {label}
    </button>
  );
}
