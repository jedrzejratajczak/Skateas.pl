import Link from 'next/link';

import { PersonPill } from '../PersonPill';
import { Quote } from '../Quote';
import SectionContainer from '../SectionContainer';
import { Title } from '../Title';

export function AboutTeacherSection() {
  return (
    <SectionContainer className="flex flex-col items-center justify-center gap-5">
      <Title
        id="instruktor"
        titleClassName="text-[#FBD24D] -left-[10px]"
        subtitleClassName="-top-1 left-[70px]"
        title="Kilka słów"
        subtitle="o mnie"
      />
      <div className="flex items-center gap-4 lg:gap-10">
        <div className="flex flex-col gap-4 font-roboto text-xs text-white sm:text-base xl:text-xl">
          <p>
            Cześć!{' '}
            <span className="text-[#FFC600]">
              Na deskorolce jeżdzę już od&nbsp;2009&nbsp;roku.{' '}
            </span>
            To,&nbsp;co&nbsp;zaczęło się&nbsp;jako prosta zajawka, stało
            się&nbsp;nieodłączną częścią mojego życia. Deskorolka daje
            mi&nbsp;ogromną radość, a&nbsp;dzięki niej zmieniłem postrzeganie
            świata, poznałem dużo wspaniałych ludzi i&nbsp;odwiedziłem wiele
            ciekawych miejsc.{' '}
            <span className="text-[#FFC600]">
              A&nbsp;teraz chcę się&nbsp;tym&nbsp;dzielić z&nbsp;innymi!
            </span>
          </p>
          <p>
            Zajęcia prowadzę od 2021 roku. Posiadam{' '}
            <Link href="TODO" className="text-[#FFC600]">
              certyfikat licencjonowanego instruktora Polish Skate Federation.{' '}
            </Link>
            Współpracuję z największymi obozami deskorolkowymi w Europie -{' '}
            <span className="text-[#FFC600]">Woodcamp.</span>
          </p>
          <div>
            <p>W mojej ofercie znajdziesz:</p>
            <ul className="relative left-3 mb-4 list-inside list-disc">
              <li>regularne zajęcia we&nbsp;Wrocławiu,</li>
              <li>warsztaty dla&nbsp;szkół i&nbsp;fundacji,</li>
              <li>zajęcia wyjazdowe w&nbsp;różnych miastach.</li>
            </ul>
          </div>
          <Quote className="mt-11 hidden md:block" />
        </div>
        <PersonPill withExclamationMarkRightTop />
      </div>
      <Quote className="max-w-[450px] md:hidden md:max-w-full" />
    </SectionContainer>
  );
}
