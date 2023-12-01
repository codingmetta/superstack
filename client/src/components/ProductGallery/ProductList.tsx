'use client';
import Card from "./Card";

function ProductList({ productList }) {
    return (
        productList.map((product) => (
            <Card key={product.id} product={product} />
        ))
    );
}

export default ProductList