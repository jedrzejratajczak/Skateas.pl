'use client';

import { useState } from 'react';

export function PhoneNumber() {
  const [showNumber, setShowNumber] = useState(false);

  const handleShowNumber = () => {
    setShowNumber(true);
  };

  return showNumber ? (
    <a href="tel:+48732427072" className="font-bold text-[#FBD24D]">
      +48 732 427 072
    </a>
  ) : (
    <button onClick={handleShowNumber} className="font-bold text-[#FBD24D]">
      Kliknij, aby zobaczyć numer telefonu
    </button>
  );
}
