import type { Metadata } from 'next'
import Link from 'next/link'
import ApplyForm from '@/components/ApplyForm'

export const metadata: Metadata = {
  title: 'Pricing — StreamForge Streamer Growth Plans',
  description: 'StreamForge pricing plans: Starter $55/mo, Growth $149/mo, Elite $240/mo. Join the active viewer network and grow on Twitch, Kick and YouTube. Cancel anytime.',
  openGraph: { title: 'StreamForge Pricing', description: 'Simple plans for every stage of your streaming journey. No bots. Real growth.' },
  alternates: { canonical: 'https://streamforge.gg/pricing' },
}

interface Feature { yes: boolean; text: string; star?: boolean }
interface Plan {
  name: string; price: number; tagline: string; badge: string | null;
  popular: boolean; features: Feature[]; cta: string; note: string;
  color: string; borderColor: string; stack?: { item: string; val: string }[];
}
const plans: Plan[] = [
  {
    name: 'Starter',
    price: 55,
    tagline: 'Perfect for testing the network',
    badge: null,
    popular: false,
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
      { yes: false, text: '1-on-1 coaching' },
    ],
    cta: 'Get Started',
    note: '⚡ Most members reach Affiliate on this plan',
    color: 'rgba(255,255,255,.06)',
    borderColor: 'rgba(255,255,255,.1)',
  },
  {
    name: 'Growth',
    price: 149,
    tagline: 'For streamers serious about scaling',
    badge: '⭐ Most Popular',
    popular: true,
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
      { yes: false, text: '1-on-1 coaching' },
    ],
    cta: 'Start Growing 🚀',
    note: '🔥 Chosen by 60% of new members',
    color: 'rgba(232,168,62,.06)',
    borderColor: 'rgba(232,168,62,.35)',
  },
  {
    name: 'Elite',
    price: 240,
    tagline: 'For streamers who want everything',
    badge: '👑 Maximum Growth',
    popular: false,
    features: [
      { yes: true, text: 'Everything in Growth' },
      { yes: true, text: 'Maximum viewer engagement priority' },
      { yes: true, text: 'Dominate your game category' },
      { yes: true, text: 'Channel listed on StreamForge homepage' },
      { yes: true, text: 'Exposed to 7,000+ daily visitors' },
      { yes: true, text: '1-on-1 growth coaching sessions' },
      { yes: true, text: 'Direct brand deal introductions' },
      { yes: true, text: 'Partner application support' },
      { yes: true, text: '3 FREE professional video edits', star: true },
      { yes: true, text: 'Name & channel featured on website', star: true },
    ],
    cta: 'Get Maximum Growth 👑',
    note: '🔥 Designed for streamers ready to go full-time',
    color: 'rgba(124,58,237,.06)',
    borderColor: 'rgba(124,58,237,.35)',
    stack: [
      { item: '3 professional video edits', val: '$120' },
      { item: 'Homepage feature slot', val: '$80' },
      { item: '7k+ daily visitor exposure', val: '$60' },
      { item: '1-on-1 coaching sessions', val: '$90' },
    ],
  },
]

const faqs = [
  { q: 'How does payment work?', a: 'Apply below, get approved within 24 hours, then receive payment instructions via email. There are no automatic charges. You only pay after being accepted.' },
  { q: 'Can I cancel anytime?', a: 'Yes. There are no long-term contracts. Cancel anytime via email with no penalties.' },
  { q: 'What happens after I apply?', a: 'Our team reviews your application within 24 hours. If approved, you receive payment instructions and then exclusive Discord access after payment is confirmed.' },
  { q: 'Can I upgrade or downgrade plans?', a: 'Yes. You can switch plans at any renewal period. Contact us at contact.streamforge@gmail.com to change your plan.' },
  { q: 'Is there a free trial?', a: 'We do not currently offer a free trial. However, the Starter plan at $55/month is designed as a low-risk entry point — most members see results within the first 1–3 streams.' },
]

