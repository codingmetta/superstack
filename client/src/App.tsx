import './App.css'
import Header from './components/Header';
import ProductGallery from './components/ProductGallery';
import Banner from './components/Banner';
import TabStrip from './components/TabStrip';
import SkeletonLoader from './components/ProductGallery/SkeletonLoader';
import Cart from './components/Cart';
import Menu from './components/Menu';
import CostumCarousel from './components/Carousel';
import productData from './assets/data/products.json'

import { useState } from 'react'
import { ShoppingCartContext} from './Context';

//TODO: use React Router


function App() {
  const [productCollection, setProductCollection] = useState(productData);
  const [isLoading, setIsLoading] = useState(false);
  const [cart, updateCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  // useEffect(() => {
  //   axios.get('http://localhost:5000/api/products')
  //     .then(
  //       response => {
  //         setProducts(response.data);
  //         setIsLoading(false);
  //       }
  //     ).catch(error => {
  //       console.error(error);
  //     })
  // }, []);

  return (
    <div className="flex flex-col w-full h-full font-brico fancy">
      <ShoppingCartContext.Provider
        value={{
          cart,
          updateCart,
          showCart,
          setShowCart,
          showMenu,
          setShowMenu
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
                  <CostumCarousel />
                  <Banner />

                  {isLoading ?
                    <SkeletonLoader />
                    :

                      <ProductGallery products={productCollection} />

                  }
                  <TabStrip />
                </>
              }

            </>
        }
      </ShoppingCartContext.Provider>

    </div>
  );
}

export default App
