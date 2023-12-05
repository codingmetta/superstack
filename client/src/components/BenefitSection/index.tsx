'use client';

function BenefitCard({ imgURL, imgAlt, children }) {
    return (
        <article className='flex flex-col items-center w-40 pb-4 lg:w-48 lg:gap-8 gap-7 '>
            <img className="object-contain lg:w-36" src={imgURL} alt={imgAlt} />
            <p className="w-32 text-sm font-semibold tracking-wide text-center lg:text-base lg:w-full ">{children}</p>
        </article>

    )
}

function BenefitSection() {
    return (
        <section className='flex flex-row lg:flex-col lg:items-center flex-wrap justify-around w-full h-full gap-10 px-2.5 py-10 lg:px-10 bg-white '>
            <p className='p-2 text-lg tracking-widest text-center uppercase w-70 font-climate '>
                We understood the assignment
                </p>
            <div className='flex flex-row flex-wrap justify-between w-full h-full gap-8 lg:gap-2'>
                <BenefitCard imgURL="/images/benefit_1.webp" imgAlt="Metallic Drop" >
                    Hypoallergene Materialien wie Titan, perfekt für sensible Ohren.
                </BenefitCard>
                <BenefitCard imgURL="/images/benefit_2.webp" imgAlt="Metallic Pillows" >
                    Tragekomfort für jeden kurzen Nap oder Beauty Sleep.
                </BenefitCard>
                <BenefitCard imgURL="/images/benefit_3.webp" imgAlt="Metallic Cross" >
                    Hygienische Verpackung um Entzündungen vorzubeugen.
                </BenefitCard>
                <BenefitCard imgURL="/images/benefit_4.webp" imgAlt="Metallic Heart" >
                    Vertrauenswürdige Partner, die auf faire Bedingungen achten.
                </BenefitCard>
            </div>
            <button className='w-40 h-10 text-sm font-extrabold tracking-widest uppercase border border-black rounded-3xl bg-mauve'>View more</button>
        </section>
    )
}

export default BenefitSection
