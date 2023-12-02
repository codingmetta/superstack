'use client';
import MagnifyingGlassIcon from "@heroicons/react/24/outline/esm/MagnifyingGlassIcon";

function SearchBtn() {
    return (
        <a href="#" >
            <span className="sr-only">Back to Homepage</span>
            <MagnifyingGlassIcon className="antialiased w-7" strokeWidth={1.5} viewBox="2 2 23 22"/>
        </a>
    )
}

export default SearchBtn