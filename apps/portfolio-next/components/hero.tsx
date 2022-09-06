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
			start: 'top center',
			end: 'bottom top',
			trigger: '#animate',
			markers: true,
			invalidateOnRefresh: true,
			scrub: true,
		},
	});
}

// export function useTimeline(options) {
// 	return React.useMemo<gsap.core.Timeline>(() => gsap.timeline(options), [options]);
// }
export const useTimeline = (options = {}) => {
	const tl = React.useRef<gsap.core.Timeline>(gsap.timeline(options));

	React.useEffect(() => () => tl.current && tl.current.kill(), []);

	return tl.current;
};

export default function Hero({ className, ...props }: HeroProps) {
	const tween = React.useRef<gsap.core.Timeline>(null);
	const ref = React.useRef<HTMLDivElement>();
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
		tl.to(ref.current, { duration: 1, xPercent: 30 });

		// return () => {
		// 	tween.current.kill();
		// };
	}, []);
	return (
		<section className={clsx('hero overflow-hidden', className)} {...props}>
			<div className="h-screen"></div>
			<div ref={ref} id="animate" className="h-full w-full bg-blue-400 text-9xl">
				GSAP
			</div>
		</section>
	);
}
