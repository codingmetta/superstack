'use client';
import { nanoid } from 'nanoid';
import { useState, useContext } from 'react';
import Rating from 'src/components/ui/Rating';
import { StoreContext } from 'src/context/StoreContext.js'
import { calculateProductVariantPrice } from 'src/utils/calculate.js'
import { formatRatingToRoundedValue, formatPrice } from 'src/utils/format.js'
import SkeletonCard from './Card/SkeletonCard';
import { AppContext } from 'src/context/AppContext';
import Card from './Card';


function ProductCard({ product, size }) {
    const { isServerRequestPending } = useContext(AppContext)

    const { cart, updateCart, setShowCart } = useContext(StoreContext);
    const [goldSelected, setGoldSelected] = useState(true);
    const [configuratedProduct, setConfiguratedProduct] = useState({
        id: nanoid(),
        image: product.image,
        title: product.title,
        baseprice: product.price[0],
        variantPrice: product.price[0],
        size: product.sizes[0],
        color: product.colors[0],
        variant: product.variant[0],
        cat: product.cat[0],
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
    function handleGiftCardSelection(newPrice) {
        setConfiguratedProduct({
            ...configuratedProduct,
            variantPrice: newPrice
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
        <>
            {
                isServerRequestPending?

                    <SkeletonCard />
                    :
                    <Card size={size}>
                        <Card.Header>
                            <img
                                src={configuratedProduct.image}
                                alt={configuratedProduct.title}
                                className="object-cover w-full h-full cursor-pointer rounded-t-3xl "
                            />
                        </Card.Header>

                        <Card.Body>
                            <Rating rating={ratingClean} />
                            <h3 className="font-semibold line-clamp-2 lg:text-lg ">
                                {configuratedProduct.title}
                            </h3>
                            <p className="pt-1">{priceClean}€</p>
                        </Card.Body>

                        <Card.Footer>
                            {
                                configuratedProduct.color &&
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
                            }
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

                            {
                                configuratedProduct.cat === 'gutschein' &&
                                <select
                                    id="select-giftcard-price"
                                    value={configuratedProduct.variantPrice}
                                    onChange={(e) => handleGiftCardSelection(e.target.value)}
                                    className="p-1 text-sm text-center text-black bg-transparent border border-black rounded-md cursor-pointer "
                                    name="product-giftcard">
                                    {
                                        product.price.map((price, index) => (
                                            <option key={index} value={price}>{price} €</option>
                                        ))
                                    }
                                </select>
                            }



                            {
                                configuratedProduct.variant &&
                                <select
                                    id="select-product-variant"
                                    value={configuratedProduct.variant}
                                    onChange={(e) => handleVariantSelection(e.target.value)}
                                    className="p-1 text-sm text-center bg-transparent border border-black rounded-md cursor-pointer "
                                    name="product-variant">
                                    <option value="single">Single</option>
                                    <option value="pair">Pair</option>
                                </select>
                            }
                            <button
                                id="add-product-to-cart"
                                onClick={handleAddProductToCart}
                                className="h-10 text-sm border border-black rounded-md cursor-pointer bg-limone">
                                Add to cart
                            </button>
                        </Card.Footer>
                    </Card>
            }
        </>
    );
}

export default ProductCard

