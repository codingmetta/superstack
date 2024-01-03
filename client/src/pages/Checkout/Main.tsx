import ExpressCheckoutSection from './components/ExpressCheckoutSection'
import DeliverySection from './components/DeliverySection'
import PaymentSection from './components/PaymentSection'
import OrderViewSection from './components/OrderViewSection'
import OverviewAccordion from './components/OverviewAccordion'
import { CheckoutContext } from 'src/context/CheckoutContext'
import { useState } from 'react'

function Main() {

    const [selectedPanel, setSelectedPanel] = useState('KREDITKARTE')
    const [deliveryDetails, setDeliveryDetails] = useState({})
    
    return (
        <CheckoutContext.Provider
            value={{
                selectedPanel, 
                setSelectedPanel,
                deliveryDetails, 
                setDeliveryDetails
            }}>
            <main className="flex flex-col w-full h-full min-h-screen gap-4 bg-apricot">
                <OverviewAccordion />
                <ExpressCheckoutSection />
                <DeliverySection />
                <PaymentSection />
                <OrderViewSection />
            </main>
        </CheckoutContext.Provider>
    )
}

export default Main