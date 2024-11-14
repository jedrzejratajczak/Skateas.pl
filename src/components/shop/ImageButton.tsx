import Image from 'next/image';
import Link from 'next/link';

import { Description } from './Description';
import { ImageButtonProps } from './Sets';

export function ImageButton({ href, src, alt, text }: ImageButtonProps) {
  return (
    <Link href={href}>
      <Image src={src} alt={alt} style={{ maxWidth: '100%', height: 'auto' }} />
      <Description text={text} />
    </Link>
  );
}
