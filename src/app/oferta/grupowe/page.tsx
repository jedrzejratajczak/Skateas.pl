import Image from 'next/image';

import {
  Button,
  Locations,
  QuestionFormSection,
  ScrollToButton,
  SectionContainer,
  Timetable,
  Title
} from '@/components/home';

export default function Group() {
  return (
    <>
      <SectionContainer className="grid grid-cols-[2fr,1fr] items-center xl:min-h-[600px] xl:gap-10">
        <div className="flex max-w-[180px] flex-col gap-6 py-3 pr-1 min-[375px]:max-w-none md:gap-12">
          <Title
            title="Zajęcia"
            subtitle="grupowe"
            titleClassName="text-[#FBD24D] min-[425px]:-left-4 md:-left-10"
            subtitleClassName="min-[425px]:left-6 md:left-10"
          />
          <p className="font-roboto text-xs text-white sm:text-base xl:text-xl">
            Zajęcia grupowe w&nbsp;naszej Akademii Skateboardingu
            to&nbsp;doskonała okazja, by&nbsp;uczyć się&nbsp;i&nbsp;rozwijać
            w&nbsp;gronie rówieśników. Pod&nbsp;okiem doświadczonego
            instruktora, uczniowie nie&nbsp;tylko doskonalą swoje umiejętności
            na&nbsp;deskorolce, ale&nbsp;także uczą się&nbsp;współpracy
            i&nbsp;nawiązują trwałe przyjaźnie. Nasze zajęcia są&nbsp;pełne
            energii i&nbsp;radości, co&nbsp;sprawia, że&nbsp;nauka staje
            się&nbsp;prawdziwą przyjemnością.
          </p>
        </div>
        <div className="relative -right-5 h-[300px] w-[150px] min-[425px]:w-[200px] sm:-right-10 sm:h-[400px] sm:w-[250px] md:-right-16 md:h-[400px] md:w-[300px] lg:h-[450px] lg:w-[400px] xl:absolute xl:right-0">
          <Image
            src="/home/offers/offer2.webp"
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
          titleClassName="text-[#7DD2FB]"
          title="Dla kogo?"
          decorationClassName="left-[calc(50%+88px)] top-0 md:-top-3 md:left-[calc(50%+130px)]"
          withQuestionsLeft
        />
        <p className="text-center font-roboto text-xs text-white sm:text-base xl:text-xl">
          Zajęcia grupowe w&nbsp;naszej Akademii skateboardingu
          są&nbsp;dostosowane do&nbsp;różnych grup wiekowych i&nbsp;poziomów
          zaawansowania, aby&nbsp;każdy uczestnik mógł czerpać maksymalne
          korzyści z&nbsp;nauki. Oferujemy specjalne programy dla&nbsp;uczniów
          w&nbsp;wieku.
        </p>
        <div className="grid grid-cols-4 place-items-center gap-2.5 p-3 text-center font-poetsen-one text-xs sm:text-base xl:text-xl">
          <p className="max-w-36 text-[#5EE9D3]">
            <Image
              alt=""
              src="/home/icons/poeple-green.svg"
              width={20}
              height={16.41}
              className="m-auto sm:mb-2 sm:scale-150 lg:mb-4 lg:scale-[2]"
            />
            6-8 lat
          </p>
          <p className="max-w-36 text-[#FBD24D]">
            <Image
              alt=""
              src="/home/icons/people-yellow.svg"
              width={24}
              height={19.69}
              className="m-auto sm:mb-2 sm:scale-150 lg:mb-4 lg:scale-[2]"
            />
            9-11 lat
          </p>
          <p className="max-w-36 text-[#7DD2FB]">
            <Image
              alt=""
              src="/home/icons/people-blue.svg"
              width={28}
              height={22.98}
              className="m-auto sm:mb-2 sm:scale-150 lg:mb-4 lg:scale-[2]"
            />
            12-14 lat
          </p>
          <p className="max-w-36 text-[#D7B3FD]">
            <Image
              alt=""
              src="/home/icons/people-pink.svg"
              width={32}
              height={26.26}
              className="m-auto sm:mb-2 sm:scale-150 lg:mb-4 lg:scale-[2]"
            />
            15-17 lat
          </p>
        </div>
        <p className="text-center font-roboto text-xs text-white sm:text-base xl:text-xl">
          Podział na&nbsp;grupy wiekowe pozwala na&nbsp;pracę w&nbsp;gronie
          rówieśników o&nbsp;podobnym poziomie zaawansowania
          i&nbsp;zainteresowaniach.
        </p>
        <p className="text-center font-roboto text-xs text-white sm:text-base xl:text-xl">
          <span className="block font-bold">Grupy podstawowe:</span>
          Dla tych, którzy dopiero zaczynają swoją przygodę z&nbsp;deskorolką,
          mamy grupę podstawową, gdzie uczymy się&nbsp;jazdy od&nbsp;zera:
          od&nbsp;stania na&nbsp;desce po&nbsp;płynne poruszanie
          się&nbsp;do&nbsp;przodu.
        </p>
        <p className="text-center font-roboto text-xs text-white sm:text-base xl:text-xl">
          <span className="block font-bold">Grupy średnio zaawansowane:</span>
          Tych, którzy potrafią już&nbsp;stanąć na&nbsp;deskorolce, odpychać
          się, skręcać i&nbsp;czują się&nbsp;pewnie w&nbsp;jeździe, a&nbsp;może
          nawet znają kilka trików, zapraszamy do&nbsp;grupy średnio
          zaawansowanej.
        </p>
        <p className="text-center font-roboto text-xs text-white sm:text-base xl:text-xl">
          <span className="block font-bold">Grupy zaawansowane:</span>
          Jeśli masz już&nbsp;opanowane podstawy, pewnie poruszasz
          się&nbsp;na&nbsp;deskorolce i&nbsp;znasz kilka trików,
          to&nbsp;zapraszamy do&nbsp;grupy zaawansowanej. W&nbsp;tej&nbsp;grupie
          skupimy się&nbsp;na&nbsp;doskonaleniu techniki, nauce bardziej
          skomplikowanych trików oraz podnoszeniu umiejętności na wyższym
          poziomie. To&nbsp;idealna opcja dla&nbsp;tych, którzy chcą rozwijać
          swoją pasję i&nbsp;osiągać coraz lepsze wyniki na&nbsp;deskorolce.
        </p>
        <p className="text-center font-roboto text-xs font-bold text-white sm:text-base xl:text-xl">
          Niezależnie od&nbsp;poziomu umiejętności, nasze zajęcia będą idealnym
          wyborem!
        </p>
        <div className="m-auto my-4 flex gap-4">
          <ScrollToButton color="blue" sectionId="terminy">
            Zapisz na zajęcia &gt;&gt;
          </ScrollToButton>
          <Button color="orange" href="/home/docs/cennik.pdf">
            Cennik
          </Button>
        </div>
      </SectionContainer>
      <SectionContainer className="relative flex flex-col gap-6 md:gap-8 lg:gap-10">
        <Title
          titleClassName="text-[#5EE9D3] -left-4"
          title="Lokalizacje"
          subtitle="zajęć grupowych"
          subtitleClassName="left-6"
        />
        <p className="text-center font-roboto text-xs text-white sm:text-base xl:text-xl">
          Zajęcia są&nbsp;prowadzone w&nbsp;różnych lokalizacjach, które
          znajdziesz poniżej. Informacje o&nbsp;wybranej lokalizacji
          najbliższych zajęć przekażemy telefonicznie z&nbsp;odpowiednim
          wyprzedzeniem, aby&nbsp;zapewnić pełną wygodę i&nbsp;łatwy dojazd.
        </p>
        <Locations />
      </SectionContainer>
      <SectionContainer className="relative flex flex-col gap-6 md:gap-8 lg:gap-10">
        <Title
          id="terminy"
          titleClassName="text-[#FBD24D] -left-10 md:-left-16"
          title="Terminy"
          subtitle="zajęć grupowych"
          subtitleClassName="left-6"
        />
        <Timetable />
      </SectionContainer>
      <QuestionFormSection />
    </>
  );
}
