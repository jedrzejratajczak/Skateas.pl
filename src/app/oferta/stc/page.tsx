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

function FullscreenImage({ src, alt, isOpen, onClose }: { src: string, alt: string, isOpen: boolean, onClose: () => void }) {
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
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 p-4 backdrop-blur-md cursor-zoom-out"
            onClick={onClose}
        >
            <div className="relative h-full w-full max-w-6xl">
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-contain"
                    priority
                />
                <button
                    className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 transition-colors"
                    onClick={onClose}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default function STCPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [fullscreenImage, setFullscreenImage] = useState<{ src: string, alt: string } | null>(null);

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
                    <p className="font-roboto text-base text-[#FBD24D] font-bold xl:text-xl">
                        Lipiec i sierpień 2026 | dzieci i młodzież 8–16 lat
                    </p>
                    <div className="flex flex-col gap-4 font-roboto text-sm text-white sm:text-base xl:text-lg">
                        <p>
                            Skate Trip Camp to zajawkowe półkolonie dla dzieci i młodzieży, które łączą naukę jazdy na deskorolce, aktywne wakacje i niezapomnianą przygodę w gronie rówieśników.
                        </p>
                        <p>
                            Przez 5 dni uczestnicy wspólnie podróżują na 5 różnych skateparków w różnych miastach, poznając nowe miejsca, ludzi i style jazdy – wszystko pod opieką doświadczonych instruktorów Akademii Skateboardingu.
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
                        className="relative h-[300px] w-full max-w-[500px] sm:h-[400px] lg:h-[550px] cursor-zoom-in group"
                        onClick={() => setFullscreenImage({ src: '/stc/stc_plakat.png', alt: 'Skate Trip Camp 2026 Plakat' })}
                    >
                        <Image
                            src="/stc/stc_plakat.png"
                            alt="Skate Trip Camp 2026 Plakat"
                            fill
                            className="rounded-3xl object-contain shadow-2xl transition-transform group-hover:scale-[1.02]"
                            priority
                        />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 rounded-3xl">
                            <span className="bg-black/60 text-white px-4 py-2 rounded-full text-sm">Kliknij aby powiększyć</span>
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
                    <p className="text-center font-roboto text-white max-w-3xl mx-auto">
                        Każdy dzień to nowa destynacja i nowe wyzwania:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 text-center">
                        {[
                            { city: 'Brzeg', desc: 'kryty i otwarty skatepark' },
                            { city: 'Leszno', desc: 'skateplaza' },
                            { city: 'Rawicz', desc: 'nowoczesny pumptrack i skatepark oraz minirampa' },
                            { city: 'Rudna', desc: 'skatepark na świeżym powietrzu' },
                            { city: 'Bielawa', desc: 'jazda w otoczeniu natury' }
                        ].map((item, idx) => (
                            <div key={idx} className="flex flex-col gap-2 p-4 rounded-xl border border-neutral-800 bg-black/40">
                                <span className="font-poetsen-one text-[#5EE9D3] text-xl">{item.city}</span>
                                <span className="font-roboto text-sm text-neutral-300">{item.desc}</span>
                            </div>
                        ))}
                    </div>
                    <p className="text-center font-roboto text-white italic max-w-2xl mx-auto text-sm">
                        Dzieci uczą się adaptować do różnych przeszkód i nawierzchni, rozwijają technikę, pewność siebie i kreatywność na desce.
                    </p>
                </div>
            </SectionContainer>

            {/* Reorganized Section: Schedule next to Program */}
            <SectionContainer className="grid grid-cols-1 lg:grid-cols-[1fr,450px] gap-12 py-16 items-start">
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
                            { time: '13:00–15:00', task: 'drugi trening, gry, wyzwania i zabawy na deskorolce' },
                            { time: '15:30–16:00', task: 'powrót i odbiór dzieci' }
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-4">
                                <span className="font-bold text-[#D7B3FD] min-w-[100px]">{item.time}</span>
                                <span className="h-[2px] flex-1 bg-neutral-800"></span>
                                <span className="text-right">{item.task}</span>
                            </div>
                        ))}
                    </div>
                    <p className="font-roboto text-neutral-400 text-sm">
                        Program jest intensywny, ale dostosowany do wieku i możliwości uczestników.
                    </p>
                </div>

                <div
                    className="relative h-[400px] w-full cursor-zoom-in group"
                    onClick={() => setFullscreenImage({ src: '/stc/stc_harmonogram.png', alt: 'Skate Trip Camp 2026 Harmonogram' })}
                >
                    <Image
                        src="/stc/stc_harmonogram.png"
                        alt="Skate Trip Camp 2026 Harmonogram"
                        fill
                        className="rounded-3xl object-contain shadow-2xl transition-transform group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 rounded-3xl">
                        <span className="bg-black/60 text-white px-4 py-2 rounded-full text-sm">Kliknij aby powiększyć</span>
                    </div>
                </div>
            </SectionContainer>

            {/* Reorganized Section: Lessons next to Safety */}
            <SectionContainer className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-16 bg-neutral-900/30">
                <div className="flex flex-col gap-8">
                    <Title
                        title="Czego nauczymy"
                        subtitle="Twoje dziecko?"
                        titleClassName="text-[#FABE24] -left-4"
                        subtitleClassName="left-6"
                    />
                    <ul className="flex flex-col gap-3 font-roboto text-white list-none">
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
                    <ul className="flex flex-col gap-3 font-roboto text-white list-none">
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
                <div className="flex flex-col gap-8 items-center text-center">
                    <Title
                        title="Dlaczego warto wybrać"
                        subtitle="Skate Trip Camp?"
                        titleClassName="text-[#FBD24D] -left-8"
                        subtitleClassName="left-10"
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl">
                        {[
                            'aktywne wakacje zamiast ekranów',
                            'rozwój fizyczny i społeczny',
                            'bezpieczne środowisko',
                            'pasja, która zostaje na lata',
                            'dzieci wracają zmęczone… i szczęśliwe 😄'
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center justify-center p-6 rounded-2xl bg-gradient-to-br from-neutral-800 to-black border border-neutral-700 font-roboto text-white h-full min-h-[100px]">
                                <p>{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </SectionContainer>

            {/* Softened Section: Informacje organizacyjne */}
            <SectionContainer className="flex flex-col gap-12 py-16 bg-[#1a1a1a] border-y border-[#FBD24D]/30 rounded-t-[50px] text-white">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center px-4 lg:px-0">
                    <div className="flex flex-col gap-6">
                        <Title
                            title="Informacje"
                            subtitle="organizacyjne"
                            titleClassName="text-[#FBD24D] -left-4"
                            subtitleClassName="left-6"
                        />
                        <div className="flex flex-col gap-3 font-roboto text-lg">
                            <p><strong>Wiek:</strong> 8–16 lat</p>
                            <p><strong>Czas trwania:</strong> 5 dni (pon.–pt.)</p>
                            <p><strong>Termin:</strong> lipiec & sierpień 2026</p>
                            <p className="text-2xl mt-4 font-poetsen-one font-bold text-[#FBD24D]"><strong>Koszt:</strong> 1290 zł / tydzień</p>
                        </div>
                        <div className="flex flex-col gap-4 mt-6">
                            <p className="font-roboto italic text-neutral-400">
                                Masz pytania? Zadzwoń lub napisz:
                            </p>
                            <PhoneNumber />
                        </div>
                    </div>

                    <div className="flex flex-col gap-8 bg-[#FBD24D]/5 p-8 rounded-3xl border border-[#FBD24D]/20 backdrop-blur-sm">
                        <p className="text-xl font-poetsen-one text-center uppercase tracking-wider text-[#FBD24D]">
                            Zapisz swoje dziecko już dziś!
                        </p>
                        <Button
                            color="orange"
                            onClick={() => setIsModalOpen(true)}
                            className="w-full text-center py-4 text-xl shadow-xl hover:scale-[1.02] transition-transform"
                        >
                            OTWÓRZ FORMULARZ ZAPISÓW &gt;&gt;
                        </Button>
                        <p className="text-center text-sm font-roboto text-neutral-400">
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
