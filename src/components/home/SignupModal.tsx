'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as Yup from 'yup';

import { Button } from './Button';
import Checkbox from './Checkbox';
import Input from './Input';
import { ErrorModal, SignupConfirmationModal } from './Modal';
import Select from './Select';
import { Title } from './Title';

type ModalProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

type FormData = {
  name2: string;
  email2: string;
  phone2: string;
  childName2: string;
  lessons2: string;
  rules2: boolean;
};

const validationSchema = Yup.object().shape({
  name2: Yup.string().required('Imię i nazwisko jest wymagane'),
  email2: Yup.string()
    .email('Podaj poprawny adres e-mail')
    .required('E-mail jest wymagany'),
  phone2: Yup.string()
    .matches(/^[0-9]{9}$/, 'Numer telefonu musi składać się z 9 cyfr')
    .required('Numer telefonu jest wymagany'),
  childName2: Yup.string().required('Imię i nazwisko dziecka jest wymagane'),
  lessons2: Yup.string().required('Musisz wybrać zajęcia'),
  rules2: Yup.boolean()
    .oneOf([true], 'Wymagana jest zgoda na przetwarzanie danych osobowych')
    .required('Wymagana jest zgoda na przetwarzanie danych osobowych')
});

function Modal({ open, setOpen }: ModalProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [openConfirmation, setOpenConfirmation] = useState(false);
  const [openError, setOpenError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>({ resolver: yupResolver(validationSchema) });

  const onSubmit: SubmitHandler<FormData> = async ({
    name2,
    email2,
    phone2,
    childName2,
    lessons2
  }) => {
    try {
      await axios.post(`${window.location.origin}/api/emails`, {
        name: name2,
        email: email2,
        phone: phone2,
        childName: childName2,
        lessons: lessons2,
        template: 'signup'
      });

      reset();

      setOpen(false);
      setOpenConfirmation(true);
    } catch (error) {
      console.error(error);
      setOpenError(true);
    }
  };

  useEffect(() => {
    const onClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node))
        setOpen(false);
    };

    window.addEventListener('mousedown', onClickOutside);

    return () => window.removeEventListener('mousedown', onClickOutside);
  }, [setOpen]);

  return (
    <div
      className={`fixed inset-0 z-40 bg-white/10 font-roboto ${open ? 'block' : 'hidden'}`}
    >
      <div
        ref={ref}
        className="absolute left-1/2 top-1/2 flex max-h-[calc(100vh-50px)] w-[calc(100%-20px)] max-w-[700px] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-5 overflow-auto rounded-[25px] bg-black p-5"
      >
        <div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute right-4 h-8 w-8 rounded-full border-[2px] border-white"
          >
            <div className="absolute left-1/2 top-1/2 h-5 w-[2px] -translate-x-1/2 -translate-y-1/2 rotate-45 rounded bg-white" />
            <div className="absolute left-1/2 top-1/2 h-5 w-[2px] -translate-x-1/2 -translate-y-1/2 -rotate-45 rounded bg-white" />
          </button>
          <Title
            title="Zapisz się"
            subtitle="na zajęcia!"
            titleClassName="text-[#FBD24D] -left-6"
            subtitleClassName="left-4"
          />
        </div>
        <form
          className="mx-auto flex w-full flex-col items-center justify-center gap-2"
          onSubmit={handleSubmit(onSubmit)}
        >
          <SignupConfirmationModal
            open={openConfirmation}
            setOpen={setOpenConfirmation}
          />
          <ErrorModal open={openError} setOpen={setOpenError} />
          <p className="relative left-5 top-2 self-start rounded-bl-[50px] rounded-tl-[50px] rounded-tr-[50px] bg-[#FBD24D] px-[17.5px] py-1">
            Dane rodzica/opiekuna
          </p>
          <div className="relative flex w-full flex-col gap-2 rounded-[15px] border-[2px] border-[#FBD24D] p-5">
            <Input
              name="name2"
              label="Imię i nazwisko"
              placeholder="Wpisz imię i nazwisko"
              required
              register={register}
              errorMessage={errors.name2?.message}
            />
            <Input
              name="email2"
              label="E-mail"
              placeholder="Wpisz adres e-mail"
              required
              register={register}
              errorMessage={errors.email2?.message}
            />
            <Input
              name="phone2"
              label="Numer telefonu"
              placeholder="Wpisz numer telefonu"
              required
              register={register}
              errorMessage={errors.phone2?.message}
            />
          </div>
          <p className="relative left-5 top-2 self-start rounded-bl-[50px] rounded-tl-[50px] rounded-tr-[50px] bg-[#FBD24D] px-[17.5px] py-1">
            Dane dziecka
          </p>
          <div className="relative flex w-full flex-col gap-2 rounded-[15px] border-[2px] border-[#FBD24D] p-5">
            <Input
              name="childName2"
              label="Imię i nazwisko"
              placeholder="Wpisz imię i nazwisko"
              required
              register={register}
              errorMessage={errors.childName2?.message}
            />
            <Select
              name="lessons2"
              label="Zajęcia"
              placeholder="Wybierz zajęcia"
              required
              register={register}
              errorMessage={errors.lessons2?.message}
            />
          </div>
          <Checkbox
            name="rules2"
            required
            register={register}
            errorMessage={errors.rules2?.message}
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
          <Button color="orange">Zapisz &gt;&gt;</Button>
        </form>
      </div>
    </div>
  );
}

export function SignupModal({ open, setOpen }: Omit<ModalProps, 'text'>) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  return mounted
    ? createPortal(<Modal open={open} setOpen={setOpen} />, document.body)
    : null;
}
