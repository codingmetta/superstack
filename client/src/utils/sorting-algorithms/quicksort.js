function swap(items, leftIndex, rightIndex) {
    let temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}

const partitionAscending = (items, left, right) => {
    let pivotElement = items[Math.floor((right + left) / 2)];
    let i = left;
    let j = right;

    while (i <= j) {
        while (items[i] < pivotElement) {
            i++;
        }
        while (items[j] > pivotElement) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j);
            i++;
            j--;
        }
    }
    return i;
}
const partitionDescending = (items, left, right) => {
    let pivotElement = items[Math.floor((right + left) / 2)];
    let i = left;
    let j = right;

    while (i <= j) {
        while (items[i] > pivotElement) {
            i++;
        }
        while (items[j] < pivotElement) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j);
            i++;
            j--;
        }
    }
    return i;
}


const quickSortAscend = (items, left, right) => {
    let index;
    if (items.length > 1) {
        index = partitionAscending(items, left, right);
        if (left < index - 1) {
            quickSortAscend(items, left, index - 1);
        }
        if (index < right) {
            quickSortAscend(items, index, right);
        }
    }
    return items;
}

const quickSortDescend = (items, left, right) => {
    let index;
    if (items.length > 1) {
        index = partitionDescending(items, left, right);
        if (left < index - 1) {
            quickSortDescend(items, left, index - 1);
        }
        if (index < right) {
            quickSortDescend(items, index, right);
        }
    }
    return items;
}

const getPricesArr = (products) => {
    const pricesArr = [];

    for (let i = 0; i < products.length; i++) {
        pricesArr.push(products[i].price[0]);
    }
    return pricesArr;
}


/************************/


const qsPriceAscending = (products) => {
    const pricesArr = getPricesArr(products);
    const ascendingItems = quickSortAscend(pricesArr, 0, pricesArr.length - 1)
    return ascendingItems;
}
const qsPriceDescending = (products) => {
    const pricesArr = getPricesArr(products);
    const descendingItems = quickSortDescend(pricesArr, 0, pricesArr.length - 1)
    return descendingItems;

}



/************************/



export { qsPriceAscending, qsPriceDescending }