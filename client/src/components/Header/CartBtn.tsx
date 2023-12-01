'use client';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context'
import ShoppingBagIcon from '@heroicons/react/24/outline/esm/ShoppingBagIcon';

function CartBtn() {
  const { setShowCart } = useContext(ShoppingCartContext);

  function handleOnClick() {
    setShowCart(true);
  }

  return (
    <button 
      type="button" 
      onClick={handleOnClick}>
      <span className="sr-only">Open Shopping Cart</span>
      <ShoppingBagIcon className="w-6 h-6 text-black hover:text-mint " />
    </button>
  );
}



export default CartBtn;
