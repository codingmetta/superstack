'use client';
import { lazy } from 'react';
const ProductCard = lazy(() => import("src/components/ProductCard"));
import { nanoid } from "nanoid";

function ProductList({ productList }) {
    return (
        productList.map((product) => (
            <ProductCard key={nanoid()} product={product} size='medium' />
        ))

    );
}

export default ProductList