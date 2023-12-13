'use client';

function OpeningHours() {
    return (
        <div className="flex flex-col w-full gap-1 xl:gap-2 xl:w-80 ">
            <h3
                className="pb-2 text-base font-black xl:text-xl">Öffnungszeiten</h3>
            <p
                className="flex flex-row justify-between "
            >Mo <span>11:00 - 20:00</span></p>
            <p
                className="flex flex-row justify-between "
            >Di <span>11:00 - 20:00</span></p>
            <p
                className="flex flex-row justify-between "
            >Mi <span>11:00 - 20:00</span></p>
            <p
                className="flex flex-row justify-between "
            >Do <span>11:00 - 20:00</span></p>
            <p
                className="flex flex-row justify-between "
            >Fr <span>11:00 - 20:00</span></p>
            <p
                className="flex flex-row justify-between "
            >Sa <span>11:00 - 20:00</span></p>
            <p
                className="flex flex-row justify-between "
            >So <span>Geschlossen</span></p>
        </div>
    );
}

function Address() {
    return (
        <div className="flex flex-col w-full gap-1 text-sm font-light xl:text-lg">
            <h3 className="pb-2 text-base font-black xl:text-xl">Informationen</h3>
            <p className="">HERE TO STAY!<br /> Apostelnstraße 42,<br /> 50667 Köln<br /></p>
            <a
                className="text-xs font-black underline whitespace-nowrap xl:text-base"
                href="www.google.de"
                target="_blank">In Google Maps öffnen</a>
        </div>);
}
function InfoSubSection() {
    return (
        <div className="flex flex-row justify-between w-full gap-6 text-xs tracking-wider xl:gap-20 xl:text-base">
            <OpeningHours />
            <Address />
        </div>
    )
}

function StoreFigure() {
    return (
        <figure className="h-48 border border-black rounded-xl xl:w-full xl:order-2 xl:row-span-1 xl:col-span-1 xl:h-72">
            <img
                className="object-cover w-full h-full rounded-xl"
                src="/images/piercingstudio.webp"
                alt="Piercingstudio from the inside"
            />
        </figure>
    );
}

function LocationIFrame() {
    return (
        <iframe
            className="w-full h-48 border border-black xl:order-3 rounded-xl xl:w-full xl:row-span-1 xl:col-span-1 xl:h-72"
            src="https://www.openstreetmap.org/export/embed.html?bbox=6.94312334060669%2C50.937301723105975%2C6.947334408760072%2C50.93889898081778&amp;layer=mapnik" >
        </iframe>
    );
}


function StoreDetails() {
    function handleClick() {

    }
    return (
        <section className='flex flex-col justify-between gap-10 pb-6 xl:order-1 xl:row-span-2 xl:col-span-1 xl:pb-20'>
            <h2 className='w-full text-2xl font-black tracking-tight uppercase xl:text-3xl font-unbounded'>
                Köln-Altstadt/ Nord
            </h2>
            <div className='flex flex-row gap-3 text-[0.835rem] items-center flex-nowrap xl:text-lg'>
                <span className='w-4 h-4 border border-black rounded-full bg-limone'></span>
                <p
                    className="flex flex-row items-center justify-between "
                > Geöffnet <span className='w-8 h-px mx-2.5 bg-black'></span> Schließt um 20:00 Uhr</p>
            </div>
            <button
                onClick={handleClick}
                className="px-2 text-md w-44 h-10 xl:w-52 2xl:w-52 py-0.5 xl:text-lg 2xl:text-xl tracking-wider  border border-black rounded-lg bg-mint xl:h-16">
                Termin buchen
            </button>
            <InfoSubSection />
        </section>
    );
}

function StoreInfoSection() {

    return (
        <section className="flex flex-col gap-6 xl:h-full xl:w-full xl:flex-none xl:grid xl:grid-cols-2 xl:grid-flow-row xl:px-12 xl:justify-center xl:gap-6 ">
            <StoreFigure />
            <StoreDetails />
            <LocationIFrame />
        </section>
    )
}

export default StoreInfoSection