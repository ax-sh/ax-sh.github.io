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

export interface IconsWrapperProps
  extends React.HTMLAttributes<HTMLDivElement> {
  size: number;
}

function IconsWrapper({ children, size, ...props }: IconsWrapperProps) {
  return (
    <div {...props}>
      {React.Children.map(children, (child: any) =>
        React.cloneElement(child, { size })
      )}
    </div>
  );
}

export const HeroSection = () => {
  return (
    <section
      className="h-screen grid place-items-center bg-cover bg-center"
      style={{ backgroundImage: "url('./bg.jpg')" }}
    >
      <div>
        <h1 className="text-8xl">AX-SH</h1>
        <div className={"bg-black bg-opacity-50 p-2 rounded-md flex flex-col gap-6"}>


        <h2 className="text-4xl">Programming Languages</h2>
        <div className={'flex justify-items-center flex-wrap gap-2'}>
          <IconsWrapper size={48} className={'flex gap-4 '}>
            <Javascript />
            <Typescript />
            <Nodedotjs />
            <Tsnode />
            <Python />
            <Java />
            <Go />
            <Gnubash />
          </IconsWrapper>
        </div>     </div>
        <h2 className="text-4xl">My Current Stacks</h2>
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
