import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'StreamForge — Get Real Viewers & Grow on Twitch, Kick & YouTube',
  description: 'StreamForge is the active viewer network helping streamers increase visibility, improve engagement, and grow organically. Average Twitch Affiliate in 14 days. Join 5,800+ streamers.',
  openGraph: {
    title: 'StreamForge — Get Real Viewers & Grow on Twitch, Kick & YouTube',
    description: 'Active viewer network for serious streamers. Real engagement. Organic growth. No bots.',
    url: 'https://streamforge.gg',
  },
}

const stats = [
  { n: '5,800+', l: 'Active Members' },
  { n: '14 days', l: 'Avg to Affiliate' },
  { n: '3×', l: 'Viewer Boost' },
  { n: '98%', l: 'Satisfaction Rate' },
]

const problems = [
  { icon: '😔', t: 'Zero discovery', d: 'Platforms only recommend streams that already have viewers — a cycle that kills growth before it starts.' },
  { icon: '🤖', t: 'Bots get you banned', d: 'Fake viewer services tank engagement rates and Twitch detects them — setting your channel back further.' },
  { icon: '😩', t: 'Streaming alone is demoralising', d: 'Talking to an empty chat night after night destroys the passion you started with.' },
  { icon: '💸', t: 'Promoters waste money', d: 'One-time shoutouts get you ghost followers who never watch. Stats stay flat.' },
]

const solutions = [
  { t: 'Real viewers who actually watch', d: 'Every member is a verified real streamer supporting others — genuine engagement, not inflated numbers.' },
  { t: 'Consistent visibility every stream', d: 'Active groups join your stream consistently, creating the engagement signals platforms use to recommend you.' },
  { t: 'Momentum that compounds', d: 'Real engagement → algorithm boost → organic discovery → more followers. It builds on itself.' },
  { t: 'Safe, long-term growth', d: 'Built for channel health, not shortcuts. No violations, no bans — genuine community growth.' },
]

const howItWorks = [
  { n: '01', t: 'Apply & Join', d: 'Submit your application. Approved within 24 hours. Payment details sent via email — no automatic charges.' },
  { n: '02', t: 'Get Placed in Active Groups', d: 'Matched into live engagement groups based on your category, schedule and platform.' },
  { n: '03', t: 'Real Viewers Join Your Stream', d: 'Network members join, watch and chat — creating the momentum that triggers organic discovery.' },
  { n: '04', t: 'Track & Scale', d: 'Monitor growth in your analytics dashboard. Upgrade your plan as your channel scales.' },
]

const results = [
  { before: '3', after: '47', unit: 'viewers', period: 'after 30 days', quote: 'I was about to quit streaming. Now I have regulars who show up every stream.', name: 'Marcus R.', plat: 'Twitch · FPS', img: 'https://i.pravatar.cc/150?img=3' },
  { before: '0', after: '11d', unit: '', period: 'to Twitch Affiliate', quote: 'Eleven days. I had tried for 7 months alone. The community changed everything.', name: 'Aaliyah B.', plat: 'Twitch · IRL', img: 'https://i.pravatar.cc/150?img=44' },
  { before: '$0', after: '$800', unit: '', period: 'first brand deal in 3 months', quote: "Never had to cold DM anyone. The opportunity came through the network.", name: 'Sophie C.', plat: 'Kick · Variety', img: 'https://i.pravatar.cc/150?img=47' },
]

const trustPillars = [
  { icon: '🛡️', t: 'Safe for Every Platform', b: 'No bots, no view-injection, no automation. Your channel is never at risk.', proof: '0 members banned following our guidelines' },
  { icon: '👥', t: '100% Real Streamers', b: 'Every person in the network is a verified real streamer who watches and chats.', proof: '5,800+ verified human members' },
  { icon: '📈', t: 'Algorithm-Friendly', b: 'Real engagement signals are exactly what Twitch, Kick and YouTube use to recommend you.', proof: '94% see follower growth in week 1' },
  { icon: '🔒', t: 'Private & Vetted', b: 'Every member pays to be here — which means everyone is committed to mutual growth.', proof: 'Application and approval required' },
]

