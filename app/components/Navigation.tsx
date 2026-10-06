"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface INavLink {
  label: string;
  href: string;
}

interface IProps {
  navItems: INavLink[];
}

const Navigation = ({ navItems }: IProps) => {
  const pathname = usePathname();

  return (
    <div className="container">
      {navItems.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.label}
            href={item.href}
            className={isActive ? "active" : ""}
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  );
};

export { Navigation };
