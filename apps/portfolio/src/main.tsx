import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import routes from '~react-pages';
import 'virtual:windi.css';
import 'virtual:windi-devtools';
import './styles.scss';
// import App from './app/App';
import ReactGA from 'react-ga';
import React from 'react';

const VITE_GOOGLE_ANALYTICS_TOKEN = import.meta.env.VITE_GOOGLE_ANALYTICS_TOKEN;

let debug = false;
if (import.meta.env.DEV) {
	debug = true;
	console.log('env', import.meta.env);
	// eslint-disable-next-line no-console
	console.log(routes);
}

ReactGA.initialize(VITE_GOOGLE_ANALYTICS_TOKEN as string, { debug });
ReactGA.pageview(window.location.pathname + window.location.search);

function Application() {
	return <React.Suspense fallback={<p>Loading...</p>}>{useRoutes(routes)}</React.Suspense>;
}

ReactDOM.render(
	<StrictMode>
		<BrowserRouter>
			<Application />
		</BrowserRouter>
	</StrictMode>,
	document.getElementById('root')
);