const trustBadges = ['✓ No bots or fake traffic', '✓ Safe for Twitch TOS', '✓ Safe for Kick guidelines', '✓ Real viewers only', '✓ No automation', '✓ Cancel anytime']

const faqs = [
  { q: 'Is StreamForge safe for my Twitch channel?', a: 'Yes. StreamForge uses real human engagement — no bots, no view injection, no automation. Every viewer is a real streamer from the network. This is fully compliant with Twitch, Kick and YouTube guidelines.' },
  { q: 'Are these real viewers?', a: 'Absolutely. Every member of StreamForge is a real, verified streamer. They watch and engage with your stream because they receive the same support in return. This is a community of real creators, not software.' },
  { q: 'How fast can I see results?', a: 'Most members see increased viewer counts within their first 1-3 streams. Our average member achieves Twitch Affiliate status in 14 days. Some achieve it in as few as 9 days.' },
  { q: 'What platforms does StreamForge support?', a: 'StreamForge supports Twitch, Kick, YouTube and TikTok. Many members grow on multiple platforms simultaneously using the same network.' },
  { q: 'How does payment work?', a: 'Apply first. After approval we send payment details via email. There are no automatic charges — you only pay after being accepted. Plans start at $55/month and can be cancelled anytime.' },
]

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center justify-center text-center px-5 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="animate-fade-up inline-flex items-center gap-2 glass glass-gold text-[#e8a83e] text-xs font-bold px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-green-500 live-dot" />
            Real Viewer Network · Twitch · Kick · YouTube · TikTok
          </div>

          <h1 className="animate-fade-up-1 font-extrabold tracking-tight leading-[1.08] mb-4 text-4xl sm:text-5xl lg:text-6xl">
            <span className="gradient-text">Get Real Viewers on Your Stream</span><br />
            <span className="text-[#f0ece4]">Grow Without Bots or Fake Traffic</span>
          </h1>

          <p className="animate-fade-up-2 text-[#9b9580] text-base sm:text-lg max-w-2xl mx-auto mb-6 leading-relaxed">
            StreamForge connects you with an active network of real streamers. Increase visibility, attract engaged viewers, and help your stream get discovered — on every platform.
          </p>

          {/* Promise pills */}
          <div className="animate-fade-up-2 flex flex-wrap justify-center gap-2 mb-8">
            {['✓ No bots or fake traffic', '✓ Real viewer engagement', '✓ Safe for Twitch & Kick', '✓ Results in days, not months'].map(p => (
              <span key={p} className="text-xs font-semibold text-green-400 bg-green-500/10 border border-green-500/20 rounded-full px-3 py-1">{p}</span>
            ))}
          </div>

          <div className="animate-fade-up-3 flex flex-col sm:flex-row gap-3 justify-center mb-14">
            <Link href="/pricing" className="btn-gold px-8 py-3.5 rounded-xl text-base no-underline inline-flex items-center justify-center gap-2">
              🚀 Start Growing
            </Link>
            <Link href="#proof" className="btn-outline-gold px-8 py-3.5 rounded-xl text-base no-underline inline-flex items-center justify-center gap-2">
              📊 View Live Results
            </Link>
          </div>

          {/* Stats */}
          <div className="animate-fade-up-4 flex flex-wrap justify-center gap-8">
            {stats.map(s => (
              <div key={s.l} className="text-center">
                <div className="text-2xl font-extrabold gradient-text-gold">{s.n}</div>
                <div className="text-xs text-[#504c44] mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className="border-y border-[rgba(232,168,62,.15)] bg-[rgba(232,168,62,.03)] overflow-hidden h-9 flex items-center">
        <div className="ticker-inner flex gap-16 whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <span key={i} className="flex gap-16">
              {['📈 +94% follower growth rate', '⭐ Affiliate in 14 days average', '🔥 5,800+ active members', '👁 3× average viewer boost', '🏆 7,000+ daily site visitors', '✅ 98% member satisfaction'].map(t => (
                <span key={t} className="text-xs text-[#9b9580]" dangerouslySetInnerHTML={{ __html: t.replace(/(\+\d+%|[\d,]+\+?|14 days|3×|98%|7,000\+)/, '<strong class="text-[#e8a83e]">$1</strong>') }} />
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* PROBLEM / SOLUTION */}
      <section className="py-20 px-5 border-b border-white/[.07]" style={{ background: 'linear-gradient(180deg,rgba(124,58,237,.04),transparent 60%)' }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="section-tag mb-3">The Problem</div>
            <h2 className="text-3xl font-extrabold tracking-tight leading-tight mb-6 text-[#f0ece4]">Why Most Streamers Stay Stuck at 0 Viewers</h2>
            <div className="flex flex-col gap-4">
              {problems.map(p => (
                <div key={p.t} className="flex gap-3 items-start p-4 rounded-xl bg-white/[.03] border border-white/[.08] card-hover">
                  <span className="text-2xl flex-shrink-0 mt-0.5">{p.icon}</span>
                  <div>
                    <div className="text-sm font-bold text-[#f0ece4] mb-1">{p.t}</div>
                    <div className="text-xs text-[#9b9580] leading-relaxed">{p.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="section-tag mb-3" style={{ background: 'rgba(22,163,74,.1)', borderColor: 'rgba(22,163,74,.25)', color: '#22c55e' }}>The StreamForge Solution</div>
            <h2 className="text-3xl font-extrabold tracking-tight leading-tight mb-6 text-[#f0ece4]">A Network That <span className="gradient-text-gold">Actually Works</span></h2>
            <div className="flex flex-col gap-4">
              {solutions.map(s => (
                <div key={s.t} className="flex gap-3 items-start p-4 rounded-xl bg-white/[.03] border border-white/[.08] card-hover">
                  <div className="w-5 h-5 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center text-green-400 text-xs font-black flex-shrink-0 mt-0.5">✓</div>
                  <div>
                    <div className="text-sm font-bold text-[#f0ece4] mb-1">{s.t}</div>
                    <div className="text-xs text-[#9b9580] leading-relaxed">{s.d}</div>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/pricing" className="btn-gold inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm no-underline mt-6">Start Growing Today →</Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="section-tag">How It Works</div>
            <h2 className="text-3xl font-extrabold tracking-tight mt-2 text-[#f0ece4]">Four Steps to Real Growth</h2>
            <p className="text-[#9b9580] mt-2 max-w-xl mx-auto text-sm">No complicated setup. No confusing dashboards. Just join, get matched, and start growing.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {howItWorks.map(h => (
              <div key={h.n} className="p-5 rounded-2xl bg-white/[.03] border border-white/[.08] card-hover text-center">
                <div className="w-10 h-10 rounded-full mx-auto mb-4 flex items-center justify-center text-sm font-black text-[#0a0806]" style={{ background: 'linear-gradient(135deg,#a06820,#e8a83e)', boxShadow: '0 0 18px rgba(232,168,62,.3)' }}>{h.n}</div>
                <div className="text-sm font-bold text-[#f0ece4] mb-2">{h.t}</div>
                <div className="text-xs text-[#9b9580] leading-relaxed">{h.d}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="#proof" className="btn-outline-gold px-6 py-2.5 rounded-xl text-sm no-underline inline-flex items-center gap-2">📊 See Real Results →</Link>
          </div>
        </div>
      </section>

      {/* PROOF / RESULTS */}
      <section id="proof" className="py-20 px-5 border-y border-white/[.07]" style={{ background: 'linear-gradient(180deg,rgba(124,58,237,.04),transparent)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="section-tag">Real Results</div>
            <h2 className="text-3xl font-extrabold tracking-tight mt-2 text-[#f0ece4]">What Streamers Actually Achieve</h2>
            <p className="text-[#9b9580] mt-2 text-sm">Numbers from real StreamForge members — not projections</p>
          </div>

          {/* Dashboard mockup */}
          <div className="rounded-2xl overflow-hidden border border-[rgba(232,168,62,.2)] mb-10" style={{ background: 'linear-gradient(145deg,rgba(14,12,28,.98),rgba(7,7,26,1))', boxShadow: '0 0 60px rgba(124,58,237,.12)' }}>
            <div className="flex items-center gap-3 px-4 py-2.5 border-b border-white/[.06] bg-white/[.03]">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <span className="w-3 h-3 rounded-full bg-[#28c840]" />
              </div>
              <span className="flex-1 text-center text-xs text-[#9b9580] font-semibold">⚡ StreamForge Member Dashboard</span>
              <span className="flex items-center gap-1 text-xs font-bold text-green-400">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 live-dot" /> LIVE
              </span>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {[['847', 'Active Members Online', '↑ 12 joined today'], ['3×', 'Avg Viewer Increase', '↑ vs before joining'], ['14d', 'Avg to Affiliate', '↑ 312 achieved'], ['98%', 'Satisfaction Rate', '↑ from surveys']].map(([n, l, t]) => (
                  <div key={l} className="bg-white/[.03] border border-white/[.07] rounded-xl p-4 text-center hover:border-[rgba(232,168,62,.25)] transition-colors">
                    <div className="text-2xl font-extrabold text-[#e8a83e] leading-none">{n}</div>
                    <div className="text-[10px] text-[#504c44] uppercase tracking-wide mt-1 mb-1">{l}</div>
                    <div className="text-[10px] text-green-400 font-semibold">{t}</div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-3">
                {[['Follower Growth Rate', 94, 'bg-gradient-to-r from-[#a06820] to-[#e8a83e]'], ['Avg Viewer Increase', 87, 'bg-gradient-to-r from-[#0891b2] to-[#67e8f9]'], ['Chat Engagement', 78, 'bg-gradient-to-r from-[#16a34a] to-[#4ade80]'], ['Affiliate Conversion', 91, 'bg-gradient-to-r from-[#a06820] to-[#e8a83e]']].map(([label, pct]) => (
                  <div key={label as string} className="flex items-center gap-4">
                    <span className="text-xs text-[#9b9580] w-40 flex-shrink-0">{label as string}</span>
                    <div className="flex-1 h-2 bg-white/[.06] rounded-full overflow-hidden">
                      <div className="h-full rounded-full bg-gradient-to-r from-[#a06820] to-[#e8a83e]" style={{ width: `${pct}%` }} />
                    </div>
                    <span className="text-xs font-bold text-[#e8a83e] w-10 text-right">+{pct}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Result cards */}
          <div className="grid md:grid-cols-3 gap-5 mb-10">
            {results.map(r => (
              <div key={r.name} className="p-5 rounded-2xl bg-white/[.03] border border-white/[.08] card-hover">
                <div className="flex items-center gap-4 pb-4 mb-4 border-b border-white/[.07]">
                  <div className="text-center flex-1">
                    <div className="text-2xl font-extrabold text-[#9b9580]">{r.before}</div>
                    <div className="text-[10px] text-[#504c44] mt-1">before</div>
                  </div>
                  <div className="text-lg font-black text-[#e8a83e]">→</div>
                  <div className="text-center flex-1">
                    <div className="text-2xl font-extrabold text-[#e8a83e]">{r.after}</div>
                    <div className="text-[10px] text-[#504c44] mt-1">{r.period}</div>
                  </div>
                </div>
                <p className="text-xs text-[#9b9580] italic leading-relaxed mb-4">"{r.quote}"</p>
                <div className="flex items-center gap-2">
                  <img src={r.img} alt={r.name} className="w-8 h-8 rounded-full border border-[rgba(232,168,62,.25)] object-cover" />
                  <div>
                    <div className="text-xs font-bold text-[#f0ece4]">{r.name}</div>
                    <div className="text-[10px] text-[#504c44]">{r.plat}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/pricing" className="btn-gold px-8 py-3.5 rounded-xl text-base no-underline inline-flex items-center gap-2">Get These Results →</Link>
            <p className="text-[10px] text-[#504c44] mt-3">Results vary. These are real member outcomes, not guarantees.</p>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="py-20 px-5 border-b border-white/[.07]" style={{ background: 'linear-gradient(180deg,rgba(22,163,74,.03),transparent 70%)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="section-tag">Why Streamers Trust Us</div>
            <h2 className="text-3xl font-extrabold tracking-tight mt-2 text-[#f0ece4]">Built for Long-Term Growth. Not Shortcuts.</h2>
            <p className="text-[#9b9580] mt-2 text-sm max-w-lg mx-auto">Everything about StreamForge is designed to protect your channel and build sustainable momentum</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {trustPillars.map(tp => (
              <div key={tp.t} className="p-5 rounded-2xl bg-white/[.03] border border-white/[.08] card-hover relative overflow-hidden group">
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-green-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                <div className="text-3xl mb-3">{tp.icon}</div>
                <div className="text-sm font-bold text-[#f0ece4] mb-2">{tp.t}</div>
                <div className="text-xs text-[#9b9580] leading-relaxed mb-3">{tp.b}</div>
                <div className="text-[10px] font-bold text-green-400 bg-green-500/[.08] border border-green-500/20 rounded-md px-2 py-1 inline-block">{tp.proof}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-2 pt-6 border-t border-white/[.07]">
            {trustBadges.map(b => (
              <span key={b} className="text-xs font-semibold text-[#9b9580] bg-white/[.03] border border-white/[.08] rounded-full px-3 py-1.5">{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ PREVIEW */}
      <section className="py-20 px-5 border-b border-white/[.07]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="section-tag">Common Questions</div>
            <h2 className="text-3xl font-extrabold tracking-tight mt-2 text-[#f0ece4]">Answers Before You Join</h2>
          </div>
          <div className="flex flex-col gap-3 mb-8">
            {faqs.map(f => (
              <details key={f.q} className="group p-4 rounded-xl bg-white/[.03] border border-white/[.08] hover:border-[rgba(232,168,62,.25)] transition-colors cursor-pointer">
                <summary className="flex justify-between items-center text-sm font-bold text-[#f0ece4] list-none">
                  {f.q}
                  <span className="text-[#e8a83e] group-open:rotate-180 transition-transform text-xs ml-4 flex-shrink-0">▼</span>
                </summary>
                <p className="text-xs text-[#9b9580] leading-relaxed mt-3">{f.a}</p>
              </details>
            ))}
          </div>
          <div className="text-center">
            <Link href="/faq" className="btn-outline-gold px-6 py-2.5 rounded-xl text-sm no-underline inline-flex items-center gap-2">View All FAQs →</Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 px-5 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="section-tag mb-4">Ready to Grow?</div>
          <h2 className="text-4xl font-extrabold tracking-tight mb-4 gradient-text">Stop Streaming to 0 Viewers</h2>
          <p className="text-[#9b9580] mb-8 leading-relaxed">Join 5,800+ streamers who are growing with real engagement, real viewers, and a community that actually shows up.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/pricing" className="btn-gold px-8 py-4 rounded-xl text-base no-underline inline-flex items-center justify-center gap-2">🚀 Start Growing Today</Link>
            <Link href="/community" className="btn-outline-gold px-8 py-4 rounded-xl text-base no-underline inline-flex items-center justify-center gap-2">See the Community</Link>
          </div>
          <p className="text-[10px] text-[#504c44] mt-4">No automatic charges · Cancel anytime · Response within 24 hours</p>
        </div>
      </section>

      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "StreamForge — Get Real Viewers & Grow on Twitch",
        "url": "https://streamforge.gg",
        "description": "Active viewer network for streamers. Real engagement, organic growth, Twitch Affiliate in 14 days average.",
        "mainEntity": {
          "@type": "Service",
          "name": "StreamForge Viewer Network",
          "description": "Premium paid community for streamers on Twitch, Kick, YouTube and TikTok.",
          "provider": { "@type": "Organization", "name": "StreamForge" },
          "offers": [
            { "@type": "Offer", "name": "Starter", "price": "55", "priceCurrency": "USD", "billingPeriod": "P1M" },
            { "@type": "Offer", "name": "Growth", "price": "149", "priceCurrency": "USD", "billingPeriod": "P1M" },
            { "@type": "Offer", "name": "Elite", "price": "240", "priceCurrency": "USD", "billingPeriod": "P1M" },
          ]
        }
      })}} />
    </>
  )
}
