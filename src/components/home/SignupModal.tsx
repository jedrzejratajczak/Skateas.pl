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
import RadioGroup from './Radio';
import Textarea from './Textarea';
import { Title } from './Title';

type ModalProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  group?: string;
  type: string;
};

type FormData = {
  name2: string;
  email2: string;
  phone2: string;
  childName2: string;
  age2: string;
  skills2: string;
  lessons2: string;
  message2?: string;
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
  age2: Yup.string().required('Musisz podać wiek dziecka'),
  skills2: Yup.string().required('Musisz wybrać opis umiejętności dziecka'),
  lessons2: Yup.string().required('Wybrane zajęcia są wymagane'),
  message2: Yup.string(),
  rules2: Yup.boolean()
    .oneOf([true], 'Wymagana jest zgoda na przetwarzanie danych osobowych')
    .required('Wymagana jest zgoda na przetwarzanie danych osobowych')
});

function Modal({ open, setOpen, group, type }: ModalProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [openConfirmation, setOpenConfirmation] = useState(false);
  const [openError, setOpenError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      lessons2: type === 'individual' ? 'Zajęcia indywidualne' : group
    }
  });

  const onSubmit: SubmitHandler<FormData> = async ({
    name2,
    email2,
    phone2,
    childName2,
    age2,
    skills2,
    lessons2,
    message2
  }) => {
    try {
      await axios.post(`${window.location.origin}/api/emails`, {
        name: name2,
        email: email2,
        phone: phone2,
        childName: childName2,
        age: age2,
        skills: skills2,
        lessons: lessons2,
        message: message2,
        template: type === 'individual' ? 'solo' : 'group'
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

    if (open) {
      window.addEventListener('mousedown', onClickOutside);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('mousedown', onClickOutside);
      document.body.style.overflow = 'auto';
    };
  }, [setOpen, open]);

  return (
    <div
      className={`fixed inset-0 z-40 bg-white/10 font-roboto ${open ? 'block' : 'hidden'}`}
    >
      <div
        ref={ref}
        className="absolute left-1/2 top-1/2 flex max-h-[calc(100vh-50px)] w-[calc(100%-20px)] max-w-[700px] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-5 overflow-auto rounded-[25px] bg-black px-5 py-10"
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
          className="mx-auto flex w-full flex-col items-center justify-center gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <SignupConfirmationModal
            open={openConfirmation}
            setOpen={setOpenConfirmation}
          />
          <ErrorModal open={openError} setOpen={setOpenError} />
          <p className="relative left-5 top-4 self-start rounded-bl-[50px] rounded-tl-[50px] rounded-tr-[50px] bg-[#FBD24D] px-[17.5px] py-1">
            Dane rodzica/opiekuna
          </p>
          <div className="relative flex w-full flex-col gap-5 rounded-[15px] border-[2px] border-[#FBD24D] p-5">
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
          <p className="relative left-5 top-4 self-start rounded-bl-[50px] rounded-tl-[50px] rounded-tr-[50px] bg-[#FBD24D] px-[17.5px] py-1">
            Dane dziecka
          </p>
          <div className="relative flex w-full flex-col gap-5 rounded-[15px] border-[2px] border-[#FBD24D] p-5">
            <Input
              name="childName2"
              label="Imię i nazwisko"
              placeholder="Wpisz imię i nazwisko"
              required
              register={register}
              errorMessage={errors.childName2?.message}
            />
            <Input
              name="age2"
              label="Wiek dziecka"
              required
              register={register}
              errorMessage={errors.age2?.message}
              placeholder="Wpisz wiek dziecka"
            />
            <RadioGroup
              name="skills2"
              required
              errorMessage={errors.skills2?.message}
              register={register}
              label="Opis umiejętności dziecka"
              options={[
                {
                  value:
                    'Nigdy nie jeździł/a na deskorolce. Chce nauczyć się jazdy od podstaw.',
                  label:
                    'Nigdy nie jeździł/a na deskorolce. Chce nauczyć się jazdy od podstaw.'
                },
                {
                  value: 'Potrafi stanąć na deskorolce, odpychać się, skręcać.',
                  label: 'Potrafi stanąć na deskorolce, odpychać się, skręcać.'
                },
                {
                  value: 'Czuje się pewnie w jeździe, potrafi jakiś trick.',
                  label: 'Czuje się pewnie w jeździe, potrafi jakiś trick.'
                }
              ]}
            />
            <Textarea
              name="lessons2"
              label="Wybrane zajęcia"
              rows={type === 'individual' ? 1 : 3}
              isDisabled
              register={register}
              errorMessage={errors.lessons2?.message}
            />
            <Textarea
              name="message2"
              label="Wiadomość (opcjonalnie)"
              placeholder={
                type === 'individual'
                  ? 'Prosimy o podanie preferowanych dni zajęć oraz dodatkowe prośby i uwagi...'
                  : 'Napisz wiadomość...'
              }
              rows={5}
              register={register}
              errorMessage={errors.message2?.message}
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

export function SignupModal({
  open,
  setOpen,
  type,
  group
}: Omit<ModalProps, 'text'>) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  return mounted
    ? createPortal(
        <Modal open={open} setOpen={setOpen} group={group} type={type} />,
        document.body
      )
    : null;
}
