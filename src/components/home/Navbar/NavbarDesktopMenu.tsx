import { usePathname } from 'next/navigation';
import type { NavbarElementType, NavbarItemType } from './Navbar';
import Link from 'next/link';

type NavbarDesktopMenuProps = {
  menuElements: NavbarElementType[];
};

export default function NavbarDesktopMenu({
  menuElements
}: NavbarDesktopMenuProps) {
  const currentPathname = usePathname();

  return (
    <ul className="hidden items-center justify-center md:flex">
      {(menuElements as NavbarItemType[])
        .filter(({ skipOnDesktop }) => !skipOnDesktop)
        .map(item => (
          <li
            className={`font-roboto text-xs font-bold uppercase leading-5 tracking-widest hover:text-purple-400 lg:text-sm ${currentPathname === item.href ? 'text-purple-400' : 'text-white'}`}
          >
            <Link href={item.href} className="px-5 py-3">
              {item.name}
            </Link>
          </li>
        ))}
    </ul>
  );
}
