import React, { ReactNode } from 'react';

import { Banner } from './Banner';
import { Footer } from './Footer';
import { Navbar } from './Navbar';

const items = [
  {
    alt: 'Skater na deskorolce',
    key: 'baner1',
    message: 'Poznajmy się!',
    src: '/shop/skate_cut.png'
  },
  {
    alt: 'Skater na deskorolce',
    key: 'baner2',
    message: 'bądźmy',
    src: '/shop/skate_cut.png',
    subMessage: 'w kontakcie!'
  },
  {
    alt: 'Skater na deskorolce',
    key: 'baner3',
    message: 'inni',
    src: '/shop/skate_cut.png',
    subMessage: 'pytali o...'
  }
];

type InfoPagesWrapperProps = { children: ReactNode };

export function InfoPagesWrapper({ children }: InfoPagesWrapperProps) {
  return (
    <div>
      <Navbar />
      <Banner items={items} />
      {children}
      <Footer />
    </div>
  );
}
