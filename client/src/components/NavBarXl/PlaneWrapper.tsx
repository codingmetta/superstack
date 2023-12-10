'use client';
import { useContext } from 'react';
import { StoreContext } from '../../Context';
import { motion } from 'framer-motion';

function PlaneWrapper({ children }) {
    const { setMenuViewState } = useContext(StoreContext)

    function handleMouseLeave(e) {
        e.stopPropagation();
        setMenuViewState('')
    }

    return (
        <motion.nav
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0, 0.71, 0.2, 1.01]
            }}
            onMouseLeave={(e) => handleMouseLeave(e)}
            className="flex items-center justify-center gap-40 w-full px-12 bg-white border border-black rounded-3xl xl:h-[50vh] 2xl:h-[50vh]">
            {children}
        </motion.nav>
    )
}

export default PlaneWrapper