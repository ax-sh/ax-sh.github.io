import { ComingSoonSection } from '@/ui/coming-soon-section';
import { HeroSection } from '@/ui';

import { ExternalLinksSection } from '@/ui/external-links-section';
import clsx from 'clsx';
import { useQuery } from '@tanstack/react-query';

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
    </main>
  );
}
