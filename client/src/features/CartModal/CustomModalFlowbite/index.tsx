'use client';
import { Modal } from 'flowbite-react'
import { customModalTheme } from './CustomFlowbiteTheme';
import { useContext } from 'react';
import { StoreContext } from 'src/context/StoreContext';
import { AppContext } from 'src/context/AppContext';

function CustomModalFlowbite({ children }) {
    const { showCart, setShowCart } = useContext(StoreContext);
    const { isMobile } = useContext(AppContext);
    
    const modalSize = isMobile? 'sm' : 'xl'
    const modalPosition = 'center-right'
    return (
        <Modal
            dismissible
            onClose={() => setShowCart(false)} //only used by dismissible 
            theme={customModalTheme}
            show={showCart}
            size={modalSize}
            position={modalPosition}
        >
            {children}
        </Modal>
    )
}

export default CustomModalFlowbite