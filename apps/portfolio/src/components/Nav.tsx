import { List } from '@ax-sh.github.io/common';
import React from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
export default function Nav() {
	const [items] = React.useState([
		'SKILLS',
		'CONTACT',
		//   'ABOUT',
	]);
	return (
		<nav className="fixed w-full pointer-events-none">
			<div className={'container flex flex-col md:flex-row justify-between items-center py-10'}>
				<Link to={'/'}>
					<div className={'text-xl pointer-events-auto'}>
						<span className={'text-[#F71735]'}>Ax</span>min{' '}
						<span className={'text-[#03F7EB]'}>Sh</span>restha
					</div>
				</Link>
				<List className="flex gap-3 justify-between p-4 pointer-events-auto">
					{items.map((item, index) => (
						<a
							className="hover:text-red-500 cursor-pointer"
							key={index}
							href={`#${item.toLowerCase()}`}
						>
							{item}
						</a>
					))}
					<a
						className="hover:text-red-500 cursor-pointer"
						href="https://reinvented-gardenia-45c.notion.site/Projects-b61ea900922b48dfb4bb805606d7a37a"
						target="_blank"
						rel="noreferrer"
					>
						WORKS
					</a>
				</List>
			</div>
		</nav>
	);
}
