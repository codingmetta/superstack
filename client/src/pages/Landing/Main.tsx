import TabStrip from './components/TabStrip'
import BenefitSection from './components/BenefitSection'
import StoreInfoSection from './components/StoreInfoSection'
import NewEarsSection from './components/NewEarsSection'
import NewProductsSection from './components/NewProductsSection'
import SuperStackAboutSection from './components/SuperStackAboutSection'
import BasicProductsSection from './components/BasicProductsSection'
import Carousel from './components/Carousel'
import ProductGallerySection from './components/ProductGallerySection'
function Main() {

    return (
        <main>
            <Carousel />
            <ProductGallerySection/>
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
