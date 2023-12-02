'use client';
import ProductCardSmall from "../../components/ProductCardSmall";

function ProductList({ productList }) {
    return (
        productList.map((product) => (
            <ProductCardSmall key={product.id} product={product} />
        ))
    );
}

export default ProductList