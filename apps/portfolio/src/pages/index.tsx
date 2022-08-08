import React from 'react';
import Nav from '../components/Nav';
import Hero from '../containers/Hero';
import Skills from '../containers/Skills';
import Projects from '../containers/Projects';
import Contact from '../containers/Contact';
import Footer from '../components/Footer';

const Layout = ({ children, className, ...props }: React.AllHTMLAttributes<HTMLElement>) => {
	return (
		<div className={`Layout ${className} relative`} {...props}>
			<header>
				<Nav />
			</header>
			{/*<main className="min-h-screen flex children:flex-grow">{children}</main>*/}
			<main className="min-h-screen">{children}</main>
			<Footer />
		</div>
	);
};

function App() {
	return (
		<Layout className={`App bg-black text-white flex flex-col gap-9`}>
			<Hero />
			<Skills />
			<Projects />
			{/* <WorkSection /> */}
			<Contact />
		</Layout>
	);
}

export default App;
