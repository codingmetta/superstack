import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import { useContext } from 'react'
import { StoreContext } from 'src/context/StoreContext'
import Menu from "./HeaderMobile/Menu"
import CartModal from 'src/features/CartModal'


export default function Layout() {
    const {  showMenu } = useContext(StoreContext)

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

/*    return (
        <>
            {
                showCart ?
                    <Cart />
                    :
                    <>
                        <Header />
                        { showMenu ?
                            <Menu />
                            :
                            <>
                                <Main />
                                <Footer />
                            </>
                        }
                    </>
            }
        </>
    )*/