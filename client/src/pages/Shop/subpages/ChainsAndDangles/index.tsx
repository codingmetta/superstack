'use client';
import ProductList from "src/features/ProductGalleryWithSearch/ProductList";
import ProductListWrapper from "src/features/ProductGalleryWithSearch/ProductListWrapper";
import { StoreContext } from "src/context/StoreContext";
import { useContext } from "react";
import FilterAndSortSection from "src/pages/Shop/components/FilterAndSortSection";
import MainWrapper from "src/pages/Shop/components/MainWrapper";
import { getByCategory } from 'src/utils/get-piercings.js'



function ChainsAndDangles() {
    const { productCollection } = useContext(StoreContext)
    const chainsDanglesList = getByCategory(productCollection, 'chains-dangles')
    
    return (
        <MainWrapper>
            <FilterAndSortSection title="Chains & Dangles" />
            <ProductListWrapper>
                <ProductList productList={chainsDanglesList } />
            </ProductListWrapper>
        </MainWrapper>
    )
}


export default ChainsAndDangles
