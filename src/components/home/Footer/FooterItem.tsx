'use client';

import Link from 'next/link';

type FooterItemProps = {
  children: React.ReactNode;
  href: string;
  linkProps?: any;
};

export function FooterItem({ children, href, linkProps }: FooterItemProps) {
  return (
    <li className="max-w-fit font-roboto text-xs hover:text-purple-400 lg:text-base">
      <Link href={href} {...linkProps}>
        {children}
      </Link>
    </li>
  );
}
