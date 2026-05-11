import Link from 'next/link';
import { ArrowIcon, Footer, Kicker, PrimaryLink } from '@/components/Brand';
import { FeaturedArticleViz } from '@/components/FeaturedArticleViz';
import { Nav } from '@/components/Nav';
import { SubstackCTA } from '@/components/SubstackCTA';
import { StorySuggest } from '@/components/StorySuggest';

export default function HomePage() {
  return (
    <>
      <Nav />

      {/* ── HERO ── */}
      <section className="relative w-full flex flex-col items-start justify-start px-8 md:px-16 overflow-hidden"
        style={{ background: '#16243F', minHeight: '720px', paddingTop: '8.5rem', paddingBottom: '5rem' }}>

        <div className="relative max-w-3xl">
          {/* Kicker */}
          <Kicker tone="archive" className="mb-8">
            Sports · Data · Analysis
          </Kicker>

          {/* Headline — "a" in signal red, from design playbook */}
          <h1 className="font-display font-black italic leading-none mb-10"
            style={{ fontSize: 'clamp(64px, 10vw, 108px)', color: '#FBF6EC', letterSpacing: '-0.025em', lineHeight: 0.9 }}>
            The<br/>M<span style={{ color: '#E63329' }}>a</span>rgin.
          </h1>

          {/* Rule from playbook: thin cream line + byline */}
          <div className="font-caps text-[10px] font-semibold tracking-[0.2em] uppercase"
            style={{ color: 'rgba(251,246,236,0.35)', marginBottom: 32 }}>
            by Sharon Akaka
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
          <Link href="/articles/arsenal-2025" className="grid md:grid-cols-5 gap-8 md:gap-12 items-center group">

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
                  Twenty-one completed league seasons without the title. Three runner-up finishes in three seasons.
                  A squad built on data, youth, and a clear tactical plan that finally
                  has the rest of the league working out how to stop it.
                  The numbers tell a story most people haven&apos;t seen yet.
                </p>
                <div
                  className="inline-flex items-center gap-2 font-caps text-[11px] font-semibold tracking-[0.12em] uppercase transition-opacity group-hover:opacity-70"
                  style={{ color: '#E63329' }}>
                  Read the piece
                  <ArrowIcon />
                </div>
              </div>

              {/* Animated preview — 2 cols */}
              <div className="md:col-span-2 order-1 md:order-2">
                <FeaturedArticleViz />
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
            The table tells you what happened.<br/>The margin explains why.
          </h3>
          <div className="rule-gold w-16 mx-auto mb-8 opacity-50"/>
          <p className="font-caps text-[14px] leading-relaxed" style={{ color: 'rgba(251,246,236,0.55)', lineHeight: 1.8 }}>
            The Margin starts with the numbers, adds the context, and turns the argument
            into visual stories you can follow as you read.
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
