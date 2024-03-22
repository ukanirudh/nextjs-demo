'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactElement } from "react";
import classes from './nav-link.module.css';

const NavLink = ({ href, children }: { href: string, children: ReactElement }) => {
    const pathName = usePathname();
    const activeClass = pathName.startsWith(href) ? classes.active : '';

    return (
        <Link
            href={href}
            className={`${classes.link} ${activeClass}`}
        >
            {children}
        </Link>
    )
}

export default NavLink;