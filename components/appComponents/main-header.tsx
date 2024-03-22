import Link from 'next/link';
import Image from 'next/image';
import LogoImg from '@/assets/logo.png';
import headerClasses from './main-header.module.css';
import MainHeaderBackground from './main-header-background';
import NavLink from './nav-link';

const MainHeader = () => {

    return (
        <>
        <MainHeaderBackground />
        <header className={headerClasses.header}>
            <Link className={headerClasses.logo} href='/'>
                <Image src={LogoImg} alt='plate with food' priority />
                Next level food
            </Link>
            <nav className={headerClasses.nav}>
                <ul>
                    <li>
                        <NavLink href="/meals">
                            <>Browsder Meals</>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink href="/community">
                            <>Foodies Community</>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
        </>
    )
}

export default MainHeader;