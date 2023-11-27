import { useState, useEffect } from 'react'
import './App.css'

import Header from './components/Header';
import ProductSearch from './components/ProductSearch';
import Jumbotron from './components/Jumbotron';
import Banner from './components/Banner';
import TabStrip from './components/TabStrip/TabStrip';
import SkeletonLoader from './components/SkeletonLoader';


import './fonts/KODARO.ttf';
import axios from 'axios';

function App() {
  const [products, setProducts] = useState();
  const [isLoading, setIsLoading] = useState(true);


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

  /*fetch test data from public api*/
  /*    useEffect(() => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((productData) => {
      setProducts(productData);
    });
}, []);*/

  console.log(products);
  return (
    <div className="flex flex-col w-full h-full font-brico">
      <Header></Header>
      <Jumbotron></Jumbotron>
      <Banner></Banner>
      {isLoading ?
        <SkeletonLoader />
        :
        <ProductSearch products={products} />
      }
      <TabStrip></TabStrip>
    </div>
  );
}

export default App
