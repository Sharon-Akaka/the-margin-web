import type { Metadata } from 'next';
import { Footer, Kicker } from '@/components/Brand';
import { Nav } from '@/components/Nav';
import { StatBlock, InlineStat } from '@/components/StatBlock';
import { SubstackCTA } from '@/components/SubstackCTA';
import {
  DroughtCounter,
  PointsTimeline,
  WinRateRing,
  TacticsStats,
  RevenueChart,
  AcademyChart,
} from '@/components/DataViz';

export const metadata: Metadata = {
  title: 'Why Is Arsenal Winning the Premier League Such a Big Deal?',
  description:
    'Twenty-one years. Three near-misses. A squad built on data and youth. The numbers behind why this Arsenal title would mean everything.',
  openGraph: {
    title: 'Why Is Arsenal Winning the Premier League Such a Big Deal? | The Margin',
    description:
      'The numbers behind twenty-one years of hurt, three near-misses, and the machine Mikel Arteta has built.',
  },
};

export default function ArsenalArticle() {
  return (
    <>
      <Nav />

      {/* ── TITLE CARD ── */}
      <header className="relative overflow-hidden"
        style={{ background: '#E63329', paddingTop: '7rem', paddingBottom: '5rem' }}>
        {/* Textured overlay */}
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none" aria-hidden="true"
          style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.4) 2px, rgba(0,0,0,0.4) 3px)' }}/>

        <div className="relative max-w-3xl mx-auto px-8 md:px-16">
          {/* Kicker */}
          <Kicker tone="archive" className="mb-6">
            Premier League · Arsenal · Analysis
          </Kicker>

          {/* Feature stat */}
          <div className="font-display font-black italic leading-none mb-2"
            style={{ fontSize: 'clamp(88px,20vw,144px)', color: '#FBF6EC', opacity: 0.15, letterSpacing: '-0.04em', lineHeight: 0.85, userSelect: 'none' }}
            aria-hidden="true">
            2004
          </div>

          <h1 className="font-display font-black italic leading-none mt-[-0.5em] mb-8 relative z-10"
            style={{ fontSize: 'clamp(32px,7vw,60px)', color: '#FBF6EC', letterSpacing: '-0.022em', lineHeight: 0.95 }}>
            Why Is Arsenal Winning the Premier League Such a Big Deal?
          </h1>

          <div className="rule-gold w-20 mb-8 opacity-70"/>

          <p className="font-caps text-[15px] leading-relaxed max-w-xl"
            style={{ color: 'rgba(251,246,236,0.7)', lineHeight: 1.75 }}>
            Twenty-one years. Three runner-up finishes in three seasons. A squad built on
            data, youth, and a tactical blueprint that finally has the rest of the league
            working out how to stop it.
          </p>

          {/* Byline */}
          <div className="flex items-center gap-4 mt-10">
            <div className="w-8 h-8 rounded-full flex items-center justify-center font-display font-black italic text-[14px]"
              style={{ background: 'rgba(251,246,236,0.15)', color: '#FBF6EC' }}>
              SA
            </div>
            <div>
              <div className="font-caps text-[12px] font-semibold tracking-[0.06em]" style={{ color: '#FBF6EC' }}>
                Sharon Akaka
              </div>
              <div className="font-caps text-[10px] tracking-[0.1em] uppercase" style={{ color: 'rgba(251,246,236,0.5)' }}>
                The Margin · 2025
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ── ARTICLE BODY ── */}
      <article className="article-body">
        <div className="max-w-2xl mx-auto px-8 md:px-6 py-16">

          {/* ── SECTION 1: THE DROUGHT ── */}
          <p className="font-display font-bold italic text-[22px] leading-tight mb-6"
            style={{ color: '#16243F', lineHeight: 1.45 }}>
            Let&apos;s start with the number that makes Arsenal fans flinch every time they see it.
          </p>

          <StatBlock
            stat="2004"
            label="The last time Arsenal won the league."
            sub="Twenty-one years and counting"
            accent="signal"
          />

          <p style={{ color: 'rgba(22,36,63,0.8)', lineHeight: 1.85, fontSize: 17, marginBottom: 28 }}>
            In football, twenty-one years isn&apos;t a drought. It&apos;s a generation. Children have been
            born, grown up, gone to university, and started their careers without ever seeing Arsenal
            lift the Premier League trophy. The Invincibles season — 38 games, 26 wins, 12 draws,
            zero defeats, 90 points — has become something between mythology and open wound.
          </p>

          <p style={{ color: 'rgba(22,36,63,0.8)', lineHeight: 1.85, fontSize: 17, marginBottom: 28 }}>
            But here&apos;s what makes this Arsenal moment different from every false dawn since then:
            the data isn&apos;t just suggesting they&apos;re good. It&apos;s been screaming it for three years.
            The table just hadn&apos;t listened.
          </p>

          <DroughtCounter />

          {/* ── SECTION 2: THE NEAR MISSES ── */}
          <h2 className="font-display font-bold italic mb-6"
            style={{ fontSize: 'clamp(26px,5vw,38px)', color: '#16243F', letterSpacing: '-0.015em', lineHeight: 1.05, marginTop: 48 }}>
            Three times they led. Three times it slipped.
          </h2>

          <div className="rule-signal w-10 mb-8 opacity-50"/>

          <p style={{ color: 'rgba(22,36,63,0.8)', lineHeight: 1.85, fontSize: 17, marginBottom: 28 }}>
            The story of modern Arsenal is not one of mediocrity. It&apos;s one of agonising proximity.
            Since Mikel Arteta rebuilt the squad from the chassis up, Arsenal have been consistently
            among the two best teams in England. The table just refused to confirm it.
          </p>

          {/* 2022/23 */}
          <div className="my-10 px-6 py-6 relative"
            style={{ background: 'rgba(230,51,41,0.04)', borderLeft: '3px solid #E63329', borderRadius: '0 4px 4px 0' }}>
            <div className="font-caps text-[10px] font-semibold tracking-[0.22em] uppercase mb-3" style={{ color: '#E63329' }}>
              2022/23
            </div>
            <div className="font-display font-black italic leading-none mb-2"
              style={{ fontSize: 64, color: '#E63329', letterSpacing: '-0.03em', lineHeight: 0.88 }}>
              248
            </div>
            <div className="font-display italic font-bold text-[22px]" style={{ color: '#16243F', lineHeight: 1.1 }}>
              days spent at the top of the table.
            </div>
            <p className="font-caps text-[13px] leading-relaxed mt-3" style={{ color: 'rgba(22,36,63,0.6)', lineHeight: 1.7 }}>
              Arsenal led for most of the season. From August to April they looked like champions.
              Then City went on a run. Eight wins from their last ten. Arsenal&apos;s 84 points —
              a total that would have won nine of the previous fifteen Premier League seasons —
              finished second. The table said otherwise.
            </p>
          </div>

          {/* 2023/24 */}
          <div className="my-10 px-6 py-6 relative"
            style={{ background: 'rgba(22,36,63,0.04)', borderLeft: '3px solid #16243F', borderRadius: '0 4px 4px 0' }}>
            <div className="font-caps text-[10px] font-semibold tracking-[0.22em] uppercase mb-3" style={{ color: 'rgba(22,36,63,0.5)' }}>
              2023/24
            </div>
            <div className="font-display font-black italic leading-none mb-2"
              style={{ fontSize: 64, color: '#16243F', letterSpacing: '-0.03em', lineHeight: 0.88 }}>
              89
            </div>
            <div className="font-display italic font-bold text-[22px]" style={{ color: '#16243F', lineHeight: 1.1 }}>
              points. Still not enough.
            </div>
            <p className="font-caps text-[13px] leading-relaxed mt-3" style={{ color: 'rgba(22,36,63,0.6)', lineHeight: 1.7 }}>
              They got better. They went deeper into the season in contention.
              They pushed City to the final day with 89 points — the second-highest
              total in Arsenal&apos;s history. City won with 91. The cruelest of margins.
            </p>
          </div>

          {/* 2024/25 */}
          <div className="my-10 px-6 py-6 relative"
            style={{ background: 'rgba(230,51,41,0.04)', borderLeft: '3px solid #E63329', borderRadius: '0 4px 4px 0' }}>
            <div className="font-caps text-[10px] font-semibold tracking-[0.22em] uppercase mb-3" style={{ color: '#E63329' }}>
              2024/25
            </div>
            <div className="font-display font-black italic leading-none mb-2"
              style={{ fontSize: 64, color: '#E63329', letterSpacing: '-0.03em', lineHeight: 0.88 }}>
              2nd
            </div>
            <div className="font-display italic font-bold text-[22px]" style={{ color: '#16243F', lineHeight: 1.1 }}>
              Three times running.
            </div>
            <p className="font-caps text-[13px] leading-relaxed mt-3" style={{ color: 'rgba(22,36,63,0.6)', lineHeight: 1.7 }}>
              A third consecutive runner-up finish. The data showed a team good enough
              to win. The table said otherwise. Three years. Three times second.
              The patience of the supporters had been extraordinary — and it was running out.
            </p>
          </div>

          <PointsTimeline />

          {/* ── SECTION 3: THE DATA ── */}
          <h2 className="font-display font-bold italic mb-6"
            style={{ fontSize: 'clamp(26px,5vw,38px)', color: '#16243F', letterSpacing: '-0.015em', lineHeight: 1.05, marginTop: 48 }}>
            &ldquo;This isn&apos;t hope. This is data.&rdquo;
          </h2>

          <div className="rule-gold w-10 mb-8 opacity-60"/>

          <p style={{ color: 'rgba(22,36,63,0.8)', lineHeight: 1.85, fontSize: 17, marginBottom: 28 }}>
            The expected goals model has been telling the same story for three years:
            Arsenal are a genuine title-winning team. Their xG difference — the gap between
            the goals their chances deserved and the goals conceded — has been elite.
            They have pressed higher, won back possession faster, and converted in more
            dangerous positions than almost any other side in the league.
          </p>

          <p style={{ color: 'rgba(22,36,63,0.8)', lineHeight: 1.85, fontSize: 17, marginBottom: 28 }}>
            The 90% stat in the reel is real. When Arsenal reach 90 minutes with a lead,
            they win<InlineStat value="90%+" label="of the time"/>. Their defensive organisation
            under Arteta is not a system that holds on — it&apos;s one that stops teams from
            having chances in the first place.
          </p>

          <StatBlock
            stat="90%"
            label="Win rate when leading at 90 minutes."
            sub="Premier League 2024/25 — Arsenal"
            accent="signal"
          />

          <p style={{ color: 'rgba(22,36,63,0.8)', lineHeight: 1.85, fontSize: 17, marginBottom: 28 }}>
            What changed in 2025/26? Partly City — finally cycling through a transition
            that their squad depth had delayed for years. Partly maturity — players like
            Saka and Martinelli entering their peak years at exactly the same time.
            And partly just the accumulated weight of a system that Arteta has been
            drilling into this squad since December 2019. This year the forecasting models
            caught up: statistical projections currently put Arsenal&apos;s probability of
            securing the title at <InlineStat value="90%" label="likelihood"/> — the same
            number that defines their defensive record, wearing a different meaning.
          </p>

          <p style={{ color: 'rgba(22,36,63,0.8)', lineHeight: 1.85, fontSize: 17, marginBottom: 28 }}>
            The individual numbers this season are worth pausing on. Viktor Gyökeres —
            signed to solve the clinical finishing problem Arteta never quite resolved —
            has delivered <InlineStat value="12 goals" label="in the run-in alone"/> (20+ across
            all competitions), operating in a low-volume shot system that demands precision
            over volume. David Raya, behind him, has posted <InlineStat value="9 clean sheets"
            label="in 13 UCL matches"/>, a figure that reflects not just goalkeeping but the
            entire territorial strategy: keep the ball, own the space, make shot-stopping
            largely irrelevant. It is worth noting that this run-in came with Havertz limited
            to six Premier League starts, and both Ødegaard and Saka missing over half the
            season to injury. The machine held anyway.
          </p>

          <WinRateRing />

          {/* ── SECTION 4: THE MACHINE ── */}
          <h2 className="font-display font-bold italic mb-6"
            style={{ fontSize: 'clamp(26px,5vw,38px)', color: '#16243F', letterSpacing: '-0.015em', lineHeight: 1.05, marginTop: 48 }}>
            The Machine Arteta Built
          </h2>

          <div className="rule-signal w-10 mb-8 opacity-50"/>

          <p style={{ color: 'rgba(22,36,63,0.8)', lineHeight: 1.85, fontSize: 17, marginBottom: 28 }}>
            When Arteta arrived at Arsenal in December 2019, the club was eighth in the
            Premier League, leaking goals, without a clear identity, and still processing
            the slow-motion decline that had followed Wenger&apos;s final years. The squad had
            talent — Aubameyang, Lacazette, Özil — but no structure. They were a collection
            of players, not a team.
          </p>

          <p style={{ color: 'rgba(22,36,63,0.8)', lineHeight: 1.85, fontSize: 17, marginBottom: 28 }}>
            What Arteta built over the next six years is, by any metric, exceptional.
            His win rate across all competitions sits above<InlineStat value="62%" label="wins"/>.
            He won an FA Cup in his first full season. He restructured the squad entirely —
            moving on major earners who didn&apos;t fit the system, recruiting younger players
            who did, building a culture around intensity and collective responsibility.
          </p>

          <p style={{ color: 'rgba(22,36,63,0.8)', lineHeight: 1.85, fontSize: 17, marginBottom: 28 }}>
            The tactical blueprint has evolved from &quot;attacking spontaneity&quot; into what
            analysts now call <strong style={{ color: '#16243F' }}>&quot;structural certainty.&quot;</strong> The
            system is designed to industrialise play — minimising variance by prioritising
            control over individual improvisation. &quot;Field tilt&quot; (pinning opponents into deep
            defensive blocks) is combined with a defensive transition phase that may be
            the most sophisticated in European football: multiple players converging on the
            ball carrier within seconds of possession loss, closing passing lanes before
            they are even visible. The press doesn&apos;t just win the ball. It forces
            the opponent into hurried, low-value decisions.
          </p>

          <p style={{ color: 'rgba(22,36,63,0.8)', lineHeight: 1.85, fontSize: 17, marginBottom: 28 }}>
            There is a less celebrated dimension to the system that honest analysis can&apos;t ignore:
            the &quot;dark arts.&quot; Slow restarts, deliberate gamesmanship, manufactured chaos at
            set-pieces — these are not accidents. They are designed features, used to kill
            opponent rhythm and accumulate marginal advantages across 90 minutes. It is football
            at its most industrialised. It is also, depending on your tolerance for it, either
            admirable game management or a structural risk: PGMOL could yet tighten corner
            regulations, and if they do, a meaningful part of Arsenal&apos;s set-piece advantage evaporates.
          </p>

          <p style={{ color: 'rgba(22,36,63,0.8)', lineHeight: 1.85, fontSize: 17, marginBottom: 28 }}>
            The one genuine tension inside the system is whether &quot;structural certainty&quot; eventually
            domesticates the players it relies on. Ødegaard and Saka are elite improvisers
            asked to operate within precise lanes. For now, the balance works. The question
            for the next cycle is whether a system this controlled can stay ahead of European
            opponents who thrive when the game becomes genuinely unstructured.
          </p>

          <TacticsStats />

          {/* ── SECTION 5: THE MONEY ── */}
          <h2 className="font-display font-bold italic mb-6"
            style={{ fontSize: 'clamp(26px,5vw,38px)', color: '#16243F', letterSpacing: '-0.015em', lineHeight: 1.05, marginTop: 48 }}>
            The Financial Engine
          </h2>

          <div className="rule-gold w-10 mb-8 opacity-60"/>

          <p style={{ color: 'rgba(22,36,63,0.8)', lineHeight: 1.85, fontSize: 17, marginBottom: 28 }}>
            Title contention is expensive. You cannot build a squad that pushes City
            for 38 games without the commercial infrastructure to fund it.
            Arsenal&apos;s revenue this cycle has hit record levels: Champions League finalist
            earnings alone reach <InlineStat value="£122.8m" label="a record high"/>,
            Premier League distributions are projected at <InlineStat value="£170–175m"
            label="tier 1"/>, and total projected revenue for the 2025–26 fiscal year is
            tracking above <InlineStat value="£691m" label="strategic peak"/>.
            European progression is not just a trophy target. It is a financial multiplier
            that funds the next rebuild before this one is finished.
          </p>

          <StatBlock
            stat="£691m+"
            label="Projected revenue 2025–26 — Arsenal FC."
            sub="UCL £122.8m · PL distributions £170–175m · commercial"
            accent="gold"
          />

          <p style={{ color: 'rgba(22,36,63,0.8)', lineHeight: 1.85, fontSize: 17, marginBottom: 28 }}>
            The Declan Rice signing in 2023 — £105m — was proof of the new scale.
            Arsenal paid a record fee for a player they genuinely wanted, fit the system,
            and were willing to hold for. That&apos;s not reckless spending. That&apos;s strategic investment.
            And Rice has delivered every metric they needed: pressing intensity, ball retention,
            defensive presence, leadership.
          </p>

          <RevenueChart />

          {/* ── SECTION 6: THE GENERATION ── */}
          <h2 className="font-display font-bold italic mb-6"
            style={{ fontSize: 'clamp(26px,5vw,38px)', color: '#16243F', letterSpacing: '-0.015em', lineHeight: 1.05, marginTop: 48 }}>
            The Kids Who Grew Up Waiting
          </h2>

          <div className="rule-signal w-10 mb-8 opacity-50"/>

          <p style={{ color: 'rgba(22,36,63,0.8)', lineHeight: 1.85, fontSize: 17, marginBottom: 28 }}>
            The most emotionally loaded dimension of this Arsenal title push is the academy story.
            Bukayo Saka — born 2001, joined Arsenal age seven — has never seen his club win
            the league. Neither has Gabriel Martinelli, who joined from São Paulo&apos;s academy in 2019.
            These players have grown up inside the drought.
          </p>

          <p style={{ color: 'rgba(22,36,63,0.8)', lineHeight: 1.85, fontSize: 17, marginBottom: 28 }}>
            And then there is Myles Lewis-Skelly. Born 2006. A left back and versatile
            midfielder who came through the Arsenal academy and has not needed a loan
            to prove his first-team readiness — he earned it at home. The Fulham game
            this season was the moment most neutrals stopped questioning whether he
            belonged. He was physical, composed on the ball, and dominant in one-on-one
            situations throughout. Not a prospect being protected by the system.
            A starter. The contrast with most academy journeys is the point:
            the Arteta environment is producing players who are ready now,
            not players who need external development to finally arrive.
          </p>

          <p style={{ color: 'rgba(22,36,63,0.8)', lineHeight: 1.85, fontSize: 17, marginBottom: 28 }}>
            This season alone, Arsenal have handed first-team debuts to
            <InlineStat value="9 academy products" label="first-team debuts"/>. Not as sentiment. As deliberate
            investment in the next cycle — players whose entire football education has
            happened inside the same system, trained to the same standards, fluent in
            the same language before they&apos;ve kicked a competitive ball for the first team.
            The academy pathway isn&apos;t a nice story. It&apos;s a structural advantage.
          </p>

          <div className="my-8 p-6" style={{ background: 'rgba(22,36,63,0.04)', borderTop: '1px solid rgba(22,36,63,0.1)', borderBottom: '1px solid rgba(22,36,63,0.1)' }}>
            <blockquote className="font-display italic text-[20px] leading-snug mb-2"
              style={{ color: '#16243F', letterSpacing: '-0.01em', lineHeight: 1.45 }}>
              &ldquo;Kids born after the last title are now helping win the next one.
              That&apos;s not a coincidence. That&apos;s a system.&rdquo;
            </blockquote>
            <div className="font-caps text-[10px] tracking-[0.14em] uppercase" style={{ color: 'rgba(22,36,63,0.4)' }}>
              Sharon Akaka · The Margin
            </div>
          </div>

          <AcademyChart />

          {/* ── SECTION 7: THE CLOSER ── */}
          <h2 className="font-display font-bold italic mb-6"
            style={{ fontSize: 'clamp(26px,5vw,38px)', color: '#16243F', letterSpacing: '-0.015em', lineHeight: 1.05, marginTop: 48 }}>
            So Why Does It Matter So Much?
          </h2>

          <div className="rule-gold w-10 mb-8 opacity-60"/>

          <p style={{ color: 'rgba(22,36,63,0.8)', lineHeight: 1.85, fontSize: 17, marginBottom: 28 }}>
            Every club has a narrative of hurt. Liverpool had theirs before 2020.
            Spurs fans have lived inside theirs for decades. But Arsenal&apos;s particular
            wound is the gap between expectation and reality — between what the data
            says they should be and what the trophy cabinet actually shows.
          </p>

          <p style={{ color: 'rgba(22,36,63,0.8)', lineHeight: 1.85, fontSize: 17, marginBottom: 28 }}>
            For three consecutive seasons, Arsenal&apos;s underlying numbers said title-winning team.
            For three consecutive seasons, the final table said otherwise.
            That cognitive dissonance — knowing you were good enough, watching the points
            fail to confirm it — is its own specific kind of suffering.
          </p>

          <p style={{ color: 'rgba(22,36,63,0.8)', lineHeight: 1.85, fontSize: 17, marginBottom: 28 }}>
            2025/26 feels different because the structural obstacles have shifted.
            City are in genuine transition. Liverpool and Chelsea are strong but not yet
            at the consistency level Arsenal have demonstrated. The squad is a year older,
            deeper, more battle-hardened. And the manager who built this machine is arguably
            operating at the peak of his capabilities.
          </p>

          <p style={{ color: 'rgba(22,36,63,0.8)', lineHeight: 1.85, fontSize: 17, marginBottom: 28 }}>
            None of this means it is finished. The &quot;Brain Trust&quot; — Arteta, Edu, the sporting
            directorate — have built a machine. But machines have failure modes. Set-piece regulations
            could tighten. Injuries have already tested the depth once this season. The system&apos;s
            emphasis on control over chaos may prove limiting against the best European sides
            that actively want the game broken open. And there is always the question of whether
            the global brand ambition — the Adidas collaborations, the influencer partnerships,
            the &quot;cultural brand&quot; pivot — eventually pulls the club away from the local
            supporters who are its original centre of gravity.
          </p>

          <p style={{ color: 'rgba(22,36,63,0.8)', lineHeight: 1.85, fontSize: 17, marginBottom: 28 }}>
            The models can tell you what is likely. They can frame the probability, name the
            variables, map the risk. What they cannot tell you is what it will feel like
            when the wait finally ends. That part you&apos;ll have to see for yourself.
          </p>


          {/* ── FINAL STAT ── */}
          <StatBlock
            stat="21"
            label="Years since the last title."
            sub="2004 – 2025 · The wait is almost over"
            accent="signal"
          />

          {/* ── ARTICLE FOOTER ── */}
          <div className="mt-16 pt-8" style={{ borderTop: '1px solid rgba(22,36,63,0.12)' }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="rule-gold flex-1 opacity-50"/>
              <div className="font-caps text-[10px] font-medium tracking-[0.16em] uppercase" style={{ color: 'rgba(22,36,63,0.4)' }}>
                Sources
              </div>
              <div className="rule-gold flex-1 opacity-50"/>
            </div>

            <ul className="space-y-2">
              {[
                { label: 'Premier League — Official statistics & standings', href: 'https://www.premierleague.com/stats' },
                { label: 'FBref — Arsenal squad & match data', href: 'https://fbref.com/en/squads/18bb7c10/Arsenal-Stats' },
                { label: 'Opta / WhoScored — Advanced player metrics', href: 'https://www.whoscored.com/Teams/13/Show/England-Arsenal' },
                { label: 'UEFA — Champions League results & earnings', href: 'https://www.uefa.com/uefachampionsleague/' },
                { label: 'Deloitte Football Money League — Club revenue rankings', href: 'https://www.deloitte.com/uk/en/services/financial-advisory/analysis/deloitte-football-money-league.html' },
                { label: 'Swiss Ramble — Arsenal financial analysis', href: 'https://swissramble.blogspot.com' },
              ].map(({ label, href }) => (
                <li key={href} className="flex items-start gap-3">
                  <span className="mt-1.5 flex-shrink-0 w-1 h-1 rounded-full" style={{ background: '#C8A24B' }}/>
                  <a href={href} target="_blank" rel="noopener noreferrer"
                    className="font-caps text-[12px] leading-relaxed transition-colors hover:underline"
                    style={{ color: 'rgba(22,36,63,0.55)', lineHeight: 1.6 }}>
                    {label}
                    <span className="ml-1.5 opacity-40">↗</span>
                  </a>
                </li>
              ))}
            </ul>

            <p className="font-caps text-[11px] mt-6 pt-4"
              style={{ color: 'rgba(22,36,63,0.35)', lineHeight: 1.7, borderTop: '1px solid rgba(22,36,63,0.07)' }}>
              Data visualizations built with CSS/SVG — all figures sourced from the references above.
              Written analysis by Sharon Akaka · The Margin · 2026.
            </p>
          </div>

        </div>
      </article>

      {/* ── SUBSCRIBE ── */}
      <SubstackCTA variant="full" />

      {/* ── FOOTER ── */}
      <Footer />
    </>
  );
}
