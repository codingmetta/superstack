'use client';
import ProductCard from "../../components/ProductCard";

function ProductList({ productList }) {
    return (
        productList.map((product) => (
            <ProductCard key={product.id} product={product} size='medium' />
        ))

    );
}

export default ProductList