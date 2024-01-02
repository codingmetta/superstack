import PaymentAccordion from "./PaymentAccordion"

function PaymentSection() {
    return (
        <section className='flex flex-col gap-3 px-5 py-6 bg-white'>
            <h2 className='text-2xl font-semibold'>Zahlung</h2>
            <p className='text-sm text-gray-700 text-md '>Alle Transaktionen sind sicher und verschlüsselt.</p>

            <PaymentAccordion/>
        </section>
    )
}

export default PaymentSection