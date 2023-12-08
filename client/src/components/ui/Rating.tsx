'use client';
import StarIcon from "@heroicons/react/24/solid/esm/StarIcon";

function Rating({ rating }) {

    function computeStars(rating) {
        const stars = [];
        const starsFilled = rating;
        const starsEmpty = 5 - rating;

        for (let i = 0; i < starsFilled; i++) {
            stars.push("text-lila");
        }
        for (let i = 0; i < starsEmpty; i++) {
            stars.push("text-gray-400");
        }
        return stars;
    }

    const stars = computeStars(rating);

    return (
        <span className='flex items-center p-0 mb-1'>
            {
                stars.map((value, index) => (
                    <StarIcon className={`w-4 h-4 xl:w-5 xl:h-5 mr-1 ${value}`} key={index} />
                ))
            }
        </span>
    )
}


export default Rating