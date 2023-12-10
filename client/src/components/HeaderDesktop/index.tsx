'use client';
import { useContext } from "react";
import SearchBtn from "../ui/SearchBtn";
import CartBtn from "../ui/CartBtn";
import SubNavXL from "./SubNavXL";
import { StoreContext } from "../../Context";
import ShopPlane from "./ShopPlane";
import AboutPlane from "./AboutPlane";
import GuidesPlane from "./GuidesPlane";
import LogoXl from "./LogoXl";


function HeaderDesktop() {

    const { currentPlane, setCurrentPlane } = useContext(StoreContext);

    function handleMouseLeave(e) {
        e.stopPropagation();
        setCurrentPlane('');
    }
    return (

        <header
            onMouseLeave={(e) => handleMouseLeave(e)}
            className="absolute z-50 flex flex-col w-11/12 xl:translate-y-20 2xl:translate-y-16 xl:translate-x-12 2xl:translate-x-16 opacity-95 ">
            <nav className="relative z-50 flex items-center justify-between w-full pl-3 pr-6 bg-white border border-black shadow flex-nowrap rounded-b-3xl rounded-r-2xl ">
                <div className="custom-header-folder"></div>
                <LogoXl />
                <SubNavXL />
                <span className="flex flex-row xl:gap-4 2xl:gap-5">
                    <SearchBtn />
                    <CartBtn />
                </span>
            </nav>
            {
                currentPlane === 'SHOP' && <ShopPlane />
            }
            {
                currentPlane === 'GUIDES' && <GuidesPlane />
            }
            {
                currentPlane === 'ABOUT' && <AboutPlane />
            }
            {
                currentPlane=== 'STORE' && <></>
            }
            {
                currentPlane === 'BOOKING' && <></>
            }
        </header>
    );
}

export default HeaderDesktop