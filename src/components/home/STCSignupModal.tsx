'use client';

import HCaptcha from '@hcaptcha/react-hcaptcha';
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
};

type FormData = {
  name_stc: string;
  email_stc: string;
  phone_stc: string;
  childName_stc: string;
  age_stc: string;
  skills_stc: string;
  month_stc: string;
  week_stc: string;
  message_stc?: string;
  rules_stc: boolean;
};

const validationSchema = Yup.object().shape({
  name_stc: Yup.string().required('Imię i nazwisko jest wymagane'),
  email_stc: Yup.string()
    .email('Podaj poprawny adres e-mail')
    .required('E-mail jest wymagany'),
  phone_stc: Yup.string()
    .matches(/^[0-9]{9}$/, 'Numer telefonu musi składać się z 9 cyfr')
    .required('Numer telefonu jest wymagany'),
  childName_stc: Yup.string().required('Imię i nazwisko dziecka jest wymagane'),
  age_stc: Yup.string().required('Musisz podać wiek dziecka'),
  skills_stc: Yup.string().required('Musisz wybrać opis umiejętności dziecka'),
  month_stc: Yup.string().required('Musisz wybrać miesiąc'),
  week_stc: Yup.string().required('Musisz podać wybrany tydzień'),
  message_stc: Yup.string(),
  rules_stc: Yup.boolean()
    .oneOf([true], 'Wymagana jest zgoda na przetwarzanie danych osobowych')
    .required('Wymagana jest zgoda na przetwarzanie danych osobowych')
});

function STCForm({ setOpen }: { setOpen: (open: boolean) => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const [openConfirmation, setOpenConfirmation] = useState(false);
  const [openError, setOpenError] = useState(false);
  const [token, setToken] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>({
    resolver: yupResolver(validationSchema)
  });

  const onSubmit: SubmitHandler<FormData> = async data => {
    try {
      await axios.post(`${window.location.origin}/api/emails`, {
        token,
        name: data.name_stc,
        email: data.email_stc,
        phone: data.phone_stc,
        childName: data.childName_stc,
        age: data.age_stc,
        skills: data.skills_stc,
        lessons: `Skate Trip Camp 2026 (${data.month_stc} - ${data.week_stc})`,
        message: data.message_stc,
        template: 'group' // Reusing group template as it fits
      });

      reset();
      setOpen(false);
      setOpenConfirmation(true);
    } catch (error) {
      console.error(error);
      setOpenError(true);
    }
  };

  return (
    <div className="flex w-full flex-col items-center">
      <SignupConfirmationModal
        open={openConfirmation}
        setOpen={setOpenConfirmation}
      />
      <ErrorModal open={openError} setOpen={setOpenError} />

      <form
        className="mx-auto flex w-full flex-col items-center justify-center gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <p className="relative left-5 top-4 self-start rounded-bl-[50px] rounded-tl-[50px] rounded-tr-[50px] bg-[#FBD24D] px-[17.5px] py-1 font-bold text-black">
          Dane rodzica/opiekuna
        </p>
        <div className="relative flex w-full flex-col gap-5 rounded-[15px] border-[2px] border-[#FBD24D] bg-black/40 p-5">
          <Input
            name="name_stc"
            label="Imię i nazwisko"
            placeholder="Wpisz imię i nazwisko"
            required
            register={register}
            errorMessage={errors.name_stc?.message}
          />
          <Input
            name="email_stc"
            label="E-mail"
            placeholder="Wpisz adres e-mail"
            required
            register={register}
            errorMessage={errors.email_stc?.message}
          />
          <Input
            name="phone_stc"
            label="Numer telefonu"
            placeholder="Wpisz numer telefonu"
            required
            register={register}
            errorMessage={errors.phone_stc?.message}
          />
        </div>

        <p className="relative left-5 top-4 self-start rounded-bl-[50px] rounded-tl-[50px] rounded-tr-[50px] bg-[#FBD24D] px-[17.5px] py-1 font-bold text-black">
          Dane dziecka i termin
        </p>
        <div className="relative flex w-full flex-col gap-5 rounded-[15px] border-[2px] border-[#FBD24D] bg-black/40 p-5">
          <Input
            name="childName_stc"
            label="Imię i nazwisko dziecka"
            placeholder="Wpisz imię i nazwisko dziecka"
            required
            register={register}
            errorMessage={errors.childName_stc?.message}
          />
          <Input
            name="age_stc"
            label="Wiek dziecka"
            required
            register={register}
            errorMessage={errors.age_stc?.message}
            placeholder="Wpisz wiek dziecka (8-16 lat)"
          />

          <RadioGroup
            name="month_stc"
            label="Wybierz miesiąc"
            required
            register={register}
            errorMessage={errors.month_stc?.message}
            options={[
              { value: 'Lipiec', label: 'Lipiec' },
              { value: 'Sierpień', label: 'Sierpień' }
            ]}
          />

          <Input
            name="week_stc"
            label="Który tydzień wybierasz?"
            placeholder="Np. pierwszy tydzień lipca (06-10.07)"
            required
            register={register}
            errorMessage={errors.week_stc?.message}
          />

          <RadioGroup
            name="skills_stc"
            required
            errorMessage={errors.skills_stc?.message}
            register={register}
            label="Opis umiejętności dziecka"
            options={[
              {
                value: 'Początkujący (nauka od podstaw)',
                label: 'Początkujący (nauka od podstaw)'
              },
              {
                value: 'Średniozaawansowany (podstawy opanowane)',
                label: 'Średniozaawansowany (podstawy opanowane)'
              },
              {
                value: 'Zaawansowany (triki i skatepark)',
                label: 'Zaawansowany (triki i skatepark)'
              }
            ]}
          />

          <Textarea
            name="message_stc"
            label="Wiadomość dodatkowa (opcjonalnie)"
            placeholder="Napisz wiadomość..."
            rows={4}
            register={register}
            errorMessage={errors.message_stc?.message}
          />
        </div>

        <Checkbox
          name="rules_stc"
          required
          register={register}
          errorMessage={errors.rules_stc?.message}
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

        <HCaptcha
          sitekey="7432de0e-7a54-47ea-9a6a-14d8cab4230e"
          languageOverride="pl"
          theme="dark"
          onVerify={token => setToken(token)}
          onExpire={() => setToken('')}
        />

        <Button color="orange" disabled={!token} type="submit" className="mt-4">
          Zapisz na Skate Trip Camp &gt;&gt;
        </Button>
      </form>
    </div>
  );
}

export function STCSignupModal({ open, setOpen }: ModalProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
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
  }, [open, setOpen]);

  if (!mounted || !open) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/10 p-2 font-roboto backdrop-blur-sm sm:p-4">
      <div
        ref={ref}
        className="relative flex max-h-[90vh] w-full max-w-[750px] flex-col items-center gap-6 overflow-y-auto rounded-[25px] bg-black p-6 shadow-2xl sm:p-10"
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4 h-8 w-8 rounded-full border-[2px] border-white transition-transform hover:scale-110"
        >
          <div className="absolute left-1/2 top-1/2 h-5 w-[2px] -translate-x-1/2 -translate-y-1/2 rotate-45 rounded bg-white" />
          <div className="absolute left-1/2 top-1/2 h-5 w-[2px] -translate-x-1/2 -translate-y-1/2 -rotate-45 rounded bg-white" />
        </button>

        <Title
          title="Zapisy na"
          subtitle="Skate Trip Camp"
          titleClassName="text-[#FBD24D] -left-6"
          subtitleClassName="left-4"
        />

        <STCForm setOpen={setOpen} />
      </div>
    </div>,
    document.body
  );
}
