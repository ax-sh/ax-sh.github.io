import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { BrowserRouter, useRoutes } from 'react-router-dom';
import routes from '~react-pages';
import 'virtual:windi.css';
import 'virtual:windi-devtools';
import './styles.scss';
// import App from './app/App';
import ReactGA from 'react-ga';
import React from 'react';

const VITE_GOOGLE_ANALYTICS_TOKEN = 'G-N6207193QM'; //import.meta.env.VITE_GOOGLE_ANALYTICS_TOKEN;

let debug = false;
if (import.meta.env.DEV) {
	debug = true;
	console.log('env', import.meta.env);
	// eslint-disable-next-line no-console
	console.log(routes);
}

ReactGA.initialize(VITE_GOOGLE_ANALYTICS_TOKEN as string, { debug });
ReactGA.pageview(window.location.pathname + window.location.search);

function Loader() {
	return (
		<section className="loader h-screen grid place-content-center">
			<p className="text-4xl">Loading...</p>
		</section>
	);
}

function Application() {
	return <React.Suspense fallback={<Loader />}>{useRoutes(routes)}</React.Suspense>;
}

const container = document.getElementById('root');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(
	<StrictMode>
		<BrowserRouter>
			<Application />
		</BrowserRouter>
	</StrictMode>
);
