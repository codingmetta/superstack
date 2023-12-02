'use client';
import MenuBtn from './MenuBtn';
import Logo from './Logo';
import SearchBtn from './SearchBtn';
import CartBtn from './CartBtn';


function NavBar() {

    return (
        <nav className="fixed h-16 z-10 flex flex-wrap items-center justify-between w-full py-2.5 pl-3 pr-6 mx-auto border-b border-black shadow backdrop-blur-xl ">
            <MenuBtn />
            <Logo />
            <span className="flex flex-row gap-2">
                <SearchBtn />
                <CartBtn />
            </span>
        </nav>
    )
}

export default NavBar