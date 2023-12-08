'use client';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';

function PlaneWrapper({ children }) {
    const { setMenuViewState } = useContext(ShoppingCartContext)

    function handleMouseLeave(e) {
        e.stopPropagation();
        setMenuViewState('')
    }

    return (
        <nav
            onMouseLeave={handleMouseLeave}
            className="flex items-center justify-center gap-40 w-full px-12 bg-white border border-black rounded-3xl h-[40vh]">
            {children}
        </nav>
    )
}

export default PlaneWrapper