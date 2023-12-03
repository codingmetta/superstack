import CostumCarousel from '../../features/Carousel'
import SkeletonLoader from '../../features/ProductGalleryWithSearch/SkeletonLoader'
import ProductGalleryWithSearch from '../../features/ProductGalleryWithSearch'
import TabStrip from '../../features/TabStrip'
import BenefitSection from '../../components/BenefitSection'
import StoreInfoSection from '../../components/StoreInfoSection'
import NewEarsSection from '../../components/NewEarsSection'
import HugEarsSection from '../../components/HugEarsSection'
import SuperStackAboutSection from '../../components/SuperStackAboutSection'

function Main({ isLoading, productCollection }) {
    return (
        <main>
            <CostumCarousel />

            {isLoading ?
                <SkeletonLoader />
                :

                <ProductGalleryWithSearch
                    products={productCollection} />

            }
            <StoreInfoSection />
            <NewEarsSection />
            <BenefitSection />
            <HugEarsSection />
            <TabStrip />
            <SuperStackAboutSection/>
        </main>
    )
}

export default Main