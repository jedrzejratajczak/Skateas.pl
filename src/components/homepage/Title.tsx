import { TripleExclamationMark } from './TripleExclamationMark';

type TitleProps = {
  subtitle?: string;
  subtitleClassName?: string;
  title: string;
  titleClassName?: string;
  withExclamations?: boolean;
  withQuestions?: boolean;
};

export function Title({
  subtitle,
  subtitleClassName,
  title,
  titleClassName,
  withExclamations = false,
  withQuestions = false
}: TitleProps) {
  return (
    <div className="relative text-center font-poetsen-one text-white">
      {withQuestions && (
        <>
          <span
            className="absolute -top-0 left-[calc(50%-155px)] -rotate-[20deg] font-poetsen-one text-3xl text-transparent"
            style={{ WebkitTextStroke: '2px #FFFFFF' }}
          >
            ?
          </span>
          <span
            className="absolute -top-0.5 left-[calc(50%-120px)] rotate-[20deg] font-poetsen-one text-4xl text-transparent"
            style={{ WebkitTextStroke: '2px #FFFFFF' }}
          >
            ?
          </span>
          <span
            className="absolute -top-1 left-[calc(50%-75px)] -rotate-[20deg] font-poetsen-one text-5xl text-transparent"
            style={{ WebkitTextStroke: '2px #FFFFFF' }}
          >
            ?
          </span>
        </>
      )}
      <p className={`relative text-4xl ${titleClassName}`}>{title}</p>
      {subtitle && (
        <p className={`relative text-2xl ${subtitleClassName}`}>{subtitle}</p>
      )}
      {withExclamations && (
        <TripleExclamationMark className="left-[calc(50%+88px)] top-0" />
      )}
      {withQuestions && (
        <>
          <span
            className="absolute -top-1 left-[calc(50%+50px)] rotate-[20deg] font-poetsen-one text-5xl text-transparent"
            style={{ WebkitTextStroke: '2px #FFFFFF' }}
          >
            ?
          </span>
          <span
            className="absolute -top-0.5 left-[calc(50%+95px)] -rotate-[20deg] font-poetsen-one text-4xl text-transparent"
            style={{ WebkitTextStroke: '2px #FFFFFF' }}
          >
            ?
          </span>
          <span
            className="absolute -top-0 left-[calc(50%+130px)] rotate-[20deg] font-poetsen-one text-3xl text-transparent"
            style={{ WebkitTextStroke: '2px #FFFFFF' }}
          >
            ?
          </span>
        </>
      )}
    </div>
  );
}
