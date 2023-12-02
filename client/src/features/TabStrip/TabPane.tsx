'use client';

function TabPane({ children, ...rest }) {
    return (
        <article className="flex flex-col justify-around gap-6 p-6 mt-8 active-panel">
            {children}
        </article>
    )
}

export default TabPane