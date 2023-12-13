'use client';
import ProductList from "src/features/ProductGalleryWithSearch/ProductList";
import ProductListWrapper from "src/features/ProductGalleryWithSearch/ProductListWrapper";
import { StoreContext } from "src/context/StoreContext";
import { useContext, useState } from "react";
import FilterAndSortSection from "src/pages/Shop/components/FilterAndSortSection";
import MainWrapper from "src/pages/Shop/components/MainWrapper";
import { getByCategory } from 'src/utils/get-piercings.js'
import { CategoryContext } from "src/context/CategoryContext";

function Earrings() {
    const { productCollection } = useContext(StoreContext)
    const earringsList = getByCategory(productCollection, 'earrings')
    const [categoryProducts, setCategoryProducts] = useState(earringsList);

    return (
        <CategoryContext.Provider
            value={{
                categoryProducts, setCategoryProducts
            }} >
            <MainWrapper>
                <FilterAndSortSection title="Earrings" />
                <ProductListWrapper>
                    <ProductList productList={categoryProducts} />
                </ProductListWrapper>
            </MainWrapper>
        </CategoryContext.Provider>
    )
}


export default Earrings
