'use client';
import { sortByPriceAsc, sortByPriceDesc, sortByAlphabeticalOrder, sortByReverseAlphabeticalOrder } from 'src/utils/sort/map-sort.js'
import { CategoryContext } from "src/context/CategoryContext";
import { useContext } from 'react';
import { Dropdown } from 'flowbite-react';

function BtnFilter({ children }) {
    return (
        <button
            disabled
            type="button"
            className='w-1/2 sm:w-4/12 md:w-3/12 xl:w-3/12 2xl:w-1/6 h-full px-4 py-1.5 text-lg text-gray-400 bg-transparent border border-gray-400 rounded-lg tracking-wider '
        >
            {children}
        </button>
    )
}

function BtnSort({ children }) {
    const { categoryProducts, setCategoryProducts } = useContext(CategoryContext);

    function handleSortDesc() {
        setCategoryProducts(sortByPriceDesc(categoryProducts));
    }

    function handleSortAscend() {
        setCategoryProducts(sortByPriceAsc(categoryProducts));
    }

    function handleSortAlpha() {
        setCategoryProducts(sortByAlphabeticalOrder(categoryProducts));
    }

    function handleSortAlphaReverse() {
        setCategoryProducts(sortByReverseAlphabeticalOrder(categoryProducts));
    }

    return (
        <Dropdown
        inline
            label=""
            dismissOnClick={false}
            renderTrigger={() =>
                <span
                    className='w-1/2 sm:w-4/12 md:w-3/12 xl:w-3/12 2xl:w-1/6 h-full text-center px-4 py-1.5 text-lg text-black bg-transparent border border-black rounded-lg tracking-wider '
                >
                    {children}
                </span>}
        >
            <Dropdown.Item
                className=' lg:px-12 xl:px-16 2xl:px-12'
                onClick={handleSortAscend}>
                Preis, niedrig zu hoch
            </Dropdown.Item>
            <Dropdown.Item
                className='lg:px-12 xl:px-16 2xl:px-12'
                onClick={handleSortDesc}>
                Preis, hoch zu niedrig
            </Dropdown.Item>
            <Dropdown.Item
                className=' lg:px-12 xl:px-16 2xl:px-12'
                onClick={handleSortAlpha}>
                Alphabetisch, A-Z
            </Dropdown.Item>
            <Dropdown.Item
                className=' lg:px-12 xl:px-16 2xl:px-12'
                onClick={handleSortAlphaReverse}>
                Alphabetisch, Z-A
            </Dropdown.Item>
        </Dropdown>

    )
}


function FilterAndSortSection({ title }) {

    return (

        <section className="flex flex-col justify-around w-full h-full gap-3 px-4 py-4 xl:p-8 xl:gap-5">
            <h2 className="self-start text-2xl xl:text-3xl font-unbounded">
                {title}
            </h2>
            <span className="flex flex-row justify-around w-full gap-3 sm:justify-center flex-nowrap">
                <BtnFilter>Filter</BtnFilter>
                <BtnSort>Sortieren</BtnSort>
            </span>
        </section>
    )
}

export default FilterAndSortSection