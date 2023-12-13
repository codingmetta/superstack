'use client';
import { MenuContext } from 'src/context/MenuContext';
import { useContext } from 'react'
import { Link } from 'react-router-dom';
import { StoreContext } from 'src/context/StoreContext';
function SubNavBtn({ onClick, viewState, relatedTab, children }) {
    const { setShowMenu } = useContext(StoreContext)
    
    if (relatedTab === 'BOOKING') {
        return (
            <li className='w-full'>
                <Link
                    onClick={() => setShowMenu(false)}
                    to={'booking'}
                    className={`block px-4 py-0.5 tracking-wider whitespace-nowrap border border-black rounded-lg bg-mint`}>
                    {children}
                </Link>
            </li>
        )
    } else {
        return (
            <li className='w-full'>
                <button
                    onClick={() => onClick(relatedTab)}
                    className={` ${viewState === relatedTab ? 'border border-black rounded-lg ' : ''}  block px-4 py-0.5 tracking-wider focus:border focus:border-black rounded-lg `}>
                    {children}
                </button>
            </li>
        )
    }
}
   
function SubNavWrapper({ children }) {
    return (
        <nav className="w-full h-auto pt-16 ">
            <ul className="flex flex-row justify-between w-full gap-px px-2 py-3 overflow-x-auto text-gray-900 flex-nowrap bg-lavendel ">
                {children}
            </ul>
        </nav>
    );
}

function SubNav() {

    const {currentTab, setCurrentTab} = useContext(MenuContext);

    function openTab(newTab) {
        setCurrentTab(newTab)
    }

    return (
            <SubNavWrapper>
                <SubNavBtn onClick={openTab} viewState={currentTab} relatedTab={'SHOP'}>
                    Shop</SubNavBtn>
                <SubNavBtn onClick={openTab} viewState={currentTab} relatedTab={'GUIDES'} >
                    Guides</SubNavBtn>
                <SubNavBtn onClick={openTab} viewState={currentTab} relatedTab={'ABOUT'} >
                    About</SubNavBtn>
                <SubNavBtn onClick={openTab} viewState={currentTab} relatedTab={'STORE'} >
                    Store</SubNavBtn>
                <SubNavBtn onClick={openTab} viewState={currentTab} relatedTab={'BOOKING'} >
                    Termin Buchen</SubNavBtn>
            </SubNavWrapper>
    );
}

export default SubNav

