import { motion } from 'framer-motion';
import { useContext } from 'react';
import { CardContext } from '../../../context/CardContext';

function Card({ children, size }) {

    return (
        <CardContext.Provider
            value={{ size }}
        >
            <motion.article
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01]
                }}
                className={`flex flex-col items-center justify-around  bg-white border  rounded-3xl 
        ${size === 'medium' ? 'w-44 border-black text-sm lg:w-56 xl:w-72' : ''}
        ${size === 'large' ? 'w-72 xl:w-[20rem] 2xl:w-88 border-transparent' : ''}
        `}>
                {children}
            </motion.article>
        </CardContext.Provider>
    );
}

function CardHeader({ children }) {
    const { size } = useContext(CardContext)

    return (
        <section className={`" "
        ${size === 'medium' ? 'w-full' : ''}
        ${size === 'large' ? 'w-72 h-72 xl:w-[20rem] xl:h-[20rem] 2xl:w-88 2xl:h-88' : ''}
        `}>
            {children}
        </section>
    );
}

function CardBody({ children }) {
    const { size } = useContext(CardContext)

    return (
        <section className={`w-full 
        ${size === 'medium' ? 'h-32 p-3  ' : ''}
        ${size === 'large' ? 'h-full py-1.5' : ''}
        `}>
            {children}
        </section>
    );
}

function CardFooter({ children }) {
    const { size } = useContext(CardContext)
    return (
        <section className={`flex flex-col w-full h-40 gap-2  mb-2
        ${size === 'medium' ? 'px-3  ' : ''}
        ${size === 'large' ? '' : ''}
        `}>
            {children}
        </section>
    );
}


Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;


export default Card;