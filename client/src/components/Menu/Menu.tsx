'use client';

import { useState } from 'react'
import ShopTab from './ShopTab'
import AboutTab from './AboutTab';
import GuidesTab from './GuidesTab';


function NavTitle({ handleClick, viewState, title , view}) {
    return (
        <li>
            <button
                onClick={handleClick}
                className={` ${viewState === view ? 'isFocused' : ''}  block px-4 py-0.5 tracking-wider focus:border focus:border-black rounded-lg `}>
                {title}</button>
        </li>
    );
}

function Menu() {

    const [viewState, setViewState] = useState('SHOP');


    function handleClickShopOpen() {
        setViewState('SHOP')
    }
    function handleClickGuidesOpen() {
        setViewState('GUIDES')
    }
    function handleClickAboutOpen() {
        setViewState('ABOUT')
    }
    function handleClickStoreOpen() {
        setViewState('STORE')
    }


    return (
        <div className='flex flex-col min-h-screen bg-anti-flash'>
            <nav className="w-full h-auto pt-14 " id="navbar-hamburger">
                <ul className="flex flex-row justify-around py-3 mt-4 text-gray-900 bg-lavendel ">
                    <NavTitle title="Shop" handleClick={handleClickShopOpen} viewState={viewState}  view={'SHOP'}/>
                    <NavTitle title="Guides" handleClick={handleClickGuidesOpen} viewState={viewState} view={'GUIDE'} />
                    <NavTitle title="About" handleClick={handleClickAboutOpen} viewState={viewState} view={'ABOUT'} />
                    <NavTitle title="Store" handleClick={handleClickStoreOpen} viewState={viewState} view={'STORE'} />
                </ul>
            </nav>
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