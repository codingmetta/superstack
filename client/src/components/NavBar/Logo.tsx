'use client';
import { useContext } from 'react';
import { StoreContext } from '../../Context'


function Logo() {

    const { setShowMenu } = useContext(StoreContext);

    function handleClick() {
        setShowMenu(false);
    }

    return (
        <h1 aria-label="Superstack">
            <a onClick={handleClick} href="#" className="flex flex-col m-0 space-x-5  translate-x-3 translate-y-0.5 ">
                <p className="p-0 m-0  text-[1.65rem] leading-[1.3rem] tracking-widest text-black uppercase font-bagel">Super</p>
                <p className="p-0 m-0  text-[1.65rem] leading-[1.3rem] tracking-widest text-black uppercase font-bagel">Stack</p>
            </a>
        </h1>
    );
}

export default Logo