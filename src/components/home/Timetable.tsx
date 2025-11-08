import Image from 'next/image';

import timetableData from '../../../public/timetable.json';
import { SignupModalButton } from './SignupModalButton';

type ButtonColor = 'orange' | 'blue' | 'green';

export function Timetable() {
  return (
    <div className="flex flex-col gap-3 font-roboto text-xs text-white sm:text-base xl:gap-5 xl:text-xl">
      {timetableData.sessions.map(session => (
        <div
          key={`${session.title}-${session.schedule}`}
          className="m-auto grid w-full max-w-[700px] grid-cols-[max-content_1fr_min-content] items-center gap-4 rounded-[50px] bg-[#262626] px-4 py-3 sm:gap-6 sm:px-8 sm:py-6"
        >
          <p
            className="flex max-w-36 flex-col items-center text-center"
            style={{ color: session.ageGroupColor }}
          >
            <Image
              alt=""
              src={session.icon}
              width={session.iconWidth}
              height={session.iconHeight}
              className="m-auto sm:mb-2 sm:scale-150 lg:mb-4 lg:scale-[2]"
            />
            <span>{session.ageGroup}</span>
          </p>
          <div className="flex flex-col justify-center gap-2">
            <p>{session.title}</p>
            <p>{session.schedule}</p>
          </div>
          <SignupModalButton
            color={session.buttonColor as ButtonColor}
            type={session.type}
            group={`${session.title}, ${session.schedule}`}
          >
            Zapisz
          </SignupModalButton>
        </div>
      ))}
    </div>
  );
}
