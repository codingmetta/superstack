'use client';

import React from 'react'

function Menu() {
    return (
        <>
            <div className="w-full h-auto" id="navbar-hamburger">
                <ul className="flex flex-row mt-4 font-medium rounded-lg bg-gray-50">
                    <li>
                        <a href="#" className="block px-3 py-2 text-white bg-blue-700 rounded" aria-current="page">Shop</a>
                    </li>
                    <li>
                        <a href="#" className="block px-3 py-2 text-gray-900 rounded hover:bg-gray-100">Guides</a>
                    </li>
                    <li>
                        <a href="#" className="block px-3 py-2 text-gray-900 rounded hover:bg-gray-100">About</a>
                    </li>
                    <li>
                        <a href="#" className="block px-3 py-2 text-gray-900 rounded hover:bg-gray-100">Store</a>
                    </li>
                </ul>
            </div>
        </>
);
}

export default Menu