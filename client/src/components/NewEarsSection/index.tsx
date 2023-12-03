'use client';

function NewEarsSection() {
    return (
        <section className='flex flex-col justify-center w-full gap-4 px-6 py-14 bg-mint'>
            <div className='mb-16 relative w-full h-[98px] overflow-visible bg-white border border-black rounded-full'>
                <img
                    className='absolute object-contain translate-x-9 -translate-y-28 max-h-52'
                    src="/images/white-brunette-woman-laying-on-stomach-bg-removed.webp"
                    alt="White brunette Woman laying on stomach looking dreamy" />
            </div>

            <h3 className='uppercase font-climate '>Need some new ears?</h3>
            <p className="pb-4 text-sm border-b border-black font-climate">No problem - we got you </p>
            <p className="text-base font-semibold">SUPERSTACK zelebriert die Kunst von Ohrpiercings. Unsere Mission ist es, die konventionelle und verstaubte Piercing-Industrie auf den Kopf zu stellen. Lasst uns Piercings zu einer spaßigen Möglichkeit machen, uns selbst auszudrücken, und uns nicht um Stereotypen zu scheren!</p>
            <p className="text-sm uppercase k font-climate ">so stack em' up like you're from tomorrow</p>

        </section>
    )
}

export default NewEarsSection