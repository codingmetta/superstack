import productData from './assets/data/products.json'
import { useState } from 'react'
import { StoreContext } from './context/StoreContext'
import { MenuContext } from './context/MenuContext'
import { AppContext } from './context/AppContext'
import LandingPage from './pages/Landing';
//TODO: use React Router


function App() {
  const [isLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1280);

  const [productCollection] = useState(productData);
  const [cart, updateCart] = useState([]);

  const [showCart, setShowCart] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const [currentTab, setCurrentTab] = useState('SHOP');


  return (
    <AppContext.Provider
      value={{
        isLoading, 
        isMobile, setIsMobile
      }}>
      <div className="page-container">

        <MenuContext.Provider
          value={{
            currentTab,
            setCurrentTab
          }}>
          <StoreContext.Provider
            value={{
              productCollection,
              cart,
              updateCart,
              showCart,
              setShowCart,
              showMenu,
              setShowMenu
            }}
          >
            <LandingPage />

          </StoreContext.Provider>
        </MenuContext.Provider>

      </div>
    </AppContext.Provider>
  );
}

export default App
