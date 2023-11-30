'use client';


const guides = [
    {
        id: 1,
        title: 'Piercing Guide',
        imgURL: 'https://www.superstack.me/cdn/shop/t/1/assets/SUPERSTACK_Logo_CHROME-06.png?v=84989003078048534971658436396',
        alt: 'Metallic P Letter'
    },
    {
        id: 2,
        title: 'Care Guide',
        imgURL: 'https://www.superstack.me/cdn/shop/t/1/assets/SUPERSTACK_Logo_CHROME-04.png?v=92526243057158668521658436406',
        alt: 'Metallic C Letter'
    },
    {
        id: 3,
        title: 'Stack Guide',
        imgURL: 'https://www.superstack.me/cdn/shop/t/1/assets/SUPERSTACK_Logo_CHROME-02.png?v=73535193274550876861658436414',
        alt: 'Metallic S Letter'
    },
]

function GuideBtn({ title, imgURL, alt }) {
    return (
        <button className='flex flex-col gap-2 '>
            <span className="w-40 p-2 bg-white rounded-lg">   
                <img className="" src={imgURL} alt={alt} />
            </span>
            <h3 className="text-start">{title}</h3>
        </button>
    );
}

function GuidesTab() {
    return (
        <section className="flex flex-col gap-3 p-4 bg-anti-flash">
            <h2 className="font-extrabold tracking-wider">We got you</h2>
            <div className="flex flex-row flex-wrap justify-between gap-2 ">
                {
                    guides.map((cat) => (
                        <GuideBtn key={cat.id} title={cat.title} imgURL={cat.imgURL} alt={cat.alt} />
                    ))
                }
            </div>
        </section>
    )
}

export default GuidesTab