'use client';
import ProductList from "src/features/ProductGalleryWithSearch/ProductList";
import ProductListWrapper from "src/features/ProductGalleryWithSearch/ProductListWrapper";
import { StoreContext } from "src/context/StoreContext";
import { useContext, useState } from "react";
import FilterAndSortSection from "src/pages/Shop/components/FilterAndSortSection";
import MainWrapper from "src/pages/Shop/components/MainWrapper";
import { getByCategory } from 'src/utils/get-piercings.js'
import { CategoryContext } from "src/context/CategoryContext";



function ChainsAndDangles() {
    const { productCollection } = useContext(StoreContext)
    const chainsDanglesList = getByCategory(productCollection, 'chains-dangles')
    const [categoryProducts, setCategoryProducts] = useState(chainsDanglesList.slice())

    return (
        <CategoryContext.Provider
            value={{
                categoryProducts, setCategoryProducts
            }} >
            <MainWrapper>
                <FilterAndSortSection title="Chains & Dangles" />
                <ProductListWrapper>
                    <ProductList productList={chainsDanglesList} />
                </ProductListWrapper>
            </MainWrapper>
        </CategoryContext.Provider>

    )
}


export default ChainsAndDangles
