import { useState, useEffect } from 'react'
import axios from 'axios';

import './App.css'
import './fonts/KODARO.ttf';

import Header from './components/Header';
import ProductSearch from './components/ProductSearch';
import Jumbotron from './components/Jumbotron';
import Banner from './components/Banner';
import TabStrip from './components/TabStrip/TabStrip';
import SkeletonLoader from './components/SkeletonLoader';
import ShoppingCart from './components/ShoppingCart';

import { ShoppingCartContext } from './Context';




function App() {
  const [products, setProducts] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [cart, updateCart] = useState([]);



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
    <div className="flex flex-col w-full h-full font-brico">
      <ShoppingCartContext.Provider
              value={{
                cart,
                updateCart
              }} 
              >

        <Header></Header>
        <Jumbotron></Jumbotron>
        <Banner></Banner>
        <ShoppingCart></ShoppingCart>
        {isLoading ?
          <SkeletonLoader />
          :
          <ProductSearch products={products} />
        }
        <TabStrip></TabStrip>
      </ShoppingCartContext.Provider>

    </div>
  );
}

export default App
