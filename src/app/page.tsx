import { ComingSoonSection } from '@/ui/coming-soon-section';
import { HeroSection } from '@/ui';

import { ExternalLinksSection } from '@/ui/external-links-section';

export default function Home() {
  return (
    <main className='min-h-screen w-full'>
      <HeroSection>
        <ComingSoonSection />
      </HeroSection>
      <ExternalLinksSection />
    </main>
  );
}
