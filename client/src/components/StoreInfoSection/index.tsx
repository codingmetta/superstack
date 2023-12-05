'use client';
import CardStoreInfo from "./CardStoreInfo"
import CardStoreFigure from "./CardStoreFigure";

function StoreInfoSection() {
    return (
        <section className="flex flex-col items-center justify-around w-full h-full gap-8 px-4 pt-12 bg-white lg:p-10 lg:gap-12 lg:flex-row lg:py-16 pb-28">
            <CardStoreInfo />
            <CardStoreFigure />
        </section>
    )
}

export default StoreInfoSection