'use client';
import ProductList from "src/features/ProductGalleryWithSearch/ProductList";
import ProductListWrapper from "src/features/ProductGalleryWithSearch/ProductListWrapper";
import { StoreContext } from "src/context/StoreContext";
import { useContext, useState } from "react";
import FilterAndSortSection from "../../components/FilterAndSortSection";
import MainWrapper from "src/pages/Shop/components/MainWrapper";
import { CategoryContext } from "src/context/CategoryContext";
function AllProducts() {

    const { productCollection } = useContext(StoreContext);
    const [categoryProducts, setCategoryProducts] = useState(productCollection.slice())


    return (
        <CategoryContext.Provider
        value={{
            categoryProducts, setCategoryProducts
        }} >
        <MainWrapper>
            <FilterAndSortSection
                title="Alle Produkte"
            />
            <ProductListWrapper>
                <ProductList productList={categoryProducts} />
            </ProductListWrapper>
        </MainWrapper>
        </CategoryContext.Provider>

    )
}

export default AllProducts