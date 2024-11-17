'use client';

import { useState } from 'react';

import { Button, type colors } from './Button';
import { SignupModal } from './SignupModal';

type SignupModalButtonProps = {
  color: keyof typeof colors;
  children: string;
  className?: string;
  type: string;
  group?: string;
};

export function SignupModalButton({
  color,
  children,
  className,
  type,
  group
}: SignupModalButtonProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <SignupModal setOpen={setOpen} open={open} type={type} group={group} />
      <Button
        color={color}
        type="button"
        className={className}
        onClick={() => setOpen(true)}
      >
        {children}
      </Button>
    </>
  );
}
