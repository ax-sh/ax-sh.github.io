import React from 'react';
import { List } from './List';

export default function Nav() {
  const [items] = React.useState(['SKILLS', 'CONTACT', 'ABOUT']);
  return (
    <nav className="fixed w-full">
      <div className={'container flex justify-between items-center py-10'}>
        <div><span className={"text-red"}>Ax</span>min <span className={"text-[#03F7EB]"}>Sh</span>restha</div>
        <List className="flex gap-3 justify-between p-4">
          {items.map((item) => (
            <a className="hover:text-red-500 cursor-pointer">{item}</a>
          ))}
        </List>
      </div>
    </nav>
  );
}
