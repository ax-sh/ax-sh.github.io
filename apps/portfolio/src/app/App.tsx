import React from 'react';
import Obfuscate from 'react-obfuscate';
import { List } from './components/List';
import { GetIcon } from './components/Icons';

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
            {<GetIcon name={label} />}
          </Obfuscate>
        </li>
      ))}
    </ul>
  </div>
);

const View = () => {
  return (
    <div
      className="grid place-items-center bg-cover bg-center"
      style={{ backgroundImage: "url('./bg.jpg')" }}
    >
      <h1 className="text-8xl">AX-SH</h1>
    </div>
  );
};

const Nav = () => {
  const [items] = React.useState(['HOME', 'CONTACT', 'ABOUT']);
  return (
    <nav className="flex justify-end p-4 bg-white text-black">
      <List className="flex w-56 justify-between ">
        {items.map((item) => (
          <a className="hover:text-red-500" href="#home">
            {item}
          </a>
        ))}
      </List>
    </nav>
  );
};
const Layout = ({
  children,
  className,
  ...props
}: React.AllHTMLAttributes<HTMLElement>) => {
  return (
    <div className={`Layout ${className} relative`} {...props}>
      <header>{/* <Nav /> */}</header>
      <main className="min-h-screen flex children:flex-grow">{children}</main>
      <footer className="fixed bottom-0 right-0 p-10">
        <ExternalLinks />
      </footer>
    </div>
  );
};

function App() {
  return (
    <Layout className={`App bg-black text-white`}>
      <View />
    </Layout>
  );
}
export default App;
