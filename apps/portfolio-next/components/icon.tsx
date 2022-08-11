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
	return;
}
const Icon = React.forwardRef<SVGElement, Omit<SVGProps, 'src'> & IconProps>(
	({ name, ...props }, ref) => {
		props.width = 62;

		console.log(siTypescript);

		switch (name) {
			case 'react_query':
				return <SVG innerRef={ref} src={siReactquery.svg} {...props} />;
			case 'rhf':
				return <SVG innerRef={ref} src={siReacthookform.svg} {...props} />;
			case 'typescript':
				return (
					<SVG
						innerRef={ref}
						src={siTypescript.svg}
						color={`#${siTypescript.hex}`}
						fill={`#${siTypescript.hex}`}
						{...props}
					/>
				);
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
