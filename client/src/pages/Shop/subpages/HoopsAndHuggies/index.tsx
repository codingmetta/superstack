'use client';
import ProductList from "src/features/ProductGalleryWithSearch/ProductList";
import ProductListWrapper from "src/features/ProductGalleryWithSearch/ProductListWrapper";
import { StoreContext } from "src/context/StoreContext";
import { useContext } from "react";
import FilterAndSortSection from "src/pages/Shop/components/FilterAndSortSection";
import MainWrapper from "src/pages/Shop/components/MainWrapper";
import { getByCategory } from 'src/utils/get-piercings.js'


function HoopsAndHuggies() {
    const { productCollection } = useContext(StoreContext)
    const HoopsAndHuggiesList = getByCategory(productCollection, 'hoops-huggies')
    
    return (
        <MainWrapper>
            <FilterAndSortSection title="Hoops & Huggies" />
            <ProductListWrapper>
                <ProductList productList={HoopsAndHuggiesList} />
            </ProductListWrapper>
        </MainWrapper>
    )
}


export default HoopsAndHuggies
