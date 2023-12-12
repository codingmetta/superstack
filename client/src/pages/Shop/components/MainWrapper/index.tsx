'use client';

function MainWrapper({ children }) {
    return (
        <main className="flex flex-col justify-around w-full gap-2 pb-16 bg-white xl:gap-2 xl:px-10 white">
            {children}
        </main>
    )
}

export default MainWrapper