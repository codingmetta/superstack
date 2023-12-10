'use client';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';


function NavTitle({ onClick, viewState, view, children }) {
    return (
        <li>
            <button
                onMouseEnter={() => onClick(view)}
                className={` ${viewState === view ? 'border border-black rounded-lg ' : ''} bg-transparent block xl:px-1.5 xl:text-lg 2xl:text-xl uppercase xl:gap-x-4 2xl:gap-x-4 py-0.5 tracking-wider font-light focus:border focus:border-black rounded-lg `}>
                {children}
            </button>
        </li>
    );
}
function Nav({ children }) {
    return (
        <ul className="flex flex-row justify-between py-2 text-gray-900 xl:ml-52 xl:gap-12 2xl:gap-12 ">
            {children}
        </ul>
    );
}

function MenuXL() {

    const { menuViewState, setMenuViewState } = useContext(ShoppingCartContext);

    function handleClick(view) {
        setMenuViewState(view)
    }

    return (
        <Nav>
            <NavTitle onClick={handleClick} viewState={menuViewState} view={'SHOP'}>
                Shop</NavTitle>
            <NavTitle onClick={handleClick} viewState={menuViewState} view={'GUIDES'} >
                Guides</NavTitle>
            <NavTitle onClick={handleClick} viewState={menuViewState} view={'ABOUT'} >
                About</NavTitle>
            <NavTitle onClick={handleClick} viewState={menuViewState} view={'STORE'} >
                Store</NavTitle>
            <li>
                <button className=" xl:w-48  2xl:w-52 py-0.5 xl:text-lg 2xl:text-xl tracking-wider uppercase border border-black rounded-lg bg-mint" >Termin buchen</button>
            </li>
        </Nav>
    );

}

export default MenuXL