import Image from 'next/image';
import Link from 'next/link';

type CourseAnnouncementProps = {
  onClose?: () => void;
};

export function CourseAnnouncement({ onClose }: CourseAnnouncementProps) {
  return (
    <div className="rounded-[15px] border-2 border-[#5EE9D3] bg-[#262626] p-4 text-center">
      <div className="relative mb-4">
        <Image
          src="/home/plakat.png"
          alt="Wakacyjne kursy deskorolki we Wrocławiu - SKATE.AS"
          width={800}
          height={1200}
          className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
          priority
        />
      </div>
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
