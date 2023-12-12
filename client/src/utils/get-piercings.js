
const getByCategory = (products, categoryString) => {
    return products.filter((product) => {
        return (
            Object.values(product.cat)
                .join("")
                .toLowerCase()
                .includes(categoryString)
        )
    });
} 

export { getByCategory }