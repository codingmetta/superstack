'use client';
import { Link } from "react-router-dom";
import backToTop from 'src/utils/window.js';

function CartCheckout({ totalPrice }) {
    return (
        <section
            id="checkout-shopping-cart"
            className="z-50 flex flex-col p-4 overflow-hidden bg-gray-100 ">
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
            <Link
                onClick={() => backToTop()}
                to="/checkout"
                className='flex items-center justify-center w-full text-white bg-black rounded text-md h-14 text-bold'>
                Checkout
            </Link>
        </section>
    )
}

export default CartCheckout