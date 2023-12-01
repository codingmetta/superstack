'use client';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context'


function Logo() {

    const { setShowCart, setShowMenu } = useContext(ShoppingCartContext);

    function handleClick() {
        setShowMenu(false);
        //setShowCart(false);
    }

    return (
        <a onClick={handleClick} href="#" className="flex flex-col p-3 m-0 space-x-4">
            <p className="p-0 m-0 text-[1.75rem] leading-[1.5rem] tracking-widest text-black uppercase font-bagel">Super</p>
            <p className="p-0 m-0 text-[1.75rem] leading-[1.5rem] tracking-widest text-black uppercase font-bagel">Stack</p>
        </a>
    );
}

export default Logo