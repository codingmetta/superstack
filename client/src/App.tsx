import productData from './assets/data/products.json'
import { useState } from 'react'
import { StoreContext } from './Context';
import LandingPage from './pages/Landing';
//TODO: use React Router


function App() {
  const [productCollection, setProductCollection] = useState(productData);
  const [isLoading, setIsLoading] = useState(false);
  const [cart, updateCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [currentPlane, setCurrentPlane] = useState('');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1280);
  const [currentTab, setCurrentTab] = useState('SHOP');


  return (
    <div className="page-container">
      <StoreContext.Provider
        value={{
          productCollection,
          cart,
          updateCart,
          showCart,
          setShowCart,
          showMenu,
          setShowMenu,
          isLoading,
          currentTab,
          setCurrentTab,
          currentPlane,
          setCurrentPlane,
          isMobile,
          setIsMobile
        }}
      >
        <LandingPage />

      </StoreContext.Provider>

    </div>
  );
}

export default App
