import {
  Button,
  ButtonLink,
  QuestionFormSection,
  SectionContainer,
  Title
} from '@/components/home';

import dokumentyData from '../../../public/dokumenty.json';

const titleColors: Record<string, string> = {
  pink: 'text-[#D7B3FD]',
  blue: 'text-[#7DD2FB]',
  orange: 'text-[#FBD24D]',
  green: 'text-[#5EE9D3]'
};

type ButtonColor = 'pink' | 'blue' | 'orange' | 'green';
type ButtonLinkColor = 'pink' | 'blue' | 'orange' | 'green';

export default function Documents() {
  return (
    <>
      <SectionContainer className="mb-20 grid grid-cols-1 gap-8 overflow-hidden md:grid-cols-2 md:gap-20">
        {dokumentyData.docs.map(doc => (
          <div
            key={doc.title}
            className="flex flex-col items-center justify-center gap-4 md:gap-8"
          >
            <Title title={doc.title} titleClassName={titleColors[doc.color]} />
            {doc.isLink ? (
              <ButtonLink color={doc.color as ButtonLinkColor} href={doc.href}>
                {doc.buttonText}
              </ButtonLink>
            ) : (
              <Button color={doc.color as ButtonColor} href={doc.href}>
                {doc.buttonText}
              </Button>
            )}
          </div>
        ))}
      </SectionContainer>
      <QuestionFormSection />
    </>
  );
}
