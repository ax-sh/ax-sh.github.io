import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
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

function About() {
  return <section>About</section>;
}

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="about" element={<About />} />
        {/*<Route path="contact" element={<Contact />} />*/}
      </Routes>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root')
);
