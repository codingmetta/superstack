'use client';

export default function HugEarsSection() {
    return (
        <section className="relative flex flex-col items-center w-full h-full gap-64 px-10 py-20 bg-white">
            <h3 className="z-30 text-3xl font-light tracking-wider w-52 font-climate">Can't wait to hug your ears</h3>
            <img
                className='absolute z-20 object-cover translate-x-28 translate-y-4 max-h-[27rem] '
                src="/images/brunette-white-woman-squatting-bg-removed.webp"
                alt="White brunette woman squatting and looking into camera"
            />
            <button className='w-40 h-10 text-sm font-extrabold tracking-widest uppercase border border-black rounded-3xl bg-mauve'>View more</button>

        </section>
    )
}
