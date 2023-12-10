'use client';

import { useContext } from 'react';
import CartItem from './CartItem';
import { StoreContext } from '../../context/StoreContext';
import { calculateTotalPrice } from '../../utils/helper.js'
import { formatPrice } from '../../utils/format.js'
import CartIsEmptyPlaceHolder from './CartIsEmptyPlaceHolder.js';
import XMarkIcon from '@heroicons/react/24/outline/esm/XMarkIcon';
import CartCheckout from './CartCheckout.js';

function CartItemsWrapper({ children }) {
    return (
        <section
            id="items-in-shopping-cart"
            className='flex flex-row flex-wrap justify-center w-full overflow-auto text-center bg-white max-h-[35rem]'>
            {children}
        </section>
    )
}

function ShoppingCart() {
    const { cart, setShowCart } = useContext(StoreContext);

    function handleClickCloseCart() {
        setShowCart(false);
    }

    const totalPrice = formatPrice(calculateTotalPrice(cart));
    const isCartEmpty = cart.length === 0 ? true : false
    return (
        <section className='flex flex-col justify-between w-full min-h-screen bg-white'>
            <div>
                <span className="flex flex-row items-center justify-between p-6 border border-grey-200">
                    <h2 className='text-xl font-semibold '>
                        Warenkorb
                    </h2>
                    <button
                        onClick={handleClickCloseCart}
                        className='flex items-center justify-center w-8 h-8 text-center text-gray-400 bg-gray-200 rounded-full'>
                        <XMarkIcon className='w-5 h-5' strokeWidth={3} />
                    </button>
                </span>
                {
                    isCartEmpty ?
                        <CartIsEmptyPlaceHolder />
                        :
                        <CartItemsWrapper>
                            {
                                cart.map((cartItem) =>
                                (
                                    <CartItem key={cartItem.id} item={cartItem} />
                                ))
                            }
                        </CartItemsWrapper>
                }
            </div>
            {
                !isCartEmpty &&
                <CartCheckout totalPrice={totalPrice} />
            }
        </section >
    )
}


export default ShoppingCart