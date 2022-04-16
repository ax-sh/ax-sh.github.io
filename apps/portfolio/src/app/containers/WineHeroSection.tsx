import { List } from '../components/List';
import { Facebook, Instagram, Twitter } from '@icons-pack/react-simple-icons';
import React from 'react';

function NavBar() {
  return (
    <nav className={'flex justify-around p-10 fixed w-full'}>
      <div className={'flex gap-4'}>
        WI NE
        {/*<button>DISCOVER</button>*/}
      </div>

      <List className={'flex gap-4'}>
        <a>
          <Facebook />
          {/*FACEBOOK*/}
        </a>
        <a>
          <Instagram />
          {/*INSTAGRAM*/}
        </a>
        <a>
          <Twitter />
          {/*TWITTER*/}
        </a>
      </List>
      <List className={'flex gap-4'}>ENGLISH</List>
    </nav>
  );
}

function MiddleGrid() {
  return (
    <div className={'h-full w-full'}>
      <video
        src={'/wine.mp4'}
        muted
        autoPlay
        loop
        className={'block h-full w-full object-contain m-auto'}
      />
    </div>
  );
}

function ScrollDownSection() {
  return (
    <div className={'absolute bottom-0 w-full text-center p-4'}>
      <span className={'text-xs bg-black pb-2 border-b border-red-600'}>
        SCROLL DOWN
      </span>
    </div>
  );
}

function RightGrid() {
  return (
    <div className={'grid grid-rows-2'}>
      <div className={'row-start-2 row-span-1 p-10 flex flex-col gap-10'}>
        <div className={'h-full w-1/2 bg-white text-black p-5 rounded-md'}>
          The Story Of Our Wines
        </div>
      </div>
    </div>
  );
}

function OurWinesButton() {
  return (
    <button className={'bg-red-600 px-20 py-5 rounded-sm'}>Our Wines</button>
  );
}

function LeftGrid() {
  return (
    <div className={'grid grid-rows-2'}>
      <div className={'row-start-3 p-10 flex flex-col gap-10'}>
        <h5 className={'text-xs uppercase'}>Italian Wine since 1555</h5>
        <h4 className={'text-5xl'}>The Great Italian Wines With A History</h4>
        <OurWinesButton />
      </div>
    </div>
  );
}

export function WineHeroSection() {
  return (
    <>
      <NavBar />
      <section className={'min-h-screen md:h-screen relative flex flex-col'}>
        <div className={'h-30 md:h-0'}></div>
        <div className={'flex-grow md:grid grid-cols-3 grid-rows-1 h-full'}>
          <LeftGrid />
          <MiddleGrid />
          <RightGrid />
        </div>
        <ScrollDownSection />
      </section>
    </>
  );
}
