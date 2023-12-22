

import { lazy } from 'react';

const TabStrip = lazy(() => import('./components/TabStrip'))
const Carousel = lazy(() => import('./components/Carousel'))
const SuperStackAboutSection = lazy(() => import('./components/SuperStackAboutSection'))
const BenefitSection = lazy(() => import('./components/BenefitSection'))
const NewProductsSection = lazy(() => import('./components/NewProductsSection'))
const StoreInfoSection = lazy(() => import('./components/StoreInfoSection'))

import NewEarsSection from './components/NewEarsSection'
import BasicProductsSection from './components/BasicProductsSection'
import ProductGallerySection from './components/ProductGallerySection'

function Main() {

    return (
        <main>
            <Carousel />
            <ProductGallerySection />
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
