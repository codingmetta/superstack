import { Outlet } from "react-router-dom"
import { useContext } from 'react'
import { lazy } from 'react';

import { StoreContext } from 'src/context/StoreContext'
import Header from "src/components/Header"
import Menu from "src/components/Header/HeaderMobile/Menu"
import CartModal from 'src/features/CartModal'

const Footer = lazy(() => import('src/components/Footer'))


export default function AppLayout() {
    const { showMenu } = useContext(StoreContext)


    return (
        <div className="page-container">
            <CartModal />
            <Header />
            {
                showMenu ?
                    <Menu />
                    :
                    <>
                        <Outlet />
                        <Footer />
                    </>
            }
        </div>
    )
}
