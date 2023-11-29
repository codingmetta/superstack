'use client';

import { useState } from 'react'


//TODO: Komponenten: Shop, Guides, About, Store erstellen, importen udn dann conditional rendering mit &&

function Menu() {

    const [viewState, setViewState] = useState('SHOP');


    function handleClickShopOpen(){
        setViewState('SHOP')
    }
    function handleClickGuidesOpen(){
        setViewState('GUIDES')
    }
    function handleClickAboutOpen(){
        setViewState('ABOUT')
    }
        function handleClickStoreOpen(){
        setViewState('STORE')
    }

    return (
        <div>
            <nav className="w-full h-auto pt-14 " id="navbar-hamburger">
                <ul className="flex flex-row justify-around py-3 mt-4 text-gray-900 bg-lavendel ">
                    <li>
                        <button
                            onClick={handleClickShopOpen}
                            className="block px-4 py-0.5 tracking-wider focus:border focus:border-black rounded-lg " aria-current="page">
                                Shop</button>
                    </li>
                    <li>
                        <button
                            onClick={handleClickGuidesOpen}
                            className="block px-4 py-0.5 tracking-wider focus:border focus:border-black rounded-lg">
                                Guides</button>
                    </li>
                    <li>
                        <button
                            onClick={handleClickAboutOpen}
                            className="block px-4 py-0.5 tracking-wider focus:border focus:border-black rounded-lg">
                                About</button>
                    </li>
                    <li>
                        <button
                            onClick={handleClickStoreOpen}
                            className="block px-4 py-0.5 tracking-wider focus:border focus:border-black rounded-lg">
                                Store</button>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Menu