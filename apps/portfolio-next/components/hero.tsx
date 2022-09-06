import React from 'react';
import clsx from 'clsx';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useIsomorphicLayoutEffect, useArrayRef } from '@ax-sh.github.io/common';
gsap.registerPlugin(ScrollTrigger);

type HeroProps = React.ComponentPropsWithoutRef<'section'>;

function getTimeline() {
	return gsap.timeline({
		paused: true,
		scrollTrigger: {
			start: 'top center',
			end: 'bottom 20%',
			// end: 'bottom top',
			trigger: '#animate',
			// markers: true,
			invalidateOnRefresh: true,
			scrub: true,
		},
	});
}

// sScrollTrigger.create();

// export function useTimeline(options) {
// 	return React.useMemo<gsap.core.Timeline>(() => gsap.timeline(options), [options]);
// }
export const useTimeline = (options = {}) => {
	const tl = React.useRef<gsap.core.Timeline>(gsap.timeline(options));

	React.useEffect(() => () => tl.current && tl.current.kill(), []);

	return tl.current;
};

// function useScrollTriggerTimeline() {
// 	React.useEffect();
// }

export default function Hero({ className, ...props }: HeroProps) {
	const tween = React.useRef<gsap.core.Timeline>(null);
	const e = React.useRef<HTMLDivElement>();
	const [refs, ref] = useArrayRef<HTMLElement>();
	// const tl = useTimeline({
	// 	paused: true,
	// 	scrollTrigger: {
	// 		start: 'top center',
	// 		end: 'bottom top',
	// 		trigger: '#animate',
	// 		markers: true,
	// 		invalidateOnRefresh: true,
	// 		scrub: true,
	// 	},
	// });

	useIsomorphicLayoutEffect(() => {
		const tl = (tween.current = getTimeline());
		// tween.current.to(ref.current, { duration: 1, xPercent: 100, y: 100 });
		tl.to(e.current, { xPercent: 30 });

		// return () => {
		// 	tween.current.kill();
		// };
		refs.current.forEach((i) => {
			gsap
				.timeline({
					scrollTrigger: {
						trigger: i,
						scrub: true,
						markers: true,
						id: 'ko',
						start: 'top center',
						end: 'bottom 20%',
						// pin: true, //NOTE:Pin is wonky but works great
					},
				})
				.to(i, { x: 200 });
			// .fromTo(i, { x: 200 }, { x: 0 });
		});
	}, []);
	return (
		<section className={clsx('hero overflow-hidden', className)} {...props}>
			<div className="h-screen"></div>
			<div ref={e} id="animate" className="h-full w-full bg-blue-400 text-9xl">
				GSAP
			</div>
			{[1, 2, 3, 4, 5].map((i) => (
				<div ref={ref} key={i}>
					Hello {i}
				</div>
			))}
		</section>
	);
}
