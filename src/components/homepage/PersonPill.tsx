import Image from 'next/image';

import { TripleExclamationMark } from './TripleExclamationMark';

export function PersonPill() {
  return (
    <div className="relative">
      <TripleExclamationMark className="-top-6 right-8" />
      <div className="flex h-[280px] w-[100px] flex-col justify-end gap-2.5 overflow-hidden rounded-full bg-[#FBD24D]">
        <p className="text-center font-poetsen-one text-2xl text-[#0C4A6E]">
          Adam
        </p>
        <div className="relative top-2 h-[200px]">
          <Image
            src="/images/adam.png"
            alt=""
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
}
