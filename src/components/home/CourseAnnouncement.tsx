import Image from 'next/image';
import Link from 'next/link';

type CourseAnnouncementProps = {
  onClose?: () => void;
};

export function CourseAnnouncement({ onClose }: CourseAnnouncementProps) {
  return (
    <div className="rounded-[15px] border-2 border-[#5EE9D3] bg-[#262626] p-4 text-center">
      <div className="mb-3 flex items-center justify-center gap-2">
        <Image
          src="/home/icons/skateboard.svg"
          alt="Skateboard icon"
          width={24}
          height={24}
          className="h-6 w-6 sm:h-8 sm:w-8"
        />
        <span className="font-poetsen-one text-lg text-[#5EE9D3] sm:text-xl">
          NOWOŚĆ 2025
        </span>
        <Image
          src="/home/icons/skateboard.svg"
          alt="Skateboard icon"
          width={24}
          height={24}
          className="h-6 w-6 sm:h-8 sm:w-8"
        />
      </div>
      <h3 className="mb-2 font-poetsen-one text-base text-[#FBD24D] sm:text-lg">
        Wakacyjne kursy skateboardingu
      </h3>
      <p className="mb-3 font-roboto text-xs text-white sm:text-sm">
        Lipiec i sierpień 2025 w dwóch lokalizacjach:
      </p>
      <div className="mb-3 grid grid-cols-1 gap-2 text-xs sm:grid-cols-2 sm:text-sm">
        <div className="rounded-[10px] bg-[#1a1a1a] p-2">
          <p className="font-bold text-[#7DD2FB]">Skatepark Sołtysowice</p>
        </div>
        <div className="rounded-[10px] bg-[#1a1a1a] p-2">
          <p className="font-bold text-[#7DD2FB]">Skatepark Biskupin</p>
        </div>
      </div>
      <p className="mb-2 font-roboto text-xs text-white sm:text-sm">
        Po więcej informacji{' '}
        <Link
          className="text-[#5EE9D3] hover:text-[#2DD3BE]"
          href="/kontakt"
          onClick={onClose}
        >
          skontaktuj się z nami
        </Link>
        .
      </p>
    </div>
  );
}
