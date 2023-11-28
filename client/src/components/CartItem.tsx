'use client';
import { useState, useContext } from 'react';
import { ShoppingCartContext } from '../Context'


function CartItem({ item }) {

    const [amount, setAmount] = useState(1);
    const { cart, updateCart } = useContext(ShoppingCartContext);


    function decreaseAmount() {
        if (amount > 1) {
            setAmount(prevAmount => prevAmount - 1)
        } else {
            removeItemFromCart(item.id)
        }
    }

    function increaseAmount() {
        setAmount(prevAmount => prevAmount + 1)
    }

    function handleDelete() {
        removeItemFromCart(item.id);
    }

    function removeItemFromCart(id) {
        const nextItems = cart.filter(item =>{
            return item.id !== id
        }
        );
        console.log(nextItems);
        updateCart(nextItems);
    }

    const variantPrice = (item.price * item.priceFactor);
    return (
        <>
            <article className="flex flex-row justify-around w-full p-4 border-b-2">
                <div className="w-2/6">
                    <img className="object-contain w-24 h-24" src={item.image} alt="" />
                </div>
                <div className="flex flex-col justify-between w-3/6 gap-2 text-start " >
                    <h3 className="font-bold text-md">{item.title}</h3>
                    <div>
                        <p className="text-sm text-gray-400 capitalize font-extralight">Stil: {item.variant}</p>
                        <p className="text-sm text-gray-400 capitalize font-extralight">Farbe: {item.color}</p>
                        <p className="text-sm text-gray-400 capitalize font-extralight">Größe: {item.size}</p>
                    </div>

                    <div className='flex flex-row items-center text-center'>
                        <button onClick={decreaseAmount} className='flex items-center justify-center w-8 text-xl text-gray-500 border font-extralight '>-</button>
                        <span className='w-12 p-0.5 border text-md'>{amount}</span>
                        <button onClick={increaseAmount} className='flex justify-center w-8 text-xl text-gray-500 border font-extralight '>+</button>
                    </div>
                </div>
                <div className='flex flex-col items-end justify-between w-1/6'>
                    <button onClick={handleDelete} className='flex items-center justify-center text-gray-500' type="button">
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
                    <p className="font-bold ">{variantPrice.toFixed(2)}€</p>
                </div>

            </article>
        </>
    )
}

export default CartItem