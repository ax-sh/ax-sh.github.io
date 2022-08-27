import { DefaultSeo } from 'next-seo';
import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.scss';
import 'virtual:windi.css';
import 'virtual:windi-devtools';
import SEO from '../next-seo.config';

function PortfolioApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<DefaultSeo {...SEO} />
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
