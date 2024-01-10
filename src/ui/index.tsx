import { ComponentProps } from 'react';
import Image from 'next/image';

export function ImageContain({ alt, ...props }: ComponentProps<typeof Image>) {
  return (
    <Image style={{ objectFit: 'contain', objectPosition: 'bottom' }} alt={alt} fill {...props} />
  );
}
