import React from 'react';
// import { HeroSection } from '../app/containers/HeroSection';
import { ExternalLinks } from '@ax-sh.github.io/common';
// import { WorkSection } from '../app/containers/WorkSection';
import Nav from '../app/components/Nav';

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

function Hero() {
  return <section></section>;
}

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
