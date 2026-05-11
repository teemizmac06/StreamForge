import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  metadataBase: new URL('https://streamforge.gg'),
  title: { default: 'StreamForge — Get Real Viewers & Grow on Twitch, Kick & YouTube', template: '%s | StreamForge' },
  description: 'StreamForge is the active viewer network helping streamers increase visibility, improve engagement, and grow organically on Twitch, Kick, YouTube and TikTok. Join 5,800+ streamers.',
  keywords: ['how to grow on twitch','twitch growth community','kick streamer growth','real viewers twitch','streamer network','grow on twitch 2026','twitch affiliate fast','streamforge'],
  openGraph: { siteName: 'StreamForge', type: 'website', locale: 'en_US', url: 'https://streamforge.gg', images: [{ url: '/og-image.jpg', width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', site: '@streamforgegg' },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://streamforge.gg' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context":"https://schema.org","@type":"Organization","name":"StreamForge",
          "url":"https://streamforge.gg","email":"contact.streamforge@gmail.com",
          "description":"Active viewer network helping streamers grow on Twitch, Kick, YouTube and TikTok."
        })}} />
      </head>
      <body className="bg-[#07071a] text-[#f0ece4] antialiased" style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
        <div className="fixed inset-0 -z-10 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 40% at 20% 20%,rgba(124,58,237,.14) 0%,transparent 60%),radial-gradient(ellipse 50% 50% at 80% 80%,rgba(8,145,178,.1) 0%,transparent 60%),#07071a' }} />
        <Navbar />
        <main>{children}</main>
        <footer className="border-t border-white/[.07] bg-[#04040e] mt-20 py-12 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-black text-white flex-shrink-0" style={{background:'linear-gradient(135deg,#7c3aed,#0891b2)'}}>SF</div>
                <span className="font-extrabold text-lg tracking-tight">StreamForge</span>
              </div>
              <p className="text-xs text-[#504c44] leading-relaxed mb-3">Active viewer network helping streamers grow organically on Twitch, Kick, YouTube and TikTok.</p>
              <a href="mailto:contact.streamforge@gmail.com" className="text-xs text-[#a06820] hover:text-[#e8a83e] transition-colors">contact.streamforge@gmail.com</a>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#9b9580] mb-4">Platform</h4>
              <ul className="space-y-2 list-none p-0">
                {[['/', 'Home'],['/pricing','Pricing'],['/community','Community'],['/faq','FAQ']].map(([href, label]) => (
                  <li key={href}><a href={href} className="text-xs text-[#504c44] hover:text-[#e8a83e] transition-colors no-underline">{label}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#9b9580] mb-4">Blog</h4>
              <ul className="space-y-2 list-none p-0">
                {[['/blog/how-to-grow-on-twitch','Grow on Twitch'],['/blog/twitch-algorithm-explained','Twitch Algorithm'],['/blog/what-is-streamforge','What is StreamForge'],['/blog/is-streamforge-real','Is it Real?']].map(([href, label]) => (
                  <li key={href}><a href={href} className="text-xs text-[#504c44] hover:text-[#e8a83e] transition-colors no-underline">{label}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#9b9580] mb-4">Contact</h4>
              <ul className="space-y-2 list-none p-0">
                <li><a href="mailto:contact.streamforge@gmail.com" className="text-xs text-[#504c44] hover:text-[#e8a83e] transition-colors no-underline">Email Us</a></li>
                <li><a href="/faq" className="text-xs text-[#504c44] hover:text-[#e8a83e] transition-colors no-underline">FAQ</a></li>
                <li><a href="/community" className="text-xs text-[#504c44] hover:text-[#e8a83e] transition-colors no-underline">Community</a></li>
              </ul>
            </div>
          </div>
          <div className="max-w-6xl mx-auto pt-6 border-t border-white/[.05] flex flex-wrap justify-between items-center gap-3">
            <p className="text-[11px] text-[#504c44]">© 2026 StreamForge. All rights reserved.</p>
            <p className="text-[11px] text-[#504c44]">contact.streamforge@gmail.com</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
