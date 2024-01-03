import PaymentAccordion from "./PaymentAccordion"

function PaymentSection() {
    return (
        <section className='flex flex-col gap-3 px-5 py-6 bg-white'>
            <h2 className='text-2xl font-semibold'>Zahlung</h2>
            <p className='text-sm text-gray-700 text-md '>Alle Transaktionen sind sicher und verschlüsselt.</p>

            <PaymentAccordion/>

            <h2 className='pt-2 text-lg font-semibold'>Für später speichern</h2>
            <div className="flex flex-row items-center justify-between w-full p-4 border border-gray-200 rounded-md">
                <input type="checkbox" className="p-2 mr-4 border-gray-300 rounded" />
                <p className="text-sm">Meine Daten zum schnelleren Bezahlen speichern</p>
            </div>

        </section>
    )
}

export default PaymentSection