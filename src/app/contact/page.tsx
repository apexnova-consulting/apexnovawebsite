'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ArrowRight, Mail, Phone, MapPin, Loader2, CheckCircle } from 'lucide-react';

type FormData = {
  name: string;
  email: string;
  business: string;
  industry: string;
  message: string;
};

function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus('success');
        reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="card p-10 text-center flex flex-col items-center gap-4">
        <CheckCircle size={40} className="text-[#E8A020]" />
        <h3
          className="text-[#F0F0FF] text-xl font-bold"
          style={{ fontFamily: 'Syne, sans-serif' }}
        >
          Message sent!
        </h3>
        <p className="text-[#9898B0] text-sm">
          We usually respond within 4 hours during business hours. We&apos;ll be in touch soon.
        </p>
        <button onClick={() => setStatus('idle')} className="btn-secondary text-sm py-2 px-4">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="card p-8 flex flex-col gap-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs text-[#9898B0] mb-1.5" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
            Your name *
          </label>
          <input
            {...register('name', { required: 'Name is required' })}
            className="input-field"
            placeholder="Jane Smith"
          />
          {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <label className="block text-xs text-[#9898B0] mb-1.5" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
            Email address *
          </label>
          <input
            {...register('email', {
              required: 'Email is required',
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email' },
            })}
            type="email"
            className="input-field"
            placeholder="jane@yourbusiness.com"
          />
          {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
        </div>
      </div>

      <div>
        <label className="block text-xs text-[#9898B0] mb-1.5" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
          Business name
        </label>
        <input
          {...register('business')}
          className="input-field"
          placeholder="Your business or firm name"
        />
      </div>

      <div>
        <label className="block text-xs text-[#9898B0] mb-1.5" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
          Industry
        </label>
        <select {...register('industry')} className="input-field">
          <option value="">Select your industry</option>
          <option value="real-estate">Real Estate & Title</option>
          <option value="medical">Medical Practice / Healthcare</option>
          <option value="legal">Law Firm</option>
          <option value="smb">Local Business / Other</option>
        </select>
      </div>

      <div>
        <label className="block text-xs text-[#9898B0] mb-1.5" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
          What&apos;s the biggest time-waster or bottleneck in your business right now? *
        </label>
        <textarea
          {...register('message', { required: 'Please tell us a bit about your business' })}
          className="input-field resize-none"
          rows={4}
          placeholder="e.g. We get leads through Zillow after hours and nobody responds until morning..."
        />
        {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn-primary justify-center mt-1"
      >
        {status === 'loading' ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <ArrowRight size={15} />
          </>
        )}
      </button>

      {status === 'error' && (
        <p className="text-red-400 text-sm text-center">
          Something went wrong. Please email us directly at{' '}
          <a href="mailto:info@apexnovaconsulting.com" className="underline">
            info@apexnovaconsulting.com
          </a>
        </p>
      )}
    </form>
  );
}

export default function ContactPage() {
  return (
    <main style={{ backgroundColor: 'var(--bg-base)' }}>
      <section className="pt-28 pb-24">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            {/* Left — info */}
            <div>
              <p className="section-label mb-4">{'// Get in touch'}</p>
              <h1
                className="text-[#F0F0FF] mb-5"
                style={{
                  fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)',
                  fontFamily: 'Syne, sans-serif',
                  fontWeight: 800,
                  lineHeight: 1.1,
                }}
              >
                Let&apos;s talk about your business.
              </h1>
              <p className="text-[#9898B0] mb-8" style={{ fontSize: '1.05rem', lineHeight: 1.7 }}>
                Book a free 30-minute AI Audit or send us a message. We&apos;ll get back to you within
                4 hours on business days.
              </p>

              {/* Contact details */}
              <div className="space-y-4 mb-8">
                {[
                  { icon: Mail, label: 'Email', value: 'info@apexnovaconsulting.com', href: 'mailto:info@apexnovaconsulting.com', color: '#2B6BE5' },
                  { icon: Phone, label: 'Phone', value: '(973) 348-5008', href: 'tel:+19733485008', color: '#E8A020' },
                  { icon: MapPin, label: 'Location', value: 'Lambertville, NJ — Serving the Tri-State Area', href: null, color: '#1A2E6E' },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-start gap-3">
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: `${item.color}12`, border: `1px solid ${item.color}25` }}
                      >
                        <Icon size={15} style={{ color: item.color }} />
                      </div>
                      <div>
                        <p className="text-[10px] text-[#5A5A72] uppercase tracking-widest" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                          {item.label}
                        </p>
                        {item.href ? (
                          <a href={item.href} className="text-sm text-[#9898B0] hover:text-[#F0F0FF] transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm text-[#9898B0]">{item.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* What happens on the call */}
              <div
                className="card p-6"
                style={{ background: 'rgba(43,107,229,0.05)', borderColor: 'rgba(43,107,229,0.2)' }}
              >
                <h3
                  className="text-[#F0F0FF] font-semibold mb-3"
                  style={{ fontFamily: 'Syne, sans-serif' }}
                >
                  What happens on the audit call?
                </h3>
                <ul className="space-y-2">
                  {[
                    'We learn how your business runs today',
                    'We identify your biggest time-wasters and missed opportunities',
                    'We show you 2–3 specific ways AI could help your business specifically',
                    'You get a written summary after the call — free, no strings',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-[#9898B0]">
                      <span className="text-[#2B6BE5] mt-0.5 flex-shrink-0">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-[#5A5A72] mt-4" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                  No pitch. No 90-minute sales presentation. Just useful information.
                </p>
              </div>
            </div>

            {/* Right — form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
