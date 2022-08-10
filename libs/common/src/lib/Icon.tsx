// import { siSimpleicons, siReact } from 'simple-icons/icons';
import SVG, { Props as SVGProps } from 'react-inlinesvg';
import React from 'react';
enum IconNames {
	react,
}
type IconProps = { name?: keyof typeof IconNames; src: string };
export const Icon = React.forwardRef<SVGElement, IconProps>(({ src, name, ...props }, ref) => {
	switch (name) {
		default:
			return <SVG innerRef={ref} src={src} {...props} />;
	}
});
