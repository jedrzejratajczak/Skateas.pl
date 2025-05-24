import Image from 'next/image';

import { Button } from './Button';

export function Locations() {
  const locations = [
    {
      name: 'Final Bowl, Fabryczna',
      mapUrl: 'https://maps.app.goo.gl/wSc5ecE7UBjG7eY28'
    },
    {
      name: 'Skatepark Biskupin',
      mapUrl: 'https://maps.app.goo.gl/4fUBW6XspahSZbU37'
    },
    {
      name: 'Skatepark Sołtysowice',
      mapUrl: 'https://maps.app.goo.gl/m6DicHhEUSfzjzN86'
    }
  ];

  return (
    <div className="m-auto flex w-full max-w-[1000px] flex-wrap justify-center gap-4">
      {locations.map(location => (
        <div
          key={location.name}
          className="flex w-[200px] min-w-[200px] flex-col items-center justify-center gap-3 rounded-[20px] bg-[#262626] py-10 font-roboto text-xs text-white sm:text-base md:w-[250px] xl:w-[350px] xl:gap-5 xl:text-xl"
        >
          <Image
            alt=""
            src="/home/icons/location.svg"
            width={28}
            height={28}
            className="mb-2 md:scale-[1.2] xl:scale-[1.5]"
          />
          <p>{location.name}</p>
          <Button href={location.mapUrl} color="green">
            Zobacz na mapie &gt;&gt;
          </Button>
        </div>
      ))}
    </div>
  );
}
