'use client';
import { useState } from 'react';
import ProductList from './ProductList';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { FaceFrownIcon } from '@heroicons/react/24/outline';

function SearchInputWrapper({ children }) {
    return (
        <div className='flex flex-row items-center justify-center w-full pt-6 pb-4'>
            <div className="relative">
                {children}
            </div>
        </div>
    );
}

function InputIcon({ children }) {
    return (
        <span className="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3">
            {children}
        </span>
    );
}
function ProductListWrapper({ children }) {
    return (
        <section className="flex flex-row flex-wrap justify-between w-full h-full gap-2 p-1.5">
            {children}
        </section>
    );
}

function Input({ handleSearchInput, placeholder }) {
    return (
        <input
            type="search"
            name="search"
            className='block w-full text-xl border rounded-lg ps-10'
            placeholder={placeholder}
            id="default-search"
            onChange={(e) => handleSearchInput(e)}
        />);
}

function NothingFound() {
    return (
        <p className="flex flex-row items-center w-full h-20 gap-6 px-8 py-12 mx-5 mb-8 bg-anti-flash rounded-xl">
            <FaceFrownIcon className="w-16 h-16 text-black" />
            Das Produkt was du suchst haben wir leider nicht
        </p>
    );
}


function ProductGalleryWithSearch({ products }) {
    const [searchInput, setSearchInput] = useState("");

    function handleSearchInput(e) {
        setSearchInput(e.target.value);
    }

    function filterData(products) {
        const data = products.filter((product) => {
            return (
                Object.values(product)
                    .join("")
                    .toLowerCase()
                    .includes(searchInput.toLowerCase())
            )
        });
        return data;
    }

    const filteredProducts = filterData(products);

    return (
        <>
            <SearchInputWrapper>
                <InputIcon>
                    <MagnifyingGlassIcon className="w-6 h-6 text-gray-600" />
                </InputIcon>
                <Input placeholder='Clicker silber...' handleSearchInput={handleSearchInput} />
            </SearchInputWrapper>

            <ProductListWrapper>
                {searchInput ?

                    filteredProducts.length === 0 ?
                        <NothingFound />
                        :
                        <ProductList productList={filteredProducts} />
                    :
                    <ProductList productList={products} />
                }
            </ProductListWrapper>
        </>
    );
}



export default ProductGalleryWithSearch