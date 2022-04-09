import React from 'react';
import Obfuscate from 'react-obfuscate';

import { HeroSection } from './containers/HeroSection';
import { GetIcon } from '@ax-sh.github.io/common';
import { WorkSection } from './containersWorkSection';

const data = {
  email: 'example@example.com',
  // cv: "",
  links: {
    Github: 'https://github.com/ax-sh',
    LinkedIn: 'https://www.linkedin.com/in/axmin/',
    CodeSandbox: 'https://codesandbox.io/u/ax-sh',
    Twitter: 'https://twitter.com/ax___sh',
    Website: 'https://ax-sh.github.io/portfolio/',
    // CV: "",
  },
};

export const ExternalLinks = () => (
  <div className="links">
    <ul className="flex w-50 justify-around">
      {Object.entries(data.links).map(([label, value]) => (
        <li key={label}>
          <Obfuscate target="_blank" href={value}>
            <GetIcon name={label} />
          </Obfuscate>
        </li>
      ))}
    </ul>
  </div>
);

const Layout = ({
  children,
  className,
  ...props
}: React.AllHTMLAttributes<HTMLElement>) => {
  return (
    <div className={`Layout ${className} relative`} {...props}>
      <header>{/* <Nav /> */}</header>
      {/*<main className="min-h-screen flex children:flex-grow">{children}</main>*/}
      <main className="min-h-screen">{children}</main>
      <footer className="fixed bottom-0 right-0 p-10">
        <ExternalLinks />
      </footer>
    </div>
  );
};

function App() {
  return (
    <Layout className={`App bg-black text-white`}>
      <HeroSection />
      <WorkSection />
    </Layout>
  );
}
export default App;
