import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { StoreContext } from './context/StoreContext'
import { MenuContext } from './context/MenuContext'
import { AppContext } from './context/AppContext'
import Landing from './pages/Landing';
import productData from './assets/data/products.json'
import Layout from './components/Layout'
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
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Landing/>} />
              </Route>

            </Routes>
          </BrowserRouter>
        </StoreContext.Provider>
      </MenuContext.Provider>

    </AppContext.Provider>
  );
}

export default App
