import type { Metadata } from 'next';
import Image from 'next/image';
import { IoLogoFacebook, IoLogoInstagram } from 'react-icons/io5';

export const metadata: Metadata = {
  title:
    'Wyjazdy jednodniowe na skateparki | Zajęcia z deskorolki dla dzieci Wrocław',
  description:
    'Wyjazdy jednodniowe na skateparki w Polsce dla młodych skaterów. Zwiedzaj nowe miejsca i rozwijaj umiejętności na deskorolce. Aktywność na świeżym powietrzu.',
  keywords:
    'wyjazdy skateboard, skateparki Polska, zajęcia z deskorolki dla dzieci, aktywność na świeżym powietrzu, nauka jazdy na deskorolce'
};

import {
  PhoneNumber,
  QuestionFormSection,
  SectionContainer,
  Title
} from '@/components/home';

export default function Trips() {
  return (
    <>
      <SectionContainer className="grid grid-cols-[2fr,1fr] items-center xl:min-h-[600px] xl:gap-10">
        <div className="flex max-w-[180px] flex-col gap-6 py-3 pr-1 min-[375px]:max-w-none md:gap-12">
          <Title
            title="Wyjazdy"
            subtitle="jednodniowe"
            titleClassName="text-[#7DD2FB] min-[425px]:-left-4 md:-left-10"
            subtitleClassName="min-[425px]:left-6 md:left-10"
          />
          <p className="font-roboto text-xs text-white sm:text-base xl:text-xl">
            Co jakiś czas organizujemy tripy – jednodniowe wyjazdy na skateparki
            w różnych miastach, takich jak Rawicz, Leszno, Opole i wiele innych.
            To doskonała okazja dla młodych skaterów, aby odkrywać nowe miejsca,
            doskonalić swoje umiejętności na różnych rampach i przeszkodach,
            oraz spędzać czas w gronie pasjonatów deskorolki. Dołącz do nas i
            przeżyj niezapomniane skateboardingowe przygody!
          </p>
        </div>
        <div className="relative -right-5 h-[300px] w-[150px] min-[425px]:w-[200px] sm:-right-10 sm:h-[400px] sm:w-[250px] md:-right-16 md:h-[400px] md:w-[300px] lg:h-[450px] lg:w-[400px] xl:absolute xl:right-0">
          <Image
            src="/home/offers/offer1.webp"
            alt="Adam skaczący na deskorolce"
            className="pointer-events-none rounded-s-full"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'left' }}
          />
        </div>
      </SectionContainer>
      <SectionContainer className="relative flex flex-col gap-5 md:gap-8">
        <Title
          titleClassName="text-[#5EE9D3]"
          title="Dla kogo?"
          decorationClassName="left-[calc(50%+88px)] top-0 md:-top-3 md:left-[calc(50%+130px)]"
          withQuestionsLeft
        />
        <p className="text-center font-roboto text-xs text-white sm:text-base xl:text-xl">
          Nasze wyjazdy jednodniowe są{' '}
          <span className="font-bold">otwarte dla każdego</span>, kto chce
          aktywnie spędzić czas,{' '}
          <span className="font-bold">zwiedzić ciekawe miejsca w Polsce</span> i{' '}
          <span className="font-bold">
            rozwijać swoje umiejętności na różnych skateparkach
          </span>
          .
        </p>
        <div className="p-3 text-center font-poetsen-one text-xs sm:text-base xl:text-xl">
          <div className="m-auto max-w-36 text-[#FBD24D]">
            <div className="flex justify-center gap-2 sm:gap-4 lg:gap-8">
              <Image
                alt=""
                src="/home/icons/people-green.svg"
                width={20}
                height={16.41}
                className="sm:mb-2 sm:scale-150 lg:mb-4 lg:scale-[2]"
              />
              <Image
                alt=""
                src="/home/icons/people-pink.svg"
                width={32}
                height={26.26}
                className="sm:mb-2 sm:scale-150 lg:mb-4 lg:scale-[2]"
              />
            </div>
            Dla każdego!
          </div>
        </div>
      </SectionContainer>
      <SectionContainer className="relative flex flex-col gap-6 text-xs text-white sm:text-base md:gap-8 lg:gap-10 xl:text-xl">
        <Title
          titleClassName="text-[#FBD24D] -left-10 md:-left-16"
          title="Terminy"
          subtitle="wyjazdów"
          subtitleClassName="left-6"
        />
        <p className="text-center font-roboto">
          Terminy wyjazdów regularnie wrzucamy na stronę internetową i nasze
          social media, więc koniecznie nas obserwuj, żeby niczego nie
          przegapić!
        </p>
        <div className="flex justify-center gap-4 sm:gap-10 lg:gap-20">
          <a
            href="https://www.facebook.com/SkateAcademy.Wro"
            target="_blank"
            rel="noreferrer noopener"
          >
            <IoLogoFacebook
              size={24}
              className="transition-colors hover:text-[#5EE9D3] sm:scale-[1.5] lg:scale-[2]"
            />
          </a>
          <a
            href="https://www.instagram.com/akademiaskateboardingu/profilecard"
            target="_blank"
            rel="noreferrer noopener"
          >
            <IoLogoInstagram
              size={24}
              className="transition-colors hover:text-[#5EE9D3] sm:scale-[1.5] lg:scale-[2]"
            />
          </a>
        </div>
        <p className="text-center font-roboto">
          Ceny wyjazdów zależą od docelowego miejsca, dlatego zachęcamy do
          kontaktu przez formularz lub WhatsApp, aby uzyskać szczegółowe
          informacje. Prosimy również o podanie, który wyjazd Państwa
          interesuje, abyśmy mogli odpowiedzieć jak najszybciej.
        </p>
        <p className="text-center font-roboto">
          Zapisy na wyjazdy można dokonać przez WhatsApp, co pozwala szybko i
          wygodnie zarezerwować miejsce:
        </p>
        <PhoneNumber />
      </SectionContainer>
      <QuestionFormSection />
    </>
  );
}
