'use client';

function CardDetails({ product }) {
    return (
        <article>
            <section>
                <img src={product.image} alt="" />
            </section>
            <section>
                <h3 className="font-semibold line-clamp-2 ">{product.title}</h3>
                <p className="">{product.description}€</p>
                <p className="">{product.price}€ inkl.MwSt, zzgl. Versandkosten</p>
            </section>
            <button>Single</button>
            <fieldset className="flex gap-1">
                <input id="default-radio-gold" type="radio" value="gold" name="default-radio" className="w-6 h-6 text-yellow-300 bg-yellow-300 border-none cursor-pointer focus:ring-black active:ring-2 focus:ring-2 " aria-label="Gold" checked />
                <input id="default-radio-silver" type="radio" value="silver" name="default-radio" className="w-6 h-6 text-gray-400 bg-gray-400 border-none cursor-pointer focus:ring-black active:ring-2 focus:ring-2 " aria-label="Silver" />
            </fieldset>
        </article>

    )
}

export default CardDetails