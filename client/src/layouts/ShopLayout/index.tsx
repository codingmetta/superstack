'use client';
import { NavLink, Outlet } from 'react-router-dom';

function CategoryLinkBtn({ relatedUrl, children }) {
    if (relatedUrl === '.') {
        return (
            <NavLink
                to={relatedUrl}
                end
                className={({ isActive, isPending }) =>
                    [
                        isActive ? "h-10 text-lg  whitespace-nowrap  active:border active:border-black  rounded-lg  px-4 py-0.5 tracking-wider" : "tracking-wider h-10 text-lg  whitespace-nowrap border border-transparent rounded-lg  px-4 py-0.5 hover:border hover:border-black",
                        isPending ? "h-10 text-lg  whitespace-nowrap  border border-black  rounded-lg  px-4 py-0.5 tracking-wider" : "tracking-wider h-10 text-lg  whitespace-nowrap border border-transparent rounded-lg  px-4 py-0.5 hover:border hover:border-black"
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
                        isActive ? "h-10 text-lg  whitespace-nowrap  active:border active:border-black border border-black  rounded-lg  px-4 py-0.5 tracking-wider" : " tracking-wider h-10 text-lg  whitespace-nowrap border border-transparent rounded-lg  px-4 py-0.5 hover:border hover:border-black",
                        isPending ? "h-10 text-lg  whitespace-nowrap  border border-black  rounded-lg  px-4 py-0.5 tracking-wider" : "tracking-wider h-10 text-lg  whitespace-nowrap border border-transparent rounded-lg  px-4 py-0.5 hover:border hover:border-black"
                    ].join(" ")
                }>
                {children}
            </NavLink>
        )
    }
}

function LayoutWrapper({ children }) {
    return (
        <nav className="flex flex-row justify-between w-full h-full gap-px px-2 pt-20 pb-2 overflow-x-auto text-gray-900 flex-nowrap bg-lavendel">
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


