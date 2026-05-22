'use client'
import { useState } from 'react'
import Link from 'next/link'

/* ── Dodo Payment Links ── */
const DODO = {
  Starter:  'https://flutterwave.com/pay/vknmccjimzyd',
  Standard: 'https://flutterwave.com/pay/5jif6jltjw9d',
  Premium:  'https://flutterwave.com/pay/zlsaqvilg2lq',
}

interface Feature { yes: boolean; text: string; star?: boolean }
interface StackItem { item: string; val: string }
interface Plan {
  key: 'Starter' | 'Standard' | 'Premium'
  price: number; tagline: string; badge: string | null
  popular: boolean; color: string; borderColor: string
  features: Feature[]; note: string
  stack?: StackItem[]
}

const PLANS: Plan[] = [
  {
    key: 'Starter' as const,
    price: 49,
    tagline: 'Perfect for testing the network',
    badge: null,
    popular: false,
    color: 'rgba(255,255,255,.05)',
    borderColor: 'rgba(255,255,255,.1)',
    features: [
      { yes: true,  text: 'Access to viewer engagement network' },
      { yes: true,  text: 'Real viewers who watch & engage' },
      { yes: true,  text: 'Community Discord access' },
      { yes: true,  text: '5 collab requests per month' },
      { yes: true,  text: 'Basic growth analytics' },
      { yes: true,  text: 'Streamer directory listing' },
      { yes: false, text: 'Priority placement in groups' },
      { yes: false, text: 'Video edits included' },
      { yes: false, text: 'Brand deal introductions' },
    ],
    note: '⚡ Best entry point — full network access from day one',
  },
  {
    key: 'Standard' as const,
    price: 149,
    tagline: 'For streamers serious about scaling',
    badge: '⭐ Most Popular',
    popular: true,
    color: 'rgba(232,168,62,.06)',
    borderColor: 'rgba(232,168,62,.35)',
    features: [
      { yes: true,  text: 'Everything in Starter' },
      { yes: true,  text: 'Priority viewer placement' },
      { yes: true,  text: 'Increase visibility in your category' },
      { yes: true,  text: 'Attract active viewers faster' },
      { yes: true,  text: 'Verified badge on StreamForge' },
      { yes: true,  text: 'Advanced analytics dashboard' },
      { yes: true,  text: 'Brand deal alerts' },
      { yes: true,  text: '1 FREE professional video edit', star: true },
      { yes: false, text: 'Homepage feature slot' },
    ],
    note: '🔥 Most popular — members see strongest ROI on this plan',
  },
  {
    key: 'Premium' as const,
    price: 249,
    tagline: 'For streamers who want everything',
    badge: '👑 Maximum Growth',
    popular: false,
    color: 'rgba(124,58,237,.06)',
    borderColor: 'rgba(124,58,237,.35)',
    features: [
      { yes: true, text: 'Everything in Standard' },
      { yes: true, text: 'Maximum viewer engagement priority' },
      { yes: true, text: 'Dominate your game category' },
      { yes: true, text: 'Channel listed on StreamForge homepage' },
      { yes: true, text: 'Exposed to 7,000+ daily visitors' },
      { yes: true, text: '1-on-1 growth coaching sessions' },
      { yes: true, text: 'Direct brand deal introductions' },
      { yes: true, text: 'Partner application support' },
      { yes: true, text: '3 FREE professional video edits', star: true },
    ],
    stack: [
      { item: '3 professional video edits', val: '$120' },
      { item: 'Homepage feature slot', val: '$80' },
      { item: '7k+ daily visitor exposure', val: '$60' },
      { item: '1-on-1 coaching sessions', val: '$90' },
    ],
    note: '🔥 Elite plan — brand deals alone cover the monthly cost',
  },
]

type PlanKey = 'Starter' | 'Standard' | 'Premium' | 'Custom' | null

