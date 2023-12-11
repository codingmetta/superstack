'use client';
import CardBorderDecoration from "./CardBorderDecoration";

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
            className={`relative flex flex-col lg:p-10 items-center justify-center xl:tracking-wider xl:text-6xl w-full p-2 lg:w-6/12 xl:w-5/12 xl:min-h-96 lg:h-72 2xl:w-4/12 font-black text-center text-${color} border border-${color} font-unbounded rounded-3xl backdrop-blur-xl`}
            id='sparkle-card'>
            <span className="py-5">{children}</span>
            <CardBorderDecoration color={color} />
        </div>
    )
}



export { CarouselCard, CarouselCardHeading, CarouselCardSubHeading }