import {
  AboutSchoolSection,
  AboutTeacherSection,
  CommentsSection,
  FAQSection,
  GallerySection,
  OfferSection,
  QuestionFormSection,
  WelcomeSection
} from '@/home';

export default function HomePage() {
  return (
    <>
      <WelcomeSection />
      <AboutSchoolSection />
      <OfferSection />
      <AboutTeacherSection />
      <CommentsSection />
      <FAQSection />
      <QuestionFormSection />
      <GallerySection />
    </>
  );
}
