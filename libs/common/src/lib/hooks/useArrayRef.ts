import React from 'react';

export function useArrayRef<T = HTMLElement>(): [React.MutableRefObject<T[]>, (ref: T) => void] {
	const refs = React.useRef<T[]>([]);
	refs.current = [];
	return [refs, (ref: T) => ref && refs.current.push(ref)];
}
