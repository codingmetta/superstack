'use client';

import { useContext } from 'react'
import SubNav from './SubNav';
import ShopTab from './ShopTab'
import AboutTab from './AboutTab';
import GuidesTab from './GuidesTab';
// TODO: Store Page
// TODO: Booking Page
import { StoreContext } from '../../Context';

function MenuWrapper({ children }) {
    return (
        <div className='flex flex-col min-h-screen bg-anti-flash'>
            {children}
        </div>
    );
}

function Menu() {

    const { currentTab } = useContext(StoreContext);
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
            {
                currentTab === 'BOOKING' && <></>
            }
        </MenuWrapper>
    );
}

export default Menu;

/*'use client';

import { useState } from 'react'
import ShopTab from './ShopTab'
import AboutTab from './AboutTab';
import GuidesTab from './GuidesTab';
// TODO: Store Tab

function NavBtn({ onClick, viewState, view, children }) {
    if (view === 'BOOKING') {
        return (
            <li className='w-full'>
                <button
                    onClick={() => onClick(view)}
                    className={`block px-4 py-0.5 tracking-wider whitespace-nowrap border border-black rounded-lg bg-mint`}>
                    {children}
                </button>
            </li>
        )
    } else {
        return (
            <li className='w-full'>
                <button
                    onClick={() => onClick(view)}
                    className={` ${currentTab === view ? 'border border-black rounded-lg ' : ''}  block px-4 py-0.5 tracking-wider focus:border focus:border-black rounded-lg `}>
                    {children}
                </button>
            </li>
        )
    }
}
   
function Nav({ children }) {
    return (
        <nav className="w-full h-auto pt-16 " id="navbar-hamburger">
            <ul className="flex flex-row justify-between w-full gap-px px-2 py-3 overflow-x-auto text-gray-900 flex-nowrap bg-lavendel ">
                {children}
            </ul>
        </nav>
    );
}

function Menu() {

    const [viewState, setViewState] = useState('SHOP');

    function openTab(view) {
        setViewState(view)
    }

    return (
        <div className='flex flex-col min-h-screen bg-anti-flash'>
            <Nav>
                <NavBtn onClick={openTab} viewState={currentTab} relatedTab={'SHOP'}>
                    Shop</NavBtn>
                <NavBtn onClick={openTab} viewState={currentTab} relatedTab={'GUIDES'} >
                    Guides</NavBtn>
                <NavBtn onClick={openTab} viewState={currentTab} relatedTab={'ABOUT'} >
                    About</NavBtn>
                <NavBtn onClick={openTab} viewState={currentTab} relatedTab={'STORE'} >
                    Store</NavBtn>
                <NavBtn onClick={openTab} viewState={currentTab} relatedTab={'BOOKING'} >
                    Termin Buchen</NavBtn>
            </Nav>
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
            {
                currentTab === 'BOOKING' && <></>
            }
        </div>
    );
}

export default Menu*/