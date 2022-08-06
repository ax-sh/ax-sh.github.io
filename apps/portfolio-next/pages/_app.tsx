import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';

function PortfolioApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Axmin Shrestha | Portfolio</title>
			</Head>
			<main className="app">
				<Component {...pageProps} />
			</main>
		</>
	);
}

export default PortfolioApp;
