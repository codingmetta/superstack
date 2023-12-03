'use client';

function SuperStackAboutSection() {
    return (
        <section className="relative flex flex-col w-full h-full gap-40 px-4 pt-32 pb-24 overflow-hidden bg-white">
            <p className="z-20 w-1/3 ml-16 text-5xl leading-[3.2rem] font-climate">you need new ears!</p>
            <img
                className='absolute z-10 object-cover translate-x-[7.5rem] -translate-y-20 max-h-[27rem] '
                src="/images/black-blonde-woman-kneeling-bg-removed.webp"
                alt="" />
            <img
                className='absolute z-10 object-cover translate-x-48 translate-y-[48rem] max-h-[10rem] rotate-[45deg]'
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
                className='absolute z-10 object-cover -translate-x-24 translate-y-[37.6rem] max-h-[17.5rem] -rotate-[60deg] '
                src="/images/squishy_long_yellow.webp"
                alt="decorative squishy form" />

            <div className="relative z-20 flex flex-col justify-around gap-4 px-6 py-5 bg-white border border-black rounded-2xl ">
                <h3 className="text-2xl tracking-widest font-climate " >Das ist Superstack</h3>
                <p className="text-sm font-bold tracking-wider">
                    Dein Next-Generation-Piercing-Business.
                </p>
                <p className="text-sm font-bold tracking-wider">
                    Mit super coolem, langlebigem und hypoallergenen Piercingschmuck speziell für sensibele Ohren soll deine Wohlfühlexperience rund um das Thema Piercen stattfinden. Wir möchten die konventionelle und düstere Branche aufbrechen, indem ein professioneller, moderner Safe Space für alle Piercinglover kreiert wird.                </p>
                <button className="absolute h-10 text-sm font-bold tracking-wider uppercase translate-y-[11.6rem] translate-x-14 border border-black rounded-3xl bg-limone w-48 ">Erfahre mehr</button>

            </div>

        </section>
    )
}

export default SuperStackAboutSection