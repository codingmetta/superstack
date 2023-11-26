'use client';
import React from 'react';
import Rating from './Rating';

function Card({ product }) {

    const options = product.sizes;
    const optionElements = options.map((value) => {
        return (
            <option value={value}>{value}</option>
        )
    })

    return (
        <article className="flex flex-col items-center justify-around text-sm bg-white border border-black rounded-3xl w-44">
            <section className="w-full">
                <img src={product.image} alt="" className="object-contain w-full h-full border border-transparent rounded-3xl " />
            </section>
            <section className="w-full h-32 p-3">
                <Rating rating={Math.floor(product.rating)}/>
                <h3 className="font-semibold line-clamp-2 ">{product.title}</h3>
                <p className="pt-1">{product.price.toFixed(2)}€</p>
            </section>

            <section  className="w-full h-40 pl-3 pr-3">
                <form action=""  className="flex flex-col w-full h-full gap-2 ">
                    <fieldset className="flex gap-1 ">
                        <input
                            id="default-radio-gold"
                            type="radio" value="gold"
                            name="default-radio"
                            className="w-6 h-6 text-yellow-300 bg-yellow-300 border-none cursor-pointer hover:ring-black hover:ring-2 focus:ring-black focus:ring-2 active:ring-black active:ring-2"
                            aria-label="Gold" checked />
                        <input
                            id="default-radio-silver"
                            type="radio"
                            value="silver"
                            name="default-radio"
                            className="w-6 h-6 text-gray-400 bg-gray-400 border-none cursor-pointer hover:ring-black hover:ring-2 focus:ring-black focus:ring-2 active:ring-black active:ring-2 "
                            aria-label="Silver" />
                    </fieldset>

                    <select className="p-1 text-sm text-center text-black bg-transparent border border-black rounded-md cursor-pointer " name="jewelry-size" id="jewelry-size-select">
                        {optionElements}
                    </select>
                    <select className="p-1 text-sm text-center bg-transparent border border-black rounded-md cursor-pointer " name="jewelry-variant" id="jewelry-variant-select">
                        <option selected value="single">Single</option>
                        <option value="pair">Pair</option>
                    </select>
                    <button className="h-10 text-sm border border-black rounded-md cursor-pointer bg-limone">Add to cart</button>
                    </form>
            </section>

        </article>
    )
}

export default Card