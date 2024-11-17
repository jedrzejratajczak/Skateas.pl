import Image from 'next/image';

import { SignupModalButton } from './SignupModalButton';

export function Timetable() {
  return (
    <div className="flex flex-col gap-3 font-roboto text-xs text-white sm:text-base xl:gap-5 xl:text-xl">
      <div className="m-auto grid w-full max-w-[700px] grid-cols-[max-content_1fr_min-content] items-center gap-4 rounded-[50px] bg-[#262626] px-4 py-3 sm:gap-6 sm:px-8 sm:py-6">
        <p className="flex max-w-36 flex-col items-center text-center text-[#5EE9D3]">
          <Image
            alt=""
            src="/home/icons/poeple-green.svg"
            width={20}
            height={16.41}
            className="m-auto sm:mb-2 sm:scale-150 lg:mb-4 lg:scale-[2]"
          />
          <span>9-15 lat</span>
        </p>
        <div className="flex flex-col justify-center gap-2">
          <p>Grupa podstawowa / średnio zaawansowana</p>
          <p>Śr (czas do ustalenia)</p>
        </div>
        <SignupModalButton
          color="green"
          type="group"
          group="9-15 lat, grupa podstawowa / średnio zaawansowana, śr (czas do ustalenia)"
        >
          Zapisz
        </SignupModalButton>
      </div>
      <div className="m-auto grid w-full max-w-[700px] grid-cols-[max-content_1fr_min-content] items-center gap-4 rounded-[50px] bg-[#262626] px-4 py-3 sm:gap-6 sm:px-8 sm:py-6">
        <p className="flex max-w-36 flex-col items-center text-center text-[#FBD24D]">
          <Image
            alt=""
            src="/home/icons/people-yellow.svg"
            width={24}
            height={19.69}
            className="m-auto sm:mb-2 sm:scale-150 lg:mb-4 lg:scale-[2]"
          />
          <span>9-15 lat</span>
        </p>
        <div className="flex flex-col justify-center gap-2">
          <p>Grupa średnio zaawansowana</p>
          <p>Wt 16:30-18:00</p>
        </div>
        <SignupModalButton
          color="orange"
          type="group"
          group="9-15 lat, grupa średnio zaawansowana, wt 16:30-18:00"
        >
          Zapisz
        </SignupModalButton>
      </div>
    </div>
  );
}
