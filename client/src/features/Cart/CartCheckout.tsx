'use client';

function CartCheckout({ totalPrice }) {
    return (
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
    )
}

export default CartCheckout