import React from 'react';

import { PastProjectsLink } from '@/ui/past-projects-link';
import { BannerSection } from '@/ui/sections/banner-section';
import { ExternalLinksSection } from '@/ui/sections/external-links-section';
import { HeroSection } from '@/ui/sections/hero-section';

import clsx from 'clsx';

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
          <BannerSection />
          <ExternalLinksSection />
          <div>
            <PastProjectsLink>WORKS</PastProjectsLink>
          </div>
        </section>
      </HeroSection>
      <div />
    </main>
  );
}
