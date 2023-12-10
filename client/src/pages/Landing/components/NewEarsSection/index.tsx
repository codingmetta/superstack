'use client';

function NewEarsSection() {
    return (
        <section className='flex flex-col justify-center w-full h-full gap-4 px-6 lg:gap-6 lg:items-center lg:flex-row-reverse py-14 lg:px-10 lg:py-28 bg-mint'>
            <div className='mb-16 flex flex-col lg:translate-y-2 overflow-visible lg:w-7/12 items-center relative w-full h-[98px] lg:h-60  bg-white border border-black rounded-full'>
                <img
                    className='absolute object-contain lg:object-fill -translate-y-28 lg:-translate-y-12 max-h-52  lg:max-h-[18rem] '
                    src="/images/white-brunette-woman-laying-on-stomach-bg-removed.webp"
                    alt="White brunette woman laying on stomach looking dreamy"
                />
            </div>
            <div className='flex flex-col gap-4 lg:gap-5 lg:w-5/12 '>
                <h3 className='pb-4 uppercase font-climate lg:text-lg '>Need some new ears?</h3>
                <p className="pb-4 text-sm border-b border-black lg:w-80 lg:pb-6 font-climate">No problem - we got you!</p>
                <p className="text-base font-semibold">SUPERSTACK zelebriert die Kunst von Ohrpiercings. Unsere Mission ist es, die konventionelle und verstaubte Piercing-Industrie auf den Kopf zu stellen. Lasst uns Piercings zu einer spaßigen Möglichkeit machen, uns selbst auszudrücken, und uns nicht um Stereotypen zu scheren!</p>
                <p className="text-sm uppercase k font-climate ">so stack em' up like you're from tomorrow</p>
            </div>
        </section >
    )
}

export default NewEarsSection