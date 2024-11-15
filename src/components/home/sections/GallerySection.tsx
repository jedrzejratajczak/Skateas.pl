import Link from 'next/link';

import { DoubleGreaterThanMark } from '../DoubleGreaterThanMark';
import { GalleryPill } from '../GalleryPill';
import SectionContainer from '../SectionContainer';
import { Title } from '../Title';

export function GallerySection() {
  return (
    <SectionContainer className="flex flex-col gap-8 pb-0 text-xs text-white sm:pb-0 sm:text-base lg:pb-0 xl:text-xl">
      <Link
        href="/galeria"
        className="flex items-center justify-center gap-8 md:gap-12"
      >
        <Title
          title="Zobacz"
          titleClassName="text-sky-300"
          subtitle="galerię"
          subtitleClassName="left-8"
        />
        <DoubleGreaterThanMark className="text-[54px] md:text-[72px]" />
      </Link>
      <div className="flex h-[240px] justify-between gap-5 overflow-hidden sm:h-[310px] md:h-[360px]">
        <GalleryPill src="/home/mini-gallery/gallery1.webp" />
        <GalleryPill
          className="top-10"
          src="/home/mini-gallery/gallery2.webp"
        />
        <GalleryPill
          className="hidden lg:block"
          src="/home/mini-gallery/gallery3.webp"
        />
        <GalleryPill
          className="top-10 hidden lg:block"
          src="/home/mini-gallery/gallery4.webp"
        />
      </div>
    </SectionContainer>
  );
}
