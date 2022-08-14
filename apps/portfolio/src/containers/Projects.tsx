import React from 'react';
import { TbExternalLink } from 'react-icons/tb';
type ProjectProps = {
	name: string;
	link: string;
	image: string | null;
	external?: boolean;
};

const projects: ProjectProps[] = [
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
		link: 'https://reinvented-gardenia-45c.notion.site/Projects-b61ea900922b48dfb4bb805606d7a37a',
		image: null,
		external: true,
	},
];
function Project({ link, name, external, image }: ProjectProps) {
	return (
		<a
			className="cursor-pointer text-3xl hover:opacity-60 "
			target="_blank"
			rel="noreferrer"
			href={link}
		>
			<div className="project  flex flex-col">
				<div className="flex-grow relative overflow-hidden h-42">
					{external && (
						<span className="absolute right-2 top-2">
							<TbExternalLink />
						</span>
					)}
					<img
						className="h-full w-full aspect-video object-cover"
						src={image ? image : 'https://source.unsplash.com/ZInLhWJCZTI'}
						alt="project"
					/>
				</div>
				<h3 className="py-3">{name}</h3>
			</div>
		</a>
	);
}

export default function Projects() {
	return (
		<section className={'container min-h-screen py-9'}>
			<h2 className="text-5xl py-9">Projects</h2>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-3">
				{projects.map((i: ProjectProps, index) => (
					<React.Fragment key={index}>
						<Project {...i} />
					</React.Fragment>
				))}
			</div>
		</section>
	);
}
