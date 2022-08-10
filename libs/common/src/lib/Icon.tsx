import SVG from 'react-inlinesvg';
import { siSimpleicons, siReact } from 'simple-icons/icons';

enum IconNames {
	react,
}

type IconProps = { name?: string };
export function Icon(name: IconProps) {
	return 'hello';
	// switch (name) {
	// 	case 'react':
	// 		return <SVG src={siReact.svg} />;
	// 	default:
	// 		return <SVG src={siSimpleicons.svg} />;
	// }
}
