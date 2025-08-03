import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { IoCaretDown } from 'react-icons/io5';

import type { Element, Sublist } from './Navbar';

type DropdownProps = { children: string; sublist: Sublist[] };

function Dropdown({ children, sublist }: DropdownProps) {
  const ref = useRef<HTMLLIElement>(null);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const anySubitemActive = sublist.some(subitem => subitem.href === pathname);

  useEffect(() => {
    const onResize = () => setOpen(false);
    const onClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node))
        setOpen(false);
    };

    window.addEventListener('resize', onResize);
    window.addEventListener('mousedown', onClickOutside);

    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousedown', onClickOutside);
    };
  }, []);

  return (
    <li
      ref={ref}
      className={`relative font-roboto text-xs font-bold leading-5 tracking-widest hover:text-purple-400 lg:text-sm ${anySubitemActive ? 'text-purple-400' : 'text-white'}`}
    >
      <button
        type="button"
        className="flex w-full items-center gap-2 px-5 py-3 text-start uppercase"
        onClick={() => setOpen(!open)}
      >
        {children}
        <IoCaretDown size={12} color="#FFFFFF" />
      </button>
      <ul
        className={`absolute left-0 top-[55px] flex w-max flex-col gap-3 overflow-hidden border-[#3C3C3C] bg-[#171717] transition-all ${open ? 'max-h-[220px] border p-2' : 'max-h-0 border-0 p-0'}`}
      >
        {sublist.map(({ href, name }) => (
          <li
            key={href}
            className={`font-roboto text-xs font-bold uppercase leading-5 tracking-widest hover:text-purple-400 lg:text-sm ${pathname === href ? 'text-purple-400' : 'text-white'}`}
          >
            <Link
              href={href}
              className="px-5 py-3"
              onClick={() => setOpen(false)}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}

type DesktopMenuProps = { elements: Element[] };

export default function DesktopMenu({ elements }: DesktopMenuProps) {
  const pathname = usePathname();

  return (
    <ul className="hidden items-center justify-center md:flex">
      {elements.map(item =>
        'sublist' in item ? (
          <Dropdown key={item.name} sublist={item.sublist}>
            {item.name}
          </Dropdown>
        ) : (
          <li
            key={item.href}
            className={`font-roboto text-xs font-bold uppercase leading-5 tracking-widest hover:text-purple-400 lg:text-sm ${pathname === item.href ? 'text-purple-400' : 'text-white'}`}
          >
            <Link href={item.href} className="px-5 py-3">
              {item.name}
            </Link>
          </li>
        )
      )}
    </ul>
  );
}
