function CouponInput() {
    return (
        <div className='flex flex-row justify-between w-full h-full'>
            <input
                type="text"
                placeholder="Rabattcode oder Geschenkgutschein"
                className='w-2/3 h-12 text-sm border border-gray-300 rounded-md' />
            <button className='h-12 px-3 text-sm text-gray-600 bg-gray-200 border border-gray-300 rounded-md '>
                Anwenden
            </button>
        </div>
    );
}

export default CouponInput