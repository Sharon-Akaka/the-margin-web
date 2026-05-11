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
  const [error, setError] = useState(false);
  const substackUrl = process.env.NEXT_PUBLIC_SUBSTACK_SUBSCRIBE_URL;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(false);

    if (!substackUrl) {
      setError(true);
      return;
    }

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
        {error && (
          <p className="font-caps text-[10px] tracking-[0.08em] uppercase" style={{ color: 'rgba(251,246,236,0.45)' }}>
            Newsletter signup is being connected.
          </p>
        )}
      </div>
    );
  }

  return (
    <section id="subscribe" className="px-8 md:px-16 overflow-hidden" style={{ background: '#101d31', paddingTop: 56, paddingBottom: 56 }}>
      <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_minmax(320px,480px)] gap-8 md:gap-10 items-end">
        <div className="flex-1">
          <Kicker className="mb-4">
            Newsletter
          </Kicker>

        <h2 className="font-display font-black italic leading-none mb-4"
          style={{ fontSize: 'clamp(30px,5vw,44px)', color: '#FBF6EC', letterSpacing: '-0.02em' }}>
          Numbers. Context. Stories that matter.
        </h2>

        <p className="font-caps text-[14px] font-normal leading-relaxed"
          style={{ color: 'rgba(251,246,236,0.58)', maxWidth: 460 }}>
          Get new data-led sports analysis when the newsletter launches.
        </p>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="tm-input flex-1 px-5 py-3.5 tracking-wider"
              style={{ minWidth: 0 }}
            />
            <button type="submit"
              className="tm-button tm-button-primary px-7 py-3.5 flex-shrink-0 justify-center">
              Subscribe
              <ArrowIcon />
            </button>
          </form>
        ) : (
          <div className="flex flex-col gap-3 md:min-w-[360px]">
            <div className="font-display font-bold italic text-[24px]" style={{ color: '#C8A24B' }}>
              You&apos;re on the list.
            </div>
            <div className="font-caps text-[12px] tracking-[0.1em] uppercase" style={{ color: 'rgba(251,246,236,0.5)' }}>
              We&apos;ll be in touch when The Margin launches on Substack.
            </div>
          </div>
        )}

        {error && (
          <p className="font-caps text-[11px]" style={{ color: 'rgba(251,246,236,0.45)', lineHeight: 1.7 }}>
            Newsletter signup is being connected. For now, use the social links or check back shortly.
          </p>
        )}
      </div>
    </section>
  );
}
