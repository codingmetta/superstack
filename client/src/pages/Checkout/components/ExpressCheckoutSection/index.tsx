'use client';
import Contact from './Contact';
import ExpressWallet from './ExpressWallet';
function ExpressCheckoutSection() {
    return (
        <section className='flex flex-col items-center justify-between w-full min-h-full px-5 py-6 bg-white '>
            <h3 className='pb-4 text-gray-600 '> Express Checkout</h3>
            
            <ExpressWallet />

            <span className='relative w-full my-8 text-center text-gray-600 border-b border-gray-300'>
                <span className='absolute px-4 -translate-y-3 bg-white -translate-x-9'>
                    ODER
                </span>
            </span>

            <Contact />
        </section>
    )
}

export default ExpressCheckoutSection