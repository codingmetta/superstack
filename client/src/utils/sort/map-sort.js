const sortByPriceAsc = (products) => {
    const unsortedProducts = copyProducts(products);
    let newOrder = {};

    const ascKeysArr = extractKeys(sortEntriesInAscendingOrder(getProductsAsMap(unsortedProducts)));

    ascKeysArr.forEach(function (a, i) { newOrder[a] = i; });
    const sortedProducts = sortProductsByGivenOrder(unsortedProducts, newOrder);
    return sortedProducts;
}

const sortByPriceDesc = (products) => {
    const unsortedProducts = copyProducts(products);
    let newOrder = {};

    const ascKeysArr = extractKeys(sortEntriesInDescendingOrder(getProductsAsMap(unsortedProducts)));

    ascKeysArr.forEach(function (a, i) { newOrder[a] = i; });
    const sortedProducts = sortProductsByGivenOrder(unsortedProducts, newOrder);
    return sortedProducts;

}
const sortByAlphabeticalOrder = (products) => {
    const unsortedProducts = copyProducts(products);
    const ordered = unsortedProducts.sort((a, b) => a.title.localeCompare(b.title))
    console.log(ordered);
    return ordered;
}


const sortByReverseAlphabeticalOrder = (products) => {
    const unsortedProducts = copyProducts(products);
    const ordered = unsortedProducts.reverse((a, b) => a.title.localeCompare(b.title))
    console.log(ordered);
    return ordered;
}



/* HELPERS */

const copyProducts = (products) => {
    return products.slice();
}


const getProductsAsMap = (products) => {
    let map = new Map([]);
    for (let i = 0; i < products.length; i++) {
        map.set(products[i].id, products[i].price[0]);
    }
    return map;
}

const sortEntriesInDescendingOrder = (map) => {
    return new Map([...map.entries()].sort((a, b) => b[1] - a[1]));
}

const sortEntriesInAscendingOrder = (map) => {
    return new Map([...map.entries()].sort((a, b) => a[1] - b[1]));
}

const extractKeys = (map) => {
    return Array.from(map.keys());
}

const sortProductsByGivenOrder = (unsortedProducts, newOrder) => {
    return unsortedProducts.sort(function (a, b) {
        return newOrder[a.id] - newOrder[b.id];
    });
}




// const sortByPriceAsc = (products) => {
//     const unsortedProducts = products.slice();
//     let newOrder = {};

//     const map = getProductsAsMap(unsortedProducts);
//     const mapAscending = sortEntriesInAscendingOrder(map);
//     const ascKeysArr = extractKeys(mapAscending);

//     ascKeysArr.forEach(function (a, i) { newOrder[a] = i; });
//     const sortedProducts = sortProductsByGivenOrder(unsortedProducts, newOrder);
//     return sortedProducts;

// }

// const sortByPriceDesc = (products) => {
//     let unsortedProducts = products.slice();
//     let newOrder = {};
//     let sortedProducts;

//     const map = getProductsAsMap(products.slice());
//     const mapDescending = sortEntriesInDescendingOrder(map);
//     const descKeysArr = extractKeys(mapDescending);

//     descKeysArr.forEach(function (a, i) { newOrder[a] = i; });
//     sortedProducts = sortProductsByGivenOrder(unsortedProducts, newOrder);
//     return sortedProducts;
// }


export { sortByPriceAsc, sortByPriceDesc, sortByAlphabeticalOrder, sortByReverseAlphabeticalOrder }