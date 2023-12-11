'use client';
import guidesData from 'src/assets/data/guides.json';

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
                    guidesData.map((cat) => (
                        <GuideBtn key={cat.id} title={cat.title} imgURL={cat.imgURL} alt={cat.alt} />
                    ))
                }
            </div>
        </section>
    )
}

export default GuidesTab