export const calculateProductVariantPrice = (productVariant, basePrice) => {
    let variantPrice = 0;
    if (productVariant=== 'single') {
        variantPrice = basePrice;
    } else if (productVariant === 'pair') {
        variantPrice = basePrice * 2;
    }
    return variantPrice;
}

