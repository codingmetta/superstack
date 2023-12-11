'use client';

function BtnTemplate({ children }) {
    return (
        <button
            className='w-full h-full px-4 py-2 text-xl text-black bg-transparent border border-black rounded-lg'
        >
            {children}
        </button>
    )
}


function FilterAndSortSection({ title }) {
    return (
        <div className="flex flex-col justify-around w-full h-full gap-4 px-2 py-4">
            <h2 className="text-3xl font-unbounded">{title}</h2>
            <span className="flex flex-row justify-between w-full flex-nowrap ">
                <BtnTemplate>Filter</BtnTemplate>
                <BtnTemplate>Sortieren</BtnTemplate>
            </span>
        </div>
    )
}

export default FilterAndSortSection