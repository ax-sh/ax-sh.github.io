import { Children, type PropsWithChildren } from "react";

import clsx from "clsx";

function InfiniteStacksLoopMarquee({ children }: PropsWithChildren) {
  return (
    <div className='overflow-hidden w-full inline-flex flex-nowrap justify-around'>
      {children}
      {children}
    </div>
  );
}

function MarqueeContainer({ children }: PropsWithChildren) {
  return (
    <ul
      className={clsx(
        "list-none m-0 p-0 [&_li]:m-0 [&_li]:p-0",
        "flex ",
        "[&_img]:max-w-none [&_img]:w-8 [&_img]:mx-1 animate-infinite-scroll"
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
          <img
            alt={"typescript"}
            src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg'
          />
          <img
            alt={"javascript"}
            src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg'
          />
          <img
            alt='react'
            src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg'
          />
          <img
            alt={"nextjs"}
            src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg'
          />
          <img
            alt={"nestjs"}
            src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg'
          />
          <img
            alt={"storybook"}
            src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/storybook/storybook-original.svg'
          />
          <img
            alt={"docker"}
            src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg'
          />
          <img
            alt={"graphql"}
            src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg'
          />
          <img
            alt={"python"}
            src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg'
          />
          <img
            alt={"postgresql"}
            src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg'
          />
          <img
            alt={"vitejs"}
            src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg'
          />
          <img
            alt={"prisma"}
            src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg'
          />
          <img
            alt={"vitest"}
            src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitest/vitest-original.svg'
          />
          <img
            alt={"amazon web services"}
            src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg'
          />
          <img
            alt={"git"}
            src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg'
          />

          {/*<img alt={"rust"} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg" />*/}

          {/*<img alt={"go"} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg" />*/}

          <img
            alt={"go"}
            src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg'
          />
        </MarqueeContainer>
      </InfiniteStacksLoopMarquee>
    </section>
  );
}
