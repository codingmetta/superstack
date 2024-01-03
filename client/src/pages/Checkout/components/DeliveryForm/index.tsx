import { useState, useContext } from "react";
import MagnifyingGlassIcon from '@heroicons/react/20/solid/esm/MagnifyingGlassIcon';
import { CheckoutContext } from "src/context/CheckoutContext";


/*TODO: Input Validation for PLZ, city, name*/
export default function DeliveryForm() {


    const [showInput, setShowInput] = useState(false);
    const { deliveryDetails, setDeliveryDetails } = useContext(CheckoutContext)
    // const [isValidForm, setIsValidForm] = useState(false);



    // function validate(deliveryDetails) {
    //     if (deliveryDetails.hasAttribute('firstName')) {
    //         setIsValidForm(true);
    //     }
    //     else {
    //         setIsValidForm(false);
    //     }
    // }

    function handleOnClick() {
        setShowInput(prev => !prev)
    }

    function handleFirstNameChanged(e) {
        setDeliveryDetails(
            {
                ...deliveryDetails,
                firstName: e.target.value
            }
        )
    }

    function handleLastNameChanged(e) {
        setDeliveryDetails(
            {
                ...deliveryDetails,
                lastName: e.target.value
            }
        )
    }

    function handleAdressChanged(e) {
        setDeliveryDetails(
            {
                ...deliveryDetails,
                adress: e.target.value
            }
        )
    }

    function handleFloorChanged(e) {
        setDeliveryDetails(
            {
                ...deliveryDetails,
                floor: e.target.value
            }
        )
    }

    function handlePostcodeChanged(e) {
        setDeliveryDetails(
            {
                ...deliveryDetails,
                postcode: e.target.value
            }
        )
    }

    function handleCityChanged(e) {
        setDeliveryDetails(
            {
                ...deliveryDetails,
                city: e.target.value
            }
        )
    }
    function handleCountryChanged(e) {
        setDeliveryDetails(
            {
                ...deliveryDetails,
                country: e.target.value
            }
        )
    }

    console.log(deliveryDetails)
    return (
        <>
            <select
                onChange={(e) => handleCountryChanged(e)}
                value="Deutschland"
                id="country"
                name="country"
                className='h-12 text-sm border border-gray-300 rounded focus:border-footer-mauve' >
                <option value="Deutschland">Deutschland</option>
            </select>

            <input
                onChange={(e) => handleFirstNameChanged(e)}
                id="Firstname"
                type="text"
                className='h-12 text-sm border border-gray-300 rounded focus:border-footer-mauve'
                placeholder='Vorname (optional)' />

            <input
                onChange={(e) => handleLastNameChanged(e)}
                id="Lastname"
                type="text"
                className='h-12 text-sm border border-gray-300 rounded focus:border-footer-mauve'
                placeholder='Nachname' />

            <div className='flex flex-row items-center justify-center w-full'>
                <div className="relative w-full">
                    <input
                        onChange={(e) => handleAdressChanged(e)}
                        id="Adress"
                        type="text"
                        className='block w-full h-12 text-sm border border-gray-300 rounded focus:border-footer-mauve'
                        placeholder='Adresse'
                    />
                    <span className="absolute inset-y-0 flex items-center pr-4 pointer-events-none end-0">
                        <MagnifyingGlassIcon className="w-5 h-5 text-gray-600" />
                    </span>
                </div>
            </div>

            {
                showInput ?
                    <input
                        onChange={(e) => handleFloorChanged(e)}
                        id="floor"
                        type="text"
                        className='h-12 text-sm border border-gray-300 rounded focus:border-footer-mauve'
                        placeholder='Wohnung, Zimmer usw. (optional)' />
                    :
                    <p
                        className='px-2 text-sm text-footer-mauve'
                        onClick={handleOnClick}
                    >
                        + Wohnung, Zimmer usw. hinzufügen
                    </p>

            }

            <input
                onChange={(e) => handlePostcodeChanged(e)}
                id="postcode"
                type="text"
                className='h-12 text-sm border border-gray-300 rounded focus:border-footer-mauve'
                placeholder='Postleitzahl' />
            <input
                onChange={(e) => handleCityChanged(e)}
                id="city"
                type="text"
                className='h-12 text-sm border border-gray-300 rounded focus:border-footer-mauve'
                placeholder='Stadt' />
        </>
    );
}
