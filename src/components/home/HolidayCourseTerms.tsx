import { UseFormRegister, UseFormWatch } from 'react-hook-form';

type HolidayCourseTermsProps = {
  register: UseFormRegister<any>;
  errorMessage?: string;
  required?: boolean;
};

const courseTerms = [
  '30.06-4.07',
  '7-11.07',
  '14-18.07',
  '21-25.07',
  '28.07-1.08',
  '4-8.08',
  '11-15.08',
  '18-22.08',
  '25-29.08'
];

export function HolidayCourseTerms({
  register,
  errorMessage,
  required
}: HolidayCourseTermsProps) {
  return (
    <div className="flex w-full flex-col gap-3 font-roboto text-white">
      <label className="text-xs lg:text-sm">
        Wybierz terminy kursu wakacyjnego *
      </label>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {courseTerms.map(term => (
          <label key={term} className="flex items-center gap-2">
            <input
              type="checkbox"
              value={term}
              className="form-checkbox rounded-[5px] text-amber-300 focus:ring-amber-300"
              {...register('holidayCourseTerms', { required })}
            />
            <span className="text-sm lg:text-base">{term}</span>
          </label>
        ))}
      </div>
      {errorMessage && (
        <span className="text-xs text-red-400 lg:text-sm">{errorMessage}</span>
      )}
    </div>
  );
}
