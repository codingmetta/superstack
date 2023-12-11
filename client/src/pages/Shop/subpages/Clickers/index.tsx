'use client';
import ProductList from "src/features/ProductGalleryWithSearch/ProductList";
import ProductListWrapper from "src/features/ProductGalleryWithSearch/ProductListWrapper";
import { StoreContext } from "src/context/StoreContext";
import { useContext } from "react";
import FilterAndSortSection from "src/pages/Shop/components/FilterAndSortSection";
import MainWrapper from "../../components/MainWrapper";

function Clickers() {
    const { productCollection } = useContext(StoreContext)

    return (
        <MainWrapper>
            <FilterAndSortSection title="Clickers" />
            <ProductListWrapper>
                <ProductList productList={productCollection} />
            </ProductListWrapper>
        </MainWrapper>
    )
}


export default Clickers
