import { HeroSection } from '@/app/hero-section'
import { TimelineSection } from '@/app/timeline-section'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <TimelineSection />
    </main>
  )
}
