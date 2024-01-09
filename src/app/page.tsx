import { ComingSoonSection } from '@/ui/coming-soon-section';
import clsx from 'clsx';

import { type ComponentProps, PropsWithChildren } from 'react';
import Image from 'next/image';
import { HeroSection } from '@/ui';

export default function Home() {
  return (
    <main className='min-h-screen w-full'>
      <HeroSection>
        <ComingSoonSection />
      </HeroSection>
    </main>
  );
}
