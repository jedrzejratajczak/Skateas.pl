import Image from 'next/image';

import {
  NextSectionButton,
  PhoneNumber,
  QuestionFormSection,
  SectionContainer,
  Title
} from '@/components/home';

export default function Workshops() {
  return (
    <>
      <SectionContainer className="grid grid-cols-[2fr,1fr] items-center xl:min-h-[600px] xl:gap-10">
        <div className="flex max-w-[180px] flex-col gap-6 py-3 pr-1 min-[375px]:max-w-none md:gap-12">
          <Title
            title="Warsztaty"
            subtitle="deskorolkowe"
            titleClassName="text-[#D7B3FD] min-[425px]:-left-4 md:-left-10"
            subtitleClassName="min-[425px]:left-6 md:left-10"
          />
          <p className="font-roboto text-xs text-white sm:text-base xl:text-xl">
            Oferujemy przeprowadzanie warsztatów deskorolkowych dla&nbsp;grup
            10-15 osobowych. Jeśli szukasz ciekawej aktywności dla&nbsp;dzieci
            i&nbsp;młodzieży, zgłoś się&nbsp;do&nbsp;nas! Warsztaty
            są&nbsp;dostosowane zarówno do&nbsp;początkujących, jaki bardziej
            zaawansowanych uczestników. Dodatkowo, zapewniamy możliwość
            wypożyczenia deskorolek oraz sprzętu ochronnego, co&nbsp;umożliwia
            każdemu pełne zaangażowanie w&nbsp;naukę i&nbsp;zabawę.
            To&nbsp;doskonała okazja, aby&nbsp;rozwijać pasję, zdobywać nowe
            umiejętności i&nbsp;integrować się&nbsp;w&nbsp;gronie rówieśników.
          </p>
        </div>
        <div className="relative -right-5 h-[300px] w-[150px] min-[425px]:w-[200px] sm:-right-10 sm:h-[400px] sm:w-[250px] md:-right-16 md:h-[400px] md:w-[300px] lg:h-[450px] lg:w-[400px] xl:absolute xl:right-0">
          <Image
            src="/home/offers/offer4.webp"
            alt="Adam skaczący na deskorolce"
            className="pointer-events-none rounded-s-full"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'left' }}
          />
        </div>
      </SectionContainer>
      <SectionContainer className="relative flex flex-col gap-5 text-xs text-white sm:text-base md:gap-8 xl:text-xl">
        <Title
          titleClassName="text-[#FBD24D]"
          title="Dla kogo?"
          decorationClassName="left-[calc(50%+88px)] top-0 md:-top-3 md:left-[calc(50%+130px)]"
          withQuestionsLeft
        />
        <p className="text-center font-roboto text-xs text-white sm:text-base xl:text-xl">
          Warsztaty deskorolkowe są&nbsp;przeznaczone dla&nbsp;osób, które chcą
          zorganizować wyjątkowe zajęcia, kolonie lub&nbsp;eventy dla&nbsp;grupy
          dzieci i&nbsp;młodzieży. Możemy zorganizować warsztaty zarówno
          jednorazowo, jak&nbsp;i&nbsp;w&nbsp;kilku terminach, dostosowując
          program do&nbsp;potrzeb uczestników.
        </p>
        <p className="text-center font-roboto text-base font-bold text-white sm:text-xl xl:text-2xl">
          Zapewniamy:
        </p>
        <div className="mb-4 grid grid-cols-2 items-center justify-center gap-4 p-3 text-center font-poetsen-one text-xs text-white sm:text-base lg:grid-cols-4 xl:text-xl">
          <div className="m-auto flex max-w-[200px] flex-col items-center justify-center gap-2">
            <Image
              src="/home/icons/skateboard.svg"
              alt="Ikona deski"
              width={36}
              height={36}
              className="h-[36px] w-[36px]"
            />
            <span>kompletny sprzęt, w tym deskorolki, kaski, ochraniacze</span>
          </div>
          <div className="m-auto flex max-w-[200px] flex-col items-center justify-center gap-2">
            <Image
              src="/home/icons/check.svg"
              alt="Ikona ptaszka"
              width={36}
              height={36}
              className="h-[36px] w-[36px]"
            />
            <span>profesjonalną opiekę wykwalifikowanych instruktorów</span>
          </div>
          <div className="m-auto flex max-w-[200px] flex-col items-center justify-center gap-2">
            <Image
              src="/home/icons/skateboarder.svg"
              alt="Ikona osoby na desce"
              width={36}
              height={36}
              className="h-[36px] w-[36px]"
            />
            <span>dostosowany trening deskorolkowy</span>
          </div>
          <div className="m-auto flex max-w-[200px] flex-col items-center justify-center gap-2">
            <Image
              src="/home/icons/ramp.svg"
              alt="Ikona rampy"
              width={36}
              height={36}
              className="h-[36px] w-[36px]"
            />
            <span>przeszkody, w celu urozmaicenia nauki i zabawy</span>
          </div>
        </div>
        <p className="text-center font-roboto">
          Nasze warsztaty mogą być także świetnym pomysłem na organizację
          urodzin dla dzieci – w takim przypadku szczegóły dotyczące dodatkowych
          atrakcji ustalamy indywidualnie.
        </p>
        <p className="text-center font-roboto">
          Jeśli jesteś zainteresowany organizacją warsztatów, prosimy o kontakt
          przez formularz znajdujący się poniżej lub przez WhatsApp:
        </p>
        <PhoneNumber />
        <p className="text-center font-roboto font-bold">
          Prześlij nam informacje o liczbie uczestników, przedziale wiekowym,
          preferowanych terminach oraz ewentualnych potrzebach dotyczących
          przeszkód lub lokalizacji na skateparku. Chętnie dostosujemy ofertę do
          Twoich oczekiwań!
        </p>
        <NextSectionButton sectionId="pytania" />
      </SectionContainer>
      <QuestionFormSection />
    </>
  );
}
