import React from 'react';
import {
	Antdesign,
	Apollographql,
	Bootstrap,
	Codesandbox,
	Git,
	Github,
	Gnubash,
	Graphql,
	Javascript,
	Linkedin,
	Mui,
	Nextdotjs,
	Nodedotjs,
	Nx,
	Python,
	ReactJs,
	Redux,
	Reduxsaga,
	Tailwindcss,
	Threedotjs,
	Twitter,
	Typescript,
	Maildotru,
} from '@icons-pack/react-simple-icons';
// import { MdAlternateEmail}
import { SiD3Dotjs, SiMinutemailer } from 'react-icons/si';
import ReactTooltip from 'react-tooltip';

export function GetIcon({ name }: { name: string }) {
	const [hovered, setHover] = React.useState(false);
	const props = {
		onMouseOver: () => setHover(true),
		onMouseOut: () => setHover(false),
		color: hovered ? 'gray' : 'white',
	};

	switch (name) {
		case 'LinkedIn':
			return <Linkedin {...props} />;
		case 'CodeSandbox':
			return <Codesandbox {...props} />;
		case 'Twitter':
			return <Twitter {...props} />;
		case 'Github':
			return <Github {...props} />;
		case 'Email':
			return <Maildotru {...props} />;
		default:
			return <h1>{name}</h1>;
	}
}

export interface IconsWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
	size: number;
}

export function IconsWrapper({ children, size, ...props }: IconsWrapperProps) {
	return (
		<div {...props}>
			{React.Children.map(children, (child: any) => React.cloneElement(child, { size }))}
		</div>
	);
}

function IconWithToolTipWrapper({ children, name }: any) {
	return (
		<div className={'cursor-pointer'}>
			<span data-tip={true} data-for={name}>
				{children}
			</span>
			<ReactTooltip id={name} type={'dark'} effect="solid">
				<span className={'capitalize'}>{name}</span>
			</ReactTooltip>
		</div>
	);
}

export function IconWithToolTip({ name, ...iconProps }: { name: any }) {
	switch (name) {
		//   <Nodemon />
		//   <Jira />
		//   <Puppeteer />

		case 'd3':
			return (
				<IconWithToolTipWrapper name={name}>
					<SiD3Dotjs {...iconProps} />
				</IconWithToolTipWrapper>
			);
		case 'mui':
			return (
				<IconWithToolTipWrapper name={name}>
					<Mui {...iconProps} />
				</IconWithToolTipWrapper>
			);
		case 'nx':
			return (
				<IconWithToolTipWrapper name={name}>
					<Nx {...iconProps} />
				</IconWithToolTipWrapper>
			);
		case 'ant.design':
			return (
				<IconWithToolTipWrapper name={name}>
					<Antdesign {...iconProps} />
				</IconWithToolTipWrapper>
			);
		case 'three.js':
			return (
				<IconWithToolTipWrapper name={name}>
					<Threedotjs {...iconProps} />
				</IconWithToolTipWrapper>
			);
		case 'apollo.graphql':
			return (
				<IconWithToolTipWrapper name={name}>
					<Apollographql {...iconProps} />
				</IconWithToolTipWrapper>
			);

		case 'graphql':
			return (
				<IconWithToolTipWrapper name={name}>
					<Graphql {...iconProps} />
				</IconWithToolTipWrapper>
			);
		case 'redux':
			return (
				<IconWithToolTipWrapper name={name}>
					<Redux {...iconProps} />
				</IconWithToolTipWrapper>
			);
		case 'redux.saga':
			return (
				<IconWithToolTipWrapper name={name}>
					<Reduxsaga {...iconProps} />
				</IconWithToolTipWrapper>
			);

		case 'bootstrap':
			return (
				<IconWithToolTipWrapper name={name}>
					<Bootstrap {...iconProps} />
				</IconWithToolTipWrapper>
			);
		case 'tailwind':
			return (
				<IconWithToolTipWrapper name={name}>
					<Tailwindcss {...iconProps} />
				</IconWithToolTipWrapper>
			);
		case 'git':
			return (
				<IconWithToolTipWrapper name={name}>
					<Git {...iconProps} />
				</IconWithToolTipWrapper>
			);
		case 'next.js':
			return (
				<IconWithToolTipWrapper name={name}>
					<Nextdotjs {...iconProps} />
				</IconWithToolTipWrapper>
			);
		case 'react.js':
			return (
				<IconWithToolTipWrapper name={name}>
					<ReactJs {...iconProps} />
				</IconWithToolTipWrapper>
			);
		case 'nodejs':
			return (
				<IconWithToolTipWrapper name={name}>
					<Nodedotjs {...iconProps} />
				</IconWithToolTipWrapper>
			);
		case 'bash':
			return (
				<IconWithToolTipWrapper name={name}>
					<Gnubash {...iconProps} />
				</IconWithToolTipWrapper>
			);
		case 'python':
			return (
				<IconWithToolTipWrapper name={name}>
					<Python {...iconProps} />
				</IconWithToolTipWrapper>
			);
		case 'typescript':
			return (
				<IconWithToolTipWrapper name={name}>
					<Typescript {...iconProps} />
				</IconWithToolTipWrapper>
			);
		case 'javascript':
			return (
				<IconWithToolTipWrapper name={name}>
					<Javascript {...iconProps} />
				</IconWithToolTipWrapper>
			);
		default:
			return <IconWithToolTipWrapper name={name}>{name}</IconWithToolTipWrapper>;
	}
}
