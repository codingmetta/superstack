'use client';
import { useState } from 'react';

import { PlaneContext } from "src/context/PlaneContext";

import SearchBtn from "src/components/ui/SearchBtn";
import CartBtn from "src/components/ui/CartBtn";
import Logo from "src/components/ui/Logo";

import SubNavXL from "./SubNavXL";
import ShopPlane from "./ShopPlane";
import AboutPlane from "./AboutPlane";
import GuidesPlane from "./GuidesPlane";



function HeaderDesktop() {
    const [currentPlane, setCurrentPlane] = useState(null)

    function handleMouseLeave(e) {
        e.stopPropagation();
        setCurrentPlane('');
    }
    return (
        <PlaneContext.Provider value={{
            currentPlane,
            setCurrentPlane
        }}>
            <header
                onMouseLeave={(e) => handleMouseLeave(e)}
                className="absolute z-50 flex flex-col w-11/12 xl:translate-y-20 2xl:translate-y-16 xl:translate-x-12 2xl:translate-x-16 opacity-95 ">
                <nav className="relative z-50 flex items-center justify-between w-full pl-3 pr-6 bg-white border border-black shadow flex-nowrap rounded-b-3xl rounded-r-2xl ">
                    <div className="custom-header-folder"></div>
                    <Logo />
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
                    currentPlane === 'STORE' && <></>
                }
                {
                    currentPlane === 'BOOKING' && <></>
                }
            </header>
        </PlaneContext.Provider>
    );
}

export default HeaderDesktop