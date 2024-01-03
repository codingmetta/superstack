import ItemCard from "./ItemCard";

function CouponInput() {
    return (
        <div className='flex flex-row justify-between w-full h-full'>
            <input
                type="text"
                placeholder="Rabattcode oder Geschenkgutschein"
                className='w-2/3 h-12 text-sm border border-gray-300 rounded-md' />
            <button className='h-12 px-3 text-sm text-gray-600 bg-gray-200 border border-gray-300 rounded-md '>
                Anwenden
            </button>
        </div>
    );
}
function OrderSummary() {
    return (
        <div className='flex flex-col justify-center gap-2 py-5'>
            <span className='flex flex-row items-center justify-between w-full '>
                <h3 className='text-sm'>
                    Zwischensumme</h3>
                <p className='text-sm'>
                    17,90 €
                </p>
            </span>
            <span className='flex flex-row items-center justify-between w-full '>
                <h3 className='text-sm'>
                    Versand
                </h3>
                <p className='text-xs font-light text-gray-500'>
                    Lieferadresse eingeben
                </p>
            </span>
            <span className='flex flex-row items-center justify-between w-full '>
                <span className='flex flex-col '>
                    <h3 className='text-lg'>
                        Summe
                    </h3>
                    <p className='text-xs font-light text-gray-500'>
                        inkl. 2,86 € MwSt
                    </p>
                </span>
                <span className='flex flex-row items-center gap-2'>
                    <p className='text-[13px] text-gray-500 font-extralight '>
                        EUR
                    </p>
                    <p className='text-lg '>17,90 €</p>
                </span>
            </span>
        </div>
    );
}


export default function OrderOverview() {
    return (
        <>
            {/* Should be an ItemCard List */}
            <ItemCard />

            <CouponInput />
            <OrderSummary />
        </>
    );
}