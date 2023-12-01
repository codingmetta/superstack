import { useState, useEffect } from 'react'
import axios from 'axios';

import './App.css'
import './fonts/KODARO.ttf';

import Header from './components/Header';
import ProductGallery from './components/ProductGallery';
import Jumbotron from './components/Jumbotron';
import Banner from './components/Banner';
import TabStrip from './components/TabStrip';
import SkeletonLoader from './components/ProductGallery/SkeletonLoader';
import Cart from './components/Cart';
import Menu from './components/Menu';

import { ShoppingCartContext } from './Context';

//TODO: use React Router


function App() {
  const [products, setProducts] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [cart, updateCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showMenu, setShowMenu] = useState(false);



  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(
        response => {
          setProducts(response.data);
          setIsLoading(false);
        }
      ).catch(error => {
        console.error(error);
      })
  }, []);

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
                  <Jumbotron />
                  <Banner />

                  {isLoading ?
                    <SkeletonLoader />
                    :
                    <ProductGallery products={products} />
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
