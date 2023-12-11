'use client';
import { useContext } from 'react';
import ProductCard from 'src/components/ProductCard/index';
import { StoreContext } from 'src/context/StoreContext';


export default function BasicProductsSection() {
    const { productCollection } = useContext(StoreContext)
    const newProducts = productCollection.slice(12, 14);
    return (
        <section className='flex flex-col items-center justify-around gap-8 px-4 py-12 bg-white lg:py-20 lg:gap-4 xl:gap-8 lg:flex-row 2xl:px-10 2xl:max-w-1/2'>
            {
                newProducts.map((product) => (
                    <ProductCard key={product.id} product={product} size='large' />
                ))
            }
        </section>
    )
}
