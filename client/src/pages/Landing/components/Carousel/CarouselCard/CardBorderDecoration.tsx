import './index.css'

function Sparkle({ url }) {
    return (
        <img className='absolute w-7 h-7 lg:w-12 lg:h-12' src={url} />
    );
}

function CardBorderDecoration({ color }) {
    const sparkleBlackURL = 'https://www.superstack.me/cdn/shop/t/1/assets/Superstack-Star-Black.svg?v=154082635854720999921682322560';
    const sparkleWhiteURL = 'https://www.superstack.me/cdn/shop/t/1/assets/Superstack-Star-White.svg?v=104040978342407960781682329630'
    return (
        <>
            <Sparkle url={`${color === 'black' ? sparkleBlackURL : sparkleWhiteURL}`} />
            <Sparkle url={`${color === 'black' ? sparkleBlackURL : sparkleWhiteURL}`} />
            <Sparkle url={`${color === 'black' ? sparkleBlackURL : sparkleWhiteURL}`} />
            <Sparkle url={`${color === 'black' ? sparkleBlackURL : sparkleWhiteURL}`} />
        </>
    );
}

export default CardBorderDecoration