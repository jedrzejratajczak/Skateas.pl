import {
  FifthSection,
  FirstSection,
  FourthSection,
  SecondSection,
  SixthSection,
  ThirdSection
} from '@/homepage/index';

export default function HomePage() {
  return (
    <div className="bg-[#171717]">
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
    </div>
  );
}
