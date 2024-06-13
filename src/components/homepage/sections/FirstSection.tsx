import Image from 'next/image';

import { Button } from '../Button';
import { ExclamationMark } from '../ExclamationMark';

export function FirstSection() {
  return (
    <div className="grid grid-cols-3 items-center py-3 pl-5">
      <div className="col-span-2 flex flex-col gap-2.5 py-3 pr-1">
        <div className="font-poetsen-one">
          <p className="text-4xl text-[#FBD24D]">Sezon 2024</p>
          <p className="relative -top-6 left-[70px]">
            <span className="text-2xl text-white">rozpoczęty</span>
            <ExclamationMark className="text-4xl" />
          </p>
        </div>
        <p className="font-roboto text-xs text-white">
          Czy Twoje dziecko marzy o&nbsp;przygodzie na&nbsp;deskorolce? Zapisz
          je&nbsp;na&nbsp;zajęcia skateboardingu w&nbsp;nowym sezonie i&nbsp;daj
          mu&nbsp;szansę na rozwijanie umiejętności, zdobywanie pewności siebie
          i&nbsp;poznawanie nowych przyjaciół! Niech Twój maluch odkryje radość
          z&nbsp;aktywności na świeżym powietrzu i&nbsp;zaprzyjaźni się
          z&nbsp;deską już dziś!
        </p>
        <Button color="orange" className="m-auto my-1">
          Zapisy &gt;&gt;
        </Button>
      </div>
      <div className="relative h-[255px] overflow-hidden">
        <Image
          src="/images/skate.webp"
          alt="Adam skaczący na deskorolce"
          className="rounded-s-full"
          layout="fill"
          objectFit="cover"
          objectPosition="left"
        />
      </div>
    </div>
  );
}
