'use client';

function MainWrapper({ children }) {
    return (
        <main className="flex flex-col w-full px-1.5 bg-white">
            {children}
        </main>
    )
}

export default MainWrapper