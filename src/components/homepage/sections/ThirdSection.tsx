import { Offer } from '../Offer';

export function ThirdSection() {
  return (
    <div className="flex flex-col gap-4 p-5" id="thirdSection">
      <Offer
        containerClassName="border-[#2DD3BE] bg-[#5EE9D3]"
        img="/images/offer1.png"
        primaryColor="#134E4A"
        text="To, co zaczęło się jako prosta zajawka, stało się nieodłączną częścią mojego życia..."
        title="Zajęcia indywidualne"
      />
      <Offer
        containerClassName="border-[#FABE24] bg-[#FBD24D]"
        img="/images/offer2.png"
        primaryColor="#78350F"
        text="To, co zaczęło się jako prosta zajawka, stało się nieodłączną częścią mojego życia..."
        title="Zajęcia grupowe"
      />
      <Offer
        containerClassName="border-[#38BCF7] bg-[#7DD2FB]"
        img="/images/offer3.png"
        primaryColor="#0C4A6E"
        text="To, co zaczęło się jako prosta zajawka, stało się nieodłączną częścią mojego życia..."
        title="Warsztaty"
      />
      <Offer
        containerClassName="border-[#BF83FB] bg-[#D7B3FD]"
        img="/images/offer4.png"
        primaryColor="#581C86"
        text="To, co zaczęło się jako prosta zajawka, stało się nieodłączną częścią mojego życia..."
        title="Eventy"
      />
      <div className="flex flex-col items-center gap-2.5">
        <p className="py-1 text-center text-[#FFFFFF]">
          Chcesz nawiązać współpracę w inny sposób? Mogę zorganizować
          zajęcia/pokazy/warsztaty skateboardingowe na Twoim wydarzeniu.
        </p>
        <button className="rounded-[50px] border border-[#2DD3BE] bg-[#5EE9D3] px-2 py-1 text-[#404040]">
          Dowiedz się więcej &gt;&gt;
        </button>
      </div>
    </div>
  );
}
