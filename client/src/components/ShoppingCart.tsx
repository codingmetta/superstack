'use client';
import { useContext } from 'react';
import CartItem from './CartItem';
import { ShoppingCartContext } from '../Context'


function ShoppingCart() {
    
    const { cart, updateCart } = useContext(ShoppingCartContext);

    const itemElements = cart.map((item) => {
        return (
            <CartItem key={item.id} item={item} />
        )
    });

    return (
        <div className='flex flex-col w-full min-h-44'>
            <section className="flex flex-row items-center justify-between p-6 border-b-2 border-grey-200">
                <h2 className='text-xl font-bold '>Warenkorb</h2>
                <button className='flex items-center justify-center w-8 h-8 text-center text-gray-400 bg-gray-200 rounded-full'>
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
            </section>
            <section className='flex flex-row flex-wrap justify-center text-center'>
                {
                    cart.length === 0 ?
                        <p className='p-2'>Dein Warenkorb ist leer!</p>
                        :
                        itemElements
                }
            </section>
        </div>
    )
}

export default ShoppingCart