import CustomModalFlowbite from './CustomModalFlowbite'
import Cart from './Cart';

function CartModal() {
    return (
        <div className='transition-opacity duration-500 '>
            <CustomModalFlowbite>
                <Cart />
            </CustomModalFlowbite>
        </div>
    )
}

export default CartModal
