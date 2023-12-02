'use client';
import MenuBtn from './MenuBtn';
import Logo from './Logo';
import SearchBtn from './SearchBtn';
import CartBtn from './CartBtn';


function Header() {

    return (
        <header className="">
            <nav className="fixed z-10 flex flex-wrap items-center justify-between w-full py-2 pl-3 pr-6 mx-auto border-b border-black shadow backdrop-blur-xl ">
                <MenuBtn />
                <Logo />
                <span className="flex flex-row gap-2">
                    <SearchBtn />
                    <CartBtn />
                </span>
            </nav>
        </header>
    )
}

export default Header