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
        body: JSON.stringify({ suggestion, email, _subject: 'The Margin: story suggestion' }),
      });
      if (res.ok) {
        setSent(true);
      } else {
        // Fallback: open mailto link
        window.location.href = `mailto:hello@findthemargin.com?subject=Story%20suggestion%20for%20The%20Margin&body=${encodeURIComponent(suggestion)}`;
      }
    } catch {
      window.location.href = `mailto:hello@findthemargin.com?subject=Story%20suggestion%20for%20The%20Margin&body=${encodeURIComponent(suggestion)}`;
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="px-8 md:px-16" style={{ background: '#16243F', paddingTop: 72, paddingBottom: 76 }}>
      <div className="max-w-4xl mx-auto">

        {/* Kicker */}
        <Kicker tone="gold" className="mb-5">
          Suggest a story
        </Kicker>

        {/* Headline */}
        <h2 className="font-display font-black italic leading-none mb-5"
          style={{ fontSize: 'clamp(30px,6vw,46px)', color: '#FBF6EC', letterSpacing: '-0.02em', lineHeight: 0.98 }}>
          What should The Margin look into next?
        </h2>

        <div className="rule-gold w-14 mb-7 opacity-45"/>

        <p className="font-caps text-[14px] leading-relaxed mb-8 max-w-2xl"
          style={{ color: 'rgba(251,246,236,0.58)', lineHeight: 1.75 }}>
          Send a team, player, transfer, pattern, or stat that has never quite made
          sense. Good questions become future pieces.
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
              Thanks for the suggestion. I read everything that comes in.
              if it becomes an article you&apos;ll hear about it first via the newsletter.
            </p>
          </div>
        ) : (
          /* ── Form ── */
          <form onSubmit={handleSubmit} className="grid md:grid-cols-[1fr_300px] gap-5 md:gap-6">
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
                placeholder="e.g. Why do teams fade after half-time? Are younger squads better in title races? Which transfers changed a team most?"
                className="tm-input px-4 py-3 resize-none"
                style={{
                  lineHeight: 1.7,
                  minHeight: 148,
                }}
              />
            </div>

            <div className="flex flex-col justify-end gap-4">
              <div>
                <label className="font-caps text-[10px] font-semibold tracking-[0.18em] uppercase block mb-2"
                  style={{ color: 'rgba(251,246,236,0.45)' }}>
                  Email, optional
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="tm-input px-4 py-3"
                />
              </div>

              <button
                  type="submit"
                  disabled={loading || !suggestion.trim()}
                  className="tm-button tm-button-primary disabled:opacity-50 w-full justify-center"
                  style={{
                    cursor: suggestion.trim() ? 'pointer' : 'not-allowed',
                    border: 'none',
                  }}>
                  {loading ? 'Sending...' : 'Send suggestion'}
                  {!loading && <ArrowIcon />}
                </button>

              <span className="font-caps text-[10px]" style={{ color: 'rgba(251,246,236,0.34)', lineHeight: 1.6 }}>
                I read every suggestion. Add an email only if you want a reply.
              </span>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
