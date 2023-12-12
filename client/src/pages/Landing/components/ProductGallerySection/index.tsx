
'use client';
import { useContext } from 'react'
import ProductGalleryWithSearch from 'src/features/ProductGalleryWithSearch'
import { StoreContext } from 'src/context/StoreContext';
import BannerText from '../BannerText';

function ProductGallerySection() {
    const { productCollection } = useContext(StoreContext)
    return (
        <section className='flex flex-col items-center justify-center pt-4 pb-40 lg:px-10 lg:py-20'>
            <BannerText />
            <ProductGalleryWithSearch
                products={productCollection.slice(2, 10)}
            />
        </section>
    )
}

export default ProductGallerySection