import Layout from '../components/layout';

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
	return (
		<Layout>
			<Hero />
			<About />
			{/* work
			project 
			contact 
			*/}
		</Layout>
	);
}

export default Index;
