import React from 'react';
import {
  Apollographql,
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
  Python,
  ReactJs,
  Redux,
  Reduxsaga,
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
        'bg-black bg-opacity-50 p-2 m-2 rounded-md flex flex-col flex-wrap gap-6 max-w-full'
      }
    >
      <h2 className="text-4xl">{header}</h2>
      <div className={'flex justify-items-center flex-wrap gap-2'}>
        <IconsWrapper size={size ? size : 48} className={'flex gap-4'}>
          {children}
        </IconsWrapper>
      </div>{' '}
    </div>
  );
};

export const HeroSection = () => {
  return (
    <section
      className="h-screen grid place-items-center bg-cover bg-center"
      style={{ backgroundImage: "url('./bg.jpg')" }}
    >
      <div>
        <h1 className="text-8xl">AX-SH</h1>
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
        </IconsContainer>
      </div>
    </section>
  );
};
