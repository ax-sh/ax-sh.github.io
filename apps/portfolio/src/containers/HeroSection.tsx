import React from 'react';
import {
  Amazonaws,
  AmazonsThree,
  Amp,
  Antdesign,
  Apollographql,
  Archlinux,
  Auth0,
  Awsamplify,
  Bootstrap,
  Buymeacoffee,
  Docker,
  Git,
  Github,
  Gitlab,
  Gnubash,
  Go,
  Graphql,
  Java,
  Javascript,
  Jira,
  Nestjs,
  Netlify,
  Nextdotjs,
  Nodedotjs,
  Nodemon,
  Notion,
  Nx,
  Puppeteer,
  Python,
  ReactJs,
  Redux,
  Reduxsaga,
  Tailwindcss,
  Threedotjs,
  Tsnode,
  Typescript,
} from '@icons-pack/react-simple-icons';
import { IconsWrapper } from '@ax-sh.github.io/common';

const IconsContainer = ({
  children,
  header,
  size,
}: React.PropsWithChildren<{ header: string; size?: number }>) => {
  return (
    <div
      className={
        'bg-black bg-opacity-50 p-2 m-2 rounded-md flex flex-col flex-wrap gap-6'
      }
    >
      <h2 className="text-4xl text-center">{header}</h2>
      <div className={'flex justify-items-center flex-wrap gap-2'}>
        <IconsWrapper
          size={size ?? 48}
          className={'flex flex-wrap gap-4 m-auto'}
        >
          {children}
        </IconsWrapper>
      </div>
    </div>
  );
};

export const HeroSection = () => {
  return (
    <section
      className="min-h-screen grid place-items-center bg-cover bg-center"
      style={{ backgroundImage: "url('./bg.jpg')" }}
    >
      <div className={'md:w-1/2 p-2'}>
        <h1 className="text-8xl">Axmin Shrestha</h1>
        <h2 className="text-2xl">
          Senior Creative Web Developer at Bottle Tech
        </h2>
        <IconsContainer header="Programming Languages">
          <Javascript />
          <Typescript />
          <Nodedotjs />
          <Tsnode />
          <Python />
          <Java />
          <Go />
          <Gnubash />
        </IconsContainer>
        <IconsContainer header="My Current Stacks" size={36}>
          <Nx />
          <Github />
          <Gitlab />
          <Netlify />
          <Notion />
          <Git />
          <ReactJs />
          <Nextdotjs />
          <Nestjs />
          <Apollographql />
          <Graphql />
          <Redux />
          <Reduxsaga />
          <Nodemon />
          <Jira />
          <Puppeteer />
          <Tailwindcss />
          <Bootstrap />
          <AmazonsThree />
          <Amp />
          <Awsamplify />

          <Buymeacoffee />

          <Amazonaws />
          <Antdesign />
          <Threedotjs />
          <Archlinux />
          <Docker />
          <Auth0 />
        </IconsContainer>
      </div>
    </section>
  );
};