import {
  QuestionFormSection,
  SectionContainer,
  Title
} from '@/components/home';

export default function Cennik() {
  return (
    <>
      <SectionContainer className="mb-10 flex flex-col gap-8">
        <Title title="Cennik zajęć" titleClassName="text-[#FBD24D]" />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col justify-between rounded-[20px] border-2 border-[#5EE9D3] bg-[#262626] p-6 text-center">
            <h3 className="mb-4 font-poetsen-one text-xl text-[#FBD24D] md:text-3xl">
              Zajęcia indywidualne
            </h3>
            <div className="mb-4 font-roboto text-white">
              <p className="mb-2 text-sm md:text-base">Jedna lekcja (60 min)</p>
              <p className="text-xl font-bold text-[#D7B3FD] md:text-2xl">
                120 zł
              </p>
            </div>
            <div className="mb-4 font-roboto text-white">
              <p className="mb-2 text-sm md:text-base">
                Jedna lekcja 2-osoby (60 min)
              </p>
              <p className="text-xl font-bold text-[#D7B3FD] md:text-2xl">
                200 zł
              </p>
            </div>
            <ul className="space-y-2 text-left font-roboto text-xs text-white md:text-sm">
              <li>• Spersonalizowana nauka</li>
              <li>• Pełna uwaga instruktora</li>
              <li>• Elastyczne terminy</li>
              <li>• Dostosowany program</li>
            </ul>
          </div>

          <div className="flex flex-col justify-between rounded-[20px] border-2 border-[#FBD24D] bg-[#262626] p-6 text-center">
            <h3 className="mb-4 font-poetsen-one text-xl text-[#FBD24D] md:text-3xl">
              Zajęcia grupowe
            </h3>
            <div className="mb-4 font-roboto text-white">
              <p className="mb-2 text-sm md:text-base">Jedna lekcja (60 min)</p>
              <p className="text-xl font-bold text-[#D7B3FD] md:text-2xl">
                80 zł
              </p>
            </div>
            <ul className="space-y-2 text-left font-roboto text-xs text-white md:text-sm">
              <li>• Nauka w grupie rówieśników</li>
              <li>• Rozwój umiejętności społecznych</li>
              <li>• Regularne terminy</li>
              <li>• Podział na grupy wiekowe</li>
            </ul>
          </div>

          <div className="flex flex-col justify-between rounded-[20px] border-2 border-[#D7B3FD] bg-[#262626] p-6 text-center md:col-span-2 lg:col-span-1">
            <h3 className="mb-4 font-poetsen-one text-xl text-[#FBD24D] md:text-3xl">
              Warsztaty w Twoim mieście
            </h3>
            <div className="mb-4 font-roboto text-white">
              <p className="text-xl font-bold text-[#D7B3FD] md:text-2xl">
                Wycena indywidualna
              </p>
            </div>
            <ul className="space-y-2 text-left font-roboto text-xs text-white md:text-sm">
              <li>• Kompletny sprzęt</li>
              <li>• Profesjonalna opieka</li>
              <li>• Dostosowany program</li>
              <li>• Przeszkody i rampy</li>
              <li>• Pokazy</li>
            </ul>
          </div>
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
