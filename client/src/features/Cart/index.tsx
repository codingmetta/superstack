'use client';

import { useContext } from 'react';
import CartItem from './CartItem';
import { ShoppingCartContext } from '../../Context';


function ShoppingCart() {

    const { cart, setShowCart } = useContext(ShoppingCartContext);

    const cartItems = cart.map((cartItem) => {
        return (
            <CartItem key={cartItem.id} item={cartItem} />
        )
    });

    function handleClickCloseCart() {
        setShowCart(false);
    }

    function calcTotalPrice() {
        let total = 0;
        for (let i = 0; i < cart.length; i++) {
            total += cart[i].variantPrice * cart[i].amount;
        }
        return total.toFixed(2);
    }
    const totalPrice = calcTotalPrice();

    return (
        <div className='flex flex-col justify-between w-full min-h-screen bg-white'>
            <div>
                <div className="flex flex-row items-center justify-between p-6 border border-grey-200">
                    <h2 className='text-xl font-semibold '>Warenkorb</h2>
                    <button
                        onClick={handleClickCloseCart}
                        className='flex items-center justify-center w-8 h-8 text-center text-gray-400 bg-gray-200 rounded-full'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="2 2 20 20"
                            strokeWidth={3.5}
                            stroke="currentColor"
                            className="w-3 h-3">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                {
                    cart.length !== 0 ?
                        <section
                            id="items-in-shopping-cart"
                            className='flex flex-row flex-wrap justify-center w-full overflow-auto text-center bg-white max-h-[35rem]'>
                            {cartItems}
                        </section>

                        :
                        <span className='flex flex-col items-center justify-center w-full min-h-screen gap-6 bg-white '>
                           {CartIcon}
                            <p className='text-lg font-light text-gray-400 '>
                                Dein Warenkorb ist leer!
                            </p>
                        </span>

                }
            </div>

            {
                cart.length !== 0 &&
                <section
                    id="checkout-shopping-cart"
                    className="flex flex-col p-4 bg-gray-100 ">
                    <div className="flex flex-row items-center justify-between w-full h-full pt-1 pb-3 border-b">
                        <h3>Versand</h3>
                        <p className='text-sm tracking-wide text-gray-400 uppercase'>
                            Wird im Checkout berechnet
                        </p>
                    </div>
                    <div className="flex flex-row items-center justify-between pt-3 pb-6 font-semibold ">
                        <h3>Zwischensumme</h3>
                        <p>{totalPrice} €</p>
                    </div>
                    <button className='w-full text-sm text-white bg-black rounded h-14 text-bold'>
                        Checkout
                    </button>
                </section>
            }
        </div >
    )
}


const CartIcon =  <svg
xmlns="http://www.w3.org/2000/svg"
fill="lightgray"
viewBox="0 0 20 23"
strokeWidth={1.5}
stroke="currentColor"
className="w-16 h-16 text-gray-500"
>
<path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
/>
</svg>;

export default ShoppingCart