const calculateProductVariantPrice = (productVariant, basePrice) => {
    if (productVariant === 'single') {
        return basePrice;
    } else if (productVariant === 'pair') {
        return basePrice * 2;
    }
    return null;
}

const determineExpression = (dir) => {
    if (dir === 'INC') {
        return 1;
    } else if (dir === 'DEC') {
        return -1;
    }
    return null;
}

export { calculateProductVariantPrice, determineExpression } 