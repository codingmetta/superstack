import Header from './pages/Landing/Header';
import Cart from './features/Cart';
import Menu from './components/Menu';
import productData from './assets/data/products.json'
import Main from './pages/Landing/Main';
import { useState } from 'react'
import { ShoppingCartContext } from './Context';

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
                <Main 
                  isLoading={isLoading} 
                  productCollection={productCollection} />
              }

            </>
        }
      </ShoppingCartContext.Provider>

    </div>
  );
}

export default App
