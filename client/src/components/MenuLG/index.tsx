'use client';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';


function NavTitle({ onClick, viewState, view, children }) {
    return (
        <li>
            <button
                onMouseEnter={() => onClick(view)}
                className={` ${viewState === view ? 'isFocused' : ''}  block text-xl uppercase px-4 py-0.5 tracking-wider font-light focus:border focus:border-black rounded-lg `}>
                {children}
            </button>
        </li>
    );
}
function Nav({ children }) {
    return (
        <ul className="flex flex-row justify-around gap-12 py-3 text-gray-900 bg-transparent">
            {children}
        </ul>
    );
}

function MenuLG() {

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
        </Nav>
    );

}

export default MenuLG