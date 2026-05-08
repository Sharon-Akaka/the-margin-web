import type { Metadata } from 'next';
import { ExternalArrowIcon, Footer, Kicker, PrimaryLink } from '@/components/Brand';
import { Nav } from '@/components/Nav';

export const metadata: Metadata = {
  title: 'About',
  description: 'How a history degree, a product role at Arsenal, a software engineering background, and a genuine obsession with why things happen led to The Margin.',
};

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

function EmailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <polyline points="2,4 12,13 22,4"/>
    </svg>
  );
}

const SOCIAL_LINKS = [
  { label: 'Email',     handle: 'hello@findthemargin.com', href: 'mailto:hello@findthemargin.com',        Icon: EmailIcon     },
  { label: 'LinkedIn',  handle: 'Sharon Akaka',            href: 'https://linkedin.com/in/sharon-akaka', Icon: LinkedInIcon  },
  { label: 'Substack',  handle: '@themargin',              href: 'https://themargin.substack.com',        Icon: SubstackIcon  },
  { label: 'Instagram', handle: '@themargin_',             href: 'https://instagram.com/themargin_',      Icon: InstagramIcon },
  { label: 'TikTok',    handle: '@themargin_',             href: 'https://tiktok.com/@themargin_',        Icon: TikTokIcon    },
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
    body: 'I work in product at Arsenal — sitting at the intersection of football and technology every day. That insider view, combined with years writing code professionally, means I can build the analysis tools, the data visualisations, and this website from scratch. The engineering enables the journalism.',
  },
  {
    n: '03',
    title: 'MA Digital Media Management',
    body: 'My masters gave me the toolkit to think seriously about how stories travel — editing, production, the mechanics of digital storytelling. If the writing is the argument, the reel is the evidence you can actually feel.',
  },
];

const FORMULA = [
  {
    step: '01',
    label: 'The Data',
    desc: 'A number, a pattern, a result that doesn\'t add up. Something in the data that the standard narrative hasn\'t explained.',
  },
  {
    step: '02',
    label: 'The Context',
    desc: 'History, tactics, economics. What was happening around the data — why it means what it means, and what people got wrong.',
  },
  {
    step: '03',
    label: 'The Story',
    desc: 'The argument, rendered visually. Animated data built from scratch. The conclusion that moves as you read it.',
  },
];

