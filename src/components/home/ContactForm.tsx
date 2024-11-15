'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as Yup from 'yup';

import { Button } from './Button';
import Checkbox from './Checkbox';
import Input from './Input';
import Textarea from './Textarea';

type ContactFormInput = {
  name: string;
  email: string;
  message: string;
  rules: boolean;
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Imię i nazwisko jest wymagane'),
  email: Yup.string()
    .email('Podaj poprawny adres e-mail')
    .required('E-mail jest wymagany'),
  message: Yup.string().required('Wiadomość jest wymagana'),
  rules: Yup.boolean()
    .oneOf([true], 'Wymagana jest zgoda na regulamin')
    .required('Wymagana jest zgoda na regulamin')
});

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ContactFormInput>({ resolver: yupResolver(validationSchema) });
  const onSubmit: SubmitHandler<ContactFormInput> = data => {
    try {
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      className="mx-auto flex w-full flex-col items-center justify-center gap-4 py-3 md:max-w-[75%] lg:max-w-[65%] xl:max-w-[55%] 2xl:max-w-[1000px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        name="name"
        label="Imię i nazwisko"
        placeholder="Wpisz imię i nazwisko"
        required
        register={register}
        errorMessage={errors.name?.message}
      />
      <Input
        name="email"
        label="E-mail"
        placeholder="Wpisz adres e-mail"
        required
        register={register}
        errorMessage={errors.email?.message}
      />
      <Textarea
        label="Wiadomość"
        name="message"
        placeholder="Napisz wiadomość..."
        required
        rows={8}
        register={register}
        errorMessage={errors.message?.message}
      />
      <Checkbox
        name="rules"
        label="Zapoznałem/am się z treścią"
        labelLinkText="regulaminu"
        labelLinkHref="/home/docs/regulamin.pdf"
        required
        register={register}
        errorMessage={errors.rules?.message}
      />
      <p className="self-start font-roboto text-xs text-white lg:text-sm">
        * pola obowiązkowe
      </p>
      <Button color="pink">Wyślij wiadomość &gt;&gt;</Button>
    </form>
  );
}
