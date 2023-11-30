'use client';


const about = [
    {
        id: 1,
        title: 'Our DNA',
        imgURL: 'https://www.superstack.me/cdn/shop/t/1/assets/SUPERSTACK_Logo_CHROME-05.png?v=145962990958481027161658483593',
        alt: 'Metallic Artistic Shape'
    },
    {
        id: 2,
        title: 'Hygiene Concept',
        imgURL: 'https://www.superstack.me/cdn/shop/t/1/assets/SUPERSTACK_Logo_CHROME-03.png?v=62985282536212170071658483604',
        alt: 'Metallic Hair Comb'
    }
]

function GuideBtn({ title, imgURL, alt }) {
    return (
        <button className='flex flex-col gap-2 '>
            <span className="w-full bg-white rounded-lg">
                <img className="object-contain w-40 h-32" src={imgURL} alt={alt} />
            </span>
            <h3 className="text-start">{title}</h3>
        </button>
    );
}

function AboutTab() {
    return (
        <section className="flex flex-col gap-3 p-4 bg-anti-flash">
            <h2 className="font-extrabold tracking-wider">All about us</h2>
            <div className="flex flex-row flex-wrap justify-between gap-2 ">
                {
                    about.map((cat) => (
                        <GuideBtn key={cat.id} title={cat.title} imgURL={cat.imgURL} alt={cat.alt} />
                    ))
                }
            </div>
        </section>
    )
}

export default AboutTab