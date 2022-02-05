import React from 'react';

const View = () => {
  return (
    <div className="grid place-items-center">
      <h1 className="text-6xl">AX-SH</h1>
    </div>
  );
};
const List = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  return (
    <ul className={`list ${className}`} {...props}>
      {React.Children.map(children, (child, index) => {
        return <li key={index}>{child}</li>;
      })}
    </ul>
  );
};

const Nav = () => {
  const [items] = React.useState(['HOME', 'CONTACT', 'ABOUT']);
  return (
    <nav className="flex justify-end p-4 bg-white text-black">
      <List className="flex w-80 justify-between ">
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
    <div className={`Layout ${className}`} {...props}>
      <header>
        <Nav />
      </header>
      <main className="min-h-screen flex children:flex-grow">{children}</main>
      <footer></footer>
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
