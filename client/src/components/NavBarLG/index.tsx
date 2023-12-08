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
import './index.css'

function LogoLG() {


    return (
        <div className="relative translate-x-1">
            <a href="#" className="absolute flex flex-col m-0 space-x-8 translate-x-0 -translate-y-14 ">
                <p className="p-0 m-0  text-[2.7rem] leading-[2.2rem] tracking-widest text-black uppercase font-bagel">Super</p>
                <p className="p-0 m-0  text-[2.7rem] leading-[2.2rem] tracking-widest text-black uppercase font-bagel">Stack</p>
            </a>
        </div>
    );
}

function NavBarLG() {

    const { menuViewState, setMenuViewState } = useContext(ShoppingCartContext)

    function handleMouseLeave(e) {
        e.stopPropagation();
        setMenuViewState('');
    }
    return (

        <header
            onMouseLeave={handleMouseLeave}
            className="absolute z-50 flex flex-col w-11/12 translate-x-16 translate-y-16 opacity-95 ">
            <nav
                className="relative z-50 flex flex-wrap items-center justify-between w-full pl-3 pr-6 bg-white border border-black shadow rounded-b-3xl rounded-r-2xl ">
                <div className="custom-header-folder-2 "></div>
                <LogoLG />
                <MenuLG />
                <span className="flex flex-row gap-5">
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