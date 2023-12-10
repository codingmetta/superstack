'use client';
import { useContext } from 'react';
import { StoreContext } from '../../Context';


function NavBtn({ onClick, viewState, view, children }) {

    if (view === 'BOOKING') {
        return (
            <li>
                <button
                    onMouseEnter={() => onClick(view)}
                    className={`xl:w-48 2xl:w-52 py-0.5 xl:text-lg 2xl:text-xl tracking-wider uppercase border border-black rounded-lg bg-mint`}>
                    {children}
                </button>
            </li>
        )
    } else {
        return (
            <li>
                <button
                    onMouseEnter={() => onClick(view)}
                    className={` ${viewState === view ? 'border border-black rounded-lg ' : ''}  bg-transparent block xl:px-1.5 xl:text-lg 2xl:text-xl uppercase xl:gap-x-4 2xl:gap-x-4 py-0.5 tracking-wider font-light focus:border focus:border-black rounded-lg `}>
                    {children}
                </button>
            </li>
        )
    }
}


function Nav({ children }) {
    return (
        <ul className="flex flex-row justify-between py-2 text-gray-900 xl:ml-52 xl:gap-12 2xl:gap-12 ">
            {children}
        </ul>
    );
}

function MenuXL() {

    const { menuViewState, setMenuViewState } = useContext(StoreContext);

    function handleClick(view) {
        setMenuViewState(view)
    }

    return (
        <Nav>
            <NavBtn onClick={handleClick} viewState={menuViewState} view={'SHOP'}>
                Shop</NavBtn>
            <NavBtn onClick={handleClick} viewState={menuViewState} view={'GUIDES'} >
                Guides</NavBtn>
            <NavBtn onClick={handleClick} viewState={menuViewState} view={'ABOUT'} >
                About</NavBtn>
            <NavBtn onClick={handleClick} viewState={menuViewState} view={'STORE'} >
                Store</NavBtn>
            <NavBtn onClick={handleClick} viewState={menuViewState} view={'BOOKING'} >
                Termin Buchen</NavBtn>
        </Nav>
    );

}

export default MenuXL



/*'use client';
import { useContext } from 'react';
import { StoreContext } from '../../Context';


function NavBtn({ onClick, viewState, view, children }) {

    if (view === 'BOOKING') {
        return (
            <li>
                <button
                    onMouseEnter={() => onClick(view)}
                    className={`xl:w-48 2xl:w-52 py-0.5 xl:text-lg 2xl:text-xl tracking-wider uppercase border border-black rounded-lg bg-mint`}>
                    {children}
                </button>
            </li>
        )
    } else {
        return (
            <li>
                <button
                    onMouseEnter={() => onClick(view)}
                    className={` ${viewState === view ? 'border border-black rounded-lg ' : ''}  bg-transparent block xl:px-1.5 xl:text-lg 2xl:text-xl uppercase xl:gap-x-4 2xl:gap-x-4 py-0.5 tracking-wider font-light focus:border focus:border-black rounded-lg `}>
                    {children}
                </button>
            </li>
        )
    }
}


function Nav({ children }) {
    return (
        <ul className="flex flex-row justify-between py-2 text-gray-900 xl:ml-52 xl:gap-12 2xl:gap-12 ">
            {children}
        </ul>
    );
}

function MenuXL() {

    const { menuViewState, setMenuViewState } = useContext(StoreContext);

    function handleClick(view) {
        setMenuViewState(view)
    }

    return (
        <Nav>
            <NavBtn onClick={handleClick} viewState={menuViewState} view={'SHOP'}>
                Shop</NavBtn>
            <NavBtn onClick={handleClick} viewState={menuViewState} view={'GUIDES'} >
                Guides</NavBtn>
            <NavBtn onClick={handleClick} viewState={menuViewState} view={'ABOUT'} >
                About</NavBtn>
            <NavBtn onClick={handleClick} viewState={menuViewState} view={'STORE'} >
                Store</NavBtn>
            <NavBtn onClick={handleClick} viewState={menuViewState} view={'BOOKING'} >
                Termin Buchen</NavBtn>
        </Nav>
    );

}

export default MenuXL*/