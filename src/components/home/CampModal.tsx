'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import Link from 'next/link';

type CampModalProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const images = [
  {
    src: '/stc/stc_plakat.png',
    alt: 'Skate Trip Camp 2026 - Plakat',
    title: 'SKATE TRIP CAMP 2026'
  },
  {
    src: '/stc/stc_harmonogram.png',
    alt: 'Skate Trip Camp 2026 - Harmonogram',
    title: 'HARMONOGRAM'
  }
];

function CampModalContent({ setOpen }: { setOpen: (open: boolean) => void }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex(prev => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(prev => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-2 backdrop-blur-md sm:p-4">
      <div className="relative flex h-full max-h-[95vh] w-full max-w-5xl flex-col items-center justify-between rounded-3xl bg-[#1a1a1a] p-4 shadow-2xl sm:p-8">
        {/* Header */}
        <div className="flex w-full items-center justify-between px-2 pb-4 sm:px-4">
          <h2 className="font-poetsen-one text-xl text-[#FBD24D] sm:text-3xl">
            {images[currentIndex].title}
          </h2>
          <button
            onClick={() => setOpen(false)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FBD24D] text-black transition-transform hover:scale-110 active:scale-95"
            aria-label="Zamknij"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Carousel Content */}
        <div className="relative flex w-full flex-1 items-center justify-center overflow-hidden">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 z-10 hidden h-12 w-12 items-center justify-center rounded-full bg-black/50 text-[#FBD24D] transition-all hover:scale-110 hover:bg-black/80 active:scale-95 lg:flex"
            aria-label="Poprzedni"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="h-8 w-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <div className="relative h-full w-full">
            <Image
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              fill
              className="object-contain"
              priority
            />
          </div>

          <button
            onClick={nextSlide}
            className="absolute right-0 z-10 hidden h-12 w-12 items-center justify-center rounded-full bg-black/50 text-[#FBD24D] transition-all hover:scale-110 hover:bg-black/80 active:scale-95 lg:flex"
            aria-label="Następny"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="h-8 w-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Footer / Controls */}
        <div className="flex w-full flex-col items-center gap-4 pt-4">
          <div className="flex gap-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-3 w-3 rounded-full transition-all ${
                  currentIndex === idx
                    ? 'w-8 bg-[#FBD24D]'
                    : 'bg-neutral-600 hover:bg-neutral-400'
                }`}
                aria-label={`Slajd ${idx + 1}`}
              />
            ))}
          </div>

          <div className="flex w-full justify-between gap-4 lg:hidden">
            <Link
              href="/oferta/stc"
              onClick={() => setOpen(false)}
              className="flex-1 rounded-full bg-[#FBD24D] py-3 text-center font-bold text-black active:scale-95"
            >
              WIĘCEJ INFO
            </Link>
            <button
              onClick={nextSlide}
              className="flex-1 rounded-full bg-neutral-800 py-3 font-bold text-[#FBD24D] active:scale-95"
            >
              NASTĘPNY
            </button>
          </div>

          <Link
            href="/oferta/stc"
            onClick={() => setOpen(false)}
            className="hidden rounded-full bg-[#FBD24D] px-8 py-2 font-bold text-black transition-all hover:bg-[#ffe082] hover:shadow-lg active:scale-95 lg:block"
          >
            DOWIEDZ SIĘ WIĘCEJ &gt;&gt;
          </Link>
        </div>
      </div>
    </div>
  );
}

export function CampModal({ open, setOpen }: CampModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  if (!mounted || !open) return null;

  return createPortal(<CampModalContent setOpen={setOpen} />, document.body);
}
