'use client';

function BenefitCard({ imgURL, imgAlt, children }) {
    return (
        <article className='flex flex-col items-center w-40 gap-8 '>
            <img className="object-contain h-32 " src={imgURL} alt={imgAlt} />
            <p className="w-32 text-sm font-bold text-center ">{children}</p>
        </article>

    )
}

function BenefitSection() {
    return (
        <section className='flex flex-row flex-wrap justify-around w-full h-full gap-8 bg-white '>
            <p className='text-xl leading-[1.5rem] text-center tracking-widest uppercase font-climate '>We understood the assigment</p>
            <div className='flex flex-row flex-wrap justify-between w-full h-full gap-8'>
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
            <button className='font-bold uppercase'>View moren</button>
        </section>
    )
}

export default BenefitSection
