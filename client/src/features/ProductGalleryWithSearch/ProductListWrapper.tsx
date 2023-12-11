'use client';
function ProductListWrapper({ children }) {
    return (
        <section className="flex flex-row flex-wrap items-center justify-around w-full h-full p-1 lg:justify-evenly 2xl:justify-start 2xl:px-12 2xl:gap-x-10 2xl:gap-y-8 lg:gap-y-10 lg:gap-x-2 gap-y-5 lg:py-10 ">
            {children}
        </section>
    );
}

export default ProductListWrapper