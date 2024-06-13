const colors = {
  green: 'border-[#2DD3BE] bg-[#5EE9D3]',
  orange: 'border-[#FABE24] bg-[#FBD24D]'
};

type ButtonProps = {
  children: string;
  className?: string;
  color: keyof typeof colors;
};

export function Button({ children, className, color }: ButtonProps) {
  return (
    <button
      className={`rounded-[50px] border px-4 py-1 text-sm text-[#404040] ${colors[color]} ${className}`}
    >
      {children}
    </button>
  );
}
