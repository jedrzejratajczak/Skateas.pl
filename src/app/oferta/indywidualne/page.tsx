import Image from 'next/image';

import {
  Button,
  ButtonLink,
  Locations,
  PhoneNumber,
  QuestionFormSection,
  ScrollToButton,
  SectionContainer,
  SignupModalButton,
  Title
} from '@/components/home';

export default function Individual() {
  return (
    <>
      <SectionContainer className="grid grid-cols-[2fr,1fr] items-center xl:min-h-[600px] xl:gap-10">
        <div className="flex max-w-[180px] flex-col gap-6 py-3 pr-1 min-[375px]:max-w-none md:gap-12">
          <Title
            title="Zajęcia"
            subtitle="indywidualne"
            titleClassName="text-[#5EE9D3] min-[425px]:-left-4 md:-left-10"
            subtitleClassName="min-[425px]:left-6 md:left-10"
          />
          <p className="font-roboto text-xs text-white sm:text-base xl:text-xl">
            Zajęcia indywidualne w&nbsp;naszej Akademii skateboardingu
            to&nbsp;idealne rozwiązanie dla&nbsp;tych, którzy pragną szybkich
            postępów i&nbsp;pełnej uwagi instruktora. Podczas lekcji jeden
            na&nbsp;jeden, instruktor dostosowuje program do&nbsp;indywidualnych
            potrzeb i&nbsp;umiejętności uczestnika, zapewniając maksymalną
            efektywność nauki. To&nbsp;doskonała okazja, by&nbsp;skupić
            się&nbsp;na&nbsp;szczegółach, poprawić technikę i&nbsp;opanować
            wybrane triki w&nbsp;komfortowym tempie.
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
          titleClassName="text-[#FBD24D]"
          title="Dla kogo?"
          decorationClassName="left-[calc(50%+88px)] top-0 md:-top-3 md:left-[calc(50%+130px)]"
          withQuestionsLeft
        />
        <p className="text-center font-roboto text-xs text-white sm:text-base xl:text-xl">
          Zajęcia indywidualne są&nbsp;przeznaczone dla&nbsp;każdego
          w&nbsp;przedziale wiekowym 6-17&nbsp;lat, niezależnie od&nbsp;poziomu
          umiejętności.
        </p>
        <div className="p-3 text-center font-poetsen-one text-xs sm:text-base xl:text-xl">
          <div className="m-auto max-w-36 text-[#5EE9D3]">
            <div className="flex justify-center gap-2 sm:gap-4 lg:gap-8">
              <Image
                alt=""
                src="/home/icons/poeple-green.svg"
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
            6-<span className="text-[#D7B3FD]">17 lat</span>
          </div>
        </div>
        <p className="text-center font-roboto text-xs text-white sm:text-base xl:text-xl">
          Nasze lekcje są&nbsp;idealne zarówno dla&nbsp;początkujących, którzy
          dopiero stawiają pierwsze kroki na&nbsp;deskorolce,
          jak&nbsp;i&nbsp;dla&nbsp;zaawansowanych skaterów, którzy chcą
          doskonalić swoje umiejętności i&nbsp;czyć się&nbsp;nowych trików.
        </p>
        <p className="text-center font-roboto text-xs text-white sm:text-base xl:text-xl">
          Dzięki indywidualnemu podejściu instruktora, każdy uczestnik może
          liczyć na&nbsp;dostosowany do&nbsp;swoich potrzeb program nauki, który
          pomoże mu&nbsp;osiągnąć zamierzone cele.
        </p>
        <p className="text-center font-roboto text-xs font-bold text-white sm:text-base xl:text-xl">
          Niezależnie od&nbsp;poziomu umiejętności, nasze zajęcia będą idealnym
          wyborem!
        </p>
        <div className="m-auto my-4 flex gap-4">
          <ScrollToButton color="orange" sectionId="terminy">
            Zapisz na zajęcia &gt;&gt;
          </ScrollToButton>
          <ButtonLink color="green" href="/oferta/cennik">
            Cennik
          </ButtonLink>
        </div>
      </SectionContainer>
      <SectionContainer className="relative flex flex-col gap-6 md:gap-8 lg:gap-10">
        <Title
          titleClassName="text-[#D7B3FD] -left-4"
          title="Lokalizacje"
          subtitle="zajęć indywidualnych"
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
      <SectionContainer className="relative flex flex-col gap-6 text-xs text-white sm:text-base md:gap-8 lg:gap-10 xl:text-xl">
        <Title
          id="terminy"
          titleClassName="text-[#7DD2FB] -left-10 md:-left-16"
          title="Terminy"
          subtitle="zajęć indywidualnych"
          subtitleClassName="left-6"
        />
        <p className="text-center font-roboto">
          Terminy zajęć indywidualnych są&nbsp;ustalane elastycznie,
          aby&nbsp;dopasować się&nbsp;do&nbsp;Twojego grafiku. Aby&nbsp;zapisać
          dziecko, skontaktuj się&nbsp;z&nbsp;nami przez WhatsApp:
        </p>
        <PhoneNumber />
        <p className="text-center font-roboto">
          lub wypełnij formularz, który znajduje się&nbsp;na&nbsp;dole strony
          albo klikając w&nbsp;poniższy przycisk:
        </p>
        <SignupModalButton color="blue" type="individual" className="m-auto">
          Zapisz na zajęcia &gt;&gt;
        </SignupModalButton>
        <p className="text-center font-roboto">
          W wiadomości prosimy o&nbsp;podanie preferowanych dni, abyśmy mogli
          jak najlepiej dostosować termin zajęć do Waszych potrzeb.
        </p>
      </SectionContainer>
      <QuestionFormSection />
    </>
  );
}
