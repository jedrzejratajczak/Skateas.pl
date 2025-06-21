'use client';

import { useEffect, useState } from 'react';
import { IoLogoFacebook, IoLogoInstagram } from 'react-icons/io5';

import { CourseModal } from '../CourseModal';
import Brand from './Brand';
import BurgerMenu from './BurgerMenu';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';

export type Element = Sublist | Dropdown | Special;
export type Sublist = { name: string; href: string };
export type Dropdown = { name: string; sublist: Sublist[] };
export type Special = { name: string; special: 'gradient' };

const elements = [
  { name: 'Kursy 2025', special: 'gradient' as const },
  {
    name: 'Oferta',
    sublist: [
      { name: 'Zajęcia grupowe', href: '/oferta/grupowe' },
      { name: 'Zajęcia indywidualne', href: '/oferta/indywidualne' },
      { name: 'Wyjazdy', href: '/oferta/wyjazdy' },
      { name: 'Warsztaty', href: '/oferta/warsztaty' },
      { name: 'Współpraca', href: '/oferta/wspolpraca' },
      { name: 'Cennik', href: '/oferta/cennik' }
    ]
  },
  { name: 'Dokumenty', href: '/dokumenty' },
  { name: 'Galeria', href: '/galeria' },
  { name: 'Kontakt', href: '/kontakt' }
];

const socials = [
  { Icon: IoLogoFacebook, href: 'https://www.facebook.com/SkateAcademy.Wro' },
  {
    Icon: IoLogoInstagram,
    href: 'https://www.instagram.com/akademiaskateboardingu/profilecard'
  }
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const onResize = () => setOpen(false);

    window.addEventListener('resize', onResize);

    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <>
      <nav className="fixed z-40 flex w-full flex-col items-center justify-between border-b border-[#3C3C3C] bg-[#171717]">
        <div className="m-auto flex w-full max-w-[2000px] justify-between px-5 py-2">
          <Brand />
          <BurgerMenu open={open} toggle={() => setOpen(!open)} />
          <DesktopMenu
            elements={elements}
            onSpecialClick={() => setModalOpen(true)}
          />
        </div>
        <MobileMenu
          close={() => setOpen(false)}
          elements={elements}
          open={open}
          socials={socials}
          onSpecialClick={() => setModalOpen(true)}
        />
      </nav>
      <div className="h-[56px]" />
      <CourseModal open={modalOpen} setOpen={setModalOpen} />
    </>
  );
}
