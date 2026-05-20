import type { Metadata } from 'next'
import IntroScreen from '@/components/IntroScreen'
import HomePage from '@/components/HomePage'

export const metadata: Metadata = {
  title: 'StreamForge — Join a Creator Networking Community & Grow on Twitch, Kick & YouTube',
  description: 'StreamForge is Streamer collaboration network helping streamers increase visibility, improve engagement, and grow organically on Twitch, Kick, YouTube and TikTok. Join 5,800+ streamers. Average Twitch Affiliate in 14 days.',
  openGraph: {
    title: 'StreamForge — Join a Creator Networking Community & Grow on Twitch, Kick & YouTube',
    description: 'Streamer collaboration network. Connect with active creators and communities. No bots. Twitch Affiliate & Partner Achievement.',
    url: 'https://streamforge.gg',
  },
  alternates: { canonical: 'https://streamforge.gg' },
}

export default function Page() {
  return (
    <>
      <IntroScreen />
      <HomePage />
    </>
  )
}
