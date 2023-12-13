import { quickSortDescend, quickSortAscend } from './sorting-algorithms/quicksort'


const sortByPriceAsc = (products) => {
    const unsortedProducts = products.slice();
    let newOrder = {};

    const map = getProductsAsMap(unsortedProducts);
    const mapAscending = sortEntriesInAscendingOrder(map);
    const ascKeysArr = extractKeys(mapAscending);

    ascKeysArr.forEach(function (a, i) { newOrder[a] = i; });
    const sortedProducts = sortFinal(unsortedProducts, newOrder);
    return sortedProducts;

}
const sortByPriceDesc = (products) => {
    let unsortedProducts = products.slice();
    let newOrder = {};
    let sortedProducts;

    const map = getProductsAsMap(products.slice());
    const mapDescending = sortEntriesInDescendingOrder(map);
    const descKeysArr = extractKeys(mapDescending);

    descKeysArr.forEach(function (a, i) { newOrder[a] = i; });
    sortedProducts = sortFinal(unsortedProducts, newOrder);
    return sortedProducts;
}

const sortFinal = (unsortedProducts, newOrder) => {
    return unsortedProducts.sort(function (a, b) {
        return newOrder[a.id] - newOrder[b.id];
    });
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


const getProductsAsMap = (products) => {
    let map = new Map([]);
    for (let i = 0; i < products.length; i++) {
        map.set(products[i].id, products[i].price[0]);
    }
    return map;
}

/************************/


const qsPriceAscending = (products) => {
    const pricesArr = getPricesArr(products);
    const ascendingItems = quickSortAscend(pricesArr, 0, pricesArr.length - 1)
}
const qsPriceDescending = (products) => {
    const pricesArr = getPricesArr(products);
    const descendingItems = quickSortDescend(pricesArr, 0, pricesArr.length - 1)
}

const getPricesArr = (products) => {
    const pricesArr = [];

    for (let i = 0; i < products.length; i++) {
        pricesArr.push(products[i].price[0]);
    }
    return pricesArr;
}

/************************/

export { sortByPriceAsc, sortByPriceDesc }