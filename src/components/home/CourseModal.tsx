'use client';

import { useEffect } from 'react';

import { CourseAnnouncement } from './CourseAnnouncement';

type CourseModalProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

export function CourseModal({ open, setOpen }: CourseModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'auto';
    };
  }, [open, setOpen]);

  if (!open) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setOpen(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 font-roboto text-xs sm:text-base xl:text-xl"
      onClick={handleBackdropClick}
    >
      <div className="absolute left-1/2 top-1/2 w-[90%] max-w-[500px] translate-x-[-50%] translate-y-[-50%] sm:w-[400px] xl:w-[500px]">
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4 z-10 flex h-4 w-4 items-center justify-center rounded-full bg-[#5EE9D3] text-[#404040] transition-colors hover:bg-[#9efff1] sm:h-5 sm:w-5"
          aria-label="Zamknij modal"
        >
          <span className="-mt-px leading-none sm:-mt-[2px] xl:-mt-[3px]">
            ×
          </span>
        </button>
        <CourseAnnouncement onClose={() => setOpen(false)} />
      </div>
    </div>
  );
}
