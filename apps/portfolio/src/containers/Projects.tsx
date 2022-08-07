import React from 'react';

type ProjectProps = {
	name: string;
	link: string;
	image: string | null;
};

const projects: ProjectProps[] = [
	{ name: 'Innicement', link: 'https://ax-sh.github.io/innicement/', image: null },
];
function Project({ link, name }: ProjectProps) {
	return (
		<div className="project hover:opacity-60 h-30">
			<a className="cursor-pointer text-3xl" target="_blank" rel="noreferrer" href={link}>
				<img
					className="h-full w-full aspect-video	object-cover"
					src="https://source.unsplash.com/ZInLhWJCZTI"
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
			<div className="grid grid-cols-3">
				{projects.map((i: ProjectProps, index) => (
					<React.Fragment key={index}>
						<Project {...i} />
					</React.Fragment>
				))}
			</div>
		</section>
	);
}
