'use client';


function CardAbout() {
    return (
        <div className="relative z-20 flex flex-col justify-around gap-4 px-6 py-5 bg-white border border-black lg:px-8 lg:gap-3 lg:h-1/2 lg:w-5/12 lg:pb-12 min-w-min h-96 rounded-3xl ">
            <h3 className="text-2xl tracking-widest lg:text-3xl font-climate lg:w-1/2" >Das ist Superstack</h3>
            <p className="text-sm font-bold tracking-wider">
                Dein Next-Generation-Piercing-Business.
            </p>
            <p className="text-sm font-bold tracking-wider">
                Mit super coolem, langlebigem und hypoallergenen Piercingschmuck speziell für sensibele Ohren soll deine Wohlfühlexperience rund um das Thema Piercen stattfinden. Wir möchten die konventionelle und düstere Branche aufbrechen, indem ein professioneller, moderner Safe Space für alle Piercinglover kreiert wird.
            </p>
            <button className="absolute self-center whitespace-nowrap w-48 h-10 text-sm font-bold tracking-wider uppercase  border border-black translate-y-[11.725rem] lg:translate-y-[10.925rem] rounded-3xl bg-limone ">Erfahre mehr</button>
        </div>
    );
}

function SuperStackAboutSection() {
    return (
        <section className="relative flex flex-col items-center w-full h-full gap-40 px-4 pt-32 pb-24 overflow-hidden bg-white lg:pb-40 lg:justify-between lg:flex-row">
            <p className="z-20 w-1/3 lg:w-1/6 text-5xl leading-[3.2rem] font-climate">
                you need new ears!
            </p>
            <img
                className='absolute z-10 object-cover translate-x-[7.5rem] -translate-y-20 max-h-[27rem] '
                src="/images/black-blonde-woman-kneeling-bg-removed.webp"
                alt="" />
            <img
                className='absolute z-10 object-cover translate-x-48 translate-y-[48rem] lg:translate-y-80 lg:translate-x-[62rem] max-h-[10rem] rotate-[45deg]'
                src="/images/squishy_eckig_mint.webp"
                alt="decorative squishy form" />
            <img
                className='absolute z-10 object-cover -translate-x-8 -translate-y-[7rem] max-h-[7.5rem] -rotate-[45deg]'
                src="/images/squishy_eckig_mint.webp"
                alt="decorative squishy form" />
            <img
                className='absolute z-10 object-cover translate-x-32 translate-y-52 max-h-[17rem] -rotate-[60deg]'
                src="/images/squishy_long_yellow.webp"
                alt="decorative squishy form" />
            <img
                className='absolute z-10 object-cover -translate-x-24 translate-y-[37.6rem] lg:translate-x-[62rem] lg:-translate-y-32 max-h-[17.5rem] -rotate-[60deg] '
                src="/images/squishy_long_yellow.webp"
                alt="decorative squishy form" />

            <CardAbout />

        </section>
    )
}

export default SuperStackAboutSection