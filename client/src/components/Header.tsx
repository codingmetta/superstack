'use client';
import { useState } from 'react';
import MenuBtn from './MenuBtn';
import Logo from './Logo';
import SearchBtn from './SearchBtn';
import CartBtn from './CartBtn';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function handleClick() {
        console.log('clicked')
        setIsMenuOpen(prev => !prev);
    }
    return (
        <>
            <nav className="fixed z-10 w-full pl-4 pr-4 border-b border-black shadow backdrop-blur-xl ">
                <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto">
                    <MenuBtn isOpen={isMenuOpen} handleClick={handleClick} />
                    <Logo />
                    <span className="flex flex-row gap-1">
                        <SearchBtn />
                        <CartBtn />
                    </span>
                </div>
            </nav>
        </>
    )
}

export default Header