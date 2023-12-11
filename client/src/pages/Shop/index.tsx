'use client';
import ProductList from "src/features/ProductGalleryWithSearch/ProductList";
import ProductListWrapper from "src/features/ProductGalleryWithSearch/ProductListWrapper";
import { StoreContext } from "src/context/StoreContext";
import { useContext } from "react";
import FilterAndSortSection from "./components/FilterAndSortSection";


function Shop() {

    const { productCollection } = useContext(StoreContext)

    return (
        <main className="flex flex-col w-full px-1.5 ">
            <FilterAndSortSection title="Alle Produkte" />
            <ProductListWrapper>
                <ProductList productList={productCollection} />
            </ProductListWrapper>
        </main>
    )
}

export default Shop