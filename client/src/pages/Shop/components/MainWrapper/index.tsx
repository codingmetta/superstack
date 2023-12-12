'use client';

function MainWrapper({ children }) {
    return (
        <main className="flex flex-col justify-around w-full gap-6 bg-white">
            {children}
        </main>
    )
}

export default MainWrapper