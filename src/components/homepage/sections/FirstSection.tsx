import Image from 'next/image';

export function FirstSection() {
  return (
    <div className="grid grid-cols-3 items-center py-3 pl-5">
      <div className="col-span-2 flex flex-col gap-2.5 py-3 pr-1">
        <div>
          <p className="font-poetsen-one text-4xl text-[#FBD24D]">Sezon 2024</p>
          <p className="relative -top-6 left-[70px]">
            <span className="font-poetsen-one text-2xl text-[#FFFFFF]">
              rozpoczęty
            </span>
            <span
              className="font-poetsen-one text-4xl text-transparent"
              style={{ WebkitTextStroke: '2px #FFFFFF' }}
            >
              !
            </span>
          </p>
        </div>
        <p className="font-roboto text-xs text-[#FFFFFF]">
          Czy Twoje dziecko marzy o&nbsp;przygodzie na&nbsp;deskorolce? Zapisz
          je&nbsp;na&nbsp;zajęcia skateboardingu w&nbsp;nowym sezonie i&nbsp;daj
          mu&nbsp;szansę na rozwijanie umiejętności, zdobywanie pewności siebie
          i&nbsp;poznawanie nowych przyjaciół! Niech Twój maluch odkryje radość
          z&nbsp;aktywności na świeżym powietrzu i&nbsp;zaprzyjaźni się
          z&nbsp;deską już dziś!
        </p>
        <button className="m-auto my-1 rounded-[50px] border border-[#FABE24] bg-[#FBD24D] px-2 py-1 text-sm text-[#404040]">
          Zapisy &gt;&gt;
        </button>
      </div>
      <div className="relative h-[255px] overflow-hidden">
        <Image
          src="/images/skate.webp"
          alt=""
          className="col-span-1 rounded-s-full"
          layout="fill"
          objectFit="cover"
          objectPosition="left"
        />
      </div>
    </div>
  );
}
