import { IoClose, IoMenu } from 'react-icons/io5';

type BurgerMenuProps = { toggle: () => void; open: boolean };

export default function BurgerMenu({ toggle, open }: BurgerMenuProps) {
  const Icon = open ? IoClose : IoMenu;

  return (
    <button className="md:hidden" aria-label="Mobile menu" onClick={toggle}>
      <Icon
        size={32}
        color="#FFFFFF"
        className="transition duration-1000 ease-in"
      />
    </button>
  );
}
