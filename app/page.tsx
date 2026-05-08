import Link from 'next/link';
import { ArrowIcon, Footer, Kicker, PrimaryLink } from '@/components/Brand';
import { Nav } from '@/components/Nav';
import { SubstackCTA } from '@/components/SubstackCTA';
import { StorySuggest } from '@/components/StorySuggest';

export default function HomePage() {
  return (
    <>
      <Nav />

      {/* ── HERO ── */}
      <section className="relative w-full min-h-screen flex flex-col items-start justify-center px-8 md:px-16 overflow-hidden"
        style={{ background: '#16243F', paddingTop: '8rem', paddingBottom: '7rem' }}>

        {/* Archive cream strip — top edge (from S1Hook editorial frame) */}
        <div className="absolute top-0 left-0 right-0 pointer-events-none" aria-hidden="true"
          style={{ height: 14, background: '#FBF6EC', opacity: 0.12 }}/>

        {/* Ghost watermark "21" — bolder, more present */}
        <div className="absolute pointer-events-none select-none" aria-hidden="true"
          style={{
            top: '-20px',
            right: '-20px',
            fontFamily: 'Fraunces, Georgia, serif',
            fontWeight: 900,
            fontStyle: 'italic',
            fontSize: 'clamp(340px, 48vw, 600px)',
            color: '#FBF6EC',
            opacity: 0.05,
            lineHeight: 1,
            letterSpacing: '-0.04em',
          }}>
          21
        </div>

        {/* Ruled lines — horizontal grid */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, rgba(251,246,236,0.04) 0px, rgba(251,246,236,0.04) 1px, transparent 1px, transparent 40px)',
          }}/>

        {/* Signal accent — left edge */}
        <div className="absolute left-0 top-0 bottom-0 w-[3px]" style={{ background: '#E63329', opacity: 0.5 }}/>

        {/* Cream inner frame — right and bottom accents echoing the playbook card */}
        <div className="absolute right-0 top-0 bottom-0 pointer-events-none" aria-hidden="true"
          style={{ width: 1, background: 'rgba(251,246,236,0.08)' }}/>

        <div className="relative max-w-3xl">
          {/* Kicker */}
          <Kicker tone="archive" className="mb-8">
            Sports · Data · Analysis
          </Kicker>

          {/* Headline — "a" in signal red, from design playbook */}
          <h1 className="font-display font-black italic leading-none mb-10"
            style={{ fontSize: 'clamp(76px, 13vw, 130px)', color: '#FBF6EC', letterSpacing: '-0.03em', lineHeight: 0.88 }}>
            The<br/>M<span style={{ color: '#E63329' }}>a</span>rgin.
          </h1>

          {/* Rule from playbook: thin cream line + byline */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 32 }}>
            <div style={{ width: 56, height: 1, background: 'rgba(200,162,75,0.5)' }}/>
            <div className="font-caps text-[10px] font-semibold tracking-[0.2em] uppercase"
              style={{ color: 'rgba(251,246,236,0.35)' }}>
              by Sharon Akaka
            </div>
          </div>

          {/* Subheading */}
          <p className="font-caps text-[15px] font-normal max-w-md"
            style={{ color: 'rgba(251,246,236,0.55)', lineHeight: 1.85 }}>
            Numbers tell stories most people miss. We find the margin between
            what the table shows and what actually happened.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <PrimaryLink href="/articles/arsenal-2025">
              Read First Article
            </PrimaryLink>
            <a href="#subscribe" className="tm-button tm-button-outline">
              Get Notified
            </a>
          </div>
        </div>

        {/* Archive cream strip — bottom edge */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none" aria-hidden="true"
          style={{ height: 14, background: '#FBF6EC', opacity: 0.06 }}/>
      </section>

      {/* ── FEATURED ARTICLE ── */}
      <section className="py-20 px-8 md:px-16" style={{ background: '#F5EEDE' }}>
        <div className="max-w-4xl mx-auto">

          {/* Section label */}
          <div className="flex items-center gap-4 mb-12">
            <Kicker>
              Featured
            </Kicker>
            <div className="flex-1 rule-signal opacity-20"/>
          </div>

          {/* Article card */}
          <Link href="/articles/arsenal-2025" className="block group">
            <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-center">

              {/* Text — 3 cols */}
              <div className="md:col-span-3 order-2 md:order-1">
                <div className="font-caps text-[10px] font-semibold tracking-[0.22em] uppercase mb-4"
                  style={{ color: 'rgba(22,36,63,0.45)' }}>
                  Premier League · Arsenal · 2025
                </div>
                <h2 className="font-display font-black italic leading-none mb-6 transition-colors group-hover:text-signal"
                  style={{ fontSize: 'clamp(32px,6vw,52px)', color: '#16243F', letterSpacing: '-0.02em', lineHeight: 0.95 }}>
                  Why Is Arsenal Winning the Premier League Such a Big Deal?
                </h2>
                <div className="rule-gold w-16 mb-6 opacity-60"/>
                <p className="font-caps text-[14px] leading-relaxed mb-6"
                  style={{ color: 'rgba(22,36,63,0.6)', lineHeight: 1.75 }}>
                  Twenty-one years. Three runner-up finishes in three seasons.
                  A squad built on data, youth, and a tactical blueprint that finally
                  has the rest of the league working out how to stop it.
                  The numbers tell a story most people haven&apos;t seen yet.
                </p>
                <div className="inline-flex items-center gap-2 font-caps text-[11px] font-semibold tracking-[0.12em] uppercase transition-opacity group-hover:opacity-70"
                  style={{ color: '#E63329' }}>
                  Read the piece
                  <ArrowIcon />
                </div>
              </div>

              {/* Video preview — 2 cols */}
              <div className="md:col-span-2 order-1 md:order-2">
                <div className="video-portrait max-w-[200px] mx-auto md:max-w-none shadow-2xl"
                  style={{ background: '#16243F', border: '1px solid rgba(200,162,75,0.15)' }}>
                  {/* Placeholder — replace with <ArticleVideo src="/videos/s1-hook.mp4"> */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
                    <svg viewBox="0 0 96 96" width="40" height="40" className="mb-4 opacity-50">
                      <rect x="8"  y="62" width="11" height="18" rx="2" fill="#D8CBAD" opacity="0.4"/>
                      <rect x="24" y="50" width="11" height="30" rx="2" fill="#D8CBAD" opacity="0.5"/>
                      <rect x="40" y="38" width="11" height="42" rx="2" fill="#D8CBAD" opacity="0.65"/>
                      <rect x="56" y="54" width="11" height="26" rx="2" fill="#D8CBAD" opacity="0.5"/>
                      <rect x="72" y="26" width="11" height="54" rx="2" fill="#E63329"/>
                      <circle cx="77.5" cy="22" r="7" fill="#F5EEDE" stroke="#E63329" strokeWidth="2.5"/>
                      <circle cx="77.5" cy="22" r="2.5" fill="#E63329"/>
                    </svg>
                    <div className="font-display italic font-bold text-[18px] leading-snug" style={{ color: 'rgba(251,246,236,0.7)' }}>
                      Arsenal<br/>2025/26
                    </div>
                    <div className="font-caps text-[9px] tracking-[0.16em] uppercase mt-3" style={{ color: 'rgba(251,246,236,0.3)' }}>
                      Video reel
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </Link>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="py-20 px-8 md:px-16" style={{ background: '#16243F' }}>
        <div className="max-w-2xl mx-auto text-center">
          <Kicker tone="gold" className="mb-6">
            About
          </Kicker>
          <h3 className="font-display font-bold italic mb-6 leading-none"
            style={{ fontSize: 'clamp(28px,6vw,44px)', color: '#FBF6EC', letterSpacing: '-0.02em' }}>
            Sports is full of narratives.<br/>Most of them are wrong.
          </h3>
          <div className="rule-gold w-16 mx-auto mb-8 opacity-50"/>
          <p className="font-caps text-[14px] leading-relaxed" style={{ color: 'rgba(251,246,236,0.55)', lineHeight: 1.8 }}>
            The Margin starts with the data, builds the context, and finds the story
            that lives between the two. Each piece comes with its own animated data
            visualisations — built from scratch, driven by real numbers — so the
            argument moves as you read it.
          </p>
        </div>
      </section>

      {/* ── COMMUNITY: STORY SUGGESTIONS ── */}
      <StorySuggest />

      {/* ── SUBSCRIBE CTA ── */}
      <SubstackCTA variant="full" />

      {/* ── FOOTER ── */}
      <Footer />
    </>
  );
}
