import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import Cart from '../../features/Cart'
import Header from './Header'
import Menu from '../../components/HeaderMobile/Menu'
import Main from './Main'
import Footer from './Footer'

function LandingPage() {
    const { showCart, showMenu } = useContext(StoreContext)
    return (
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
    )
}

export default LandingPage