import Image from "next/legacy/image";
import Link from 'next/link';

import { Description } from './Description';
import { ImageButtonProps } from './Sets';

export function ImageButton({ href, src, alt, text }: ImageButtonProps) {
  return (
    <Link href={href}>
      <Image src={src} alt={alt} />
      <Description text={text} />
    </Link>
  );
}
