import type { Metadata } from 'next';
import { ExternalArrowIcon, Footer, Kicker, PrimaryLink } from '@/components/Brand';
import { Nav } from '@/components/Nav';

export const metadata: Metadata = {
  title: 'About',
  description: 'How a history degree, a product role at Arsenal, a software engineering background, and a genuine obsession with why things happen led to The Margin.',
};

// ── Social icon components (inline SVGs, no external deps) ─────────────────

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

function SubstackIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 5H2v3.5h20V5zM2 10.5V19l10-5.5 10 5.5v-8.5H2z"/>
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.27 8.27 0 0 0 4.84 1.56V6.78a4.85 4.85 0 0 1-1.07-.09z"/>
    </svg>
  );
}

const SOCIAL_LINKS = [
  {
    label: 'LinkedIn',
    handle: 'Sharon Akaka',
    href: 'https://linkedin.com/in/sharon-akaka',
    Icon: LinkedInIcon,
  },
  {
    label: 'Substack',
    handle: '@themargin',
    href: 'https://themargin.substack.com',
    Icon: SubstackIcon,
  },
  {
    label: 'Instagram',
    handle: '@themargin_',
    href: 'https://instagram.com/themargin_',
    Icon: InstagramIcon,
  },
  {
    label: 'TikTok',
    handle: '@themargin_',
    href: 'https://tiktok.com/@themargin_',
    Icon: TikTokIcon,
  },
];

const DISCIPLINES = [
  {
    n: '01',
    title: 'History',
    body: 'History taught me that data is never just data — it\'s evidence. Learning to read primary sources, question context, and separate cause from correlation turned out to be exactly the right training for sports analysis.',
  },
  {
    n: '02',
    title: 'Software Engineering & Product',
    body: 'I work in product at Arsenal — which means I sit at the intersection of football and technology every day, watching where data actually goes inside a top-flight club and what problems it genuinely solves. That insider view, combined with years writing code professionally, means I can build the analysis tools, the data visualisations, and this website from scratch. The engineering enables the journalism. The product instinct shapes what gets built.',
  },
  {
    n: '03',
    title: 'MA Digital Media Management',
    body: 'My masters gave me the toolkit to think seriously about how stories travel — editing, production, the mechanics of digital storytelling. If the writing is the argument, the reel is the evidence you can actually feel.',
  },
];

