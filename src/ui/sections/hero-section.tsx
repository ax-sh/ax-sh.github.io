import { PropsWithChildren } from "react";

import { ImageContain } from "@/ui";

import clsx from "clsx";

export function HeroSection({ children }: PropsWithChildren) {
  return (
    <section className={clsx("flex min-h-screen", "flex-col-reverse md:flex-row duration-150")}>
      <div className={clsx("relative grow shrink-0 basis-1/2")}>
        <ImageContain src='/hero-image.svg' alt='hero' />
      </div>
      <div className={clsx("flex flex-col w-full self-stretch basis-1/2", "md:grow duration-150")}>
        {children}
      </div>
    </section>
  );
}
