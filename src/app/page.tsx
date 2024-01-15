import React from "react";

import { PastProjectsLink } from "@/ui/past-projects-link";
import { BannerSection } from "@/ui/sections/banner-section";
import { ExternalLinksSection } from "@/ui/sections/external-links-section";
import { HeroSection } from "@/ui/sections/hero-section";

import clsx from "clsx";

export default function Home() {
  return (
    <main className='min-h-screen w-full'>
      <HeroSection>
        <section
          className={clsx(
            "h-full w-full",
            "box-border p-4 md:p-4",
            "grid place-content-center prose"
          )}
        >
          <BannerSection />
          <ExternalLinksSection />
          <div className='flex gap-2'>
            <PastProjectsLink>WORKS</PastProjectsLink>
            <a
              className='text-green-500 hover:text-red-500 cursor-pointer'
              href='https://codesandbox.io/u/ax-sh'
            >
              SHOWCASE
            </a>
          </div>
        </section>
      </HeroSection>
      <div />
    </main>
  );
}