export default function PricingClient() {
  const [selected, setSelected] = useState<PlanKey>(null)
  const [customBudget, setCustomBudget] = useState('')
  const [hoveredPlan, setHoveredPlan] = useState<PlanKey>(null)

  /* ── Derived button state ── */
  const selectedPlan = PLANS.find(p => p.key === selected)

  function getButtonLabel() {
    if (!selected) return 'Select a Plan to Continue'
    if (selected === 'Custom') return 'Submit Application →'
    return `Continue to Checkout — $${selectedPlan?.price}`
  }

  function handleMainCTA() {
    if (!selected) return
    if (selected === 'Custom') {
      // Go to apply form without payment
      window.location.href = '/applyform?plan=custom&budget=' + encodeURIComponent(customBudget)
      return
    }
    // Go to Dodo checkout — Dodo will redirect back to /applyform?paid=true after payment
    const url = DODO[selected as keyof typeof DODO]
    window.location.href = url
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)' }}>

      {/* ── HERO ── */}
      <section className="py-20 px-5 text-center border-b" style={{ background: 'linear-gradient(180deg,rgba(124,58,237,.08),transparent)', borderColor: 'rgba(255,255,255,.07)' }}>
        <div className="max-w-3xl mx-auto">
          <div className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4" style={{ background: 'rgba(232,168,62,.1)', border: '1px solid rgba(232,168,62,.22)', color: '#e8a83e' }}>
            Simple Pricing
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4" style={{ background: 'linear-gradient(135deg,#f0ece4,#e8a83e 50%,#67e8f9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            One Decision That Changes Your Streaming Career
          </h1>
          <p className="text-base max-w-xl mx-auto mb-4 leading-relaxed" style={{ color: 'var(--txt2)' }}>
            StreamForge members consistently reach milestones faster, land brand deals, and build the community they always wanted. Choose your plan and start today.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 text-sm font-bold" style={{ background: 'rgba(22,163,74,.12)', border: '1px solid rgba(22,163,74,.3)', color: '#22c55e' }}>
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"/>
            <span id="live-joiners">12 streamers joined in the last 24 hours</span>
          </div>
          <div className="flex flex-wrap justify-center gap-3 text-xs" style={{ color: 'var(--txt2)' }}>
            {['🔒 Secure Dodo Payments checkout', '⚡ Instant access after payment', '✅ Cancel anytime', '🌍 Works worldwide'].map(b => (
              <span key={b} className="px-3 py-1.5 rounded-full font-semibold" style={{ background: 'rgba(255,255,255,.05)', border: '1px solid rgba(232,168,62,.22)', color: 'var(--txt2)' }}>{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── STEP INDICATOR ── */}
      <div className="max-w-2xl mx-auto px-5 py-6">
        <div className="flex items-center justify-center gap-2">
          {[['1', 'Select Plan', true], ['2', 'Checkout', selected && selected !== 'Custom'], ['3', 'Application', false]].map(([n, label, active], i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300"
                  style={{ background: active ? 'linear-gradient(135deg,#a06820,#e8a83e)' : 'rgba(255,255,255,.08)', color: active ? '#0a0806' : 'var(--txt3)', border: active ? 'none' : '1px solid rgba(255,255,255,.1)' }}>
                  {n as string}
                </div>
                <span className="text-xs font-semibold hidden sm:block" style={{ color: active ? 'var(--txt)' : 'var(--txt3)' }}>{label as string}</span>
              </div>
              {i < 2 && <div className="w-8 h-px mx-1" style={{ background: 'rgba(255,255,255,.1)' }} />}
            </div>
          ))}
        </div>
      </div>

      {/* ── PLAN CARDS ── */}
      <section className="px-5 pb-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-5">
          {PLANS.map(plan => {
            const isSel = selected === plan.key
            const isHov = hoveredPlan === plan.key
            return (
              <div key={plan.key}
                onClick={() => setSelected(plan.key)}
                onMouseEnter={() => setHoveredPlan(plan.key)}
                onMouseLeave={() => setHoveredPlan(null)}
                className="relative rounded-2xl p-6 cursor-pointer transition-all duration-300 select-none"
                style={{
                  background: isSel ? (plan.popular ? 'rgba(232,168,62,.1)' : plan.color) : plan.color,
                  border: `2px solid ${isSel ? (plan.popular ? 'rgba(232,168,62,.6)' : '#7c3aed') : isHov ? 'rgba(232,168,62,.3)' : plan.borderColor}`,
                  boxShadow: isSel ? `0 0 40px ${plan.popular ? 'rgba(232,168,62,.15)' : 'rgba(124,58,237,.15)'}` : isHov ? '0 8px 32px rgba(0,0,0,.3)' : 'none',
                  transform: isSel ? 'translateY(-4px)' : isHov ? 'translateY(-2px)' : 'none',
                }}>

                {/* Selected checkmark */}
                {isSel && (
                  <div className="absolute top-4 right-4 w-6 h-6 rounded-full flex items-center justify-center text-xs font-black text-[#0a0806]" style={{ background: 'linear-gradient(135deg,#a06820,#e8a83e)' }}>✓</div>
                )}

                {/* Badge */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-extrabold whitespace-nowrap"
                    style={{ background: plan.popular ? 'linear-gradient(135deg,#a06820,#e8a83e)' : 'linear-gradient(135deg,#7c3aed,#0891b2)', color: plan.popular ? '#0a0806' : '#fff' }}>
                    {plan.badge}
                  </div>
                )}

                <div className="text-xs font-bold uppercase tracking-widest mb-1 mt-2" style={{ color: 'var(--txt2)' }}>{plan.key}</div>
                <div className="flex items-end gap-1 mb-1">
                  <span className="text-4xl font-extrabold leading-none" style={{ color: '#e8a83e' }}>${plan.price}</span>
                  <span className="text-sm mb-1" style={{ color: 'var(--txt3)' }}>/month</span>
                </div>
                <div className="text-xs mb-4 pb-4" style={{ color: 'var(--txt2)', borderBottom: '1px solid rgba(255,255,255,.07)' }}>{plan.tagline}</div>

                <ul className="flex flex-col gap-2 mb-4">
                  {plan.features.map(f => (
                    <li key={f.text} className="flex items-start gap-2 text-xs">
                      <span className="flex-shrink-0 mt-0.5 font-bold" style={{ color: f.yes ? (f.star ? '#e8a83e' : '#22c55e') : 'var(--txt3)' }}>
                        {f.yes ? (f.star ? '★' : '✓') : '✗'}
                      </span>
                      <span style={{ color: f.yes ? (f.star ? '#e8a83e' : 'var(--txt)') : 'var(--txt3)', fontWeight: f.star ? 600 : 400 }}>{f.text}</span>
                    </li>
                  ))}
                </ul>

                {/* Value stack for Premium */}
                {plan.stack && (
                  <div className="mb-4 p-3 rounded-xl" style={{ background: 'rgba(232,168,62,.06)', border: '1px solid rgba(232,168,62,.18)' }}>
                    <div className="text-[10px] font-bold uppercase tracking-wider mb-2" style={{ color: '#e8a83e' }}>📦 Included Value</div>
                    {plan.stack.map(s => (
                      <div key={s.item} className="flex justify-between text-xs py-1" style={{ borderBottom: '1px solid rgba(255,255,255,.05)' }}>
                        <span style={{ color: 'var(--txt2)' }}>{s.item}</span>
                        <span className="font-bold" style={{ color: '#22c55e' }}>{s.val}</span>
                      </div>
                    ))}
                    <div className="flex justify-between text-sm font-bold pt-2 mt-1">
                      <span style={{ color: 'var(--txt)' }}>Total value</span>
                      <span style={{ color: '#e8a83e' }}>$350+ free</span>
                    </div>
                  </div>
                )}

                {/* Select indicator */}
                <div className="w-full text-center py-2 rounded-xl text-xs font-bold transition-all duration-300"
                  style={{
                    background: isSel ? 'linear-gradient(135deg,#a06820,#e8a83e)' : 'rgba(255,255,255,.04)',
                    color: isSel ? '#0a0806' : 'var(--txt2)',
                    border: isSel ? 'none' : '1px solid rgba(255,255,255,.1)',
                  }}>
                  {isSel ? '✓ Selected' : `Select ${plan.key}`}
                </div>
                <div className="text-[10px] text-center mt-2" style={{ color: 'var(--txt3)' }}>{plan.note}</div>
              </div>
            )
          })}
        </div>

        {/* ── CUSTOM BUDGET CARD ── */}
        <div className="max-w-6xl mx-auto mt-5">
          <div
            onClick={() => setSelected('Custom')}
            className="relative rounded-2xl p-6 cursor-pointer transition-all duration-300"
            style={{
              background: selected === 'Custom' ? 'rgba(8,145,178,.08)' : 'rgba(255,255,255,.03)',
              border: `2px solid ${selected === 'Custom' ? 'rgba(8,145,178,.5)' : 'rgba(255,255,255,.08)'}`,
              transform: selected === 'Custom' ? 'translateY(-2px)' : 'none',
              boxShadow: selected === 'Custom' ? '0 0 30px rgba(8,145,178,.12)' : 'none',
            }}>
            {selected === 'Custom' && (
              <div className="absolute top-4 right-4 w-6 h-6 rounded-full flex items-center justify-center text-xs font-black text-[#0a0806]" style={{ background: 'linear-gradient(135deg,#0891b2,#67e8f9)' }}>✓</div>
            )}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xl">✏️</span>
                  <span className="text-base font-extrabold tracking-tight" style={{ color: 'var(--txt)' }}>Custom Budget</span>
                </div>
                <p className="text-sm" style={{ color: 'var(--txt2)' }}>
                  None of the plans fit your budget? Tell us what you can afford and we will work something out.
                </p>
              </div>
              {selected === 'Custom' && (
                <div className="flex items-center gap-3" onClick={e => e.stopPropagation()}>
                  <span className="text-lg font-bold" style={{ color: '#e8a83e' }}>$</span>
                  <input
                    type="number"
                    value={customBudget}
                    onChange={e => setCustomBudget(e.target.value)}
                    placeholder="Enter your budget"
                    autoFocus
                    className="px-4 py-2.5 rounded-xl text-sm w-48"
                    style={{ background: 'rgba(255,255,255,.08)', border: '1px solid rgba(8,145,178,.4)', color: 'var(--txt)' }}
                  />
                  <span className="text-xs" style={{ color: 'var(--txt3)' }}>/month</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── STICKY MAIN CTA ── */}
      <div className="sticky bottom-0 left-0 right-0 z-50 px-5 pb-5 pt-4"
        style={{ background: 'linear-gradient(to top, var(--bg) 60%, transparent)', backdropFilter: 'blur(10px)' }}>
        <div className="max-w-xl mx-auto">
          <button
            onClick={handleMainCTA}
            disabled={!selected || (selected === 'Custom' && !customBudget.trim())}
            className="w-full py-4 rounded-2xl text-base font-extrabold transition-all duration-300 cursor-pointer border-none"
            style={{
              background: !selected || (selected === 'Custom' && !customBudget.trim())
                ? 'rgba(255,255,255,.06)'
                : selected === 'Custom'
                  ? 'linear-gradient(135deg,#0891b2,#67e8f9)'
                  : 'linear-gradient(135deg,#a06820,#e8a83e)',
              color: !selected || (selected === 'Custom' && !customBudget.trim()) ? 'var(--txt3)' : '#0a0806',
              boxShadow: selected && !(selected === 'Custom' && !customBudget.trim()) ? '0 8px 32px rgba(232,168,62,.3)' : 'none',
              transform: selected && !(selected === 'Custom' && !customBudget.trim()) ? 'translateY(-1px)' : 'none',
              cursor: !selected || (selected === 'Custom' && !customBudget.trim()) ? 'not-allowed' : 'pointer',
            }}>
            {getButtonLabel()}
          </button>
          {selected && selected !== 'Custom' && (
            <p className="text-center text-xs mt-2" style={{ color: 'var(--txt3)' }}>
              🔒 Secure checkout via Dodo Payments · After payment you will complete your application
            </p>
          )}
          {selected === 'Custom' && (
            <p className="text-center text-xs mt-2" style={{ color: 'var(--txt3)' }}>
              No payment required · We will contact you within 24 hours
            </p>
          )}
          {!selected && (
            <p className="text-center text-xs mt-2" style={{ color: 'var(--txt3)' }}>
              ↑ Select a plan above to continue
            </p>
          )}
        </div>
      </div>

      {/* ── HOW IT WORKS ── */}
      <section className="py-16 px-5 border-t" style={{ borderColor: 'rgba(255,255,255,.07)' }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-extrabold tracking-tight text-center mb-8" style={{ color: 'var(--txt)' }}>How It Works</h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { n: '1', icon: '🛒', t: 'Select & Pay', d: 'Choose your plan and complete secure checkout via Dodo Payments. Takes 60 seconds.' },
              { n: '2', icon: '📋', t: 'Fill Application', d: 'After payment you are redirected to the application form. Tell us about your channel.' },
              { n: '3', icon: '🚀', t: 'Get Access', d: 'We review within 24 hours and send your exclusive Discord invite and onboarding details.' },
            ].map(s => (
              <div key={s.n} className="text-center p-5 rounded-2xl" style={{ background: 'rgba(255,255,255,.03)', border: '1px solid rgba(255,255,255,.07)' }}>
                <div className="w-10 h-10 rounded-full mx-auto mb-3 flex items-center justify-center text-sm font-black text-[#0a0806]" style={{ background: 'linear-gradient(135deg,#a06820,#e8a83e)' }}>{s.n}</div>
                <div className="text-2xl mb-2">{s.icon}</div>
                <div className="text-sm font-bold mb-2" style={{ color: 'var(--txt)' }}>{s.t}</div>
                <div className="text-xs leading-relaxed" style={{ color: 'var(--txt2)' }}>{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GUARANTEE + TRUST ── */}
      <section className="py-12 px-5 border-t" style={{ borderColor: 'rgba(255,255,255,.07)', background: 'linear-gradient(180deg,rgba(22,163,74,.04),transparent)' }}>
        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-5 mb-10">
            {[
              { icon: '🛡️', title: '30-Day Satisfaction Promise', desc: "If you genuinely follow the process and don't see community growth in 30 days, contact us. We work with you until it works." },
              { icon: '🔒', title: 'Secure Checkout', desc: 'All payments processed by Dodo Payments — PCI compliant, encrypted, trusted by thousands of creators worldwide.' },
              { icon: '⚡', title: 'Access Within 24 Hours', desc: 'After payment and application, your exclusive Discord invite is sent within 24 hours. No waiting weeks to get started.' },
            ].map(g => (
              <div key={g.title} className="text-center p-5 rounded-2xl" style={{ background: 'rgba(255,255,255,.03)', border: '1px solid rgba(255,255,255,.07)' }}>
                <div className="text-3xl mb-3">{g.icon}</div>
                <div className="text-sm font-bold mb-2" style={{ color: 'var(--txt)' }}>{g.title}</div>
                <div className="text-xs leading-relaxed" style={{ color: 'var(--txt2)' }}>{g.desc}</div>
              </div>
            ))}
          </div>

          {/* ROI section */}
          <div className="rounded-2xl p-7 mb-8" style={{ background: 'rgba(232,168,62,.06)', border: '1px solid rgba(232,168,62,.2)' }}>
            <h3 className="text-lg font-extrabold mb-4 text-center" style={{ color: 'var(--txt)' }}>💰 The Real Cost of NOT Joining</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: '#ef4444' }}>Without StreamForge</div>
                {[
                  'Months of solo grinding with no community',
                  'Zero brand deal opportunities',
                  'No coaching or strategy support',
                  'Motivation fades, many streamers quit',
                  'Lost income from delayed monetisation',
                ].map(i => (
                  <div key={i} className="flex items-start gap-2 mb-2 text-xs" style={{ color: 'var(--txt2)' }}>
                    <span style={{ color: '#ef4444', flexShrink: 0 }}>✗</span>{i}
                  </div>
                ))}
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: '#22c55e' }}>With StreamForge Standard ($149/mo)</div>
                {[
                  'Immediate peer community and collaboration',
                  'Brand deal alerts from day one',
                  '1 free professional video edit ($40 value)',
                  'Verified badge = credibility with sponsors',
                  'Members regularly earn back plan cost in month 1',
                ].map(i => (
                  <div key={i} className="flex items-start gap-2 mb-2 text-xs" style={{ color: 'var(--txt2)' }}>
                    <span style={{ color: '#22c55e', flexShrink: 0 }}>✓</span>{i}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-12 px-5 border-t" style={{ borderColor: 'rgba(255,255,255,.07)' }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl font-extrabold text-center mb-6" style={{ color: 'var(--txt)' }}>Payment Questions</h2>
          {[
            { q: 'Is payment secure?', a: 'Yes. All payments are processed by Dodo Payments — a secure global payment processor. We never see your card details.' },
            { q: 'What happens after I pay?', a: 'You are automatically redirected to the application form. Fill it in and we will review within 24 hours then send your Discord invite.' },
            { q: 'Can I cancel anytime?', a: 'Yes. No long-term contracts. Cancel by emailing contact.streamforge@gmail.com at any time.' },
            { q: 'What if I cannot afford any plan?', a: 'Select "Custom Budget" and enter what you can afford. We will contact you within 24 hours to discuss options.' },
          ].map((f, i) => (
            <details key={i} className="mb-3 p-4 rounded-xl cursor-pointer" style={{ background: 'rgba(255,255,255,.03)', border: '1px solid rgba(255,255,255,.08)' }}>
              <summary className="text-sm font-bold list-none flex justify-between items-center" style={{ color: 'var(--txt)' }}>
                {f.q} <span style={{ color: '#e8a83e' }}>▼</span>
              </summary>
              <p className="text-xs leading-relaxed mt-3" style={{ color: 'var(--txt2)' }}>{f.a}</p>
            </details>
          ))}
        </div>
      </section>

    </div>
  )
}
