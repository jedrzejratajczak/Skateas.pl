import type { Metadata } from 'next';

import {
  QuestionFormSection,
  SectionContainer,
  Title
} from '@/components/home';

import cennikData from '../../../../public/cennik.json';

export const metadata: Metadata = {
  title:
    'Cennik zajęć z deskorolki dla dzieci Wrocław | Akademia Skateboardingu',
  description:
    'Cennik zajęć z deskorolki dla dzieci we Wrocławiu. Zajęcia indywidualne i grupowe, nauka jazdy na deskorolce. Sprawdź ceny i zapisz dziecko!',
  keywords:
    'cennik zajęcia deskorolka, cena nauka jazdy deskorolka, zajęcia z deskorolki dla dzieci Wrocław, szkoła deskorolki cennik'
};

export default function Cennik() {
  return (
    <>
      <SectionContainer className="mb-10 flex flex-col gap-8">
        <Title title="Cennik zajęć" titleClassName="text-[#FBD24D]" />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cennikData.pricingCards.map(card => {
            const hasCustomPricing = card.pricePoints.some(
              pp => !pp.description
            );
            const gridSpanClass = hasCustomPricing
              ? 'md:col-span-2 lg:col-span-1'
              : '';

            return (
              <div
                key={card.title}
                className={`flex flex-col justify-between rounded-[20px] border-2 bg-[#262626] p-6 text-center ${gridSpanClass}`}
                style={{ borderColor: card.borderColor }}
              >
                <h3 className="mb-4 font-poetsen-one text-xl text-[#FBD24D] md:text-3xl">
                  {card.title}
                </h3>

                {card.pricePoints.map(pricePoint => (
                  <div
                    key={`${pricePoint.description}-${pricePoint.price}`}
                    className="mb-4 font-roboto text-white"
                  >
                    {pricePoint.description && (
                      <p className="mb-2 text-sm md:text-base">
                        {pricePoint.description}
                      </p>
                    )}
                    <p className="text-xl font-bold text-[#D7B3FD] md:text-2xl">
                      {pricePoint.price}
                    </p>
                  </div>
                ))}

                <ul className="space-y-2 text-left font-roboto text-xs text-white md:text-sm">
                  {card.features.map(feature => (
                    <li key={feature}>• {feature}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </SectionContainer>

      <SectionContainer className="mb-10 flex flex-col gap-6">
        <Title title="Dodatkowe informacje" titleClassName="text-[#7DD2FB]" />

        <div className="space-y-4 font-roboto text-xs text-white sm:text-base xl:text-lg">
          <div className="rounded-[15px] bg-[#262626] p-4">
            <h4 className="mb-2 font-bold text-[#FBD24D]">Wyjazdy</h4>
            <p>
              Ceny wyjazdów zależą od docelowego miejsca. Skontaktuj się z nami,
              aby uzyskać szczegółowe informacje o konkretnym wyjeździe.
            </p>
          </div>

          <div className="rounded-[15px] bg-[#262626] p-4">
            <h4 className="mb-2 font-bold text-[#5EE9D3]">Sprzęt</h4>
            <p>
              Wszystkie zajęcia obejmują wypożyczenie deskorolki oraz sprzętu
              ochronnego (kask, ochraniacze). Jeśli posiadasz własny sprzęt,
              zachęcamy do jego używania.
            </p>
          </div>

          <div className="rounded-[15px] bg-[#262626] p-4">
            <h4 className="mb-2 font-bold text-[#D7B3FD]">Płatność</h4>
            <p>
              Opłata za zajęcia pobierana jest przed rozpoczęciem lekcji.
              Przyjmujemy płatności gotówką lub przelewem. Numer konta
              znajdziesz w regulaminie.
            </p>
          </div>

          <div className="rounded-[15px] bg-[#262626] p-4">
            <h4 className="mb-2 font-bold text-[#7DD2FB]">Odwołania</h4>
            <p>
              W przypadku odwołania zajęć z powodu złych warunków pogodowych,
              zajęcia zostają przełożone na inny termin bez dodatkowych kosztów.
            </p>
          </div>
        </div>
      </SectionContainer>

      <QuestionFormSection />
    </>
  );
}
