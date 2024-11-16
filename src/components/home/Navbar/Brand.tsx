import Image from 'next/image';

export default function Brand() {
  return (
    <a
      href="/"
      className="flex items-center text-white transition-colors hover:text-purple-400"
    >
      <Image
        src="/home/logo.webp"
        className="pointer-events-none"
        alt="Logo Akademia Skateboardingu"
        width={32}
        height={32}
        style={{ maxWidth: '100%', height: 'auto' }}
      />
      <p className="p-2 font-poetsen-one text-base">Akademia Skateboardingu</p>
    </a>
  );
}
