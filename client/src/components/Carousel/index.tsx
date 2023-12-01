'use client';
import { Carousel } from 'flowbite-react';


function CarouselBanner({ children }) {
    return (
        <div className='flex flex-row items-center justify-center p-2 mt-20 text-xl font-extrabold text-center text-white uppercase border border-white w-86 text-align rounded-3xl backdrop-blur-xl font-unbounded'>
            {children}
            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 overflow-hidden -translate-y-16">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
            </svg>
        </div>
    )
}
function CarouselBody({ children, pos }) {
    return (
        <div className={`flex flex-col min-h-screen p-8 items-center justify-between bg-gray-400 dark:bg-gray-700 dark:text-white banner-${pos}`}>
            {children}
        </div>
    );
}

function CarouselWrapper({ children }) {
    return (
        <div className="h-full sm:h-64 xl:h-80 2xl:h-96">
            {children}
        </div>
    );
}


function CostumCarousel() {
    return (
        <Carousel slide={false} leftControl=" " rightControl=" ">
            <CarouselBody pos={'1'} >
                <CarouselBanner>
                    Say Hello to your future ear piercings
                </CarouselBanner>
                <div className='flex flex-col justify-center w-56 gap-4 pb-4'>
                    <button className='text-xl tracking-wide border border-black cursor-pointer rounded-xl h-14 bg-mint'>Termin buchen</button>
                    <button className='text-xl tracking-wide bg-white border border-black cursor-pointer rounded-xl h-14'>Shop Jewelry</button>
                </div>
            </CarouselBody>
            <CarouselBody pos={'2'} >
                <CarouselBanner>
                    Hypoallergene Piercings speziell für sensible Ohren
                </CarouselBanner>
                <div className='flex flex-col justify-center w-56 gap-4 pb-4'>
                    <button className='text-xl tracking-wide border border-black cursor-pointer rounded-xl h-14 bg-mint'>Termin buchen</button>
                    <button className='text-xl tracking-wide bg-white border border-black cursor-pointer rounded-xl h-14'>Shop Jewelry</button>
                </div>
            </CarouselBody>
            <CarouselBody pos={'3'} >
                <CarouselBanner>
                    Hypoallergene Piercings für sensible Ohren
                </CarouselBanner>
                <div className='flex flex-col justify-center w-56 gap-4 pb-4'>
                    <button className='text-xl tracking-wide border border-black cursor-pointer rounded-xl h-14 bg-mint'>Termin buchen</button>
                    <button className='text-xl tracking-wide bg-white border border-black cursor-pointer rounded-xl h-14'>Shop Jewelry</button>
                </div>
            </CarouselBody>
        </Carousel >
    );
}

export default CostumCarousel
