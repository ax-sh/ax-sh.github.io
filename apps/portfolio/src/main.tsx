import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'virtual:windi.css';
import 'virtual:windi-devtools';

import App from './app/App';
import ReactGA from 'react-ga';

const VITE_GOOGLE_ANALYTICS_TOKEN = import.meta.env.VITE_GOOGLE_ANALYTICS_TOKEN;

let debug = false;
if (import.meta.env.DEV) {
  debug = true;
  console.log('env', import.meta.env);
}

ReactGA.initialize(VITE_GOOGLE_ANALYTICS_TOKEN as string, { debug });
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root')
);
