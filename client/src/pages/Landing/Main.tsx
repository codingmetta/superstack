import { useContext } from 'react'
import { AppContext } from 'src/context/AppContext'
import { StoreContext } from 'src/context/StoreContext'

import SkeletonLoader from 'src/features/ProductGalleryWithSearch/SkeletonLoader'
import ProductGalleryWithSearch from 'src/features/ProductGalleryWithSearch'

import TabStrip from './components/TabStrip'
import BenefitSection from './components/BenefitSection'
import StoreInfoSection from './components/StoreInfoSection'
import NewEarsSection from './components/NewEarsSection'
import NewProductsSection from './components/NewProductsSection'
import SuperStackAboutSection from './components/SuperStackAboutSection'
import BasicProductsSection from './components/BasicProductsSection'
import Carousel from './components/Carousel'


function Main() {
    const { productCollection } = useContext(StoreContext)
    const { isLoading } = useContext(AppContext)

    return (
        <main>
            <Carousel />
            {
                isLoading ?

                    <SkeletonLoader />

                    :

                    <ProductGalleryWithSearch
                        products={productCollection.slice(0, 8)}
                    />
            }

            <StoreInfoSection />
            <NewEarsSection />
            <BenefitSection />
            <NewProductsSection />
            <div className='flex flex-col items-center justify-center w-full h-full bg-white 2xl:flex-row'>
                <TabStrip />
                <BasicProductsSection />
            </div>
            <SuperStackAboutSection />
        </main>
    )
}

export default Main