export default function AboutPage() {
  return (
    <>
      <Nav />

      {/* ── HERO ── */}
      <section style={{ background: '#16243F', paddingTop: '9rem', paddingBottom: '6rem' }}>
        <div className="px-8 md:px-16 max-w-3xl">

          <Kicker className="mb-8">
            About The Margin
          </Kicker>

          <h1 className="font-display font-black italic leading-none mb-8"
            style={{ fontSize: 'clamp(40px, 7vw, 72px)', color: '#FBF6EC', letterSpacing: '-0.025em', lineHeight: 0.92 }}>
            The data was<br/>always there.
          </h1>

          <div className="rule-gold w-16 mb-8" />

          <p className="font-caps text-[15px] max-w-lg"
            style={{ color: 'rgba(251,246,236,0.55)', lineHeight: 1.8 }}>
            The Margin is what happens when a history degree, a product role inside Arsenal,
            a software engineering background, an MA in Digital Media Management,
            and a genuine obsession with <em>why</em> things happen all end up in the same room.
          </p>
        </div>
      </section>

      {/* ── ORIGIN ── */}
      <section style={{ background: '#F5EEDE', paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div className="px-8 md:px-16 max-w-3xl mx-auto">

          <Kicker className="mb-10">
            Where it started
          </Kicker>

          <h2 className="font-display font-bold italic mb-8"
            style={{ fontSize: 'clamp(26px, 4vw, 36px)', color: '#16243F', letterSpacing: '-0.02em', lineHeight: 1.05 }}>
            I work in product at Arsenal.
          </h2>

          <div className="space-y-5 font-caps text-[15px]"
            style={{ color: 'rgba(22,36,63,0.7)', lineHeight: 1.85 }}>
            <p>
              Not as a player, obviously. But working inside one of the world&apos;s most
              scrutinised football clubs gives you a very particular education. You see
              how decisions are made, how narratives form, how the gap between what the
              public thinks is happening and what is actually happening can be enormous.
            </p>
            <p>
              Working in product also means I sit at the intersection of football and
              technology every day. Football is one of those rare industries where technology
              is still in its early stages of solving real problems — from performance analytics
              to fan experience to operational infrastructure. Being inside that process,
              seeing where the data actually goes and what questions it genuinely answers,
              has shaped how I think about sports analysis entirely.
            </p>
            <p>
              That gap between what the data says and what gets communicated publicly — that&apos;s the margin.
            </p>
            <p>
              I grew up watching football the way most people do: results, highlights, opinions.
              But the closer you get to the game, the more you realise the scoreline is just
              the surface. Underneath it is a system. Movements, shapes, decisions made in
              fractions of a second that ripple through careers, transfers, leagues,
              and communities. Football doesn&apos;t just happen to fans.
              It happens to cities. Economies. Generations.
            </p>
            <p>
              I wanted to understand why. And I wanted to show other people why too.
            </p>
          </div>
        </div>
      </section>

      {/* ── BACKGROUND ── */}
      <section style={{ background: '#16243F', paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div className="px-8 md:px-16 max-w-3xl mx-auto">

          <Kicker tone="gold" className="mb-10">
            The background
          </Kicker>

          {/* Numbered disciplines */}
          <div className="space-y-0">
            {DISCIPLINES.map(({ n, title, body }, i) => (
              <div key={n}
                className="flex gap-8 py-8"
                style={{ borderTop: i === 0 ? 'none' : '1px solid rgba(200,162,75,0.08)' }}>
                <div className="font-mono text-[11px] font-semibold mt-0.5 flex-shrink-0 w-6"
                  style={{ color: 'rgba(200,162,75,0.4)' }}>
                  {n}
                </div>
                <div>
                  <p className="font-caps text-[11px] font-semibold tracking-[0.16em] uppercase mb-3"
                    style={{ color: '#C8A24B' }}>
                    {title}
                  </p>
                  <p className="font-caps text-[14px]"
                    style={{ color: 'rgba(251,246,236,0.5)', lineHeight: 1.85 }}>
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Pullquote */}
          <div className="mt-10 pt-10" style={{ borderTop: '1px solid rgba(200,162,75,0.08)' }}>
            <blockquote className="border-l-2 pl-8" style={{ borderColor: '#E63329' }}>
              <p className="font-display font-bold italic mb-4"
                style={{ fontSize: 'clamp(18px, 3.5vw, 26px)', color: '#FBF6EC', letterSpacing: '-0.015em', lineHeight: 1.25 }}>
                &ldquo;It&apos;s incredible what story the data tells — if you&apos;re
                actually willing to look at it honestly.&rdquo;
              </p>
              <cite className="font-caps text-[10px] font-semibold tracking-[0.18em] uppercase not-italic"
                style={{ color: 'rgba(200,162,75,0.6)' }}>
                Sharon Akaka
              </cite>
            </blockquote>
          </div>
        </div>
      </section>

      {/* ── WHAT THE MARGIN IS ── */}
      <section style={{ background: '#F5EEDE', paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div className="px-8 md:px-16 max-w-3xl mx-auto">

          <Kicker className="mb-10">
            What The Margin is
          </Kicker>

          <h2 className="font-display font-bold italic mb-8"
            style={{ fontSize: 'clamp(26px, 4vw, 36px)', color: '#16243F', letterSpacing: '-0.02em', lineHeight: 1.05 }}>
            Sports is full of narratives.<br/>Most of them are wrong.
          </h2>

          <div className="space-y-5 font-caps text-[15px]"
            style={{ color: 'rgba(22,36,63,0.7)', lineHeight: 1.85 }}>
            <p>
              The dominant sports narrative is almost always emotional. A manager under
              pressure. A striker who&apos;s lost it. A club that&apos;s bought too much
              or spent too little. These stories exist because they&apos;re easy to tell
              and easy to feel. But they rarely explain what&apos;s actually happening.
            </p>
            <p>
              The Margin starts with a question — not &ldquo;what happened&rdquo; but
              &ldquo;why did it happen, and what does it mean.&rdquo; We find the data
              that illuminates it, build the context around it, and present the whole
              thing in a way that respects both the complexity of the subject and the
              intelligence of the reader.
            </p>
            <p>
              Every article comes paired with data visualisations — animated, built
              from scratch, driven by real numbers. Because some things are easier
              to understand when you can see them move. The charts aren&apos;t decoration.
              They&apos;re the argument.
            </p>
          </div>
        </div>
      </section>

      {/* ── FROM SHARON ── */}
      <section style={{ background: '#16243F', paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div className="px-8 md:px-16 max-w-3xl mx-auto">

          <Kicker tone="gold" className="mb-10">
            From Sharon
          </Kicker>

          <div className="space-y-5 font-caps text-[15px] mb-12"
            style={{ color: 'rgba(251,246,236,0.55)', lineHeight: 1.85 }}>
            <p>
              I spent years in software engineering building things for other people&apos;s
              visions. I loved the craft of it. But the itch was always there — to build
              something where the subject matter actually kept me up at night.
              Where the research felt like reading, not work.
            </p>
            <p>
              Coming back to football — specifically to the question of <em>why</em> it
              unfolds the way it does — felt like all my different interests finally
              agreeing with each other. The history instinct that asks what came before
              this. The engineering mindset that asks how we actually build this.
              The media skills that ask how we make people feel it, not just understand it.
            </p>
            <p style={{ color: 'rgba(251,246,236,0.8)' }}>
              The Margin is all of that. It&apos;s been a while since I built something
              for myself. It feels good.
            </p>
          </div>

          {/* Sign-off */}
          <div className="flex items-center gap-5 pt-8"
            style={{ borderTop: '1px solid rgba(200,162,75,0.1)' }}>
            <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: '#E63329' }}>
              <span className="font-display font-black italic text-[14px]" style={{ color: '#FBF6EC' }}>SA</span>
            </div>
            <div>
              <p className="font-display font-bold italic text-[15px]"
                style={{ color: '#FBF6EC', letterSpacing: '-0.015em', lineHeight: 1.1 }}>
                Sharon Akaka
              </p>
              <p className="font-caps text-[10px] tracking-[0.14em] uppercase mt-0.5"
                style={{ color: 'rgba(200,162,75,0.55)' }}>
                Founder, The Margin
              </p>
            </div>
            <div className="ml-auto">
              <PrimaryLink href="/articles/arsenal-2025" className="px-5 py-3 text-[11px]">
                Read the first piece
              </PrimaryLink>
            </div>
          </div>
        </div>
      </section>

      {/* ── FIND ME ── */}
      <section style={{ background: '#16243F', paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div className="px-8 md:px-16 max-w-3xl mx-auto">

          <Kicker tone="gold" className="mb-10">
            Find me
          </Kicker>

          <div className="grid sm:grid-cols-2 gap-0">
            {SOCIAL_LINKS.map(({ label, handle, href, Icon }, i) => (
              <a key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 py-5 transition-opacity hover:opacity-70 group"
                style={{
                  borderTop: i >= 2 ? '1px solid rgba(200,162,75,0.08)' : 'none',
                  borderBottom: '1px solid rgba(200,162,75,0.08)',
                  paddingRight: i % 2 === 0 ? '2rem' : '0',
                  paddingLeft: i % 2 === 1 ? '2rem' : '0',
                  borderLeft: i % 2 === 1 ? '1px solid rgba(200,162,75,0.08)' : 'none',
                }}>
                <div className="flex-shrink-0" style={{ color: 'rgba(200,162,75,0.5)' }}>
                  <Icon />
                </div>
                <div>
                  <p className="font-caps text-[11px] font-semibold tracking-[0.12em] uppercase"
                    style={{ color: '#FBF6EC' }}>
                    {label}
                  </p>
                  <p className="font-caps text-[11px] mt-0.5"
                    style={{ color: 'rgba(251,246,236,0.35)' }}>
                    {handle}
                  </p>
                </div>
                <span className="ml-auto" style={{ color: 'rgba(200,162,75,0.3)' }}><ExternalArrowIcon /></span>
              </a>
            ))}
          </div>

          <p className="font-caps text-[11px] mt-8"
            style={{ color: 'rgba(251,246,236,0.25)', lineHeight: 1.7 }}>
            Platforms are being set up — follow to be notified when The Margin goes live.
          </p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <Footer />
    </>
  );
}
