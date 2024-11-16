import {
  QuestionFormSection,
  SectionContainer,
  Title
} from '@/components/home';

export default function Workshops() {
  return (
    <>
      <SectionContainer>
        <div className="py-40">
          <Title
            title="Strona"
            subtitle="pojawi się wkrótce"
            titleClassName="text-[#FBD24D] -left-16"
            subtitleClassName="left-6"
          />
        </div>
      </SectionContainer>
      <QuestionFormSection />
    </>
  );
}
