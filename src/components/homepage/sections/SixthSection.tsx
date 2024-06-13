import Image from 'next/image';

import { TripleExclamationMark } from '../TripleExclamationMark';

export function SixthSection() {
  return (
    <div className="flex flex-col gap-5 overflow-hidden p-5">
      <div className="relative -left-7 text-center">
        <p className="font-poetsen-one text-4xl text-[#D7B3FD]">
          Masz pytania?
        </p>
        <p className="relative -top-1 left-[70px] font-poetsen-one text-2xl text-white">
          Napisz do mnie!
        </p>
      </div>
      <div className="flex items-center gap-4">
        <div className="my-3 flex flex-col gap-4 text-left font-roboto text-xs text-white">
          <p>
            Cześć! Mam na imię Adam i{' '}
            <span className="text-[#FFC600]">
              jeżdżę na deskorolce od 13 lat
            </span>
            . To, co zaczęło się jako prosta zajawka, stało się nieodłączną
            częścią mojego życia. Deskorolka nie tylko daje mi ogromną radość
            z&nbsp;jazdy, ale również zmieniła mój sposób postrzegania świata.
            Dzięki niej poznałem wspaniałych ludzi z&nbsp;różnych zakątków
            Polski i&nbsp;świata oraz odwiedziłem wiele nowych miejsc.
          </p>
          <p>
            <span className="text-[#FFC600]">
              Od 2021 roku uczę jazdy na deskorolce
            </span>
            , aby dzielić się swoją pasją z&nbsp;innymi i&nbsp;pokazać,
            co&nbsp;najbardziej urzekło mnie w skateboardingu. Obecnie
            <span className="text-[#FFC600]">
              {' '}
              jestem licencjonowanym instruktorem Polish Skate Federation{' '}
            </span>
            i prowadzę: regularne zajęcia we Wrocławiu, warsztaty dla szkół
            i&nbsp;fundacji, zajęcia wyjazdowe w różnych miastach.
          </p>
          <p>
            Jako instruktor współpracuję również z&nbsp;największymi obozami
            deskorolkowymi w&nbsp;Europie,{' '}
            <span className="text-[#FFC600]">Woodcamp</span>.
          </p>
        </div>
        <div className="relative">
          <TripleExclamationMark className="-left-[30%] -top-8" />
          <div className="flex h-[280px] w-[100px] flex-shrink-0 flex-col justify-end gap-2.5 overflow-hidden rounded-full bg-[#FBD24D]">
            <p className="text-center font-poetsen-one text-2xl text-[#0C4A6E]">
              Adam
            </p>
            <div className="relative top-2 h-[200px]">
              <Image
                src="/images/adam.png"
                alt=""
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="text-center font-poetsen-one text-xs text-white">
        <p>
          „OGROMNĄ CZĘŚCIĄ SKATEBOARDINGU, ZARÓWNO FIZYCZNIE, JAK I KULTUROWO,
          JEST ODKRYWANIE RZECZY, O KTÓRYCH NIE WIEDZIAŁEŚ, ŻE ICH SZUKASZ”
        </p>
        <p>...</p>
        <p>JACK SABBACK</p>
      </div>
    </div>
  );
}
