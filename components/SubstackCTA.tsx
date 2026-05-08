'use client';
import { useState } from 'react';
import { ArrowIcon, Kicker } from '@/components/Brand';

interface SubstackCTAProps {
  variant?: 'full' | 'compact';
}

/**
 * Email capture CTA — mirrors the EndCard Subscribe button style.
 * Set NEXT_PUBLIC_SUBSTACK_SUBSCRIBE_URL when the newsletter signup is live.
 */
export function SubstackCTA({ variant = 'full' }: SubstackCTAProps) {
  const [email, setEmail]     = useState('');
  const [submitted, setSubmitted] = useState(false);
  const substackUrl = process.env.NEXT_PUBLIC_SUBSTACK_SUBSCRIBE_URL;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (substackUrl) {
      const url = new URL(substackUrl);
      if (email) url.searchParams.set('email', email);
      window.open(url.toString(), '_blank', 'noopener,noreferrer');
    }
    setSubmitted(true);
  };

  if (variant === 'compact') {
    return (
      <div className="flex items-center gap-3">
        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="tm-input px-4 py-2 tracking-wider"
              style={{ minWidth: 200 }}
            />
            <button type="submit"
              className="tm-button tm-button-primary px-4 py-2 text-[11px]">
              Subscribe
            </button>
          </form>
        ) : (
          <p className="font-caps text-[12px] tracking-[0.08em] uppercase" style={{ color: '#C8A24B' }}>
            You&apos;re on the list.
          </p>
        )}
      </div>
    );
  }

  return (
    <section id="subscribe" className="py-24 px-8" style={{ background: '#2C1A0E' }}>
      <div className="max-w-xl mx-auto text-center">
        {/* Pin symbol */}
        <svg viewBox="0 0 22 110" width="22" height="110" className="mx-auto mb-8">
          <line x1="11" y1="24" x2="11" y2="108" stroke="#E63329" strokeWidth="3" strokeLinecap="round"/>
          <circle cx="11" cy="13" r="10" fill="rgba(245,238,222,0.08)" stroke="#E63329" strokeWidth="2.5"/>
          <circle cx="11" cy="13" r="3.5" fill="#E63329"/>
        </svg>

        {/* Gold rule */}
        <div className="rule-gold w-24 mx-auto mb-8"/>

        <Kicker className="mb-4">
          The Margin
        </Kicker>

        <h2 className="font-display font-black italic leading-none mb-4"
          style={{ fontSize: 'clamp(36px,8vw,56px)', color: '#FBF6EC', letterSpacing: '-0.02em' }}>
          Numbers.<br/>Context.<br/>Stories that matter.
        </h2>

        <p className="font-caps text-[14px] font-normal leading-relaxed mb-10"
          style={{ color: 'rgba(251,246,236,0.6)', maxWidth: 400, margin: '0 auto 40px' }}>
          Data-driven sports analysis. New pieces every week.
          Coming to Substack — be first when it launches.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="tm-input flex-1 px-5 py-3.5 tracking-wider"
            />
            <button type="submit"
              className="tm-button tm-button-primary px-7 py-3.5 flex-shrink-0">
              Subscribe
              <ArrowIcon />
            </button>
          </form>
        ) : (
          <div className="flex flex-col items-center gap-3">
            <div className="font-display font-bold italic text-[24px]" style={{ color: '#C8A24B' }}>
              You&apos;re on the list.
            </div>
            <div className="font-caps text-[12px] tracking-[0.1em] uppercase" style={{ color: 'rgba(251,246,236,0.5)' }}>
              We&apos;ll be in touch when The Margin launches on Substack.
            </div>
          </div>
        )}

        <p className="font-caps text-[10px] tracking-[0.08em] uppercase mt-6" style={{ color: 'rgba(251,246,236,0.3)' }}>
          No spam. Unsubscribe any time.
        </p>
      </div>
    </section>
  );
}
