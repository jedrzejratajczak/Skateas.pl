import { TripleExclamationMark } from './TripleExclamationMark';
import { TripleQuestionMark } from './TripleQuestionMark';

type TitleProps = {
  className?: string;
  decorationClassName?: string;
  subtitle?: string;
  subtitleClassName?: string;
  title: string;
  titleClassName?: string;
  withExclamations?: boolean;
  withQuestions?: boolean;
  withQuestionsLeft?: boolean;
};

export function Title({
  className,
  decorationClassName,
  subtitle,
  subtitleClassName,
  title,
  titleClassName,
  withExclamations = false,
  withQuestions = false,
  withQuestionsLeft = false
}: TitleProps) {
  return (
    <div
      className={`relative text-center font-poetsen-one text-white ${className}`}
    >
      {withQuestions && <TripleQuestionMark side="left" />}
      <p className={`relative text-4xl md:text-5xl ${titleClassName}`}>
        {title}
      </p>
      {subtitle && (
        <p className={`relative text-2xl md:text-4xl ${subtitleClassName}`}>
          {subtitle}
        </p>
      )}
      {withExclamations && (
        <TripleExclamationMark className={decorationClassName} />
      )}
      {withQuestions && <TripleQuestionMark side="right" />}
      {withQuestionsLeft && <TripleQuestionMark side="center" />}
    </div>
  );
}
