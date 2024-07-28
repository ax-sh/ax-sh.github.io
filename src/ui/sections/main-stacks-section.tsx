import { Children, type PropsWithChildren } from "react";

import clsx from "clsx";

function InfiniteStacksLoopMarquee({ children }: PropsWithChildren) {
  return (
    <div className='overflow-hidden w-full inline-flex flex-nowrap'>
      {children}
      {children}
    </div>
  );
}

function MarqueeContainer({ children }: PropsWithChildren) {
  return (
    <ul
      className={clsx(
        "list-none [&_li]:mx -1 ",
        "flex items-center justify-center md:justify-start",
        "[&_img]:max-w-none [&_img]:w-8 animate-infinite-scroll"
      )}
    >
      {Children.map(children, (child, i) => (
        <li key={`marquee-item-${i}`}>{child}</li>
      ))}
    </ul>
  );
}

export function MainStacksSection() {
  return (
    <section
      className={
        "w-96 [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]"
      }
    >
      <InfiniteStacksLoopMarquee>
        <MarqueeContainer>
          <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' />
          <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' />
          <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' />
          <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' />
          <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg' />
          <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/storybook/storybook-original.svg' />
          <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' />
          <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg' />
          <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' />
          <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' />
          <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg' />
          <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg' />
          <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitest/vitest-original.svg' />
          <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' />
          <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' />
        </MarqueeContainer>
      </InfiniteStacksLoopMarquee>
    </section>
  );
}
