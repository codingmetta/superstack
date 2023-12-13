'use client';

import { useContext } from 'react'
import { MenuContext } from 'src/context/MenuContext';

import SubNav from './SubNav';
import ShopTab from './ShopTab'
import AboutTab from './AboutTab';
import GuidesTab from './GuidesTab';
// TODO: Store Page
// TODO: Booking Page

function MenuWrapper({ children }) {
    return (
        <div className='z-20 flex flex-col min-h-screen bg-anti-flash'>
            {children}
        </div>
    );
}

function Menu() {

    const { currentTab } = useContext(MenuContext);
    return (
        <MenuWrapper>
            <SubNav />
            {
                currentTab === 'SHOP' && <ShopTab />
            }
            {
                currentTab === 'GUIDES' && <GuidesTab />
            }
            {
                currentTab === 'ABOUT' && <AboutTab />
            }
            {
                currentTab === 'STORE' && <></>
            }
            {/* {
                currentTab === 'BOOKING' && <></>
            } */}
        </MenuWrapper>
    );
}

export default Menu