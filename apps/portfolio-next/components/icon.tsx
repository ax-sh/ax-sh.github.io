import {
	siReactquery,
	siReact,
	siNextdotjs,
	siReacthookform,
	siThreedotjs,
	siTypescript,
} from 'simple-icons/icons';
import SVG, { Props as SVGProps } from 'react-inlinesvg';
import React from 'react';
enum IconNames {
	react,
	next,
	three,
	rhf,
	react_query,
	typescript,
}
type IconProps = { name?: keyof typeof IconNames };

function getIcon(name: keyof typeof IconNames) {
	switch (name) {
		case 'react_query':
			return siReactquery;
		case 'rhf':
			return siReacthookform;
		case 'three':
			return siThreedotjs;
		case 'react':
			return siReact;
		case 'next':
			return siNextdotjs;
		case 'typescript':
			return siTypescript;
		default:
			return name;
	}
}
const Icon = React.forwardRef<SVGElement, Omit<SVGProps, 'src'> & IconProps>(
	({ name, ...props }, ref) => {
		props.width = 62;
		const icon = getIcon(name);

		console.log(icon);

		return <SVG innerRef={ref} src={icon.svg} fill={`#${icon.hex}`} {...props} />;
	}
);
Icon.displayName = 'Icon';

export { Icon };
