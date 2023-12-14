'use client';
import categories from 'src/assets/data/categories.json'
import piercingLocations from 'src/assets/data/piercing-locations.json'
import PlaneWrapper from './PlaneWrapper';
import { Link } from 'react-router-dom';

function SubNavWrapper({ children }) {
    return (
        <div
            className="flex flex-col self-start w-1/3 gap-2 tracking-wider uppercase ">
            {children}
        </div>
    );
}

function SubNav({ section, title }) {
    return (
        <>
            <h3 className="text-xl font-black xl:w-44 2xl:w-44">
                {title}
            </h3>
            <ul className="flex flex-col gap-2 ">
                {
                    section.map((navItem) => (
                        <Link
                            key={navItem.id}
                            to={navItem.url}
                        >
                            {navItem.title}
                        </Link>
                    ))
                }
            </ul>
        </>
    );
}


function ShopPlane() {
    return (
        <PlaneWrapper>
            <div className='flex flex-row justify-between w-7/12 gap-28 '>
                <SubNavWrapper>
                    <SubNav
                        section={categories}
                        title="Piercings & Earrings" />
                </SubNavWrapper>

                <SubNavWrapper>
                    <SubNav
                        section={piercingLocations}
                        title="Ear Location" />
                </SubNavWrapper>

                <SubNavWrapper>
                    <h3 className="text-xl font-black ">
                        Supersets
                    </h3>
                    <ul className="flex flex-col gap-1 ">
                        <li className="text-gray-500" >
                            Coming soon
                        </li>
                    </ul>
                </SubNavWrapper>
            </div>
            <figure className='relative w-5/12 overflow-hidden bg-white border border-black rounded-full h-2/3'>
                <img
                    className='object-fill object-center xl:-translate-y-20 2xl:-translate-y-32'
                    src="/images/woman-sunglass-cutout.webp"
                    alt="White brunette woman with sunglasses"
                />
            </figure>
        </PlaneWrapper>
    );
}

export default ShopPlane