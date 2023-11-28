'use client';
import { useState, useContext } from 'react';
import Rating from './Rating';
import { ShoppingCartContext } from '../Context'

function Card({ product }) {
    const { cart, updateCart, setShowCart } = useContext(ShoppingCartContext);

    const [configuratedProduct, setConfiguratedProduct] = useState({
        id: product.id,
        image: product.image,
        title: product.title,
        price: product.price,
        variantPrice: product.price,
        size: product.sizes[0],
        color: 'gold',
        variant: 'single',
        amount: 1
    });
    const [selectedVariant, setSelectedVariant] = useState('single');
    const [goldSelected, setGoldSelected] = useState(true);

    function handleSizeSelection(newSize) {
        setConfiguratedProduct({
            ...configuratedProduct,
            size: newSize
        });
    }
    function handleVariantSelection(newVariant) {

        const newVariantPrice =  calcVariantPrice(newVariant)

        setSelectedVariant(newVariant);
        setConfiguratedProduct({
            ...configuratedProduct,
            variant: newVariant,
            variantPrice: newVariantPrice
        });
    }

    function handleAddProductToCart() {
        updateCart([
            ...cart,
            configuratedProduct
        ])
        setShowCart(true);
    }

    function handleGoldClicked() {
        setGoldSelected(true);
        setConfiguratedProduct({
            ...configuratedProduct,
            color: 'gold'
        });
    }
    function handleSilverClicked() {
        setGoldSelected(false);
        setConfiguratedProduct({
            ...configuratedProduct,
            color: 'silver'
        });
    }

    function calcVariantPrice(variant){
        let variantPrice = 0;
        if (variant === 'single') {
            variantPrice = configuratedProduct.price;
        } else if (variant === 'pair') {
            variantPrice = configuratedProduct.price * 2;
        }
        return variantPrice;
    }
    
    const optionElements = product.sizes.map((size, index) => {
        return (
            <option key={index} value={size}>{size}</option>
        )
    })

    const ratingLabelCleanedUp = Math.floor(product.rating);
    const priceLabelCleanedUp = configuratedProduct.variantPrice.toFixed(2);
    
    return (
        <article className="flex flex-col items-center justify-around text-sm bg-white border border-black rounded-3xl w-44">
            <section className="w-full">
                <img src={product.image} alt="" className="object-contain w-full h-full border border-transparent cursor-pointer rounded-3xl " />
            </section>
            <section className="w-full h-32 p-3">
                <Rating rating={ratingLabelCleanedUp} />
                <h3 className="font-semibold line-clamp-2 ">{product.title}</h3>
                <p className="pt-1">{priceLabelCleanedUp}€</p>
            </section>

            <section className="w-full h-40 pl-3 pr-3 mb-2">
                <div className="flex flex-col w-full h-full gap-2 ">
                    <div className='flex gap-2 mb-1'>
                        <span
                            onClick={handleGoldClicked}
                            className={`w-6 h-6 bg-yellow-300 rounded-full cursor-pointer ${goldSelected ? "selected" : " "}`}></span>
                        <span
                            onClick={handleSilverClicked}
                            className={`w-6 h-6 bg-gray-400 rounded-full cursor-pointer ${goldSelected ? " " : "selected"}`}></span>
                    </div>

                    <select
                        value={configuratedProduct.size}
                        onChange={e => handleSizeSelection(e.target.value)}
                        className="p-1 text-sm text-center text-black bg-transparent border border-black rounded-md cursor-pointer "
                        name="jewelry-size"
                        id="jewelry-size-select">
                        {optionElements}
                    </select>
                    <select
                        value={selectedVariant}
                        onChange={e => handleVariantSelection(e.target.value)}
                        className="p-1 text-sm text-center bg-transparent border border-black rounded-md cursor-pointer "
                        name="jewelry-variant"
                        id="jewelry-variant-select">
                        <option value="single">Single</option>
                        <option value="pair">Pair</option>
                    </select>
                    <button
                        onClick={handleAddProductToCart}
                        className="h-10 text-sm border border-black rounded-md cursor-pointer bg-limone">
                        Add to cart
                    </button>
                </div>
            </section>

        </article>
    )
}

export default Card