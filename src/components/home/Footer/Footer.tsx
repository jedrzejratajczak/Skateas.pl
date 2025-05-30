import Image from 'next/image';
import { IoLogoFacebook, IoLogoInstagram } from 'react-icons/io5';

import { FooterItem } from './FooterItem';

export function Footer() {
  return (
    <footer className="w-full bg-black text-white">
      <div className="m-auto flex max-w-[2000px] flex-col justify-between gap-5 px-5 py-6 sm:flex-row sm:flex-wrap sm:px-12 md:px-12 lg:px-16">
        <div>
          <h3 className="mb-2 max-w-fit border-b border-amber-300 pb-2 font-poetsen-one text-base lg:text-xl">
            Menu
          </h3>
          <ul className="flex flex-col gap-2">
            <FooterItem href="/">Strona główna</FooterItem>
            <li className="max-w-fit font-roboto text-xs lg:text-base">
              <p>Oferta</p>
              <ul className="mt-2 flex flex-col gap-2 pl-4">
                <FooterItem href="/oferta/grupowe">Zajęcia grupowe</FooterItem>
                <FooterItem href="/oferta/indywidualne">
                  Zajęcia indywidualne
                </FooterItem>
                <FooterItem href="/oferta/wyjazdy">Wyjazdy</FooterItem>
                <FooterItem href="/oferta/warsztaty">Warsztaty</FooterItem>
                <FooterItem href="/oferta/wspolpraca">Współpraca</FooterItem>
              </ul>
            </li>
            <FooterItem href="/#instruktor">Instruktor</FooterItem>
            <FooterItem href="/#opinie">Opinie</FooterItem>
            <FooterItem href="/galeria">Galeria</FooterItem>
            <FooterItem href="/kontakt">Kontakt</FooterItem>
          </ul>
        </div>
        <div className="flex flex-col">
          <h3 className="mb-2 max-w-fit border-b border-amber-300 pb-2 font-poetsen-one text-base lg:text-xl">
            Dokumenty
          </h3>
          <ul className="flex flex-col gap-2">
            <FooterItem
              href="/home/docs/polityka-prywatnosci.pdf"
              linkProps={{ target: '_blank', rel: 'noreferrer noopener' }}
            >
              Polityka prywatności
            </FooterItem>
            <FooterItem
              href="/home/docs/regulamin.pdf"
              linkProps={{ target: '_blank', rel: 'noreferrer noopener' }}
            >
              Regulamin
            </FooterItem>
            <FooterItem
              href="/home/docs/zgoda-na-udzial-w-zajeciach.pdf"
              linkProps={{ target: '_blank', rel: 'noreferrer noopener' }}
            >
              Zgoda na udział w zajęciach
            </FooterItem>
            <FooterItem href="/oferta/cennik">Cennik</FooterItem>
            <FooterItem
              href="/home/docs/zgoda-na-wycieczke.pdf"
              linkProps={{ target: '_blank', rel: 'noreferrer noopener' }}
            >
              Zgoda na wycieczkę
            </FooterItem>
          </ul>
        </div>
        <div className="flex w-full flex-col items-end lg:w-fit">
          <div className="flex items-center gap-2 lg:gap-4">
            <Image
              src="/home/logo.webp"
              alt="Logo Akademii Skateboardingu"
              width={20}
              height={20}
              className="pointer-events-none lg:scale-150"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
            <p className="py-1 text-end font-poetsen-one text-sm text-white lg:text-xl">
              Akademia Skateboardingu
            </p>
          </div>
          <p className="font-roboto text-xs font-semibold text-amber-300 lg:text-sm">
            Jeździj z nami!
          </p>
          <ul className="flex gap-2 pt-2 lg:gap-4 lg:text-sm">
            <li className="hover:text-purple-400">
              <a
                href="https://www.facebook.com/SkateAcademy.Wro"
                aria-label="Go to Facebook"
                target="_blank"
                rel="noreferrer noopener"
              >
                <IoLogoFacebook size={16} className="lg:scale-150" />
              </a>
            </li>
            <li className="hover:text-purple-400">
              <a
                href="https://www.instagram.com/akademiaskateboardingu/profilecard/"
                aria-label="Go to Instagram"
                target="_blank"
                rel="noreferrer noopener"
              >
                <IoLogoInstagram size={16} className="lg:scale-150" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-amber-300 px-5 py-2 text-center font-poetsen-one text-xs">
        {new Date().getFullYear()} © Copyright Akademia Skateboardingu
      </div>
    </footer>
  );
}
