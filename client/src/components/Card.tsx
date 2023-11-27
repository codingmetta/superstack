'use client';
import React, { useState, useRef } from 'react';
import Rating from './Rating';

function Card({ product }) {
    const colorRef = useRef(null);

    const defaultConfigProduct = {
        title: product.title ,
        price: product.price,
        size: '4mm',
        color: 'gold'
    }
    const [configuratedProduct, setConfiguratedProduct] = useState(defaultConfigProduct);
    const [isSingle, setIsSingle] = useState(true);
    const [goldSelected, setGoldSelected] = useState(true);
    const [selectedSize, setSelectedSize] = useState();

   

    const options = product.sizes;
    const optionElements = options.map((value) => {
        return (
            <option value={value}>{value}</option>
        )
    })
    function handleClick(e) {
        e.preventDefault();
        console.log(product);
    }

    function handleGoldSelection(){
        setGoldSelected(true);
    }
    function handleSilverSelection(){
        setGoldSelected(false);
    }

    return (
        <article className="flex flex-col items-center justify-around text-sm bg-white border border-black rounded-3xl w-44">
            <section className="w-full">
                <img src={product.image} alt="" className="object-contain w-full h-full border border-transparent cursor-pointer rounded-3xl " />
            </section>
            <section className="w-full h-32 p-3">
                <Rating rating={Math.floor(product.rating)} />
                <h3 className="font-semibold line-clamp-2 ">{product.title}</h3>
                <p className="pt-1">{product.price.toFixed(2)}€</p>
            </section>

            <section className="w-full h-40 pl-3 pr-3">
                <div className="flex flex-col w-full h-full gap-2 ">
                    <div className='flex gap-2'> 
                         <span
                            onClick={handleGoldSelection} 
                            className={`w-6 h-6 bg-yellow-300 rounded-full cursor-pointer ${goldSelected ? "selected" : " "}`}></span>
                         <span
                            onClick={handleSilverSelection} 
                            className={`w-6 h-6 bg-gray-400 rounded-full cursor-pointer ${goldSelected ? " " : "selected"}`}></span>
                    </div>

                    <select className="p-1 text-sm text-center text-black bg-transparent border border-black rounded-md cursor-pointer " name="jewelry-size" id="jewelry-size-select">
                        {optionElements}
                    </select>
                    <select className="p-1 text-sm text-center bg-transparent border border-black rounded-md cursor-pointer " name="jewelry-variant" id="jewelry-variant-select">
                        <option selected value="single">Single</option>
                        <option value="pair">Pair</option>
                    </select>
                    <button
                        onClick={handleClick}
                        className="h-10 text-sm border border-black rounded-md cursor-pointer bg-limone">
                        Add to cart
                    </button>
                </div>
            </section>

        </article>
    )
}

export default Card