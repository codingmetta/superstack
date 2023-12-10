'use client';
import './index.css';
import { CarouselCard, CarouselCardHeading, CarouselCardSubHeading } from './CarouselCard';
import CustomFlowBiteCarousel from './CustomFlowBiteCarousel';

function CarouselBottom({ children }) {
    return (
        <div className='flex flex-col justify-center gap-4 pb-4 xl:w-5/12 2xl:w-4/12 lg:w-1/2 lg:flex-row xl:justify-between xl:pb-10'>
            {children}
        </div>
    );
}

function CarouselBtn({ color, children }) {
    return (
        <button className={`${color} w-52 lg:w-1/2 h-14 text-xl xl:px-6 lg:h-16 tracking-wide border whitespace-nowrap border-black cursor-pointer rounded-xl`}>
            {children}
        </button>
    );
}

function CarouselPanel({ children, pos }) {
    return (
        <div className={`flex min-w-screen flex-col min-h-[89vh] lg:min-h-[72vh] xl:min-h-[86vh] 2xl:min-h-[100vh] pt-28 pb-12 px-3 items-center lg:items-start lg:justify-center lg:gap-12 lg:px-14  xl:px-16  justify-between bg-gray-400 dark:bg-gray-700 dark:text-white banner-${pos}`}>
            {children}
        </div>
    );
}

function CarouselWrapper({ children }) {
    return (
        <div className="w-full min-w-screen min-h-[89vh] lg:min-h-[72vh] xl:min-h-[86vh] 2xl:min-h-[100vh] ">
            {children}
        </div>
    );
}

function Carousel() {
    return (
        <CarouselWrapper>
            <CustomFlowBiteCarousel>
                <CarouselPanel pos={'1'} >
                    <CarouselCard color='white'>
                        <CarouselCardHeading> Say Hello to your future ear piercings</CarouselCardHeading>
                    </CarouselCard>
                    <CarouselBottom>
                        <CarouselBtn color='bg-mint'>
                            Termin Buchen
                        </CarouselBtn>
                        <CarouselBtn color='bg-white'>
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
                        <CarouselBtn color='bg-mint' >
                            Termin Buchen
                        </CarouselBtn>
                        <CarouselBtn color='bg-white' >
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
                        <CarouselBtn color='bg-mint' >
                            Termin Buchen
                        </CarouselBtn>
                        <CarouselBtn color='bg-white' >
                            Shop Jewelry
                        </CarouselBtn>
                    </CarouselBottom>
                </CarouselPanel>
            </CustomFlowBiteCarousel>
        </CarouselWrapper>
    );
}

export default Carousel
