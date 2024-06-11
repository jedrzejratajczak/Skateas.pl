import { ExclamationMark } from './ExclamationMark';

type TripleExclamationMarkProps = { className?: string };

export function TripleExclamationMark({
  className
}: TripleExclamationMarkProps) {
  return (
    <div className={`absolute font-poetsen-one text-transparent ${className}`}>
      <ExclamationMark className="-left-3.5 -top-2 rotate-3" />
      <ExclamationMark className="-top-[15px] rotate-[17deg]" big />
      <ExclamationMark className="-top-0 left-[13px] rotate-[30deg]" />
    </div>
  );
}
