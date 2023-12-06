'use client';
import { useContext } from "react";
import SearchBtn from "../NavBar/SearchBtn";
import CartBtn from "../NavBar/CartBtn";
import Logo from "../NavBar/Logo";
import MenuLG from "../MenuLG";
import { ShoppingCartContext } from "../../Context";
import ShopPlane from "./ShopPlane";
import AboutPlane from "./AboutPlane";
import GuidesPlane from "./GuidesPlane";

function NavBarLG() {

    const { menuViewState, setMenuViewState } = useContext(ShoppingCartContext)

    function handleMouseLeave(e) {
        e.stopPropagation();
        setMenuViewState('');
    }
    return (

        <header
            onMouseLeave={handleMouseLeave}
            className="absolute z-50 flex flex-col w-11/12 translate-x-16 translate-y-12 opacity-95 ">
            <nav
                className="min-h-16 w-full  z-50 flex flex-wrap items-center justify-between border border-black py-2.5 pl-3 pr-6 mx-auto  shadow bg-white  ">
                <Logo />
                <MenuLG />
                <span className="flex flex-row gap-2">
                    <SearchBtn />
                    <CartBtn />
                </span>
            </nav>
            {
                menuViewState === 'SHOP' && <ShopPlane />
            }
            {
                menuViewState === 'GUIDES' && <GuidesPlane />
            }
            {
                menuViewState === 'ABOUT' && <AboutPlane />
            }
            {
                menuViewState === 'STORE' && <></>
            }
        </header>

    )
}

export default NavBarLG