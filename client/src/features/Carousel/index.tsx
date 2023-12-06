'use client';
import { Carousel } from 'flowbite-react';
import './index.css';

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
        <div className='flex flex-col justify-center xl:w-[27%] gap-4 pb-4 lg:w-1/2 lg:flex-row xl:justify-start  xl:pb-10'>
            {children}
        </div>
    );
}

function CarouselBtn({ color, height, width, children }) {
    return (
        <button className={`${width} ${height} ${color} text-xl lg:h-16 tracking-wide border border-black cursor-pointer rounded-xl`}>
            {children}
        </button>
    );
}
function CarouselCardHeading({ children }) {
    return (
        <p className='text-xl font-black uppercase lg:text-3xl lg:text-start'>
            {children}
        </p>
    );
}
function CarouselCardSubHeading({ children }) {
    return (
        <p className="pt-2 text-xs font-light tracking-wide uppercase lg:text-start lg:text-base ">
            {children}
        </p>
    );
}


function CarouselCard({ children, color }) {
    return (
        <div
            className={`relative flex flex-col lg:p-10 items-center justify-center xl:tracking-wider xl:text-6xl w-full p-2 lg:w-6/12 lg:h-72 xl:w-[27%] font-black text-center text-${color} border border-${color} font-unbounded rounded-3xl backdrop-blur-xl`}
            id='sparkle-card'>
            <span className="py-5">{children}</span>
            <CardBorderDecoration color={color} />
        </div>
    )
}

function CardBorderDecoration({ color }) {
    const sparkleBlackURL = 'https://www.superstack.me/cdn/shop/t/1/assets/Superstack-Star-Black.svg?v=154082635854720999921682322560';
    const sparkleWhiteURL = 'https://www.superstack.me/cdn/shop/t/1/assets/Superstack-Star-White.svg?v=104040978342407960781682329630'
    return (
        <>
            <Sparkle url={`${color === 'black' ? sparkleBlackURL : sparkleWhiteURL}`} />
            <Sparkle url={`${color === 'black' ? sparkleBlackURL : sparkleWhiteURL}`} />
            <Sparkle url={`${color === 'black' ? sparkleBlackURL : sparkleWhiteURL}`} />
            <Sparkle url={`${color === 'black' ? sparkleBlackURL : sparkleWhiteURL}`} />
        </>
    );
}
function Sparkle({ url }) {
    return (
        <img className='w-7 h-7 lg:w-12 lg:h-12' src={url} />
    );

}

function CarouselPanel({ children, pos }) {
    return (
        <div className={`flex min-w-screen flex-col min-h-[88vh] lg:h-[98vh] pt-28 pb-12 px-3 items-center lg:items-start lg:justify-center lg:gap-12 lg:px-14 xl:justify-end xl:px-32 justify-between bg-gray-400 dark:bg-gray-700 dark:text-white banner-${pos}`}>
            {children}
        </div>
    );
}

function CarouselWrapper({ children }) {
    return (
        <div className="w-full min-w-screen min-h-[88vh] lg:h-[98vh] xl:min-h-screen">
            {children}
        </div>
    );
}

function CostumCarousel() {
    return (
        <CarouselWrapper>
            <Carousel theme={customIndicatorTheme} slide={false} leftControl=" " rightControl=" ">

                <CarouselPanel pos={'1'} >
                    <CarouselCard color='white'>
                        <CarouselCardHeading> Say Hello to your future ear piercings</CarouselCardHeading>
                    </CarouselCard>
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
                    <CarouselCard color='black' >
                        <CarouselCardHeading>Hypoallergene Piercings</CarouselCardHeading>
                        <CarouselCardSubHeading>speziell für sensible Ohren</CarouselCardSubHeading>
                    </CarouselCard>

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
                    <CarouselCard color='black' >

                        <CarouselCardHeading>Hypoallergene Piercings</CarouselCardHeading>
                        <CarouselCardSubHeading> für sensible Ohren</CarouselCardSubHeading>
                    </CarouselCard>
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
