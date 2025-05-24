'use client';

export const colors = {
  pink: 'bg-[#D7B3FD] border-[#BF83FB] hover:bg-[#BF83FB] hover:border-[#A755F6]',
  blue: 'bg-[#7DD2FB] border-[#38BCF7] hover:bg-[#38BCF7] hover:border-[#0EA4E8]',
  orange:
    'bg-[#FBD24D] border-[#FABE24] hover:bg-[#FABE24] hover:border-[#F49D0B]',
  green:
    'bg-[#5EE9D3] border-[#2DD3BE] hover:bg-[#2DD3BE] hover:border-[#14B7A5]',
  gradient:
    'bg-gradient-to-r from-[#5EE9D3] via-[#FBD24D] to-[#5EE9D3] bg-[length:300%_300%] border-transparent hover:opacity-90'
};

type ButtonProps = {
  children: string;
  className?: string;
  color: keyof typeof colors;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
};

export function Button({
  children,
  className,
  color,
  href,
  type,
  onClick
}: ButtonProps) {
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
      onClick={onClick}
      type={type}
      className={`rounded-[50px] border px-4 py-1 text-sm text-[#404040] transition-colors md:text-lg xl:px-7 xl:py-2 xl:text-2xl ${colors[color]} ${className}`}
    >
      {children}
    </button>
  );
}
