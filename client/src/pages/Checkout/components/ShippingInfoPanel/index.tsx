import { CheckoutContext } from "src/context/CheckoutContext"
import { useContext } from "react"



function ShippingInfoPanel() {

    const { isValidForm } = useContext(CheckoutContext)

    //Lieferzeitraum berechnen
    return (
        <>
            {isValidForm ?

                <section className='flex flex-col p-4 border rounded border-lavendel bg-lavendel/20'>
                    <span className='flex justify-between w-full text-sm '>
                        <h4>Standard</h4>
                        <p>2.80 €</p>
                    </span>

                    <p className='text-sm text-gray-500'>
                        Voraussichtliche Zustellung: <br />
                        Mittwoch, 10. Jan – Freitag, 12. Jan
                    </p>
                </section>
                :


                <p className='p-4 text-sm text-gray-600 border border-transparent rounded bg-apricot'>
                    Gib deine Lieferadresse ein, um verfügbare Versandarten anzuzeigen.
                </p>


            }


        </>
    )
}

export default ShippingInfoPanel