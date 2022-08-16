import React from 'react';
import clsx from 'clsx';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useIsomorphicLayoutEffect } from '@ax-sh.github.io/common';
gsap.registerPlugin(ScrollTrigger);
type HeroProps = React.ComponentPropsWithoutRef<'section'>;

function getTimeline() {
	return gsap.timeline({
		paused: true,
		scrollTrigger: {
			trigger: '.hero',
			start: 'top bottom',
			end: 'bottom +=20%',
			markers: true,
			invalidateOnRefresh: true,
			scrub: true,
		},
	});
}

export default function Hero({ className, ...props }: HeroProps) {
	const tween = React.useRef<gsap.core.Timeline>(getTimeline());
	const ref = React.useRef<HTMLDivElement>();

	useIsomorphicLayoutEffect(() => {
		tween.current.to(ref.current, { duration: 1, xPercent: 100, y: 100 });

		return () => {
			tween.current.kill();
		};
	}, []);
	return (
		<section className={clsx('hero overflow-hidden', className)} {...props}>
			<div ref={ref}>GSAP</div>
		</section>
	);
}
