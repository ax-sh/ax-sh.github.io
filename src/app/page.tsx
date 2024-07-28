import React from "react";

import { CTALinks } from "@/ui/cta-links";
import { BannerSection } from "@/ui/sections/banner-section";
import { ExternalLinksSection } from "@/ui/sections/external-links-section";
import HeroSection from "@/ui/sections/hero-section";
import { MainStacksSection } from "@/ui/sections/main-stacks-section";
import WorksSection from "@/ui/sections/work-section";

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
          <MainStacksSection />
          <ExternalLinksSection />
          <CTALinks />
        </section>
      </HeroSection>
      <WorksSection />
    </main>
  );
}
