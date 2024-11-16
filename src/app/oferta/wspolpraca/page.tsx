import { PhoneNumber, SectionContainer } from '@/components/home';
import { NextSectionButton, QuestionFormSection, Title } from '@/home';

export default function Cooperation() {
  return (
    <>
      <SectionContainer className="flex flex-col gap-10 text-center font-roboto text-xs text-white sm:text-base xl:text-xl">
        <Title title="Współpraca" titleClassName="text-[#FBD24D]" />
        <p>
          Jestem otwarty na stałą współpracę w okresie wakacyjnym z miastami,
          fundacjami, stowarzyszeniami i innymi organizacjami. Wspólnie możemy
          zorganizować warsztaty, zajęcia oraz eventy skateboardowe, które będą
          doskonałą okazją do promowania aktywności fizycznej i rozwijania pasji
          wśród dzieci i młodzieży. Jeśli szukasz partnera do realizacji
          kreatywnych projektów i inicjatyw sportowych, zapraszam do współpracy!
        </p>
        <p>Skontaktuj się ze mną przez WhatsApp:</p>
        <PhoneNumber />
        <p>lub przez formularz kontaktowy</p>
        <NextSectionButton sectionId="pytania" />
      </SectionContainer>
      <QuestionFormSection />
    </>
  );
}
