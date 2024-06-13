import '@/tailwind.css';

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="pl">
    <body className="bg-[#171717] font-inter">{children}</body>
  </html>
);

export const metadata = {
  title: 'Akademia Skateboardingu',
  description: 'Nauka jazdy na deskorolce we Wrocławiu'
};

export default RootLayout;
