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
			start: 'top top',
			end: 'bottom center',
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
		// tween.current.to(ref.current, { duration: 1, xPercent: 100, y: 100 });
		tween.current.to(ref.current, { duration: 1, x: 100, y: 100 });

		return () => {
			tween.current.kill();
		};
	}, []);
	return (
		<section className={clsx('hero over flow-hidden', className)} {...props}>
			<div ref={ref}>GSAP</div>
		</section>
	);
}
