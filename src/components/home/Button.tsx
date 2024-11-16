'use client';

const colors = {
  pink: 'bg-[#D7B3FD] border-[#BF83FB] hover:bg-[#BF83FB] hover:border-[#A755F6]',
  blue: 'bg-[#7DD2FB] border-[#38BCF7] hover:bg-[#38BCF7] hover:border-[#0EA4E8]',
  orange:
    'bg-[#FBD24D] border-[#FABE24] hover:bg-[#FABE24] hover:border-[#F49D0B]',
  green:
    'bg-[#5EE9D3] border-[#2DD3BE] hover:bg-[#2DD3BE] hover:border-[#14B7A5]'
};

type ButtonProps = {
  children: string;
  className?: string;
  color: keyof typeof colors;
  href?: string;
};

export function Button({ children, className, color, href }: ButtonProps) {
  return href ? (
    <a
      href={href}
      rel="noreferrer noopener"
      target="_blank"
      className={`rounded-[50px] border px-4 py-1 text-sm text-[#404040] transition-colors md:text-lg xl:px-7 xl:py-2 xl:text-2xl ${colors[color]} ${className}`}
    >
      {children}
    </a>
  ) : (
    <button
      type="button"
      className={`rounded-[50px] border px-4 py-1 text-sm text-[#404040] transition-colors md:text-lg xl:px-7 xl:py-2 xl:text-2xl ${colors[color]} ${className}`}
    >
      {children}
    </button>
  );
}