export default function AboutPage() {
  return (
    <>
      <Nav />

      {/* ── HERO ── */}
      <section className="relative w-full flex flex-col overflow-hidden"
        style={{ background: '#16243F', minHeight: '100vh', paddingTop: '8rem' }}>

        {/* Ruled lines */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
          style={{ backgroundImage: 'repeating-linear-gradient(0deg, rgba(251,246,236,0.04) 0px, rgba(251,246,236,0.04) 1px, transparent 1px, transparent 40px)' }}/>

        {/* Signal left bar */}
        <div className="absolute left-0 top-0 bottom-0 w-[3px]" style={{ background: '#E63329', opacity: 0.5 }}/>

        {/* Ghost watermark */}
        <div className="absolute pointer-events-none select-none" aria-hidden="true"
          style={{
            top: '-60px', right: '-30px',
            fontFamily: 'Fraunces, Georgia, serif',
            fontWeight: 900, fontStyle: 'italic',
            fontSize: 'clamp(220px, 36vw, 480px)',
            color: '#FBF6EC', opacity: 0.04,
            lineHeight: 1, letterSpacing: '-0.04em',
          }}>
          WHY
        </div>

        {/* Headline area */}
        <div className="relative flex-1 flex flex-col justify-center px-8 md:px-16 max-w-4xl"
          style={{ paddingBottom: '3rem' }}>

          <Kicker className="mb-8">About The Margin</Kicker>

          <h1 className="font-display font-black italic leading-none"
            style={{ fontSize: 'clamp(56px, 10vw, 112px)', color: '#FBF6EC', letterSpacing: '-0.025em', lineHeight: 0.92, marginBottom: 34 }}>
            The data<br/>was always<br/>there.
          </h1>

          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 34 }}>
            <div style={{ width: 56, height: 1, background: 'rgba(200,162,75,0.5)' }}/>
            <div className="font-caps text-[10px] font-semibold tracking-[0.2em] uppercase"
              style={{ color: 'rgba(251,246,236,0.35)' }}>
              by Sharon Akaka
            </div>
          </div>

          <p className="font-caps text-[15px] max-w-lg"
            style={{ color: 'rgba(251,246,236,0.55)', lineHeight: 1.8 }}>
            The Margin is what happens when a history degree, a product role inside Arsenal,
            a software engineering background, an MA in Digital Media Management,
            and a genuine obsession with <em>why</em> things happen all end up in the same room.
          </p>
        </div>

        {/* Credentials strip — anchored to the bottom of the hero */}
        <div className="relative px-8 md:px-16"
          style={{ borderTop: '1px solid rgba(200,162,75,0.15)' }}>
          <div className="grid grid-cols-2 md:grid-cols-4">
            {[
              { label: 'History',     sub: 'BA (Hons)'       },
              { label: 'Arsenal',     sub: 'Product Role'    },
              { label: 'Engineering', sub: 'Software'        },
              { label: 'Media',       sub: 'MA Digital'      },
            ].map(({ label, sub }, i) => (
              <div key={label}
                style={{
                  padding: '34px 21px 34px 0',
                  paddingLeft: i > 0 ? 21 : 0,
                  borderLeft: i > 0 ? '1px solid rgba(200,162,75,0.1)' : 'none',
                }}>
                <div className="font-caps font-semibold tracking-[0.22em] uppercase"
                  style={{ fontSize: 9, color: 'rgba(200,162,75,0.5)', marginBottom: 5 }}>
                  {sub}
                </div>
                <div className="font-display font-black italic"
                  style={{ fontSize: 'clamp(18px, 2.5vw, 26px)', color: '#FBF6EC', letterSpacing: '-0.02em', lineHeight: 1 }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ORIGIN ── */}
      <section style={{ background: '#F5EEDE', paddingTop: 89, paddingBottom: 89 }}>
        <div className="px-8 md:px-16 max-w-3xl mx-auto">

          {/* Section header with extending rule */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 21, marginBottom: 55 }}>
            <Kicker>Where it started</Kicker>
            <div style={{ flex: 1, height: 1, background: '#D8CBAD' }}/>
          </div>

          <h2 className="font-display font-bold italic"
            style={{ fontSize: 'clamp(30px, 4.5vw, 48px)', color: '#16243F', letterSpacing: '-0.02em', lineHeight: 1.0, marginBottom: 34 }}>
            I work in product<br/>at Arsenal.
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
          </div>

          {/* Pull statement */}
          <div style={{ margin: '55px 0', borderLeft: '3px solid #E63329', paddingLeft: 34 }}>
            <p className="font-display font-bold italic"
              style={{ fontSize: 'clamp(22px, 3.5vw, 32px)', color: '#16243F', letterSpacing: '-0.015em', lineHeight: 1.2 }}>
              That gap between what the data says and what gets communicated publicly —
              that&apos;s the margin.
            </p>
          </div>

          <div className="space-y-5 font-caps text-[15px]"
            style={{ color: 'rgba(22,36,63,0.7)', lineHeight: 1.85 }}>
            <p>
              I grew up watching football the way most people do: results, highlights, opinions.
              But the closer you get to the game, the more you realise the scoreline is just
              the surface. Underneath it is a system. Movements, shapes, decisions made in
              fractions of a second that ripple through careers, transfers, leagues,
              and communities.
            </p>
            <p>
              I wanted to understand why. And I wanted to show other people why too.
            </p>
          </div>
        </div>
      </section>

      {/* ── BACKGROUND ── */}
      <section style={{ background: '#16243F', paddingTop: 89, paddingBottom: 89 }}>
        <div className="px-8 md:px-16 max-w-3xl mx-auto">

          <div style={{ display: 'flex', alignItems: 'center', gap: 21, marginBottom: 55 }}>
            <Kicker tone="gold">The background</Kicker>
            <div style={{ flex: 1, height: 1, background: 'rgba(200,162,75,0.15)' }}/>
          </div>

          {DISCIPLINES.map(({ n, title, body }, i) => (
            <div key={n} className="relative"
              style={{
                paddingTop: 55,
                paddingBottom: 55,
                borderTop: i === 0 ? 'none' : '1px solid rgba(200,162,75,0.08)',
              }}>

              {/* Large ghost number */}
              <div className="absolute right-0 top-8 font-mono font-semibold select-none pointer-events-none"
                aria-hidden="true"
                style={{
                  fontSize: 'clamp(80px, 14vw, 144px)',
                  color: '#FBF6EC', opacity: 0.04,
                  lineHeight: 1, letterSpacing: '-0.06em',
                }}>
                {n}
              </div>

              <div className="relative">
                {/* Signal accent bar */}
                <div style={{ width: 34, height: 2, background: '#E63329', marginBottom: 21 }}/>

                <p className="font-caps font-semibold tracking-[0.22em] uppercase"
                  style={{ fontSize: 10, color: '#C8A24B', marginBottom: 13 }}>
                  {n}
                </p>
                <h3 className="font-display font-black italic"
                  style={{ fontSize: 'clamp(28px, 4vw, 44px)', color: '#FBF6EC', letterSpacing: '-0.02em', lineHeight: 0.95, marginBottom: 21 }}>
                  {title}
                </h3>
                <p className="font-caps text-[14px]"
                  style={{ color: 'rgba(251,246,236,0.5)', lineHeight: 1.85, maxWidth: '62ch' }}>
                  {body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── THE FORMULA ── */}
      <section style={{ background: '#F5EEDE', paddingTop: 89, paddingBottom: 89 }}>
        <div className="px-8 md:px-16 max-w-3xl mx-auto">

          <div style={{ display: 'flex', alignItems: 'center', gap: 21, marginBottom: 55 }}>
            <Kicker>The formula</Kicker>
            <div style={{ flex: 1, height: 1, background: '#D8CBAD' }}/>
          </div>

          <h2 className="font-display font-bold italic"
            style={{ fontSize: 'clamp(28px, 4.5vw, 44px)', color: '#16243F', letterSpacing: '-0.02em', lineHeight: 1.0, marginBottom: 55 }}>
            Every piece starts<br/>with a question.
          </h2>

          <div className="grid md:grid-cols-3">
            {FORMULA.map(({ step, label, desc }, i) => (
              <div key={step}
                style={{
                  paddingTop: 34,
                  paddingBottom: 34,
                  paddingRight: i < 2 ? 34 : 0,
                  paddingLeft: i > 0 ? 34 : 0,
                  borderLeft: i > 0 ? '1px solid #D8CBAD' : 'none',
                }}>
                <div className="font-mono font-semibold tracking-[0.1em] uppercase"
                  style={{ fontSize: 11, color: '#E63329', marginBottom: 13 }}>
                  {step}
                </div>
                <h3 className="font-display font-black italic"
                  style={{ fontSize: 34, color: '#16243F', letterSpacing: '-0.02em', lineHeight: 0.95, marginBottom: 13 }}>
                  {label}
                </h3>
                <p className="font-caps text-[13px]"
                  style={{ color: 'rgba(22,36,63,0.6)', lineHeight: 1.8 }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PULLQUOTE ── */}
      <section style={{ background: '#16243F', paddingTop: 89, paddingBottom: 89 }}>
        <div className="px-8 md:px-16 max-w-3xl mx-auto">
          <blockquote style={{ borderLeft: '4px solid #E63329', paddingLeft: 34 }}>
            <p className="font-display font-black italic"
              style={{ fontSize: 'clamp(26px, 4.5vw, 48px)', color: '#FBF6EC', letterSpacing: '-0.02em', lineHeight: 1.05, marginBottom: 21 }}>
              &ldquo;It&apos;s incredible what story the data tells — if you&apos;re
              actually willing to look at it honestly.&rdquo;
            </p>
            <cite className="font-caps font-semibold tracking-[0.18em] uppercase not-italic"
              style={{ fontSize: 10, color: 'rgba(200,162,75,0.6)' }}>
              Sharon Akaka — Founder, The Margin
            </cite>
          </blockquote>
        </div>
      </section>

      {/* ── FROM SHARON ── */}
      <section style={{ background: '#F5EEDE', paddingTop: 89, paddingBottom: 89 }}>
        <div className="px-8 md:px-16 max-w-3xl mx-auto">

          <div style={{ display: 'flex', alignItems: 'center', gap: 21, marginBottom: 55 }}>
            <Kicker>From Sharon</Kicker>
            <div style={{ flex: 1, height: 1, background: '#D8CBAD' }}/>
          </div>

          <div className="space-y-5 font-caps text-[15px]"
            style={{ color: 'rgba(22,36,63,0.7)', lineHeight: 1.85, marginBottom: 55 }}>
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
            <p style={{ color: 'rgba(22,36,63,0.9)' }}>
              The Margin is all of that. It&apos;s been a while since I built something
              for myself. It feels good.
            </p>
          </div>

          {/* Sign-off */}
          <div className="flex items-center gap-5"
            style={{ borderTop: '1px solid #D8CBAD', paddingTop: 34 }}>
            <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: '#E63329' }}>
              <span className="font-display font-black italic text-[14px]" style={{ color: '#FBF6EC' }}>SA</span>
            </div>
            <div>
              <p className="font-display font-bold italic"
                style={{ fontSize: 16, color: '#16243F', letterSpacing: '-0.015em', lineHeight: 1.1 }}>
                Sharon Akaka
              </p>
              <p className="font-caps tracking-[0.14em] uppercase"
                style={{ fontSize: 10, color: 'rgba(200,162,75,0.7)', marginTop: 2 }}>
                Founder, The Margin
              </p>
            </div>
            <div className="ml-auto">
              <PrimaryLink href="/articles/arsenal-2025">
                Read the first piece
              </PrimaryLink>
            </div>
          </div>
        </div>
      </section>

      {/* ── FIND ME ── */}
      <section style={{ background: '#16243F', paddingTop: 89, paddingBottom: 89 }}>
        <div className="px-8 md:px-16 max-w-3xl mx-auto">

          <div style={{ display: 'flex', alignItems: 'center', gap: 21, marginBottom: 55 }}>
            <Kicker tone="gold">Find me</Kicker>
            <div style={{ flex: 1, height: 1, background: 'rgba(200,162,75,0.15)' }}/>
          </div>

          <div className="grid sm:grid-cols-2 gap-0">
            {SOCIAL_LINKS.map(({ label, handle, href, Icon }, i) => (
              <a key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 transition-opacity hover:opacity-70"
                style={{
                  padding: '21px 0',
                  borderTop: i >= 2 ? '1px solid rgba(200,162,75,0.08)' : 'none',
                  borderBottom: '1px solid rgba(200,162,75,0.08)',
                  paddingRight: i % 2 === 0 ? 34 : 0,
                  paddingLeft: i % 2 === 1 ? 34 : 0,
                  borderLeft: i % 2 === 1 ? '1px solid rgba(200,162,75,0.08)' : 'none',
                }}>
                <div style={{ color: 'rgba(200,162,75,0.5)', flexShrink: 0 }}>
                  <Icon />
                </div>
                <div>
                  <p className="font-caps font-semibold tracking-[0.12em] uppercase"
                    style={{ fontSize: 11, color: '#FBF6EC' }}>
                    {label}
                  </p>
                  <p className="font-caps"
                    style={{ fontSize: 11, color: 'rgba(251,246,236,0.35)', marginTop: 2 }}>
                    {handle}
                  </p>
                </div>
                <span className="ml-auto" style={{ color: 'rgba(200,162,75,0.3)' }}>
                  <ExternalArrowIcon />
                </span>
              </a>
            ))}
          </div>

          <p className="font-caps"
            style={{ fontSize: 11, color: 'rgba(251,246,236,0.25)', lineHeight: 1.7, marginTop: 34 }}>
            Platforms are being set up — follow to be notified when The Margin goes live.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
