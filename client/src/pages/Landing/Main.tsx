import CostumCarousel from '../../features/Carousel'
import SkeletonLoader from '../../features/ProductGalleryWithSearch/SkeletonLoader'
import ProductGalleryWithSearch from '../../features/ProductGalleryWithSearch'
import TabStrip from '../../features/TabStrip'
import BenefitSection from '../../components/BenefitSection'
import StoreInfoSection from '../../components/StoreInfoSection'
import NewEarsSection from '../../components/NewEarsSection'
import NewProductsSection from '../../components/NewProductsSection'
import SuperStackAboutSection from '../../components/SuperStackAboutSection'
import BasicProductsSection from '../../components/BasicProductsSection'

function Main({ isLoading, productCollection }) {
    return (
        <main>
            <CostumCarousel />

            {isLoading ?
                <SkeletonLoader />
                :

                <ProductGalleryWithSearch
                    products={productCollection.slice(0, 8)} />

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