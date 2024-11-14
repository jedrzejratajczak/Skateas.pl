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
      <body className="bg-[#171717] font-inter">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: 'Akademia Skateboardingu',
  description: 'Nauka jazdy na deskorolce we Wrocławiu',
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
