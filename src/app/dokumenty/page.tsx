import {
  Button,
  ButtonLink,
  QuestionFormSection,
  SectionContainer,
  Title
} from '@/components/home';

export default function Documents() {
  return (
    <>
      <SectionContainer className="mb-20 grid grid-cols-1 gap-8 overflow-hidden md:grid-cols-2 md:gap-20">
        <div className="flex flex-col items-center justify-center gap-4 md:gap-8">
          <Title title="Regulamin" titleClassName="text-[#D7B3FD]" />
          <Button color="pink" href="/home/docs/regulamin.pdf">
            Pobierz regulamin &gt;&gt;
          </Button>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 md:gap-8">
          <Title
            title="Zgoda na udział w zajęciach"
            titleClassName="text-[#7DD2FB]"
          />
          <Button
            color="blue"
            href="/home/docs/zgoda-na-udzial-w-zajeciach.pdf"
          >
            Pobierz zgodę &gt;&gt;
          </Button>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 md:gap-8">
          <Title title="Cennik" titleClassName="text-[#FBD24D]" />
          <ButtonLink color="orange" href="/oferta/cennik">
            Zobacz cennik &gt;&gt;
          </ButtonLink>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 md:gap-8">
          <Title title="Zgoda na wycieczkę" titleClassName="text-[#5EE9D3]" />
          <Button color="green" href="/home/docs/zgoda-na-wycieczke.pdf">
            Pobierz zgodę &gt;&gt;
          </Button>
        </div>
      </SectionContainer>
      <QuestionFormSection />
    </>
  );
}
