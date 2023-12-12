'use client';
import ProductList from "src/features/ProductGalleryWithSearch/ProductList";
import ProductListWrapper from "src/features/ProductGalleryWithSearch/ProductListWrapper";
import { StoreContext } from "src/context/StoreContext";
import { useContext } from "react";
import FilterAndSortSection from "src/pages/Shop/components/FilterAndSortSection";
import MainWrapper from "src/pages/Shop/components/MainWrapper";
import { getByCategory } from 'src/utils/get-piercings.js'

function Earrings() {
    const { productCollection } = useContext(StoreContext)
    const earringsList = getByCategory(productCollection, 'earrings')

    return (
        <MainWrapper>
            <FilterAndSortSection title="Earrings" />
            <ProductListWrapper>
                <ProductList productList={earringsList} />
            </ProductListWrapper>
        </MainWrapper>
    )
}


export default Earrings
