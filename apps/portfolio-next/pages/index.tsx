import Layout from '../components/layout';
import Image from 'next/image';
import useLayoutEffect from '../hooks/use-isomorphic-layout-effect';

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
		console.log('hello there');
	}, []);
	return (
		<Layout>
			{process.env.NODE_ENV}
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
