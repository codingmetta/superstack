function filterData(products, searchInput) {
    const data = products.filter((product) => {
        return (
            Object.values(product)
                .join("")
                .toLowerCase()
                .includes(searchInput.toLowerCase())
        )
    });
    return data;
}

export { filterData }