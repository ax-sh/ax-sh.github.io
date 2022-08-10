import {
	siReactquery,
	siReact,
	siNextdotjs,
	siReacthookform,
	siThreedotjs,
} from 'simple-icons/icons';
import SVG, { Props as SVGProps } from 'react-inlinesvg';
import React from 'react';
enum IconNames {
	react,
	next,
	three,
	// r3f,
	react_query,
}
type IconProps = { name?: keyof typeof IconNames };
const Icon = React.forwardRef<SVGElement, Omit<SVGProps, 'src'> & IconProps>(
	({ name, ...props }, ref) => {
		props.width = 62;
		switch (name) {
			case 'react_query':
				return <SVG innerRef={ref} display="" src={siReactquery.svg} {...props} />;
			case 'three':
				return <SVG innerRef={ref} display="" src={siThreedotjs.svg} {...props} />;
			case 'react':
				return <SVG innerRef={ref} display="" src={siNextdotjs.svg} {...props} />;
			case 'next':
				return <SVG innerRef={ref} display="" src={siReact.svg} {...props} />;
			default:
				return name;
		}
	}
);
Icon.displayName = 'Icon';

export { Icon };
