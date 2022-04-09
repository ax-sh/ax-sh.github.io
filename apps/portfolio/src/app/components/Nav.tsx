import React from "react";
import {List} from "./List";

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
