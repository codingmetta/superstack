import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import Cart from 'src/features/Cart'
import { useContext } from 'react'
import { StoreContext } from 'src/context/StoreContext'
import Menu from "./HeaderMobile/Menu"

export default function Layout() {
    const { showCart, showMenu } = useContext(StoreContext)

    return (
        <div className="page-container">
            {
                showCart ?
                    <Cart />
                    :
                    <>
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