import React from 'react';
import Container from "@/app/components/container/Container";
import Link from "next/link";
import styles from './Header.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <Container>
                <div className='flex items-center justify-between py-7'>
                    <h1 className='text-2xl'>Logo</h1>
                    <nav className='flex gap-5'>
                        <Link href='/'>Home</Link>
                        <Link href={'about'}>About</Link>
                        <Link href={'contacts'}>Contacts</Link>
                    </nav>
                </div>
            </Container>
        </header>
    );
};

export default Header;