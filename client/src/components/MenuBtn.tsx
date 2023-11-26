'use client';
function MenuBtn({ isOpen, handleClick }) {

    const icon_closed =
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6">
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12" />
        </svg>;


    const icon_burger =
        <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14">
            <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.2"
                d="M1 1h15M1 7h15M1 13h15" />
        </svg>;


    return (
        <>
            <button
                onClick={handleClick}
                data-collapse-toggle="navbar-hamburger"
                type="button"
                className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm rounded-lg hover:text-mint " 
                aria-controls="navbar-hamburger" 
                aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                {
                    isOpen ? icon_closed : icon_burger
                }
            </button>
        </>

    );
}

export default MenuBtn