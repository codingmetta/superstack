'use client';


function CardStoreInfo() {
  return (
    <article className="relative flex flex-col items-center justify-around gap-6 px-4 py-8 border border-black realtive rounded-xl">
      <span className='px-8 py-5 text-xs uppercase border border-black rounded-[50%] font-climate'>Store</span>
      <h3 className="tracking-wider text-center uppercase font-climate">Superstack ist dein Safespace wenn es um Ohrpiercings geht.</h3>
      <p className="text-sm tracking-wider text-center">Piercen heißt, sich absolut wohlzufühlen und genau das wollen wir mit unserem Piercing Pop-Up Store erreichen. Bei uns erwartet dich eine individuelle Beratung in Bezug auf Lifestyle und Anatomie, hypoallergener, cooler Erstschmuck aus Titan, erfahrene Piercer:innen und eine individuelle Nachsorgeberatung. On top findest du uns in einer großartigen Location mitten in Köln. We can’t wait to pierce you!</p>
      <button className="w-40 py-2 border border-black rounded-xl bg-mint" >Get pierced</button>
      <div className="absolute w-full translate-x-72 -translate-y-60">
        <img
          className="absolute w-3.5 translate-x-5 "
          src="https://www.superstack.me/cdn/shop/t/1/assets/Superstack-Star-Black.svg?v=154082635854720999921682322560"
          alt="" />
        <img
          className="absolute w-3.5 "
          src="https://www.superstack.me/cdn/shop/t/1/assets/Superstack-Star-Black.svg?v=154082635854720999921682322560"
          alt="" />
      </div>

    </article>
  )
}

export default CardStoreInfo