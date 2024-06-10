type TripleExclamationMarkProps = { className?: string };

export function TripleExclamationMark({
  className
}: TripleExclamationMarkProps) {
  return (
    <div className={`absolute ${className}`}>
      <span
        className="absolute -top-2 left-[88px] rotate-3 font-poetsen-one text-2xl text-transparent"
        style={{ WebkitTextStroke: '2px #FFFFFF' }}
      >
        !
      </span>
      <span
        className="absolute -top-[15px] left-[102px] rotate-[17deg] font-poetsen-one text-4xl text-transparent"
        style={{ WebkitTextStroke: '3px #FFFFFF' }}
      >
        !
      </span>
      <span
        className="absolute -top-0 left-[115px] rotate-[30deg] font-poetsen-one text-2xl text-transparent"
        style={{ WebkitTextStroke: '2px #FFFFFF' }}
      >
        !
      </span>
    </div>
  );
}
