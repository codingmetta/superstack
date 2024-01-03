import React from 'react'


function ItemCard() {
    return (
        <article className='flex flex-row items-center justify-between py-5'>
            <span className='flex '>
                <figure className='relative flex w-16 h-16 min-w-16 min-h-16'>
                    <img 
                        src="/images/products/sparkle-clicker.webp" 
                        alt="Piercing" 
                        className='object-contain w-16 h-16 border rounded min-w-16 min-h-16' />
                    <span className='absolute flex items-center justify-center w-[1.35rem] h-[1.35rem] text-sm text-white bg-gray-500 border border-gray-500 rounded-full translate-x-12 -translate-y-[0.75rem]'>
                        1
                    </span>
                </figure>

                <span className='flex flex-col justify-center gap-0 px-4'>
                    <h3 className='text-sm'>Super Small Ball</h3>
                    <p className='text-xs font-light text-gray-500'>Single / Gold / 4mm</p>
                </span>
            </span>
            <p className='text-sm'>17,90 €</p>
        </article>
    );
}

function OrderViewSection() {
    return (
        <section className='flex flex-col justify-between w-full min-h-full px-5 py-6 bg-white '>
            <h2 className='text-2xl font-semibold'>Bestellübersicht</h2>
            <ItemCard />

        </section>
    )
}

export default OrderViewSection