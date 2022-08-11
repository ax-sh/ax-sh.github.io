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
const Icon = React.forwardRef<SVGElement, Omit<SVGProps, 'src'> & IconProps>(
	({ name, ...props }, ref) => {
		props.width = 62;
		switch (name) {
			case 'react_query':
				return <SVG innerRef={ref} src={siReactquery.svg} {...props} />;
			case 'rhf':
				return <SVG innerRef={ref} src={siReacthookform.svg} {...props} />;
			case 'typescript':
				return <SVG innerRef={ref} src={siTypescript.svg} {...props} />;
			case 'three':
				return <SVG innerRef={ref} src={siThreedotjs.svg} {...props} />;
			case 'react':
				return <SVG innerRef={ref} src={siNextdotjs.svg} {...props} />;
			case 'next':
				return <SVG innerRef={ref} src={siReact.svg} {...props} />;
			default:
				return name;
		}
	}
);
Icon.displayName = 'Icon';

export { Icon };
