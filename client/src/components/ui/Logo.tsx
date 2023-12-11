'use client';
import { useContext } from 'react';
import { StoreContext } from 'src/context/StoreContext'
import { AppContext } from 'src/context/AppContext'
import { Link } from 'react-router-dom';

function Logo() {
    const { isMobile } = useContext(AppContext);
    const { setShowMenu } = useContext(StoreContext);

    function handleClick() {
        setShowMenu(false);
    }

    if (isMobile) {
        return (
            <h1 aria-label="Superstack">
                <Link
                    onClick={handleClick}
                    to="/"
                    className="flex flex-col m-0 space-x-5  translate-x-3 translate-y-0.5 ">
                    <p className="p-0 m-0  text-[1.65rem] leading-[1.3rem] tracking-widest text-black uppercase font-bagel">Super</p>
                    <p className="p-0 m-0  text-[1.65rem] leading-[1.3rem] tracking-widest text-black uppercase font-bagel">Stack</p>
                </Link>
            </h1>
        )
    } else {
        return (
            <h1 aria-label="Superstack" className="relative translate-x-1">
                <Link
                    to="/"
                    className="absolute flex flex-col m-0 space-x-8 translate-x-0 -translate-y-14 ">
                    <p className="p-0 m-0  text-[2.7rem] leading-[2.2rem] tracking-widest text-black uppercase font-bagel">Super</p>
                    <p className="p-0 m-0  text-[2.7rem] leading-[2.2rem] tracking-widest text-black uppercase font-bagel">Stack</p>
                </Link>
            </h1>
        )
    }
}

export default Logo