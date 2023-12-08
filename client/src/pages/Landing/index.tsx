import { useContext} from 'react'
import { ShoppingCartContext } from '../../Context'
import Cart from '../../features/Cart'
import Header from './Header'
import Menu from '../../components/Menu'
import Main from './Main'
import Footer from './Footer'

function LandingPage() {

    const {showCart, showMenu, isLoading, productCollection} = useContext(ShoppingCartContext)
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