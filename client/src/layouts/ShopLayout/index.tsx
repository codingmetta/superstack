'use client';
import { NavLink, Outlet } from 'react-router-dom';
import './index.css'

function CategoryLinkBtn({ relatedUrl, children }) {
    if (relatedUrl === '.') {
        return (
            <NavLink
                to={relatedUrl}
                end
                className={({ isActive, isPending }) =>
                    [
                        isActive ? 'btn-active' : 'btn-inactive',
                        isPending ? 'pending' : 'notpending'
                    ].join(" ")
                }>
                {children}
            </NavLink>
        )
    } else {
        return (
            <NavLink
                to={relatedUrl}
                className={({ isActive, isPending }) =>
                    [
                        isActive ? 'btn-active' : 'btn-inactive',
                        isPending ? 'pending' : 'notpending'
                    ].join(" ")
                }>
                {children}
            </NavLink>
        )
    }
}

function LayoutWrapper({ children }) {
    return (
        <nav className="flex flex-row justify-between w-full h-full gap-px px-2 pt-[4.5rem] pb-2 overflow-x-auto text-gray-900 flex-nowrap bg-lavendel">
            {children}
        </nav>
    );
}
function ShopLayout() {
    return (
        <>
            <LayoutWrapper>
                <CategoryLinkBtn relatedUrl={'.'}>
                    Alle Produkte
                </CategoryLinkBtn>
                <CategoryLinkBtn relatedUrl={'piercings'}>
                    Piercings
                </CategoryLinkBtn>
                <CategoryLinkBtn relatedUrl={'clickers'}>
                    Clickers
                </CategoryLinkBtn>
                <CategoryLinkBtn relatedUrl={'earrings'}>
                    Earrings
                </CategoryLinkBtn>
                <CategoryLinkBtn relatedUrl={'hoops-huggies'}>
                    Hoops & Huggies
                </CategoryLinkBtn>
                <CategoryLinkBtn relatedUrl={'chains-dangles'}>
                    Chains & Dangles
                </CategoryLinkBtn>
            </LayoutWrapper>
            <Outlet />
        </>
    )
}

export default ShopLayout


