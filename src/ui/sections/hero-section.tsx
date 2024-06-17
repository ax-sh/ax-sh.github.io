import type { PropsWithChildren } from "react";

import { ImageContain } from "@/ui";

import clsx from "clsx";

function HeroImage() {
  return (
    <>
      <ImageContain src='/hero-image.svg' alt='hero' className='z-10' />
      <ImageContain src='/hero-image.svg' alt='shadow' className='card-fader' />
      <ImageContain src='/hero-image.svg' alt='shadow' className='card-fader' />
      <ImageContain src='/hero-image.svg' alt='shadow' className='card-fader' />
      <ImageContain src='/hero-image.svg' alt='shadow' className='card-fader' />
      <ImageContain src='/hero-image.svg' alt='shadow' className='card-fader' />
      <ImageContain src='/hero-image.svg' alt='shadow' className='card-fader' />
      <ImageContain src='/hero-image.svg' alt='shadow' className='card-fader' />
      <ImageContain src='/hero-image.svg' alt='shadow' className='card-fader' />
    </>
  );
}

export function HeroSection({ children }: PropsWithChildren) {
  return (
    <section
      className={clsx(
        "flex min-h-screen",
        "flex-col-reverse md:flex-row duration-150 max-w-screen overflow-hidden"
      )}
    >
      <div className={clsx("relative grow shrink-0 basis-1/2")}>
        <HeroImage />
      </div>
      <div
        className={clsx(
          "flex flex-col w-full self-stretch basis-1/2",
          "md:grow duration-150 relative z-20"
        )}
      >
        {children}
      </div>
    </section>
  );
}
