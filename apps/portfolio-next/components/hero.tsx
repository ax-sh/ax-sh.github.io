import React from 'react';
import clsx from 'clsx';
import gsap from 'gsap';

type HeroProps = React.ComponentPropsWithoutRef<'section'>;

export default function Hero({ className, ...props }: HeroProps) {
	const tween = React.useRef(gsap.timeline({ paused: true }));
	const ref = React.useRef();

	React.useEffect(() => {
		tween.current.to(ref.current, { duration: 1, x: 100, y: 100 });

		return () => {
			tween.current.kill();
		};
	}, []);
	return (
		<section className={clsx('hero', className)} {...props}>
			uoooo
		</section>
	);
}
