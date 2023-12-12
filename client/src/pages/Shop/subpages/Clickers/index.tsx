'use client';
import ProductList from "src/features/ProductGalleryWithSearch/ProductList";
import ProductListWrapper from "src/features/ProductGalleryWithSearch/ProductListWrapper";
import { StoreContext } from "src/context/StoreContext";
import { useContext } from "react";
import FilterAndSortSection from "src/pages/Shop/components/FilterAndSortSection";
import MainWrapper from "src/pages/Shop/components/MainWrapper";
import { getByCategory } from 'src/utils/get-piercings.js'

function Clickers() {
    const { productCollection } = useContext(StoreContext)
    const clickersList = getByCategory(productCollection, 'clickers')

    return (
        <MainWrapper>
            <FilterAndSortSection title="Clickers" />
            <ProductListWrapper>
                <ProductList productList={clickersList} />
            </ProductListWrapper>
        </MainWrapper>
    )
}


export default Clickers
