import DeliveryForm from '../DeliveryForm';

function DeliverySection() {
    return (
        <section className='flex flex-col gap-3 px-5 py-6 bg-white'>
            <h2 className='text-2xl font-semibold '>Lieferung</h2>

            <DeliveryForm />

            <h3 className='pt-3 text-lg font-semibold'>Versand</h3>
            <p className='p-4 text-sm text-gray-600 border border-transparent rounded bg-apricot'>Gib deine Lieferadresse ein, um verfügbare Versandarten anzuzeigen.</p>
        </section>
    )
}

export default DeliverySection