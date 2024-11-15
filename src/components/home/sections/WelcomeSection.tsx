import Image from 'next/image';

import { Button } from '../Button';
import { ExclamationMark } from '../ExclamationMark';
import SectionContainer from '../SectionContainer';

function LeftSide() {
  const startOfTheYear = new Date().getMonth() + 1 <= 6;
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex max-w-[180px] flex-col gap-2.5 py-3 pr-1 min-[375px]:max-w-none md:gap-8">
      <div>
        <p className="text-nowrap font-poetsen-one text-4xl text-[#FBD24D] sm:text-5xl xl:text-8xl">
          Sezon {currentYear}
        </p>
        <p
          className={`relative -top-6 font-poetsen-one xl:-top-10 ${startOfTheYear ? 'left-[70px] xl:left-[130px]' : 'left-[140px] sm:left-[180px] xl:left-[350px]'}`}
        >
          <span className="text-2xl text-white sm:text-4xl xl:text-7xl">
            {startOfTheYear ? 'rozpoczęty' : 'trwa'}
          </span>
          <ExclamationMark className="text-4xl sm:text-5xl xl:text-8xl" />
        </p>
      </div>
      <p className="font-roboto text-xs text-white sm:text-base xl:text-xl">
        Szukasz zajawki? Atrakcyjna aktywność na&nbsp;powietrzu? Nowa pasja?
        Jesteś w&nbsp;dobrym miejscu! Akademia Skateboardingu gwarantuje rozwój
        umiejętności, bezpieczną aktywność fizyczną, zdobywanie pewności siebie,
        przełamywanie barier i&nbsp;poznawanie nowych przyjaciół. Zapoznaj się
        z&nbsp;ofertą i&nbsp;postaw na&nbsp;nową, wspaniałą przygodę
        na&nbsp;deskorolce!
      </p>
      <Button color="orange" className="m-auto mt-5">
        Zapisy na zajęcia &gt;&gt;
      </Button>
    </div>
  );
}

function RightSide() {
  return (
    <div className="relative -right-5 h-[300px] w-[150px] min-[425px]:w-[200px] sm:-right-10 sm:h-[400px] sm:w-[250px] md:-right-16 md:h-[400px] md:w-[300px] lg:h-[450px] lg:w-[400px] xl:absolute xl:right-0 xl:h-[550px] xl:w-[450px] 2xl:w-[500px] min-[2000px]:w-[700px] min-[2300px]:w-[800px]">
      <Image
        src="/home/skate.webp"
        alt="Adam skaczący na deskorolce"
        className="pointer-events-none rounded-s-full"
        fill
        priority
        sizes="100vw"
        style={{ objectFit: 'cover', objectPosition: 'left' }}
      />
    </div>
  );
}

export function WelcomeSection() {
  return (
    <SectionContainer className="grid grid-cols-[2fr,1fr] items-center">
      <LeftSide />
      <RightSide />
    </SectionContainer>
  );
}
