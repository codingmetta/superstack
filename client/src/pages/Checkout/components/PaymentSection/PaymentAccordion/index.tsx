import { Accordion } from 'flowbite-react';
import { customAccordionTheme } from './CusAccordionTheme';
import { useState, useContext } from 'react';
import { SiVisa, SiKlarna } from 'react-icons/si';
import DeliveryForm from '../../DeliveryForm';
import { LuLock } from "react-icons/lu";
import { IoHelpCircleOutline } from "react-icons/io5";
import { CheckoutContext } from 'src/context/CheckoutContext';
import RedirectInfoPanel from '../../RedirectInfoPanel';

function LogoWrapper({ children }) {
    return (
        <div className="flex items-center justify-center w-10 h-6 overflow-hidden bg-white border border-gray-300 rounded">
            {children}
        </div>
    );
}

function TitleWrapper({ children, currentPanel, handleClick }) {
    return (
        <div
            className='absolute z-20 flex flex-row items-center justify-between w-full h-16 px-8 -translate-x-10 -translate-y-8 border border-transparent rounded-lg'
            onClick={() => handleClick(currentPanel)}
        >
            {children}
        </div>
    );
}

function PaymentDetailsForm() {
    return (
        <section className='flex flex-col gap-3'>
            <span className='relative flex flex-row items-center justify-center w-full'>
                <input
                    type="text"
                    className='block w-full h-12 text-sm border border-gray-300 rounded focus:border-footer-mauve'
                    placeholder='Kartennummer'
                />
                <span className="absolute inset-y-0 flex items-center pr-4 pointer-events-none end-0">
                    <LuLock className="w-5 h-4 text-gray-500" />
                </span>
            </span>

            <input
                type="text"
                className='block w-full h-12 text-sm border border-gray-300 rounded focus:border-footer-mauve'
                placeholder='Gültig bis (MM/JJ)'
            />

            <span className='relative flex flex-row items-center justify-center w-full'>
                <input
                    type="text"
                    className='block w-full h-12 text-sm border border-gray-300 rounded focus:border-footer-mauve'
                    placeholder='Kartennummer'
                />
                <span className="absolute inset-y-0 flex items-center pr-4 pointer-events-none end-0">
                    <IoHelpCircleOutline className="w-5 h-5 text-gray-500" />
                </span>
            </span>

            <input
                type="text"
                className='block w-full h-12 text-sm border border-gray-300 rounded focus:border-footer-mauve'
                placeholder='Name des Karteninhabers'
            />

        </section>
    );

}

