function CheckoutSVG() {
    return (
        <svg
            className=" w-28"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-270.8 371 102 52" >
            <path fill="none"
                stroke="currentColor"
                strokeMiterlimit="10"
                strokeWidth="1"
                d="M-182 404v16.8c0 .7-.4 1.2-1 1.2h-75.7c-.7 0-1.2-.6-1.2-1.2v-47.6c0-.7.6-1.2 1.2-1.2h75.7c.7 0 1 .6 1 1.2V395m-78-14h78m-17 18h27m-3.9-4.6 4.5 4.6-4.5 4.6"></path><circle cx="-255.5" cy="376.5" r="1.5" fill="currentColor"></circle><circle cx="-250.5" cy="376.5" r="1.5" fill="currentColor"></circle><circle cx="-245.5" cy="376.5" r="1.5" fill="currentColor"></circle>
        </svg>
    );
}

function RedirectInfoPanel({ paymentProvider }) {

    return (
        <section className="flex flex-col items-center gap-5">
            <CheckoutSVG />
            {
                paymentProvider === 'Amazon' ?
                    <p className="text-sm text-center">
                        Du wirst gebeten dich bei {paymentProvider} anzumelden.
                    </p>
                    :
                    <p className="text-sm text-center">
                        Nachdem du “Bestellung überprüfen” geklickt hast,
                        wirst du zu {paymentProvider} weitergeleitet,
                        um deinen Einkauf sicher abzuschließen.
                    </p>
            }
        </section>
    )
}

export default RedirectInfoPanel