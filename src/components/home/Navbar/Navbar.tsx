'use client';

import { useEffect, useState } from 'react';
import { IoLogoFacebook, IoLogoInstagram } from 'react-icons/io5';

import Brand from './Brand';
import BurgerMenu from './BurgerMenu';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';

export type Element = Sublist | Dropdown;
export type Sublist = { name: string; href: string };
export type Dropdown = { name: string; sublist: Sublist[] };

const elements = [
  {
    name: 'Oferta',
    sublist: [
      { name: 'Zajęcia grupowe', href: '/oferta/grupowe' },
      { name: 'Zajęcia indywidualne', href: '/oferta/indywidualne' },
      { name: 'Wyjazdy', href: '/oferta/wyjazdy' },
      { name: 'Warsztaty', href: '/oferta/warsztaty' },
      { name: 'Współpraca', href: '/oferta/wspolpraca' }
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

  useEffect(() => {
    const onResize = () => setOpen(false);

    window.addEventListener('resize', onResize);

    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <>
      <nav className="fixed z-50 flex w-full flex-col items-center justify-between border-b border-[#3C3C3C] bg-[#171717]">
        <div className="m-auto flex w-full max-w-[2000px] justify-between px-5 py-2">
          <Brand />
          <BurgerMenu open={open} toggle={() => setOpen(!open)} />
          <DesktopMenu elements={elements} />
        </div>
        <MobileMenu
          close={() => setOpen(false)}
          elements={elements}
          open={open}
          socials={socials}
        />
      </nav>
      <div className="h-[56px]" />
    </>
  );
}
