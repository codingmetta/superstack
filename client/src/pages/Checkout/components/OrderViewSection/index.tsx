import OrderOverview from "../OrderOverview"
import { CheckoutContext } from "src/context/CheckoutContext";
import { useContext } from 'react';
import { SiPaypal } from "react-icons/si";

function RegularCheckoutBtn() {
    return (
        <button
            className='w-full text-black border border-transparent rounded-md h-14 bg-lavendel'>
            Bestellung überprüfen
        </button>
    );
}

function PaypalCheckoutBtn() {
    return (
        <button
            className='flex items-center justify-center w-full gap-3 text-lg font-bold text-white border border-transparent rounded-md h-14 bg-paypal-blue'>
            Pay with 
            <SiPaypal className="w-6 h-6 text-white" />
        </button>
    );
}


function OrderOverviewSection() {
    const { selectedPanel } = useContext(CheckoutContext)

    return (
        <section className={`bg-white flex flex-col justify-between w-full min-h-full gap-0.5 px-5 py-5`}>
            <h2 className='text-2xl font-semibold'>Bestellübersicht</h2>
            <OrderOverview />
            {
                selectedPanel === "PAYPAL" ?

                    <PaypalCheckoutBtn /> 
                    :
                    <RegularCheckoutBtn />
            }
        </section>
    )
}

export default OrderOverviewSection