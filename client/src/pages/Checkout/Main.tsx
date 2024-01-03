import React from 'react'
import ExpressCheckoutSection from './components/ExpressCheckoutSection'
import DeliverySection from './components/DeliverySection'
import PaymentSection from './components/PaymentSection'
import OrderViewSection from './components/OrderViewSection'
function Main() {
    return (
        <main className="flex flex-col w-full h-full min-h-screen gap-4 bg-apricot">
            <ExpressCheckoutSection />
            <DeliverySection />
            <PaymentSection/>
            <OrderViewSection />
        </main>
    )
}

export default Main