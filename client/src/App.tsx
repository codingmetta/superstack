import Header from './pages/Landing/Header';
import Cart from './features/Cart';
import Menu from './components/Menu';
import productData from './assets/data/products.json'
import Main from './pages/Landing/Main';
import { useState } from 'react'
import { ShoppingCartContext } from './Context';
import Footer from './pages/Landing/Footer';
//TODO: use React Router


function App() {
  const [productCollection, setProductCollection] = useState(productData);
  const [isLoading, setIsLoading] = useState(false);
  const [cart, updateCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [menuViewState, setMenuViewState] = useState('');



  return (
    <div className="page-container">
      <ShoppingCartContext.Provider
        value={{
          productCollection,
          cart,
          updateCart,
          showCart,
          setShowCart,
          showMenu,
          setShowMenu,
          menuViewState, 
          setMenuViewState
        }}
      >
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
      </ShoppingCartContext.Provider>

    </div>
  );
}

export default App
