'use client';
import 'react-multi-carousel/lib/styles.css';

import Image from 'next/image';
import Carousel from 'react-multi-carousel';

import SectionContainer from '../SectionContainer';
import { Title } from '../Title';

const commentPairs = [
  ['/home/comments/comment5.webp', '/home/comments/comment2.webp'],
  ['/home/comments/comment8.webp', '/home/comments/comment4.webp'],
  ['/home/comments/comment6.webp', '/home/comments/comment3.webp'],
  ['/home/comments/comment7.webp', '/home/comments/comment1.webp']
];

export function CommentsSection() {
  return (
    <SectionContainer className="flex flex-col">
      <div className="relative">
        <Title
          titleClassName="text-[#5EE9D3] md:-left-16"
          subtitleClassName="-top-1 left-3.5 md:left-10"
          title="Poznaj opinie"
          subtitle="o akademii"
          decorationClassName="-top-[12px] sm:-top-[20px] left-[calc(50%+120px)]"
          withExclamations
        />
      </div>
      <div className="relative mt-9 pb-12">
        <Carousel
          responsive={{
            desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
            tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
            mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
          }}
          arrows={false}
          swipeable
          draggable
          infinite
          className="m-auto"
          containerClass="container"
          renderDotsOutside
          autoPlaySpeed={10000}
          autoPlay
          showDots
        >
          {commentPairs.map(comments => (
            <div
              key={comments[0]}
              className="flex h-full flex-col justify-center gap-4 p-2"
            >
              {comments.map(src => (
                <Image
                  key={src}
                  src={src}
                  alt=""
                  width="0"
                  height="0"
                  className="pointer-events-none h-auto w-full rounded-3xl"
                  sizes="100vw"
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              ))}
            </div>
          ))}
        </Carousel>
      </div>
    </SectionContainer>
  );
}
