import { type ComponentProps } from 'react'
import Image from 'next/image'

export function ImageContain(props: ComponentProps<typeof Image>) {
  return <Image fill={true} objectFit={'contain'} {...props} />
}