export default function PricingPage() {
  // Build mailto for each plan
  const buildMailto = (plan: string) => {
    const subject = encodeURIComponent(`StreamForge Application — ${plan} Plan`)
    const body = encodeURIComponent(
`Hello StreamForge Team,

I would like to apply for the ${plan} plan.

=== MY DETAILS ===

Streamer Name: 
Email: 
Primary Platform: 
Avg Live Viewers: 
Channel Link: 
Goals: 

About my stream:


Looking forward to hearing from you!`
    )
    return `mailto:contact.streamforge@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <>
      {/* HERO */}
      <section className="py-20 px-5 text-center border-b border-white/[.07]" style={{ background: 'linear-gradient(180deg,rgba(124,58,237,.08),transparent)' }}>
        <div className="max-w-3xl mx-auto">
          <div className="section-tag mb-3">Simple Pricing</div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 gradient-text">Start Small. Scale as You Grow.</h1>
          <p className="text-[#9b9580] text-base max-w-xl mx-auto mb-6 leading-relaxed">
            All plans include real viewer access, Discord community, and growth analytics.<br />No contracts — cancel any time.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-xs text-[#9b9580]">
            {['🔒 Secure email payment', '⚡ Approved within 24h', '❌ No auto charges', '✅ Cancel anytime'].map(b => (
              <span key={b} className="glass glass-gold px-3 py-1.5 rounded-full font-semibold">{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* PLANS */}
      <section className="py-16 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 items-start">
            {plans.map(plan => (
              <div key={plan.name}
                className={`relative rounded-2xl p-7 border card-hover flex flex-col ${plan.popular ? 'shadow-[0_0_44px_rgba(232,168,62,.12)]' : ''}`}
                style={{ background: plan.color, borderColor: plan.borderColor }}>

                {/* Badge */}
                {plan.badge && (
                  <div className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-extrabold whitespace-nowrap ${plan.popular ? 'btn-gold' : 'bg-gradient-to-r from-[#a06820] to-[#ea580c] text-white'}`}>
                    {plan.badge}
                  </div>
                )}

                <div className="text-xs font-bold uppercase tracking-widest text-[#9b9580] mb-1">{plan.name}</div>
                <div className="flex items-end gap-1 mb-1">
                  <span className="text-5xl font-extrabold text-[#e8a83e] leading-none">${plan.price}</span>
                  <span className="text-[#504c44] text-sm mb-1">/month</span>
                </div>
                <div className="text-xs text-[#9b9580] mb-5 pb-5 border-b border-white/[.07]">{plan.tagline}</div>

                <ul className="flex flex-col gap-2.5 mb-6 flex-1">
                  {plan.features.map(f => (
                    <li key={f.text} className="flex items-start gap-2.5 text-xs">
                      <span className={`flex-shrink-0 mt-0.5 font-bold ${f.yes ? (f.star ? 'text-[#e8a83e]' : 'text-green-400') : 'text-[#504c44]'}`}>
                        {f.yes ? (f.star ? '★' : '✓') : '✗'}
                      </span>
                      <span className={f.yes ? (f.star ? 'text-[#e8a83e] font-semibold' : 'text-[#f0ece4]') : 'text-[#504c44]'}>{f.text}</span>
                    </li>
                  ))}
                </ul>

                {/* Value stack for Elite */}
                {plan.stack && (
                  <div className="mb-5 p-4 rounded-xl bg-[rgba(232,168,62,.06)] border border-[rgba(232,168,62,.18)]">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-[#e8a83e] mb-3">📦 Included Value</div>
                    {plan.stack.map(s => (
                      <div key={s.item} className="flex justify-between text-xs py-1.5 border-b border-white/[.05] last:border-none">
                        <span className="text-[#9b9580]">{s.item}</span>
                        <span className="font-bold text-green-400">{s.val}</span>
                      </div>
                    ))}
                    <div className="flex justify-between text-sm font-bold pt-2 mt-1">
                      <span className="text-[#f0ece4]">Total value</span>
                      <span className="text-[#e8a83e]">$350+ free</span>
                    </div>
                  </div>
                )}

                <a href={buildMailto(plan.name)}
                  className={`w-full text-center py-3 rounded-xl text-sm font-bold no-underline transition-all block ${plan.popular ? 'btn-gold' : 'btn-outline-gold'}`}>
                  {plan.cta}
                </a>
                <div className="text-[10px] text-[#504c44] text-center mt-2">{plan.note}</div>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-[#504c44] mt-8">
            Payment details sent via email after approval ·{' '}
            <a href="mailto:contact.streamforge@gmail.com" className="text-[#a06820] hover:text-[#e8a83e] transition-colors">contact.streamforge@gmail.com</a>
          </p>
        </div>
      </section>

      {/* FULL APPLICATION FORM */}
      <section className="py-16 px-5 border-t border-white/[.07]" id="apply">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <div className="section-tag">Apply Now</div>
            <h2 className="text-3xl font-extrabold tracking-tight mt-2 mb-3 text-[#f0ece4]">Submit Your Application</h2>
            <p className="text-[#9b9580] text-sm">Fill in your details below. Clicking submit opens your email app with everything pre-filled — just press Send.</p>
          </div>
        <div className="glass glass-gold rounded-2xl p-7">
        <ApplyForm />
      </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-5 border-t border-white/[.07]">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-extrabold tracking-tight text-[#f0ece4]">Pricing Questions</h2>
          </div>
          <div className="flex flex-col gap-3">
            {faqs.map(f => (
              <details key={f.q} className="group p-4 rounded-xl bg-white/[.03] border border-white/[.08] hover:border-[rgba(232,168,62,.25)] transition-colors cursor-pointer">
                <summary className="flex justify-between items-center text-sm font-bold text-[#f0ece4] list-none">
                  {f.q}
                  <span className="text-[#e8a83e] group-open:rotate-180 transition-transform text-xs ml-3 flex-shrink-0">▼</span>
                </summary>
                <p className="text-xs text-[#9b9580] leading-relaxed mt-3">{f.a}</p>
              </details>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/faq" className="btn-outline-gold px-6 py-2.5 rounded-xl text-sm no-underline inline-flex items-center gap-2">More FAQs →</Link>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "PriceSpecification",
        "name": "StreamForge Pricing",
        "url": "https://streamforge.gg/pricing",
        "offers": [
          { "@type": "Offer", "name": "Starter", "price": "55", "priceCurrency": "USD", "description": "Basic access to StreamForge viewer network" },
          { "@type": "Offer", "name": "Growth", "price": "149", "priceCurrency": "USD", "description": "Priority placement and full StreamForge features" },
          { "@type": "Offer", "name": "Elite", "price": "240", "priceCurrency": "USD", "description": "Maximum growth with coaching and brand deals" },
        ]
      })}} />
    </>
  )
}

