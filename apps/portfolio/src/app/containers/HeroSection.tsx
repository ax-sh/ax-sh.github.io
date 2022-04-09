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
  Jinja,
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
  Shell,
  Tsnode,
  Typescript,
} from '@icons-pack/react-simple-icons';

export const HeroSection = () => {
  return (
    <section
      className="h-screen grid place-items-center bg-cover bg-center"
      style={{ backgroundImage: "url('./bg.jpg')" }}
    >
      <div>
        <h1 className="text-8xl">AX-SH</h1>
        <h2>Languages</h2>
        <div className={'flex justify-items-center flex-wrap gap-2'}>
          <Javascript />
          <Typescript />
          <Nodedotjs />
          <Tsnode />
          <Python />
          <Java />
          <Go />
          <Gnubash />
        </div>
        <h2>Stacks</h2>
        <div className={'flex gap-2'}>
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
        </div>
      </div>
    </section>
  );
};
