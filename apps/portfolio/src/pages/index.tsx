import React from 'react';
// import { HeroSection } from '../app/containers/HeroSection';
import { ExternalLinks } from '@ax-sh.github.io/common';
// import { WorkSection } from '../app/containers/WorkSection';
import Nav from '../app/components/Nav';
import clsx from "clsx";

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
  return <section className={clsx("container grid grid-cols-2 pt-30")}>
    <div className={"flex flex-col gap-3"}>
      <h1 className={"text-9xl"}><span>Axmin</span>  Shrestha</h1>
      <strong className={"text-xl"}>// About Me</strong>
      <h2 className={"text-3xl"}>Experienced Web Developer remotely from Nepal</h2>
      <p>Im a Creative Web Developer, Expert in responsive design, aesthetics, simplicity, and utility.
        Interested in making things that people want, need, or desire.</p>
    </div>
    <div></div>
  </section>;
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
