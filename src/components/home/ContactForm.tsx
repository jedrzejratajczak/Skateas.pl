'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as Yup from 'yup';

import { Button } from './Button';
import Checkbox from './Checkbox';
import Input from './Input';
import { ErrorModal, SignupConfirmationModal } from './Modal';
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
    .oneOf([true], 'Wymagana jest zgoda na przetwarzanie danych osobowych')
    .required('Wymagana jest zgoda na przetwarzanie danych osobowych')
});

export default function ContactForm() {
  const [open, setOpen] = useState(false);
  const [openError, setOpenError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormInput>({ resolver: yupResolver(validationSchema) });

  const onSubmit: SubmitHandler<ContactFormInput> = async ({
    email,
    message,
    name
  }) => {
    try {
      await axios.post(`${window.location.origin}/api/emails`, {
        email,
        message,
        name,
        template: 'contact'
      });

      reset();

      setOpen(true);
    } catch (error) {
      console.error(error);
      setOpenError(true);
    }
  };

  return (
    <form
      className="mx-auto flex w-full flex-col items-center justify-center gap-4 py-3 md:max-w-[75%] lg:max-w-[65%] xl:max-w-[55%] 2xl:max-w-[1000px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <SignupConfirmationModal open={open} setOpen={setOpen} />
      <ErrorModal open={openError} setOpen={setOpenError} />
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
        required
        register={register}
        errorMessage={errors.rules?.message}
      >
        Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z{' '}
        <a
          href="/home/docs/polityka-prywatnosci.pdf"
          className="font-medium text-[#FFC600]"
          rel="noreferrer noopener"
          target="_blank"
        >
          polityką prywatności
        </a>{' '}
        w celu odpowiedzi na moje zapytanie
      </Checkbox>
      <p className="self-start font-roboto text-xs text-white lg:text-sm">
        * pola obowiązkowe
      </p>
      <Button color="pink">Wyślij wiadomość &gt;&gt;</Button>
    </form>
  );
}
