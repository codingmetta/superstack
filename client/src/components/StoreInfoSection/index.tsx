'use client';
import CardStoreInfo from "./CardStoreInfo"
import CardStoreFigure from "./CardStoreFigure";

function StoreInfoSection() {
    return (
        <section className="flex flex-col items-center justify-around w-full gap-8 px-4 pt-12 bg-white pb-28">
            <CardStoreInfo />
            <CardStoreFigure />
        </section>
    )
}

export default StoreInfoSection