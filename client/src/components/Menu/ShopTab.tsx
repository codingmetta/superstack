
'use client';

import { Accordion } from 'flowbite-react';


const categories = [
    {
        id: 1,
        title: 'Piercings',
        alt: 'Golden Piercing with Diamond',
        imgURL: 'https://www.superstack.me/cdn/shop/t/1/assets/mobile-nav_piercing.png?v=171809007932569534791667923160'
    },
    {
        id: 2,
        title: 'Clickers',
        alt: 'Silver and round Clicker Piercing',
        imgURL: 'https://www.superstack.me/cdn/shop/t/1/assets/mobile-nav_clickers.png?v=1344296430380045031667923111'
    },
    {
        id: 3,
        title: 'Earrings',
        alt: 'Small golden mushroom Earring',
        imgURL: 'https://www.superstack.me/cdn/shop/t/1/assets/mobile-nav_earring.png?v=107850597547783271361667923130'
    },
    {
        id: 4,
        title: 'Hoops & Huggies',
        alt: 'Small golden mushroom Earring',
        imgURL: 'https://www.superstack.me/cdn/shop/t/1/assets/mobile-nav_hoop.png?v=47750557093477745841667923148'
    },
    {
        id: 5,
        title: 'Chains & Dangles',
        alt: 'Small golden mushroom Earring',
        imgURL: 'https://www.superstack.me/cdn/shop/t/1/assets/mobile-nav_chain.png?v=115078131143746112711667923098'
    },
    {
        id: 6,
        title: 'Alle Produkte',
        alt: 'Small golden mushroom Earring',
        imgURL: 'https://www.superstack.me/cdn/shop/t/1/assets/mobile-nav_alle-produkte.png?v=87592387984037700931667923086'
    }
];

const piercingLocations = [
    {
        id: 1,
        title: 'Lobe',
        imgURL: 'https://www.superstack.me/cdn/shop/t/1/assets/Lobe.png?v=92931771102810076421667923267',
        alt: 'Lobe Piercings'
    },
    {
        id: 2,
        title: 'Helix',
        imgURL: 'https://www.superstack.me/cdn/shop/t/1/assets/Helix.png?v=171212225011594618931667923256',
        alt: 'Helix Piercings'
    },
    {
        id: 3,
        title: 'Flat Helix',
        imgURL: 'https://www.superstack.me/cdn/shop/t/1/assets/Flat-Helix.png?v=120051629521107686461667923230',
        alt: 'Flat Helix Piercings'
    }, {
        id: 4,
        title: 'Forward Helix',
        imgURL: 'https://www.superstack.me/cdn/shop/t/1/assets/Forward-Helix.png?v=56883980139936842531667923245',
        alt: 'Forward Helix Piercings'
    }, {
        id: 5,
        title: 'Tragus',
        imgURL: 'https://www.superstack.me/cdn/shop/t/1/assets/Tragus.png?v=64990133857709978371667923297',
        alt: ''
    }, {
        id: 6,
        title: 'Daith',
        imgURL: 'https://www.superstack.me/cdn/shop/t/1/assets/Daith.png?v=128430746254473807331667923217',
        alt: 'Daith Piercings'
    }, {
        id: 7,
        title: 'Rook',
        imgURL: 'https://www.superstack.me/cdn/shop/t/1/assets/Rook.png?v=81067691402742700111667923285',
        alt: 'Rook Piercings'
    }, {
        id: 8,
        title: 'Conch',
        imgURL: 'https://www.superstack.me/cdn/shop/t/1/assets/Conch.png?v=36896981841527356751667923205',
        alt: 'Conch Piercings'
    },
]


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
        <section className='flex flex-row flex-wrap items-center justify-start w-full h-full gap-1.5 p-0 m-0 bg-anti-flash'>
            {children}
        </section>
    );
}


function ShopTab() {

    return (
        <>
            <Accordion className='bg-anti-flash'>
                <Accordion.Panel className=''>
                    <Accordion.Title className="text-lg font-extrabold leading-none tracking-wide text-black focus:ring-0 " >Piercings & Earrings </Accordion.Title>
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
                    <Accordion.Title className="text-lg font-extrabold tracking-wide text-black focus:ring-0 ">Shop by Ear Location</Accordion.Title>
                    <Accordion.Content className="border-0 border-none ">
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
            <span className="p-5 text-lg font-extrabold tracking-wide text-black border-b bg-anti-flash">
                Supersets <span className="text-xs align-top">Coming Soon</span>
            </span>
        </>
    );


}

export default ShopTab;
