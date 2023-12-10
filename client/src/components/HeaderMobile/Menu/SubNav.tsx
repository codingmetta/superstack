'use client';
import { StoreContext } from '../../../Context';
import { useContext } from 'react'

function SubNavBtn({ onClick, viewState, relatedTab, children }) {
    if (relatedTab === 'BOOKING') {
        return (
            <li className='w-full'>
                <button
                    onClick={() => onClick(relatedTab)}
                    className={`block px-4 py-0.5 tracking-wider whitespace-nowrap border border-black rounded-lg bg-mint`}>
                    {children}
                </button>
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

    const {currentTab, setCurrentTab} = useContext(StoreContext);

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

