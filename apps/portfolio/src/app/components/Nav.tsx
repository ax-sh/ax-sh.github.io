import React from 'react';
import { List } from './List';

export default function Nav() {
  const [items] = React.useState(['HOME', 'CONTACT', 'ABOUT']);
  return (
    <nav className="flex justify-between p-10 fixed w-full">
      <div>Axmin Shrestha</div>
      <List className="flex w-56 justify-between ">
        {items.map((item) => (
          <a className="hover:text-red-500" href="#home">
            {item}
          </a>
        ))}
      </List>
    </nav>
  );
}
