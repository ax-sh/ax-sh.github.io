import clsx from 'clsx';
import { HeroSection } from '@/ui/sections/hero-section';
import { ComingSoonSection } from '@/ui/sections/coming-soon-section';
import { ExternalLinksSection } from '@/ui/sections/external-links-section';
import { TimelineSection } from '@/ui/sections/timeline-section';

export default function Home() {
  return (
    <main className='min-h-screen w-full'>
      <HeroSection>
        <section
          className={clsx(
            'h-full w-full',
            'box-border p-4 md:p-4',
            'grid place-content-center prose'
          )}
        >
          <ComingSoonSection />
          <ExternalLinksSection />
        </section>
      </HeroSection>
      <TimelineSection />
    </main>
  );
}
