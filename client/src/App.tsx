import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { StoreContext } from './context/StoreContext'
import { MenuContext } from './context/MenuContext'
import { AppContext } from './context/AppContext'
import Landing from './pages/Landing';
import AppLayout from './layouts/AppLayout'
import ShopLayout from './layouts/ShopLayout'
import Shop from './pages/Shop'
import Piercings from './pages/Shop/subpages/Piercings'
import ChainsAndDangles from './pages/Shop/subpages/ChainsAndDangles'
import Clickers from './pages/Shop/subpages/Clickers'
import HoopsAndHuggies from './pages/Shop/subpages/HoopsAndHuggies'
import Earrings from './pages/Shop/subpages/Earrings'
import productData from './assets/data/products.json'



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
              <Route path="/" element={<AppLayout />}>
                <Route index element={<Landing />} />
                <Route path="shop" element={<ShopLayout />} >
                  <Route index element={<Shop />} />
                  <Route path="piercings" element={<Piercings />} />
                  <Route path="clickers" element={<Clickers />} />
                  <Route path="earrings" element={<Earrings />} />
                  <Route path="hoops-huggies" element={<HoopsAndHuggies />} />
                  <Route path="chains-dangles" element={<ChainsAndDangles/>} />
                </Route>
              </Route>

            </Routes>
          </BrowserRouter>
        </StoreContext.Provider>
      </MenuContext.Provider>

    </AppContext.Provider>
  );
}

export default App
