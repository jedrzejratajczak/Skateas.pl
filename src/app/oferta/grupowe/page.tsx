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
          <div className="mx-auto flex max-w-4xl flex-col gap-4 text-left">
            <p>
              Zajęcia grupowe w&nbsp;naszej Akademii skateboardingu
              są&nbsp;dostosowane do&nbsp;różnych poziomów zaawansowania,
              aby&nbsp;każdy uczestnik mógł czerpać maksymalne korzyści
              z&nbsp;nauki.
            </p>
            <p>
              <span className="block font-bold">Grupy podstawowe:</span>
              Dla tych, którzy dopiero zaczynają swoją przygodę z deskorolką, tu
              uczymy się jazdy od początku: od stania na desce po płynne
              przemieszczanie się do przodu.
            </p>
            <p>
              <span className="block font-bold">
                Grupy średnio zaawansowane:
              </span>
              Tych, którzy potrafią już&nbsp;stanąć na&nbsp;deskorolce, odpychać
              się, skręcać i&nbsp;czują się&nbsp;pewnie w&nbsp;jeździe,
              a&nbsp;może nawet znają kilka trików, zapraszamy do&nbsp;grupy
              średnio zaawansowanej.
            </p>
            <p>
              <span className="block font-bold">Grupy zaawansowane:</span>
              Jeśli masz już&nbsp;opanowane podstawy, pewnie poruszasz
              się&nbsp;na&nbsp;deskorolce i&nbsp;znasz kilka trików,
              to&nbsp;zapraszamy do&nbsp;grupy zaawansowanej.
              W&nbsp;tej&nbsp;grupie skupimy się&nbsp;na&nbsp;doskonaleniu
              techniki, nauce bardziej skomplikowanych trików oraz podnoszeniu
              umiejętności na wyższym poziomie. To&nbsp;idealna opcja
              dla&nbsp;tych, którzy chcą rozwijać swoją pasję i&nbsp;osiągać
              coraz lepsze wyniki na&nbsp;deskorolce.
            </p>
            <p>
              Niezależnie od&nbsp;poziomu umiejętności, nasze zajęcia będą
              idealnym wyborem!
            </p>
            <p className="mb-4 mt-8 font-bold">
              Dlaczego warto jeździć na deskorolce?
            </p>
            <div>
              <p className="mb-2 font-bold">1. Rozwój fizyczny</p>
              <p>
                Skateboarding to świetny sposób na poprawę koordynacji ruchowej,
                równowagi i ogólnej sprawności fizycznej. Ludzie uczą się
                kontrolować swoje ciało w ruchu, co pozytywnie wpływa na inne
                dziedziny życia i sportu.
              </p>
            </div>
            <div>
              <p className="mb-2 font-bold">2. Wzmacnianie pewności siebie</p>
              <p>
                Każdy opanowany trik, każda pokonana przeszkoda buduje w
                człowieku poczucie własnej wartości i odwagę do podejmowania
                nowych wyzwań — na deskorolce i poza nią.
              </p>
            </div>
            <div>
              <p className="mb-2 font-bold">
                3. Nauka cierpliwości i wytrwałości
              </p>
              <p>
                Postępy w skateboardingu wymagają czasu, co uczy ludzi
                cierpliwości, systematyczności i niepoddawania się po pierwszych
                niepowodzeniach.
              </p>
            </div>
            <div>
              <p className="mb-2 font-bold">
                4. Kreatywność i swoboda wyrażania siebie
              </p>
              <p>
                Skateboarding to nie tylko sport – to również forma ekspresji.
                Każdy może wypracować własny styl jazdy, własne kombinacje
                trików i poczuć się twórcą.
              </p>
            </div>
            <div>
              <p className="mb-2 font-bold">5. Integracja społeczna</p>
              <p>
                Zajęcia w grupie sprzyjają nawiązywaniu nowych znajomości, uczą
                współpracy i szacunku dla innych – niezależnie od poziomu
                umiejętności.
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
