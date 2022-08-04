import React from 'react';
import { List } from './List';
import { Link } from 'react-router-dom';

export default function Nav() {
  const [items] = React.useState(['SKILLS', 'CONTACT', 'ABOUT']);
  return (
    <nav className="fixed w-full">
      <div className={'container flex justify-between items-center py-10'}>
        <Link to={'/'}>
          <div className={'text-xl'}>
            <span className={'text-[#F71735]'}>Ax</span>min{' '}
            <span className={'text-[#03F7EB]'}>Sh</span>restha
          </div>{' '}
        </Link>
        <List className="flex gap-3 justify-between p-4">
          {items.map((item) => (
            <a className="hover:text-red-500 cursor-pointer">{item}</a>
          ))}
        </List>
      </div>
    </nav>
  );
}
