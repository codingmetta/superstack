'use client';
import { useContext } from 'react';
import { motion } from 'framer-motion';
import { PlaneContext } from 'src/context/PlaneContext';

function PlaneWrapper({ children }) {
    const { setCurrentPlane } = useContext(PlaneContext)

    function handleMouseLeave(e) {
        e.stopPropagation();
        setCurrentPlane('')
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