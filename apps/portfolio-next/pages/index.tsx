import Layout from '../components/layout';
import Image from 'next/image';
import useLayoutEffect from '../hooks/use-isomorphic-layout-effect';
import React from 'react';
import { Icon } from '@ax-sh.github.io/common';
import { siSimpleicons } from 'simple-icons/icons';

const isProduction = process.env.NODE_ENV === 'production';

// import sign from './sign.png';
function Hero() {
	return (
		<section>
			<h1>Axmin Shrestha</h1>
		</section>
	);
}
function About() {
	return (
		<section id="about" className="">
			<h2>{"I'm Axmin Shrestha"}</h2>
			<p></p>
			{/* experience */}
		</section>
	);
}

export function Index() {
	useLayoutEffect(() => {
		console.log('Hello there');
	}, []);
	if (isProduction) {
		return 'coming soon';
	}
	return (
		<Layout>
			<Icon name="react" src={siSimpleicons.svg} />
			{/* <Image src={sign} layout="responsive" alt="im" /> */}
			{/* <Hero /> */}
			{/* <About /> */}
			{/* work
			project 
			contact 
			*/}
		</Layout>
	);
}

export default Index;
