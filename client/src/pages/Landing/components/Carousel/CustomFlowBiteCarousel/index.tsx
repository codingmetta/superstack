import { Carousel } from 'flowbite-react';
import { customIndicatorTheme } from './CarouselTheme';

function CustomFlowBiteCarousel({ children }) {
    return (
        <Carousel theme={customIndicatorTheme} slide={false} leftControl=" " rightControl=" ">
            {children}
        </Carousel>
    )
}

export default CustomFlowBiteCarousel