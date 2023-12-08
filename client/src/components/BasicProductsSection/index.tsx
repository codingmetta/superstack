'use client';
import { useContext } from 'react';
import ProductCard from '../ProductCard/index';
import { ShoppingCartContext } from '../../Context';


export default function NewProductsSection() {
    const { productCollection } = useContext(ShoppingCartContext)
    const newProducts = productCollection.slice(8, 10);
    return (
            <section className="flex flex-col items-center lg:items-end justify-center lg:justify-between bg-white  lg:px-10 lg:flex-row lg:min-h-[40rem]">
                <div className='flex flex-col items-center gap-8 bg-white lg:gap-4 xl:gap-8 lg:flex-row'>
                    {
                        newProducts.map((product) => (
                            <ProductCard key={product.id} product={product} size='large' />
                        ))
                    }
                </div>
            </section>
    )
}
