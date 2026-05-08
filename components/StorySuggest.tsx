'use client';
/**
 * StorySuggest — Community research suggestion form.
 *
 * Uses Formspree for static-site form handling (no backend needed).
 * Set NEXT_PUBLIC_FORMSPREE_ENDPOINT to a real Formspree endpoint:
 *   1. Create a free account at formspree.io
 *   2. Create a new form → copy the form ID
 *   3. Add https://formspree.io/f/YOUR_FORM_ID to your env
 */
import { useState } from 'react';
import { ArrowIcon, Kicker } from '@/components/Brand';

const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

export function StorySuggest() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [suggestion, setSuggestion] = useState('');
  const [email, setEmail] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!suggestion.trim()) return;
    setLoading(true);

    try {
      if (!FORMSPREE_ENDPOINT) throw new Error('Missing Formspree endpoint');

      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ suggestion, email, _subject: 'The Margin — story suggestion' }),
      });
      if (res.ok) {
        setSent(true);
      } else {
        // Fallback: open mailto link
        window.location.href = `mailto:sharon.akaka@gmail.com?subject=Story%20suggestion%20for%20The%20Margin&body=${encodeURIComponent(suggestion)}`;
      }
    } catch {
      window.location.href = `mailto:sharon.akaka@gmail.com?subject=Story%20suggestion%20for%20The%20Margin&body=${encodeURIComponent(suggestion)}`;
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="py-20 px-8 md:px-16" style={{ background: '#16243F' }}>
      <div className="max-w-2xl mx-auto">

        {/* Kicker */}
        <Kicker tone="gold" className="mb-6">
          Community
        </Kicker>

        {/* Headline */}
        <h2 className="font-display font-black italic leading-none mb-6"
          style={{ fontSize: 'clamp(32px,7vw,52px)', color: '#FBF6EC', letterSpacing: '-0.025em', lineHeight: 0.95 }}>
          What should I<br/>research next?
        </h2>

        <div className="rule-gold w-16 mb-8 opacity-50"/>

        <p className="font-caps text-[14px] leading-relaxed mb-10"
          style={{ color: 'rgba(251,246,236,0.55)', lineHeight: 1.8 }}>
          The Margin is data-driven, but the questions it chases should come from
          the people who care most about sports. Tell me what you want to understand —
          a team, a player, a transfer, a pattern, a stat that never made sense to you.
          I&apos;ll research it properly and write it up.
        </p>

        {sent ? (
          /* ── Thank you state ── */
          <div className="py-10 text-center">
            <div className="font-display font-black italic text-[32px] mb-3"
              style={{ color: '#E63329', letterSpacing: '-0.02em' }}>
              Got it.
            </div>
            <div className="rule-gold w-16 mx-auto mb-6 opacity-50"/>
            <p className="font-caps text-[13px]" style={{ color: 'rgba(251,246,236,0.55)', lineHeight: 1.7 }}>
              Thanks for the suggestion. I read everything that comes in —
              if it becomes an article you&apos;ll hear about it first via the newsletter.
            </p>
          </div>
        ) : (
          /* ── Form ── */
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="font-caps text-[10px] font-semibold tracking-[0.18em] uppercase block mb-2"
                style={{ color: 'rgba(251,246,236,0.45)' }}>
                Your suggestion
              </label>
              <textarea
                value={suggestion}
                onChange={e => setSuggestion(e.target.value)}
                rows={4}
                required
                placeholder="e.g. Why does pressing intensity drop in the second half? What do the numbers say about keeper decision-making? Is there a correlation between squad age and title chances..."
                className="tm-input px-4 py-3 resize-none"
                style={{
                  lineHeight: 1.7,
                }}
              />
            </div>

            <div>
              <label className="font-caps text-[10px] font-semibold tracking-[0.18em] uppercase block mb-2"
                style={{ color: 'rgba(251,246,236,0.45)' }}>
                Email (optional — if you want a reply)
              </label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="tm-input px-4 py-3"
              />
            </div>

            <div className="flex items-center gap-4 mt-2">
              <button
                type="submit"
                disabled={loading || !suggestion.trim()}
                className="tm-button tm-button-primary disabled:opacity-50"
                style={{
                  cursor: suggestion.trim() ? 'pointer' : 'not-allowed',
                  border: 'none',
                }}>
                {loading ? 'Sending...' : 'Send suggestion'}
                {!loading && <ArrowIcon />}
              </button>
              <span className="font-caps text-[10px]" style={{ color: 'rgba(251,246,236,0.3)' }}>
                All suggestions read personally
              </span>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
