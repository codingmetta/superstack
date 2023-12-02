import CostumCarousel from '../../features/Carousel'
import Banner from '../../components/Banner'
import SkeletonLoader from '../../features/ProductGalleryWithSearch/SkeletonLoader'
import ProductGalleryWithSearch from '../../features/ProductGalleryWithSearch'
import TabStrip from '../../features/TabStrip'
import BenefitSection from '../../components/BenefitSection'

function Main({isLoading, productCollection}) {
    return (
        <main>
            <CostumCarousel />
            <Banner />

            {isLoading ?
                <SkeletonLoader />
                :

                <ProductGalleryWithSearch 
                    products={productCollection} />

            }
            <TabStrip />
            <BenefitSection />
        </main>
    )
}

export default Main