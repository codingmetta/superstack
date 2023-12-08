'use client';
import categories from '../../assets/data/categories.json'
import piercingLocations from '../../assets/data/piercing-locations.json'
import PlaneWrapper from './PlaneWrapper';

function SubNavigationWrapper({ children }) {
    return (
        <div
            className="flex flex-col self-start w-1/3 gap-2 tracking-wider uppercase ">
            {children}
        </div>
    );
}

function SubNavigation({ section, title }) {
    return (
        <>
            <h3 className="text-xl font-black xl:w-44 2xl:w-44">
                {title}
            </h3>
            <ul className="flex flex-col gap-2 ">
                {
                    section.map((navItem) => (
                        <li key={navItem.id}>
                            <a href='#'>{navItem.title}</a>
                        </li>
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
                <SubNavigationWrapper>
                    <SubNavigation section={categories} title="Piercings & Earrings" />
                </SubNavigationWrapper>

                <SubNavigationWrapper>
                    <SubNavigation section={piercingLocations} title="Ear Location" />
                </SubNavigationWrapper>

                <SubNavigationWrapper>
                    <h3 className="text-xl font-black ">
                        Supersets
                    </h3>
                    <ul className="flex flex-col gap-1 ">
                        <li className="text-gray-500" >
                            Coming soon
                        </li>
                    </ul>
                </SubNavigationWrapper>
            </div>
            <figure className='relative w-5/12 overflow-hidden bg-white border border-black rounded-full h-2/3'>
                <img
                    className='object-fill object-center xl:-translate-y-20 2xl:-translate-y-32'
                    src="https://www.superstack.me/cdn/shop/t/1/assets/No%20one%20ever_cuttet.jpg?v=29823939530713551471659083188"
                    alt="White brunette woman with sunglasses"
                />
            </figure>
        </PlaneWrapper>
    );
}

export default ShopPlane
