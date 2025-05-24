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
      <p className="font-roboto text-xs text-white sm:text-sm">
        Lipiec i sierpień 2025 w dwóch lokalizacjach:
      </p>
      <p className="mb-3 font-roboto text-xs text-white sm:text-sm">
        Skatepark Biskupin i Skatepark Sołtysowice.
      </p>
      <div className="mb-3 flex justify-center text-xs sm:text-sm">
        <div className="rounded-[10px] bg-[#1a1a1a] px-4 py-2">
          <p className="font-bold text-[#7DD2FB] hover:text-[#a1e0ff]">
            <Link href="/oferta/grupowe#terminy" onClick={onClose}>
              Zapisz się na kurs!
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
