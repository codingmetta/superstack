'use client';

import SearchBtn from "../NavBar/SearchBtn";
import CartBtn from "../NavBar/CartBtn";
import Logo from "../NavBar/Logo";


function NavBarLG() {
    return (
        <nav className="absolute h-16 z-50 flex flex-wrap items-center justify-between w-full py-2.5 pl-3 pr-6 mx-auto border-b border-black shadow backdrop-blur-xl ">
            <Logo />
            <span className="flex flex-row gap-2">
                <SearchBtn />
                <CartBtn />
            </span>
        </nav>
    )
}

export default NavBarLG