'use client';

import { useState } from 'react'
import ShopTab from './ShopTab'
import AboutTab from './AboutTab';
import GuidesTab from './GuidesTab';
// TODO: Store Tab

function NavTitle({ onClick, viewState, view, children }) {
    return (
        <li>
            <button
                onClick={() => onClick(view)}
                className={` ${viewState === view ? 'isFocused' : ''}  block px-4 py-0.5 tracking-wider focus:border focus:border-black rounded-lg `}>
                {children}
            </button>
        </li>
    );
}
function Nav({ children }) {
    return (
        <nav className="w-full h-auto pt-16 " id="navbar-hamburger">
            <ul className="flex flex-row justify-around py-3 text-gray-900 bg-lavendel ">
                {children}
            </ul>
        </nav>
    );
}

function Menu() {

    const [viewState, setViewState] = useState('SHOP');

    function handleClick(view) {
        setViewState(view)
    }

    return (
        <div className='flex flex-col min-h-screen bg-anti-flash'>
            <Nav>
                <NavTitle onClick={handleClick} viewState={viewState} view={'SHOP'}>
                    Shop</NavTitle>
                <NavTitle onClick={handleClick} viewState={viewState} view={'GUIDES'} >
                    Guides</NavTitle>
                <NavTitle onClick={handleClick} viewState={viewState} view={'ABOUT'} >
                    About</NavTitle>
                <NavTitle onClick={handleClick} viewState={viewState} view={'STORE'} >
                    Store</NavTitle>
            </Nav>
            {
                viewState === 'SHOP' && <ShopTab />
            }
            {
                viewState === 'GUIDES' && <GuidesTab />
            }
            {
                viewState === 'ABOUT' && <AboutTab />
            }
            {
                viewState === 'STORE' && <></>
            }
        </div>
    );
}

export default Menu