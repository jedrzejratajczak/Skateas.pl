import { SectionContainer } from '@/components/home';
import { QuestionFormSection, Title } from '@/home';

function GallerySection() {
  const fotoConfig = [
    'row-span-2',
    '',
    '',
    'col-span-2',
    '',
    '',
    'col-span-2 row-span-2',
    '',
    'row-span-2',
    '',
    'col-span-2',
    '',
    '',
    'col-span-2 row-span-2'
  ];

  const photos = [''];

  return (
    <div className="grid grid-cols-2 gap-4">
      {photos.map(photo => (
        <div className={`${fotoConfig}`} key={photo} />
      ))}
    </div>
  );
}

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
        <p>
          Zobacz, jak nasi uczniowie rozwijają swoje umiejętności, zdobywają
          nowe triki i świetnie się bawią w gronie rówieśników. Każde zdjęcie to
          mała opowieść o pasji, przygodzie i radości z jazdy na deskorolce!
        </p>
        <GallerySection />
      </SectionContainer>
      <QuestionFormSection />
    </>
  );
}
