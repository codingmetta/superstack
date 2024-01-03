
import { formatPrice } from 'src/utils/format.js'

export default function ItemCard({ item }) {

    const price = formatPrice(item.variantPrice);
    return (
        <article className='flex flex-row items-center justify-between py-5'>
            <span className='flex '>
                <figure className='relative flex w-16 h-16 min-w-16 min-h-16'>
                    <img
                        src={item.image}
                        alt={item.title}
                        className='object-contain w-16 h-16 border rounded min-w-16 min-h-16' />
                    <span className='absolute flex font-light items-center justify-center w-[1.35rem] h-[1.35rem] text-sm text-white bg-gray-500 border border-gray-500 rounded-full translate-x-12 -translate-y-[0.75rem]'>
                        {item.amount}
                    </span>
                </figure>

                <span className='flex flex-col justify-center gap-0 px-4'>
                    <h3 className='text-sm'>
                        {item.title}
                    </h3>
                    <p className='text-xs font-light text-gray-500 capitalize'>
                        {item.variant} / {item.color} / {item.size}
                    </p>
                </span>
            </span>
            <p className='text-sm'>{price} €</p>
        </article>
    );
}