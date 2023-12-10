'use client';
import { useContext } from 'react';
import { PlaneContext } from '../../context/PlaneContext';


function SubNavXLBtn({ onClick, viewState, relatedPlane, children }) {

    if (relatedPlane === 'BOOKING') {
        return (
            <li>
                <button
                    onMouseEnter={() => onClick(relatedPlane)}
                    className={`xl:w-48 2xl:w-52 py-0.5 xl:text-lg 2xl:text-xl tracking-wider uppercase border border-black rounded-lg bg-mint`}>
                    {children}
                </button>
            </li>
        )
    } else {
        return (
            <li>
                <button
                    onMouseEnter={() => onClick(relatedPlane)}
                    className={` ${viewState === relatedPlane ? 'border border-black rounded-lg ' : ''}  bg-transparent block xl:px-1.5 xl:text-lg 2xl:text-xl uppercase xl:gap-x-4 2xl:gap-x-4 py-0.5 tracking-wider font-light focus:border focus:border-black rounded-lg `}>
                    {children}
                </button>
            </li>
        )
    }
}


function SubNavXLWrapper({ children }) {
    return (
        <ul className="flex flex-row justify-between py-2 text-gray-900 xl:ml-52 xl:gap-12 2xl:gap-12 ">
            {children}
        </ul>
    );
}

function SubNavXL() {

    const { currentPlane, setCurrentPlane } = useContext(PlaneContext);

    function showPlane(view) {
        setCurrentPlane(view)
    }

    return (
        <SubNavXLWrapper>
            <SubNavXLBtn onClick={showPlane} viewState={currentPlane} relatedPlane={'SHOP'}>
                Shop</SubNavXLBtn>
            <SubNavXLBtn onClick={showPlane} viewState={currentPlane} relatedPlane={'GUIDES'} >
                Guides</SubNavXLBtn>
            <SubNavXLBtn onClick={showPlane} viewState={currentPlane} relatedPlane={'ABOUT'} >
                About</SubNavXLBtn>
            <SubNavXLBtn onClick={showPlane} viewState={currentPlane} relatedPlane={'STORE'} >
                Store</SubNavXLBtn>
            <SubNavXLBtn onClick={showPlane} viewState={currentPlane} relatedPlane={'BOOKING'} >
                Termin Buchen</SubNavXLBtn>
        </SubNavXLWrapper>
    );
}

export default SubNavXL