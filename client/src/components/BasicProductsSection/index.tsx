'use client';
import { useContext } from 'react';
import ProductCard from '../ProductCard/index';
import { ShoppingCartContext } from '../../Context';


export default function BasicProductsSection() {
    const { productCollection } = useContext(ShoppingCartContext)
    const newProducts = productCollection.slice(12, 14);
    return (
        <section className='flex flex-col items-center justify-around gap-8 px-4 py-12 bg-white lg:py-20 lg:gap-4 xl:gap-8 lg:flex-row'>
            {
                newProducts.map((product) => (
                    <ProductCard key={product.id} product={product} size='large' />
                ))
            }
        </section>
    )
}
