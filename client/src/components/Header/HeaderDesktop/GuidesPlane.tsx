'use client';
import guidesData from 'src/assets/data/guides.json';
import PlaneWrapper from './PlaneWrapper';

function GuideBtn({ title, imgURL, alt }) {
    return (
        <li>
            <button className='flex flex-col items-center justify-center gap-7 '>
                <h3 className="text-xl font-black tracking-wide text-center ">{title}</h3>
                <span className="flex items-center justify-center w-48 h-48 bg-white border border-black rounded-full ">
                    <img className="object-cover w-44 h-44 " src={imgURL} alt={alt} />
                </span>
            </button>
        </li>
    );
}

function GuidesPlane() {
    return (
        <PlaneWrapper>
            <ul className="flex flex-row flex-wrap items-center justify-center gap-20">
                {
                    guidesData.map((cat) => (
                        <GuideBtn key={cat.id} title={cat.title} imgURL={cat.imgURL} alt={cat.alt} />
                    ))
                }
            </ul>
        </PlaneWrapper>
    )
}

export default GuidesPlane