'use client';
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext'
import { determineExpression } from '../../utils/helper.js'
import { formatPrice } from '../../utils/format.js'

function CartItem({ item }) {

    const { cart, updateCart } = useContext(StoreContext);


    function handleDecreaseAmount() {
        if (item.amount > 1) {
            updateItemAmount('DEC')
        } else {
            removeItemFromCart(item.id)
        }
    }

    function handleIncreaseAmount() {
        updateItemAmount('INC')
    }

    function handleDeleteItem() {
        removeItemFromCart(item.id);
    }

    function updateItemAmount(dir) {
        const updatedCartItems = cart.map((cartItem) => {
            if (cartItem.id === item.id) {
                return {
                    ...cartItem,
                    amount: item.amount + determineExpression(dir)
                }
            } else {
                return cartItem;
            }
        });
        updateCart(updatedCartItems);
    }

    function removeItemFromCart(id) {
        const nextItems = cart.filter(cartItem => {
            return cartItem.id !== id
        }
        );
        updateCart(nextItems);
    }

    const price = formatPrice(item.variantPrice);
    return (
        <>
            <article className="flex flex-row justify-around w-full p-4 border-b">
                <div className="w-2/6">
                    <img className="object-contain w-24 h-24" src={item.image} alt="" />
                </div>
                <div className="flex flex-col justify-between w-3/6 gap-2 text-start " >
                    <h3 className="font-bold text-md">{item.title}</h3>
                    <>
                        <p className="text-sm leading-none text-gray-400 capitalize font-extralight">
                            Variante: {item.variant}</p>
                        <p className="text-sm leading-none text-gray-400 capitalize font-extralight">
                            Farbe: {item.color}</p>
                        <p className="text-sm leading-none text-gray-400 capitalize font-extralight">
                            Größe: {item.size}</p>
                    </>

                    <div className='flex flex-row items-center mt-3 text-center'>
                        <button onClick={handleDecreaseAmount} className='flex items-center justify-center w-8 text-xl text-gray-500 border font-extralight '>-</button>
                        <span className='w-12 p-0.5 border text-md'>{item.amount}</span>
                        <button onClick={handleIncreaseAmount} className='flex justify-center w-8 text-xl text-gray-500 border font-extralight '>+</button>
                    </div>
                </div>
                <div className='flex flex-col items-end justify-between w-1/6'>
                    <button onClick={handleDeleteItem} className='flex items-center justify-center text-gray-500' type="button">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                            strokeWidth={3}
                            stroke="currentColor"
                            className="w-3 h-3">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <p className="font-bold ">{price}€</p>
                </div>
            </article>
        </>
    )
}

export default CartItem