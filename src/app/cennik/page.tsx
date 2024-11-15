import {
  Button,
  QuestionFormSection,
  SectionContainer,
  Title
} from '@/components/home';

export default function Price() {
  return (
    <>
      <SectionContainer className="flex flex-col gap-20 overflow-hidden">
        <Title title="Cennik" titleClassName="text-[#D7B3FD]" />
        <Button color="orange" className="m-auto" href="/home/docs/cennik.pdf">
          Pobierz cennik &gt;&gt;
        </Button>
      </SectionContainer>
      <QuestionFormSection />
    </>
  );
}
