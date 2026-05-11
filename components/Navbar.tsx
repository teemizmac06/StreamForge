'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const links = [
    { href: '/', label: 'Home' },
    { href: '/community', label: 'Community' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/faq', label: 'FAQ' },
    { href: '/blog', label: 'Blog' },
  ]

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'py-3 shadow-lg shadow-black/40' : 'py-4'} backdrop-blur-2xl bg-[rgba(7,7,26,0.82)] border-b border-white/[.08]`}>
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 no-underline">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-black text-white flex-shrink-0"
            style={{ background: 'linear-gradient(135deg,#7c3aed,#0891b2)', boxShadow: '0 0 18px rgba(124,58,237,.45)' }}>
            SF
          </div>
          <span className="font-extrabold text-lg tracking-tight text-[#f0ece4]">StreamForge</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6 list-none m-0 p-0">
          {links.map(l => (
            <li key={l.href}>
              <Link href={l.href} className="text-sm font-medium text-[#9b9580] hover:text-[#e8a83e] transition-colors no-underline relative group">
                {l.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#e8a83e] group-hover:w-full transition-all duration-300" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Right buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a href="mailto:contact.streamforge@gmail.com?subject=Discord%20Access%20Request" className="text-sm font-bold text-[#9b9580] hover:text-[#e8a83e] transition-colors px-3 py-2">
            💬 Discord
          </a>
          <Link href="/pricing" className="btn-gold px-4 py-2 rounded-lg text-sm no-underline">
            🚀 Start Growing
          </Link>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden text-[#9b9580] hover:text-[#e8a83e] transition-colors p-2"
          onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <div className="w-5 flex flex-col gap-1.5">
            <span className={`block h-0.5 bg-current transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 bg-current transition-all ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 bg-current transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden border-t border-white/[.08] bg-[#0e0e28] px-5 py-4 flex flex-col gap-3">
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-[#9b9580] hover:text-[#e8a83e] transition-colors no-underline py-1">
              {l.label}
            </Link>
          ))}
          <Link href="/pricing" onClick={() => setMenuOpen(false)}
            className="btn-gold px-4 py-2.5 rounded-lg text-sm text-center no-underline mt-1">
            🚀 Start Growing
          </Link>
        </div>
      )}
    </nav>
  )
}
