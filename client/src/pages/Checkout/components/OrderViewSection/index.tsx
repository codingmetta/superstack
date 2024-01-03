import OrderOverview from "../OrderOverview"


function CheckOrderBtn() {
    return (
        <button
            className='w-full text-black border border-transparent rounded-md h-14 bg-lavendel'>
            Bestellung überprüfen
        </button>
    );
}
function OrderOverviewSection() {
    return (
        <section className={`bg-white flex flex-col justify-between w-full min-h-full gap-0.5 px-5 py-5`}>
            <h2 className='text-2xl font-semibold'>Bestellübersicht</h2>
            <OrderOverview />
            <CheckOrderBtn />
        </section>
    )
}

export default OrderOverviewSection