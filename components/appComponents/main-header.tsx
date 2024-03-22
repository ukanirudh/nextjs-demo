import Link from 'next/link';
import Image from 'next/image';
import LogoImg from '@/assets/logo.png';
import headerClasses from './main-header.module.css';
import MainHeaderBackground from './main-header-background';

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
                        <Link href="/meals">Browsder Meals</Link>
                    </li>
                    <li>
                        <Link href="/community">Foodies Community</Link>
                    </li>
                </ul>
            </nav>
        </header>
        </>
    )
}

export default MainHeader;