const calculateItemsInCartTotal = (cart) => {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        total += cart[i].amount;
    }
    return total;
}

const calculateTotalPrice = (cart) => {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        total += cart[i].variantPrice * cart[i].amount;
    }
    return total;
}

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

export { calculateItemsInCartTotal, calculateTotalPrice, calculateProductVariantPrice, determineExpression } 