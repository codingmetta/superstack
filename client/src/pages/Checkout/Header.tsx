import React from 'react'
import { Link } from 'react-router-dom'
import ShoppingBagIcon from '@heroicons/react/24/outline/esm/ShoppingBagIcon';

function Header() {

    return (
        <header className="flex flex-row items-center justify-between p-5 border border-grey-200">
            <h2 className='text-2xl font-semibold '>
                Superstack
            </h2>
            <Link
                to="/"
                className='flex items-center justify-center w-8 h-8 text-center rounded-full text-footer-mauve'
            >
                <ShoppingBagIcon className='w-6 h-6' strokeWidth={1.5} />
            </Link>


        </header>
    )
}

export default Header