'use client';
import { useState } from 'react';
import Card from './Card'


function ProductSearch({ products }) {
    //Definitions
    const [searchInput, setSearchInput] = useState("");

    const filteredData = products.filter((product) => {
        return (
            Object.values(product)
                .join("")
                .toLowerCase()
                .includes(searchInput.toLowerCase())
        )
    });

    return (
        <>
            <div className='flex flex-row items-center justify-center w-full pt-6 pb-4'>
                <div className="relative">
                    <span className="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3">
                        <svg
                            className="w-4 h-4 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20">
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="3" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </span>
                    <input
                        type="search"
                        name="search"
                        className='block w-full text-xl border rounded-lg ps-10'
                        placeholder='Tragus silber ...'
                        id="default-search"
                        onChange={(e) => {
                            setSearchInput(e.target.value);
                        }}
                    />
                </div>
            </div>


            <section className="flex flex-row flex-wrap w-full h-full gap-2 p-1.5">
                
                {searchInput ?

                    filteredData.length === 0 ?

                        <p className="h-40 p-10"> Tut mir leid, dass was du suchst haben wir leider nicht </p> 
                        
                        :
                        
                        filteredData.map((product) => (
                            <Card key={product.id} product={product} />
                        ))

                    :
                    
                    products.map((product) => (
                        <Card key={product.id} product={product} />
                    ))
                }
            </section>
        </>
    );
}

export default ProductSearch