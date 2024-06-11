import { Dropdown } from '../Dropdown';

export function FifthSection() {
  return (
    <div className="flex flex-col gap-5 p-5">
      <div className="relative">
        <span
          className="absolute -top-0 left-[calc(50%-155px)] -rotate-[20deg] font-poetsen-one text-3xl text-transparent"
          style={{ WebkitTextStroke: '2px #FFFFFF' }}
        >
          ?
        </span>
        <span
          className="absolute -top-0.5 left-[calc(50%-120px)] rotate-[20deg] font-poetsen-one text-4xl text-transparent"
          style={{ WebkitTextStroke: '2px #FFFFFF' }}
        >
          ?
        </span>
        <span
          className="absolute -top-1 left-[calc(50%-75px)] -rotate-[20deg] font-poetsen-one text-5xl text-transparent"
          style={{ WebkitTextStroke: '2px #FFFFFF' }}
        >
          ?
        </span>
        <p className="text-center font-poetsen-one text-4xl text-[#FFFFFF]">
          FAQ
        </p>
        <span
          className="absolute -top-1 left-[calc(50%+50px)] rotate-[20deg] font-poetsen-one text-5xl text-transparent"
          style={{ WebkitTextStroke: '2px #FFFFFF' }}
        >
          ?
        </span>
        <span
          className="absolute -top-0.5 left-[calc(50%+95px)] -rotate-[20deg] font-poetsen-one text-4xl text-transparent"
          style={{ WebkitTextStroke: '2px #FFFFFF' }}
        >
          ?
        </span>
        <span
          className="absolute -top-0 left-[calc(50%+130px)] rotate-[20deg] font-poetsen-one text-3xl text-transparent"
          style={{ WebkitTextStroke: '2px #FFFFFF' }}
        >
          ?
        </span>
      </div>
      <div className="flex flex-col gap-2.5 py-3">
        <Dropdown
          border="border-[#38BCF7]"
          bg="bg-[#7DD2FB]"
          primaryColor="#0C4A6E"
          title="Czy to jest bezpieczne?"
          text="Tak, to jest bezpiecznie"
        />
        <Dropdown
          border="border-[#BF83FB]"
          bg="bg-[#D7B3FD]"
          primaryColor="#581C86"
          title="Czy to jest bezpieczne?"
          text="Tak, to jest bezpiecznie"
        />
        <Dropdown
          border="border-[#FABE24]"
          bg="bg-[#FBD24D]"
          primaryColor="#78350F"
          title="Czy to jest bezpieczne?"
          text="Tak, to jest bezpiecznie"
        />
        <Dropdown
          border="border-[#2DD3BE]"
          bg="bg-[#5EE9D3]"
          primaryColor="#134E4A"
          title="Czy to jest bezpieczne?"
          text="Tak, to jest bezpiecznie"
        />
      </div>
    </div>
  );
}
