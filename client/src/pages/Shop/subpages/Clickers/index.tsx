'use client';
import ProductList from "src/features/ProductGalleryWithSearch/ProductList";
import ProductListWrapper from "src/features/ProductGalleryWithSearch/ProductListWrapper";
import { StoreContext } from "src/context/StoreContext";
import { useContext, useState } from "react";
import FilterAndSortSection from "src/pages/Shop/components/FilterAndSortSection";
import MainWrapper from "src/pages/Shop/components/MainWrapper";
import { getByCategory } from 'src/utils/get-piercings.js'
import { CategoryContext } from "src/context/CategoryContext";

function Clickers() {
    const { productCollection } = useContext(StoreContext)
    const clickersList = getByCategory(productCollection, 'clickers')
    const [categoryProducts, setCategoryProducts] = useState(clickersList);

    return (
        <CategoryContext.Provider
            value={{
                categoryProducts, setCategoryProducts
            }} >
            <MainWrapper>
                <FilterAndSortSection
                    title="Clickers"
                />
                <ProductListWrapper>
                    <ProductList productList={categoryProducts} />
                </ProductListWrapper>
            </MainWrapper>
        </CategoryContext.Provider>

    )
}


export default Clickers
