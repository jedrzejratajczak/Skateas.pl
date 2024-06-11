type ExclamationMarkProps = { className: string; big?: boolean };

export function ExclamationMark({
  className,
  big = false
}: ExclamationMarkProps) {
  return (
    <span
      className={`absolute ${big ? 'text-4xl' : 'text-2xl'} ${className}`}
      style={{ WebkitTextStroke: big ? '3px #FFFFFF' : '2px #FFFFFF' }}
    >
      !
    </span>
  );
}
