import Layout from '../components/layout';
import Image from 'next/image';
import useLayoutEffect from '../hooks/use-isomorphic-layout-effect';
import React from 'react';
import { Icon } from '../components/icon';
import clsx from 'clsx';
import { ClientSide, Contact } from '@ax-sh.github.io/common';
import useIsomorphicLayoutEffect from '../hooks/use-isomorphic-layout-effect';

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

const Icons = ({ ...props }) => {
	return (
		<div {...props}>
			<Icon name="typescript" />
			<Icon name="react" />
			<Icon name="next" />
			<Icon name="rhf" />
			<Icon name="three" />
			<Icon name="react_query" />
		</div>
	);
};

export function Index() {
	useLayoutEffect(() => {
		console.log('Hello there');
	}, []);

	if (isProduction) {
		return (
			<ClientSide>
				<Contact />
			</ClientSide>
		);
	}
	return (
		<Layout className="container pt-10">
			<Icons className={clsx('flex flex-wrap p-5 rounded-md bg-white gap-5')} />
			{/* <Image src={sign} layout="responsive" alt="im" /> */}
			{/* <Hero /> */}
			{/* <About /> */}
			{/* work
			project 
			contact 
			*/}
			<ClientSide>
				<Contact />
			</ClientSide>
		</Layout>
	);
}

export default Index;
