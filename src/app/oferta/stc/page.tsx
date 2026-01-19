'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import {
  SectionContainer,
  Title,
  QuestionFormSection,
  PhoneNumber,
  STCSignupModal,
  Button
} from '@/components/home';

function FullscreenImage({
  src,
  alt,
  isOpen,
  onClose
}: {
  src: string;
  alt: string;
  isOpen: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex cursor-zoom-out items-center justify-center bg-black/95 p-4 backdrop-blur-md"
      onClick={onClose}
    >
      <div className="relative h-full w-full max-w-6xl">
        <Image src={src} alt={alt} fill className="object-contain" priority />
        <button
          className="absolute right-4 top-4 rounded-full bg-white/20 p-2 text-white transition-colors hover:bg-white/40"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="h-8 w-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default function STCPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fullscreenImage, setFullscreenImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  return (
    <>
      <SectionContainer className="grid grid-cols-1 items-center gap-10 py-10 lg:grid-cols-[1fr,1fr] xl:min-h-[600px]">
        <div className="flex flex-col gap-6">
          <Title
            title="Skate Trip Camp"
            subtitle="2026"
            titleClassName="text-[#FBD24D] -left-4 md:-left-8"
            subtitleClassName="left-6 md:left-10"
          />
          <h2 className="font-poetsen-one text-xl text-white sm:text-2xl">
            Aktywne półkolonie na deskorolce 🚐🛹
          </h2>
          <p className="font-roboto text-base font-bold text-[#FBD24D] xl:text-xl">
            Lipiec i sierpień 2026 | dzieci i młodzież 8–16 lat
          </p>
          <div className="flex flex-col gap-4 font-roboto text-sm text-white sm:text-base xl:text-lg">
            <p>
              Skate Trip Camp to zajawkowe półkolonie dla dzieci i młodzieży,
              które łączą naukę jazdy na deskorolce, aktywne wakacje i
              niezapomnianą przygodę w gronie rówieśników.
            </p>
            <p>
              Przez 5 dni uczestnicy wspólnie podróżują na 5 różnych skateparków
              w różnych miastach, poznając nowe miejsca, ludzi i style jazdy –
              wszystko pod opieką doświadczonych instruktorów Akademii
              Skateboardingu.
            </p>
          </div>
          <Button
            color="orange"
            onClick={() => setIsModalOpen(true)}
            className="w-fit"
          >
            ZAPISZ SIĘ TERAZ &gt;&gt;
          </Button>
        </div>
        <div className="relative flex justify-center">
          <div
            className="group relative h-[300px] w-full max-w-[500px] cursor-zoom-in sm:h-[400px] lg:h-[550px]"
            onClick={() =>
              setFullscreenImage({
                src: '/stc/stc_plakat.png',
                alt: 'Skate Trip Camp 2026 Plakat'
              })
            }
          >
            <Image
              src="/stc/stc_plakat.png"
              alt="Skate Trip Camp 2026 Plakat"
              fill
              className="rounded-3xl object-contain shadow-2xl transition-transform group-hover:scale-[1.02]"
              priority
            />
            <div className="absolute inset-0 flex items-center justify-center rounded-3xl bg-black/20 opacity-0 transition-opacity group-hover:opacity-100">
              <span className="rounded-full bg-black/60 px-4 py-2 text-sm text-white">
                Kliknij aby powiększyć
              </span>
            </div>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer className="flex flex-col gap-10 bg-neutral-900/50 py-16">
        <div className="flex flex-col gap-8">
          <Title
            title="Jak wygląda tydzień"
            subtitle="Skate Trip Camp?"
            titleClassName="text-[#5EE9D3] -left-4"
            subtitleClassName="left-6"
          />
          <p className="mx-auto max-w-3xl text-center font-roboto text-white">
            Każdy dzień to nowa destynacja i nowe wyzwania:
          </p>
          <div className="grid grid-cols-1 gap-6 text-center md:grid-cols-2 lg:grid-cols-5">
            {[
              { city: 'Brzeg', desc: 'kryty i otwarty skatepark' },
              { city: 'Leszno', desc: 'skateplaza' },
              {
                city: 'Rawicz',
                desc: 'nowoczesny pumptrack i skatepark oraz minirampa'
              },
              { city: 'Rudna', desc: 'skatepark na świeżym powietrzu' },
              { city: 'Bielawa', desc: 'jazda w otoczeniu natury' }
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col gap-2 rounded-xl border border-neutral-800 bg-black/40 p-4"
              >
                <span className="font-poetsen-one text-xl text-[#5EE9D3]">
                  {item.city}
                </span>
                <span className="font-roboto text-sm text-neutral-300">
                  {item.desc}
                </span>
              </div>
            ))}
          </div>
          <p className="mx-auto max-w-2xl text-center font-roboto text-sm italic text-white">
            Dzieci uczą się adaptować do różnych przeszkód i nawierzchni,
            rozwijają technikę, pewność siebie i kreatywność na desce.
          </p>
        </div>
      </SectionContainer>

      {/* Reorganized Section: Schedule next to Program */}
      <SectionContainer className="grid grid-cols-1 items-start gap-12 py-16 lg:grid-cols-[1fr,450px]">
        <div className="flex flex-col gap-8">
          <Title
            title="Dzień"
            subtitle="półkolonii"
            titleClassName="text-[#D7B3FD] -left-4"
            subtitleClassName="left-6"
          />
          <div className="flex flex-col gap-4 font-roboto text-white">
            {[
              { time: '8:00', task: 'zbiórka i wyjazd' },
              { time: '9:00–12:00', task: 'treningi w skateparku' },
              { time: '12:30', task: 'przerwa obiadowa i regeneracja' },
              {
                time: '13:00–15:00',
                task: 'drugi trening, gry, wyzwania i zabawy na deskorolce'
              },
              { time: '15:30–16:00', task: 'powrót i odbiór dzieci' }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <span className="min-w-[100px] font-bold text-[#D7B3FD]">
                  {item.time}
                </span>
                <span className="h-[2px] flex-1 bg-neutral-800"></span>
                <span className="text-right">{item.task}</span>
              </div>
            ))}
          </div>
          <p className="font-roboto text-sm text-neutral-400">
            Program jest intensywny, ale dostosowany do wieku i możliwości
            uczestników.
          </p>
        </div>

        <div
          className="group relative h-[400px] w-full cursor-zoom-in"
          onClick={() =>
            setFullscreenImage({
              src: '/stc/stc_harmonogram.png',
              alt: 'Skate Trip Camp 2026 Harmonogram'
            })
          }
        >
          <Image
            src="/stc/stc_harmonogram.png"
            alt="Skate Trip Camp 2026 Harmonogram"
            fill
            className="rounded-3xl object-contain shadow-2xl transition-transform group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 flex items-center justify-center rounded-3xl bg-black/20 opacity-0 transition-opacity group-hover:opacity-100">
            <span className="rounded-full bg-black/60 px-4 py-2 text-sm text-white">
              Kliknij aby powiększyć
            </span>
          </div>
        </div>
      </SectionContainer>

      {/* Reorganized Section: Lessons next to Safety */}
      <SectionContainer className="grid grid-cols-1 gap-12 bg-neutral-900/30 py-16 lg:grid-cols-2">
        <div className="flex flex-col gap-8">
          <Title
            title="Czego nauczymy"
            subtitle="Twoje dziecko?"
            titleClassName="text-[#FABE24] -left-4"
            subtitleClassName="left-6"
          />
          <ul className="flex list-none flex-col gap-3 font-roboto text-white">
            {[
              'bezpiecznych podstaw jazdy lub nowych tricków',
              'kontroli nad deską i ciałem',
              'zasad poruszania się po skateparku',
              'współpracy, wzajemnego wsparcia i szacunku',
              'odwagi i wiary we własne możliwości'
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="text-[#FABE24]">✔</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-8">
          <Title
            title="Bezpieczeństwo"
            subtitle="i opieka"
            titleClassName="text-[#5EE9D3] -left-4"
            subtitleClassName="left-6"
          />
          <ul className="flex list-none flex-col gap-3 font-roboto text-white">
            {[
              'zajęcia prowadzone przez doświadczonych instruktorów',
              'stała opieka wychowawcza',
              'kaski i ochraniacze zalecane i kontrolowane',
              'sprawdzony transport i plan dnia'
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="text-[#5EE9D3]">🛡</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </SectionContainer>

      <SectionContainer className="flex flex-col gap-12 py-16">
        <div className="flex flex-col items-center gap-8 text-center">
          <Title
            title="Dlaczego warto wybrać"
            subtitle="Skate Trip Camp?"
            titleClassName="text-[#FBD24D] -left-8"
            subtitleClassName="left-10"
          />
          <div className="grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              'aktywne wakacje zamiast ekranów',
              'rozwój fizyczny i społeczny',
              'bezpieczne środowisko',
              'pasja, która zostaje na lata',
              'dzieci wracają zmęczone… i szczęśliwe 😄'
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex h-full min-h-[100px] items-center justify-center rounded-2xl border border-neutral-700 bg-gradient-to-br from-neutral-800 to-black p-6 font-roboto text-white"
              >
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* Softened Section: Informacje organizacyjne */}
      <SectionContainer className="flex flex-col gap-12 rounded-t-[50px] border-y border-[#FBD24D]/30 bg-[#1a1a1a] py-16 text-white">
        <div className="grid grid-cols-1 items-center gap-10 px-4 lg:grid-cols-2 lg:px-0">
          <div className="flex flex-col gap-6">
            <Title
              title="Informacje"
              subtitle="organizacyjne"
              titleClassName="text-[#FBD24D] -left-4"
              subtitleClassName="left-6"
            />
            <div className="flex flex-col gap-3 font-roboto text-lg">
              <p>
                <strong>Wiek:</strong> 8–16 lat
              </p>
              <p>
                <strong>Czas trwania:</strong> 5 dni (pon.–pt.)
              </p>
              <p>
                <strong>Termin:</strong> lipiec & sierpień 2026
              </p>
              <p className="mt-4 font-poetsen-one text-2xl font-bold text-[#FBD24D]">
                <strong>Koszt:</strong> 1290 zł / tydzień
              </p>
            </div>
            <div className="mt-6 flex flex-col gap-4">
              <p className="font-roboto italic text-neutral-400">
                Masz pytania? Zadzwoń lub napisz:
              </p>
              <PhoneNumber />
            </div>
          </div>

          <div className="flex flex-col gap-8 rounded-3xl border border-[#FBD24D]/20 bg-[#FBD24D]/5 p-8 backdrop-blur-sm">
            <p className="text-center font-poetsen-one text-xl uppercase tracking-wider text-[#FBD24D]">
              Zapisz swoje dziecko już dziś!
            </p>
            <Button
              color="orange"
              onClick={() => setIsModalOpen(true)}
              className="w-full py-4 text-center text-xl shadow-xl transition-transform hover:scale-[1.02]"
            >
              OTWÓRZ FORMULARZ ZAPISÓW &gt;&gt;
            </Button>
            <p className="text-center font-roboto text-sm text-neutral-400">
              Liczba miejsc jest ograniczona. Decyduje kolejność zgłoszeń.
            </p>
          </div>
        </div>
      </SectionContainer>

      <STCSignupModal open={isModalOpen} setOpen={setIsModalOpen} />
      <QuestionFormSection />

      {fullscreenImage && (
        <FullscreenImage
          src={fullscreenImage.src}
          alt={fullscreenImage.alt}
          isOpen={true}
          onClose={() => setFullscreenImage(null)}
        />
      )}
    </>
  );
}
