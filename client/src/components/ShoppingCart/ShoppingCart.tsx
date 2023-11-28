'use client';
import { useContext } from 'react';
import CartItem from './CartItem';
import { ShoppingCartContext } from '../../Context';


function ShoppingCart() {

    const { cart, setShowCart } = useContext(ShoppingCartContext);

    const itemElements = cart.map((item) => {
        return (
            <CartItem key={item.id} item={item} />
        )
    });

    function handleClickCloseCart() {
        setShowCart(false);
    }

    return (
        <div className='flex flex-col w-full min-h-screen'>
            <section className="flex flex-row items-center justify-between h-full p-5 border border-grey-200">
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
            </section>
            {
                cart.length === 0 ?
                    <section className='flex flex-col items-center justify-center w-full min-h-screen gap-6 bg-white '>
                        <svg
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
                        </svg>
                        <p className='text-lg font-light text-gray-400 '>Dein Warenkorb ist leer!</p>
                    </section>
                    :
                    <section>
                        <section className='flex flex-row flex-wrap justify-center w-full h-full text-center bg-white'>
                            {itemElements}
                        </section>


                    </section>


            }
        </div>
    )
}

export default ShoppingCart