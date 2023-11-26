'use client';
import React from 'react'

function ShoppingCart() {
    return (
        <div className='flex flex-col '>
            <section className="flex flex-row justify-between border-b-2 border-grey-200">
                <h2>Warenkorb</h2>
                <button>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </section>
            <section className='flex justify-center text-center'>
                <p>Dein Warenkorb ist leer!</p>
            </section>

        </div>
    )
}

export default ShoppingCart