import { ComingSoonSection } from '@/ui/coming-soon-section';
import { HeroSection } from '@/ui';

import { ExternalLinksSection } from '@/ui/external-links-section';

export default function Home() {
  return (
    <main className='min-h-screen w-full'>
      <HeroSection>
        <section className={'h-full w-full grid place-content-center prose'}>
          <ComingSoonSection />
          <ExternalLinksSection />
        </section>
      </HeroSection>
    </main>
  );
}
