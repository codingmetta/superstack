'use client';
import './index.css';
import { CarouselCard, CarouselCardHeading, CarouselCardSubHeading } from './CarouselCard';
import CustomFlowBiteCarousel from './CustomFlowBiteCarousel';
import { Link } from 'react-router-dom';

function CarouselBottom() {
    return (
        <div className='flex flex-col justify-center gap-4 pb-4 xl:w-5/12 2xl:w-4/12 lg:w-1/2 lg:flex-row xl:justify-between xl:pb-10'>
            <CarouselBtn color='bg-mint' url='booking'>
                Termin Buchen
            </CarouselBtn>
            <CarouselBtn color='bg-white' url='shop'>
                Shop Jewelry
            </CarouselBtn>
        </div>
    );
}

function CarouselBtn({ color, url, children }) {
    return (
        <Link
            to={url}
            className={`${color} w-52 lg:w-1/2 h-14 text-xl xl:px-6 lg:h-16 tracking-wide border whitespace-nowrap border-black cursor-pointer rounded-xl flex items-center justify-center`}>
            {children}
        </Link>
    );
}

function CarouselPanel({ children, bgImg }) {
    return (
        <div className={`flex min-w-screen flex-col min-h-[89vh] lg:min-h-[72vh] xl:min-h-[86vh] 2xl:min-h-[100vh] pt-28 pb-12 px-3 items-center lg:items-start lg:justify-center lg:gap-12 lg:px-14  xl:px-16  justify-between bg-gray-400 dark:bg-gray-700 dark:text-white bg-no-repeat bg-cover bg-center  ${bgImg} `}>
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
                <CarouselPanel bgImg={'bg-[url(/images/woman-on-skateboard.webp)]'} >
                    <CarouselCard color='white'>
                        <CarouselCardHeading> Say Hello to your future ear piercings</CarouselCardHeading>
                    </CarouselCard>
                    <CarouselBottom />
                </CarouselPanel>

                <CarouselPanel bgImg={'bg-[url(/images/piercingstudio.webp)]'}   >
                    <CarouselCard color='black' >
                        <CarouselCardHeading>Hypoallergene Piercings</CarouselCardHeading>
                        <CarouselCardSubHeading>speziell für sensible Ohren</CarouselCardSubHeading>
                    </CarouselCard>
                    <CarouselBottom />


                </CarouselPanel>

                <CarouselPanel bgImg={'bg-[url(/images/pink-hair-white-guy-standing.webp)]'}  >
                    <CarouselCard color='black' >
                        <CarouselCardHeading>Hypoallergene Piercings</CarouselCardHeading>
                        <CarouselCardSubHeading> für sensible Ohren</CarouselCardSubHeading>
                    </CarouselCard>
                    <CarouselBottom />
                </CarouselPanel>
            </CustomFlowBiteCarousel>
        </CarouselWrapper>
    );
}

export default Carousel
