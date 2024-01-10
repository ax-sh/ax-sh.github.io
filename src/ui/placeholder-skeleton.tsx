'use client';
import { useMemo } from 'react';

// WARNING: This is not a drop in replacement solution and
// it might not work for some edge cases. Test your code!
const pad = (str: string, pad: number, custom = '-') => {
  const prePad = Math.floor((pad - str.length) / 2) + str.length;
  return str.padStart(prePad, custom).padEnd(pad, custom);
};

export function PlaceholderSkeleton({ length }: { length: string | number }) {
  const placeholder = useMemo(
    () => pad('', typeof length === 'string' ? length.length : length),
    [length]
  );
  return (
    <span className={'pointer-events-none text-transparent bg-gray-200 animate-pulse rounded'}>
      {placeholder}
    </span>
  );
}
