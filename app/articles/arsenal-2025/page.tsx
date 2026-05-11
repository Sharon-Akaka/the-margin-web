import type { Metadata } from 'next';
import { Footer, Kicker } from '@/components/Brand';
import { Nav } from '@/components/Nav';
import { StatBlock, InlineStat } from '@/components/StatBlock';
import { SubstackCTA } from '@/components/SubstackCTA';
import { ARSENAL } from '@/lib/design';
import {
  DroughtCounter,
  PointsTimeline,
  WinRateRing,
  TacticsStats,
  AcademyChart,
} from '@/components/DataViz';

export const metadata: Metadata = {
  title: 'Why Is Arsenal Winning the Premier League Such a Big Deal?',
  description:
    'Twenty-one completed league seasons without a title. Three near-misses. A squad built on data and youth. The numbers behind why this Arsenal title would mean everything.',
  openGraph: {
    title: 'Why Is Arsenal Winning the Premier League Such a Big Deal? | The Margin',
    description:
      'The numbers behind Arsenal’s title drought, three near-misses, and the team Mikel Arteta has built.',
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
            Twenty-one completed league seasons without the title. Three runner-up finishes in three seasons. A squad built on
            data, youth, and a clear tactical plan that finally has the rest of the league
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
                The Margin · 2026
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
            sub="Twenty-one completed league seasons without the title"
            accent="signal"
          />

          <p style={{ color: 'rgba(22,36,63,0.8)', lineHeight: 1.85, fontSize: 17, marginBottom: 28 }}>
            In football, twenty-one completed titleless league seasons is not a drought. It&apos;s a generation. Children have been
            born, grown up, gone to university, and started their careers without ever seeing Arsenal
            lift the Premier League trophy. The Invincibles season, 38 games, 26 wins, 12 draws,
            zero defeats, 90 points, has become something between mythology and open wound.
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
            Three times second. Three different kinds of hurt.
          </h2>

          <div className="rule-signal w-10 mb-8 opacity-50"/>

          <p style={{ color: 'rgba(22,36,63,0.8)', lineHeight: 1.85, fontSize: 17, marginBottom: 28 }}>
            The story of modern Arsenal is not one of mediocrity. It&apos;s one of painful almosts.
            Since Mikel Arteta rebuilt the squad piece by piece, Arsenal have been consistently
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
              Then City went on a run. Arsenal&apos;s 84 points were a serious title total,
              but not enough against a side that closed like champions.
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
              They pushed City to the final day with 89 points, the second-highest
              total in Arsenal&apos;s history. City won with 91. The cruellest of margins.
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
              {ARSENAL.runnerUp2425.points}
            </div>
            <div className="font-display italic font-bold text-[22px]" style={{ color: '#16243F', lineHeight: 1.1 }}>
              points. Three times running.
            </div>
            <p className="font-caps text-[13px] leading-relaxed mt-3" style={{ color: 'rgba(22,36,63,0.6)', lineHeight: 1.7 }}>
              A third consecutive runner-up finish, this time behind Liverpool. Three years.
              Three times second. The patience of the supporters had been extraordinary
              and it was running out.
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
            Arsenal are a genuine title-winning team. Their expected-goals difference, which
            compares the quality of chances they create with the quality of chances they concede,
            has been among the best in the league.
            They have pressed higher, won back possession faster, and converted in more
            dangerous positions than almost any other side in the league.
          </p>

          <p style={{ color: 'rgba(22,36,63,0.8)', lineHeight: 1.85, fontSize: 17, marginBottom: 28 }}>
            The current table is the cleanest evidence: after {ARSENAL.currentRecord.played}
            matches, Arsenal sit on <InlineStat value={`${ARSENAL.currentPoints}`} label="points"/>,
            with a <InlineStat value={ARSENAL.goalDifference} label="goal difference"/> and
            two league games still to play.
          </p>

          <StatBlock
            stat={`${ARSENAL.currentPoints}`}
            label="Premier League points right now."
            sub={`${ARSENAL.currentRecord.won} wins · ${ARSENAL.currentRecord.drawn} draws · ${ARSENAL.currentRecord.lost} losses · ${ARSENAL.goalDifference} goal difference`}
            accent="signal"
          />

          <p style={{ color: 'rgba(22,36,63,0.8)', lineHeight: 1.85, fontSize: 17, marginBottom: 28 }}>
            What changed in 2025/26? Partly the shape of the race, with City leaving
            themselves too little room after dropped points. Partly maturity, with players
            like Saka and Martinelli entering their best years at exactly the same time.
            And partly the effect of a system that Arteta has been drilling
            into this squad since December 2019. This year, the table has caught up.
          </p>

          <p style={{ color: 'rgba(22,36,63,0.8)', lineHeight: 1.85, fontSize: 17, marginBottom: 28 }}>
            Viktor Gyökeres, signed to solve the clinical finishing problem Arteta never
            quite resolved, has given Arsenal a different target in the box in a
            system that values control over chaos. David Raya has posted
            <InlineStat value="9 clean sheets"
            label="in 13 Champions League matches"/>, a figure that reflects not just goalkeeping but the
            whole way Arsenal play: keep the ball, own the space, make shot-stopping
            less frequent.
          </p>

          <WinRateRing />

          {/* ── SECTION 4: THE MACHINE ── */}
          <h2 className="font-display font-bold italic mb-6"
            style={{ fontSize: 'clamp(26px,5vw,38px)', color: '#16243F', letterSpacing: '-0.015em', lineHeight: 1.05, marginTop: 48 }}>
            The Team Arteta Built
          </h2>

          <div className="rule-signal w-10 mb-8 opacity-50"/>

          <p style={{ color: 'rgba(22,36,63,0.8)', lineHeight: 1.85, fontSize: 17, marginBottom: 28 }}>
            When Arteta arrived in December 2019, the club was tenth in the Premier League,
            leaking goals and without a clear identity. The squad had talent in Aubameyang,
            Lacazette and Özil, but no structure. They were a collection of players, not a team.
          </p>

          <p style={{ color: 'rgba(22,36,63,0.8)', lineHeight: 1.85, fontSize: 17, marginBottom: 28 }}>
            What he built over the next six years is, by any metric, exceptional. A win rate
            around <InlineStat value="62%" label="wins"/> across all competitions. An FA Cup
            in his first season. A squad restructured entirely around the system, with
            a culture built on intensity and collective responsibility.
          </p>

          <p style={{ color: 'rgba(22,36,63,0.8)', lineHeight: 1.85, fontSize: 17, marginBottom: 28 }}>
            The tactical plan is built around control. Put simply, Arsenal spend long
            stretches keeping opponents near their own goal, then react quickly when
            possession is lost. Their press does not just win the ball. It forces the
            opponent to rush decisions and play from worse positions.
          </p>

          <p style={{ color: 'rgba(22,36,63,0.8)', lineHeight: 1.85, fontSize: 17, marginBottom: 28 }}>
            There is a dimension to this system that honest analysis cannot ignore. The slow
            restarts, the gamesmanship, and the crowded routines at corners and free-kicks
            are not accidents. They are used to break rhythm and collect small advantages.
            Depending on your tolerance for it, that is either clever game management or a risk. If
            referees start enforcing those crowded set-piece routines more strictly, a meaningful
            part of this advantage could disappear quickly.
          </p>

          <TacticsStats />

          {/* ── SECTION 5: THE GENERATION ── */}
          <h2 className="font-display font-bold italic mb-6"
            style={{ fontSize: 'clamp(26px,5vw,38px)', color: '#16243F', letterSpacing: '-0.015em', lineHeight: 1.05, marginTop: 48 }}>
            The Kids Who Grew Up Waiting
          </h2>

          <div className="rule-signal w-10 mb-8 opacity-50"/>

          <p style={{ color: 'rgba(22,36,63,0.8)', lineHeight: 1.85, fontSize: 17, marginBottom: 28 }}>
            Bukayo Saka signed his first Arsenal academy forms as an eight-year-old and
            has no real memory of the club winning the league. Gabriel Martinelli was a
            toddler in Brazil when Arsenal last won it, and arrived from Ituano as an
            18-year-old in 2019. The point is not that every player came through Hale End.
            It is that Arsenal&apos;s core has grown up in the years after the Invincibles.
          </p>

          <p style={{ color: 'rgba(22,36,63,0.8)', lineHeight: 1.85, fontSize: 17, marginBottom: 28 }}>
            That is why the academy matters here. Saka is no longer the academy kid with
            promise; he is one of the faces of the team. Ethan Nwaneri became the youngest
            player in Premier League history at 15 years and 181 days, then went out on loan
            in 2025/26 for the next stage of his development. Myles Lewis-Skelly, born in
            2006, came through Hale End too and earned first-team minutes without needing
            a loan first.
          </p>

          <p style={{ color: 'rgba(22,36,63,0.8)', lineHeight: 1.85, fontSize: 17, marginBottom: 28 }}>
            Max Dowman makes the point even sharper. Born on the final day of 2009,
            he made his Premier League debut against Leeds at 15 years and 235 days,
            then became the youngest player in Champions League history at 15 years
            and 308 days. By March 2026 he had gone one better: a stoppage-time goal
            against Everton made him the youngest goalscorer in Premier League history
            at 16 years and 73 days. That is not a full-season body of work yet. It is
            something more fragile and more exciting: proof that the next wave is already
            touching the first team.
          </p>

          <p style={{ color: 'rgba(22,36,63,0.8)', lineHeight: 1.85, fontSize: 17, marginBottom: 28 }}>
            The 3-0 win over Fulham on 2 May showed why the pathway matters. Lewis-Skelly started
            in midfield and looked at home in a title run-in. That does not mean every academy
            player becomes a starter. It means the route is visible again: train well, understand
            the system, and there is a real way into the first team.
          </p>

          <p style={{ color: 'rgba(22,36,63,0.8)', lineHeight: 1.85, fontSize: 17, marginBottom: 28 }}>
            That is the stronger claim. This is not just a nice story about kids getting
            chances. It is squad building. It gives Arsenal players who understand the club
            early, supporters who can see themselves in the team, and a cheaper way to add
            depth around expensive signings.
          </p>

          <div className="my-8 p-6" style={{ background: 'rgba(22,36,63,0.04)', borderTop: '1px solid rgba(22,36,63,0.1)', borderBottom: '1px solid rgba(22,36,63,0.1)' }}>
            <p className="font-display italic text-[20px] leading-snug"
              style={{ color: '#16243F', letterSpacing: '-0.01em', lineHeight: 1.45 }}>
              The wait has been so long that players born deep inside it are now part of
              the reason it could end.
            </p>
          </div>

          <AcademyChart />

          {/* ── SECTION 6: MY CALL ── */}
          <h2 className="font-display font-bold italic mb-6"
            style={{ fontSize: 'clamp(26px,5vw,38px)', color: '#16243F', letterSpacing: '-0.015em', lineHeight: 1.05, marginTop: 48 }}>
            My Call
          </h2>

          <div className="rule-signal w-10 mb-8 opacity-50"/>

          <p style={{ color: 'rgba(22,36,63,0.8)', lineHeight: 1.85, fontSize: 17, marginBottom: 28 }}>
            I think Arsenal win this league. Not because I want them to, and not because
            the feeling is good right now, but because the data has been pointing here for
            three years and this is finally the season where everything that was already
            true about this team gets confirmed by the table.
          </p>

          <p style={{ color: 'rgba(22,36,63,0.8)', lineHeight: 1.85, fontSize: 17, marginBottom: 28 }}>
            What actually feels different this season is not Arsenal. Arsenal have been this
            good for a while. What feels different is the margin for everyone else. City have
            left themselves too little road unless Arsenal collapse, and for the first time
            in years the table is finally saying what the underlying numbers have been saying
            all along.
          </p>

          <p style={{ color: 'rgba(22,36,63,0.8)', lineHeight: 1.85, fontSize: 17, marginBottom: 28 }}>
            Two things could still complicate it: stricter refereeing at corners and free-kicks,
            and the sheer psychological weight of a wait this long on players who have never
            been on the right side of it. The West Ham win made the route narrower and clearer,
            but it did not make the pressure disappear. I just think the data outweighs the risk.
          </p>

          <div className="my-8 p-6" style={{ background: 'rgba(22,36,63,0.04)', borderTop: '1px solid rgba(22,36,63,0.1)', borderBottom: '1px solid rgba(22,36,63,0.1)' }}>
            <p className="font-display italic text-[20px] leading-snug"
              style={{ color: '#16243F', letterSpacing: '-0.01em', lineHeight: 1.45 }}>
              For the first time since the drought started, the table is finally saying
              what the underlying numbers have been saying all along.
            </p>
          </div>

          {/* ── SECTION 7: THE CLOSER ── */}
          <h2 className="font-display font-bold italic mb-6"
            style={{ fontSize: 'clamp(26px,5vw,38px)', color: '#16243F', letterSpacing: '-0.015em', lineHeight: 1.05, marginTop: 48 }}>
            So Why Does It Matter So Much?
          </h2>

          <div className="rule-gold w-10 mb-8 opacity-60"/>

          <p style={{ color: 'rgba(22,36,63,0.8)', lineHeight: 1.85, fontSize: 17, marginBottom: 28 }}>
            Every club has a narrative of hurt. Arsenal&apos;s particular wound is the gap
            between expectation and reality, between what the data says they should be and
            what the trophy cabinet actually shows.
          </p>

          <p style={{ color: 'rgba(22,36,63,0.8)', lineHeight: 1.85, fontSize: 17, marginBottom: 28 }}>
            For three consecutive seasons, Arsenal&apos;s underlying numbers said contender.
            For three consecutive seasons, the final table said second.
            That gap, knowing you were good enough and watching the points fail to confirm it,
            is its own specific kind of suffering.
          </p>

          <p style={{ color: 'rgba(22,36,63,0.8)', lineHeight: 1.85, fontSize: 17, marginBottom: 28 }}>
            2025/26 feels different because the race around Arsenal has shifted.
            City have left themselves very little room. The squad is a year older, deeper, and more experienced.
            And the manager who built this team is arguably operating at the peak of his
            capabilities.
          </p>

          <p style={{ color: 'rgba(22,36,63,0.8)', lineHeight: 1.85, fontSize: 17, marginBottom: 28 }}>
            The models can tell you what is likely. They can frame the probability, name the
            variables, map the risk. What they cannot tell you is what it will feel like
            when the wait finally ends. That part you&apos;ll have to see for yourself.
          </p>


          {/* ── FINAL STAT ── */}
          <StatBlock
            stat="21"
            label="Completed league seasons without the title."
            sub="2004 to 2026 · The wait is almost over"
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
                { label: 'Premier League, official statistics and standings', href: 'https://www.premierleague.com/stats' },
                { label: 'FBref, Arsenal squad and match data', href: 'https://fbref.com/en/squads/18bb7c10/Arsenal-Stats' },
                { label: 'Opta / WhoScored, advanced player metrics', href: 'https://www.whoscored.com/Teams/13/Show/England-Arsenal' },
                { label: 'UEFA, Champions League results and player statistics', href: 'https://www.uefa.com/uefachampionsleague/' },
                { label: 'Arsenal.com, academy and player profiles', href: 'https://www.arsenal.com/academy' },
                { label: 'Premier League, Max Dowman youngest goalscorer record', href: 'https://www.premierleague.com/en/news/4613476/dowman-becomes-premier-leagues-youngest-ever-goalscorer' },
                { label: 'BBC Sport, Max Dowman Champions League age record', href: 'https://www.bbc.co.uk/sport/football/articles/c5yl4kdwgdno' },
                { label: 'Opta Analyst, West Ham 0-1 Arsenal match facts', href: 'https://theanalyst.com/articles/west-ham-vs-arsenal-stats-premier-league-05-2026' },
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
              Data visualisations built with CSS/SVG. Current table figures checked against public standings;
              editorial context is separated from audited accounts and model-based projections.
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
