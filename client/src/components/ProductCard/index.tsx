'use client';
import { nanoid } from 'nanoid';
import { useState, useContext } from 'react';
import Rating from '../ui/Rating';
import { StoreContext } from '../../Context'
import { calculateProductVariantPrice } from '../../utils/helper.js'
import { formatRatingToRoundedValue, formatPrice } from '../../utils/format.js'
import Card from './Card'


function ProductCard({ product, size }) {

    const { cart, updateCart, setShowCart } = useContext(StoreContext);
    const [goldSelected, setGoldSelected] = useState(true);
    const [configuratedProduct, setConfiguratedProduct] = useState({
        id: nanoid(),
        image: product.image,
        title: product.title,
        baseprice: product.price,
        variantPrice: product.price,
        size: product.sizes[0],
        color: 'gold',
        variant: 'single',
        amount: 1
    });
    
    function handleColorSelection(newColor) {
        setGoldSelected(newColor === 'gold' ? true : false);
        setConfiguratedProduct({
            ...configuratedProduct,
            color: newColor
        });
    }

    function handleSizeSelection(newSize) {
        setConfiguratedProduct({
            ...configuratedProduct,
            size: newSize
        });
    }
    
    function handleVariantSelection(newVariant) {
        setConfiguratedProduct({
            ...configuratedProduct,
            variant: newVariant,
            variantPrice: calculateProductVariantPrice(newVariant, configuratedProduct.baseprice)
        });
    }

    function handleAddProductToCart() {
        updateCart([
            ...cart,
            configuratedProduct
        ])
        setShowCart(true);
    }

    const ratingClean = formatRatingToRoundedValue(product.rating)
    const priceClean = formatPrice(configuratedProduct.variantPrice)

    return (
        <Card size={size}>
            <Card.Header>
                <img
                    src={configuratedProduct.image}
                    alt={configuratedProduct.title}
                    className="object-cover w-full h-full border border-transparent cursor-pointer rounded-3xl "
                />
            </Card.Header>

            <Card.Body>
                <Rating rating={ratingClean} />
                <h3 className="font-semibold line-clamp-2 lg:text-lg ">{configuratedProduct.title}</h3>
                <p className="pt-1">{priceClean}€</p>
            </Card.Body>

            <Card.Footer>
                <div
                    id='select-product-color'
                    className='flex gap-2 mb-1'>
                    <span
                        id='gold'
                        onClick={(e) => handleColorSelection(e.currentTarget.id)}
                        className={`w-6 h-6 bg-yellow-300 rounded-full cursor-pointer ${goldSelected ? "selected" : " "}`}></span>
                    <span
                        id='silver'
                        onClick={(e) => handleColorSelection(e.currentTarget.id)}
                        className={`w-6 h-6 bg-gray-400 rounded-full cursor-pointer ${goldSelected ? " " : "selected"}`}></span>
                </div>

                {
                    configuratedProduct.size !== 'onesize' &&
                    <select
                        id="select-product-size"
                        value={configuratedProduct.size}
                        onChange={(e) => handleSizeSelection(e.target.value)}
                        className="p-1 text-sm text-center text-black bg-transparent border border-black rounded-md cursor-pointer "
                        name="product-size">
                        {
                            product.sizes.map((size, index) => (
                                <option key={index} value={size}>{size}</option>
                            ))
                        }
                    </select>
                }

                <select
                    id="select-product-variant"
                    value={configuratedProduct.variant}
                    onChange={(e) => handleVariantSelection(e.target.value)}
                    className="p-1 text-sm text-center bg-transparent border border-black rounded-md cursor-pointer "
                    name="product-variant">
                    <option value="single">Single</option>
                    <option value="pair">Pair</option>
                </select>
                <button
                    id="add-product-to-cart"
                    onClick={handleAddProductToCart}
                    className="h-10 text-sm border border-black rounded-md cursor-pointer bg-limone">
                    Add to cart
                </button>
            </Card.Footer>
        </Card>
    );
}

export default ProductCard

