import { UseFormRegister } from 'react-hook-form';

type InputProps = {
  label: string;
  name: string;
  options: { value: string; label: string }[];
  required?: boolean;
  register: UseFormRegister<any>;
  errorMessage?: string;
  isDisabled?: boolean;
};

export default function RadioGroup({
  label,
  name,
  options,
  required = false,
  register,
  errorMessage,
  isDisabled = false
}: InputProps) {
  return (
    <div className="flex w-full flex-col gap-2 font-roboto text-white">
      <label className="text-xs lg:text-sm">
        {label} {required && '*'}
      </label>
      <div className="flex flex-col gap-2">
        {options.map(option => (
          <label key={option.value} className="flex items-center gap-2">
            <input
              type="radio"
              value={option.value}
              disabled={isDisabled}
              className={`form-radio text-amber-300 focus:ring-amber-300 ${isDisabled ? 'cursor-not-allowed' : ''}`}
              {...register(name, { required })}
            />
            <span className="text-sm lg:text-base">{option.label}</span>
          </label>
        ))}
      </div>
      {errorMessage && (
        <span className="text-xs text-red-400 lg:text-sm">{errorMessage}</span>
      )}
    </div>
  );
}
