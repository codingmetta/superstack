
'use client';

import { Accordion } from 'flowbite-react';
import categories from '../../assets/data/categories.json'
import piercingLocations from '../../assets/data/piercing-locations.json'


function CategoryBtn({ title, imgURL, alt }) {
    return (
        <button className='flex flex-col w-40 gap-2'>
            <img className="rounded-xl" src={imgURL} alt={alt} />
            <h3>{title}</h3>
        </button>
    );
}

function CategoriesWrapper({ children }) {
    return (
        <section className='flex flex-row flex-wrap items-center justify-around w-full h-full gap-3 p-0 m-0 bg-anti-flash'>
            {children}
        </section>
    );
}


function LocationBtn({ title, imgURL, alt }) {
    return (
        <article className=' w-[6.5rem] p-0 m-0  '>
            <button className='flex flex-col w-full gap-1 p-0 m-0 border-none rounded-2xl'>
                <img className="object-fill rounded-2xl" src={imgURL} alt={alt} />
                <h3 className='text-sm font-light tracking-wider text-start'>{title}</h3>
            </button>
        </article>
    );
}

function LocationsWrapper({ children }) {
    return (
        <section className='flex flex-row flex-wrap items-center justify-start w-full h-full gap-1.5  bg-anti-flash'>
            {children}
        </section>
    );
}


function ShopTab() {

    return (
        <>
            <Accordion className='p-0 bg-anti-flash'>
                <Accordion.Panel className=''>
                    <Accordion.Title className="px-6 py-4 text-lg font-extrabold leading-none tracking-wide text-black focus:ring-0" >Piercings & Earrings </Accordion.Title>
                    <Accordion.Content className="border-0 border-none ">
                        <CategoriesWrapper>

                            {
                                categories.map((cat) => (
                                    <CategoryBtn key={cat.id} title={cat.title} imgURL={cat.imgURL} alt={cat.alt} />
                                ))
                            }

                        </CategoriesWrapper>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title className="px-6 py-4 text-lg font-extrabold tracking-wide text-black focus:ring-0 ">Shop by Ear Location</Accordion.Title>
                    <Accordion.Content className="px-6 py-0 m-0 border-0 border-none">
                        <LocationsWrapper>

                            {
                                piercingLocations.map((cat) => (
                                    <LocationBtn key={cat.id} title={cat.title} imgURL={cat.imgURL} alt={cat.alt} />
                                ))
                            }

                        </LocationsWrapper>
                    </Accordion.Content>
                </Accordion.Panel>
            </Accordion>
            <span className="px-6 py-4 text-lg font-extrabold tracking-wide text-black border-b bg-anti-flash">
                Supersets <span className="text-xs align-top">Coming Soon</span>
            </span>
        </>
    );


}

export default ShopTab;
