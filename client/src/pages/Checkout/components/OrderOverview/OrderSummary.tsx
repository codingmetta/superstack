import { StoreContext } from 'src/context/StoreContext';
import { useContext } from 'react';
import { calculateTotalPrice, calculateMwSt } from 'src/utils/calculate.js'
import { formatPrice } from 'src/utils/format.js'

export default function OrderSummary() {

    const { cart } = useContext(StoreContext)

    const MwStPrice = formatPrice(calculateMwSt(calculateTotalPrice(cart)))
    const totalPrice = formatPrice(calculateTotalPrice(cart));
    return (
        <div className='flex flex-col justify-center gap-2 py-5'>
            <span className='flex flex-row items-center justify-between w-full '>
                <h3 className='text-sm'>
                    Zwischensumme</h3>
                <p className='text-sm'>
                    {totalPrice} €
                </p>
            </span>
            <span className='flex flex-row items-center justify-between w-full '>
                <h3 className='text-sm'>
                    Versand
                </h3>
                <p className='text-xs font-light text-gray-500'>
                    Lieferadresse eingeben
                </p>
            </span>
            <span className='flex flex-row items-center justify-between w-full '>
                <span className='flex flex-col '>
                    <h3 className='text-lg'>
                        Summe
                    </h3>
                    <p className='text-xs font-light text-gray-500'>
                        inkl. {MwStPrice} € MwSt
                    </p>
                </span>
                <span className='flex flex-row items-center gap-2'>
                    <p className='text-[13px] text-gray-500 font-extralight '>
                        EUR
                    </p>
                    <p className='text-lg '>{totalPrice} €</p>
                </span>
            </span>
        </div>
    );
}