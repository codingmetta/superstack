'use client';
import FaceFrownIcon from '@heroicons/react/24/outline/esm/FaceFrownIcon';

function NothingFoundPlaceHolder() {
    return (
        <p className="flex flex-row items-center w-full h-20 gap-6 px-8 py-12 mx-5 mb-8 bg-anti-flash rounded-xl">
            <FaceFrownIcon className="w-16 h-16 text-black" />
            Das Produkt was du suchst haben wir leider nicht
        </p>
    );
}
export default NothingFoundPlaceHolder