'use client';
import { useContext } from "react";
import SearchBtn from "../NavBar/SearchBtn";
import CartBtn from "../NavBar/CartBtn";
import MenuXL from "./MenuXL";
import { StoreContext } from "../../Context";
import ShopPlane from "./ShopPlane";
import AboutPlane from "./AboutPlane";
import GuidesPlane from "./GuidesPlane";
import LogoXl from "./LogoXl";


function NavBarXl() {

    const { menuViewState, setMenuViewState } = useContext(StoreContext)

    function handleMouseLeave(e) {
        e.stopPropagation();
        setMenuViewState('');
    }
    return (

        <header
            onMouseLeave={(e) => handleMouseLeave(e)}
            className="absolute z-50 flex flex-col w-11/12 xl:translate-y-20 2xl:translate-y-16 xl:translate-x-12 2xl:translate-x-16 opacity-95 ">
            <nav className="relative z-50 flex items-center justify-between w-full pl-3 pr-6 bg-white border border-black shadow flex-nowrap rounded-b-3xl rounded-r-2xl ">
                <div className="custom-header-folder"></div>
                <LogoXl />
                <MenuXL />
                <span className="flex flex-row xl:gap-4 2xl:gap-5">
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
    );
}

export default NavBarXl