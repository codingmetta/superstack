import ItemCard from '../ItemCard'
import { useContext } from 'react';
import { StoreContext } from '../../../../context/StoreContext';


function ItemListWrapper({ children }) {
    return (
        <section
            id="items-in-checkout"
            className='flex flex-col justify-center w-full overflow-auto  max-h-[33rem] overscroll-auto'>
            {children}
        </section>
    )
}

function ItemList() {
    const { cart } = useContext(StoreContext);

    return (
        <ItemListWrapper>
            {
                cart.length > 0 ?

                    cart.map((cartItem) =>
                    (
                        <ItemCard key={cartItem.id} item={cartItem} />
                    ))
                    :
                    <p className='w-full py-4 mt-4 mb-12 font-light text-center text-white border rounded border-purple-blue bg-lavendel'>
                        Du hast noch keine Produkte in deinem Warenkorb
                    </p>
            }
        </ItemListWrapper>
    )
}

export default ItemList