import { Dropdown } from '../Dropdown';
import SectionContainer from '../SectionContainer';
import { Title } from '../Title';

const colors = [
  { border: 'border-[#38BCF7]', bg: 'bg-[#7DD2FB]', primaryColor: '#0C4A6E' },
  { border: 'border-[#BF83FB]', bg: 'bg-[#D7B3FD]', primaryColor: '#581C86' },
  { border: 'border-[#FABE24]', bg: 'bg-[#FBD24D]', primaryColor: '#78350F' },
  { border: 'border-[#2DD3BE]', bg: 'bg-[#5EE9D3]', primaryColor: '#134E4A' }
];

const questions = [
  {
    title: 'Czy skateboarding jest bezpieczny?',
    text: 'Tak, dbamy o bezpieczeństwo! Każdy uczestnik ma obowiązek noszenia kasku oraz ochraniaczy na kolana i łokcie, a instruktorzy pilnują, by wszystko odbywało się w kontrolowanych warunkach. Bezpieczeństwo jest dla nas priorytetem, więc możesz być spokojny!'
  },
  {
    title: 'Nigdy nie jeździłem(-am) na desce – dam radę?',
    text: 'Oczywiście! Zajęcia są dostosowane do poziomu każdej osoby, również tych, które dopiero zaczynają. Instruktorzy prowadzą krok po kroku, więc nauczysz się w swoim tempie, bez presji.'
  },
  {
    title: 'Ile zajmie nauka podstawowych trików?',
    text: 'To zależy od tego, jak często będziesz trenować i ile czasu chcesz poświęcić. Zwykle po kilku tygodniach można poczuć się pewniej na desce i zaczynają wychodzić pierwsze triki.'
  },
  {
    title: 'Czy muszę mieć własną deskorolkę i sprzęt?',
    text: 'Nie, nie musisz. Mamy deskorolki i ochraniacze dla tych, którzy dopiero zaczynają lub jeszcze nie mają własnego sprzętu. Ale jeśli masz swoją deskorolkę – śmiało, możesz ją zabrać na zajęcia!'
  }
];

export function FAQSection() {
  return (
    <SectionContainer className="flex flex-col gap-5">
      <Title
        title="FAQ"
        titleClassName="text-white md:text-[3.8rem] lg:text-[4.5rem] xl:text-[5rem]"
        withQuestions
      />
      <div className="flex flex-col gap-2.5 py-3">
        {questions.map((qustion, index) => (
          <Dropdown
            key={index}
            title={qustion.title}
            text={qustion.text}
            {...colors[index % colors.length]}
          />
        ))}
      </div>
    </SectionContainer>
  );
}
