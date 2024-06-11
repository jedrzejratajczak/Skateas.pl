import Image from 'next/image';

import { NextSectionButton } from '../NextSectionButton';
import { Title } from '../Title';

export function SecondSection() {
  return (
    <div className="flex flex-col gap-2.5 overflow-hidden p-5">
      <Title
        titleClassName="text-[#7DD2FB] -left-3.5"
        subtitleClassName="-top-1 left-3.5"
        title="Akademia"
        subtitle="Skateboardingu"
        withExclamations
      />
      <div className="relative">
        <Image
          src="/images/homepage/board1.png"
          alt="Dekoracyjny obrazek deskorolki"
          width={200}
          height={200}
          className="absolute -left-28 -top-40 scale-x-[-1]"
        />
        <p className="my-5 px-[15px] text-center font-roboto text-xs text-white">
          Akademia skateboardingu jest idealnym miejscem zarówno dla tych,
          którzy chcą postawić pierwsze kroki na deskorolce, jak i&nbsp;dla
          tych, którzy pragną rozwijać swoje umiejętności pod okiem
          doświadczonych instruktorów. Podczas zajęć skupiamy się nie tylko
          na&nbsp;technikach jazdy, ale również na ważnych aspektach takich jak:
          uważność i&nbsp;bezpieczeństwo w otoczeniu, budowanie dobrych relacji
          z&nbsp;rówieśnikami, szacunek do innych, pokonywanie własnych barier
          oraz zwalczanie słabości. Dołącz do nas i&nbsp;odkryj radość
          z&nbsp;jazdy na&nbsp;deskorolce!
        </p>
        <Image
          src="/images/homepage/board2.png"
          alt="Dekoracyjny obrazek deskorolki"
          width={130}
          height={130}
          className="absolute -bottom-32 -right-20 -rotate-12 scale-x-[-1]"
        />
      </div>
      <div className="grid grid-cols-3 gap-2.5 p-3 text-center font-poetsen-one text-xs text-[#FBD24D]">
        <p>Różne grupy wiekowe</p>
        <p>Zajęcia na każdym poziomie</p>
        <p>Doświadczony instruktor</p>
      </div>
      <NextSectionButton sectionId="thirdSection" />
    </div>
  );
}
