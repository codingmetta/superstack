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
  const [menuViewState, setMenuViewState] = useState('');



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
          menuViewState,
          setMenuViewState,
          isLoading
        }}
      >
        <LandingPage />
        
      </StoreContext.Provider>

    </div>
  );
}

export default App
