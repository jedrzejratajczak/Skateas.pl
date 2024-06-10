import Image from 'next/image';

import { Dropdown } from '@/components/homepage/Dropdown';
import { Offer } from '@/components/homepage/Offer';
import { TripleExclamationMark } from '@/components/homepage/TripleExclamationMark';

export default function HomePage() {
  return (
    <div className="bg-[#171717]">
      <div className="grid grid-cols-3 items-center py-3 pl-5">
        <div className="col-span-2 flex flex-col gap-2.5 py-3 pr-1">
          <div>
            <p className="font-poetsen-one text-4xl text-[#FBD24D]">
              Sezon 2024
            </p>
            <p className="relative -top-6 left-[70px]">
              <span className="font-poetsen-one text-2xl text-[#FFFFFF]">
                rozpoczęty
              </span>
              <span
                className="font-poetsen-one text-4xl text-transparent"
                style={{ WebkitTextStroke: '2px #FFFFFF' }}
              >
                !
              </span>
            </p>
          </div>
          <p className="font-roboto text-xs text-[#FFFFFF]">
            Czy Twoje dziecko marzy o przygodzie na deskorolce? Zapisz je na
            zajęcia skateboardingu w nowym sezonie i daj mu szansę na rozwijanie
            umiejętności, zdobywanie pewności siebie i poznawanie nowych
            przyjaciół! Niech Twój maluch odkryje radość z aktywności na świeżym
            powietrzu i zaprzyjaźni się z deską już dziś!
          </p>
          <button className="m-auto my-1 rounded-[50px] border border-[#FABE24] bg-[#FBD24D] px-2 py-1 text-sm text-[#404040]">
            Zapisy &gt;&gt;
          </button>
        </div>
        <div className="relative h-[255px] overflow-hidden">
          <Image
            src="/images/skate.webp"
            alt=""
            className="col-span-1 rounded-s-full"
            layout="fill"
            objectFit="cover"
            objectPosition="left"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2.5 overflow-hidden p-5">
        <div className="relative -left-7 text-center">
          <p className="font-poetsen-one text-4xl text-[#7DD2FB]">Akademia</p>
          <p className="relative -top-1 left-7 font-poetsen-one text-2xl text-[#FFFFFF]">
            Skateboardingu
          </p>
          <TripleExclamationMark className="left-1/2 top-0 -translate-x-1/2" />
        </div>
        <div className="relative">
          <Image
            src="/images/deska2.png"
            alt=""
            width={200}
            height={200}
            className="absolute -left-28 -top-40 scale-x-[-1]"
          />
          <p className="my-3 text-justify font-roboto text-xs text-[#FFFFFF]">
            Akademia skateboardingu jest idealnym miejscem zarówno dla tych,
            którzy chcą postawić pierwsze kroki na deskorolce, jak i dla tych,
            którzy pragną rozwijać swoje umiejętności pod okiem doświadczonych
            instruktorów. Podczas zajęć skupiamy się nie tylko na technikach
            jazdy, ale również na ważnych aspektach takich jak: uważność i
            bezpieczeństwo w otoczeniu, budowanie dobrych relacji z
            rówieśnikami, szacunek do innych, pokonywanie własnych barier oraz
            zwalczanie słabości. Dołącz do nas i odkryj radość z jazdy na
            deskorolce!
          </p>
          <Image
            src="/images/deska1.png"
            alt=""
            width={170}
            height={170}
            className="absolute -bottom-40 -right-28 -rotate-12 scale-x-[-1]"
          />
        </div>
        <div className="flex gap-2.5 p-3 text-center font-poetsen-one text-xs text-[#FBD24D]">
          <p>Różne grupy wiekowe</p>
          <p>Zajęcia na każdym poziomie</p>
          <p>Doświadczony instruktor</p>
        </div>
        <button
          className="m-auto w-min rotate-90 px-3 py-2 font-poetsen-one text-2xl text-transparent"
          style={{ WebkitTextStroke: '2px #FFFFFF' }}
        >
          &gt;&gt;
        </button>
      </div>
      <div className="flex flex-col gap-4 p-5">
        <Offer
          containerClassName="border-[#2DD3BE] bg-[#5EE9D3]"
          img="/images/offer1.png"
          primaryColor="#134E4A"
          text="To, co zaczęło się jako prosta zajawka, stało się nieodłączną częścią mojego życia..."
          title="Zajęcia indywidualne"
        />
        <Offer
          containerClassName="border-[#FABE24] bg-[#FBD24D]"
          img="/images/offer2.png"
          primaryColor="#78350F"
          text="To, co zaczęło się jako prosta zajawka, stało się nieodłączną częścią mojego życia..."
          title="Zajęcia grupowe"
        />
        <Offer
          containerClassName="border-[#38BCF7] bg-[#7DD2FB]"
          img="/images/offer3.png"
          primaryColor="#0C4A6E"
          text="To, co zaczęło się jako prosta zajawka, stało się nieodłączną częścią mojego życia..."
          title="Warsztaty"
        />
        <Offer
          containerClassName="border-[#BF83FB] bg-[#D7B3FD]"
          img="/images/offer4.png"
          primaryColor="#581C86"
          text="To, co zaczęło się jako prosta zajawka, stało się nieodłączną częścią mojego życia..."
          title="Eventy"
        />
        <div className="flex flex-col items-center gap-2.5">
          <p className="py-1 text-center text-[#FFFFFF]">
            Chcesz nawiązać współpracę w inny sposób? Mogę zorganizować
            zajęcia/pokazy/warsztaty skateboardingowe na Twoim wydarzeniu.
          </p>
          <button className="rounded-[50px] border border-[#2DD3BE] bg-[#5EE9D3] px-2 py-1 text-[#404040]">
            Dowiedz się więcej &gt;&gt;
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-5 overflow-hidden p-5">
        <div className="relative -left-7 text-center">
          <p className="font-poetsen-one text-4xl text-[#FBD24D]">Kila słów</p>
          <p className="relative -top-1 left-[70px] font-poetsen-one text-2xl text-[#FFFFFF]">
            o mnie
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="my-3 flex flex-col gap-4 text-justify font-roboto text-xs text-[#FFFFFF]">
            <p>
              Cześć! Mam na imię Adam i{' '}
              <span className="text-[#FFC600]">
                jeżdżę na deskorolce od 13 lat
              </span>
              . To, co zaczęło się jako prosta zajawka, stało się nieodłączną
              częścią mojego życia. Deskorolka nie tylko daje mi ogromną radość
              z jazdy, ale również zmieniła mój sposób postrzegania świata.
              Dzięki niej poznałem wspaniałych ludzi z różnych zakątków Polski i
              świata oraz odwiedziłem wiele nowych miejsc.
            </p>
            <p>
              <span className="text-[#FFC600]">
                Od 2021 roku uczę jazdy na deskorolce
              </span>
              , aby dzielić się swoją pasją z innymi i pokazać, co najbardziej
              urzekło mnie w skateboardingu. Obecnie
              <span className="text-[#FFC600]">
                jestem licencjonowanym instruktorem Polish Skate Federation{' '}
              </span>
              i prowadzę: regularne zajęcia we Wrocławiu, warsztaty dla szkół i
              fundacji, zajęcia wyjazdowe w różnych miastach.
            </p>
            <p>
              Jako instruktor współpracuję również z największymi obozami
              deskorolkowymi w Europie,{' '}
              <span className="text-[#FFC600]">Woodcamp</span>.
            </p>
          </div>
          <div className="relative">
            <TripleExclamationMark className="-left-[30%] -top-8" />
            <div className="flex h-[280px] w-[100px] flex-shrink-0 flex-col justify-end gap-2.5 overflow-hidden rounded-full bg-[#FBD24D]">
              <p className="text-center font-poetsen-one text-2xl text-[#0C4A6E]">
                Adam
              </p>
              <div className="relative top-2 h-[200px]">
                <Image
                  src="/images/adam.png"
                  alt=""
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="text-center font-poetsen-one text-xs text-[#FFFFFF]">
          <p>
            „OGROMNĄ CZĘŚCIĄ SKATEBOARDINGU, ZARÓWNO FIZYCZNIE, JAK I KULTUROWO,
            JEST ODKRYWANIE RZECZY, O KTÓRYCH NIE WIEDZIAŁEŚ, ŻE ICH SZUKASZ”
          </p>
          <p>...</p>
          <p>JACK SABBACK</p>
        </div>
      </div>
      <div className="flex flex-col gap-5 p-5">
        <div className="relative">
          <span
            className="absolute -top-0 left-[calc(50%-155px)] -rotate-[20deg] font-poetsen-one text-3xl text-transparent"
            style={{ WebkitTextStroke: '2px #FFFFFF' }}
          >
            ?
          </span>
          <span
            className="absolute -top-0.5 left-[calc(50%-120px)] rotate-[20deg] font-poetsen-one text-4xl text-transparent"
            style={{ WebkitTextStroke: '2px #FFFFFF' }}
          >
            ?
          </span>
          <span
            className="absolute -top-1 left-[calc(50%-75px)] -rotate-[20deg] font-poetsen-one text-5xl text-transparent"
            style={{ WebkitTextStroke: '2px #FFFFFF' }}
          >
            ?
          </span>
          <p className="text-center font-poetsen-one text-4xl text-[#FFFFFF]">
            FAQ
          </p>
          <span
            className="absolute -top-1 left-[calc(50%+50px)] rotate-[20deg] font-poetsen-one text-5xl text-transparent"
            style={{ WebkitTextStroke: '2px #FFFFFF' }}
          >
            ?
          </span>
          <span
            className="absolute -top-0.5 left-[calc(50%+95px)] -rotate-[20deg] font-poetsen-one text-4xl text-transparent"
            style={{ WebkitTextStroke: '2px #FFFFFF' }}
          >
            ?
          </span>
          <span
            className="absolute -top-0 left-[calc(50%+130px)] rotate-[20deg] font-poetsen-one text-3xl text-transparent"
            style={{ WebkitTextStroke: '2px #FFFFFF' }}
          >
            ?
          </span>
        </div>
        <div className="flex flex-col gap-2.5 py-3">
          <Dropdown
            border="border-[#38BCF7]"
            bg="bg-[#7DD2FB]"
            primaryColor="#0C4A6E"
            title="Czy to jest bezpieczne?"
            text="Tak, to jest bezpiecznie"
          />
          <Dropdown
            border="border-[#BF83FB]"
            bg="bg-[#D7B3FD]"
            primaryColor="#581C86"
            title="Czy to jest bezpieczne?"
            text="Tak, to jest bezpiecznie"
          />
          <Dropdown
            border="border-[#FABE24]"
            bg="bg-[#FBD24D]"
            primaryColor="#78350F"
            title="Czy to jest bezpieczne?"
            text="Tak, to jest bezpiecznie"
          />
          <Dropdown
            border="border-[#2DD3BE]"
            bg="bg-[#5EE9D3]"
            primaryColor="#134E4A"
            title="Czy to jest bezpieczne?"
            text="Tak, to jest bezpiecznie"
          />
        </div>
      </div>
    </div>
  );
}
