import OrderOverview from '../OrderOverview'
import { Accordion } from 'flowbite-react'
import { customAccordionTheme } from './CustomAccordionTheme'
import { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function OverviewAccordion() {

    const [isOpen, setIsOpen] = useState(false)

    function handleClick() {
        setIsOpen(prev => !prev)
    }

    return (
        <Accordion
            theme={customAccordionTheme}
            collapseAll
        >
            <Accordion.Panel>
                <Accordion.Title >
                    <div
                        onClick={handleClick}
                        className='absolute bg-[#f3f4f6] z-30 flex flex-row items-center justify-between w-full h-16 px-5 -translate-x-5 -translate-y-8 '>
                        <span className='flex flex-row items-center w-full gap-2 text-lavendel'>
                            <p className='text-sm font-light text-lavendel'>
                                {isOpen ? 'Bestellübersicht verbergen' : 'Bestellübersicht anzeigen'}
                            </p>
                            {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                        </span>
                        <p className='text-lg text-black whitespace-nowrap'>17,90 €</p>
                    </div>
                </Accordion.Title>
                <Accordion.Content>
                    <OrderOverview />
                </Accordion.Content>
            </Accordion.Panel>
        </Accordion>
    )
}

export default OverviewAccordion