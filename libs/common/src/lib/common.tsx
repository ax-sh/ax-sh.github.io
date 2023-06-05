import './common.module.scss';
import { GetIcon } from './Icons';
import React from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Obfuscate from 'react-obfuscate';
import { useIsomorphicLayoutEffect } from './hooks/use-isomorphic-layout-effect';

export type ProjectProps = {
	name: string;
	link: string;
	image: string | null;
	external?: boolean;
};

export const PROJECTS: ProjectProps[] = [
	{
		name: 'Innicement',
		link: 'https://ax-sh.github.io/innicement/',
		image: 'projects/innicement.png',
	},
	{
		name: 'Xenovrs',
		link: 'https://statuesque-semolina-a1b399.netlify.app/',
		image: 'projects/xenovrs.png',
	},
	{
		name: 'Works',
		link: 'bit.ly/4418VWz',
		// link: 'https://ax-sh.notion.site/Projects-b61ea900922b48dfb4bb805606d7a37a',
		image: null,
		external: true,
	},
];

const data = {
	email: 'example@example.com',
	// cv: "",
	links: {
		Github: 'https://github.com/ax-sh',
		LinkedIn: 'https://www.linkedin.com/in/axmin/',
		CodeSandbox: 'https://codesandbox.io/u/ax-sh',
		Twitter: 'https://twitter.com/ax___sh',
		Email: 'mailto:axmin.shrestha@pm.me',
		// Website: 'https://ax-sh.github.io/portfolio/',
		// CV: "",
	},
};

export const ExternalLinks = () => (
	<div className="links">
		<ul className="flex w-60 justify-between pointer-events-auto">
			{Object.entries(data.links).map(([label, value]) => (
				<li key={label}>
					<Obfuscate target="_blank" href={value}>
						<GetIcon name={label} />
					</Obfuscate>
				</li>
			))}
		</ul>
	</div>
);

export function ClientSide({ children }: React.PropsWithChildren<Record<string, unknown>>) {
	const [mounted, setMounted] = React.useState(false);

	useIsomorphicLayoutEffect(() => {
		setMounted(true);
	}, []);
	if (!mounted) return null;

	return children as React.ReactElement;
}
