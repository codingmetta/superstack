'use client';
import { useContext } from 'react';
import ProductCard from '../ProductCard/index';
import { ShoppingCartContext } from '../../Context';


export default function NewProductsSection() {
    const { productCollection } = useContext(ShoppingCartContext)
    const newProducts = productCollection.slice(10, 12);
    return (
        <section className="flex flex-col items-center gap-16 pt-12 pb-8 bg-white lg:pt-28 lg:pb-28 lg:gap-0 xl:gap-12 2xl:gap-16">
            <div className='flex flex-col gap-2 text-center '>
                <span className='text-lg font-black uppercase lg:text-xl whitespace-nowrap font-unbounded '>New new new new new</span>
                <p className='tracking-wide lg:text-lg'>Oh yeah! Unsere Neuzugänge sind da.</p>
            </div>
            <div className="flex flex-col items-center lg:items-end justify-center lg:justify-between xl:justify-around bg-white lg:px-10 lg:flex-row lg:min-h-[40rem]">
                <div className='flex flex-col items-center gap-8 bg-white lg:gap-4 xl:gap-8 lg:flex-row'>
                    {
                        newProducts.map((product) => (
                            <ProductCard key={product.id} product={product} size='large' />
                        ))
                    }
                </div>

                <span className="relative flex flex-col items-start w-full h-full px-10 py-20 bg-white lg:justify-end gap-y-64 lg:gap-y-8 xl:px-12 justify-items-center lg:pb-0 lg:px-10 ">
                    <h3 className="z-30 text-3xl font-thin tracking-wider xl:text-4xl w-52 lg:w-80 xl:w-96 font-climate ">Can't wait to hug your ears</h3>
                    <button className='z-30 w-40 h-10 text-sm font-extrabold tracking-widest uppercase border border-black xl:w-44 rounded-3xl bg-mauve'>
                        View more
                    </button>
                    <img
                        className='absolute z-20 object-cover translate-x-32 translate-y-4 max-h-[27rem] lg:max-h-[33rem] lg:translate-x-32  xl:max-h-[40rem] 2xl:max-h-[46rem] lg:-translate-y-8 xl:translate-y-10 xl:translate-x-72 '
                        src="/images/brunette-white-woman-squatting-bg-removed.webp"
                        alt="White brunette woman squatting and looking into camera"
                    />
                </span>
            </div>
        </section>
    )
}
