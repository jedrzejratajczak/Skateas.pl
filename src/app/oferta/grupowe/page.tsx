import Image from 'next/image';

import {
  ButtonLink,
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
          title="Dlaczego warto"
          decorationClassName="left-[calc(50%+88px)] top-0 md:-top-3 md:left-[calc(50%+130px)]"
          withQuestionsLeft
        />
        <div className="text-center font-roboto text-xs text-white sm:text-base xl:text-xl">
          <p className="mb-4 text-center font-bold">
            Dlaczego warto jeździć na deskorolce?
          </p>
          <div className="text-left space-y-4 max-w-4xl mx-auto">
            <div>
              <p className="font-bold mb-2">1. Rozwój fizyczny</p>
              <p>
                Skateboarding to świetny sposób na poprawę koordynacji ruchowej, równowagi i ogólnej sprawności fizycznej. Ludzie uczą się kontrolować swoje ciało w ruchu, co pozytywnie wpływa na inne dziedziny życia i sportu.
              </p>
            </div>
            <div>
              <p className="font-bold mb-2">2. Wzmacnianie pewności siebie</p>
              <p>
                Każdy opanowany trik, każda pokonana przeszkoda buduje w człowieku poczucie własnej wartości i odwagę do podejmowania nowych wyzwań — na deskorolce i poza nią.
              </p>
            </div>
            <div>
              <p className="font-bold mb-2">3. Nauka cierpliwości i wytrwałości</p>
              <p>
                Postępy w skateboardingu wymagają czasu, co uczy ludzi cierpliwości, systematyczności i niepoddawania się po pierwszych niepowodzeniach.
              </p>
            </div>
            <div>
              <p className="font-bold mb-2">4. Kreatywność i swoboda wyrażania siebie</p>
              <p>
                Skateboarding to nie tylko sport – to również forma ekspresji. Każdy może wypracować własny styl jazdy, własne kombinacje trików i poczuć się twórcą.
              </p>
            </div>
            <div>
              <p className="font-bold mb-2">5. Integracja społeczna</p>
              <p>
                Zajęcia w grupie sprzyjają nawiązywaniu nowych znajomości, uczą współpracy i szacunku dla innych – niezależnie od poziomu umiejętności.
              </p>
            </div>
          </div>
        </div>
        <div className="m-auto my-4 flex gap-4">
          <ScrollToButton color="blue" sectionId="terminy">
            Zapisz na zajęcia &gt;&gt;
          </ScrollToButton>
          <ButtonLink color="orange" href="/oferta/cennik">
            Cennik
          </ButtonLink>
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
