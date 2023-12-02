'use client';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context'
import Bars3Icon from '@heroicons/react/20/solid/esm/Bars3Icon';
import XMarkIcon from '@heroicons/react/24/outline/esm/XMarkIcon';
function MenuBtn() {

    const {  showMenu, setShowMenu } = useContext(ShoppingCartContext);

    function handleClick() {
        setShowMenu(prev => !prev);
    }
    return (
        <button
            onClick={handleClick}
            type="button"
            className="inline-flex items-center justify-center w-10 h-10 text-sm rounded-lg hover:text-mint">
            <span className="sr-only">Open main menu</span>
            {
                showMenu ? 
                    <XMarkIcon className="w-6 text-black hover:text-mint" strokeWidth={2} viewBox="2 0 20 26" /> 
                    : 
                    <Bars3Icon className='w-5 text-black hover:text-mint' viewBox="3 1 13 18" />
            }
        </button>
    );
}

export default MenuBtn