import React from 'react';
import { ExternalLinks } from '@ax-sh.github.io/common';
import { WineHeroSection } from './containers/WineHeroSection';

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

// function NavBar() {
//   return (
//     <nav className={'flex justify-around p-10 fixed w-full'}>
//       TRAVEL
//       <List className={'md:flex gap-4 hidden'}>
//         <a>ABOUT</a>
//         <a>CONTACT US</a>
//         <a>WORKS</a>
//       </List>
//       <List className={'flex gap-4'}>
//         <a>LOG IN</a> | <a>SIGN UP</a>
//       </List>
//     </nav>
//   );
// }

function App() {
  return (
    <Layout className={`App bg-black text-white`}>
      <WineHeroSection />

      {/*<HeroSection />*/}
      {/*<WorkSection />*/}
    </Layout>
  );
}
export default App;
