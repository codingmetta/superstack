'use client';

function CartIsEmptyPlaceHolder() {
    return (
        <span className='flex flex-col items-center justify-center w-full min-h-screen gap-6 bg-white '>
            {CustomCartIcon}
            <p className='text-lg font-light text-gray-400 '>
                Dein Warenkorb ist leer!
            </p>
        </span>
    )
}

const CustomCartIcon = <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="lightgray"
    viewBox="0 0 20 23"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-16 h-16 text-gray-500"
>
    <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
    />
</svg>;

export default CartIsEmptyPlaceHolder