import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

const useScrollTrigger = (vars: ScrollTrigger.StaticVars) => {
	const scrollTriggerRef = React.useRef(new ScrollTrigger(vars));
	useEffect(() => {
		const trigger = scrollTriggerRef.current;
		console.log(trigger);
		return () => {
			trigger.kill();
		};
	});

	return {};
};

export default useScrollTrigger;
