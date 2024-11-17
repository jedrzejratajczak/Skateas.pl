'use client';

import { useState } from 'react';

import { Button } from './Button';
import { SignupModal } from './SignupModal';

export default function SignupModalButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <SignupModal setOpen={setOpen} open={open} />
      <Button
        color="orange"
        className="m-auto mt-5"
        type="button"
        onClick={() => setOpen(true)}
      >
        Zapisy na zajęcia &gt;&gt;
      </Button>
    </>
  );
}