function PaymentAccordion() {

    const { selectedPanel, setSelectedPanel } = useContext(CheckoutContext)
    const [adressIsIdentical, setAdressIsIdentical] = useState(false);

    function handleClick(panel) {
        setSelectedPanel(panel)
    }

    function handleSameAdressSelected() {
        setAdressIsIdentical(prev => !prev)
    }
    return (

        <Accordion
            theme={customAccordionTheme}
        >
            <Accordion.Panel>
                <Accordion.Title>
                    <TitleWrapper handleClick={handleClick} currentPanel={'KREDITKARTE'}>
                        <div className='flex flex-row gap-2 '>
                            <span
                                className={`w-5 h-5  rounded-full  ${selectedPanel === 'KREDITKARTE' ? ' border-footer-mauve bg-black border-[0.45rem]' : 'border border-gray-300'}`}>
                            </span>
                            <h3 className='text-sm'>Kreditkarte</h3>
                        </div>

                        <div className='flex flex-row gap-1 '>
                            <LogoWrapper>
                                <SiVisa />
                            </LogoWrapper>
                            <LogoWrapper>
                                <img
                                    className="object-scale-down w-full max-h-4"
                                    src="https://upload.wikimedia.org/wikipedia/commons/8/80/Maestro_2016.svg"
                                    alt="Maestro Logo"
                                />
                            </LogoWrapper>
                            <LogoWrapper>
                                <img
                                    className="object-scale-down w-full max-h-4"
                                    src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg "
                                    alt="Mastercard Logo"
                                />
                            </LogoWrapper>

                            <LogoWrapper>
                                <span className='w-full h-full text-sm text-center bg-black text-footer-mauve'>
                                    +2
                                </span>
                            </LogoWrapper>
                        </div>
                    </TitleWrapper>
                </Accordion.Title>
                <Accordion.Content>
                    <div className='flex flex-col w-full h-full gap-5'>

                        <PaymentDetailsForm />

                        <span className='flex justify-between w-full gap-3 '>
                            <input
                                onChange={handleSameAdressSelected}
                                type="checkbox"
                                className='border-gray-300 rounded accent-pink-500 '
                            />
                            <p className='text-sm text-gray-700'>Lieferadresse als Rechnungsadresse verwenden</p>
                        </span>


                        {
                            !adressIsIdentical &&

                            <div className='flex flex-col gap-3'>
                                <h3 className='text-lg font-semibold'>Rechnungsadresse</h3>
                                <DeliveryForm />
                            </div>

                        }
                    </div>

                </Accordion.Content>
            </Accordion.Panel>

            <Accordion.Panel>
                <Accordion.Title>
                    <TitleWrapper handleClick={handleClick} currentPanel={'PAYPAL'}>
                        <div className='flex flex-row gap-2'>
                            <span
                                className={`w-5 h-5  rounded-full  ${selectedPanel === 'PAYPAL' ? ' border-footer-mauve bg-black border-[0.45rem]' : 'border border-gray-300'}`}>
                            </span>
                            <h3 className='text-sm'>PayPal</h3>
                        </div>
                        <div className='flex flex-row bg-white'>
                            <img
                                className="object-scale-down w-full max-h-6"
                                src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                                alt="Paypal Logo"
                            />
                        </div>
                    </TitleWrapper>
                </Accordion.Title>
            </Accordion.Panel>

            <Accordion.Panel>
                <Accordion.Title>
                    <TitleWrapper handleClick={handleClick} currentPanel={'AMAZON'}>

                        <div className='flex flex-row gap-2'>
                            <span
                                className={`w-5 h-5  rounded-full  ${selectedPanel === 'AMAZON' ? ' border-footer-mauve bg-black border-[0.45rem]' : 'border border-gray-300'}`}>
                            </span>
                            <h3 className='text-sm'>Amazon Pay</h3>
                        </div>
                        <div className='flex flex-row bg-white'>
                            <img
                                className="object-scale-down w-full max-h-[1.1rem]"
                                src="https://upload.wikimedia.org/wikipedia/commons/2/29/Amazon_Pay_logo.svg
                                "
                                alt="Amazon Pay Logo"
                            />
                        </div>
                    </TitleWrapper>
                </Accordion.Title>
                <Accordion.Content>
                <RedirectInfoPanel paymentProvider='Amazon' />
                </Accordion.Content>
            </Accordion.Panel>

            <Accordion.Panel>
                <Accordion.Title>
                    <TitleWrapper handleClick={handleClick} currentPanel={'KLARNA'}>

                        <div className='flex flex-row gap-2'>
                            <span
                                className={`w-5 h-5  rounded-full  ${selectedPanel === 'KLARNA' ? ' border-footer-mauve bg-black border-[0.45rem]' : 'border border-gray-300'}`}>
                            </span>
                            <h3 className='text-sm'> Rechnung mit Klarna</h3>
                        </div>
                        <div className='flex flex-row bg-white'>
                            <div className="flex items-center justify-center w-10 h-6 overflow-hidden bg-[#ffb3c7] border-transparent rounded">
                                <SiKlarna className="w-8" />
                            </div>
                        </div>
                    </TitleWrapper>
                </Accordion.Title>
                <Accordion.Content>
                <RedirectInfoPanel paymentProvider='Klarna' />
                </Accordion.Content>
            </Accordion.Panel>

            <Accordion.Panel>
                <Accordion.Title>
                    <TitleWrapper handleClick={handleClick} currentPanel={'SOFORT'}>
                        <div className='flex flex-row gap-2'>
                            <span
                                className={`w-5 h-5  rounded-full  ${selectedPanel === 'SOFORT' ? ' border-footer-mauve bg-black border-[0.45rem]' : 'border border-gray-300'}`}>
                            </span>
                            <h3 className='text-sm'>Sofortüberweisung</h3>
                        </div>
                        <div className='flex flex-row bg-white'>
                            <div className="flex items-center justify-center w-12 h-6 overflow-hidden bg-white border border-transparent rounded">
                                <img
                                    className="object-scale-down w-full max-h-5"
                                    src="https://upload.wikimedia.org/wikipedia/commons/1/11/Sofort-klarna-logo.svg "
                                    alt="Sofort Überweisung Logo"
                                />
                            </div>
                        </div>

                    </TitleWrapper>

                </Accordion.Title>
                <Accordion.Content>
                <RedirectInfoPanel paymentProvider='Sofortüberweisung' />
                </Accordion.Content>
            </Accordion.Panel>

            <Accordion.Panel>
                <Accordion.Title>
                    <TitleWrapper handleClick={handleClick} currentPanel={'GIRO'}>

                        <div className='flex flex-row gap-2'>
                            <span
                                className={`w-5 h-5  rounded-full  ${selectedPanel === 'GIRO' ? ' border-footer-mauve bg-black border-[0.45rem]' : 'border border-gray-300'}`}>
                            </span>
                            <h3 className='text-sm'>Giropay</h3>
                        </div>
                        <div className='flex flex-row bg-white'>
                            <div className="flex items-center justify-center w-12 overflow-hidden bg-white border-transparent rounded">
                                <img
                                    className="object-scale-down w-full max-h-6"
                                    src="https://upload.wikimedia.org/wikipedia/commons/8/87/Giropay.svg"
                                    alt="Giropay Logo"
                                />
                            </div>
                        </div>
                    </TitleWrapper>

                </Accordion.Title>
                <Accordion.Content>
                    <RedirectInfoPanel paymentProvider='Giropay' />
                </Accordion.Content>
            </Accordion.Panel>

        </Accordion >
    );
}


export default PaymentAccordion