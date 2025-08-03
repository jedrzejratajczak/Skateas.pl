import Image from 'next/image';

import { SignupModalButton } from './SignupModalButton';

export function Timetable() {
  return (
    <div className="flex flex-col gap-3 font-roboto text-xs text-white sm:text-base xl:gap-5 xl:text-xl">
      <div className="m-auto grid w-full max-w-[700px] grid-cols-[max-content_1fr_min-content] items-center gap-4 rounded-[50px] bg-[#262626] px-4 py-3 sm:gap-6 sm:px-8 sm:py-6">
        <p className="flex max-w-36 flex-col items-center text-center text-[#FBD24D]">
          <Image
            alt=""
            src="/home/icons/people-yellow.svg"
            width={24}
            height={19.69}
            className="m-auto sm:mb-2 sm:scale-150 lg:mb-4 lg:scale-[2]"
          />
          <span>Każdy wiek</span>
        </p>
        <div className="flex flex-col justify-center gap-2">
          <p>Grupa open</p>
          <p>Wtorek 18:00-19:00, Sołtysowice</p>
        </div>
        <SignupModalButton
          color="orange"
          type="group"
          group="Grupa open, Wtorek 18:00-19:00, Sołtysowice"
        >
          Zapisz
        </SignupModalButton>
      </div>
      <div className="m-auto grid w-full max-w-[700px] grid-cols-[max-content_1fr_min-content] items-center gap-4 rounded-[50px] bg-[#262626] px-4 py-3 sm:gap-6 sm:px-8 sm:py-6">
        <p className="flex max-w-36 flex-col items-center text-center text-[#5EE9D3]">
          <Image
            alt=""
            src="/home/icons/poeple-green.svg"
            width={20}
            height={16.41}
            className="m-auto sm:mb-2 sm:scale-150 lg:mb-4 lg:scale-[2]"
          />
          <span>Każdy wiek</span>
        </p>
        <div className="flex flex-col justify-center gap-2">
          <p>Grupa open</p>
          <p>Środa 16:30-17:30, Biskupin</p>
        </div>
        <SignupModalButton
          color="green"
          type="group"
          group="Grupa open, Środa 16:30-17:30, Biskupin"
        >
          Zapisz
        </SignupModalButton>
      </div>
    </div>
  );
}
