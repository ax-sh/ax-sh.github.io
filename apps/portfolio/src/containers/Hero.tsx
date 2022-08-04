import clsx from 'clsx';
import React from 'react';

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
            <span className={'text-[#F71735]'}>Experienced Web Developer</span>{' '}
            {/*Working Remotely from Nepal*/}
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
    </section>
  );
}