'use client';

import { useLayoutEffect } from 'react';

import gsap from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function TimelineSection() {
  gsap.registerPlugin(ScrollTrigger);
  useLayoutEffect(() => {
    const tl = gsap.timeline({
      paused: true,
      scrollTrigger: {
        trigger: '[data-section-1]',
        endTrigger: '[data-section-3]',
        scrub: true,
        markers: true,
        end: 'bottom'
      }
      // scrollTrigger: {
      //   trigger: '.start',
      //   start: 'top top',
      //   end: '+=500',
      //   markers: true,
      //   invalidateOnRefresh: true
      // }
    });
    // tl.to('#fallingMoog', {
    //   opacity: 1,
    //   x: 30,
    //   y: () => 395, // calculate your value
    //   rotation: '+=720',
    //   duration: 2,
    //   ease: 'bounce.out'
    // });
    // tl.to('#bubble1', {
    //   opacity: 1,
    //   x: -60,
    //   duration: 0.5
    // });

    tl.to('[data-scrub]', { xPercent: 0, yPercent: 0 });
    tl.addLabel('section-1');
    tl.to('[data-scrub]', { xPercent: 0, yPercent: 200 });
    tl.addLabel('section-2');
    tl.to('[data-scrub]', { xPercent: 200, yPercent: 0 });
    tl.addLabel('section-3');

    return () => tl.scrollTrigger.kill();
  }, []);
  return (
    <section>
      <div data-wrap>
        <section
          data-section-1
          className='w-screen h-screen bg-teal-400 text-white flex items-center justify-center text-3xl'
        >
          Content Section 1
        </section>
        <section
          data-section-2
          className='w-screen h-64 bg-blue-400 text-white flex items-center justify-center text-3xl'
        >
          Content Section 2
        </section>
        <section
          data-section-3
          className='w-screen h-screen bg-purple-400 text-white flex items-center justify-center text-3xl'
        >
          Content Section 3
        </section>
      </div>
      <section className='fixed inset-0'>
        <div data-scrub className='w-20 h-20 rounded-full bg-white text-gray-900 text-xs'>
          Scrubbing
        </div>
      </section>
      <section className='w-screen h-screen bg-gray-900 text-white flex items-center justify-center text-3xl'>
        Footer
      </section>
    </section>
  );
}
