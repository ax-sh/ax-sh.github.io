import clsx from 'clsx';
import React from 'react';
import {
  Git,
  Gnubash,
  Javascript,
  Nodedotjs,
  Python,
  Typescript,
} from '@icons-pack/react-simple-icons';
import { List } from '../components/List';
import ReactTooltip from 'react-tooltip';

function HireMeButton() {
  return (
    <button
      className={clsx(
        'hidden md:block md:h-30 md:w-30 w-full md:rounded-full bg-white text-black',
        'text-xl font-bold transform md:-translate-x-1/2 ',
        'self-center'
      )}
    >
      Hire Me
    </button>
  );
}

function IconWithToolTipWrapper({ children, name }: any) {
  return (
    <div className={'cursor-pointer'}>
      <span data-tip data-for={name}>
        {children}
      </span>
      <ReactTooltip id={name} type={'dark'} effect="solid">
        <span className={'capitalize'}>{name}</span>
      </ReactTooltip>
    </div>
  );
}

function IconWithToolTip({ name, ...iconProps }: { name: any }) {
  switch (name) {
    case 'git':
      return       <IconWithToolTipWrapper name={name}>
        <Git {...iconProps} />
      </IconWithToolTipWrapper>
    case 'nodejs':
      return (
        <IconWithToolTipWrapper name={name}>
          <Nodedotjs {...iconProps} />
        </IconWithToolTipWrapper>
      );
    case 'bash':
      return (
        <IconWithToolTipWrapper name={name}>
          <Gnubash {...iconProps} />
        </IconWithToolTipWrapper>
      );
    case 'python':
      return (
        <IconWithToolTipWrapper name={name}>
          <Python {...iconProps} />
        </IconWithToolTipWrapper>
      );
    case 'typescript':
      return (
        <IconWithToolTipWrapper name={name}>
          <Typescript {...iconProps} />
        </IconWithToolTipWrapper>
      );
    default:
      return (
        <IconWithToolTipWrapper name={name}>
          <Javascript {...iconProps} />
        </IconWithToolTipWrapper>
      );
  }
}

function Skills() {
  const iconProps = { size: 30 };
  return (
    <div className={'skills flex flex-col gap-2 py-4'}>
      <div>Proficient in</div>
      <List className={'flex gap-4'}>
        <IconWithToolTip name={'git'} {...iconProps} />
        <IconWithToolTip name={'javascript'} {...iconProps} />
        <IconWithToolTip name={'typescript'} {...iconProps} />
        <IconWithToolTip name={'nodejs'} {...iconProps} />
        <IconWithToolTip name={'python'} {...iconProps} />
        <IconWithToolTip name={'bash'} {...iconProps} />
      </List>
    </div>
  );
}

export default function Hero() {
  return (
    <section className={clsx('container')}>
      <div className={' grid grid-span-1 md:grid-cols-2 '}>
        <div className={'flex flex-col gap-3 col-span-1 pt-30'}>
          <h1 className={'text-9xl'}>
            Axmin <span className={'text-8xl'}>Shrestha</span>
          </h1>
          <strong className={'text-xl font-light'}>// About Me</strong>
          <h2 className={'text-3xl'}>
            Experienced Web Developer remotely from Nepal
          </h2>
          <p>
            Im a Creative Web Developer. Expert in Responsive design,
            aesthetics, simplicity, and utility. Interested in making things
            that people want, need, or desire.
          </p>
        </div>
        <div className={'col-span-1 bg-[#111]  order-first md:order-none '}>
          <div
            style={{ backgroundImage: "url('./bg.jpg')" }}
            className={'w-full h-full pt-30 flex items-center'}
          >
            <HireMeButton />
          </div>
        </div>
      </div>
      <Skills />
    </section>
  );
}
