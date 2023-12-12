'use client';
import ProductList from "src/features/ProductGalleryWithSearch/ProductList";
import ProductListWrapper from "src/features/ProductGalleryWithSearch/ProductListWrapper";
import { StoreContext } from "src/context/StoreContext";
import { useContext } from "react";
import FilterAndSortSection from "../../components/FilterAndSortSection";
import MainWrapper from "src/pages/Shop/components/MainWrapper";


function AllProducts() {

    const { productCollection } = useContext(StoreContext)

    return (
        <MainWrapper>
            <FilterAndSortSection title="Alle Produkte" />
            <ProductListWrapper>
                <ProductList productList={productCollection} />
            </ProductListWrapper>
        </MainWrapper>
    )
}

export default AllProducts