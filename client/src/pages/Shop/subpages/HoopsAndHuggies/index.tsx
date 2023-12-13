'use client';
import ProductList from "src/features/ProductGalleryWithSearch/ProductList";
import ProductListWrapper from "src/features/ProductGalleryWithSearch/ProductListWrapper";
import { StoreContext } from "src/context/StoreContext";
import { useContext, useState } from "react";
import FilterAndSortSection from "src/pages/Shop/components/FilterAndSortSection";
import MainWrapper from "src/pages/Shop/components/MainWrapper";
import { getByCategory } from 'src/utils/get-piercings.js'
import { CategoryContext } from "src/context/CategoryContext";


function HoopsAndHuggies() {
    const { productCollection } = useContext(StoreContext)
    const HoopsAndHuggiesList = getByCategory(productCollection, 'hoops-huggies')
    const [categoryProducts, setCategoryProducts] = useState(HoopsAndHuggiesList);

    return (
        <CategoryContext.Provider
            value={{
                categoryProducts, setCategoryProducts
            }} >
            <MainWrapper>
                <FilterAndSortSection
                    title="Hoops & Huggies"
                />
                <ProductListWrapper>
                    <ProductList productList={categoryProducts} />
                </ProductListWrapper>
            </MainWrapper>
        </CategoryContext.Provider>

    )
}


export default HoopsAndHuggies
