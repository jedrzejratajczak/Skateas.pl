'use client';

import { Button, type colors } from './Button';

type ScrollToButtonProps = {
  sectionId: string;
  color: keyof typeof colors;
  children: string;
  className?: string;
};

export function ScrollToButton({
  sectionId,
  color,
  children,
  className
}: ScrollToButtonProps) {
  const scrollToView = () =>
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <Button
      color={color}
      type="button"
      className={className}
      onClick={scrollToView}
    >
      {children}
    </Button>
  );
}
