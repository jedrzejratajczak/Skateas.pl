import { TripleExclamationMark } from './TripleExclamationMark';

type TitleProps = {
  subtitle: string;
  subtitleClassName: string;
  title: string;
  titleClassName: string;
  withExclamations?: boolean;
};

export function Title({
  subtitle,
  subtitleClassName,
  title,
  titleClassName,
  withExclamations = false
}: TitleProps) {
  return (
    <div className="relative text-center font-poetsen-one text-white">
      <p className={`relative text-4xl ${titleClassName}`}>{title}</p>
      <p className={`relative text-2xl ${subtitleClassName}`}>{subtitle}</p>
      {withExclamations && (
        <TripleExclamationMark className="left-[calc(50%+88px)] top-0" />
      )}
    </div>
  );
}
