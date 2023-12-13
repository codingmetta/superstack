import { Outlet } from "react-router-dom"
import Header from "src/components/Header"
import Footer from "src/components/Footer"
import { useContext } from 'react'
import { StoreContext } from 'src/context/StoreContext'
import Menu from "src/components/Header/HeaderMobile/Menu"
import CartModal from 'src/features/CartModal'
import { AppContext } from "src/context/AppContext"

export default function AppLayout() {
    const {  showMenu } = useContext(StoreContext)
    // const {  isMobile } = useContext(AppContext)


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
