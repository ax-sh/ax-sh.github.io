import { List } from '@ax-sh.github.io/common';
import React from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
export default function Nav() {
	const [items] = React.useState(['SKILLS', 'CONTACT', 'ABOUT']);
	return (
		<nav className="fixed w-full">
			<div className={'container flex flex-col md:flex-row justify-between items-center py-10'}>
				<Link to={'/'}>
					<div className={'text-xl'}>
						<span className={'text-[#F71735]'}>Ax</span>min{' '}
						<span className={'text-[#03F7EB]'}>Sh</span>restha
					</div>
				</Link>
				<List className="flex gap-3 justify-between p-4">
					{items.map((item, index) => (
						<Link
							className="hover:text-red-500 cursor-pointer"
							key={index}
							to={`#${item.toLowerCase()}`}
						>
							{item}
						</Link>
					))}
				</List>
			</div>
		</nav>
	);
}
