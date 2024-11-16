'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

type ModalProps = {
  text: string;
  open: boolean;
  setOpen: (open: boolean) => void;
};

function Modal({ text, open, setOpen }: ModalProps) {
  return (
    <div
      className={`fixed inset-0 z-50 bg-white/10 font-roboto text-xs sm:text-base xl:text-xl ${open ? 'block' : 'hidden'}`}
    >
      <div className="absolute left-1/2 top-1/2 flex w-[300px] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-5 rounded-[25px] bg-black p-5 sm:w-[400px] xl:w-[500px]">
        <p className="rounded-[15px] border-[2px] border-[#FBD24D] p-5 text-center text-white">
          {text}
        </p>
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="rounded-[50px] bg-[#FBD24D] px-4 py-1"
        >
          Zamknij
        </button>
      </div>
    </div>
  );
}

export function SignupConfirmationModal({
  open,
  setOpen
}: Omit<ModalProps, 'text'>) {
  const text =
    "Dziękujemy za zapisanie się! Cieszymy się, że dołączasz do naszej skate'owej ekipy. Wkrótce skontaktujemy się z Tobą telefonicznie lub mailowo, aby przekazać więcej informacji i ustalić szczegóły. Do zobaczenia na zajęciach!";

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  return mounted
    ? createPortal(
        <Modal text={text} open={open} setOpen={setOpen} />,
        document.body
      )
    : null;
}

export function ReserveConfirmationModal({
  open,
  setOpen
}: Omit<ModalProps, 'text'>) {
  const text =
    'Dziękujemy za zapisanie się na listę rezerwową! Cieszymy się, że jesteś zainteresowany naszym wyjazdem. Jeśli zwolni się miejsce, będziemy w pierwszej kolejności kontaktować się z osobami z listy rezerwowej. Wkrótce damy Ci znać telefonicznie lub mailowo, jak wygląda sytuacja. Trzymaj kciuki – może uda się nam spotkać na wyjeździe!';

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  return mounted
    ? createPortal(
        <Modal text={text} open={open} setOpen={setOpen} />,
        document.body
      )
    : null;
}

export function ErrorModal({ open, setOpen }: Omit<ModalProps, 'text'>) {
  const text =
    'Coś poszło nie tak. Spróbuj ponownie lub skontaktuj się z nami mailowo lub telefonicznie.';

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  return mounted
    ? createPortal(
        <Modal text={text} open={open} setOpen={setOpen} />,
        document.body
      )
    : null;
}
