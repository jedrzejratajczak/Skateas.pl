import { PhoneNumber, SectionContainer } from '@/components/home';
import { NextSectionButton, QuestionFormSection, Title } from '@/home';

export default function Contact() {
  return (
    <>
      <SectionContainer className="flex flex-col gap-10 text-center font-roboto text-xs text-white sm:text-base xl:text-xl">
        <Title title="Kontakt" titleClassName="text-[#7DD2FB]" />
        <div>
          <p className="mb-2">
            Numer konta do przelewu znajdziesz w{' '}
            <a
              href="/home/docs/regulamin.pdf"
              rel="noopener noreferrer"
              target="_blank"
              className="text-[#FBD24D] hover:text-[#FABE24]"
            >
              regulaminie
            </a>
            .
          </p>
          <p>Chcesz o coś zapytać? Potrzebujesz więcej informacji?</p>
          <p>Napisz do mnie na numer telefonu lub przez WhatsApp.</p>
        </div>
        <PhoneNumber />
        <p>
          Możesz także skontaktować się ze mną za pomocą formularza kontaktowego
        </p>
        <NextSectionButton sectionId="pytania" />
      </SectionContainer>
      <QuestionFormSection />
    </>
  );
}
