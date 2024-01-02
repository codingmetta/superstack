import { useState } from 'react';

import MagnifyingGlassIcon from '@heroicons/react/20/solid/esm/MagnifyingGlassIcon'
function DeliverySection() {

    const [showInput, setShowInput] = useState(false);

    // const [deliveryDetails, setDeliveryDetails]= useState({});

    function handleOnClick() {
        setShowInput(prev => !prev)
    }

    return (
        <section className='flex flex-col gap-3 px-5 py-6 bg-white'>
            <h2 className='text-2xl font-semibold '>Lieferung</h2>
            <select name="country"
                className='h-12 border border-gray-400 rounded focus:border-footer-mauve' >
                <option value="DE">Deutschland</option>
            </select>
            <input type="text"
                className='h-12 border border-gray-400 rounded focus:border-footer-mauve'
                placeholder='Vorname (optional)' />
            <input type="text"
                className='h-12 border border-gray-400 rounded focus:border-footer-mauve'
                placeholder='Nachname' />
            <div className='flex flex-row items-center justify-center w-full'>
                <div className="relative w-full">
                    <input
                        type="search"
                        name="search"
                        className='block w-full h-12 border border-gray-400 rounded focus:border-footer-mauve'
                        placeholder='Adresse'
                        id="default-search"
                    />
                    <span className="absolute inset-y-0 flex items-center pr-4 pointer-events-none end-0">
                        <MagnifyingGlassIcon className="w-5 h-5 text-gray-600" />
                    </span>
                </div>
            </div>
            {
                showInput ?
                    <input type="text"
                        className='h-12 border border-gray-400 rounded focus:border-footer-mauve'
                        placeholder='Wohnung, Zimmer usw. (optional)' />
                    :
                    <p
                        className='px-2 text-sm text-footer-mauve'
                        onClick={handleOnClick}
                    >
                        + Wohnung, Zimmer usw. hinzufügen
                    </p>
            }

            <input type="text"
                className='h-12 border border-gray-400 rounded focus:border-footer-mauve'
                placeholder='Postleitzahl' />
            <input type="text"
                className='h-12 border border-gray-400 rounded focus:border-footer-mauve'
                placeholder='Stadt' />

            <h3 className='pt-3 text-lg font-semibold'>Versand</h3>
            <p className='p-4 text-sm text-gray-600 border border-transparent rounded bg-apricot'>Gib deine Lieferadresse ein, um verfügbare Versandarten anzuzeigen.</p>
        </section>
    )
}

export default DeliverySection