import Link from 'next/link';
import React from 'react';
//import logoImg from '../assets/logo.png';
import Image from 'next/image';
import logoImg from '@/assets/logo.png'
import styles from './main-header.module.css';
export default function MainHeader() {
    return (
        <header className={styles.header}>
           <Link className={styles.logo} href="/">
            <Image src={logoImg} alt="Omfood Logo" width={200} height={100} />
            OM Foods
           </Link>
           <nav className={styles.nav}>
            <ul>
                <li> <Link href="/meals">Browse Meals</Link>
                <Link href="/community">Foddies Community</Link>
                </li>
               
            </ul>
           </nav>
        </header>
    );
};