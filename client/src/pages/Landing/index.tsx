import { useContext} from 'react'
import { StoreContext } from '../../Context'
import Cart from '../../features/Cart'
import Header from './Header'
import Menu from '../../components/HeaderMobile/Menu'
import Main from './Main'
import Footer from './Footer'

function LandingPage() {

    const {showCart, showMenu, isLoading, productCollection} = useContext(StoreContext)
    return (
        <>
            {
                showCart ?
                    <Cart />
                    :
                    <>
                        <Header />
                        {showMenu ?
                            <Menu />
                            :
                            <>
                                <Main
                                    isLoading={isLoading}
                                    productCollection={productCollection} />
                                <Footer />
                            </>
                        }
                    </>
            }
        </>
    )
}

export default LandingPage