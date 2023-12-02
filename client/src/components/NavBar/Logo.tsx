'use client';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context'


function Logo() {

    const { setShowCart, setShowMenu } = useContext(ShoppingCartContext);

    function handleClick() {
        setShowMenu(false);
    }

    return (
        <a onClick={handleClick} href="#" className="flex flex-col m-0 space-x-6 translate-x-3 translate-y-0.5 ">
            <p className="p-0 m-0 text-[1.65rem] leading-[1.3rem] tracking-widest text-black uppercase font-bagel">Super</p>
            <p className="p-0 m-0 text-[1.65rem] leading-[1.3rem] tracking-widest text-black uppercase font-bagel">Stack</p>
        </a>
    );
}

export default Logo