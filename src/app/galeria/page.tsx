import Image from 'next/image';

import { SectionContainer } from '@/components/home';
import { QuestionFormSection, Title } from '@/home';

const fotoConfig = [
  'row-span-2',
  'aspect-[120/90]',
  'aspect-[120/90]',
  'col-span-2 aspect-[260/100]',
  'aspect-[120/90]',
  'aspect-[120/90]',
  'col-span-2 row-span-2 aspect-[120/90]',
  'aspect-[120/90]',
  'row-span-2',
  'aspect-[120/90]',
  'col-span-2 aspect-[260/100]',
  'aspect-[120/90]',
  'aspect-[120/90]',
  'col-span-2 row-span-2 aspect-[120/90]'
];

const photos = [
  '/home/gallery/gallery1.webp',
  '/home/gallery/gallery2.webp',
  '/home/gallery/gallery3.webp',
  '/home/gallery/gallery4.webp',
  '/home/gallery/gallery5.webp',
  '/home/gallery/gallery6.webp',
  '/home/gallery/gallery7.webp',
  '/home/gallery/gallery8.webp',
  '/home/gallery/gallery9.webp',
  '/home/gallery/gallery10.webp',
  '/home/gallery/gallery11.webp',
  '/home/gallery/gallery12.webp',
  '/home/gallery/gallery13.webp',
  '/home/gallery/gallery14.webp'
];

export default function Gallery() {
  return (
    <>
      <SectionContainer className="m-auto flex max-w-[950px] flex-col text-center font-roboto text-xs text-white sm:text-base xl:text-xl">
        <Title title="Galeria" titleClassName="text-[#5EE9D3]" />
        <p className="mt-10">
          Zarzyj do naszej galerii zdjęć, aby zobaczyć niesamowite chwile z
          życia Akademii Skateboardingu! Znajdziesz tu ujęcia z naszych zajęć,
          warsztatów, wyjazdów oraz zawodów.
        </p>
        <p className="mb-10">
          Zobacz, jak nasi uczniowie rozwijają swoje umiejętności, zdobywają
          nowe triki i świetnie się bawią w gronie rówieśników. Każde zdjęcie to
          mała opowieść o pasji, przygodzie i radości z jazdy na deskorolce!
        </p>
        <div className="grid grid-cols-2 gap-3 sm:gap-5">
          {photos.map((photo, index) => (
            <div key={photo} className={`relative ${fotoConfig[index]}`}>
              <Image
                src={photo}
                alt=""
                className="pointer-events-none"
                fill
                sizes="100vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>
      </SectionContainer>
      <QuestionFormSection />
    </>
  );
}
