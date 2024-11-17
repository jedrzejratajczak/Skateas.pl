import { useState } from 'react';
import { UseFormRegister } from 'react-hook-form';

type Option = {
  value: string;
  label: string;
};

type InputProps = {
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  register: UseFormRegister<any>;
  errorMessage?: string;
  isDisabled?: boolean;
  options: Option[];
};

export default function Select({
  label,
  name,
  placeholder,
  required = false,
  register,
  errorMessage,
  isDisabled = false,
  options
}: InputProps) {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className="flex w-full flex-col gap-2 font-roboto text-white">
      <label htmlFor={name} className="text-xs lg:text-sm">
        {label} {required && '*'}
      </label>
      <select
        id={name}
        disabled={isDisabled}
        className={`rounded-full border border-white bg-transparent px-3 py-2.5 text-sm placeholder:text-neutral-400 focus:border-transparent focus:ring-2 focus:ring-amber-300 lg:text-base ${errorMessage ? 'border-0 ring-2 ring-red-500' : ''} ${isDisabled ? 'cursor-not-allowed border-neutral-400' : ''} ${selectedValue === '' ? 'text-neutral-400' : 'text-white'}`}
        {...register(name, { required })}
        onChange={handleChange}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {errorMessage && (
        <span className="text-xs text-red-400 lg:text-sm">{errorMessage}</span>
      )}
    </div>
  );
}
