import '@/tailwind';

import type { Metadata } from 'next';

import { Footer, Navbar } from '@/home';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Akademia Skateboardingu',
              description:
                'Profesjonalna szkoła deskorolki dla dzieci we Wrocławiu',
              url: 'https://skateas.pl',
              telephone: '+48 123 456 789',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Wrocław',
                addressCountry: 'PL'
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: '51.1079',
                longitude: '17.0385'
              },
              openingHours: 'Mo-Su 09:00-18:00',
              priceRange: '80-200 PLN',
              areaServed: 'Wrocław',
              serviceType: 'Zajęcia z deskorolki dla dzieci',
              keywords:
                'zajęcia z deskorolki dla dzieci Wrocław, szkoła deskorolki dla dzieci, nauka jazdy na deskorolce dla dzieci, aktywność na świeżym powietrzu'
            })
          }}
        />
      </head>
      <body className="bg-[#171717] font-inter">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: 'Zajęcia z deskorolki dla dzieci Wrocław | Akademia Skateboardingu',
  description:
    'Profesjonalna szkoła deskorolki dla dzieci we Wrocławiu. Zajęcia z deskorolki, nauka jazdy na deskorolce, aktywność na świeżym powietrzu. Zapisz dziecko na zajęcia!',
  keywords:
    'zajęcia z deskorolki dla dzieci Wrocław, szkoła deskorolki dla dzieci, nauka jazdy na deskorolce dla dzieci, aktywność na świeżym powietrzu, skateboard Wrocław',
  openGraph: {
    title: 'Zajęcia z deskorolki dla dzieci Wrocław | Akademia Skateboardingu',
    description:
      'Profesjonalna szkoła deskorolki dla dzieci we Wrocławiu. Zapisz dziecko na zajęcia z deskorolki!',
    type: 'website',
    locale: 'pl_PL',
    siteName: 'Akademia Skateboardingu'
  },
  icons: {
    icon: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        url: '/favicon_blue/favicon.ico',
        media: '(prefers-color-scheme: light)'
      },
      {
        rel: 'icon',
        type: 'image/x-icon',
        url: '/favicon/favicon.ico',
        media: '(prefers-color-scheme: dark)'
      },
      {
        rel: 'apple-touch-icon',
        type: 'image/png',
        url: '/favicon_blue/apple-touch-icon.png',
        media: '(prefers-color-scheme: light)'
      },
      {
        rel: 'apple-touch-icon',
        type: 'image/png',
        url: '/favicon/apple-touch-icon.png',
        media: '(prefers-color-scheme: dark)'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        url: '/favicon_blue/android-chrome-192x192.png',
        media: '(prefers-color-scheme: light)'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        url: '/favicon/android-chrome-192x192.png',
        media: '(prefers-color-scheme: dark)'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '512x512',
        url: '/favicon_blue/android-chrome-512x512.png',
        media: '(prefers-color-scheme: light)'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '512x512',
        url: '/favicon/android-chrome-512x512.png',
        media: '(prefers-color-scheme: dark)'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/favicon_blue/favicon-32x32.png',
        media: '(prefers-color-scheme: light)'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/favicon/favicon-32x32.png',
        media: '(prefers-color-scheme: dark)'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        url: '/favicon_blue/favicon-16x16.png',
        media: '(prefers-color-scheme: light)'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        url: '/favicon/favicon-16x16.png',
        media: '(prefers-color-scheme: dark)'
      }
    ]
  }
};
