'use client';
import { Carousel } from 'flowbite-react';
import './Carousel.css';

import type { FlowbiteCarouselTheme } from 'flowbite-react';

const customIndicatorTheme: FlowbiteCarouselTheme = { /* eslint-disable-line */
    root: {
        base: "relative h-full w-full",
        leftControl: "absolute top-0 left-0 flex h-full items-center justify-center px-4 focus:outline-none",
        rightControl: "absolute top-0 right-0 flex h-full items-center justify-center px-4 focus:outline-none"
    },
    indicators: {
        active: {
            off: "bg-white/90 border-0 hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800",
            on: "bg-mint border border-black  dark:bg-gray-800"
        },
        base: "h-2.5 w-2.5 rounded-full",
        wrapper: "absolute bottom-5 left-1/2 -translate-x-1/2 space-x-3"
    },
    item: {
        base: "absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2",
        wrapper: "w-full flex-shrink-0 transform cursor-default snap-center"
    }
    ,
    control: {
        base: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10",
        icon: " "
    },
    scrollContainer: {
        base: "flex h-full  snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth",
        snap: "snap-x"
    }
};

function CarouselBottom({ children }) {
    return (
        <div className='flex flex-col justify-center gap-4 pb-4'>
            {children}
        </div>
    );
}

function CarouselBtn({ color, height, width, children }) {
    return (
        <button className={`${width} ${height} ${color} text-xl tracking-wide border border-black cursor-pointer rounded-xl`}>
            {children}
        </button>
    );
}


function CarouselCardWhite({ children }) {
    return (
        <div className='relative flex flex-col items-center justify-center w-full p-2 text-xl border border-white rounded-3xl backdrop-blur-xl ' id='sparkle-card'>
            <p className='py-5 text-xl font-black text-center text-white uppercase font-unbounded'>
                {children}
            </p>
            <img className=' w-7 h-7' src="//www.superstack.me/cdn/shop/t/1/assets/Superstack-Star-White.svg?v=104040978342407960781682329630" />
            <img className=' w-7 h-7' src="//www.superstack.me/cdn/shop/t/1/assets/Superstack-Star-White.svg?v=104040978342407960781682329630" />
            <img className=' w-7 h-7' src="//www.superstack.me/cdn/shop/t/1/assets/Superstack-Star-White.svg?v=104040978342407960781682329630" />
            <img className=' w-7 h-7' src="//www.superstack.me/cdn/shop/t/1/assets/Superstack-Star-White.svg?v=104040978342407960781682329630" />
        </div>
    )
}
function CarouselCardBlack({ children }) {
    return (
        <div className='relative flex flex-col items-center justify-center w-full p-2 text-xl border border-black rounded-3xl backdrop-blur-xl ' id='sparkle-card'>
            <p className='py-5 text-xl font-black text-center text-black uppercase font-unbounded'>
                {children}
            </p>
            <img className=' w-7 h-7' src="https://www.superstack.me/cdn/shop/t/1/assets/Superstack-Star-Black.svg?v=154082635854720999921682322560" />
            <img className=' w-7 h-7' src="https://www.superstack.me/cdn/shop/t/1/assets/Superstack-Star-Black.svg?v=154082635854720999921682322560" />
            <img className=' w-7 h-7' src="https://www.superstack.me/cdn/shop/t/1/assets/Superstack-Star-Black.svg?v=154082635854720999921682322560" />
            <img className=' w-7 h-7' src="https://www.superstack.me/cdn/shop/t/1/assets/Superstack-Star-Black.svg?v=154082635854720999921682322560" />
        </div>
    )
}

function CarouselPanel({ children, pos }) {
    return (
        <div className={`flex min-w-screen flex-col min-h-[88vh] pt-28 pb-12 px-3 items-center justify-between bg-gray-400 dark:bg-gray-700 dark:text-white banner-${pos}`}>
            {children}
        </div>
    );
}

function CarouselWrapper({ children }) {
    return (
        <div className="w-full min-w-screen min-h-[88vh] ">
            {children}
        </div>
    );
}

function CostumCarousel() {
    return (
        <CarouselWrapper>
            <Carousel theme={customIndicatorTheme} slide={false} leftControl=" " rightControl=" ">

                <CarouselPanel pos={'1'} >
                    <CarouselCardWhite>
                        Say Hello to your future ear piercings
                    </CarouselCardWhite>
                    <CarouselBottom>
                        <CarouselBtn color='bg-mint' width='w-56' height='h-14'>
                            Termin Buchen
                        </CarouselBtn>
                        <CarouselBtn color='bg-white' width='w-56' height='h-14'>
                            Shop Jewelry
                        </CarouselBtn>
                    </CarouselBottom>
                </CarouselPanel>

                <CarouselPanel pos={'2'} >
                    <CarouselCardBlack>
                        Hypoallergene Piercings
                        <p className="pt-2 text-xs font-light tracking-wide">speziell für sensible Ohren</p>
                    </CarouselCardBlack>
                    <CarouselBottom>
                        <CarouselBtn color='bg-mint' width='w-56' height='h-14'>
                            Termin Buchen
                        </CarouselBtn>
                        <CarouselBtn color='bg-white' width='w-56' height='h-14'>
                            Shop Jewelry
                        </CarouselBtn>
                    </CarouselBottom>
                </CarouselPanel>

                <CarouselPanel pos={'3'} >
                    <CarouselCardBlack>
                        Hypoallergene Piercings
                        <p className="pt-2 text-xs font-light tracking-wide">für sensible Ohren</p>
                    </CarouselCardBlack>
                    <CarouselBottom>
                        <CarouselBtn color='bg-mint' width='w-56' height='h-14'>
                            Termin Buchen
                        </CarouselBtn>
                        <CarouselBtn color='bg-white' width='w-56' height='h-14'>
                            Shop Jewelry
                        </CarouselBtn>
                    </CarouselBottom>
                </CarouselPanel>

            </Carousel >
        </CarouselWrapper>
    );
}

export default CostumCarousel
