import { Carousel } from 'flowbite-react';
import { customTheme } from './CustomFlowbiteTheme';

function CustomFlowBiteCarousel({ children }) {
    return (
        <Carousel theme={customTheme} slide={false} leftControl=" " rightControl=" ">
            {children}
        </Carousel>
    )
}

export default CustomFlowBiteCarousel