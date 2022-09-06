import React from 'react';

export function useArrayRef(): [React.MutableRefObject<any[]>, (ref: any) => void] {
	const refs = React.useRef<any[]>([]);
	refs.current = [];
	return [refs, (ref: any) => ref && refs.current.push(ref)];
}
