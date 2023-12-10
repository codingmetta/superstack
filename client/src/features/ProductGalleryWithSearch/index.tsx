'use client';
import { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { filterData } from '../../utils/filterData.js'
import NothingFoundPlaceHolder from './NothingFoundPlaceHolder.js';
import ProductList from './ProductList';
import BannerText from '../../pages/Landing/components/BannerText';

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
function ProductListWrapper({ children }) {
    return (
        <section className="flex flex-row flex-wrap items-center justify-around w-full h-full p-1 lg:justify-evenly 2xl:justify-start 2xl:px-12 2xl:gap-x-10 2xl:gap-y-8 lg:gap-y-10 lg:gap-x-2 gap-y-5 lg:py-10 ">
            {children}
        </section>
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
        <section className='flex flex-col items-center justify-center pt-4 pb-40 lg:px-10 lg:py-20'>
            <BannerText />
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
                {isUserTyping ?
                    doMatchingProductsForQueryExist ?
                        <ProductList productList={filteredProducts} />
                        :
                        <NothingFoundPlaceHolder />
                    :
                    <ProductList productList={products} />
                }
            </ProductListWrapper>
        </section>
    );
}



export default ProductGalleryWithSearch