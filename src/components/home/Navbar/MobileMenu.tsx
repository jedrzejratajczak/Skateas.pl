import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { IconType } from 'react-icons';
import { IoCaretDown } from 'react-icons/io5';

import { Element } from './Navbar';
import { Sublist } from './Navbar';

type DropdownProps = {
  children: string;
  close: () => void;
  sublist: Sublist[];
};

function Dropdown({ children, close, sublist }: DropdownProps) {
  const pathname = usePathname();

  return (
    <li className="font-roboto text-xs font-bold uppercase leading-5 tracking-widest text-white">
      <p className="flex w-full items-center gap-2 px-5 py-3 text-start uppercase">
        {children}
        <IoCaretDown size={12} color="#FFFFFF" />
      </p>
      <ul>
        {sublist.map(({ href, name }) => (
          <li
            key={href}
            className={`font-roboto text-xs font-bold uppercase leading-5 tracking-widest hover:bg-purple-400 hover:text-neutral-700 ${pathname === href ? 'bg-purple-600 text-white' : 'bg-inherit text-white'}`}
          >
            <Link href={href} className="block py-3 pl-12 pr-5" onClick={close}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}

type NavbarMenuProps = {
  close: () => void;
  elements: Element[];
  open: boolean;
  socials: { Icon: IconType; href: string }[];
  onSpecialClick?: () => void;
};

export default function MobileMenu({
  close,
  elements,
  open,
  socials,
  onSpecialClick
}: NavbarMenuProps) {
  const pathname = usePathname();

  return (
    <div
      className={`absolute top-14 z-40 flex h-[calc(100vh-56px)] w-full flex-col justify-between overflow-y-auto bg-neutral-700 transition-transform duration-500 ${open ? 'translate-x-0' : 'translate-x-full'}`}
    >
      <ul>
        {elements.map(item =>
          'sublist' in item ? (
            <Dropdown key={item.name} sublist={item.sublist} close={close}>
              {item.name}
            </Dropdown>
          ) : 'special' in item ? (
            <li key={item.name}>
              <button
                type="button"
                onClick={() => {
                  onSpecialClick?.();
                  close();
                }}
                className="block w-full bg-gradient-to-r from-[#5EE9D3] via-[#FBD24D] to-[#5EE9D3] bg-[length:200%_200%] bg-clip-text px-5 py-3 text-left font-roboto text-xs font-bold uppercase leading-5 tracking-widest text-transparent"
                style={{
                  backgroundImage:
                    'linear-gradient(45deg, #5EE9D3, #FBD24D, #7DD2FB)',
                  backgroundSize: '300% 300%',
                  animation: 'gradientShift 3s ease infinite'
                }}
              >
                {item.name}
              </button>
            </li>
          ) : (
            <li
              key={item.href}
              className={`font-roboto text-xs font-bold uppercase leading-5 tracking-widest hover:bg-purple-400 hover:text-neutral-700 ${pathname === item.href ? 'bg-purple-600 text-white' : 'bg-inherit text-white'}`}
            >
              <Link
                href={item.href}
                className="block px-5 py-3"
                onClick={close}
              >
                {item.name}
              </Link>
            </li>
          )
        )}
      </ul>
      <ul className="mt-3 flex flex-row gap-5 border-t border-white bg-neutral-900 p-3">
        {socials.map(({ href, Icon }) => (
          <li key={href} className="text-white hover:text-purple-400">
            <a href={href} target="_blank" rel="noreferrer noopener">
              <Icon size={24} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
