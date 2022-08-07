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
		<div className="project">
			<a href={link}>{name}</a>
		</div>
	);
}

export function Projects() {
	return (
		<section className={'h-screen grid place-items-center'}>
			<h2>Projects</h2>
			<div>
				{projects.map((i: ProjectProps, index) => (
					<React.Fragment key={index}>
						<Project {...i} />
					</React.Fragment>
				))}
			</div>
		</section>
	);
}
