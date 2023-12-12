'use client';
import { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { filterData } from 'src/utils/filterData.js'
import NothingFoundPlaceHolder from './NothingFoundPlaceHolder.js';
import ProductList from './ProductList';
import ProductListWrapper from './ProductListWrapper';

function SearchInputWrapper({ children }) {
    return (
        <div className='flex flex-row items-center justify-center w-full 2xl:w-8/12 px-2.5 pt-6 pb-4 lg:pb-8'>
            <div className="relative w-full">
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


function SearchInput({ handleSearchInput, placeholder }) {
    return (
        <input
            type="search"
            name="search"
            className='block w-full text-xl border rounded-lg ps-10 focus:ring-lavendel '
            placeholder={placeholder}
            id="default-search"
            onChange={(e) => handleSearchInput(e)}
        />);
}

function ProductGalleryWithSearch({ products }) {
    const [searchInput, setSearchInput] = useState("");

    function handleSearchInput(e) {
        setSearchInput(e.target.value);
    }

    const filteredProducts = filterData(products, searchInput);

    const isUserTyping = searchInput ? true : false;
    const doMatchingProductsForQueryExist = filteredProducts.length > 0 ? true : false;
    return (
        <>
            <SearchInputWrapper>
                <InputIcon>
                    <MagnifyingGlassIcon className="w-6 h-6 text-gray-600" />
                </InputIcon>
                <SearchInput
                    placeholder='Clicker silber...'
                    handleSearchInput={handleSearchInput}
                />
            </SearchInputWrapper>


            <ProductListWrapper>
                {
                    isUserTyping ?
                        doMatchingProductsForQueryExist ?
                            <ProductList productList={filteredProducts} />
                            :
                            <NothingFoundPlaceHolder />
                        :
                        <ProductList productList={products} />
                }
            </ProductListWrapper>

        </>
    );
}



export default ProductGalleryWithSearch