'use client';

function BtnTemplate({ children }) {
    return (
        <button
            type="button"
            className='w-1/2 xl:w-1/6 h-full px-4 py-1.5 text-lg text-black bg-transparent border border-black rounded-lg tracking-wider '
        >
            {children}
        </button>
    )
}


function FilterAndSortSection({ title }) {
    return (
        <section className="flex flex-col justify-around w-full h-full gap-3 px-4 py-4 xl:p-8 xl:gap-5">
            <h2 className="self-start text-2xl xl:text-3xl font-unbounded">
                {title}
            </h2>
            <span className="flex flex-row justify-around w-full gap-3 xl:justify-center flex-nowrap">
                <BtnTemplate>Filter</BtnTemplate>
                <BtnTemplate>Sortieren</BtnTemplate>
            </span>
        </section>
    )
}

export default FilterAndSortSection