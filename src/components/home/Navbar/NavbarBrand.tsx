import Image from 'next/image';

export default function NavbarBrand() {
  return (
    <div className="flex items-center">
      <Image
        src="/home/logo.webp"
        className="pointer-events-none"
        alt=""
        width={32}
        height={32}
      />
      <p className="p-2 font-poetsen-one text-base text-white">
        Akademia Skateboardingu
      </p>
    </div>
  );
}
