import React from 'react';
import { ExternalLinks } from '@ax-sh.github.io/common';
import Nav from '../app/components/Nav';
import Hero from '../app/containers/Hero';

const Layout = ({
  children,
  className,
  ...props
}: React.AllHTMLAttributes<HTMLElement>) => {
  return (
    <div className={`Layout ${className} relative`} {...props}>
      <header>
        <Nav />
      </header>
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
      <Hero />
      {/*<HeroSection />*/}
      {/*<WorkSection />*/}
    </Layout>
  );
}
export default App;
