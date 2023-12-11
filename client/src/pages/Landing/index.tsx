import { useContext } from 'react'
import { StoreContext } from 'src/context/StoreContext'
import Cart from 'src/features/Cart'
import Header from '../../components/Header'
import Menu from 'src/components/HeaderMobile/Menu'
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