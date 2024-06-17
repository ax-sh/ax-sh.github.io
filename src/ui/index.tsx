import type { ImageProps } from "next/image";
import Image from "next/image";

export function ImageContain({ alt, ...props }: ImageProps) {
  return (
    <Image style={{ objectFit: "contain", objectPosition: "bottom" }} alt={alt} fill {...props} />
  );
}
