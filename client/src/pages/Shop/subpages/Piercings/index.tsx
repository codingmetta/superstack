'use client';
import ProductList from "src/features/ProductGalleryWithSearch/ProductList";
import ProductListWrapper from "src/features/ProductGalleryWithSearch/ProductListWrapper";
import { StoreContext } from "src/context/StoreContext";
import { useContext } from "react";
import FilterAndSortSection from "src/pages/Shop/components/FilterAndSortSection";
import MainWrapper from "src/pages/Shop/components/MainWrapper";
import { getByCategory } from 'src/utils/get-piercings.js'

function Piercings() {
    const { productCollection } = useContext(StoreContext)
    const piercingsList = getByCategory(productCollection, 'piercings')

    return (
        <MainWrapper>
            <FilterAndSortSection title="Piercings" />
            <ProductListWrapper>
                <ProductList productList={piercingsList} />
            </ProductListWrapper>
        </MainWrapper>
    )
}


export default Piercings
