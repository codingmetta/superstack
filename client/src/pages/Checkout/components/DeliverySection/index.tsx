import DeliveryForm from '../DeliveryForm';
import ShippingInfoPanel from '../ShippingInfoPanel';

function DeliverySection() {
    return (
        <section className='flex flex-col gap-3 px-5 py-6 bg-white'>
            <h2 className='text-2xl font-semibold '>Lieferung</h2>

            <DeliveryForm />

            <h3 className='pt-3 text-lg font-semibold'>Versand</h3>
            <ShippingInfoPanel />
        </section>
    )
}

export default DeliverySection