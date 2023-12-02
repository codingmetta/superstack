'use client';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context'
import ShoppingBagIcon from '@heroicons/react/24/outline/esm/ShoppingBagIcon';

function CartBtn() {
  const { cart, setShowCart } = useContext(ShoppingCartContext);

  function handleOnClick() {
    setShowCart(true);
  }

  const itemsInCart = cart.length;

  return (
    <button
      className='relative h-full'
      type="button"
      onClick={handleOnClick}>
      <span className="sr-only">Open Shopping Cart</span>
      <ShoppingBagIcon className="text-black w-7 hover:text-mint" viewBox="0 1 23 22" />
      {
        itemsInCart !== 0 &&
        <span className='absolute px-2 m-auto text-sm font-black translate-x-1 border border-black rounded-full -translate-y-9 bg-limone '>{itemsInCart}</span>
      }
    </button>
  );
}



export default CartBtn;
