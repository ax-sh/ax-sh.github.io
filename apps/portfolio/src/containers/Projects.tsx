import React from 'react';
import { TbExternalLink } from 'react-icons/tb';
type ProjectProps = {
	name: string;
	link: string;
	image: string | null;
	external?: boolean;
};

const projects: ProjectProps[] = [
	{ name: 'Innicement', link: 'https://ax-sh.github.io/innicement/', image: null },
	{ name: 'Xenovrs', link: 'https://statuesque-semolina-a1b399.netlify.app/', image: null },
	{
		name: 'Works',
		link: 'https://reinvented-gardenia-45c.notion.site/Projects-b61ea900922b48dfb4bb805606d7a37a',
		image: null,
		external: true,
	},
];
function Project({ link, name, external, image }: ProjectProps) {
	return (
		<div className="project hover:opacity-60 h-30 relative">
			<a className="cursor-pointer text-3xl" target="_blank" rel="noreferrer" href={link}>
				{external && (
					<span className="absolute right-2 top-2">
						<TbExternalLink />
					</span>
				)}
				<img
					className="h-full w-full aspect-video	object-cover"
					src={image ? image : 'https://source.unsplash.com/ZInLhWJCZTI'}
					alt="project"
				/>
				<h3 className="py-3">{name}</h3>
			</a>
		</div>
	);
}

export default function Projects() {
	return (
		<section className={'container min-h-screen  py-9'}>
			<h2 className="text-5xl">Projects</h2>
			<div className="grid grid-cols-3 gap-3">
				{projects.map((i: ProjectProps, index) => (
					<React.Fragment key={index}>
						<Project {...i} />
					</React.Fragment>
				))}
			</div>
		</section>
	);
}
